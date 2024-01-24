import { createContext, useEffect, useState } from "react";

export const DataContext = createContext({});

export const DataContextProvider = ({ children }) => {
    const [bestPrice, setBestPrice] = useState(null);
    const [tickers, setTickers] = useState([]);
    
    const fetchTickers = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/tickers`);
            const data = await response.json();
            setTickers(data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchTickers();
    }, [])

    useEffect(() => {
        const avg = tickers.reduce((sum, item) => sum + parseFloat(item.last), 0) / tickers.length;
        setBestPrice(avg.toFixed());
    }, [tickers])
    return (
        <DataContext.Provider value={{ tickers, setTickers, bestPrice, setBestPrice, fetchTickers }}>
            {children}
        </DataContext.Provider>
    )
}