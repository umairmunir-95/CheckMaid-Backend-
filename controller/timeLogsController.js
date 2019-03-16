'use strict';

var TimeLogs = require('../model/timeLogsModel.js');

exports.list_all_time_logs = function(req, res) 
{
  TimeLogs.getAllTimeLogs(function(err,timeLog) 
  {
      console.log('on timelog controller')
      if (err)
        res.send(err);
      console.log('res', timeLog);
      res.send(timeLog);
  });
};


exports.create_a_time_log = function(req, res) 
{
    var new_timelog = new TimeLogs(req.body);
    TimeLogs.createTimeLog(new_timelog, function(err, new_timelog) 
    {
      if(err)
      {
         res.json({ status:false,message: err.sqlMessage});
      }
      else
      {
         res.json({ status:true,message: 'Time logged successfully.' });
      }
    });
      
};

exports.get_logs_by_user_id = function(req, res) {
  TimeLogs.getLogsByUserID(req.params.userID, function(err, timelog) {
    if (err)
      res.send(err);
    res.json(timelog);
  });
};

exports.get_logs_by_property_id = function(req, res) {
  TimeLogs.getLogsByProperty(req.params.propertyID, function(err, timelog) {
    if (err)
      res.send(err);
    res.json(timelog);
  });
};

exports.get_logs_by_property_name = function(req, res) {
  TimeLogs.getLogsByPropertyName(req.params.propertyName, function(err, timelog) {
    if (err)
      res.send(err);
    res.json(timelog);
  });
};

exports.get_logs_by_date = function(req, res) {
  TimeLogs.getLogsByDate(req.params.date, function(err, timelog) {
    if (err)
      res.send(err);
    res.json(timelog);
  });
};
