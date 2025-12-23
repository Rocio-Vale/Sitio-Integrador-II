export default function ContactForm() {
    return (
        <form action="/contacto" method="post" className="formulario">
            <p>
                <label>Nombre:</label>
                <input type="text" name="nombre" />
            </p>
            <p>
                <label>E-mail:</label>
                <input type="text" name="email"/>
            </p>
            <p>
                <label>Teléfono:</label>
                <input type="text" name="telefono"/>
            </p>
            <p>
                <label>Mensaje:</label>
                <textarea name="comentario" id=""></textarea>
            </p>
            <p className="acciones"><input type="submit" name="" value="Enviar" /></p>

        </form>
    );
}