

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

  '/register':{
    view: 'register'
  }
};
