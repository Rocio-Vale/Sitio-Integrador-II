import "../../styles/galeria.css"

export const metadata = {
    tittle: "Marusst:: Galeria",
    description: "descripcion de galeria"
};

export default function Galeria() {
    return (
        <main className="holder gal">
            <div className="titulo">
                <h2>NUESTROS TRABAJOS</h2>
            </div>

            <div className="galeria">

                <div className="diseño">
                    <div className="titulo">
                        <img src="img/icon1.png" alt="" />
                        <h4>Impresión 3D</h4>
                    </div>
                    <div className="imagenes">
                        <div className="imagen"><img src="img/galery/img3D-1.jpg" alt="" /></div>
                        <div className="imagen"><img src="img/galery/img3D-4.jpg" alt="" /></div>
                        <div className="imagen"><img src="img/galery/img3D-2.jpg" alt="" /></div>
                        <div className="imagen"><img src="img/galery/img3D-3.jpg" alt="" /></div>
                    </div>
                </div>

                <hr />
                <div className="diseño">

                    <div className="titulo">
                        <img src="img/icon2.png" alt="" />
                        <h4>Elaboración de planos</h4>
                    </div>
                    <div className="imagenes">

                        <div className="imagen"><img src="img/galery/img3D-5.jpg" alt="" /></div>
                        <div className="imagen"><img src="img/galery/img3D-7.jpg" alt="" /></div>
                        <div className="imagen"><img src="img/galery/img3D-9.jpg" alt="" /></div>
                        <div className="imagen"><img src="img/galery/img3D-8.jpg" alt="" /></div>

                    </div>

                </div>
                <hr />
                <div className="diseño">
                    <div className="titulo">
                        <img src="img/icon3.png" alt="" />
                        <h4>Proyectos industriales</h4>
                    </div>
                    <div className="imagenes">
                        <div className="imagen"><img src="img/galery/img3D-10.jpg" alt="" /></div>
                        <div className="imagen"><img src="img/galery/img3D-11.jpg" alt="" /></div>
                        <div className="imagen"><img src="img/galery/img3D-12.jpg" alt="" /></div>
                        <div className="imagen"><img src="img/galery/img3D-14.jpg" alt="" /></div>

                    </div>
                </div>
            </div>

        </main>
    );
};