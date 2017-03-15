const Code = Require('code');

const Lab = Require('lab');

const lab = exports.lab=Lab.script();

const {bemVindo}= require('./ola.js');

lab.test('verifica', function(done){

	Code.expect(bemVindo('mario')), to.equal('bem vindo mario');
}

