import {ErrorMessage, Field} from 'formik'
import Error from './Error'
const InputForm=({id, text,type,errors})=>{



    return (
        <div className="form-control w-100 logIn  m-auto ">
            <label htmlFor={id} className='m-3  d-block' > {text}</label>
            <Field type={type} id={id} name={id}/>
            <ErrorMessage name={id} component={Error}/>
        </div>
    )
}
export default InputForm;