import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(
        initialForm
    )

    const onInputChange = ({ target }) => {//Recibimos el event pero podemso desestructurarlo
        const { name, value } = target;
        setFormState({
            ...formState, [name]: value

        });

    }

    const onResetForm = () => {//Recibimos el event pero podemso desestructurarlo
        setFormState(initialForm);

    }

    return {
        ...formState,
        formState, onInputChange, onResetForm
        //

    }

}