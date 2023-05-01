import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ExampleData} from "@/types";

export interface ExampleState {
    search: string,
    listOfNames: ExampleData[]
}

const initialState: ExampleState = {
    search: '',
    listOfNames: []
}

const exampleSlice = createSlice({
        name: "search",
        initialState,
        reducers: {
            setSearch: (state, action: PayloadAction<string>) => {
                state.search = action.payload
            },
            setListOfNames: (state, action: PayloadAction<ExampleData[]>) => {
                state.listOfNames = action.payload
            }
        }
    }
)

export const {setSearch, setListOfNames} = exampleSlice.actions
export default exampleSlice.reducer