import { useState, ChangeEvent } from 'react'

const useForm = <T extends Object>(initialState: T) => {

    // export default function useForm<T>(initialState: T) {

    const [formulario, setFormulario] = useState(initialState)

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    return {
        formulario,
        handleChange,
        ...formulario
    }
}
export default useForm

