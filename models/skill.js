const skills = [
    {id: 101, skill: 'Video Editing', classType: 'DMD'},
    {id: 102, skill: 'C#', classType: 'CIT'},
    {id: 103, skill: 'Javascript', classType: 'CIT'},
    {id: 104, skill: 'PHP', classType: 'CIT'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}

function create(newSkill) {
    newSkill.id = Date.now() % 1000000;
    skills.push(newSkill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}