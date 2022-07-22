import React, { useState, useEffect } from 'react';
import './ExchangePage.css'
import axios from 'axios';

const PracticePage = () => {

    const [hasData, setHasData] = useState(true);
    const [apiData, setApiData] = useState([]);
    const [popupStatus, setPopupStatus] = useState(false);
	const [walletData, setWalletData] = useState([]);
	const [transactionData, setTransactionData] = useState([]);
    const [exchangeAmount, setExchangeAmount] = useState("");

    const mockData = [
        {
          "id": 1,
          "base_currency": "SGD",
          "exchange_currency": "CAD",
          "rate": 0.9255
        },
        {
          "id": 2,
          "base_currency": "SGD",
          "exchange_currency": "CNH",
          "rate": 4.7868
        },
        {
          "id": 3,
          "base_currency": "SGD",
          "exchange_currency": "EUR",
          "rate": 0.7086
        },
        {
          "id": 4,
          "base_currency": "SGD",
          "exchange_currency": "HKD",
          "rate": 5.5830
        },
        {
          "id": 5,
          "base_currency": "SGD",
          "exchange_currency": "JPY",
          "rate": 97.5303
        },
        {
          "id": 6,
          "base_currency": "SGD",
          "exchange_currency": "NZD",
          "rate": 1.1612
        },
        {
          "id": 7,
          "base_currency": "SGD",
          "exchange_currency": "NOK",
          "rate": 7.2912
        },
        {
          "id": 8,
          "base_currency": "SGD",
          "exchange_currency": "GBP",
          "rate": 0.5974
        },
        {
          "id": 9,
          "base_currency": "SGD",
          "exchange_currency": "SEK",
          "rate": 7.5168
        },
        {
          "id": 10,
          "base_currency": "SGD",
          "exchange_currency": "THB",
          "rate": 25.7275
        },
        {
          "id": 11,
          "base_currency": "SGD",
          "exchange_currency": "USD",
          "rate": 0.7113
        }
    ];

	const mockWalletData = [
		{
		  "id": 1,
		  "wallet_id": 1,
		  "currency": "SGD",
		  "amount": 4294.50
		},
		{
		  "id": 2,
		  "wallet_id": 1,
		  "currency": "CAD",
		  "amount": 5687.65
		},
		{
		  "id": 3,
		  "wallet_id": 1,
		  "currency": "CNH",
		  "amount": 6063.14
		},
		{
		  "id": 4,
		  "wallet_id": 1,
		  "currency": "EUR",
		  "amount": 8089.82
		},
		{
		  "id": 5,
		  "wallet_id": 1,
		  "currency": "HKD",
		  "amount": 7862.36
		},
		{
		  "id": 6,
		  "wallet_id": 1,
		  "currency": "JPY",
		  "amount": 5759.15
		},
		{
		  "id": 7,
		  "wallet_id": 1,
		  "currency": "NZD",
		  "amount": 6943.26
		},
		{
		  "id": 8,
		  "wallet_id": 1,
		  "currency": "NOK",
		  "amount": 4038.10
		},
		{
		  "id": 9,
		  "wallet_id": 1,
		  "currency": "GBP",
		  "amount": 8287.33
		},
		{
		  "id": 10,
		  "wallet_id": 1,
		  "currency": "SEK",
		  "amount": 5126.40
		},
		{
		  "id": 11,
		  "wallet_id": 1,
		  "currency": "THB",
		  "amount": 147.62
		},
		{
		  "id": 12,
		  "wallet_id": 1,
		  "currency": "USD",
		  "amount": 7331.77
		}
	]

    useEffect(() => {
        //fetch API data
        setApiData(mockData);
		setWalletData(mockWalletData);
    }, [])
      
    const handleBuy = (e) => {
		setTransactionData([
			{
				exchangeCurrency: e.target.value.split(",")[0],
				operation: e.target.value.split(",")[1],
                rate: e.target.value.split(",")[2]
			}
		]);
        setPopupStatus(true);
    }

    const amountOnChange = (e) => {
        setExchangeAmount(e.target.value);
    }

    const submitTransaction = (e) => {
        e.preventDefault();
        if(transactionData[0].operation === 'Buy'){
            /* axios.post('http://localhost:8080', {
                base_currency: "SGD",
                exchange_currency: transactionData[0].exchangeCurrency,
                rate: transactionData[0].rate,
                amount: exchangeAmount
            }).then((res) => {
                console.log(res);
            }).catch((error) => {
                console.log(error);
            }); */
            console.log("Buy");
        }
        else if(transactionData[0].operation === 'Sell'){
            /* axios.post('http://localhost:8080', {
                base_currency: "SGD",
                exchange_currency: transactionData[0].exchangeCurrency,
                rate: transactionData[0].rate,
                amount: exchangeAmount
            }).then((res) => {
                console.log(res);
            }).catch((error) => {
                console.log(error);
            }); */
            console.log("Sell");
        }
    }

    const cancelTransaction = (e) => {
        e.preventDefault();
        setExchangeAmount("");
    }

    return (
		<div className = 'Exchange-Page-Main-Container'>
			<div className = 'Exchange-Page-Currency-Display'>
				{
					hasData ? 
					<table>
						<tbody>
							<tr>
								<td>Base Currency</td>
								<td>Exchange Currency</td>
								<td>Exchange Rate (Amount)</td>
								<td>Buy</td>
								<td>Sell</td>
							</tr>
							{apiData.map((currency) => (
								<tr key = {currency.id}>
									<td>{currency.base_currency}</td>
									<td>{currency.exchange_currency}</td>
									<td>{currency.rate}</td>
									<td><button onClick = {handleBuy} value ={[currency.exchange_currency, "Buy", currency.rate]}>Buy</button></td>
									<td><button onClick = {handleBuy} value ={[currency.exchange_currency, "Sell", currency.rate]}>Sell</button></td>
								</tr>
							))}
						</tbody>
					</table> : 
					<p>null</p>
				}
			</div>
            <div className = 'Exchange-Page-Transaction-Display'>
                {
                    popupStatus ? 
                    <div>
                        <h1>{transactionData[0].operation} Currency: {transactionData[0].exchangeCurrency}</h1>
                        <form onSubmit = {submitTransaction}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>{transactionData[0].operation}ing Currency:</td>
                                        <td name = 'currencyType'>{transactionData[0].exchangeCurrency}</td>
                                    </tr>
                                    <tr>
                                        <td>Exchange Rate:</td>
                                        <td>{transactionData[0].rate}</td>
                                    </tr>
                                    <tr>
                                        <td>Amount You Wish To Buy (SGD):</td>
                                        <td><input onChange = {amountOnChange} type = 'number'name = 'transactionAmount'></input></td>
                                    </tr>
                                    <tr>
                                        <td>Amount You Will Get ({transactionData[0].exchangeCurrency}):</td>
                                        <td>{eval(exchangeAmount / transactionData[0].rate).toString()}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button type = 'submit'>Confirm</button>
                            <button onClick = {cancelTransaction}>Cancel</button>
                        </form>
                    </div> : null
                }
            </div>
		</div>
    )
}

export default PracticePage;