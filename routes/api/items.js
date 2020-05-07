const express = require('express');
const router = express.Router();

const Project = require('../../models/projects');

// Get request
// Get's all projects

router.get('/', (req, res) => {
    Project.find()
        .then((projects) => res.json(projects));
});

//Post request

router.post('/', (req, res) => {
    const newProject = new Project({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        tags: req.body.tags.split(',')
    });

    newProject.save().then(project => res.json(project))
})

//Delete request

router.delete('/:id', (req, res) => {
    Project.findById(req.params.id)
        .then(project => project.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
})


module.exports = router;

