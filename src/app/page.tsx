import styles from './page.module.css'
import ExampleClientComponent from "@/lib/components/Example";
import ExampleDataPreloader from "@/lib/components/Example/ExamplePreloader";

export default function Home() {
    // initial data from the server.
    const listOfNames = ['Dmitri Rhode', 'John Doe', 'Jair Alodia', 'Ragemprand Nace', 'Nikki Kalie', 'Siena Ali'].map(value => ({name: value}));
    return (
        <main className={styles.main}>
            <h1>
                REDUX WITH CLIENT SIDE COMPONENTS
            </h1>
            {/*Serialize data so that the data is loaded for the client store.*/}
            <ExampleDataPreloader {...{listOfNames}}/>
            {/*Client side component*/}
            <ExampleClientComponent/>
        </main>
    )
}
