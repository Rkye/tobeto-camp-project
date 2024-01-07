import React, { useEffect, useState } from 'react'
import { Button, Icon, Menu, MenuItem, Table, TableBody, TableCell, TableFooter, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react'
import CarSercive from '../services/carService'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/actions/cartAction'
import { toast } from "react-toastify"

export default function CarList() {

    const dispatch = useDispatch()

    const [cars, setCars] = useState([])

    useEffect(() => {
        let carSercive = new CarSercive()
        carSercive.getCars().then(result => setCars(result.data))
    }, [])

    const handleAddTocart=(car)=>{
        dispatch(addToCart(car));
        toast.success(`${car.carName} sepete eklendi.`)
    }

    return (
        <div>
            <Table celled>
                <TableHeader>
                    <TableRow >
                        <TableHeaderCell>Model Yılı</TableHeaderCell>
                        <TableHeaderCell>Model Adı</TableHeaderCell>
                        <TableHeaderCell>Kiralama Fiyatı</TableHeaderCell>
                        <TableHeaderCell></TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {cars.map((car) => (
                        <TableRow key={car.id}>
                            <TableCell>{car.modelYear}</TableCell>
                            <TableCell><Link to={`/cars/${car.modelName}`}>{car.modelName}</Link></TableCell>
                            <TableCell>{car.price}</TableCell>
                            <TableCell><Button onClick={()=>handleAddTocart(car)}>Sepete Ekle</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                    
                <TableFooter>
                    <TableRow>
                        <TableHeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <MenuItem as='a' icon>
                                    <Icon name='chevron left' />
                                </MenuItem>
                                <MenuItem as='a'>1</MenuItem>
                                <MenuItem as='a'>2</MenuItem>
                                <MenuItem as='a'>3</MenuItem>
                                <MenuItem as='a'>4</MenuItem>
                                <MenuItem as='a' icon>
                                    <Icon name='chevron right' />
                                </MenuItem>
                            </Menu>
                        </TableHeaderCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}
