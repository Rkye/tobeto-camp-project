import React from 'react'
import { useSelector } from 'react-redux'
//import { Link } from 'react-router-dom'
import { Dropdown, Label } from 'semantic-ui-react'

export default function CartSummary() {

  const {cartItems} = useSelector(state => state.cart)

    return (
        <div>
            <Dropdown item text="Sepetiniz">
                <Dropdown.Menu>
                    {
                        cartItems.map((cartItem)=>(
                            <Dropdown.Item key={cartItem.car.id}>
                                <Label>
                                {cartItem.car.carName}
                                </Label>
                            </Dropdown.Item>
                        ))
                    }
                    
                    <Dropdown.Divider/>
                    <Dropdown.Item ><a href="/cart" style={{ color: 'black' }}>Sepete Git</a></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
