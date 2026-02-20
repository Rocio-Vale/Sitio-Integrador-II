import "../../styles/nosotros.css"
export const metadata = {
    tittle: "Marusst:: Nosotros",
    description: "descripcion de nosotros"
};

export default function Nosotros() {

    return (
        <main className="holder nos">
            <div className="titulo">
                <h2>QUIÉNES SOMOS</h2>
                <div className="subrayado"></div>
                <img src="img/imagotipo2.png" alt="Marusst" />
                <p>Soluciones industriales</p>
            </div>
            <hr />
            <div className="col">
                <div className="caja">

                    <p><i className="fa-solid fa-bullseye"></i></p>
                    <h3>Misión</h3>
                    <p>En Marusst, nos dedicamos a buscar soluciones efectivas y en brindar servicios de calidad a
                        empresas y
                        microempresas. Nos especializamos en resolver problemas que nuestros clientes no pueden afrontar
                        por sí mismos, ofreciendo un soporte integral que les permita enfocarse en su crecimiento y
                        desarrollo.
                    </p>
                </div>

                <div className="caja">
                    <p><i className="fa-solid fa-eye"></i></p>
                    <h3>Visión</h3>
                    <p>Aspiramos a ser líderes en la prestación de soluciones innovadoras. Creemos en el
                        emprendimiento
                        como motor de cambio y nos comprometemos a crecer continuamente. Nuestro objetivo es
                        satisfacer las
                        necesidades de nuestros clientes a través de un enfoque proactivo y personalizado.</p>
                </div>
            </div>
            <hr />

            <section className="nosotros">
                <div className="titulo">
                    <h2>STAFF</h2>
                </div>
                <div className="personas">
                    <div className="persona">
                        <img src="img/persona1.png" alt="Ana Alvarez" />
                        <h4>Ana Álvarez</h4>
                        <h5>Director General</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi et incidunt ducimus autem iure
                            accusantium quas omnis .</p>
                    </div>

                    <div className="persona">
                        <img src="img/persona2.png" alt="Juan Gomez" />
                        <h4>Juan Gomez</h4>
                        <h5>Jefe de Operaciones</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi et incidunt ducimus autem iure
                            accusantium.</p>
                    </div>

                    <div className="persona">
                        <img src="img/persona3.png" alt="María Clark" />
                        <h4>María Clark</h4>
                        <h5>Coordinador de Servicios</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi et incidunt ducimus autem iure
                            accusantium quas.</p>
                    </div>
                </div>
            </section>

        </main>

    );
};