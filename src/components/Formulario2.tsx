import { MouseEvent } from "react"
import useForm from "../hooks/useForm"



interface Form2Data {
    postalCode: string,
    city: string,
    state: string
}

function Formulario() {

    const { formulario, handleChange, postalCode, city, state } = useForm<Form2Data>({
        postalCode: "",
        city: "",
        state: "",

    })

    // const { postalCode,city,state } = formulario


    const onSubmit = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        console.log(formulario)

    }

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Postal code</label>
                <input type="text" className="form-control" name="postalCode" onChange={handleChange} value={postalCode} />
            </div>
            <div className="mb-3">
                <label className="form-label">City</label>
                <input type="text" className="form-control" name="city" onChange={handleChange} value={city} />
            </div>
            <div className="mb-3">
                <label className="form-label">State</label>
                <input type="text" className="form-control" name="state" onChange={handleChange} value={state} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={e => onSubmit}>Submit</button>
            <div>
                <p>The state is:{JSON.stringify(formulario)}</p>
            </div>
        </form>

    )
}


export default Formulario