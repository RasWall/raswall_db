// Schemas for various entities in RasWall

const AuthSessionSchema = {
	username: String,
	magic: String,
	ip: String,
	category: String,
	maxTime: Number,
	req_url: String,
	loginTime: Date
}

const httpSchema = {
	req_url: String,
	ip: String
}

const catgSchema = {
	catgName: String,
	maxTime: Number,
	enrolledLists: []
}

const userSchema = {
	username: String,
	passwd: String,
	ctTime: Date,
	category: String
}

const webListSchema = {
	listName: String,
	blackList: [],
}

const faultySchema = {
	url: String,
	category: String,
	ip: String,
	username: String,
	listname: String,
	accessTime: Date
}
