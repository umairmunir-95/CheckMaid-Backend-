'use strict';

var PhotoLogs = require('../model/photoLogsModel.js');

exports.list_all_photo_logs = function(req, res) 
{
  PhotoLogs.getAllPhotoLogs(function(err,photologs) 
  {
      console.log('on photoLogs controller')
      if (err)
        res.send(err);
      console.log('res', photologs);
      res.send(photologs);
  });
};


exports.create_a_photo_log = function(req, res) 
{
    var new_photo_log = new PhotoLogs(req.body);
    if(!new_photo_log.propertyName || !new_photo_log.image || !new_photo_log.date)
    {
        res.status(400).send({ status:false, message: 'Please provide all input fields. One or more field is missing.' });
    }
    else 
    {
        PhotoLogs.createPhotoLog(new_photo_log, function(err, photologs) 
            {
              if(err)
              {
                // res.send(err);
                  res.json({ status:false,message: err.sqlMessage});
              }
              else
              {
                  res.json({ status:true,message: 'Log created successfully.' });
              }
            });
         
    }
};

exports.get_photo_logs_by_property = function(req, res) {
  PhotoLogs.getLogsByProperty(req.params.propertyName, function(err, photologs) {
    if (err)
      res.send(err);
    res.json(photologs);
  });
};


exports.get_photo_logs_by_date = function(req, res) {
  PhotoLogs.getLogsByDate(req.params.date, function(err, photologs) {
    if (err)
      res.send(err);
    res.json(photologs);
  });
};

