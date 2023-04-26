import { useState } from 'react';
import Item04 from './Item04';

const App = () => {

    //wyjściowa tablica

    const INIT_LIST = [];

    // state

    const [list, setList] = useState(INIT_LIST)

    const addToEnd = () => {
        setList(() => {
            return [...list, Math.floor(Math.random() * 1000)] // nowa tablica z dodanym elementem na końcu
        })
    }

    const addToStart = () => {
        setList(() => {
            return [Math.floor(Math.random() * 1000), ...list] // nowa tablica z dodanym elementem na początku
        })
    }

    const delFirst = () => {
        setList(() => {
            return [...list.filter((item, i) => i !== 0)] // nowa przefiltrowana tablica
        })
    }

    const addFive = () => {
        setList(() => {
            return [...list, 5]
        })
    }

    const delLast = () => {
        setList(() => {
            let l = list.length - 1
            return [...list.filter((item, i) => i !== l)]
        })
    }

    const delAll = () => {
        setList(() => {
            return []
        })
    }

    return (
        <>
            <button onClick={() => addToEnd()}>dodaj na koniec</button>
            <button onClick={() => addToStart()}>dodaj na początek</button>
            <button onClick={() => addFive()}>dodaj 5</button>
            <button onClick={() => delFirst()}>usuń pierwszy</button>
            <button onClick={() => delLast()}>usuń ostatni</button>
            <button onClick={() => delAll()}>usuń wszystkie</button>


            {
                list.map((element) => {
                    return <Item04 val={element} />
                })
            }
        </>
    );
}

export default App