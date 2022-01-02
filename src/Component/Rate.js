import React from 'react'

function Rate({rate}) {
    const ratingArr = [1,2,3,4,5]
    return (
        <div className="r">
           {ratingArr.map((el)=> el<= rate ? <i class="fas fa-star"></i> : <i class="far fa-star"></i>)}
        </div>
    )
}

export default Rate
