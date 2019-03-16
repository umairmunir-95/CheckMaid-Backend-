'use strict';

var DamageReports = require('../model/damageReportsModel.js');

exports.list_all_damage_reports = function(req, res) 
{
  DamageReports.getAllDamageReports(function(err,damageReports) 
  {
      console.log('on damageReports controller')
      if (err)
        res.send(err);
      console.log('res', damageReports);
      res.send(damageReports);
  });
};


exports.create_a_damage_report = function(req, res) 
{
    var new_damage_report = new DamageReports(req.body);
    if(!new_damage_report.propertyName || !new_damage_report.image || !new_damage_report.date || !new_damage_report.notes)
    {
        res.status(400).send({ status:false, message: 'Please provide all input fields. One or more field is missing.' });
    }
    else 
    {
        DamageReports.createDamageReport(new_damage_report, function(err, damageReports) 
            {
              if(err)
              {
                // res.send(err);
                  res.json({ status:false,message: err.sqlMessage});
              }
              else
              {
                  res.json({ status:true,message: 'DamageReport created successfully.' });
              }
            });    
    }
};

exports.get_damage_reports_by_property = function(req, res) {
  DamageReports.getDamageReportsByProperty(req.params.propertyName, function(err, damageReports) {
    if (err)
      res.send(err);
    res.json(damageReports);
  });
};


exports.get_damage_reports_by_date = function(req, res) {
  DamageReports.getDamageReportsByDate(req.params.date, function(err, damageReports) {
    if (err)
      res.send(err);
    res.json(damageReports);
  });
};

