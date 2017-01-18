var assert = require('assert');
var palindrome = require('../routes/palindrome');

var chai        = require('chai');
var chaiHttp    = require('chai-http');
var should      = chai.should();
var server      = require('../server');

chai.use(chaiHttp);


var strings = {
    plain : {
        fail    : "THIS IS NOT A PALINDROME",
        success : "SOCORRAM ME SUBI NO ONIBUS EM MARROCOS"
    },
    obj : {
        fail : {
            word : "THIS IS NOT A PALINDROME"
        },
        success : {
            word : "SOCORRAM ME SUBI NO ONIBUS EM MARROCOS"
        }
    }
};

describe("/GET word", function(){
    it("1 - it should get 200 Http Status code", function(){
        chai.request(server).get("/api/?word=" + strings.plain.success).end(function(err, res){
            res.should.have.status( 200 );
            done();
        });
    });
});

describe("/GET word", function(){
    it("2 - it should get 400 Http Status code", function(){
        chai.request(server).get("/api/?word=" + strings.plain.fail).end(function(err, res){
            res.should.have.status( 400 );
            done();
        });
    });
});

describe("/POST api", function(){
    it("3 - it should get 200 Http Status code", function(){
        chai.request(server).post("/api/check").send(strings.obj.success).end(function(err, res){
            res.should.have.status( 200 );
            done();
        });
    });
});

describe("/POST api", function(){
    it("4 - it should get 400 Http Status code", function(){
        chai.request(server).post("/api/check").send(strings.obj.fail).end(function(err, res){
            res.should.have.status( 400 );
            done();
        });
    });
});