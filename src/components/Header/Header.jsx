import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContex } from "../../Probiders/AuthProviders";

const Header=()=>{

  const {user,logOut}=useContext(AuthContex)


const HendleLogOut=()=>{
  logOut()
  .then(()=>{})
  .catch(error=>console.error())
}

    return (
        <div>

<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li ><a href="/">Home</a></li>


      <li ><Link to='/orders'>Orders</Link></li>


     {user && <li ><Link to='/profile'>Profile</Link></li>

}
      <li><a href="/login">Login</a></li>
      <li><a href="/register">Register</a></li>
    </ul>
  </div>
</div>

{
  user ? 
  <>  <span>{user.email}</span> <button onClick={HendleLogOut} className="btn"> sing  out</button></>
:<Link to='login' className="btn">Log in</Link>


}
        </div>
    )

}

export default Header;