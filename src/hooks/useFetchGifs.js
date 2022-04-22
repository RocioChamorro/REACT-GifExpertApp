import React, { useEffect } from 'react' //La importación de React es necesario solo cuando se retorna JSX
import { useState } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        console.log("useEfect")
        getGifs(category).then(imgs => {

            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                });
            }, 3000);

        });

    }, [category])

    return state; // { data:[], loading: true};

}