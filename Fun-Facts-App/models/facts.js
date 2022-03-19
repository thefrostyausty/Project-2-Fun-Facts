// import dependencies
const mongoose = require('./connection')

// import user model for populate
const User = require('./user')
const Journal = require('./journals')
// destructure the schema and model constructors from mongoose
const { Schema, model } = mongoose

const factSchema = new Schema(
	{
		
		fact: { type: String, required: true },
        owner: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		}
	},
	{ timestamps: true }
)

const Facts = model('Facts', factSchema)

/////////////////////////////////
// Export our Model
/////////////////////////////////
module.exports = Facts
