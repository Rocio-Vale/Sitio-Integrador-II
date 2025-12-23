import "../../styles/novedades.css"
import NovedadItem from "@/components/novedadItem";

export const metadata = {
    tittle: "Marusst:: Novedades",
    description: "descripcion de novedades"
};

export default function Novedades() {
    return (
        <main className="holder nov">
            <div className="titulo">
                <h2>LANZAMIENTOS</h2>
            </div>
            <NovedadItem></NovedadItem>
        </main>
    );
};