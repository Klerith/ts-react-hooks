import { MouseEvent } from "react"
import useForm from "../hooks/useForm"



interface FormData {
    email: string,
    nombre: string,
    edad: number
}

function Formulario() {

    const { formulario, handleChange, email, nombre, edad } = useForm<FormData>({
        email: "",
        nombre: "",
        edad: 30
    })

    // const { email, nombre, edad } = formulario


    const onSubmit = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        console.log(formulario)
        alert(`El email es: ${formulario.email} y el nombre es: ${formulario.nombre}`)
    }

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" onChange={handleChange} value={email} />
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" name="nombre" onChange={handleChange} value={nombre} />
            </div>
            <div className="mb-3">
                <label className="form-label">Edad</label>
                <input type="number" className="form-control" name="edad" onChange={handleChange} value={edad} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={e => onSubmit}>Submit</button>
            <div>
                <p>The state is:{JSON.stringify(formulario)}</p>
            </div>
        </form>

    )
}


export default Formulario