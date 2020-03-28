const connection = require('../database/connection')

class ProfileController{
    async index(req, res){
        const ong_id = req.headers.authorization

        const allIncidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*')

        return res.json(allIncidents)
    }
}

module.exports = new ProfileController()