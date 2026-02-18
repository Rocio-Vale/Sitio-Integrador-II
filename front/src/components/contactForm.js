'use client'

import { useState } from 'react';

export default function ContactForm({ postUrl }) {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        comentario: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);

        const rawResponse = await fetch(postUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const response = await rawResponse.json();
        console.log(response);
        setSending(false);
        setMsg(response.message);
        if (response.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <>
            <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                <p>
                    <label>Nombre:</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                </p>
                <p>
                    <label>E-mail:</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                </p>
                <p>
                    <label>Teléfono:</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                </p>
                <p>
                    <label>Mensaje:</label>
                    <textarea name="comentario" id="" value={formData.comentario} onChange={handleChange}></textarea>
                </p>
                <p className="acciones"><input type="submit" name="" value="Enviar" /></p>

            </form>

            {sending ? <p>Enviando...</p> : null}

            {msg ? <p>{msg}</p> : null}
        </>
    );
}