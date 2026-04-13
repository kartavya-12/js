import react, { useState } from "react";

// function HomePage() {
//     const[login, setlogin] = useState(false)
//     if(login){
//         return<><button onClick={()=>setLogin(false)}>Logout</button></>
//     }
//     else{
//         return<><button onClick={()=>setLogin(true)}>Login</button></>
//     }
// }
    return(
        <>
        {login?(<button onClick={()=>setLogin(false)}>Logout</button>):(<button onClick={()=>setLogin(true)}>Login</button>)}
        </>

    )

export default HomePage