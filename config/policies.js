module.exports.policies = {

  //'*': true,

  'ApplicantController': {
    '*': 'isAuthenticated'
  },

  'applicant':{
    '*': 'isAuthenticated'
  },

  'AuthController':{
    '*': 'notAuthenticated'
  }

};
