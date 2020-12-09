import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CreateShipment from '../pages/CreateShipment'
import DashboardNavbar from './DashboardNavbar'

export default function Dashboard() {
    return (
        <>
            <DashboardNavbar />
            {/* <Switch>
            </Switch> */}
                {/* <Route exact path="/create-shipment" component={CreateShipment}/> */}
        </>
    )
}
