var passport = require('passport');


module.exports = {

	config: {
        actions: false,
        shortcuts: false,
        rest: false
    },

	login: function (req,res) {		
		return res.render('login');
	},	

	loginCheck: function(req,res){
		
		passport.authenticate('local', function(err, applicant, info) {
            if ((err) || (!applicant)) {
                return res.send({                    
                    applicant: applicant
                });
            }
            req.logIn(applicant, function(err) {
                if (err) res.send(err);
                return res.send({                    
                    applicant: applicant
                });
            });

        })(req, res);	
	},

	logout: function(req, res) {
        req.logout();
        res.redirect('/');
    }
};

