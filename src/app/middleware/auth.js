import jwt from 'jsonwebtoken'
import Driver from '../models/Driver.js'

const auth = async (req, res, next) => {
    try {
        //LÊ O HEADER AUTHORIZATION
        const token = req.header('Authorization').replace('Bearer ', '')
        //VALIDA O TOKEN
        const decoded = jwt.verify(token, 'PARKINGLOT')
        //SEARCH FOR A USER WITH THIS TOKEN
        const driver = await Driver.findOne({ _id: decoded._id, 'tokens.token': token })
        if (!driver) {
            throw new Error()
        }
        req.token = token
        //GUARDA O USUÁRIO PARA PODER SER USADO PELAS FUNÇÕES QUE VÊM DEPOIS
        req.driver = driver
        next()
    } catch (e) {
        //NOT AUTHENTICATED ERROR
        res.status(401).send({ error: "Please authenticate" })
    }
}

export default auth