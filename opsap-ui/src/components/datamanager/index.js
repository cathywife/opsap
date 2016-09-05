/**
 * module opsap.datamanager
 */

require('../../baseService')
require('../services/backupdata.service')

module.exports = angular.module('opsap.datamanager', ['backupdataService', 'baseService'])
                   .controller('DatamanagerController', require('./datamanager.controller'));