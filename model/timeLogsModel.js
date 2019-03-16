'user strict';
var sql = require('./db.js');

var TimeLogs = function(timelog){
    this.userID = timelog.userID;
    this.userEmail = timelog.userEmail;
    this.userName=timelog.userName;
    this.propertyID=timelog.propertyID;
    this.propertyName=timelog.propertyName;
    this.checkInTime=timelog.checkInTime;
    this.checkOutTime=timelog.checkOutTime;
    this.date=timelog.date;
};

TimeLogs.createTimeLog= function createTimeLog(newTimeLog, result) {    
        sql.query("INSERT INTO timelogs set ?", newTimeLog, function (err, res) {
                
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

TimeLogs.getAllTimeLogs = function getAllTimeLogs(result) {
        sql.query("Select * from timelogs", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('timelogs : ', res);  

                 result(null, res);
                }
            });   
};


TimeLogs.getLogsByUserID = function getLogsByUserID(userID, result) {
        sql.query("Select * from timelogs where userID = ? ", userID, function (err, res)
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

TimeLogs.getLogsByProperty = function getLogsByPropertyID(propertyID, result) {
        sql.query("Select * from timelogs where propertyID = ? ", propertyID, function (err, res)
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

TimeLogs.getLogsByPropertyName = function getLogsByPropertyName(propertyName, result) {
        sql.query("Select * from timelogs where propertyName = ? ", propertyName, function (err, res)
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

TimeLogs.getLogsByDate = function getLogsByDate(date, result) {
        sql.query("Select * from timelogs where date = ? ", date, function (err, res)
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



module.exports= TimeLogs;