import {ErrorMessage, Field} from 'formik'
import Error from './Error'
const InputForm=({id, text,type,errors})=>{



    return (
        <div className=" input-group form logIn  m-auto ">
            <label htmlFor={id} className='m-3  d-block' > {text}</label>
            <Field type={type} id={id} name={id}  className="form-control  input m-4 mt-0 h-25 w-auto" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
            <ErrorMessage name={id} component={Error}/>
        </div>
    )
}
export default InputForm;