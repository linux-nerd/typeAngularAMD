///<reference path="../../../../typings/tsd.d.ts" />
define(['app'], function (app) {
    "use strict";
    var Home = (function () {
        function Home() {
            this.say = "hi";
            this.init();
        }
        Home.prototype.init = function () {
            console.log("Home Controller initialized.");
        };
        Home.$inject = [];
        return Home;
    })();
    app.controller("homeController", Home);
});
//# sourceMappingURL=home.js.map