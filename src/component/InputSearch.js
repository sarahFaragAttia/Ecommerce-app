import search from '../pictures/search.svg';
import {useState} from "react"
const InputSearch=(props)=>{


    const [Value, setValue] = useState()

    const updateValue = (e) => {
        setValue(e.target.value);
        console.log(Value)
    }

    return(
    
        <>
        <p>Welcome to out shopping website , start browsing ...</p>


        
            <div class="input-group mb-3">
                <input type="text" class="form-control" value={Value} onChange={updateValue} placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <img src={search} onClick={()=>{props.onAdd(Value)}} class="btn btn-outline-secondary" type="button" id="button-addon2" />
            </div>

            </>

    )
}
export default InputSearch;