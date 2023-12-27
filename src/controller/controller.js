const express = require('express');
const { getAllSkills, getSkillById, updateSkill, deleteById } = require('../service/service')
const { isValidId, isValidSkill } = require('../helper/validation')
const route = express.Router();

route.get('/',  (_req, res) => {
    try {
        const data = getAllSkills()
        res.status(200).send(data)
    } catch (er) {
        res.status(400).send(er.message)
    }
})

route.get('/:id', (req, res) => {
    try {
        const { id } = req.params
        const skill = getSkillById(id);
        res.status(200).send(skill)
    } catch (er) {
        res.status(400).send(er.message)
    }
})

// route.post('/', (req, res) => {
//     try {
//         const { title } = req.body
//         const
//         res.status(200).send()
//     } catch (er) {
//         res.status(400).send(er.message)

//     }
// })

route.put('/:id', (req, res) => {
    try {
        const { title } = req.body
        const { id } = req.params
        const update = updateSkill(id, title)
        res.status(200).send(update)
    } catch (er) {
        res.status(400).send(er.message)
    }
});

route.delete('/:id',(req, res) => {
    try {
        const { id } = req.params
        const del = deleteById(id)
        res.status(200).send(del)
    } catch (er) {
        res.status(400).send(er.message)
    }
})

module.exports = { route }