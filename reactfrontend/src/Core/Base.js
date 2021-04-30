import React from 'react'

const Base = ({
    title= "Hello",
    description= "Hellooo",
    className="bg-dark text-white p-4",
    children
}) => {
    return (
        <div className="container">
            <div className="jumbotron text-white text-center">
                <h4>{title}</h4>
            </div>

           <div className={className}>
               {children}
            </div> 

            <div className="footer bg-dark mt-auto py-3">
                <div className="container text-center text-white">
                    <span className="text-muted">DJANGO & REACT FULL STACK WEB APPLICATION</span>
                    <a href="https://www.instagram.com/himanshusodha"> Hit me up </a>
                </div>
            </div>
        </div>
    )
}

export default Base
