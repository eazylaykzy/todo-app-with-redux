import React, {useState} from 'react';
import {TextField, Fab} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {makeStyles} from "@material-ui/core/styles";
import {connect} from 'react-redux';

import TodoTable from "./components/TodoTable";
import {addTodo} from "./redux/actions/action-creator";

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
      marginBottom: '10%',
      marginTop: '10%',
		},
	},
}));

const App = ({addTodo}) => {
	const [initTodo, setTodo] = useState({
		id: 0,
		description: '',
		completed: false
	});

	let {description, completed, id} = initTodo;
	const handleSubmit = e => {
		e.preventDefault();
		id = Math.floor(Math.random() * Math.floor(100));
		addTodo({description, completed, id});
		setTodo({
			id,
			description: '',
			completed: false
		})
	};

	const handleChange = e => {
		const {name, value} = e.target;
		setTodo({...initTodo, [name]: value});
	};

	const classes = useStyles();

	return (
		<div style={{textAlign: 'center'}}>
			<div style={{display: 'inline-block'}}>
				<form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
					<TextField
						onChange={handleChange}
						value={description}
						name='description'
						id="outlined-basic"
						label="Todo"
						variant="outlined"/>
          <Fab onClick={handleSubmit} color="primary" aria-label="add" className={classes.margin}>
            <AddIcon />
          </Fab>
				</form>
				<TodoTable/>
			</div>
		</div>
	)
};

const mapDispatchToProps = dispatch => ({
	addTodo: todoList => dispatch(addTodo(todoList))
});

export default connect(null, mapDispatchToProps)(App);
