const Item05 = (props) => {

    // wywołanie funkcji rodzica

    const deleteItem = () => {
        props.delSelected(props.index)

    }

    return (
        <>
        <h1>{props.val}</h1>
        <button onClick={deleteItem}>delete item</button>
        </>
    )
}

export default Item05