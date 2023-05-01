import {AppDispatch} from "@/store";
import {useDispatch} from "react-redux";

// Set up dispatch with AppDispatch type
export const useAppDispatch: () => AppDispatch = useDispatch;