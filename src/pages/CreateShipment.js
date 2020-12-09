import React, { Component } from "react";
import axios from "axios";

export default class CreateShipment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sendersname: "",
      sendersaddress: "",
      sendersphone: "",
      sendersemail: "",

      receiversname: "",
      receiversaddress: "",
      receiversphone: "",
      receiversemail: "",

      origin: "",
      package: "",
      status: "",
      destination: "",
      carrier: "",
      typeofshipment: "",

      weight: "",
      shipmentmode: "",
      product: "",
      quantity: "",
      waybill: "",
    };
    this.onChangeSendersName = this.onChangeSendersName.bind(this);
    this.onChangeSendersAddress = this.onChangeSendersAddress.bind(this);
    this.onChangeSendersPhone = this.onChangeSendersPhone.bind(this);
    this.onChangeSendersEmail = this.onChangeSendersEmail.bind(this);
    this.onChangeReceiversName = this.onChangeReceiversName.bind(this);
    this.onChangeReceiversAddress = this.onChangeReceiversAddress.bind(this);
    this.onChangeReceiversPhone = this.onChangeReceiversPhone.bind(this);
    this.onChangeReceiversEmail = this.onChangeReceiversEmail.bind(this);
    this.onChangeOrigin = this.onChangeOrigin.bind(this);
    this.onChangePackage = this.onChangePackage.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeDestination = this.onChangeDestination.bind(this);
    this.onChangeCarrier = this.onChangeCarrier.bind(this);
    this.onChangeTypeOfShipment = this.onChangeTypeOfShipment.bind(this);

    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeShipmentMode = this.onChangeShipmentMode.bind(this);
    this.onChangeProduct = this.onChangeProduct.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeWaybill = this.onChangeWaybill.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeSendersName(e) {
    this.setState({
      sendersname: e.target.value,
    });
  }

  onChangeSendersAddress(e) {
    this.setState({
      sendersaddress: e.target.value,
    });
  }

  onChangeSendersPhone(e) {
    this.setState({
      sendersphone: e.target.value,
    });
  }

  onChangeSendersEmail(e) {
    this.setState({
      sendersemail: e.target.value,
    });
  }

  onChangeReceiversName(e) {
    this.setState({
      receiversname: e.target.value,
    });
  }

  onChangeReceiversAddress(e) {
    this.setState({
      receiversaddress: e.target.value,
    });
  }

  onChangeReceiversPhone(e) {
    this.setState({
      receiversphone: e.target.value,
    });
  }

  onChangeReceiversEmail(e) {
    this.setState({
      receiversemail: e.target.value,
    });
  }

  onChangeOrigin(e) {
    this.setState({
      origin: e.target.value,
    });
  }

  onChangePackage(e) {
    this.setState({
      package: e.target.value,
    });
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value,
    });
  }

  onChangeDestination(e) {
    this.setState({
      destination: e.target.value,
    });
  }

  onChangeCarrier(e) {
    this.setState({
      carrier: e.target.value,
    });
  }

  onChangeTypeOfShipment(e) {
    this.setState({
      typeofshipment: e.target.value,
    });
  }

  onChangeWeight(e) {
    this.setState({
      weight: e.target.value,
    });
  }

  onChangeShipmentMode(e) {
    this.setState({
      shipmentmode: e.target.value,
    });
  }

  onChangeProduct(e) {
    this.setState({
      product: e.target.value,
    });
  }

  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value,
    });
  }

  onChangeWaybill(e) {
    this.setState({
      waybill: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newShipment = {
      sendersname: this.state.sendersname,
      sendersaddress: this.state.sendersaddress,
      sendersphone: this.state.sendersphone,
      sendersemail: this.state.sendersemail,

      receiversname: this.state.receiversname,
      receiversaddress: this.state.receiversaddress,
      receiversphone: this.state.receiversphone,
      receiversemail: this.state.receiversemail,

      origin: this.state.origin,
      package: this.state.package,
      status: this.state.origin,
      destination: this.state.destination,
      carrier: this.state.carrier,
      typeofshipment: this.state.typeofshipment,

      weight: this.state.weight,
      shipmentmode: this.state.weight,
      product: this.state.product,
      quantity: this.state.quantity,
      waybill: this.state.waybill,
    };

    console.log(newShipment);

    axios
      .post("http://localhost:5000/api/shipment", newShipment)
      .then((res) => console.log(res.data));

    this.setState({
      sendersname: "",
      sendersaddress: "",
      sendersphone: "",
      sendersemail: "",

      receiversname: "",
      receiversaddress: "",
      receiversphone: "",
      receiversemail: "",

      origin: "",
      package: "",
      status: "",
      destination: "",
      carrier: "",
      typeofshipment: "",

      weight: "",
      shipmentmode: "",
      product: "",
      quantity: "",
      waybill: "",
    });
  }

  render() {
    return (
      <>
        <form
          id="contact-form"
          className="needs-validation"
          onSubmit={this.onSubmit}
          noValidate
        >
          <fieldset>
            <legend>
              <h1>Create Shipment</h1>
            </legend>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="sendersName">Senders Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Senders Name"
                  value={this.state.sendersname}
                  onChange={this.onChangeSendersName}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="firstName">Senders Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Senders Address"
                  value={this.state.sendersaddress}
                  onChange={this.onChangeSendersAddress}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="lastName">Senders Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="lastName"
                  placeholder="Senders Phone"
                  value={this.state.sendersphone}
                  onChange={this.onChangeSendersPhone}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="city">Senders Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Senders Email"
                  value={this.state.sendersemail}
                  onChange={this.onChangeSendersEmail}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="firstName">Receivers Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Receivers Name"
                  value={this.state.receiversname}
                  onChange={this.onChangeReceiversName}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="firstName">Receivers Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Receivers Address"
                  value={this.state.receiversaddress}
                  onChange={this.onChangeReceiversAddress}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="lastName">Receivers Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="lastName"
                  placeholder="Receivers Phone"
                  value={this.state.receiversphone}
                  onChange={this.onChangeLastname}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="city">Receivers Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Receivers Email"
                  value={this.state.receiversemail}
                  onChange={this.onChangeReceiversEmail}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="email">Origin</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Origin"
                  value={this.state.origin}
                  onChange={this.onChangeOrigin}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="number">Package</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Package"
                  value={this.state.package}
                  onChange={this.onChangePackage}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="firstName">Status</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Status"
                  value={this.state.status}
                  onChange={this.onChangeStatus}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="lastName">Destination</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Destination"
                  value={this.state.destination}
                  onChange={this.onChangeDestination}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="city">Carrier</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Carrier"
                  value={this.state.carrier}
                  onChange={this.onChangeCarrier}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="firstName">Type of Shipment</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Type of Shipment"
                  value={this.state.typeofshipment}
                  onChange={this.onChangeTypeOfShipment}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="lastName">Weight</label>
                <input
                  type="number"
                  className="form-control"
                  id="lastName"
                  placeholder="Weight"
                  value={this.state.number}
                  onChange={this.onChangeWeight}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="city">Shipment Mode</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Shipment  Mode"
                  value={this.state.shipmentmode}
                  onChange={this.onChangeShipmentMode}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="firstName">Product</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Product"
                  value={this.state.product}
                  onChange={this.onChangeProduct}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="lastName">Quantity</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Quantity"
                  value={this.state.quantity}
                  onChange={this.onChangeQuantity}
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="city">Waybill or Tracking Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="city"
                  placeholder="Waybill or Tracking Number"
                  value={this.state.waybill}
                  onChange={this.onChangeWaybill}
                  required
                />
              </div>
            </div>
          </fieldset>
          <input value="Submit Now" type="submit" />
          <div id="msg" className="message"></div>
        </form>
      </>
    );
  }
}
