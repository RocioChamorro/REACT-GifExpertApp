import React from 'react'

const GrifGridItem = ({ id, title, url }) => {
  return (
    <div className="card">
        <img className="card-img" src={ url } alt={ title } />
        <div className="card-info">
            <p className="card-title"> { title } </p>
        </div>
    </div>
  )
}

export default GrifGridItem