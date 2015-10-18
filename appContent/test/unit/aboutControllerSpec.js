/**
 * Created by pk on 18/10/15.
 */
define(['about-controller', 'angularAMD', 'ajax-service'], function (app, angularAMD, ajaxService) {
    var scope, ctrl, ajaxService;
    angularAMD.inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('aboutController', {

        });
    });
    describe('home/home-controller.js', function () {
        it('should have say string in controller', function () {
            expect(ctrl.say).toBeDefined();
            expect(ctrl.say).toEqual("Hello About");
        });
    });
});