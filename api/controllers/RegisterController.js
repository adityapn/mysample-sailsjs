
module.exports = {

	config: {
        actions: false,
        shortcuts: false,
        rest: false
    },

	register: function (req,res) {		
		return res.render('register');
	},

	registerUser: function(req,res){
		var username = req.param("username");
		var email = req.param("email");
		var password = req.param("password");
		var newApplicant = {
			username: username,
			password: password,
			email: email			
		};

		Applicant.create(newApplicant).exec(function createCB(err, created){
			if(err){
				return res.json(err);				
			}		  
			return res.json(created);							
		});

	}
}