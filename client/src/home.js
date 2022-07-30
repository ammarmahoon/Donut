import React from "react"
import { Link } from "react-router-dom"
import "./home.css"

export default function Home (){
    return <div className="home">
    
    <h1 className="heading">Home Page</h1><br/>
    <button className="button1">
    <Link className="heading" to={"/login"}>Login</Link>
    </button><br/>
    <button className="button2">
    <Link className="heading" to={"/signup"}>Sign up</Link>
    </button>
    </div>
}