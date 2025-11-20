import  taskReducer  from '@/features/task/taskSlice';
import  userReducer from '@/features/task/UserSlice';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    todo:taskReducer,
    user:userReducer
  },
})

// 🧠 Redux store এর টাইপ
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;