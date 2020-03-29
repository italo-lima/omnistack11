const connection = require('../database/connection')
const generateUniqueId = require('../utils/generateUniqueId')

class OngController {
    async index(req, res){
        const ongs = await connection('ongs').select("*")

        res.json(ongs)
    }

    async create(req, res) {
        const {name, email, whatsapp, city, uf} = req.body
    
        const id = generateUniqueId()
    
        await connection('ongs').insert({id, name, email, whatsapp, city, uf})
    
         res.json({id})
    }
}

module.exports = new OngController();