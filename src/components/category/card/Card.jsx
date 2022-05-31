import React from 'react'

const Card = ({ data }) => {
    return (
        <div className='category-card'>
            <div className="image-container">
                <img src={data.image} alt="" />
            </div>
            <div className="details">

                {<h3>{data.title.length > 10 ? `${data.title.slice(0,10)}...`:data.title}</h3>}
                <h4>${data.price}</h4>
            </div>
        </div>
    )
}

export default Card