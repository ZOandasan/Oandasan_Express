const skills = [
    {id: 111, skill: 'Video Editing', classType: 'DMD'},
    {id: 112, skill: 'C#', classType: 'CIT'},
    {id: 113, skill: 'Javascript', classType: 'CIT'}
];

module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}