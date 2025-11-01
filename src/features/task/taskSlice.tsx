import type { RootState } from "@/redux/store";
import type { ITask } from "@/types/taskInterface";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks:ITask[];
  filter: "all" | "low" | "medium" | "high";
}
 
const initialState: InitialState = {
tasks:[
    {
  id: "task-001",
  title: "Complete React Project",
  description: "Finish building the task management app using React and Redux Toolkit.",
  dueDate: "2025-11-05",
  isComplete: false,
  priority: "medium", 
    }
],
filter:'all'
};

export const taskSlice = createSlice({

    name:'task',
    initialState,
    reducers:{

    }

})

export const selectTask = (state:RootState)=>{
    return state.todo.tasks
}

export const selectFilter = (state:RootState)=>{
    return state.todo.filter
}
export default taskSlice.reducer