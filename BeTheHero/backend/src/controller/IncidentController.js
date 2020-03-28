const connection = require('../database/connection')

class IncidentController {

    async index(req, res) {
        const {page = 1} = req.query

        const [countIncidents] =  await connection('incidents').count()

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit('5')
        .offset((page-1) * 5)
        .select([
            'incidents.*', 
            'ongs.name', 
            'ongs.city', 
            'ongs.whatsapp', 
            'ongs.email',
            'ongs.uf'
        ])

        //adicionando total de incidents no cabeçalho da resposta
        res.header('X-Total-Count', countIncidents['count(*)'])

        return res.json(incidents)
    }

    async create(req, res) {
        const {title, description, value} = req.body
        const ong_id = req.headers.authorization

        //retorna um Array, assim pega o id do 1º registro
        const [id] = await connection('incidents').insert({
            title, description, value, ong_id
        })

        res.json({id})
    }

    async delete(req, res) {
        const {id} = req.params
        const ong_id = req.headers.authorization

        console.log(ong_id)

        const incident = await connection('incidents').where('id', id).select('ong_id').first()

        if(incident.ong_id != ong_id){
            return res.status(401).json({err: "Operation not permited"})
        }
        
        await connection('incidents').where('id', id).delete();

        res.status(204).send();
    }
}

module.exports = new IncidentController()