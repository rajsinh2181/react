import React from "react"
import Signup from "./Signup";
import  { Container } from 'react-bootstrap'
import { AuthProvider } from "../context/AuthContext";

function App(){
    return (
        <AuthProvider>
            <container>
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
            
                <div className="w-100" style={{ maxWidth: "400px" }}>
                <Signup />
                </div>
            </container>
        </AuthProvider>
        )
}
export default App