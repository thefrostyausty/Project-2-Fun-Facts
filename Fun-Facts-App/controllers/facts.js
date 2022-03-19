// Import Dependencies
const express = require('express')
const Facts = require('../models/facts.js')

// Create router
const router = express.Router()

// Router Middleware
// Authorization middleware
// If you have some resources that should be accessible to everyone regardless of loggedIn status, this middleware can be moved, commented out, or deleted. 
router.use((req, res, next) => {
	// checking the loggedIn boolean of our session
	if (req.session.loggedIn) {
		// if they're logged in, go to the next thing(thats the controller)
		next()
	} else {
		// if they're not logged in, send them to the login page
		res.redirect('/auth/login')
	}
})

// Routes

// index ALL this is currently sending all the USERS(tt) facts on /facts 
// when instead it should be /facts/faves
router.get('/faves', (req, res) => {
	// console.log('the route is hit')
	Facts.find({owner: req.session.userId})
		.populate('owner')
		.then(facts => {
			// const username = req.session.username
			// const loggedIn = req.session.loggedIn
			console.log('this si facts', facts)
			const { username, userId, loggedIn } = req.session
			res.render('userfacts/index', {facts: facts, username, userId, loggedIn})
			// res.render('facts/fun', { facts, username, loggedIn })
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// creating a GET route for /faves that maybe can render the /favefacts/index page

// router.get('/faves', (req, res) => {
// 	Facts.find({})
// 		.then(facts => {
// 			console.log(facts)
// 			const username = req.session.username
// 			const loggedIn = req.session.loggedIn
// 			res.render('/favefacts/index')
// 		})
// 		.catch(error => {
// 			console.log('this si the error', error)
// 			res.send(error)
// 		})
// })

// index that shows only the user's fave facts
// currently this page does not exist, maybe it needs a GET route for it?
router.post('/faves', (req, res) => {
    // destructure user info from req.session
    const { username, userId, loggedIn } = req.session
	console.log('req.body from favefact form', req.body)
	req.body.owner = userId
	
	console.log('req.body after owner', req.body)
	// now using a reference
	// and since we stored the id of the user in the session object
	// we can use it to set the owner property
	// of the facts upon creation
	req.body.owner = req.session.userId
	Facts.create(req.body)
		.then((facts) => {
			console.log('this is what is coming from create', facts)
			res.redirect('/facts/faves')
		})
		.catch((error) => {
			console.log(error)
			res.send(error)
		})
	
	// res.render('')
})

// new route -> GET route that renders our page with the form
router.get('/new', (req, res) => {
	const { username, userId, loggedIn } = req.session
	res.render('userfacts/new', { username, loggedIn })
})

// create -> POST route that actually calls the db and makes a new document
router.post('/', (req, res) => {
	// req.body.ready = req.body.ready === 'on' ? true : false

	req.body.owner = req.session.userId
	Facts.create(req.body)
		.then(facts => {
			console.log('this was returned from create', facts)
			res.redirect('/facts')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// edit route -> GET that takes us to the edit form view
router.get('/:id/edit', (req, res) => {
	// we need to get the id
	const factsId = req.params.id
	Facts.findById(factsId)
		.then(facts => {
			res.render('facts/edit', { example })
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// update route
router.put('/:id', (req, res) => {
	const exampleId = req.params.id
	req.body.ready = req.body.ready === 'on' ? true : false

	Example.findByIdAndUpdate(exampleId, req.body, { new: true })
		.then(example => {
			res.redirect(`/examples/${example.id}`)
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// show route
// router.get('/:id', (req, res) => {
// 	const factsId = req.params.id
// 	Facts.findById(exampleId)
// 		.then(facts => {
//             const {username, loggedIn, userId} = req.session
// 			res.render('facts/show', { example, username, loggedIn, userId })
// 		})
// 		.catch((error) => {
// 			res.redirect(`/error?error=${error}`)
// 		})
// })

// delete route
router.delete('/:id', (req, res) => {
	const factsId = req.params.id
	Facts.findByIdAndRemove(factsId)
	// console.log('this is what returns factsID', factsId)
		.then(facts => {
			res.redirect('/facts/faves')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// Export the Router
module.exports = router
