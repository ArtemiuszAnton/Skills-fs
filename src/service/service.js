const fs = require('fs');

function readJsonFIle() {
    const jsonString = fs.readFileSync('./src/storage.json');
    const data = JSON.parse(jsonString);
    return data
}

function writeFile(arr) {
    fs.writeFileSync('./src/storage.json', JSON.stringify(arr))
}

function getAllSkills() {
    const arr = readJsonFIle();
    if (!arr) throw new Error('database is empty')
    return arr
}

function getSkillById(id) {
    const arr = readJsonFIle();
    return arr.filter(el => el.id == id);
}

function updateSkill(id, title) {
    const arr = readJsonFIle();
    const index = arr.findIndex(el => el.id == id);
    arr[index] = {
        id,
        title,
    };
    writeFile(arr)
    return arr
}

function deleteById(id) {
    const arr = readJsonFIle();
    return arr.filter(el => el.id != id);
}

module.exports = { getAllSkills, getSkillById, updateSkill, deleteById }