'user strict';
var sql = require('./db.js');

var Properties = function(property){
    this.propertyName = property.propertyName;
    this.address = property.address;
    this.latitude=property.latitude;
    this.longitude=property.longitude;
    this.checkInRadius=property.checkInRadius;
    this.checkInTime=property.checkInTime;
    this.checkOutTime=property.checkOutTime;
    this.imageBase64=property.imageBase64;
};

Properties.createProperty= function createProperty(newProperty, result) {    
        sql.query("INSERT INTO properties set ?", newProperty, function (err, res) {
                
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

Properties.getAllProperties = function getAllProperties(result) {
        sql.query("Select * from properties", function (err, res) {

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

Properties.getPropertyById = function createProperty(propertyId, result) {
        sql.query("Select * from properties where id = ? ", propertyId, function (err, res)
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

Properties.getPropertyByName = function createProperty(propertyName, result) {
        sql.query("Select * from properties where propertyName = ? ", propertyName, function (err, res)
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

Properties.updateById = function(id, property, result){

    var query = 'UPDATE properties SET propertyName = ?, address =?, latitude =?, longitude =?, checkInRadius =?, checkInTime =?, checkOutTime =?,imageBase64 =? WHERE id=?'; 
    sql.query(query, [property.propertyName,property.address,property.latitude,property.longitude,property.checkInRadius,property.checkInTime,property.checkOutTime,property.imageBase64, id], function (err, res) 
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

module.exports= Properties;