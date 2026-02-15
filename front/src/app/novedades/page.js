import "../../styles/novedades.css"
import NovedadItem from "@/components/novedadItem";

export const metadata = {
    title: "Marusst:: Novedades",
    description: "Descripción de novedades"
};

export default async function Novedades() {

    let novedades = [];

    try {
        const data = await fetch(`${process.env.API_BASE_URL}/api/novedades`, { cache: 'no-store' });

        if (data.ok) {
            novedades = await data.json();
        }
    } catch (error) {
        console.error("Error al cargar novedades: ", error);
    }

    return (
        <main className="holder seccion-novedad">
            <div className="titulo-novedades">
                <h2>NOVEDADES</h2>
                <div className="subrayado"></div>
            </div>

            <div className="novedades-grid">
                {
                    novedades.length > 0 ?
                        (
                            novedades.map(item => < NovedadItem
                                key={item.id}
                                title={item.titulo}
                                description={item.descripcion}
                                type={item.tipo}
                                publication_date={item.fecha_publicacion}
                                image={item.imagen} />)
                        ) : (
                            <p className="sin-novedades">No hay novedades disponibles en este momento</p>
                        )
                }
            </div>
        </main>
    );
};