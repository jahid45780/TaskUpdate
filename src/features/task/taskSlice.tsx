import type { RootState } from "@/redux/store";
import type { ITask } from "@/types/taskInterface";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface InitialState {
  tasks:ITask[];
  filter: "all" | "low" | "medium" | "high";
}
 
const initialState: InitialState = {
tasks:[],
filter:'all'
};

export const taskSlice = createSlice({

    name:'task',
    initialState,
    reducers:{
        addTask:(state, action:PayloadAction<ITask>)=>{

          const id  = uuidv4();

          const taskData = {
            ...action.payload,
            id,
            isComplete:false
          }

            state.tasks.push(taskData)
        }
    }

})

export const selectTask = (state:RootState)=>{
    return state.todo.tasks
}

export const selectFilter = (state:RootState)=>{
    return state.todo.filter
}

export const {addTask} = taskSlice.actions
export default taskSlice.reducer