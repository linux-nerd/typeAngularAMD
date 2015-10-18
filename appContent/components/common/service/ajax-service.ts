///<reference path="../../../../typings/tsd.d.ts" />
/**
 * Created by abhishek on 12/4/15.
 */
define(["app"], function(app){


    class AjaxService{
        log(){
            console.log("Into Service");
        }
    }

    //add as a service
    app.service("ajaxService", AjaxService);
});
