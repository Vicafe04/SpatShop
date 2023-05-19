const jwt = require('jsonwebtoken');

const validaAcesso = (req, res, next) => {
    const token = req.headers.authorization;

    jwt.verify(token, process.env.KEY, (err, data) => {
        if(err != null) res.status(404).json(err).end();
        else {
            if(data.role === "vet") {
                window.location.href = ""
            }else if(data.role === "camareira"){
                window.location.href = ""
            }else if(data.role === "cuidador"){
                window.location.href = ""
            }else{
                res.status(401).end();
            }
        }
    })

    res.status(200).end();
}

module.exports = {
    validaAcesso
}