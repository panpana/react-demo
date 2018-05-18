'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var protocol = 'http:';
var severUrl = '//10.84.144.229';
var port = ':8051/';
var catalog = 'api/';
var url = '' + protocol + severUrl + port + catalog;
var taskUrl = url + 'tasks/';
var taskResultsUrl = url + 'task_results/';
var productsUrl = url + 'products/';
var workersUrl = url + 'workers/';

exports.taskUrl = taskUrl;
exports.taskResultsUrl = taskResultsUrl;
exports.productsUrl = productsUrl;
exports.workersUrl = workersUrl;