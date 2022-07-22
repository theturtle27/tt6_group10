import './TransactionPopUp.css'

const TransactionPopUp = (data) => {
    
    console.log("test");

    return (
        <div className = 'Transaction-Form-Pop-Up-Container'>
            <h1>Transaction Form:</h1>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>Base Currency:</td>
                            <td>{data.exchangeCurrencyData[0].exchangeCurrency}</td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default TransactionPopUp