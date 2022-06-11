import React from 'react'
import {useState, useEffect} from 'react';

function Form() {

const initialValues ={ username: "", email: "",password: "" };
const [formValues, setformValues] = useState(initialValues);
const [formErrors, setformErrors] = useState({});
const [isSubmit, setisSubmit] = useState(false);

const handleChange = (e) =>{


const {name,value} = e.target;
setformValues({ ...formValues, [name]: value});
console.log(formValues);

};

const handleSubmit = (e)=>{
e.preventDefault();
setformErrors(validate(formValues));
setisSubmit(true);
};

useEffect(()=> {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit)
        console.log(formValues);
}, [formErrors]);

const validate = (values) =>{
    const errors = {};
    const regex = /^[^\$@]+@[^\$@]+\.[^\$@]{2,}$/i;

    if(!values.username)
    {
        errors.username = "usename is required!!";
    }

    if(!values.email)
    {
        errors.email = "email is required!!";
    }
    else if(!regex.test(values.email))
    {
        errors.email = "email is not valid!!";
    }

    if(!values.password)
    {
        errors.password = "passoword is required!!";
    }
    else if(values.password.length < 5)
    {
        errors.password = "passoword is too short!!";
    }
    else if(values.password.length > 10)
    {
        errors.password = "passoword is too long!!";
    }
    return errors;
};


  return (
    <div>

        {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="success">Signed in Successfullyy!!!</div>
        ):(<div className="emoty"></div>)}

{/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
        <div className="container">
            <div className="head">
                <h1>Login</h1>
            </div>
            <div className="box">
                <div className="space">
                        <br /><br /><br />
                    
                </div>
                <form onSubmit={handleSubmit}>
                <div className="name">
                <label htmlFor="username" className='lbl'>Username</label><br />
                <input type="text" placeholder='USERNAME' onChange={handleChange} value={formValues.username} name='username' />
                </div>
                <p className="er">{formErrors.username}</p>



                <div className="mail">
                <label htmlFor="email" className='l lbl'>Email</label><br />
                <input type="text" placeholder='EMAIL'  onChange={handleChange}  value={formValues.email}  name='email' />
                </div>
                <p className="er">{formErrors.email}</p>

                <div className="pass">
                <label htmlFor="password"  className='lbl'>Password</label><br />
                <input type="text" placeholder='PASSWORD' onChange={handleChange} value={formValues.password}  name='password' />
                </div>
                <p className="er">{formErrors.password}</p>



                <div >
                <button type='submit' className="sub">submit</button>
                </div>
                </form>



            </div>
        </div>
    </div>
  )
}

export default Form