import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from "../../FairBase/firebass.config";
import AuthProniders, { AuthContex } from "../../Probiders/AuthProviders";

 
// const auth = getAuth(app)

const Register=()=>{

 const  {user,createUser} =useContext(AuthContex) ; 
 
 
console.log( createUser);

const [email, setEmail] = useState('')    



const HendleRegister = (event) => {
    event.preventDefault()
   const form=event.target
    const email = form.email.value
    const password = form.password.value
    const fristName = form.name.value
    console.log(email, password,fristName)


    //new code start//
    createUser(email,password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        form.reset()
      })    
      .catch(error => {
        console.log(error)
      })    
      //new code end//
      
      
      
      //     // creact usar in fb// old code//
      // createUserWithEmailAndPassword(auth, email, password)
      // .then(result => {
      //   const loggedUser = result.user;
      //   console.log(loggedUser)
      //   })    
      //   .catch(error => {
      //       console.log(error)
      //   })    

}        


    return (
        <div>    

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content block">
      <h1 className="text-5xl font-bold block mb-8">Register</h1>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 block">
      <  form onSubmit={HendleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="text" name="name" id="name" placeholder="Your  Name" required></input>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="eamil" id="email" placeholder="Your Email" required></input>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input  type="password" name="passwoed" id="password" placeholder="Your password" required ></input>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary"><input type="submit" value='Register'></input></button>
        </div>
      </form>

<Link to='/login'>  
   <button className="btn btn-active btn-link">Go to login page ?</button>  
</Link> 
        </div>
  </div>
</div>

        </div>
    )

}

export default Register;



