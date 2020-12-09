import React, { Component } from 'react'
import axios from 'axios'


export default class ReceiverForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            city: '',
            state: '',
            email: '',
            phonenumber: '',

        };

        this.onChangeFirstname = this.onChangeFirstname.bind(this)
        this.onChangeLastname = this.onChangeLastname.bind(this)
        this.onChangeCity = this.onChangeCity.bind(this)
        this.onChangeState = this.onChangeState.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePhonenumber = this.onChangePhonenumber.bind(this)
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChangeFirstname(e) {
        this.setState({
            firstname: e.target.value
        });
    }

    onChangeLastname(e) {
        this.setState({
            lastname: e.target.value
        });
    }

    onChangeCity(e) {
        this.setState({
            city: e.target.value
        });
    }

    onChangeState(e) {
        this.setState({
            state: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePhonenumber(e) {
        this.setState({
            phonenumber: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newReceiver = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            city: this.state.city,
            state: this.state.state,
            email: this.state.email,
            phonenumber: this.state.phonenumber,
        };

        console.log(newReceiver);

        axios.post('http://localhost:5000/receiver/add', newReceiver)
            .then(res => console.log(res.data));


        this.setState({
            firstname: '',
            lastname: '',
            city: '',
            state: '',
            email: '',
            phonenumber: '',
        })
    }

    render() {
        return (
            <>
                <form id="contact-form" className="needs-validation" onSubmit={this.onSubmit} noValidate>
                    <fieldset>
                        <legend>Receiver</legend>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="firstName">Receiver's First Name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="First Name" value={this.state.firstname} onChange={this.onChangeFirstname} required />

                            </div>

                            <div className="col-md-6">
                                <label htmlFor="lastName">Receiver's Last Name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Last Name" value={this.state.lastname} onChange={this.onChangeLastname} required />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="city">City</label>
                                <input type="text" className="form-control" id="city" placeholder="City" value={this.state.city} onChange={this.onChangeCity} required />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="state">State</label>
                                <input type="text" className="form-control" id="state" placeholder="State" value={this.state.state} onChange={this.onChangeState} required />
                            </div>


                            <div className="col-md-6">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" id="email" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} required />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="number">Phone Number</label>
                                <input type="text" className="form-control" id="email" placeholder="Phone Number" value={this.state.phonenumber} onChange={this.onChangePhonenumber} required />
                            </div>
                        </div>

                    </fieldset>
                    <input value="Submit Now" type="submit" />
                    <div id="msg" className="message"></div>
                </form>
            </>
        )
    }
}
