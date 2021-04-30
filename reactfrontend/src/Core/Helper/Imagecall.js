import React from 'react'

const Imagecall = ({product}) => {
    const imageUrl  = product ? product.image : "https://www.pexels.com/photo/people-on-motor-boat-3532543/"
    console.log(imageUrl);
    return (
        <div className="rounded p-2">
            <img src={imageUrl} 
            style={{
                maxWidth:"100%",
                maxHeight:"100%"

            }} />
        </div>
    )
}

export default Imagecall
