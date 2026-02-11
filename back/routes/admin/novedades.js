var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

router.get('/', async function (req, res, next) {

    var novedades = await novedadesModel.getNovedades();

    for (let novedad of novedades) {
        if (novedad.fecha_publicacion) {
            const fecha = new Date(novedad.fecha_publicacion);
            novedad.fecha_publicacion = fecha.toLocaleDateString('es-ES');
        }
    }

    res.render('admin/novedades',
        {
            layout: 'admin/layout',
            usuario: req.session.nombre,
            novedades
        });
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar',
        { layout: 'admin/layout' })
});


router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.titulo != "" && req.body.descripcion != "" && req.body.tipo != "" && req.body.fecha_publicacion != "" && req.body.imagen_url != "") {
            await novedadesModel.insertNovedades(req.body);
            res.redirect('/admin/novedades');
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
    }
    catch (error) {
        console.log(error);
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se cargó la novedad'
        })
    }
});

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;

    await novedadesModel.deleteNovedadesById(id);

    res.redirect('/admin/novedades');
});

router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;

    var novedad = await novedadesModel.getNovedadesById(id);

    novedad.fecha_publicacion = novedad.fecha_publicacion.toISOString().split('T')[0];

    res.render('admin/modificar', {
        layout: 'admin/layout',
        novedad
    })
});

router.post('/modificar', async (req, res, next) => {
    try {
        var id = req.body.id;
        var obj = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            tipo: req.body.tipo,
            fecha_publicacion: req.body.fecha_publicacion,
            imagen_url: req.body.imagen_url
        }
        await novedadesModel.updateNovedadById(obj, id);
        res.redirect('/admin/novedades');
    } catch (error) {
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modificó la novedad'
        });
    }
});

module.exports = router;