import React from 'react'

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};
export default class FeaturedServiceProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            errors: {
                firstName: '',
                lastName: '',
                email: '',
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'firstName':
                errors.firstName =
                    value.length < 5
                        ? 'First Name must be at least 2 characters long!'
                        : '';
                break;
            case 'lastName':
                errors.lastName =
                    value.length < 5
                        ? 'Last Name must be at least 2 characters long!'
                        : '';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm(this.state.errors)) {
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
        }
    }

    render() {
        const { errors } = this.state;

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

                            <form id="contact-form" className="needs-validation" onSubmit={this.handleSubmit} novalidate>
                                <div className="titles">
                                    <h2>request a quote</h2>
                                    <p>* for detailed quote use extended version</p>
                                </div>
                                <fieldset>
                                    <legend>Sender</legend>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label for="firstName">First Name</label>
                                            <input type="text" className="form-control" id="firstName" placeholder="First Name" onChange={this.handleChange} novalidate required />
                                            {errors.firstName.length > 0 &&
                                                <span className='error'>{errors.firstName}</span>}
                                        </div>

                                        <div className="col-md-6">
                                            <label for="lastName">Last Name</label>
                                            <input type="text" className="form-control" id="lastName" placeholder="Last Name" required novalidate onChange={this.handleChange} required />
                                            {errors.lastName.length > 0 &&
                                                <span className='error'>{errors.lastName}</span>}
                                        </div>

                                        <div className="col-md-6">
                                            <label for="city">City</label>
                                            <input type="text" class="form-control" id="city" placeholder="City" required />
                                        </div>

                                        <div className="col-md-6">
                                            <label for="state">State</label>
                                            <input type="text" className="form-control" id="state" placeholder="State" required />
                                        </div>


                                        <div className="col-md-6">
                                            <label for="lastName">Email</label>
                                            <input type="text" className="form-control" id="email" placeholder="Email" required />
                                        </div>

                                        <div className="col-md-6">
                                            <label for="phoneNumber">Phone Number</label>
                                            <input type="number" className="form-control" id="phoneNumber" placeholder="Phone Number" required />
                                        </div>

                                        <div className="col-md-6">
                                            <label for="personOrCargo">Person / Cargo</label>
                                            <input type="text" class="form-control" id="personOrCargo" placeholder="Person / Cargo" required />
                                        </div>
                                    </div>
                                </fieldset>
                                <textarea name="comment" id="comment" placeholder="Message"></textarea>
                                <input value="Submit Now" type="submit" />
                                <div id="msg" class="message"></div>

                                <fieldset>
                                    <legend>Receiver</legend>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label for="firstName">Receiver's First Name</label>
                                            <input type="text" className="form-control" id="firstName" placeholder="First Name" required />
                                            {errors.firstName.length > 0 &&
                                                <span className='error'>{errors.firstName}</span>}
                                        </div>

                                        <div className="col-md-6">
                                            <label for="lastName">Receiver's Last Name</label>
                                            <input type="text" className="form-control" id="lastName" placeholder="Last Name" required />
                                            {errors.lastName.length > 0 &&
                                                <span className='error'>{errors.lastName}</span>}
                                        </div>

                                        <div className="col-md-6">
                                            <label for="city">City</label>
                                            <input type="text" className="form-control" id="city" placeholder="City" required />
                                        </div>

                                        <div className="col-md-6">
                                            <label for="state">State</label>
                                            <input type="text" className="form-control" id="state" placeholder="State" required />
                                        </div>


                                        <div className="col-md-6">
                                            <label for="lastName">Email or Phone Number</label>
                                            <input type="text" className="form-control" id="email" placeholder="Email or Number" required />
                                        </div>
                                    </div>

                                </fieldset>
                                <input id="submit_contact" value="Submit Now" type="submit" />
                                <div id="msg" className="message"></div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* <!-- Feature Services projects --> */}

            </>
        )
    }
}
