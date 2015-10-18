///<reference path="../../../../typings/tsd.d.ts" />
define(["app"], function(app){

    (()=>{
        dummy.$inject = ["ajaxService"];
        function dummy(ajaxService): ng.IDirective{
            return {
                restrict: "A",
                link: ( scope: ng.IScope, iElement: ng.IAugmentedJQuery, iAttrs: ng.IAttributes )=>{
                    ajaxService.log();
                }
            }
        }

        app.directive("dummyDirective", dummy);
    })()
});
