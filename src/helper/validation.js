function isValidId(req, res, next) {
    const { id } = req.params;
    if (typeof (id) != 'number' && typeof (id) != 'string') throw new Error('error type');
    if (!isNaN(id)) throw new Error('id error, type: string')
    next()
}

function isValidSkill(req, res, next) {
    if(!req.body.hasOwnProperty('title')) throw new Error('title is undefind')
    const { title } = req.body;
    if (!isNaN(title)) throw new Error('title from number');
    next()
}

module.exports = { isValidId, isValidSkill }