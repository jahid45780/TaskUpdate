import type { RootState } from "@/redux/store";
import type { ITask } from "@/types/taskInterface";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
import { removeUser } from "./UserSlice";


interface InitialState {
  tasks:ITask[];
  filter: "all" | "low" | "medium" | "high";
}
 
const initialState: InitialState = {
tasks:[
    {
  id: "1",
  title: "Complete project report",
  description: "Write and submit the final project report for the client.",
  dueDate: "2025-11-10",
  isComplete: false,
  priority: "high",
  AssignedTo:null,
}
],
filter:'all'
};

type DraftTask = Pick<ITask, "title" | "description"| "dueDate" | "priority" | "AssignedTo">;

const createTask = (taskData: DraftTask):ITask =>{

   return {
      id:nanoid(),
      isComplete:false,
      ...taskData,
      AssignedTo:taskData.AssignedTo?taskData.AssignedTo:null
   }
    
}

export const taskSlice = createSlice({

    name:'task',
    initialState,
    reducers:{
        addTask:(state, action:PayloadAction<DraftTask>)=>{

          const taskData = createTask(action.payload)
           state.tasks.push(taskData)
        },
        toggleCompleteState:(state, action:PayloadAction<string>)=>{
          console.log(action);
            state.tasks.forEach((task)=>
              task.id === action.payload ? 
              (task.isComplete = !task.isComplete): task
            )
        },
        deleteTask:(state, action:PayloadAction<string>)=>{

           state.tasks = state.tasks.filter((task)=> task.id !== action.payload )

        },
        updateFilter:(state,action:PayloadAction< "all" | "low" | "medium" | "high">)=>{
            state.filter = action.payload
        }
    },
    extraReducers:(builder)=>{
       builder.addCase(removeUser,(state,action)=>{
           state.tasks.forEach((task)=>
             task.AssignedTo === action.payload ? (task.AssignedTo=null):task
          )
       })
    }

})

export const selectTask = (state:RootState)=>{

  const filter  = state.todo.filter

  if(filter === 'low'){
     return state.todo.tasks.filter((task)=>task.priority ==="low")
  } else if (filter ==="medium"){
    return state.todo.tasks.filter((task)=>task.priority ==="medium")
  } else if  (filter ==="high"){
    return state.todo.tasks.filter((task)=>task.priority ==='high')
  } else {
        return state.todo.tasks
  }
  }


   
export const selectFilter = (state:RootState)=>{
    return state.todo.filter
}

export const {addTask, toggleCompleteState, deleteTask, updateFilter} = taskSlice.actions
export default taskSlice.reducer