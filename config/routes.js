

module.exports.routes = {

  '/': {
    view: 'homepage'
  },

  'get /login' : {
       controller: 'login',
       action: 'login'   
  },

  'post /login':{
     controller: 'login',
     action: 'loginCheck'   
  },

  '/logout':{
    controller: 'logout',
    action: 'logout'   
  },

  'get /register':{
    controller: 'register',
    action: 'register'
  },

  'post /register':{
    controller: 'register',
    action: 'registerUser'
  }
};
