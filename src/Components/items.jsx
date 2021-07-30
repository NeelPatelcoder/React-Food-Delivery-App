import React from 'react'

import img from'../Tea.jpg'

const items = (props) => {
    return (
        <>
        <section  className='main-card--cointainer'>
        {props.menuData.map((item) => {
            return(
                <>
                <div key={item.id} className='card-container'>
                <div className='card'>
                    <div className='card-body'>
                        <span className='card-number card-circle subtle'>{item.id}</span>
                        <span className='card-author subtle'>{item.catagory}</span>
                        <h2 className="card-title">{item.name}</h2>
                        <span className="card-description subtle">
                            {item.description}
                        </span>
                        <div className="card-read">Read</div>

                    </div>
                    <img src={item.image} alt="teaimage" className="card-media" />
                    <span className="card-tag subtle"> Order Now</span>
                </div>

            </div>
                </>
            );
        })}
        </section>
        </>        
    )
}

export default items
