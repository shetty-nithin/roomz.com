import { makeRequest } from "../axios.js";
const { useState, useEffect } = require("react");


const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); 
            
            try {
                const res = await makeRequest.get(url);
                setData(res.data);
            } catch (err) {
               setError(err);

            }
            setLoading(false);
        }
        fetchData();
    }, [url]);


    const refetchData = async () => {
        setLoading(true);

        try {
            const res = await makeRequest.get(url);
            setData(res.data);
        } catch (err) {
            setError(err);
        }

        setLoading(false);
    }
    
    return {data, loading, error, refetchData};
};

export default useFetch;