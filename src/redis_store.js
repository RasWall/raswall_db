const redis = require('redis')
const client = redis.createClient()

client.on('error', err => console.log("Error: " + err))

// Redis stores httpSchema, AuthSessionSchema

const getCurrentUnixTime = () => (
	Math.floor(new Date()/1000)
)

// store auth session
const storeAuthSession = (authSession) => {
	client.hmset([
		'auth_session:' + authSession.magic,
		'username', authSession.username,
		'magic', authSession.magic,
		'ip', authSession.ip,
		'category', authSession.category,
		'maxtime', authSession.maxTime,
		'req_url', authSession.req_url,
		'loginTime', getCurrentUnixTime()
	], (err, resp) => {})
}

const storeHttp = (httpParams) => {
	client.hmset([
		'httprequest:' + ip + ':' + getCurrentUnixTime()
		'req_url', httpParams.req_url,
		'ip', httpParams.ip
	], (err, resp) => {})
}

module.export = {
	storeAuthSession: storeAuthSession,
	storeHttp: storeHttp
}
