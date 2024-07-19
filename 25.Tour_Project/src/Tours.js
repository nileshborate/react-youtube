import React, { useState } from 'react'
import Tour from './Tour';

const Tours = (props) => {
    //console.log("Tours props = ",props.tours)
   
    const { tours,removeTour } = props;
    return (
       <section>
        <div className='title'>
            <h2>Our Tours</h2>
            <div className='tours'>
                {
                    tours.map((tour)=>{
                        return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
                    })
                }
            </div>
        </div>
       </section>
    )
}

export default Tours