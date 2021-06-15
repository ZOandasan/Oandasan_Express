const skills = [
    {id: 101, skill: 'Video Editing', classType: 'DMD'},
    {id: 102, skill: 'C#', classType: 'CIT'},
    {id: 103, skill: 'Javascript', classType: 'CIT'},
    {id: 104, skill: 'PHP', classType: 'CIT'}
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