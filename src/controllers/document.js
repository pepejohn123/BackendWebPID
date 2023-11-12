const Document = require('./../models/document');
const jwt = require('jsonwebtoken');

class DocumentController {
    insertar(req, res) {
        const documentData = req.body;
        console.log(req.body);
        Document.create(documentData)
            .then(response => {
                console.log(response);
                if (response) {
                    console.log('Document created:', response);
                    res.send(response);
                }
                else {
                    res.sendStatus(400);
                }
            })
            .catch(err => {
                console.log('Insert error:', err);
            })
    }

    ver(req, res) {
        console.log("estás en el controller\n");
        console.log(req.user._id);
        Document.find({ owner: req.user._id })
            .then(response => {
                console.log('Respuesta: ', response);
                res.send(response);
            }).catch(e => {
                res.sendStatus(500);
                console.log('Error:', e);
            })
    }
}

module.exports = new DocumentController();