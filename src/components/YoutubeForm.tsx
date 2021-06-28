import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

interface MyFormValues {
    name: string;
    email: string;
    channel: string
}

function YoutubeForm () {

    const initialValues: MyFormValues = {
        name: '',
        email: '',
        channel: '',
    }; 

    const onSubmit = (values: MyFormValues) => {
        console.log(values);
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        channel: Yup.string().required('Required')
    });

    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <Field type="text" id="name" name="name"/>
                    <ErrorMessage name="name" />
                </div>

                <div className="form-control">
                    <label htmlFor="email">e-mail</label>
                    <Field 
                        type="email" 
                        id="email" 
                        name="email"
                    />
                    <ErrorMessage name="email" />
                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <Field 
                        type="text" 
                        id="channel" 
                        name="channel"
                    />
                    <ErrorMessage name="channel" />
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}

export default YoutubeForm;