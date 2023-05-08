import {useQuery} from 'react-query';
import {fetchData} from "../api";

export const useFatchCats = () => {
    const url = 'https://catfact.ninja/fact';

    const {data, isLoading, error} = useQuery('fetchCats', () => fetchData(url));
    return {data: data?.data || {}, isLoading, error};
    // const formattedData = format(data);
    // return formattedData;
};