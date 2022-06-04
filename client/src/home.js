import React from "react"
import { Link } from "react-router-dom"

export default function Home (){
    return <div>
    
    <h1>Home Page</h1><br/>
    <button>
    <Link to={"/login"}>Login</Link>
    </button><br/>
    <button>
    <Link to={"/signup"}>Sign up</Link>
    </button>
    </div>
}