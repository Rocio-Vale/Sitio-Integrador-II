var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

var util = require('util');
var cloudinary = require('cloudinary').v2;
// const uploader = util.promisify(cloudinary.uploader.upload);
// const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function (req, res, next) {
    try {
        var novedades = await novedadesModel.getNovedades();
        // novedades = novedades;

        for (let novedad of novedades) {
            if (novedad.fecha_publicacion) {
                const fecha = new Date(novedad.fecha_publicacion);
                novedad.fecha_publicacion = fecha.toLocaleDateString('es-ES');
            }
        };

        novedades = novedades.map(novedad => {
            const publicId = novedad.imagen_url ? novedad.imagen_url : 'img-null_hl8g8y';
            const imagen_url = cloudinary.image(publicId, {
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return {
                ...novedad,
                imagen_url
            }
        });

        res.render('admin/novedades',
            {
                layout: 'admin/layout',
                usuario: req.session.nombre,
                novedades
            });
    } catch (error) {
        next(error);
    }
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar',
        { layout: 'admin/layout' })
});


router.post('/agregar', async (req, res, next) => {

    var imagen_url = '';
    try {
        if (req.files && Object.keys(req.files).length > 0) {
            let imagen = req.files.imagen_url;

            const img_temp = await cloudinary.uploader.upload(imagen.tempFilePath);
            imagen_url = img_temp.public_id;
            // imagen_url = (await uploader(imagen.tempFilePath)).public_id;
        }

        if (req.body.titulo != "" && req.body.descripcion != "" && req.body.tipo != "" && req.body.fecha_publicacion != "") {
            await novedadesModel.insertNovedades({
                ...req.body, imagen_url
            });
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
    try {
        var id = req.params.id;
        let novedad = await novedadesModel.getNovedadesById(id);

        if (novedad && novedad.imagen_url) {
            await cloudinary.uploader.destroy(novedad.imagen_url);
        }

        await novedadesModel.deleteNovedadesById(id);
        res.redirect('/admin/novedades');
    } catch (error) {
        console.log(error);
        res.redirect('/admin/novedades');
    }
});

router.get('/modificar/:id', async (req, res, next) => {
    try {
        var id = req.params.id;
        var novedad = await novedadesModel.getNovedadesById(id);

        if (novedad) {
            if (novedad.fecha_publicacion) {
                novedad.fecha_publicacion = novedad.fecha_publicacion.toISOString().split('T')[0];
            }

            res.render('admin/modificar', {
                layout: 'admin/layout',
                novedad
            });
        } else {
            res.redirect('/admin/novedades');
        }
    } catch (error) {
        console.log(error);
        res.redirect('/admin/novedades');
    }
});

router.post('/modificar', async (req, res, next) => {
    try {
        let imagen_url = req.body.img_original;
        let borrar_img_anterior = false;

        if (req.body.borrar_img === "1") {
            imagen_url = null;
            borrar_img_anterior = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                let imagen = req.files.imagen_url;
                const img_temp = await cloudinary.uploader.upload(imagen.tempFilePath);
                imagen_url = img_temp.public_id;
                // imagen_url = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_anterior = true;
            }
        }

        if (borrar_img_anterior && req.body.img_original) {
            await cloudinary.uploader.destroy(req.body.img_original);
            // await (destroy(req.body.img_original));
        }

        var id = req.body.id;
        var obj = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            tipo: req.body.tipo,
            fecha_publicacion: req.body.fecha_publicacion,
            imagen_url
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