/**
 * ApplicantController
 *
 * @description :: Server-side logic for managing applicants
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	applicants: function (req,res) {
		return res.json(
			{
				name:"applicants"	
			}
		);
	}	
};

