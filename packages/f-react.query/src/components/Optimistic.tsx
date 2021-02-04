import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useState } from 'react';
import { Box, Button, Grid, List, ListItem, ListItemText, TextField, Typography } from '@material-ui/core';

interface ITodos {
  items: readonly {
    text: string
  }[]
  ts: number
}

export default function Optimistic(): JSX.Element {
  const queryClient = useQueryClient();
  const [text, setText] = useState('');

  const { status, data, isFetching } = useQuery('todos', async (): Promise<ITodos> => {
    const response = await fetch('http://localhost:3001/api/todos');
    if (!response.ok) {
      throw new Error('Fetch Error');
    }
    return await response.json();
  });

  const addTodoMutation = useMutation(
    async (text) => await fetch('http://localhost:3001/api/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        text: text,
      }),
    }),
    {
      onMutate: async (text: string) => {
        setText('');
        /**
         * The cancelQueries method can be used to cancel outgoing queries based on their query
         * keys or any other functionally accessible property/state of the query.
         * This is most useful when performing optimistic updates since you will likely
         * need to cancel any outgoing query refetches so they don't clobber your optimistic
         * update when they resolve.
         */
        await queryClient.cancelQueries('todos');
        /**
         * getQueryData is a synchronous function that can be used to get
         * an existing query's cached data. If the query does not exist,
         * undefined will be returned.
         */
        const previousValue = queryClient.getQueryData<ITodos>('todos');

        /**
         * setQueryData is a synchronous function that can be used to immediately
         * update a query's cached data. If the query does not exist,
         * it will be created. If the query is not utilized
         * by a query hook in the default cacheTime of 5 minutes,
         * the query will be garbage collected.
         */
        queryClient.setQueryData('todos', (old) => ({
          // @ts-ignore
          ...old,
          items: [...old.items, text],
        }));

        return previousValue;
      },
      onError: (err, variables, previousValue) => {
        // If the mutation fails, use the context returned from onMutate to roll back
        if (previousValue) {
          queryClient.setQueryData<ITodos>('todos', previousValue);
        }
      },
      onSuccess: () => {
        // Only re-fetch if server returns success
        queryClient.invalidateQueries('todos');
      },
      onSettled: () => {
        // Or we could re-fetch regardless if server fails or succeeds
      },
    },
  );

  if (status === 'loading') {
    return <p>Loading</p>;
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box mt={2} mb={2}>
          <Typography variant="h5">Query Todos</Typography>
          {data && (
            <>
              <small>Updated At: {new Date(data.ts).toLocaleTimeString()}</small>
              <small>{isFetching ? ' Updating in background...' : ' '}</small>
            </>
          )}
        </Box>
      </Grid>
      <Grid item xs={12}>
        <form
          onSubmit={event => {
            event.preventDefault();
            addTodoMutation.mutate(text);
          }}
        >
          <Grid item xs={12}>
            <TextField
              id="text"
              label="Add Todo"
              onChange={event => setText(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Box mt={2} mb={2}>
              <Button variant="contained" color="primary" type="submit">
                {addTodoMutation.isLoading ? 'Creating...' : 'Create'}
              </Button>
            </Box>
          </Grid>
        </form>
      </Grid>

      {data && (
        <List dense={true}>
          {data.items.map((text: any, index: number) => {
            return (
              <ListItem key={index}>
                <ListItemText>{text}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      )}
    </Grid>
  );
}