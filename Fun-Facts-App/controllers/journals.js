
   
////////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////////
const express = require('express')
const Journal = require('../models/journals')
const { route } = require('./facts')

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



router.get('/', (req, res) => {
	// console.log('the route is hit')
	Journal.find({owner: req.session.userId})
		.populate(['fact', 'owner'])
		.then(journals => {
			// const username = req.session.username
			// const loggedIn = req.session.loggedIn
			console.log('this is journals', journals)
			// console.log('this is facts', facts)
			const { username, userId, loggedIn } = req.session
			res.render('userfacts/journals', {journals: journals, username, userId, loggedIn})
			// res.render('facts/fun', { facts, username, loggedIn })
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// // new route in order to display all the journals
// router.get('/new', (req, res) => {
// 	res.render('journals/new')
// })

// CREATE Route in order to send the journals to the right page
// journals/new/:factsid
router.post('/new/:factsId', (req, res) => {
	// it is attaching an owner to the request body and assigning a value (in this case userId)
    req.body.owner = req.session.userId
	req.body.fact = req.params.factsId
	console.log('this is the req body', req.body)
	Journal.create(req.body)
		.then(journals => {
			console.log('this was returned from journals', journals)
			res.redirect('/journals')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// Edit Route in order to edit the journal entry that was made
router.get('/:id/edit', (req, res) => {
    const journalsId = req.params.id
	Journal.findById(journalsId)
		.then(journals => {
			res.render('userfacts/journalsedit', { journals: journals })
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// update route -> sends a put request to our database
router.put('/:id', (req, res) => {
	// get the id
	const journalsId = req.params.factsId
	
	Journal.findByIdAndUpdate(journalsId, req.body, { new: true })
	// if successful -> redirect to the journals page
	// .populate('journal')
		.then((journals) => {
			console.log('this is the req.body', req.body)
			console.log('the updated journals', journals)
			const { username, userId, loggedIn } = req.session
			res.redirect(`/journals/${journal.id}`)
			// res.redirect(`/journals/${journal.id}`)
		})
		// if an error, display that
		.catch((error) => res.json(error))
})
// delete router in order to delete the journal entries that was made
router.delete('/:id', (req, res) => {
	const journalsId = req.params.id
	Journal.findByIdAndRemove(journalsId)
	// console.log('this is what returns factsID', factsId)
		.then(journals => {
			res.redirect('/journals')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})











// Export the Router
module.exports = router