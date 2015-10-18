///<reference path="../../../../typings/tsd.d.ts" />
module about {
    define([
            'app',
            "ajax-service",
            "dummy-directive"
        ],
        function (app, ajaxService: ng.IServiceProviderClass):void {

            interface iAboutController {
                say: string,
                printLog(): void
            }

            class aboutController implements iAboutController {
                say = "Hello About";

                static $inject = ["ajaxService"];

                constructor(private ajaxService) {
                    this.printLog();
                }

                printLog() {
                    this.ajaxService.log();
                }
            }

            app.controller("aboutController", aboutController);
        }
    );
}
