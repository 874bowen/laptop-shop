import React from "react";
import { Form, Label, Button, Input } from "reactstrap";
import "./Auth.css";

const Auth = () => {
    return (
        <div className="container">
            <div className="content">
                <h1 className="mx-auto text-center">Login</h1> {" "}
                <Form id="form" >
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