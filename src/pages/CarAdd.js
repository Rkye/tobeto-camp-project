import React from 'react'
import { Formik } from 'formik'
import * as Yup from "yup";
import { Button, Form, Label } from 'semantic-ui-react';
import { FormField } from "semantic-ui-react"
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';

export default function CarAdd() {

    const initialValues = { carName: "", price: 10 }
    const schema = Yup.object({
        carName: Yup.string().required("Ürün adı zorunlu"),
        price: Yup.number().required("Ürün fiyatı zorunlu")
    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
                <Form className='ui form'>
                    <KodlamaIoTextInput name="carName" placeholder="Ürün adı"/>
                    <KodlamaIoTextInput name="price" placeholder="Ürün fiyatı"/>
                    <Button color="green" type="submit"></Button>
                </Form>

            </Formik>
        </div>
    )
}
