import styles from './page.module.css'
import {store} from "@/store";
import {setListOfNames} from "@/store/exampleSlice";

export default function Home() {
    // only set on server side
    store.dispatch(setListOfNames(['Dmitri Rhode', 'John Doe', 'Jair Alodia', 'Ragemprand Nace', 'Nikki Kalie', 'Siena Ali'].map(value => ({name: value}))))
    return (
        <main className={styles.main}>
            <h1>
                PURE SSR
            </h1>
            <div>
                <h2>
                    Example Slice Data
                </h2>
                <ul style={{paddingLeft: '20px'}}>
                    {store.getState().example.listOfNames.map((person, index) => (
                        <li key={`${person.name} ${index}`}>
                            {person.name}
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}
