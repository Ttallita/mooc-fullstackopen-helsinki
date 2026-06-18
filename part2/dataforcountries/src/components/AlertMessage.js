const AlertMessage = ({message}) => {
    if (message === null)
        return <></>

    return (
        <div>{message}</div>
    )
}

export default AlertMessage