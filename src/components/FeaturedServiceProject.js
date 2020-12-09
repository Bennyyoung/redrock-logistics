import React from 'react'
import axios from 'axios'
import ReceiverForm from './ReceiverForm';
export default class FeaturedServiceProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            city: '',
            state: '',
            email: '',
            phonenumber: '',
            personorcargo: '',
            message: '',

        };

        this.onChangeFirstname = this.onChangeFirstname.bind(this)
        this.onChangeLastname = this.onChangeLastname.bind(this)
        this.onChangeCity = this.onChangeCity.bind(this)
        this.onChangeState = this.onChangeState.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePhonenumber = this.onChangePhonenumber.bind(this)
        this.onChangePersonorcargo = this.onChangePersonorcargo.bind(this)
        this.onChangeMessage = this.onChangeMessage.bind(this)
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

    onChangePersonorcargo(e) {
        this.setState({
            personorcargo: e.target.value
        });
    }

    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newSender = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            city: this.state.city,
            state: this.state.state,
            email: this.state.email,
            phonenumber: this.state.phonenumber,
            personorcargo: this.state.personorcargo,
            message: this.state.message,
        };

        console.log(newSender);

        axios.post('http://localhost:5000/sender/add', newSender)
            .then(res => console.log(res.data));

        this.setState({
            firstname: '',
            lastname: '',
            city: '',
            state: '',
            email: '',
            phonenumber: '',
            personorcargo: '',
            message: ''
        })
    }

    render() {

        return (
            <>
                {/* <!-- Feature Services projects -->
            <!-- Send a quote
                ================================================== --> */}
                <section className="quote-section">
                    <div className="container">
                        <div className="col-md-6 col-xs-12 content">
                            <div className="titles">
                                <h2>We do care about your cargo!</h2>
                            </div>

                            <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam
                            nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu
                            in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                            himenaeos.</p>

                            <p>Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque
                            elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed
                            fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in
                            orci enim.</p>

                            <a href="#" className="button-one">View Details</a>

                        </div>
                        <div className="col-md-5 col-xs-12 col-md-offset-1">

                            <form id="contact-form" className="needs-validation" onSubmit={this.onSubmit} noValidate>
                                <div className="titles">
                                    <h2>request a quote</h2>
                                    <p>* for detailed quote use extended version</p>
                                </div>
                                    <p style={{color: 'red'}}>Please fill in both senders and receivers form</p>
                                <fieldset>
                                    <legend>Sender</legend>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="firstName">First Name</label>
                                            <input type="text" className="form-control" id="firstName" placeholder="First Name" value={this.state.firstname} onChange={this.onChangeFirstname} noValidate required />

                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="lastName">Last Name</label>
                                            <input type="text" className="form-control" id="lastName" placeholder="Last Name" value={this.state.lastname} onChange={this.onChangeLastname} noValidate required />

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
                                            <label htmlFor="lastName">Email</label>
                                            <input type="text" className="form-control" id="email" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} required />
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="phoneNumber">Phone Number</label>
                                            <input type="number" className="form-control" id="phoneNumber" placeholder="Phone Number" value={this.state.phonenumber} onChange={this.onChangePhonenumber} required />
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="personOrCargo">Person / Cargo</label>
                                            <input type="text" className="form-control" id="personOrCargo" placeholder="Person / Cargo" value={this.state.personorcargo} onChange={this.onChangePersonorcargo} required />
                                        </div>
                                    </div>
                                </fieldset>
                                <textarea name="comment" id="comment" placeholder="Message" value={this.state.message} onChange={this.onChangeMessage}></textarea>
                                <input value="Submit Now" type="submit" />
                                <div id="msg" className="message"></div>

                            </form>

                            <ReceiverForm />
                        </div>
                    </div>
                </section>

                {/* <!-- Feature Services projects --> */}

            </>
        )
    }
}
