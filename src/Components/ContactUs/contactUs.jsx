import React, { Component } from 'react';
import { render } from 'react-dom';
import { Form, Input,  Button } from 'antd';


class ContactUs extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }

  handleChange = (e) => {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <>
      
      <Form onSubmit={this.handleSubmit} className="contactUsForm">
      <h3>WRITE TO US</h3>
        <label>Name</label>
        <Input            
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />

        <label>Email</label>
        <Input            
          type="text"
          value={this.state.email}
          onChange={this.handleChange}
          name="email"
        />

        <label>Phone number</label>
        <Input            
          type="text"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />

        <label>Comments/Questions</label>
        <div><textArea       
          type="text"
          value={this.state.message}
          onChange={this.handleChange}
          name="message"
        /></div>

        <div><Button>Send</Button></div>
      </Form>
      <div>
        <h3>CUSTOMER CARE</h3>
        <div>
          <p>For Query/Feedback/Complaint:</p>
          <span>Call Us (Toll Free):00000000000</span>
          <div>Email us: <email>cardealership@null.com</email></div>
        </div>
      </div>
      </>
    );
  }

}

export default ContactUs;
