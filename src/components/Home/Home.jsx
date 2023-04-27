import React, { useContext } from "react";
import { AuthContex } from "../../Probiders/AuthProviders";

const Home=()=>{

    const user = useContext(AuthContex)
console.log(user);

    return (
        <div>
            <h2>This is Home page  </h2>
       <h2>
        {user && <span>{user.displayName}</span>}
       </h2>
       
        </div>
    )

}

export default Home;