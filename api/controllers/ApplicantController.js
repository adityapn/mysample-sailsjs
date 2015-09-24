
module.exports = {
	applicants: function (req,res) {
		var newApplicant = {
			username: "pnaditya",
			firstname: null,
			lastname: null,
			middlename: null,
			password: "password",
			email: "pnaditya@gmail.com",
			mobile:null,
			emailVerified:false,
			dateOfBirth:null
		};

		Applicant.create(newApplicant).exec(function createCB(err, created){
			if(err){
				return res.json(err);				
			}		  
			return res.json(created);							
		});			
	}	
};

