const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const projectRoutes = require('./project-routes');
const skillsRoutes = require('./skills-routes.js');

router.use('/users', userRoutes);
router.use('/project', projectRoutes);
router.use('/skills', skillsRoutes);

module.exports = router;
