import React, { Component } from "react";
import { Form, FormGroup, Input, Col, Label, Button, FormFeedback} from "reactstrap";

class FeedbackForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            email: '',
            allow: false,
            contactType: '',
            feedback: '',
            touched: {
                firstname: false,
                email: false
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.validate = this.validate.bind(this);
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: {
                ...this.state.touched, [field]: true
            }
        });
    }
    handleChange(e){
        const target = e.target;
        const name = target.name;
        const value = target === 'checkbox' ? target.check : target.value;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(e) {
        console.log("Your feedback is "+ JSON.stringify(this.state));
        alert("Your feedback is "+ JSON.stringify(this.state));
        e.preventDefault();
    }
    validate (firstname, email){
        const errors = {
            firstname: '',
            email: ''
        }
        if (this.state.touched.firstname && firstname.length <= 3){
            errors.firstname = "First name should be greater than 3 characters";
        }
        else if (this.state.touched.firstname && firstname.length >= 10){
            errors.firstname = "First name should be less than 10 characters";
        }
        if (this.state.touched.email && email.split('').filter(char => char === '@').length !== 1){
            errors.email = "Email should contain an '@' sign";
        }
        return errors;
    }
    render(){
        const errors = this.validate(this.state.firstname, this.state.email);
        return(
            <div className="container mt-3">
                <h1>Feedback</h1>

                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Col md={2}>
                            <Label htmlFor="firstname">First Name</Label>
                        </Col>
                        <Col md={8}>
                            <Input type="text" id="firstname" name="firstname" placeholder="First Name" 
                            value={this.state.firstname} 
                            valid={errors.firstname === ''} 
                            invalid={errors.firstname !== ''}
                            onBlur={this.handleBlur('firstname')}
                            onChange={this.handleChange}
                            />
                            <FormFeedback>{errors.firstname}</FormFeedback>
                        </Col> 
                    </FormGroup>
                    <FormGroup row>
                        <Col md={2}>
                            <Label htmlFor="email">Email</Label>
                        </Col>
                        <Col md={8}>
                            <Input type="text" id="email" name="email" placeholder="abc@fghij.klm"  value={this.state.email} 
                            valid={errors.email === ''} 
                            invalid={errors.email !== ''}
                            onBlur={this.handleBlur('email')}
                            onChange={this.handleChange}/>
                            <FormFeedback>{errors.email}</FormFeedback>
                        </Col> 
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{size: 4, offset: 2}}>
                            <FormGroup check>
                                <Input type="checkbox" name="allow" id="allow" value={this.state.allow} onChange={this.handleChange} /><b>May we contact you?</b>
                            </FormGroup>
                        </Col>
                        <Col md={{size: 3, offset: 1}}>
                            <FormGroup select>
                            <Input  type="select" name="contactType" id="contactType" value={this.state.contactType} onChange={this.handleChange}>
                                <option >Tel.</option>
                                <option>Email</option>
                            </Input>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="feedback">Feedback</Label>
                        <Col md={{size: 8, offset: 2}}>
                            <Input type="textarea" name="feedback" id="feedback" rows={8} value={this.state.feedback} onChange={this.handleChange}></Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{size: 8, offset: 2}}>
                            <Button outline color="warning" type="submit">Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default FeedbackForm;