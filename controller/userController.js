'use strict';

var Users = require('../model/userModel.js');

exports.list_all_users = function(req, res) 
{
  Users.getAllUsers(function(err,users) 
  {
      console.log('controller')
      if (err)
        res.send(err);
      console.log('res', users);
      res.send(users);
  });
};

exports.create_a_user = function(req, res) 
{
    var new_users = new Users(req.body);
    if(!new_users.username || !new_users.email || !new_users.password || !new_users.userType)
    {
        res.status(400).send({ status:false, message: 'Please provide username/email/password/userType.' });
    }
    else 
    {
        if(new_users.userType.toString().toLowerCase()=='admin' || new_users.userType.toString().toLowerCase()=='cleaner')
        {
          if(!/[^a-zA-Z0-9]/.test(new_users.password))
          {
                Users.createUser(new_users, function(err, users) 
                {
                  if(err)
                  {
                    if(err.code=='ER_DUP_ENTRY')
                      {
                        res.json({ status:false,message: 'Account already exists.'});
                      }
                      else
                      {
                        res.json({ status:false,message: err.sqlMessage});
                      }
                  }
                  else
                  {
                      res.json({ status:true,message: 'You have been registered successfully.' });
                  }
                });
          }
          else{
                 res.json({ status:false,message: 'Error, Special characters are not allowed in password.' });
          }
        }
        else{
             res.json({ status:false,message: 'Please provide a valid userType.' }); 
        }        
    }
};

exports.update_a_user = function(req, res)
{

  Users.updateById(req.params.userID, new Users(req.body), function(err, users) 
       {
          if (err)
          {
              if(err.code=='ER_DUP_ENTRY')
              {
                 res.json({ status:false,message: 'User already exists.'});
              }
              else
              {
                 res.json({ status:false,message: err.sqlMessage});
              }
          }
          else{
            res.json({ status:true,message: 'Properies assigned successfully.' });
          }
      });
};

exports.login = function(req, res) {
  Users.login(req.params.userCredentials, function(err, users) {
    if (err)
      res.send(err);
    res.json(users);
  });
};


exports.deleteAccount = function(req, res) {

  Users.deleteAccount( req.params.userID, function(err, task) {
    if (err)
       res.json({ status:false,message: err.sqlMessage});
            
    res.json({ status:true,message: 'Account deleted successfully.' });
  });
};

exports.forgot_password = function(req, res)
{

  Users.forgotPassword(req.params.userEmail, new Users(req.body), function(err, users) 
       {
          if (err)
          {
             res.json({ status:false,message: err.sqlMessage});
          }
          else
          {
            if(users.affectedRows==0)
            {
              res.json({ status:false,message: 'Change password request cannot be completed as no user found associated with entered email address.' });
            }
            else
            {
              res.json({ status:true,message: 'Your password has been changed. Please login to continue.' });
            }
          }
      });
};
