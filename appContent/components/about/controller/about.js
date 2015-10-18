///<reference path="../../../../typings/tsd.d.ts" />
var about;
(function (about) {
    define([
        'app',
        "ajax-service",
        "dummy-directive"
    ], function (app, ajaxService) {
        var aboutController = (function () {
            function aboutController(ajaxService) {
                this.ajaxService = ajaxService;
                this.say = "Hello About";
                this.printLog();
            }
            aboutController.prototype.printLog = function () {
                this.ajaxService.log();
            };
            aboutController.$inject = ["ajaxService"];
            return aboutController;
        })();
        app.controller("aboutController", aboutController);
    });
})(about || (about = {}));
//# sourceMappingURL=about.js.map