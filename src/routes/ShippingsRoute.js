const express = require("express");
const app = express();
const { Shippings } = require("../bd/Sequealize");

app.get("/shippings", async (req, res) => {
    const shippings = await Shippings.findAll();
    if (shippings) {
        res.status(200).json({ shippings });
    }
    else {
        res.status(400).json({ "error": `No se han podido encontrar envios` })
    }
})


app.get("/shippings/:id", async (req, res) => {
    const shippingsID = req.params.id;
    if (shippingsID) {
        const shipping = await Shippings.findOne({ where: { id: shippingsID } })
        if (shipping) {
            res.status(200).json({ shipping });
        }
        else {
            res.status(400).json({ "error": `No se ha podido encontrar el envio con el id ${shippingsID}` })
        }
    } else {
        res.status(400).json({ error: 'Todos los campos deben estar llenos' })
    }
})

app.put("/shippings/:id", async (req, res) => {
    if(req.params.id){
        const shipp = await Shippings.findOne({ where: { id: req.params.id } });
        if (shipp) {
            Shippings.update(
                {
                    ...req.body
                },
                { 
                    where: 
                    {
                        id: shipp.id
                    }
                }
            ).then(() => { res.json({ mensaje:'Envio Actualizado'});}
            ).catch((error) => { throw new Error(error)});
        } else {
            res.status(400).json({ mensaje:'El envio no existe' })
        }
    }else{
        res.status(400).json({ error: 'Todos los campos son obligatorios' })
    }
});

app.post("/shippings", async (req, res) => {
    if (req.body) {
        Shippings.create(req.body);
        res.status(200).json({ mensaje: 'Cuenta creada correctamente' });
    } else {
        res.status(400).json({ error: 'Todos los campos deben estar llenos' })
    }
});


module.exports = app;