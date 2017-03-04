var mobileController = require('../mobiles/mobileController.js');

//=============================================================================
/*								mobile route									 */
//=============================================================================

module.exports=function(app, express){

	app.get('/api/mobiles/',mobileController.getAllMobile);
	app.post('/api/mobiles/',mobileController.insertMobile);
	
}