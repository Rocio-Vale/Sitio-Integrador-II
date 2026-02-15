export default async function NovedadItem(props) {

    const { title, description, type, publication_date, image } = props;
    const img_null = 'https://res.cloudinary.com/dwtrqrolv/image/upload/v1770947068/img-null_hl8g8y.png';
    const date = new Date(publication_date).toLocaleDateString('es-AR',
        {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }
    );

    return (

        <div className="contenedor-novedad">
            <div className="contenedor-imagen">
                {image ? <img src={image} alt={title} /> : <img src={img_null} alt="null" className="novedad-imagen" />}
                <span className="novedad-tipo">{type}</span>
            </div>

            <div className="novedad-contenido">
                <span className="novedad-fecha">{date}</span>
                <h4 className="novedad-titulo">{title}</h4>
                <p className="novedad-descripcion">{description}</p>
            </div>
        </div>

    );
}