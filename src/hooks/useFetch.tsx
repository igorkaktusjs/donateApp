import { useState, useEffect } from "react";

import { UseFetchOptions, UseFetchResult } from "../interfaces/api/useFetchInterfaces";

const useFetch = (url: string, options: UseFetchOptions = {}): UseFetchResult => {

    const [data, setData] = useState<[] | null>(null);
    const [loading, setLoading] =  useState<boolean>(false);
    const [error, setError] = useState<string>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try{
            const response = await fetch(url, options);

            if(!response.ok) {
                throw new Error('Somithing wrong')
            } 
            const result = await response.json();
                setData(result);

        } catch(err) {
            setError(err.message)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { data, loading, error}; 

}

export default useFetch;