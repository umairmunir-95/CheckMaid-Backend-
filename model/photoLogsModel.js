'user strict';
var sql = require('./db.js');

var PhotoLogs = function(photoLogs){
    this.propertyName = photoLogs.propertyName;
    this.image = photoLogs.image;
    this.date=photoLogs.date;
   };

PhotoLogs.createPhotoLog= function createPhotoLog(newPhotoLog, result) {    
        sql.query("INSERT INTO photologs set ?",newPhotoLog , function (err, res) {
                
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

PhotoLogs.getAllPhotoLogs= function getAllPhotos(result) {
        sql.query("Select * from photologs", function (err, res) {

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

PhotoLogs.getLogsByProperty = function getLogsByProperty(propertyName, result) {
        sql.query("Select * from photologs where propertyName = ? ", propertyName, function (err, res)
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

PhotoLogs.getLogsByDate = function getLogsByDate(date, result) {
        sql.query("Select * from photologs where date = ? ", date, function (err, res)
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

module.exports= PhotoLogs;