import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "@/store";

// Set up the selector with the app store type.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;