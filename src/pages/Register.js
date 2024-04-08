
import { Formik, Form } from "formik"
import InputForm from "../component/InputForm"


const Register = () => {

    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmation: "",

    }
    const onSubmit = (values, onSubmitProps) => {
        console.log(values);
        onSubmitProps.resetForm(true);
        onSubmitProps.setSubmitting(false)
    }

    const validate = (values) => {
        let errors = {};

        if (!values.name)
            errors.name = "Required"

        if (!values.email)
            errors.email = "Required"
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
            errors.email = 'Invalid Email format'

        if (!values.password)
            errors.password = "Required"

        if (!values.confirmation) errors.confirmation = "Required";
        else if (values.confirmation !== values.password)
            errors.confirmation = "Passwords do not match";
        return errors;

    }



    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate} >
            {formik => {
                return (console.log(formik),

                    <Form className='m-auto mt-4 w-25  position-relative'>

                        <InputForm id="name" text="UserName" type="text" />
                        <InputForm id="email" text="E-mail" type="email" />
                        <InputForm id="password" text="Password" type="password" />
                        <InputForm id="confirmation" text="Re-enter your password" type="password" />
                        <button type='submit' className='m-4 btn h5  rounded-pill btn-outline-dark' disabled={formik.isSubmitting}> Register</button>
                    </Form>)
            }}
        </Formik>
    )

}

export default Register;