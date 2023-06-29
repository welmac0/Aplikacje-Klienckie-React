import { useState } from "react";
import Item03 from "./Item03";

const App = () => {
    // visible - wartość do zmieniania za pomocą useState()
    // setVisible - funkcja dokonująca zmiany
    // true - początkowa wartość visible

    const [visible, setVisible] = useState(true)

    const setVis = (val) => {
        setVisible(val)
    }

    return (
        <>
            <button onClick={() => setVis(true)}>visible</button>
            <button onClick={() => setVis(false)}>invisible</button>
            <Item03 visible={visible} />
        </>
    )
}

export default App