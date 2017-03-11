let mobileController = require('../mobiles/mobileController.js');
let usersController=require('../users/usersController.js');
let commentCtrl = require('../comment/commentCtrl.js')
// =============================================================================
/*								mobile route									 */
// =============================================================================

module.exports = (app, express)=> {

	app.get('/api/mobiles/:company', mobileController.getAllMobile);
	app.post('/api/mobiles/', mobileController.insertMobile);
	// =============================================================================
	/*								Users Route									 */
// =============================================================================

	app.post('/api/users/signup', usersController.signup);
	app.post('/api/users/signin', usersController.signin);

	// =============================================================================
	/*								Users Route									 */
// =============================================================================
	app.post('/api/comment/comment', commentCtrl.insertComment);
	app.get('/api/comment/comment',commentCtrl.getAllComments);
};