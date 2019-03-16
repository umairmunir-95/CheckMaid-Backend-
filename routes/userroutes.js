const express = require('express');
const router = express.Router();
var users = require('../controller/userController');
var properties = require('../controller/propertiesController');
var guides = require('../controller/propertyGuidesController');
var timeLogs = require('../controller/timeLogsController');
var photoLogs = require('../controller/photoLogsController');
var damageReports = require('../controller/damageReportsController');
  
router.route('/users')
.get(users.list_all_users)
.post(users.create_a_user);

router.route('/users/deleteAccount/:userID')
.delete(users.deleteAccount);

router.route('/users/login/:userCredentials')
.get(users.login);

router.route('/users/:userID')
.put(users.update_a_user);


router.route('/users/forgotPassword/:userEmail')
.put(users.forgot_password);

router.route('/properties/add')
.post(properties.create_a_property);

router.route('/properties')
.get(properties.list_all_properties);


router.route('/properties/:propertyId')
.get(properties.read_a_property)
.put(properties.update_a_property);

router.route('/properties/getByName/:propertyName')
.get(properties.read_property_by_name);


router.route('/guides')
.get(guides.list_all_guides)
.post(guides.create_a_guide);


router.route('/guides/:guideId')
.put(guides.update_a_guide);

router.route('/guides/:propertyName')
.get(guides.read_a_guide)


router.route('/timelogs')
.get(timeLogs.list_all_time_logs)
.post(timeLogs.create_a_time_log);

router.route('/timelogs/byUser/:userID')
.get(timeLogs.get_logs_by_user_id);

router.route('/timelogs/byProperty/:propertyID')
.get(timeLogs.get_logs_by_property_id);

router.route('/timelogs/byDate/:date')
.get(timeLogs.get_logs_by_date);


router.route('/timelogs/byPropertyName/:propertyName')
.get(timeLogs.get_logs_by_property_name);


router.route('/photoLogs')
.get(photoLogs.list_all_photo_logs)
.post(photoLogs.create_a_photo_log);

router.route('/photoLogs/byProperty/:propertyName')
.get(photoLogs.get_photo_logs_by_property);

router.route('/photoLogs/byDate/:date')
.get(photoLogs.get_photo_logs_by_date);

router.route('/damageReports')
.get(damageReports.list_all_damage_reports)
.post(damageReports.create_a_damage_report);


router.route('/damageReports/byProperty/:propertyName')
.get(damageReports.get_damage_reports_by_property);

router.route('/damageReports/byDate/:date')
.get(damageReports.get_damage_reports_by_date);


module.exports = router;
      
