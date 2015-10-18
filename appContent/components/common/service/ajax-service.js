///<reference path="../../../../typings/tsd.d.ts" />
/**
 * Created by abhishek on 12/4/15.
 */
define(["app"], function (app) {
    var AjaxService = (function () {
        function AjaxService() {
        }
        AjaxService.prototype.log = function () {
            console.log("Into Service");
        };
        return AjaxService;
    })();
    //add as a service
    app.service("ajaxService", AjaxService);
});
//# sourceMappingURL=ajax-service.js.map