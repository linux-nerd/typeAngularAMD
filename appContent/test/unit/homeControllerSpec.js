/**
 * Created by pk on 18/10/15.
 */

define(['home-controller', 'angularAMD'], function (app, angularAMD) {
    var scope, ctrl;
    angularAMD.inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('homeController', {

        });
    });
    describe('home/home-controller.js', function () {
        it('should have say string in controller', function () {
            expect(ctrl.say).toBeDefined();
            expect(ctrl.say).toEqual("hi");
        });
    });
});