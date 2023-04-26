import { useState } from 'react';
import Item06 from './Item06';

const App = () => {

    // state

    const INIT_OBJ = {
        value: 1000,
        array: [1, 2, 3],
        object: { a: 1, b: 2 }
    }

    const [state, updateState] = useState(INIT_OBJ);

    const update = (val) => {

        switch (val) {
            case 0:
                updateState(() => {
                    let val = state.value
                    val += 1000
                    return ({
                        ...state,
                        value: val
                    })
                })
                break;
            case 1:
                // zmiana wartości array w state   
                updateState(() => {
                    let arr = state.array
                    for (let i = 0; i < arr.length; i++) {
                        arr[i] += 1
                    }
                    return ({
                        ...state,
                        array: arr
                    })
                })
                break;
            case 2:
                // zmiana wartości object w state  
                updateState(() => {
                    let obj = state.object
                    obj.a++
                    obj.b++
                    
                    console.log(obj)
                    return ({
                        ...state,
                        object: obj
                    })
                })
                break;
            default:
                break;
        }
    }

    return (
        <>
            <button onClick={() => update(0)}>change value</button>
            <button onClick={() => update(1)}>change array</button>
            <button onClick={() => update(2)}>change object</button>
            <Item06 data={state.value} />
            <Item06 data={JSON.stringify(state.array)} />
            <Item06 data={JSON.stringify(state.object)} />
        </>
    );
}

export default App

