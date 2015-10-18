"use strict";
require.config({
    baseUrl: "components/",
    paths: {
        "jquery": "vendors/jquery",
        "bootstrap": "vendors/bootstrap",
        "angular": "vendors/angular",
        "angular-route": "vendors/angular-ui-router",
        "angularAMD": 'vendors/angularAMD.min',
        "ui-bootstrap": "vendors/angular-bootstrap-tpls",
        "app": "common/app",
        "ajax-service": "common/service/ajax-service",
        "dummy-directive": "common/directive/dummy-directive"
    },
    shim: {
        "angular": ["jquery"],
        "angularAMD": ["angular"],
        "angular-route": ["angular"],
        "bootstrap": ["jquery"],
        "ui-bootstrap": ["angular", "bootstrap"]
    },
    deps: ["app"]
});
