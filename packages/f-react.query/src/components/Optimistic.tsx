// @ts-nocheck
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useState } from 'react';

export default function Optimistic():JSX.Element {

  const queryClient = useQueryClient();
  const [text, setText] = useState('');

  const { status, data, isFetching } = useQuery('todos', async () => {
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
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        text: text
      })
    }),
    {
      onMutate: async text => {
        setText('')
        await queryClient.cancelQueries('todos');
        const previousValue = queryClient.getQueryData('todos');
        queryClient.setQueryData('todos', old => ({
          ...old,
          items: [...old.items, text]
        }));

        return previousValue;
      },
      onError: (err, variables, previousValue) => {
        queryClient.setQueryData('todos', previousValue);
      },
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      }
    }
  );

  if (status === 'loading') {
    return <p>Loading</p>
  }

  return (
    <>
    <form
      onSubmit={e => {
        e.preventDefault();
        addTodoMutation.mutate(text)
      }}
    >
      <input
        type='text'
        onChange={event => setText(event.target.value)}
      />
      <button>{addTodoMutation.isLoading? 'Creating...' : 'Create'}</button>
    </form>
    {data && (
      <div>
        <div>Updated At: {new Date(data.ts).toLocaleTimeString()}</div>
        <ul>
          {data.items.map(datum => (
            <li key={datum}>{datum}</li>
          ))}
        </ul>
        <div>{isFetching ? 'Updating in background...' : ' '}</div>
      </div>
    )}
    </>
  )
}