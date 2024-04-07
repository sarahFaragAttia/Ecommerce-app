import {Formik,Form} from 'formik'
import InputForm from '../component/InputForm'


    const Login =()=>{


const initialValues={
    name:"",
    email:"",
    password:"",

}
const onSubmit=(values,onSubmitProps)=>{
console.log(values)
console.log(onSubmitProps)
onSubmitProps.setSubmitting(false)
onSubmitProps.resetForm(true)

}
const validate=(values,validateProps)=>{
// console.log(validateProps)
    let errors={

    };
   
      
    if (!values.name){
       errors.name="Required";
    }
    if (!values.email){
       errors.email="Required";
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) ){
       errors.email='Invalid Email format';
    }
    if (!values.password)
     errors.password='Required';
    
return errors
    // elseif
}
  return(
    
    <Formik
    initialValues={initialValues} onSubmit={onSubmit} validate={validate}    >
    {formik=>{
        console.log(formik)
    
    return( 
        <Form className='m-auto mt-4 col-xl-3 col-lg-4 col-sm-6 col-xs-8  position-relative'>
       <InputForm type='text' id='name'    text="User Name"/>
       <InputForm type='email' id='email' text="Email Address"/>
       <InputForm type='password' id='password' text="Password"/>
       <button type='submit' className='m-4 btn h5  rounded-pill btn-outline-dark' disabled={ formik.isSubmitting}> Submit</button>

        </Form>)}}
    </Formik>
    
    
  )
}   

export default Login;














