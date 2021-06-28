import React from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup';

interface MyFormValues {
    name: string;
    email: string;
    channel: string
}

interface MyFormErrors {
    name?: string;
    email?: string;
    channel?: string
}

function OldYoutubeForm () {

    const initialValues: MyFormValues = {
        name: '',
        email: '',
        channel: '',
    }; 

    const onSubmit = (values: MyFormValues) => {
        console.log(values);
    }

    const validate = (values: MyFormValues) => {
        let errors: MyFormErrors = {};
            if (!values.name) {
                errors.name = 'Required';
            }
            if (!values.email) {
                errors.email = 'Required';
            } else if (!values.email.search('@')) {
                errors.email = 'Not a valid email'
            }
            if (!values.channel) {
                errors.channel = 'Required';
            }

        return errors;
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        channel: Yup.string().required('Required')
    });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    // console.log(formik.values);
    // console.log(formik.errors);
    console.log(formik.touched);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        onChange={formik.handleChange} 
                        value={formik.values.name} 
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
                </div>

                <div className="form-control">
                    <label htmlFor="email">e-mail</label>
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        onChange={formik.handleChange} 
                        value={formik.values.email} 
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input 
                        type="text" 
                        id="channel" 
                        name="channel" 
                        onChange={formik.handleChange} 
                        value={formik.values.channel} 
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.channel && formik.errors.channel && <div>{formik.errors.channel}</div>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default OldYoutubeForm;