import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import PropTypes from 'prop-types'

const AddCategory = ( { setcategories } ) => { //props llega como argumento props.setcategories
    const [inputValue, setinputValue] = useState("")

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => { //Se ejecuta al presionar enter dentro del input
        e.preventDefault();

        if ( inputValue.length > 2 ) { //Validación
            setcategories( cats => [ inputValue, ...cats ] );
            setinputValue('');
        }
    }

  return (
    <form onSubmit={ handleSubmit }>
        <div className='relative'>
            <input
                className="input-addCategory input-addCategory-focus"
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                placeholder="Buscar imágenes gif"
            />
            <button className='center-v absolute btn-addCategory'><FaSearch/></button>
        </div>
    </form>
  )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}

export default AddCategory