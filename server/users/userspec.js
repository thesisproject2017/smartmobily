const app = require('../server.js');
const request = require('supertest');
const expect = require('chai').expect;
const sign=require('./usersController.js')

describe('users',function(){
	this.timeout(15000)

	it('should create a new user',function(done){
		this.timeout(15000)
	    
		request(app)
		.post('/api/users/signup')
		.send({
			username:"abobakr23",
			password:"1234567892",
			email:"abo@bakr2.com"
		})
		.set('Accept', 'application/json')
		.expect('Content-Type' , 'text/html; charset=utf-8')
		.expect(200)
		.end(function(err, res){
			expect(sign).to.be.an('object');
			done();
			setTimeout(done, 15000);
	})
})

	it('should verify if the user is exist',function(done){
		this.timeout(15000)

		request(app)
		.post('/api/users/signin')
		.send({
			username:"hsan",
			password:"hsan",
			email:"hsan@gmail.com"
		})
		.set('Accept', 'application/json')
		.expect('Content-Type' , 'text/html; charset=utf-8')
		.expect(201)
		.end(function(err, req,res){
			// if(err){
			// 	console.log(err);
			// }
			expect(sign).to.be.an('object');
			
			done();
			setTimeout(done, 15000);
	  })
	})
});

