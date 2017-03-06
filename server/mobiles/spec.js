const app = require('../server.js');
const request = require('supertest');
const expect = require('chai').expect;

describe('Mobile', function () {
	it('should get all the mobile by company name', function(done){
		request(app)
		.get('/api/mobiles/:company')
		.set('Accept', 'application/json')
		.expect('Content-Type' , 'application/json; charset=utf-8')
		.expect(200)
		.end(function(err, res){
			if(err){
				console.log(err);
			}
			expect(res.body).to.be.an('array');
			done();
		})
	})
	it('should create new mobile',function(done){
         request(app)
         .post('/api/mobiles/')
         .send({
         	company:'Samsung',
			name:'s4mini',
			color:'white',
			os:'android',
			size:'4inch',
			camera:'1m',
			battery:'120',
			memory:'2GB',
			processor:'omg',
			display:'256colors'
         })
         .set('Accept', 'application/json')
		.expect('Content-Type' , 'application/json; charset=utf-8')
		.expect(200)
		.end(function(err, res){
			if(err){
				console.log(err);
			}
			expect(res.body).to.be.an('object');
			done();
		})
	})
})

