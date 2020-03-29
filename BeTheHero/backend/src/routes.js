const express = require('express')
const {celebrate, Joi, Segments} = require('celebrate')

const OngController = require('./controller/OngController')
const IncidentController = require('./controller/IncidentController')
const ProfileController = require('./controller/ProfileController')
const SessionController = require('./controller/SessionController')

const routes = express.Router()

routes.post('/session', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().length(2)
    })
}) ,OngController.create)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}),IncidentController.create)

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}),IncidentController.delete)

routes.get('/profile-incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}),ProfileController.index)

module.exports = routes