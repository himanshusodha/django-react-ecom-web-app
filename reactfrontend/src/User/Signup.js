import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { signin, signup } from '../Auth/Helper'
import Base from '../Core/Base'


const Signup = () => {
    const [values, setValues] = useState({
        name:"",
        password:"",
        email:"",
        success:false,
        error:""
    })

    const { email,password,name,success,error } = values

    const changeHandle = name => event => {
        setValues({...values, error:false, [name]: event.target.value })
    }

    const onSubmit = event => {
        event.preventDefault()
        setValues({...values, error:false})
        signup({name,password,email}).then(
            (data) => {
                console.log("DATAAA", data)
                if (data.email === email) {
                    setValues({
                        ...values,
                        name:"",
                        password:"",
                        email:"",
                        error:"",
                        success:true
                    })
                    
                }
                else{
                    setValues({...values, error:true, success:false})
                }
            }
        ).catch(err => console.log(err , "IOOOS"))

    }

    const signUpform = () => {
        return(
            <div className="row signup">
                <div className="col-md-6 offset sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input type="text" className="form-control" onChange={changeHandle("name")} value={name}/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input type=" " className="form-control" onChange={changeHandle("email")} value={email}/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input type="password" className="form-control" onChange={changeHandle("password")} value={password}/>
                        </div>
                        <button onClick={onSubmit} className="btn btn-success text-white btn-block">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
    return (
        <Base title="Welcome to Hello" description=" Signup here!">
            {
                signUpform()
            }
            <p className="text-white text-center">
                {
                    JSON.stringify(values)
                }
            </p>
            
        </Base>
    )
}

export default Signup
