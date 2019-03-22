const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route for getting all the sessions
 */
router.get('/', rejectUnauthenticated, (req, res) => {

	console.log('get sessions', req.user, req.body);

	// Select all the sessions from the current user
	pool.query(`
		SELECT * FROM "session"
		WHERE "user_id" = $1;`, [req.user.id])
	.then(response => res.send(response.rows))
	.catch(error => console.log('error getting sessions', error));
  });

/**
 * POST route for posting a new session
 */
router.post('/', (req, res) => {

	const session = req.body;
	console.log('posting', req.body);
	pool.query(`
		INSERT INTO "session" 
		("level_id", "duration", "strokes", "score", "accuracy", "user_id") 
		values ($1, $2, $3, $4, $5, $6);`,
		[session.levelId, session.duration, session.strokes, session.score, session.accuracy, session.userId])
	.then(response => res.sendStatus(201))
	.catch(error => console.log('error posting', error));
});

module.exports = router;