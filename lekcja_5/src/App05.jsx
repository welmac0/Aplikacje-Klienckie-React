import { useState } from 'react';
import Item05 from './Item05';

const App = () => {

    //wyjściowa tablica

    const INIT_LIST = [];

    //state

    const [list, setList] = useState(INIT_LIST)


    const delSelected = (val) => {
        let x = val
        setList(() => {
            return [...list.filter((item, i) => i !== x)]
        })
    }

    const delAll = () => {
        setList(() => {
            return []
        })
    }

    const addToStart = () => {
        setList(() => {
            return [Math.floor(Math.random() * 1000), ...list] // nowa tablica z dodanym elementem na początku
        })
    }

    const addToEnd = () => {
        setList(() => {
            return [...list, Math.floor(Math.random() * 1000)] // nowa tablica z dodanym elementem na końcu
        })
    }


    return (
        <>
            <button onClick={() => addToEnd()}>dodaj na koniec</button>
            <button onClick={() => addToStart()}>dodaj na początek</button>
            <button onClick={() => delAll()}>usuń wszystkie</button>

            {
                list.map((element, i) => {
                    return <Item05 val={element} index={i} delSelected={delSelected} />
                })

            }
        </>
    )
}

export default App