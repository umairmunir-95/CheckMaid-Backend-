'use strict';

var Guides = require('../model/propertyGuidesModel.js');

exports.list_all_guides = function(req, res) 
{
  Guides.getAllGuides(function(err,guide) 
  {
      console.log('on propertiesGuides controller')
      if (err)
        res.send(err);
      console.log('res', guide);
      res.send(guide);
  });
};

exports.read_a_guide = function(req, res) {
  Guides.getGuideByPropertyName(req.params.propertyName, function(err, guide) {
    if (err)
      res.send(err);
    res.json(guide);
  });
};

exports.create_a_guide = function(req, res) 
{
    var new_guide = new Guides(req.body);
    Guides.createGuide(new_guide, function(err, guide) 
            {
              if(err)
              {
                 if(err.code=='ER_DUP_ENTRY')
                      {
                        res.json({ status:false,message: 'Guide for this property already exists.'});
                      }
                      else
                      {
                        res.json({ status:false,message: err.sqlMessage});
                      }
              }
              else
              {
                  res.json({ status:true,message: 'Guide created successfully.' });
              }
            });
};

exports.update_a_guide = function(req, res)
{

  Guides.updateById(req.params.guideId, new Guides(req.body), function(err, guide) 
       {
          if (err)
          {
             res.json({ status:false,message: err.sqlMessage});
          }
          else{
            res.json({ status:true,message: 'Guide updated successfully.' });
          }
      });
};

