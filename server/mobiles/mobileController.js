var Mobile = require('./mobileModel.js');

module.exports = {

    getAllMobile : function (req, res){
    	Mobile.find({},function (err, AllMobile) {
    		if(err){
    			res.status(500).send("err");
    		}else{
    			res.json(AllMobile);
    		}
    	})
    },
    insertMobile : function (req, res) {
    	Mobile.findOne({name : req.body.name})
    	.exec(function(err, mobile){
    		if(mobile){
    			res.json(new Error('this mobile is exixt'));
    		}else{
    			var newMobile = new Mobile({
    				company: req.body.company,
    				name : req.body.name,
    				color : req.body.color,
    				os : req.body.os,
    				size : req.body.size,
    				camera : req.body.camera,
    				battery : req.body.battery,
    				memory : req.body.memory,
    				processor : req.body.processor,
    				display : req.body.display
    			})
    			 newMobile.save(function(err, newMobile){
    			 	if(err){
    			 		res.status(500).send(err);
    			 	}else{
    			 		res.json(newMobile)
    			 	}
    			 })
    		}
    	})
    }
}


