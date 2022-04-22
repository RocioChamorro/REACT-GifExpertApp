import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'
function GifExpertApp() {
    const [ categories, setcategories ] = useState(["overwatch"])

    // function handledAdd() {
    //     // setcategories(categories.concat(["jeje"]))
    //     //setcategories([...categories, "jej"])
    //     //setcategories( cats => [...categories, "jej"] ); //el 1er elemento "cats" es el valor del estado anterior luego "=>" tiene que regresar el nuevo estado
    // }

    return(
        <>
            <h2 className="gifExpertApp-title">GifExpertApp</h2>
            <AddCategory setcategories={ setcategories }/>
            <hr />
            {/* <button onClick={()=>handledAdd()}>Agregar</button> */}
            {/* onClick={ handledAdd } */}
            <ol>
            {

                categories.map((category, i)=> ( //return implíicito cuando no hay llaves
                    <GifGrid
                        key={ category }
                        category={ category }
                    />
                ))

            }
            </ol>
        </>
    )
}

export default GifExpertApp