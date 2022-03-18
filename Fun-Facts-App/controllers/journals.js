////////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////////
const express = require('express')
const Journal = require('../models/journals')

////////////////////////////////////////////
// Create router
////////////////////////////////////////////
const router = express.Router()


////////////////////////////////////////////
// Routes
////////////////////////////////////////////

// these routes should be able to render the journals page
// show the facts and the journal entry about them
// have the ability to edit and delete certain journal entries
// what I think will be able to render the journals page in order to
// show all the users faves and be able to comment/journal 
// about the fact they favorited



router.get('/facts/journals', (req, res) => {
	// console.log('the route is hit')
	Journal.find({owner: req.session.userId})
		.populate('owner')
		.then(journals => {
			// const username = req.session.username
			// const loggedIn = req.session.loggedIn
			console.log('this si facts', journals)
			const { username, userId, loggedIn } = req.session
			res.render('userfacts/show', {journal: journal, facts, username, userId, loggedIn})
			// res.render('facts/fun', { facts, username, loggedIn })
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})


















// Export the Router
module.exports = router