'use strict';

var Properties = require('../model/propertiesModel.js');

exports.list_all_properties = function(req, res) 
{
  Properties.getAllProperties(function(err,property) 
  {
      console.log('on properties controller')
      if (err)
        res.send(err);
      console.log('res', property);
      res.send(property);
  });
};

exports.read_a_property = function(req, res) {
  Properties.getPropertyById(req.params.propertyId, function(err, property) {
    if (err)
      res.send(err);
    res.json(property);
  });
};

exports.read_property_by_name = function(req, res) {
  Properties.getPropertyByName(req.params.propertyName, function(err, property) {
    if (err)
      res.send(err);
    res.json(property);
  });
};

exports.create_a_property = function(req, res) 
{
    var new_property = new Properties(req.body);
    if(!new_property.propertyName || !new_property.address || !new_property.latitude || !new_property.longitude
      || !new_property.checkInTime || !new_property.checkOutTime || !new_property.checkInRadius)
    {
        res.status(400).send({ status:false, message: 'Please provide propertyName/propertyAddress/latitude/longitude/checkInRadius/checkInTime/checkOutTime.' });
    }
    else 
    {
        Properties.createProperty(new_property, function(err, property) 
            {
              if(err)
              {
                // res.send(err);
                  if(err.code=='ER_DUP_ENTRY')
                  {
                    res.json({ status:false,message: 'PropertyName/Address already exists. Please try to add a different PropertyName/PropertyAddress. '});
                  }
                  else
                  {
                    res.json({ status:false,message: err.sqlMessage});
                  }
              }
              else
              {
                  res.json({ status:true,message: 'Property added successfully.' });
              }
            });
         
    }
};


exports.update_a_property = function(req, res)
{

  Properties.updateById(req.params.propertyId, new Properties(req.body), function(err, property) 
       {
          if (err)
          {
              if(err.code=='ER_DUP_ENTRY')
              {
                 res.json({ status:false,message: 'PropertyName/Address already exists. Please try to add a different PropertyName/PropertyAddress. '});
              }
              else
              {
                 res.json({ status:false,message: err.sqlMessage});
              }
          }
          else{
            res.json({ status:true,message: 'Property updated successfully.' });
          }
      });
};