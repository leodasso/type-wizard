const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route for getting all the keyboard layouts
 */
router.get('/', rejectUnauthenticated, (req, res) => {

	console.log('get keyboard layout', req.user, req.body);

	// Select all the sessions from the current user
	pool.query(`
		select "keyboard_id" from "user"
		where "id" = $1;`, [req.user.id])
	.then(response => res.send(response.rows))
	.catch(error => console.log('error getting user keyboard id', error));
  });

/**
 * POST route for posting a new keyboard layout
 */
router.post('/', (req, res) => {

	const session = req.body;
	console.log('posting', req.body);
	pool.query(`
		INSERT INTO "session" 
		("legevel_id", "duration", "strokes", "score", "accuracy", "user_id") 
		values ($1, $2, $3, $4, $5, $6);`,
		[session.levelId, session.duration, session.strokes, session.score, session.accuracy, session.userId])
	.then(response => res.sendStatus(201))
	.catch(error => {
			console.log('error posting', error);
			res.sendStatus(500);
		}
		);
});


/**
 * PUT route for updating the user's keyboard layout
 */
router.put('/', rejectUnauthenticated, (req, res) => {

	console.log('updating selected keyboard', req.user, req.body);
	pool.query(
	`
		update "user"
		set "keyboard_id" = $1
		where "id" = $2;`, [req.keyboardId, req.user.id])
	.then(response => res.sendStatus(204))
	.catch(error => {
		console.log('error updating keyboard id for user ' + req.user.id) + ' error: ' + error;
		res.sendStatus(500);
	})
})

module.exports = router;