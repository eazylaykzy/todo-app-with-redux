import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import
{Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Checkbox}
	from '@material-ui/core';
import {connect} from "react-redux";
import {completedTodo, todoToRemove} from "../redux/actions/action-creator";

const StyledTableCell = withStyles(theme => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 24,
	},
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default,
		},
	},
}))(TableRow);

const useStyles = makeStyles({
	table: {
		minWidth: 500,
	},
});

const TodoTable = ({todos, completedTodo, todoToRemove}) => {
	const classes = useStyles();
	const completeTodo = {
		color: '#d9d9d9',
		textDecoration: 'line-through',
		cursor: 'default'
	};

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell>Descriptions</StyledTableCell>
						<StyledTableCell align="right">Status</StyledTableCell>
						<StyledTableCell align="right">Remove</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{todos.map(todo => (
						<StyledTableRow key={todo.id}>
							<StyledTableCell
								style={todo.completed ? completeTodo : null}
								component="th" scope="row">
								{todo.description}
							</StyledTableCell>
							<StyledTableCell align="right">
								<Checkbox
									checked={todo.completed}
									onClick={() => completedTodo(todo.id)}
									color="default"
									value="default"
									inputProps={{'aria-label': 'checkbox with default color'}}
								/>
							</StyledTableCell>
							<StyledTableCell align="right">
								<IconButton
									onClick={() => todoToRemove(todo.id)}
									color="secondary"
									aria-label="delete">
									<DeleteIcon/>
								</IconButton>
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

const mapStateToProps = state => ({todos: state.todos});

const mapDispatchToProps = dispatch => ({
	completedTodo: todoId => dispatch(completedTodo(todoId)),
	todoToRemove: todoId => dispatch(todoToRemove(todoId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoTable);