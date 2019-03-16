'user strict';
var sql = require('./db.js');

var Guides = function(guide){
    this.propertyName= guide.propertyName;
    this.propertyAddress = guide.propertyAddress;
    this.guideType=guide.guideType;
    this.image=guide.image;
    this.notes=guide.notes;
    this.requireGPSProof=guide.requireGPSProof;
};

Guides.createGuide= function createGuide(newGuide, result) {    
        sql.query("INSERT INTO propertyguides set ?", newGuide, function (err, res) {
                
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

Guides.getAllGuides = function getAllGuides(result) {
        sql.query("Select * from propertyguides", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('propertyGuides : ', res);  

                 result(null, res);
                }
            });   
};

Guides.getGuideByPropertyName = function createProperty(propertyName, result) {
        sql.query("Select * from  propertyguides where propertyName = ? ", propertyName, function (err, res)
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


Guides.updateById = function(id, guide, result){

    var query = 'UPDATE propertyguides SET image = ?, notes =?, requireGPSProof =? WHERE id=?'; 
    sql.query(query, [guide.image,guide.notes,guide.requireGPSProof, id], function (err, res) 
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


module.exports= Guides;