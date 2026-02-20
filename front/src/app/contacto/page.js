import "../../styles/contacto.css"
import ContactForm from "@/components/contactForm";

export const metadata = {
    tittle: "Marusst:: Contacto",
    description: "descripcion de contacto"
};

export default function Contacto() {
    return (
        <main className="holder cont">

            <div className="titulo">
                <h2>CONTACTO</h2>
                <div className="subrayado"></div>
            </div>

            <div className="contacto">
                <div>
                    <h2>Contacto rápido</h2>
                    <ContactForm postUrl={`${process.env.API_BASE_URL}/api/contacto`} />
                </div>

                <div className="datos">
                    <h2>Otras vías de comunicación</h2>
                    <p>También puede contactarse con nosotros usando los siguientes medios.</p>
                    <ul>
                        <li><i className="fa-solid fa-phone"></i> Telefono: 123456789</li>
                        <li><i className="fa-solid fa-at"></i> Email: marusst@gmail.com</li>
                        <li><i className="fa-brands fa-facebook"></i> Facebook: marusst</li>
                        <li><i className="fa-brands fa-instagram"></i> Instagram: @marusst</li>
                        <li><i className="fa-brands fa-whatsapp"></i> WhatsApp: 987654321</li>
                    </ul>
                </div>
            </div>
        </main >
    );
}