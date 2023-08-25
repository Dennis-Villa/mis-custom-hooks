
import { useEffect, useState } from "react"

export const useFetchCategories = ( urlCategories ) => {

    const [state, setState] = useState({
        categories: [],
        loading: true,
        error: null
    });

    useEffect(() => {
      fetch(urlCategories)
        .then( resp => resp.json())
        .then(data => {
            setState({
                categories: data,
                loading: false,
                error: null
            });
        })
        .catch( () => {
            setState({
                categories: [],
                loading: false,
                error: 'Error while loading categories'
            });
        });
    }, [urlCategories]);    

    return state;

}