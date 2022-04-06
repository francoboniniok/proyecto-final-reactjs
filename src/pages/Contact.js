
import { useState } from 'react'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const ContactPage = () => {

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Envio de nombre: ", value)
    }

    const handleChange = (e) => {
        console.log(e)
        setValue(e.target.value)
    }

    const resetForm = () => {
        setValue('')
        console.log("limpiar formulario")
    }

    return(
        <Container className='container-general help'> 

            <div className='faq-section'>
                <section>
                    <h3>Contacto</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" onKeyDown={handleChange} value={value} placeholder='Nombre'/>
                        <input type="text" placeholder='Apellido'/>
                        <input type="mail" placeholder='mail'/>

                        <Button variant='contained' onClick={resetForm}>Limpiar Formulario</Button>
                        <Button variant='contained' type="submit">Enviar</Button>
                    </form>
                </section>
            </div>
        </Container>
    )
}

export default ContactPage