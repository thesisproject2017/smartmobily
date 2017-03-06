var mobileController = require('../mobiles/mobileController.js');
var usersController=require('../users/usersController.js');
//=============================================================================
/*								mobile route									 */
//=============================================================================

module.exports=function(app, express){

	app.get('/api/mobiles/:company',mobileController.getAllMobile);
	app.post('/api/mobiles/',mobileController.insertMobile);
	app.post('/api/users/signup',usersController.signup);
	app.post('/api/users/signin',usersController.signin);

	
}