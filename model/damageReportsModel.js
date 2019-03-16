'user strict';
var sql = require('./db.js');

var DamageReports = function(damageReports){
    this.propertyName = damageReports.propertyName;
    this.image = damageReports.image;
    this.date=damageReports.date;
    this.notes=damageReports.notes;
   };

DamageReports.createDamageReport= function createDamageReport(newDamageReport, result) {    
        sql.query("INSERT INTO damagereports set ?",newDamageReport , function (err, res) {
                
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

DamageReports.getAllDamageReports = function getAllDamageReports(result) {
        sql.query("Select * from damagereports", function (err, res) {

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

DamageReports.getDamageReportsByProperty = function getDamageReportsByProperty(propertyName, result) {
        sql.query("Select * from damagereports where propertyName = ? ", propertyName, function (err, res)
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

DamageReports.getDamageReportsByDate = function getDamageReportsByDate(date, result) {
        sql.query("Select * from damagereports where date = ? ", date, function (err, res)
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



module.exports= DamageReports;