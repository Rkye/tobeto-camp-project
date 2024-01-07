import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CardMeta, CardHeader, CardGroup, CardDescription, CardContent, Button, Card, Image } from 'semantic-ui-react'
import CarSercive from '../services/carService'

export default function CarDetail() {
  let { name } = useParams()

  const [car, setCar] = useState({})

    useEffect(() => {
        let carSercive = new CarSercive()
        carSercive.getByModelNameContain(name).then(result => setCar(result.data))
    }, [])

  return (
    <div>
      <CardGroup>
        <Card fluid>
          <CardContent>
            <Image
              floated='right'
              size='mini'
              src='/images/avatar/large/steve.jpg'
            />
            <CardHeader>{car.modelName}</CardHeader>
            <CardMeta>Friends of Elliot</CardMeta>
            <CardDescription>
              Steve wants to add you to the group <strong>best friends</strong>
            </CardDescription>
          </CardContent>
          <CardContent extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Approve
              </Button>
              <Button basic color='red'>
                Decline
              </Button>
            </div>
          </CardContent>
        </Card>
      </CardGroup>
    </div>
  )
}
