import React from "react";
import { useDispatch } from "react-redux";
import { Form, Label, Button, Input } from "reactstrap";
import { authActions } from "../store/AuthSlice";
import "./Auth.css";

const Auth = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authActions.login());
    }
    return (
        <div className="container">
            <div className="content">
                <h1 className="mx-auto text-center">Login</h1> {" "}
                <Form id="form" onSubmit={handleSubmit}>
                    <Label htmlFor="id">Id</Label>
                    <Input className="input" type="text" name="id" id="id" />
                    <Label htmlFor="password">Password</Label>
                    <Input className="input" type="password" name="password" id="password" />
                    <p className="text-center"><Button outline color="light" >Login</Button></p>
                </Form>
            </div>
        </div>
    );
};

export default Auth;