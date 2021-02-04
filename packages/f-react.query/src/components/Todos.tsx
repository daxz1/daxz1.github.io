import { connect } from "react-redux";
import { addTodo, getTodo } from '../redux/actions';
import { useEffect, useState } from 'react';
import { Box, Button, Grid, TextField } from '@material-ui/core';

interface ITodosProps {
  addTodo: (payload:any) => void;
  getTodo: (payload?:any) => void;
  todos: [];
}

function Todos(props:ITodosProps):JSX.Element {
  const [text, setText] = useState('');
  useEffect(() => {
    props.getTodo();
  }, [])

  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault()
          props.addTodo(text);
        }}
      >
        <TextField
          id="text"
          label="Add Todo"
          onChange={event => setText(event.target.value)}
        />
        <Grid item xs={12}>
          <Box mt={2} mb={2}>
            <Button variant="contained" color="primary" type="submit">
              Create
            </Button>
          </Box>
        </Grid>
      </form>

      <ul>
      {props.todos.length > 0 && (
        props.todos.map((todo:string, index:any) => {
          return <li key={index}>{todo}</li>
        })
      )}
      </ul>
    </div>
  )
}

const mapStateToProps = (state:any) => {
  return {
    todos: state.todos.items
  };
};

export default connect(
  mapStateToProps,
  { addTodo, getTodo }
)(Todos);