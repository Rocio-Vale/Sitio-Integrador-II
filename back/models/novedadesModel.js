var pool = require('./bd');

async function getNovedades() {
    var query = 'select * from novedades';
    var rows = await pool.query(query);
    return rows;
}

async function insertNovedades(obj) {
    try {
        var query = 'insert into novedades (titulo, descripcion, tipo, fecha_publicacion, imagen_url) values (?, ?, ?, ?, ?)';
        var rows = await pool.query(query, [obj.titulo, obj.descripcion, obj.tipo, obj.fecha_publicacion, obj.imagen_url]);
        return rows;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteNovedadesById(id) {
    var query = 'delete from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getNovedadesById(id) {
    var query = 'select * from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function updateNovedadById(obj, id) {
    try {
        var query = 'update novedades set titulo = ?, descripcion = ?, tipo = ?, fecha_publicacion = ?, imagen_url = ? where id = ?'
        var rows = await pool.query(query, [obj.titulo, obj.descripcion, obj.tipo, obj.fecha_publicacion, obj.imagen_url, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}


module.exports = { getNovedades, insertNovedades, deleteNovedadesById, getNovedadesById, updateNovedadById };