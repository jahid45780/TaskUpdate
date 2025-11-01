
import { useDispatch, useSelector, type TypedUseSelectorHook, } from "react-redux";
import type { AppDispatch, RootState } from "./store";


// এখন থেকে useDispatch এবং useSelector টাইপড হয়ে গেল 😎
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;