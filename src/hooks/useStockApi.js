import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const ALPHA_VANTAGE_QUERY_URL = 'https://www.alphavantage.co/query?';

export const useStockApi = () => {
  const [requestError, setRequestError] = useState('');

  useEffect(() => {
    if (requestError) {
      console.error(requestError);
    }
  }, [requestError]);

  const getSingleStockQuote = useCallback(async (symbol) => {
    try {
      setRequestError('');
      const res = await axios.get(`${ALPHA_VANTAGE_QUERY_URL}function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.REACT_APP_VANTAGE_API_KEY}`);
      return res.data['Global Quote'];
    } catch (e) {
      setRequestError(e.message);
    }
  }, [setRequestError]);

  const getSearchResults = useCallback(async (keyword) => {
    try {
      setRequestError('');
      const res = await axios.get(`${ALPHA_VANTAGE_QUERY_URL}function=SYMBOL_SEARCH&keyword=${keyword}&apikey=${process.env.REACT_APP_VANTAGE_API_KEY}`);
      return res.data.bestMatches;
    } catch (e) {
      setRequestError(e.message);
    }
  }, []);

  return {
    getSingleStockQuote,
    getSearchResults
  };
};
