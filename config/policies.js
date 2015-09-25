module.exports.policies = {

  //'*': true,

  'ApplicantController': {
    '*': 'isAuthenticated'
  },

  'LoginController':{
    '*': 'notAuthenticated'
  },

  'LogoutController':{
    '*': 'isAuthenticated'
  },

  'RegisterController':{
    '*': 'notAuthenticated'
  }

};
