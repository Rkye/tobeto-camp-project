import React from 'react'
import Categories from './Categories'
import CarList from '../pages/CarList'
import { Grid } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom'
import CartDetail from '../pages/CartDetail'
import CarDetail from '../pages/CarDetail'
import {ToastContainer} from "react-toastify";

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"/>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column> 
                    <Grid.Column width={12}>
                        
                            <Routes>
                                <Route exact path = "/" Component={CarList} />
                                <Route path = "/cars" Component={CarList} />
                                <Route path = "/cars/:name" Component={CarDetail} />
                                <Route path = "/cart" Component={CartDetail} />
                                <Route path="/car/add" Component={CarAdd}></Route>
                            </Routes>
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
