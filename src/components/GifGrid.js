import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GrifGridItem from './GrifGridItem';

const GifGrid = ( { category } ) => {

    const { data:images, loading } = useFetchGifs( category ); //data:images  Renombrando el nombre de la propiedad data a images

    // useEffect( () => {
    //     console.log("useEfect")
    //     getGifs(category).then( imgs => setImages( imgs ));
    // }, [ category ])//componentDimaunt //solo se ejecuta cuando el componente es reenderizado por 1era vez

    return (
        <>
            <h3 className="category-title animate__animated animate__fadeInDown">{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p>}
            
            <div className="card-container animate__animated animate__backInDown animate__delay-3s">
                {/* <ol>
                        {
                            images.map( ({ id, title }) => (
                                <li key={ id }>{ title }</li>
                            ))
                        }
                </ol> */}
                {
                    images.map( img  => (
                        <GrifGridItem
                            key={ img.id }
                            { ...img }  //Se envía cada una de las props independinte ejmp: props.title   o  img={ img } se envìa props.img
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid
