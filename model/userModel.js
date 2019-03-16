'user strict';
var sql = require('./db.js');

var Users = function(users){
    this.email = users.email;
    this.username = users.username;
    this.userType=users.userType;
    this.assignedProperties=users.assignedProperties;
    this.password=users.password;
    this.userCredentials=users.email+"_"+users.password;
};

Users.createUser= function createUser(newUser, result) {    
        sql.query("INSERT INTO users set ?", newUser, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};

Users.getAllUsers = function getAllUsers(result) {
        sql.query("Select id,username,email,userType,assignedProperties from users", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('users : ', res);  

                 result(null, res);
                }
            });   
};


Users.updateById = function(id, users, result){

    var query = 'UPDATE users SET assignedProperties = ? WHERE id=?'; 
    sql.query(query, [users.assignedProperties, id], function (err, res) 
    {
        if(err) 
        {
            console.log("error: ", err);
            result(err,err);
        }
        else
        {   
            result(null,res);
        }
    }); 
};

Users.login = function login(userCredentials, result) {
    sql.query("Select id,username,email,userType,assignedProperties from users where userCredentials = ? ",userCredentials, function (err, res)
         {             
            if(err) 
            {
                console.log("error: ", err);
                result(err, null);
            }
            else
            {
                result(null, res);
            }
        });   
};

Users.deleteAccount = function(id, result){
     sql.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                 result(null, res);
                }
            }); 
};



Users.forgotPassword = function(email, users, result){

    var query = 'UPDATE users SET password = ? WHERE email=?'; 
    sql.query(query, [users.password, email], function (err, res) 
    {
        if(err) 
        {
            console.log("error: ", err);
            result(err,err);
        }
        else
        {   
            result(null,res);
        }
    }); 
};

module.exports= Users;