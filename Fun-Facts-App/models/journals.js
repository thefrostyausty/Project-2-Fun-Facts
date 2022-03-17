// import dependencies
const mongoose = require('./connection')

// import user model for populate
const User = require('./user')
const Fact = require('./facts')
// destructure the schema and model constructors from mongoose
const { Schema, model } = mongoose

const journalSchema = new Schema(
	{
		journal: { type: String, required: true
        },
		fact: { type: Schema.Types.ObjectId,
			ref: 'Fact', },
        owner: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		}
	},
	{ timestamps: true }
)

// .populate is a mongo method and it will run in my route and use the object ref and 
// you can populate that field with user information

const Journal = model('Journal', journalSchema)

/////////////////////////////////
// Export our Model
/////////////////////////////////
module.exports = Journal
