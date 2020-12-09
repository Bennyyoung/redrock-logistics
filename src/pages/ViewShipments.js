import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

// const ViewShipments = props => (
//     <tr>
//         <td>{props.}</td>
//         <td>{props.exercise.description}</td>
//         <td>{props.exercise.duration}</td>
//         <td>{props.exercise.date.substring(0, 10)}</td>
//         <td>
//             <Link to={"/edit/" + props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
//         </td>
//     </tr>
// )


export default class ViewShipments extends Component {

    componentDidMount() {
        axios.get('http://localhost:5000/creatshipments/')
          .then(response => {
            this.setState({ createshipments: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
    render() {
        return (
            <>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Senders Name</th>
                            <th>Senders Address</th>
                            <th>Senders Phone</th>
                            <th>Senders Email</th>

                            <th>Receivers Name</th>
                            <th>Receivers Address</th>
                            <th>Receivers Phone</th>
                            <th>Receivers Email</th>

                            <th>Origin</th>
                            <th>Package</th>
                            <th>Status</th>
                            <th>Destination</th>

                            <th>Carrier</th>
                            <th>Weight</th>
                            <th>Shipment Mode</th>
                            <th>Quantity</th>
                            <th>Waybill/</th>


                        </tr>
                    </thead>
                        {/* <tbody>
                            {this.createshipments()}
                        </tbody> */}
                </table>
            </>
        )
    }
}
