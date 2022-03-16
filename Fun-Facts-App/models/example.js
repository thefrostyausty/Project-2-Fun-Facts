// import dependencies
const mongoose = require('./connection')

// import user model for populate
const User = require('./user')

// destructure the schema and model constructors from mongoose
const { Schema, model } = mongoose

const factSchema = new Schema(
	{
		
		body: { type: String, required: true },
        owner: {
			type: Schema.Types.ObjectID,
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
