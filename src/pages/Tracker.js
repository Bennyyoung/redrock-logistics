import React, { Component } from 'react'
import one from "../upload/others/1.jpg"
import axios from "axios"

export default class Tracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trackingNo: '',
    
        };
    
        this.onTrackingNo = this.onTrackingNo.bind(this)
    
    }

    onTrackingNo(e) {
        this.setState({
            trackingNo: e.target.value
        });
    }

    render() {
        return (
        <div style={{ textAlign: 'center' }}>
            <h1>Order information</h1>
            <h2>Track an Order</h2>
            <p>Enter Your Tracking Number</p>
            <strong>Tracking Number</strong>
            <form className="form-inline" style={{ padding: '0 0 10px 0' }}>
                <input className="form-control mr-sm-2" type="search" placeholder="Tracking Number" aria-label="Search" required />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <img src={one} class="rounded mx-auto d-block" alt="..." style={{ height: '200px', width: '450px' }} />
            <p className="text-justify" style={{ textAlign: 'center' }}>Here's the fastest way to check the status of your shipment. No need to call Customer Service - our online results give you real-time, detailed progress as your shipment speeds through Sonic Logistics.</p>
        </div>
        )
    }
}