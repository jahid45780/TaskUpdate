import  taskReducer  from '@/features/task/taskSlice';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    todo:taskReducer
  },
})

// 🧠 Redux store এর টাইপ
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;