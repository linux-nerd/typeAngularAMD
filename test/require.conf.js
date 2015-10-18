/**
 * Created by pk on 18/10/15.
 */
'use strict';

var allTestFiles = [],
    TEST_REGEXP = /(spec|test)\.js$/i;

Object.keys(window.__karma__.files).forEach(function (file) {
    if (TEST_REGEXP.test(file)) {
        allTestFiles.push(file);
    }
});

require.config({
    baseUrl: "/base",

    paths: {
        "jquery": "appContent/components/vendors/jquery",
        "bootstrap": "appContent/components/vendors/bootstrap",
        "angular": "appContent/components/vendors/angular",
        "angular-route": "appContent/components/vendors/angular-ui-router",
        "angularAMD": 'appContent/components/vendors/angularAMD.min',
        "ui-bootstrap": "appContent/components/vendors/angular-bootstrap-tpls",
        'home-controller': 'appContent/components/home/controller/home',
        'about-controller': "appContent/components/about/controller/about",
        'ajax-service': "appContent/components/common/service/ajax-service",
        'dummy-directive': "appContent/components/common/directive/dummy-directive",
        'app': 'test/app'
    },

    shim: {
        'home-controller': ['app'],
        'ajax-service': ['app'],
        'dummy-directive': ['app', 'ajax-service'],
        'about-controller': ['app', 'ajax-service', 'dummy-directive'],
        'angular-mocks': ['angular'],
        "angular": ["jquery"],
        "angularAMD": ["angular"],
        "angular-route": ["angular"],
        "bootstrap": ["jquery"],
        "ui-bootstrap": ["angular", "bootstrap"]
    },

    deps: allTestFiles,

    callback: window.__karma__.start
});