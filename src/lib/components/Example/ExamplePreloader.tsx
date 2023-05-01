"use client";

import {useRef} from "react";
import {store} from "@/store";
import {setListOfNames} from "@/store/exampleSlice";
import {ExampleData} from "@/types";

interface props {
    listOfNames: ExampleData[]
}

// Function to load initial data on the client side.
export default function ExampleDataPreloader({listOfNames}:props){
    const loaded = useRef(false);
    if(!loaded.current){
        store.dispatch(setListOfNames(listOfNames))
        loaded.current = true
    }
    return null;
}