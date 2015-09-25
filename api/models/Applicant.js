var bcrypt = require('bcrypt');

module.exports = {

  _config: {
    actions: false,
    shortcuts: false,
    rest: false
  },

  attributes: {
  	id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'id',
      autoIncrement: true
    },
    username: {
      type: 'string',
      unique: true,
      columnName: 'username'
    },
    firstname: {
      type: 'string',
      columnName: 'firstname'
    },
    lastname: {
      type: 'string',
      columnName: 'lastname'
    },
    middlename: {
      type: 'string',
      columnName: 'middlename'
    },
    password: {
      type: 'string',
      columnName: 'password'
    },
    email: {
      type: 'email',
      unique: true,
      columnName: 'email'
    },
    mobile:{
    	type: 'string',
    	unique: true,
    	columnName: 'mobile'
    },
    emailVerified:{
    	type: 'boolean',    	
    	columnName: 'emailVerified',
      defaultsTo : false
    },
    dateOfBirth:{
    	type:'date',
    	columnName: 'dateOfBirth'	
    },
    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },

  beforeCreate: function(user, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    console.log(err);
                    cb(err);
                } else {
                    user.password = hash;
                    cb();
                }
            });
        });
    }
};

