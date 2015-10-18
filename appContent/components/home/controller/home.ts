///<reference path="../../../../typings/tsd.d.ts" />

define(['app'], function(app: any){
    "use strict";

    class Home{
        private say: string = "hi";

        static $inject = [];
        constructor(){
            this.init();
        }

        init(): void{
            console.log("Home Controller initialized.")
        }
    }

    app.controller("homeController", Home);

});


