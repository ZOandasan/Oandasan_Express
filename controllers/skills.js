const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: newDelete,
  edit, 
  update,
};

function show(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/show', { skill });
}

function index(req, res) {
  const skills = Skill.getAll();
  res.render('skills/index', { skills });
}

function newSkill(req, res) {
  res.render('skills/new');
}

function create(req, res) {
  Skill.create(req.body);
  res.redirect('/skills');
}

function newDelete(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function update(req, res) {
  //req.body.done = !!req.body.done;
  Skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', { skill });
}