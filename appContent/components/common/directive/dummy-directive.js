///<reference path="../../../../typings/tsd.d.ts" />
define(["app"], function (app) {
    (function () {
        dummy.$inject = ["ajaxService"];
        function dummy(ajaxService) {
            return {
                restrict: "A",
                link: function (scope, iElement, iAttrs) {
                    ajaxService.log();
                }
            };
        }
        app.directive("dummyDirective", dummy);
    })();
});
//# sourceMappingURL=dummy-directive.js.map