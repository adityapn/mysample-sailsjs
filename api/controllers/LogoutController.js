var passport = require('passport');


module.exports = {

	config: {
        actions: false,
        shortcuts: false,
        rest: false
    },
	
	logout: function(req, res) {
        req.logout();
        res.redirect('/?state=loggedout');
    }
};

