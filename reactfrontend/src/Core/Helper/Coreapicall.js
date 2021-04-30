import { API } from "../../Backend";


export const getProduct = () => {
    return fetch(`http://127.0.0.1:8000/api/product`, {method: "GET"}).then(
        response => {
            return response.json()
        }
    ).catch(
        err => console.log(err, "oooooooooooo")
    )
    
}