
import { useEffect, useRef, useState } from "react"

export const useFetch = ( url, category = '' ) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(() => {
      return () => {
        isMounted.current = false;
      }
    }, []);
    

    useEffect(() => {
        setState({data: null, loading: true, error: null});

        fetch(`${url}${category}`)
            .then( resp => resp.json())
            .then( data => {

                    if(isMounted.current){
                        setState({
                            data: data,
                            loading: false,
                            error: null
                        })
                    } else {
                        console.log('setState no se llamo');
                    }

            })
            .catch( ()=> {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                });
            });

    }, [url, category]);
    
    return state;

}
