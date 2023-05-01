import { useState, useEffect } from 'react'

export const useAppData = () => {
    const blankData = {
      initalData: [
        { id: 1, title: 'Identify requirements', price: 6, selected: false },
        { id: 2, title: 'Request a quotation', price: 3, selected: false },
        { id: 3, title: 'Find products', price: 16, selected: false },
        { id: 4, title: 'Raise an order', price: 6, selected: false },
        { id: 5, title: 'Authorise sale', price: 21.55, selected: false },
        { id: 6, title: 'Pay provider', price: 13, selected: false },
        { id: 7, title: 'Deliver product', price: 4.30, selected: false },
        { id: 8, title: 'Invoice check', price: 6, selected: false },
        { id: 9, title: 'Place order', price: 6.50, selected: false },
      ],
      questions: [
        { id: 1, question: 'What is your approximate annual Spend on industrial items?', value: ""},
        { id: 2, question: 'Approximately how many unique purchase orders are raised per annum for these items?', value: ""},
        { id: 3, question: 'Approximately how many suppliers are you using for industrial supplies?', value: ""},
      ],
      total: 0,
      slideIndex: 1,
      questionSelected: 0
    };

    const userInitialState = localStorage.appData ? JSON.parse(localStorage.appData) : blankData;
    const [appData, setAppData] = useState(userInitialState);
    
    useEffect(() => {
      localStorage.setItem("appData", JSON.stringify(appData));
    }, [appData]);
    
    const findPrice = (key) => {
      const find = appData.initalData.find((e)=> e.title === key)
      return Math.round((find?.selected ? find?.price: 0) * 100) / 100
    }

    const initialCal = {
      "Supplier & product" : 0,
      "Quotation to order process" : 0,
      "Expediting & receiving orders" : 0,
      "Processing invoices" : 0,
      "Paying suppliers" : 0,
    }

    const setRoundNum = e => {
        return Math.round(e * 100) / 100
    }
    
    initialCal['Supplier & product'] = setRoundNum( findPrice('Identify requirements') + findPrice('Request a quotation') * appData.questions[1].value )
    initialCal['Quotation to order process'] = setRoundNum((findPrice('Find products') + findPrice('Raise an order') + findPrice('Authorise sale') + findPrice('Pay provider')) * appData.questions[1].value)
    initialCal['Expediting & receiving orders'] = setRoundNum((findPrice('Deliver product')) * appData.questions[0].value)
    initialCal['Processing invoices'] = setRoundNum((findPrice('Invoice check')) * appData.questions[1].value)
    initialCal['Paying suppliers'] = setRoundNum((findPrice('Place order')) * appData.questions[2].value)
    
    let total = 0
    Object.keys(initialCal).forEach(e=> {
        total += initialCal[e]
    })
    
    const computed = {
      titles: initialCal,
      finalTotal: setRoundNum(total)
    }

    const resetData = () => {
      setAppData(blankData)
    }

    return { ...appData, setAppData, computed, resetData }
}
