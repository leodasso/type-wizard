const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route for getting all the sessions
 */
router.get('/', (req, res) => {
    
});

/**
 * POST route for posting a new session
 */
router.post('/', (req, res) => {

    const session = req.body;
    console.log('posting', req.body);
    pool.query(`
        INSERT INTO "session" 
        ("level_id", "duration", "strokes", "score", "accuracy") 
        values ($1, $2, $3, $4, $5);`,
        [session.levelId, session.duration, session.strokes, session.score, session.accuracy])
    .then(response => res.sendStatus(201))
    .catch(error => console.log('error posting', error));
});

module.exports = router;