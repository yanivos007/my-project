const apiRouter = require('express').Router();

// Add new routes here.. For example:
// apiRouter.use('/users', require('./users/usersRouter'));

// AND / OR
// create entry point.. For example:
//      apiRouter.get('/', (req, res) => {
//      // if DB access is required:
//        const repository = require('./repository');
//        const x = await repository.findById(5);  // DON'T forget to add "async" before the (req,res) function
//      });

module.exports = apiRouter;