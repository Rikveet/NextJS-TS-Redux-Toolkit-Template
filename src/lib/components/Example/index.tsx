'use client';
import {setSearch} from "@/store/exampleSlice";
import {useAppDispatch} from "@/lib/hooks/useAppDispatch";
import {useAppSelector} from "@/lib/hooks/useAppSelector";

interface props {

}

export default function ExampleClientComponent() {
    // function to update search parameter
    const dispatch = useAppDispatch();
    // get latest search parameter
    const {search, listOfNames} = useAppSelector((state) => state.example);

    return (
        <div>
            <h2>
                Example Slice Data
            </h2>
            <input type={'text'} value={search} onChange={(e) => dispatch(setSearch(e.target.value))} placeholder={'Name Search'}/>
            <ul style={{paddingLeft: '20px'}}>
                {/*use the store to render latest component*/}
                {listOfNames.filter((person) => !search || person.name.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim())).map((person, index) => (
                    <li key={`${person.name} ${index}`}>
                        {person.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}