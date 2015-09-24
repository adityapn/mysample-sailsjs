

module.exports.routes = {

  '/': {
    view: 'homepage'
  },

  'get /login' : {
       controller: 'auth',
       action: 'login'   
  },

  'post /login':{
     controller: 'auth',
     action: 'loginCheck'   
  },

  '/logout':{
    controller: 'auth',
    action: 'logout'   
  },

  '/register':{
    view: 'register'
  }
};
