import { connect } from 'react-redux';
import { addTodo, getTodo } from '../redux/actions';
import { useEffect, useState } from 'react';
import { Box, Button, Grid, List, ListItem, ListItemText, TextField, Typography } from '@material-ui/core';

interface ITodosProps {
  addTodo: (payload: any) => void;
  getTodo: (payload?: any) => void;
  todos: [];
}

function Todos(props: ITodosProps): JSX.Element {
  const [text, setText] = useState('');
  const { getTodo, todos } = props;

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    getTodo();
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box mt={2} mb={2}>
          <Typography variant="h5">Redux Todos</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <form
          onSubmit={event => {
            event.preventDefault();
            props.addTodo(text);
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
                Create
              </Button>
            </Box>
          </Grid>
        </form>
      </Grid>

      <List dense={true}>
        {todos.length > 0 && (
          todos.map((text: string, index: any) => {
            return (
              <ListItem key={index}>
                <ListItemText>{text}</ListItemText>
              </ListItem>
            );
          })
        )}
      </List>
    </Grid>
  );
}

const mapStateToProps = (state: any) => {
  return {
    todos: state.todos.items,
  };
};

export default connect(
  mapStateToProps,
  { addTodo, getTodo },
)(Todos);