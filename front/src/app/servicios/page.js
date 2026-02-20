import "../../styles/servicios.css"

export const metadata = {
    tittle: "Marusst:: Servicios",
    description: "descripcion de servicios"
};

export default function Servicios() {
    return (
        <main className="holder serv">
            <div className="titulo">
                <h2>NUESTROS SERVICIOS</h2>
                <div className="subrayado"></div>
            </div>
            <div className="servicios">
                <div className="servicio">
                    <div className="portada-servicio">
                        <img src="img/servicio1.png" alt="servicio1" />
                            <h4>Fabricación de piezas técnicas mediante impresión 3D.</h4>
                    </div>
                    <p>Producción de componentes mecánicos, eléctricos o estructurales para maquinaria industrial,
                        utilizando impresión 3D con materiales técnicos (nylon, ABS, PETG, resinas, compuestos reforzados).
                        Ideal para mantenimiento, adaptación o desarrollo de soluciones personalizadas.</p>
                </div>
                <div className="servicio">
                    <div className="portada-servicio">
                        <img src="img/servicio2.png" alt="servicio2" />
                            <h4>Diseño y desarrollo de proyectos técnicos.</h4>
                    </div>
                    <p>Elaboración de planos, cálculos estructurales y especificaciones técnicas para obras civiles,
                        industriales o de infraestructura. Se abordan requerimientos normativos, funcionales y constructivos
                        desde la etapa inicial.</p>
                </div>
                <div className="servicio">
                    <div className="portada-servicio">
                        <img src="img/servicio3.png" alt="servicio3" />
                            <h4>Gestión de proyectos y dirección de obra.</h4>
                    </div>
                    <p>Planificación, coordinación y supervisión de proyectos de ingeniería para asegurar el cumplimiento de
                        plazos, costos y estándares de calidad. Se integran herramientas de control y seguimiento técnico.
                    </p>
                </div>
                <div className="servicio">
                    <div className="portada-servicio">
                        <img src="img/servicio4.png" alt="servicio4" />
                            <h4>Estudios de factibilidad técnica y económica.</h4>
                    </div>
                    <p>Evaluación integral de la viabilidad de proyectos, considerando aspectos técnicos, financieros,
                        normativos y ambientales. Se orienta la toma de decisiones estratégicas con base en datos concretos.
                    </p>
                </div>
                <div className="servicio">
                    <div className="portada-servicio">
                        <img src="img/servicio5.png" alt="servicio5" />
                            <h4>Consultoría en eficiencia energética y sostenibilidad.</h4>
                    </div>
                    <p>Diagnóstico de consumos energéticos y propuestas de mejora para reducir emisiones, optimizar recursos
                        y cumplir con normativas ambientales. Se aplican criterios de ingeniería sustentable.</p>
                </div>

            </div>

        </main>
    );
}