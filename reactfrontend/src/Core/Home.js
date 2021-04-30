import React, { useEffect } from 'react'
import { getProduct } from './Helper/Coreapicall'
import { useState } from 'react'
import Base from './Base'
import Empty from './Empty'
import SingleCard from './SingleCard'

const Home = () => {

    const [products, setProducts] = useState(null)
    const [errors, setErrors] = useState(null)

    const loadAllProduct = () => {
        getProduct().then(
            response => setProducts(response)

        ).catch(
            err => setProducts(err)
        )
    }

    useEffect(() => {
        loadAllProduct()
        
    }, [])
    console.log(products)
    return (
        <Base title="Hello EveryOne">
        <div className="row">
        { 
            products == null ? <Empty /> :
                products.map(
                    (produstsss , index) => {
                        return(
                            <div className="col-4 mb-5 sodha" key={index}>
                               <SingleCard product={produstsss} />
                            </div>
                        )
                    }
                )
            }
        </div>
        
        
           
        </Base>
    )
}

export default Home
