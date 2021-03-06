const Joi = require('joi');

var schema = Joi.object().keys({
    module_version_id: Joi.string().uuid().required(),
    instance_id: Joi.string().uuid().required(),
    source: Joi.string().required().max(200)
});

module.exports = schema;