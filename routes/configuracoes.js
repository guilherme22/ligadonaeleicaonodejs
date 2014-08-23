var tokenApp =  "O0BkkGjZhhF2",
request = require('request'),
options =  {
    url: 'http://api.transparencia.org.br/sandbox/v1/',
    headers: {
    	'Content-Type':'application/json',
        'App-Token': tokenApp
    }
};
module.exports = {
	request: request,
	options: options,
	defaultUrl: 'http://api.transparencia.org.br/sandbox/v1/'
}


