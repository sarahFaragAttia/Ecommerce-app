
import { Formik, Form } from "formik"
import InputForm from "../InputForm"


const FormikRegister = () => {

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

        if (!values.confiramtion)
            errors.confirmation = "Required"


        if (values.confirmation !== values.password)

            errors.confirmation = "password not match"

        return errors;

}



    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
            {formik => 
        <Form className='m-auto mt-4 w-50 position-relative'>
              
                    <InputForm id="name" text="UserName" type="text" />
                    <InputForm id="email" text="E-mail" type="email" />
                    <InputForm id="password" text="Password" type="password" />
                    <InputForm id="confirmation" text="Re-enter your password" type="password" />
                    <button type='submit' className='m-4 btn h5  rounded-pill btn-outline-dark' disabled={formik.isSubmitting}> Register</button>
                </Form>}
        </Formik>
    )

}

export default FormikRegister;