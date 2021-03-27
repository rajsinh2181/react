import React from "react"
import Signup from "./Signup";
import Login from "./login";
import  { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";


function App(){
    return (
         <Router>
        <AuthProvider>
            <Container 
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}>
                <Switch>

                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Route exact path="/" component={Signup} />
                    <Route exact path="/login" component={Login} />
                </div>
                </Switch>
            </Container>
        </AuthProvider>
        </Router>
        )
}
export default App