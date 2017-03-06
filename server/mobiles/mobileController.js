var Mobile = require('./mobileModel.js');

module.exports = {

    getAllMobile : function (req, res){
        console.log( req.params.company)
    	Mobile.find({company: req.params.company},function (err, AllMobile) {
            console.log(AllMobile)
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
    			res.json(new Error('mobile already exists'));
    		}else{
    			var newMobile = new Mobile({
                    name : req.body.name,
    				company: req.body.company,
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


