import React from 'react'
import useFetch from '../Hooks/useFetch';
import { FormDatasContext } from './FormDatas';

const Form = ({children}) => {
    const { request, error } = useFetch();
    const [ responseSucess, setResponseSucess ] = React.useState(false);
    const { form } = React.useContext(FormDatasContext);

    function handleSubmit(event) {
        event.preventDefault();
        request('https://ranekapi.origamid.dev/json/api/usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
        }).then(( {response} ) => setResponseSucess(response.ok))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {children}
                <button>Submit</button>
            </form>
            {responseSucess ? <p>Enviado com sucesso!</p> : null}
            {error ? <p>{error}</p> : null}
        </>
    )
}

export default Form