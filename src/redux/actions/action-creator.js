import * as TYPE from "../constants/action-types";

export const addTodo = (payload) => ({type: TYPE.ADD_TODO, payload});
export const todoToRemove = (payload) => ({type: TYPE.REMOVE_TODO, payload});
export const completedTodo = (payload) => ({type: TYPE.COMPLETED_TODO, payload});