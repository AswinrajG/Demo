(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Modules/box/box.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Modules/box/box.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@changeDivSize]=currentState class=\"box\" [ngClass]=\"elevation\" (mouseover)=\"changeStyle($event)\"\r\n    (mouseout)=\"changeStyle($event)\" [ngStyle] = \"{'height': truncating ? '272px' : 'auto'}\">\r\n    \r\n    <img src=\"assets/RoundYellow.png\" class=\"image\" />\r\n    <img src=\"assets/{{image}}\" class=\"image2\" />\r\n    \r\n    <div>\r\n        <p style=\"color: rgb(255,230,0); font-weight: bold; text-align: center;cursor: pointer;\" title=\"Click to see details\" (click)=\"goToAssetDetails()\"> <a style=\"color:rgb(255,230,0)\">{{title}}</a></p>\r\n        <!-- <p>{{Data}} </p> -->\r\n        <div *ngIf=\"Data.length <= limit\">{{Data}}</div>\r\n        <div *ngIf=\"truncating && Data.length > limit\" style=\"cursor:pointer\">\r\n            <p>{{Data | truncate : limit}}</p>\r\n            <p class=\"showMore\" (click)=\"truncating = false\" >show more</p>\r\n            \r\n        </div>\r\n        <div *ngIf=\"!truncating && Data.length > limit\" style=\"cursor:pointer\">\r\n            <p>  {{Data}} </p>\r\n            <p class=\"showMore\" (click)=\"truncating = true\" >show less</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet ></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/asset-details/asset-details.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/asset-details/asset-details.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow-x:hidden;background-color: \">\r\n    <nav  class=\"navbar navbar-default navbar-static-top\" style=\"margin-bottom:-1%;width:100%\" >\r\n        <div  class=\"container\">\r\n            <div   class=\"row\" style=\"padding:3.5%\">\r\n                <img src=\"../../assets/whiteAsset -1.png\" style=\"display: inline;\r\n                width: 4%;\r\n                position: absolute;\r\n                top: 2%;\r\n                left: 1%;\"/>\r\n                <h3 style=\"    display: inline;\r\n                font-family: Arial, Helvetica, sans-serif;\r\n                /* margin-left: 2%; */\r\n                font-size: 164%;\r\n                top: 8%;\r\n                left: 7%;\r\n                position: absolute;\"><b>{{title}}</b></h3>\r\n            </div>\r\n        </div>\r\n\r\n    \r\n    </nav>\r\n\r\n    <mat-video src=\"../../assets/Digitization solution.mp4\" autoplay = \"true\" ></mat-video>\r\n\r\n\r\n<div style=\"background-color: #2e2e38\">\r\n    <img [@changeDivSize]=currentState src = \"../../assets/IndexAssetSpec.PNG\" style=\"padding-top:5%;height:100%;width:100%\" />\r\n    </div>\r\n\r\n    <div style=\"background-color: #2e2e38\">\r\n        <img  [@changeDivSize]=currentState src = \"../../assets/IndexBusinessApplication.PNG\" style=\"padding-top:5%;height:100%;width:100%\" />\r\n        </div>\r\n\r\n        <div style=\"background-color: #2e2e38\">\r\n            <img  [@changeDivSize]=currentState src = \"../../assets/IndexSector.PNG\" style=\"padding-top:5%;height:100%;width:100%\" />\r\n            </div>\r\n\r\n            <button [routerLink] = \"['/dashboard']\" style = \"float:right;position:fixed;bottom:2%;right:2%;background-color: rgb(255,230,0);color:black;border:1px solid black\" _ngcontent-vqc-c21=\"\" mat-fab=\"\" class=\"mat-fab mat-accent\">\r\n                <span style=\"color:black;font-size:22px\"class=\"glyphicon glyphicon-step-backward\"></span>\r\n                <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\"></div>\r\n                <div class=\"mat-button-focus-overlay\"></div>\r\n            </button> \r\n\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/asset-tracking/asset-tracking.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/asset-tracking/asset-tracking.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav _ngcontent-vyk-c12=\"\" class=\"navbar navbar-default navbar-static-top\" style=\"margin-bottom:-1%;width:100%;background-color: black\">\r\n        <div _ngcontent-vyk-c12=\"\" class=\"container\">\r\n        <div _ngcontent-vyk-c12=\"\" class=\"row\" style=\"padding:3.5%\"><img _ngcontent-vyk-c12=\"\" class=\"ng-tns-c12-20\" src=\"../../assets/whiteAsset -1.png\" style=\"display: inline;\r\n        width: 4%;\r\n        position: absolute;\r\n        top: 2%;\r\n        left: 1%;\">\r\n        </div>\r\n\r\n        <button _ngcontent-awq-c1=\"\" _ngcontent-vqc-c21=\"\" class=\"mat-fab mat-accent\" mat-fab=\"\" style=\"float:right;position:fixed;top:2%;right:2%;background-color:black;color:black;border:1px solid black;border:1px solid rgb(255,230,0);\" tabindex=\"0\" [routerLink] = \"['/dashboard']\">\r\n            <span class=\"mat-button-wrapper\" style=\"padding:0px\"><span _ngcontent-awq-c1=\"\" class=\"\r\n                glyphicon glyphicon-arrow-left\" style=\"    color: rgb(255,230,0);\r\n                font-size: 38px;\r\n                position: absolute;\r\n                right: 15%;\r\n                top: 14%;\"></span>\r\n            <div _ngcontent-awq-c1=\"\" class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\">\r\n            </div>\r\n            <div _ngcontent-awq-c1=\"\" class=\"mat-button-focus-overlay\">\r\n    \r\n            </div>\r\n        </span>\r\n        <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\" ng-reflect-centered=\"false\" ng-reflect-disabled=\"false\" ng-reflect-trigger=\"[object HTMLButtonElement]\"></div><div class=\"mat-button-focus-overlay\"></div>\r\n    </button>\r\n        </div>\r\n    </nav>\r\n    \r\n<div style=\"width:100%;height:100%\">\r\n\r\n    <iframe style=\"width:100%;height:100vh\" src=\"https://dibinjos123.github.io/EYIasss_V2/AssetTracking.html\"> </iframe>\r\n    \r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/connected-scm/connected-scm.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/connected-scm/connected-scm.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav _ngcontent-vyk-c12=\"\" class=\"navbar navbar-default navbar-static-top\" style=\"margin-bottom:-1%;width:100%;background-color: black\">\r\n        <div _ngcontent-vyk-c12=\"\" class=\"container\">\r\n        <div _ngcontent-vyk-c12=\"\" class=\"row\" style=\"padding:3.5%\"><img _ngcontent-vyk-c12=\"\" class=\"ng-tns-c12-20\" src=\"../../assets/whiteAsset -1.png\" style=\"display: inline;\r\n        width: 4%;\r\n        position: absolute;\r\n        top: 2%;\r\n        left: 1%;\">\r\n        </div>\r\n\r\n        <button _ngcontent-awq-c1=\"\" _ngcontent-vqc-c21=\"\" class=\"mat-fab mat-accent\" mat-fab=\"\" style=\"float:right;position:fixed;top:2%;right:2%;background-color:black;color:black;border:1px solid black;border:1px solid rgb(255,230,0);\" tabindex=\"0\" [routerLink] = \"['/dashboard']\">\r\n            <span class=\"mat-button-wrapper\" style=\"padding:0px\"><span _ngcontent-awq-c1=\"\" class=\"\r\n                glyphicon glyphicon-arrow-left\" style=\"    color: rgb(255,230,0);\r\n                font-size: 38px;\r\n                position: absolute;\r\n                right: 15%;\r\n                top: 14%;\"></span>\r\n            <div _ngcontent-awq-c1=\"\" class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\">\r\n            </div>\r\n            <div _ngcontent-awq-c1=\"\" class=\"mat-button-focus-overlay\">\r\n    \r\n            </div>\r\n        </span>\r\n        <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\" ng-reflect-centered=\"false\" ng-reflect-disabled=\"false\" ng-reflect-trigger=\"[object HTMLButtonElement]\"></div><div class=\"mat-button-focus-overlay\"></div>\r\n    </button>\r\n    \r\n        </div>\r\n    </nav>\r\n<div style=\"width:100%;height:100%\">\r\n\r\n    <iframe style=\"width:100%;height:100vh\" src=\"https://dibinjos123.github.io/EYIasss_V2/ConnectedSCM.html\"> </iframe>\r\n    \r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contract-digitization/contract-digitization.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contract-digitization/contract-digitization.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav _ngcontent-vyk-c12=\"\" class=\"navbar navbar-default navbar-static-top\" style=\"margin-bottom:-1%;width:100%;background-color: black\">\r\n        <div _ngcontent-vyk-c12=\"\" class=\"container\">\r\n        <div _ngcontent-vyk-c12=\"\" class=\"row\" style=\"padding:3.5%\"><img _ngcontent-vyk-c12=\"\" class=\"ng-tns-c12-20\" src=\"../../assets/whiteAsset -1.png\" style=\"display: inline;\r\n        width: 4%;\r\n        position: absolute;\r\n        top: 2%;\r\n        left: 1%;\">\r\n        </div>\r\n\r\n        <button _ngcontent-awq-c1=\"\" _ngcontent-vqc-c21=\"\" class=\"mat-fab mat-accent\" mat-fab=\"\" style=\"float:right;position:fixed;top:2%;right:2%;background-color:black;color:black;border:1px solid black;border:1px solid rgb(255,230,0);\" tabindex=\"0\" [routerLink] = \"['/dashboard']\">\r\n            <span class=\"mat-button-wrapper\" style=\"padding:0px\"><span _ngcontent-awq-c1=\"\" class=\"\r\n                glyphicon glyphicon-arrow-left\" style=\"    color: rgb(255,230,0);\r\n                font-size: 38px;\r\n                position: absolute;\r\n                right: 15%;\r\n                top: 14%;\"></span>\r\n            <div _ngcontent-awq-c1=\"\" class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\">\r\n            </div>\r\n            <div _ngcontent-awq-c1=\"\" class=\"mat-button-focus-overlay\">\r\n    \r\n            </div>\r\n        </span>\r\n        <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\" ng-reflect-centered=\"false\" ng-reflect-disabled=\"false\" ng-reflect-trigger=\"[object HTMLButtonElement]\"></div><div class=\"mat-button-focus-overlay\"></div>\r\n    </button>\r\n        </div>\r\n    </nav>\r\n<div style=\"width:100%;height:100%\">\r\n\r\n    <iframe style=\"width:100%;height:100vh\" src=\"https://dibinjos123.github.io/EYIasss_V2/ContractDigitization.html\"> </iframe>\r\n    \r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"bg\" style=\"min-height: 1300px;\">\r\n    <mat-drawer mode=\"side\" opened >\r\n        <div >\r\n            <app-navbar (clickInfo)= \"getClickInfo($event)\" ></app-navbar>\r\n        </div>\r\n    </mat-drawer>\r\n    <mat-drawer-content style=\"overflow: hidden\">\r\n        <div>\r\n            <app-header [industries] = \"industry\" [sectors]= \"sector\" [capabilities]= \"capability\" [functions] = \"function\" ></app-header>\r\n        </div>\r\n        <div  class=\"pl2\" style=\"height:615px ;     margin-top: 108px;\">\r\n            <div class=\"row pv3\" *ngIf=\"r1data != []\">\r\n                <div class=\"col-md-3\" *ngFor=\"let data of r1data; let i=index;\">\r\n                    <app-box [Data]=\"r1data[i]\" [image]=\"r1images[i]\" [title]=\"r1titles[i]\" [urls]=\"r1urls[i]\"> </app-box>\r\n                </div>\r\n            </div>\r\n\r\n             <div class=\"row \" *ngIf=\"r2data != []\">\r\n                <div class=\"col-md-3\" *ngFor=\"let data of r2data; let i=index;\">\r\n                    <app-box [Data]=\"r2data[i]\" [image]=\"r2images[i]\" [title]=\"r2titles[i]\" [urls]=\"r2urls[i]\"> </app-box>\r\n                </div>\r\n            </div>\r\n\r\n             <div class=\"row pv3\" *ngIf=\"r3data != []\">\r\n                <div class=\"col-md-3\" *ngFor=\"let data of r3data; let i=index;\">\r\n                    <app-box [Data]=\"r3data[i]\" [image]=\"r3images[i]\" [title]=\"r3titles[i]\" [urls]=\"r3urls[i]\"> </app-box>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- <div  class=\"pl2\">\r\n            <div class=\"row pv3\">\r\n                <div class=\"col-md-3\">\r\n                    <app-box [Data]=\"data[0]\" [image]=\"images[0]\" [title]=\"titles[0]\" [urls]=\"urls[0]\"> </app-box>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <app-box [Data]=\"data[1]\" [image]=\"images[1]\" [title]=\"titles[1]\" [urls]=\"urls[1]\"> </app-box>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <app-box [Data]=\"data[2]\" [image]=\"images[3]\" [title]=\"titles[2]\" [urls]=\"urls[2]\"> </app-box>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <app-box [Data]=\"data[3]\" [image]=\"images[3]\" [title]=\"titles[3]\" [urls]=\"urls[3]\"> </app-box>\r\n                </div>\r\n            </div>\r\n\r\n             <div class=\"row \">\r\n                <div class=\"col-md-3\">\r\n                    <app-box [Data]=\"data[4]\" [image]=\"images[4]\" [title]=\"titles[4]\" [urls]=\"urls[4]\"> </app-box>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <app-box [Data]=\"data[5]\" [image]=\"images[5]\" [title]=\"titles[5]\" [urls]=\"urls[5]\"> </app-box>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <app-box [Data]=\"data[6]\" [image]=\"images[6]\" [title]=\"titles[6]\" [urls]=\"urls[6]\"> </app-box>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <app-box [Data]=\"data[7]\" [image]=\"images[7]\" [title]=\"titles[7]\" [urls]=\"urls[7]\"> </app-box>\r\n                </div>\r\n            </div>\r\n\r\n             <div class=\"row pv3\">\r\n                <div class=\"col-md-3\">\r\n                    <app-box [Data]=\"data[8]\" [image]=\"images[8]\" [title]=\"titles[8]\" [urls]=\"urls[8]\"> </app-box>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <app-box [Data]=\"data[9]\" [image]=\"images[9]\" [title]=\"titles[9]\" [urls]=\"urls[9]\"> </app-box>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n\r\n        <button [routerLink] = \"['/home']\" style = \"float:right;position:fixed;bottom:2%;right:2%;background-color: rgb(255,230,0);color:black;border:1px solid black\" _ngcontent-vqc-c21=\"\" mat-fab=\"\" class=\"mat-fab mat-accent\">\r\n            <span style=\"color:black;font-size:22px\"class=\"glyphicon glyphicon-home\"></span>\r\n            <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\"></div>\r\n            <div class=\"mat-button-focus-overlay\"></div>\r\n        </button>\r\n    </mat-drawer-content>\r\n\r\n    \r\n    \r\n</mat-drawer-container>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/email-automation/email-automation.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/email-automation/email-automation.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow-x:hidden;background-color: \">\r\n    <nav  class=\"navbar navbar-default navbar-static-top\" style=\"margin-bottom:-1%;width:100%\" >\r\n        <div  class=\"container\">\r\n            <div   class=\"row\" style=\"padding:3.5%\">\r\n                <img src=\"../../assets/whiteAsset -1.png\" style=\"display: inline;\r\n                width: 4%;\r\n                position: absolute;\r\n                top: 2%;\r\n                left: 1%;\"/>\r\n                <h3 style=\"    display: inline;\r\n                font-family: Arial, Helvetica, sans-serif;\r\n                /* margin-left: 2%; */\r\n                font-size: 164%;\r\n                top: 8%;\r\n                left: 7%;\r\n                position: absolute;\"><b>ENESA</b></h3>\r\n            </div>\r\n        </div>\r\n\r\n    \r\n    </nav>\r\n\r\n    <mat-video src=\"../../assets/Email classification solution V_3_Final.mp4\" autoplay = \"true\" ></mat-video>\r\n\r\n\r\n<div style=\"background-color: #2e2e38\">\r\n    <img [@changeDivSize]=currentState src = \"../../assets/EnesaAssetSpec.PNG\" style=\"padding-top:5%;height:100%;width:100%\" />\r\n    </div>\r\n\r\n    <div style=\"background-color: #2e2e38\">\r\n        <img  [@changeDivSize]=currentState src = \"../../assets/EnesaBusiness.PNG\" style=\"padding-top:5%;height:100%;width:100%\" />\r\n        </div>\r\n\r\n        <div style=\"background-color: #2e2e38\">\r\n            <img  [@changeDivSize]=currentState src = \"../../assets/EnesaSector.PNG\" style=\"padding-top:5%;height:100%;width:100%\" />\r\n            </div>\r\n\r\n            <button [routerLink] = \"['/dashboard']\" style = \"float:right;position:fixed;bottom:2%;right:2%;background-color: rgb(255,230,0);color:black;border:1px solid black\" _ngcontent-vqc-c21=\"\" mat-fab=\"\" class=\"mat-fab mat-accent\">\r\n                <span style=\"color:black;font-size:22px\"class=\"glyphicon glyphicon-step-backward\"></span>\r\n                <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\"></div>\r\n                <div class=\"mat-button-focus-overlay\"></div>\r\n            </button> \r\n\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/email-interpretation/email-interpretation.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/email-interpretation/email-interpretation.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav _ngcontent-vyk-c12=\"\" class=\"navbar navbar-default navbar-static-top\" style=\"margin-bottom:-1%;width:100%;background-color: black\">\r\n        <div _ngcontent-vyk-c12=\"\" class=\"container\">\r\n        <div _ngcontent-vyk-c12=\"\" class=\"row\" style=\"padding:3.5%\"><img _ngcontent-vyk-c12=\"\" class=\"ng-tns-c12-20\" src=\"../../assets/whiteAsset -1.png\" style=\"display: inline;\r\n        width: 4%;\r\n        position: absolute;\r\n        top: 2%;\r\n        left: 1%;\">\r\n        </div>\r\n        <button _ngcontent-awq-c1=\"\" _ngcontent-vqc-c21=\"\" class=\"mat-fab mat-accent\" mat-fab=\"\" style=\"float:right;position:fixed;top:2%;right:2%;background-color:black;color:black;border:1px solid black;border:1px solid rgb(255,230,0);\" tabindex=\"0\" [routerLink] = \"['/dashboard']\">\r\n            <span class=\"mat-button-wrapper\" style=\"padding:0px\"><span _ngcontent-awq-c1=\"\" class=\"\r\n                glyphicon glyphicon-arrow-left\" style=\"    color: rgb(255,230,0);\r\n                font-size: 38px;\r\n                position: absolute;\r\n                right: 15%;\r\n                top: 14%;\"></span>\r\n            <div _ngcontent-awq-c1=\"\" class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\">\r\n            </div>\r\n            <div _ngcontent-awq-c1=\"\" class=\"mat-button-focus-overlay\">\r\n    \r\n            </div>\r\n        </span>\r\n        <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\" ng-reflect-centered=\"false\" ng-reflect-disabled=\"false\" ng-reflect-trigger=\"[object HTMLButtonElement]\"></div><div class=\"mat-button-focus-overlay\"></div>\r\n    </button>\r\n        </div>\r\n    </nav>\r\n    \r\n<div style=\"width:100%;height:100%\">\r\n\r\n    <iframe style=\"width:100%;height:100vh\" src=\"https://dibinjos123.github.io/EYIasss_V2/Email.html\"> </iframe>\r\n    \r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employee-helpdesk/employee-helpdesk.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employee-helpdesk/employee-helpdesk.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow-x:hidden;background-color: \">\r\n    <nav  class=\"navbar navbar-default navbar-static-top\" style=\"margin-bottom:-1%;width:100%\" >\r\n        <div  class=\"container\">\r\n            <div   class=\"row\" style=\"padding:3.5%\">\r\n                <img src=\"../../assets/whiteAsset -1.png\" style=\"display: inline;\r\n                width: 4%;\r\n                position: absolute;\r\n                top: 2%;\r\n                left: 1%;\"/>\r\n                <h3 style=\"    display: inline;\r\n                font-family: Arial, Helvetica, sans-serif;\r\n                /* margin-left: 2%; */\r\n                font-size: 164%;\r\n                top: 8%;\r\n                left: 7%;\r\n                position: absolute;\"><b>Employee Helpdesk</b></h3>\r\n            </div>\r\n        </div>\r\n\r\n    \r\n    </nav>\r\n\r\n    <mat-video src=\"../../assets/Employee helpdesk and KPI video.mp4\" autoplay = \"true\" ></mat-video>\r\n\r\n\r\n    <button [routerLink] = \"['/dashboard']\" style = \"float:right;position:fixed;bottom:2%;right:2%;background-color: rgb(255,230,0);color:black;border:1px solid black\" _ngcontent-vqc-c21=\"\" mat-fab=\"\" class=\"mat-fab mat-accent\">\r\n        <span style=\"color:black;font-size:22px\"class=\"glyphicon glyphicon-step-backward\"></span>\r\n        <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\"></div>\r\n        <div class=\"mat-button-focus-overlay\"></div>\r\n    </button> \r\n    \r\n\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ey-opschain/ey-opschain.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ey-opschain/ey-opschain.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav _ngcontent-vyk-c12=\"\" class=\"navbar navbar-default navbar-static-top\" style=\"margin-bottom:-1%;width:100%;background-color: black\">\r\n        <div _ngcontent-vyk-c12=\"\" class=\"container\">\r\n        <div _ngcontent-vyk-c12=\"\" class=\"row\" style=\"padding:3.5%\"><img _ngcontent-vyk-c12=\"\" class=\"ng-tns-c12-20\" src=\"../../assets/whiteAsset -1.png\" style=\"display: inline;\r\n        width: 4%;\r\n        position: absolute;\r\n        top: 2%;\r\n        left: 1%;\">\r\n        </div>\r\n        <button _ngcontent-awq-c1=\"\" _ngcontent-vqc-c21=\"\" class=\"mat-fab mat-accent\" mat-fab=\"\" style=\"float:right;position:fixed;top:2%;right:2%;background-color:black;color:black;border:1px solid black;border:1px solid rgb(255,230,0);\" tabindex=\"0\" [routerLink] = \"['/dashboard']\">\r\n            <span class=\"mat-button-wrapper\" style=\"padding:0px\"><span _ngcontent-awq-c1=\"\" class=\"\r\n                glyphicon glyphicon-arrow-left\" style=\"    color: rgb(255,230,0);\r\n                font-size: 38px;\r\n                position: absolute;\r\n                right: 15%;\r\n                top: 14%;\"></span>\r\n            <div _ngcontent-awq-c1=\"\" class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\">\r\n            </div>\r\n            <div _ngcontent-awq-c1=\"\" class=\"mat-button-focus-overlay\">\r\n    \r\n            </div>\r\n        </span>\r\n        <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\" ng-reflect-centered=\"false\" ng-reflect-disabled=\"false\" ng-reflect-trigger=\"[object HTMLButtonElement]\"></div><div class=\"mat-button-focus-overlay\"></div>\r\n    </button>\r\n        </div>\r\n    </nav>\r\n<div style=\"width:100%;height:100%\">\r\n\r\n    <iframe style=\"width:100%;height:100vh\" src=\"https://dibinjos123.github.io/EYIasss_V2/OpsChain.html\"> </iframe>\r\n    \r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mv1 mh1\">\r\n    <div class=\"centered\" style=\"z-index: 1;\">\r\n        <p style=\"font-size: x-large\" *ngIf=\"industries !='' || sectors != '' || capabilities !=' ' \"> {{industries}} {{sectors}} {{capabilities}} {{functions}} </p>\r\n        <p style=\"font-size: x-large;margin-top:-35%;position: relative;\" *ngIf=\"industries == '' && sectors == '' && capabilities ==' ' \"> {{title}} </p>\r\n\r\n    </div>\r\n    <div>\r\n            <img src=\"../../assets/Header0_0.png\" width=\"1%\" class=\"pr1\"/>\r\n        <img src=\"../../assets/Header.png\" style=\"    height: 139px;\r\n        position: absolute;\" width=\"99%\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow-x:hidden\">\r\n    <nav  class=\"navbar navbar-default navbar-static-top\" style=\"margin-bottom:-1%;background-image:url('../../assets/digital.gif');position:fixed;width:100%\" >\r\n        <div [@changeHeader]=currentHeaderState class=\"container\">\r\n            <div   class=\"row\" style=\"padding:3.5%\">\r\n                <img src=\"../../assets/whiteAsset -1.png\" style=\" display: inline;\r\n                width: 4%;\r\n                position: absolute;\r\n                top: 2%;\r\n                left: 1%;\"/>\r\n                <h4 style=\"display: inline;\r\n                font-family: Arial, Helvetica, sans-serif;\r\n                margin-left: 2%;\r\n                font-size: 164%;\r\n                top: 19%;\r\n                left: 5%;\r\n                position: absolute;\"><b>I</b>ntelligent <b>A</b>utomation as a <b>S</b>ervice</h4>\r\n            </div>\r\n        </div>\r\n\r\n        <div [@changeHeader2]=finalHeaderState class=\"container\" style=\"height:58px;\">\r\n            <div   class=\"row\" style=\"padding:1%\">\r\n                <img src=\"../../assets/whiteAsset -1.png\" style=\"display:inline;width:3%;position: absolute;\r\n                top: 2%;\r\n                left: 1%;\"/>\r\n                <h4 style=\"    display: inline;\r\n                font-family: Arial, Helvetica, sans-serif;\r\n                font-size: 196%;\r\n                top: 10%;\r\n                left: 6%;\r\n                position: absolute;\"><b>IA</b>aa<b>S</b></h4>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n\r\n    <div class=\"container2\">\r\n        <div class=\"bg\">\r\n            <div class=\"row\" style = \"padding-bottom:5.2%\" >\r\n                <div class=\"col-md-6\" style=\"padding:4%;margin-top:5%\" [@changeDivSize]=currentState >\r\n                    <!-- <p  style=\"font-size: xx-large;font-family: Arial, Helvetica, sans-serif\">Intelligent Automation as a Service</p>\r\n                    <p>Superior client technologies are needed to keep pace with the rapid speed of innovation across\r\n                        service lines and industry sectors. EY must also maintain the highest standards of information\r\n                        security,\r\n                        brand protection and reliability.\r\n                    </p>\r\n                    <p>The Client Technology Platform (CTP) is EY’s globally scalable, public cloud based platform\r\n                        ecosystem. We designed it to support pursuit teams looking to deliver technology-based solutions\r\n                        to clients\r\n                        such that it supports reuse, multi-tenancy, and scalability to client’s usage needs change.\r\n                    </p>\r\n                    <p>The CTP incorporates automation technologies and industry-leading security practices. All of this\r\n                        provides service lines with an agile, fast-build and secure platform that can deliver better\r\n                        client\r\n                        solutions at a lower cost.\r\n                    </p> -->\r\n                    <img src=\"../../assets/services.PNG\" style=\"width:105%\"/>\r\n                </div>\r\n                <div class=\"col-md-6\"style=\"padding:4%;margin-top:5%\" [@changeDivSize]=currentState>\r\n                    <img src=\"../../assets/bg2.JPG\" width=\"85%\" style=\"margin-left:20%\"/>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Begin Yellow bar with button -->\r\n        <div [@changeDivSize]=currentState style=\"background-color: rgb(255,230,0)\">\r\n            <div style=\"text-align: center;padding-top: 1rem;padding-bottom: 1rem\">\r\n                <button mat-button>Subscribe to our Newsletter!</button>\r\n            </div>\r\n        </div>\r\n        <!-- End of Yellow bar with button -->\r\n\r\n        <!-- Begin Our value propositio​n​ -->\r\n        <!-- <div class=\"bg\" style=\"text-align: center\">\r\n            <div style=\"padding-top: 2rem; padding-bottom:2rem\">\r\n                <p style=\"font-size: x-large; color: yellow;\"> Our value propositio​n​</p>\r\n                <p>With the EY Client Technology Platform, EY brings its brightest minds together\r\n                    with leading technologies such as robotic process automation (RPA) and\r\n                    analytics – to solve your business problems.\r\n                </p>\r\n                <p>\r\n                    The platform provides a globally accessible infrastructure, platform services, applications and\r\n                    related capabilities.\r\n                    These features serve as flexible and scalable building blocks to meet the evolving business need for\r\n                    digital solutions.\r\n                </p>\r\n            </div>\r\n        </div> -->\r\n        <!-- End of Our value propositio​n​ -->\r\n    </div>\r\n\r\n    <button [routerLink] = \"['/dashboard']\" style = \"float:right;position:fixed;bottom:2%;right:2%;background-color: rgb(255,230,0);color:black;border-radius: 21px;border:1px solid black\" _ngcontent-wbk-c22=\"\" color=\"primary\" mat-raised-button=\"\" class=\"mat-raised-button mat-primary\"><span class=\"mat-button-wrapper\">Explore Assets</span><div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div><div class=\"mat-button-focus-overlay\"></div></button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/invoice-digitization/invoice-digitization.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/invoice-digitization/invoice-digitization.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<nav _ngcontent-vyk-c12=\"\" class=\"navbar navbar-default navbar-static-top\" style=\"margin-bottom:-1%;width:100%;background-color: black\">\r\n        <div _ngcontent-vyk-c12=\"\" class=\"container\">\r\n        <div _ngcontent-vyk-c12=\"\" class=\"row\" style=\"padding:3.5%\"><img _ngcontent-vyk-c12=\"\" class=\"ng-tns-c12-20\" src=\"../../assets/whiteAsset -1.png\" style=\"display: inline;\r\n        width: 4%;\r\n        position: absolute;\r\n        top: 2%;\r\n        left: 1%;\">\r\n        </div>\r\n        <button _ngcontent-awq-c1=\"\" _ngcontent-vqc-c21=\"\" class=\"mat-fab mat-accent\" mat-fab=\"\" style=\"float:right;position:fixed;top:2%;right:2%;background-color:black;color:black;border:1px solid black;border:1px solid rgb(255,230,0);\" tabindex=\"0\" [routerLink] = \"['/dashboard']\">\r\n            <span class=\"mat-button-wrapper\" style=\"padding:0px\"><span _ngcontent-awq-c1=\"\" class=\"\r\n                glyphicon glyphicon-arrow-left\" style=\"    color: rgb(255,230,0);\r\n                font-size: 38px;\r\n                position: absolute;\r\n                right: 15%;\r\n                top: 14%;\"></span>\r\n            <div _ngcontent-awq-c1=\"\" class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\">\r\n            </div>\r\n            <div _ngcontent-awq-c1=\"\" class=\"mat-button-focus-overlay\">\r\n    \r\n            </div>\r\n        </span>\r\n        <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\" ng-reflect-centered=\"false\" ng-reflect-disabled=\"false\" ng-reflect-trigger=\"[object HTMLButtonElement]\"></div><div class=\"mat-button-focus-overlay\"></div>\r\n    </button>\r\n        </div>\r\n    </nav>\r\n<div style=\"width:100%;height:100%\">\r\n\r\n    <iframe style=\"width:100%;height:100vh\" src=\"https://dibinjos123.github.io/EYIasss_V2/InvoicePurchaseorderdigitization.html\"> </iframe>\r\n    \r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/kyc-digitisation/kyc-digitisation.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/kyc-digitisation/kyc-digitisation.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav _ngcontent-vyk-c12=\"\" class=\"navbar navbar-default navbar-static-top\" style=\"margin-bottom:-1%;width:100%;background-color: black\">\r\n    <div _ngcontent-vyk-c12=\"\" class=\"container\">\r\n    <div _ngcontent-vyk-c12=\"\" class=\"row\" style=\"padding:3.5%\"><img _ngcontent-vyk-c12=\"\" class=\"ng-tns-c12-20\" src=\"../../assets/whiteAsset -1.png\" style=\"display: inline;\r\n    width: 4%;\r\n    position: absolute;\r\n    top: 2%;\r\n    left: 1%;\">\r\n    </div>\r\n\r\n    <button _ngcontent-awq-c1=\"\" _ngcontent-vqc-c21=\"\" class=\"mat-fab mat-accent\" mat-fab=\"\" style=\"float:right;position:fixed;top:2%;right:2%;background-color:black;color:black;border:1px solid black;border:1px solid rgb(255,230,0);\" tabindex=\"0\" [routerLink] = \"['/dashboard']\">\r\n        <span class=\"mat-button-wrapper\" style=\"padding:0px\"><span _ngcontent-awq-c1=\"\" class=\"\r\n            glyphicon glyphicon-arrow-left\" style=\"    color: rgb(255,230,0);\r\n            font-size: 38px;\r\n            position: absolute;\r\n            right: 15%;\r\n            top: 14%;\"></span>\r\n        <div _ngcontent-awq-c1=\"\" class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\">\r\n        </div>\r\n        <div _ngcontent-awq-c1=\"\" class=\"mat-button-focus-overlay\">\r\n\r\n        </div>\r\n    </span>\r\n    <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\" ng-reflect-centered=\"false\" ng-reflect-disabled=\"false\" ng-reflect-trigger=\"[object HTMLButtonElement]\"></div><div class=\"mat-button-focus-overlay\"></div>\r\n</button>\r\n\r\n\r\n    </div>\r\n</nav>\r\n\r\n<div style=\"width:100%;height:100%\">\r\n\r\n<iframe style=\"width:100%;height:100vh\" src=\"https://dibinjos123.github.io/EYIasss_V2/KYCdocumentdigitization.html\"> </iframe>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/loyalty-solution/loyalty-solution.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/loyalty-solution/loyalty-solution.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<nav _ngcontent-vyk-c12=\"\" class=\"navbar navbar-default navbar-static-top\" style=\"margin-bottom:-1%;width:100%;background-color: black\">\r\n        <div _ngcontent-vyk-c12=\"\" class=\"container\">\r\n        <div _ngcontent-vyk-c12=\"\" class=\"row\" style=\"padding:3.5%\"><img _ngcontent-vyk-c12=\"\" class=\"ng-tns-c12-20\" src=\"../../assets/whiteAsset -1.png\" style=\"display: inline;\r\n        width: 4%;\r\n        position: absolute;\r\n        top: 2%;\r\n        left: 1%;\">\r\n        </div>\r\n        <button _ngcontent-awq-c1=\"\" _ngcontent-vqc-c21=\"\" class=\"mat-fab mat-accent\" mat-fab=\"\" style=\"float:right;position:fixed;top:2%;right:2%;background-color:black;color:black;border:1px solid black;border:1px solid rgb(255,230,0);\" tabindex=\"0\" [routerLink] = \"['/dashboard']\">\r\n            <span class=\"mat-button-wrapper\" style=\"padding:0px\"><span _ngcontent-awq-c1=\"\" class=\"\r\n                glyphicon glyphicon-arrow-left\" style=\"    color: rgb(255,230,0);\r\n                font-size: 38px;\r\n                position: absolute;\r\n                right: 15%;\r\n                top: 14%;\"></span>\r\n            <div _ngcontent-awq-c1=\"\" class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\">\r\n            </div>\r\n            <div _ngcontent-awq-c1=\"\" class=\"mat-button-focus-overlay\">\r\n    \r\n            </div>\r\n        </span>\r\n        <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\" ng-reflect-centered=\"false\" ng-reflect-disabled=\"false\" ng-reflect-trigger=\"[object HTMLButtonElement]\"></div><div class=\"mat-button-focus-overlay\"></div>\r\n    </button>\r\n    \r\n        </div>\r\n    </nav>\r\n    \r\n<div style=\"width:100%;height:100%\">\r\n\r\n    <iframe style=\"width:100%;height:100vh\" src=\"https://dibinjos123.github.io/EYIasss_V2/Loyalty.html\"> </iframe>\r\n    \r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mh1\">\r\n    <div class=\"mv1\">\r\n        <img src=\"../../assets/Group0_1.png\" width=\"100%\" />\r\n    </div>\r\n\r\n    \r\n        <mat-accordion >\r\n                <div class=\"box\">\r\n            <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                        <h4>INDUSTRIES</h4>\r\n                </mat-panel-title>\r\n\r\n            </mat-expansion-panel-header>\r\n                                                                                                                                       \t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\r\n            <mat-action-list>\r\n                <button mat-button  (click)=\"evaluateButtonGroup1(1)\" [ngClass]=\"[btnStyleGroup1[0]]\" > <img src=\"../../assets/Group1_1.png \" width=\"30px\" class=\"pr1\" /> Financial Services</button><br />\r\n                <button mat-button  (click)=\"evaluateButtonGroup1(2)\" [ngClass]=\"[btnStyleGroup1[1]]\" > <img src=\"../../assets/Group1_2.png \" width=\"30px\" class=\"pr1\" />Technology, Media & Entertainment and Telecom</button><br />\r\n                <button mat-button  (click)=\"evaluateButtonGroup1(3)\" [ngClass]=\"[btnStyleGroup1[2]]\" > <img src=\"../../assets/Group1_3.png \" width=\"30px\" class=\"pr1\" />Advanced Manufacturing & Mobility</button><br />\r\n                <button mat-button  (click)=\"evaluateButtonGroup1(4)\" [ngClass]=\"[btnStyleGroup1[3]]\" > <img src=\"../../assets/Group1_4.png \" width=\"30px\" class=\"pr1\" />Consumer</button><br />\r\n                <button mat-button  (click)=\"evaluateButtonGroup1(5)\" [ngClass]=\"[btnStyleGroup1[4]]\"  class=\"mb2\"> <img src=\"../../assets/Group1_5.png \" width=\"30px\" class=\"pr1\" />Energy</button><br />\r\n            </mat-action-list>\r\n            </mat-expansion-panel>\r\n    </div>\r\n    <br />\r\n    <div class=\"box\" >\r\n            <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                    <h4> SECTORS</h4>\r\n                </mat-panel-title>\r\n\r\n            </mat-expansion-panel-header>\r\n            <!-- \t \t                                                                                                                   \t\t\t\t\t\t\t\t\t\tWater Utilities -->\r\n      \r\n            <mat-action-list>\r\n                <button mat-button (click)= \"evaluateButtonGroup2(1)\" [ngClass]=\"[btnStyleGroup2[0]]\" > <img src=\"../../assets/Group1_6.png\" width=\"30px\" class=\"pr1\" />Consumer Banking</button><br />\r\n                <button mat-button (click)= \"evaluateButtonGroup2(2)\" [ngClass]=\"[btnStyleGroup2[1]]\" > <img src=\"../../assets/Group1_7.png\" width=\"30px\" class=\"pr1\" />General Insurance</button><br />\r\n                <button mat-button (click)= \"evaluateButtonGroup2(3)\" [ngClass]=\"[btnStyleGroup2[2]]\" > <img src=\"../../assets/Group1_8.png\" width=\"30px\" class=\"pr1\" />Individual life insurance</button><br />\r\n                <button mat-button (click)= \"evaluateButtonGroup2(4)\" [ngClass]=\"[btnStyleGroup2[3]]\" > <img src=\"../../assets/Group1_9.png\" width=\"30px\" class=\"pr1\" />Mortgage Finance</button><br />\r\n                <button mat-button (click)= \"evaluateButtonGroup2(5)\" [ngClass]=\"[btnStyleGroup2[4]]\" > <img src=\"../../assets/Group1_10.png\" width=\"30px\" class=\"pr1\" /> WAM-Pro </button><br />\r\n                <button mat-button (click)= \"evaluateButtonGroup2(6)\" [ngClass]=\"[btnStyleGroup2[5]]\" > <img src=\"../../assets/Group1_11.png\" width=\"30px\" class=\"pr1\" /> Telecom </button><br />\r\n                <button mat-button (click)= \"evaluateButtonGroup2(7)\" [ngClass]=\"[btnStyleGroup2[6]]\" > <img src=\"../../assets/Group1_6.png\" width=\"30px\" class=\"pr1\" /> Media & Entertainment </button><br />\r\n                <button mat-button (click)= \"evaluateButtonGroup2(8)\" [ngClass]=\"[btnStyleGroup2[7]]\" > <img src=\"../../assets/Group1_7.png\" width=\"30px\" class=\"pr1\" /> Automotive Finance </button><br />\r\n                <button mat-button (click)= \"evaluateButtonGroup2(9)\" [ngClass]=\"[btnStyleGroup2[8]]\" > <img src=\"../../assets/Group1_8.png\" width=\"30px\" class=\"pr1\" /> Automotive OEM </button><br />\r\n                <button mat-button (click)=\"evaluateButtonGroup2(10)\" [ngClass]=\"[btnStyleGroup2[9]]\" > <img src=\"../../assets/Group1_9.png\" width=\"30px\" class=\"pr1\" /> Beverage </button><br />\r\n                <button mat-button (click)=\"evaluateButtonGroup2(11)\" [ngClass]=\"[btnStyleGroup2[10]]\" > <img src=\"../../assets/Group1_10.png\" width=\"30px\" class=\"pr1\" /> Consumer Products </button><br />\r\n                <button mat-button (click)=\"evaluateButtonGroup2(12)\" [ngClass]=\"[btnStyleGroup2[11]]\" > <img src=\"../../assets/Group1_11.png\" width=\"30px\" class=\"pr1\" /> Retail </button><br />\r\n                <button mat-button (click)=\"evaluateButtonGroup2(13)\" [ngClass]=\"[btnStyleGroup2[12]]\" > <img src=\"../../assets/Group1_6.png\" width=\"30px\" class=\"pr1\" />Tobacco </button><br />\r\n                <button mat-button (click)=\"evaluateButtonGroup2(14)\" [ngClass]=\"[btnStyleGroup2[13]]\" > <img src=\"../../assets/Group1_7.png\" width=\"30px\" class=\"pr1\" /> Chemicals </button><br />\r\n                <button mat-button (click)=\"evaluateButtonGroup2(15)\" [ngClass]=\"[btnStyleGroup2[14]]\" > <img src=\"../../assets/Group1_8.png\" width=\"30px\" class=\"pr1\" />Mining & Metals </button><br />\r\n                <button mat-button (click)=\"evaluateButtonGroup2(16)\" [ngClass]=\"[btnStyleGroup2[15]]\" > <img src=\"../../assets/Group1_9.png\" width=\"30px\" class=\"pr1\" /> Oil & Gas </button><br />\r\n                <button mat-button (click)=\"evaluateButtonGroup2(17)\" [ngClass]=\"[btnStyleGroup2[16]]\" > <img src=\"../../assets/Group1_10.png\" width=\"30px\" class=\"pr1\" /> Oil Field Services </button><br />\r\n                <button mat-button (click)=\"evaluateButtonGroup2(18)\" [ngClass]=\"[btnStyleGroup2[17]]\" > <img src=\"../../assets/Group1_11.png\" width=\"30px\" class=\"pr1\" /> Power & Utilities </button><br />\r\n                <button mat-button (click)=\"evaluateButtonGroup2(19)\" [ngClass]=\"[btnStyleGroup2[18]]\" class=\"mb2\"> <img src=\"../../assets/Group1_12.png\" width=\"30px\" class=\"pr1\" />Water Utilities</button><br />\r\n            </mat-action-list>\r\n            </mat-expansion-panel>\r\n    </div>\r\n\r\n    <br />\r\n\r\n    <div class=\"box\">\r\n            <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                    <h4>CAPABILITIES </h4>\r\n                </mat-panel-title>\r\n\r\n            </mat-expansion-panel-header>\r\n            \r\n            <mat-action-list>\r\n                <button mat-button  (click)=\"evaluateButtonGroup3(1)\" [ngClass]=\"[btnStyleGroup3[0]]\" > <img src=\"../../assets/Group1_1.png \" width=\"30px\" class=\"pr1\" /> InDEx (Digitization)</button><br />\r\n                <button mat-button  (click)=\"evaluateButtonGroup3(2)\" [ngClass]=\"[btnStyleGroup3[1]]\" > <img src=\"../../assets/Group1_2.png \" width=\"30px\" class=\"pr1\" />NLP</button><br />\r\n                <button mat-button  (click)=\"evaluateButtonGroup3(3)\" [ngClass]=\"[btnStyleGroup3[2]]\"  class=\"mb2\"> <img src=\"../../assets/Group1_5.png \" width=\"30px\" class=\"pr1\" />Blockchain</button><br />\r\n            </mat-action-list>\r\n            </mat-expansion-panel>\r\n    </div>\r\n\r\n    <br />\r\n\r\n    <div class=\"box\">\r\n            <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                    <h4>FUNCTIONS</h4>\r\n                </mat-panel-title>\r\n\r\n            </mat-expansion-panel-header>\r\n            \r\n            <mat-action-list>\r\n                <button mat-button  (click)=\"evaluateButtonGroup4(1)\" [ngClass]=\"[btnStyleGroup4[0]]\" > <img src=\"../../assets/Group1_1.png \" width=\"30px\" class=\"pr1\" /> Account management </button><br />\r\n                <button mat-button  (click)=\"evaluateButtonGroup4(2)\" [ngClass]=\"[btnStyleGroup4[1]]\" > <img src=\"../../assets/Group1_2.png \" width=\"30px\" class=\"pr1\" /> Asset management </button><br />\r\n                <button mat-button  (click)=\"evaluateButtonGroup4(3)\" [ngClass]=\"[btnStyleGroup4[2]]\" > <img src=\"../../assets/Group1_3.png \" width=\"30px\" class=\"pr1\" /> Billing and invoicing </button><br />\r\n                <button mat-button  (click)=\"evaluateButtonGroup4(4)\" [ngClass]=\"[btnStyleGroup4[3]]\" > <img src=\"../../assets/Group1_4.png \" width=\"30px\" class=\"pr1\" /> Business Support System </button><br />\r\n                <button mat-button  (click)=\"evaluateButtonGroup4(5)\" [ngClass]=\"[btnStyleGroup4[4]]\" > <img src=\"../../assets/Group1_1.png \" width=\"30px\" class=\"pr1\" /> Claims processing & settlement </button><br />\r\n                <button mat-button  (click)=\"evaluateButtonGroup4(6)\" [ngClass]=\"[btnStyleGroup4[5]]\" > <img src=\"../../assets/Group1_2.png \" width=\"30px\" class=\"pr1\" /> Customer acquisition </button><br />\r\n                <button mat-button  (click)=\"evaluateButtonGroup4(7)\" [ngClass]=\"[btnStyleGroup4[6]]\" > <img src=\"../../assets/Group1_3.png \" width=\"30px\" class=\"pr1\" /> Distribution & Selling </button><br />\r\n                <button mat-button  (click)=\"evaluateButtonGroup4(8)\" [ngClass]=\"[btnStyleGroup4[7]]\" > <img src=\"../../assets/Group1_4.png \" width=\"30px\" class=\"pr1\" /> Invoice & Billing </button><br />\r\n                <button mat-button  (click)=\"evaluateButtonGroup4(9)\" [ngClass]=\"[btnStyleGroup4[8]]\" > <img src=\"../../assets/Group1_1.png \" width=\"30px\" class=\"pr1\" /> Invoicing & settlements </button><br />\r\n                <button mat-button  (click)=\"evaluateButtonGroup4(10)\" [ngClass]=\"[btnStyleGroup4[9]]\" > <img src=\"../../assets/Group1_2.png \" width=\"30px\" class=\"pr1\" /> Legal </button><br />\r\n                <button mat-button  (click)=\"evaluateButtonGroup4(11)\" [ngClass]=\"[btnStyleGroup4[10]]\" > <img src=\"../../assets/Group1_3.png \" width=\"30px\" class=\"pr1\" /> Lending operations </button><br />\r\n                <button mat-button  (click)=\"evaluateButtonGroup4(12)\" [ngClass]=\"[btnStyleGroup4[11]]\" > <img src=\"../../assets/Group1_4.png \" width=\"30px\" class=\"pr1\" /> Operations Support System </button><br />\r\n                <button mat-button  (click)=\"evaluateButtonGroup4(13)\" [ngClass]=\"[btnStyleGroup4[12]]\" > <img src=\"../../assets/Group1_1.png \" width=\"30px\" class=\"pr1\" /> Procurement & Supply </button><br />\r\n                <button mat-button  (click)=\"evaluateButtonGroup4(14)\" [ngClass]=\"[btnStyleGroup4[13]]\" > <img src=\"../../assets/Group1_3.png \" width=\"30px\" class=\"pr1\" /> Production </button><br />\r\n                <button mat-button  (click)=\"evaluateButtonGroup4(15)\" [ngClass]=\"[btnStyleGroup4[14]]\" > <img src=\"../../assets/Group1_4.png \" width=\"30px\" class=\"pr1\" /> Regulatory compliance </button><br />\r\n                <button mat-button  (click)=\"evaluateButtonGroup4(16)\" [ngClass]=\"[btnStyleGroup4[15]]\"  class=\"mb2\"> <img src=\"../../assets/Group1_5.png \" width=\"30px\" class=\"pr1\" />Underwriting & policy servicing</button><br />\r\n            </mat-action-list>\r\n            </mat-expansion-panel>\r\n        </div>\r\n\r\n        </mat-accordion>\r\n\r\n\r\n\r\n<!-- \r\n    <div class=\"box mv1\">\r\n        \r\n    </div> -->\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ssi-digitization/ssi-digitization.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ssi-digitization/ssi-digitization.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav _ngcontent-vyk-c12=\"\" class=\"navbar navbar-default navbar-static-top\" style=\"margin-bottom:-1%;width:100%;background-color: black\">\r\n        <div _ngcontent-vyk-c12=\"\" class=\"container\">\r\n        <div _ngcontent-vyk-c12=\"\" class=\"row\" style=\"padding:3.5%\"><img _ngcontent-vyk-c12=\"\" class=\"ng-tns-c12-20\" src=\"../../assets/whiteAsset -1.png\" style=\"display: inline;\r\n        width: 4%;\r\n        position: absolute;\r\n        top: 2%;\r\n        left: 1%;\">\r\n        </div>\r\n        <button _ngcontent-awq-c1=\"\" _ngcontent-vqc-c21=\"\" class=\"mat-fab mat-accent\" mat-fab=\"\" style=\"float:right;position:fixed;top:2%;right:2%;background-color:black;color:black;border:1px solid black;border:1px solid rgb(255,230,0);\" tabindex=\"0\" [routerLink] = \"['/dashboard']\">\r\n            <span class=\"mat-button-wrapper\" style=\"padding:0px\"><span _ngcontent-awq-c1=\"\" class=\"\r\n                glyphicon glyphicon-arrow-left\" style=\"    color: rgb(255,230,0);\r\n                font-size: 38px;\r\n                position: absolute;\r\n                right: 15%;\r\n                top: 14%;\"></span>\r\n            <div _ngcontent-awq-c1=\"\" class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\">\r\n            </div>\r\n            <div _ngcontent-awq-c1=\"\" class=\"mat-button-focus-overlay\">\r\n    \r\n            </div>\r\n        </span>\r\n        <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\" ng-reflect-centered=\"false\" ng-reflect-disabled=\"false\" ng-reflect-trigger=\"[object HTMLButtonElement]\"></div><div class=\"mat-button-focus-overlay\"></div>\r\n    </button>\r\n        </div>\r\n    </nav>\r\n    \r\n<div style=\"width:100%;height:100%\">\r\n\r\n    <iframe style=\"width:100%;height:100vh\" src=\"https://dibinjos123.github.io/EYIasss_V2/SSIDigitization.html\"> </iframe>\r\n    \r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ssl-asset/ssl-asset.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ssl-asset/ssl-asset.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow-x:hidden;background-color: \">\r\n    <nav  class=\"navbar navbar-default navbar-static-top\" style=\"margin-bottom:-1%;width:100%\" >\r\n        <div  class=\"container\">\r\n            <div   class=\"row\" style=\"padding:3.5%\">\r\n                <img src=\"../../assets/whiteAsset -1.png\" style=\"display: inline;\r\n                width: 4%;\r\n                position: absolute;\r\n                top: 2%;\r\n                left: 1%;\"/>\r\n                <h3 style=\"display: inline;\r\n                font-family: Arial, Helvetica, sans-serif;\r\n                /* margin-left: 2%; */\r\n                font-size: 164%;\r\n                top: 8%;\r\n                left: 7%;\r\n                position: absolute;\"><b>SSL Extraction</b></h3>\r\n            </div>\r\n        </div>\r\n\r\n    \r\n    </nav>\r\n\r\n    <mat-video src=\"../../assets/SSI Solution.mp4\" autoplay = \"true\" ></mat-video>\r\n\r\n    <button [routerLink] = \"['/dashboard']\" style = \"float:right;position:fixed;bottom:2%;right:2%;background-color: rgb(255,230,0);color:black;border:1px solid black\" _ngcontent-vqc-c21=\"\" mat-fab=\"\" class=\"mat-fab mat-accent\">\r\n        <span style=\"color:black;font-size:22px\"class=\"glyphicon glyphicon-step-backward\"></span>\r\n        <div class=\"mat-button-ripple mat-ripple mat-button-ripple-round\" matripple=\"\"></div>\r\n        <div class=\"mat-button-focus-overlay\"></div>\r\n    </button> \r\n    \r\n\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/Modules/box/box.component.css":
/*!***********************************************!*\
  !*** ./src/app/Modules/box/box.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\r\n    border-radius: 25px;\r\n    border: 2px solid #000000;\r\n    padding: 4%; \r\n    width: 95%;\r\n    /* height: 86%; */\r\n    position: relative; \r\n    \r\n  }\r\n\r\n  .collapse\r\n{\r\n\r\n    height: 272px !important;\r\n}\r\n\r\n  .expand\r\n{\r\n\r\n    height: auto !important;\r\n}\r\n\r\n  p{\r\n    color: white\r\n}\r\n\r\n  .image{\r\n    position: relative;\r\n    top: -22px;\r\n    left: -9%;\r\n    width: 22%;\r\n\r\n}\r\n\r\n  .image2{\r\n    position: relative;\r\n    top: -21px;\r\n    left: -25%;\r\n    width: 12%;\r\n\r\n}\r\n\r\n  .shadow\r\n{\r\n    box-shadow: 5px 5px;\r\n}\r\n\r\n  .showMore {\r\n    color:steelblue;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTW9kdWxlcy9ib3gvYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7RUFFcEI7O0VBRUE7OztJQUdFLHdCQUF3QjtBQUM1Qjs7RUFFQTs7O0lBR0ksdUJBQXVCO0FBQzNCOztFQUdFO0lBQ0U7QUFDSjs7RUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7O0FBRWQ7O0VBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixVQUFVOztBQUVkOztFQUdBOztJQUVJLG1CQUFtQjtBQUN2Qjs7RUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9Nb2R1bGVzL2JveC9ib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICBwYWRkaW5nOiA0JTsgXHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgLyogaGVpZ2h0OiA4NiU7ICovXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuY29sbGFwc2Vcclxue1xyXG5cclxuICAgIGhlaWdodDogMjcycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmV4cGFuZFxyXG57XHJcblxyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4gIHB7XHJcbiAgICBjb2xvcjogd2hpdGVcclxufVxyXG5cclxuLmltYWdle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMjJweDtcclxuICAgIGxlZnQ6IC05JTtcclxuICAgIHdpZHRoOiAyMiU7XHJcblxyXG59XHJcblxyXG4uaW1hZ2Uye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMjFweDtcclxuICAgIGxlZnQ6IC0yNSU7XHJcbiAgICB3aWR0aDogMTIlO1xyXG5cclxufVxyXG5cclxuXHJcbi5zaGFkb3dcclxue1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweDtcclxufVxyXG5cclxuLnNob3dNb3JlIHtcclxuICAgIGNvbG9yOnN0ZWVsYmx1ZTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/Modules/box/box.component.ts":
/*!**********************************************!*\
  !*** ./src/app/Modules/box/box.component.ts ***!
  \**********************************************/
/*! exports provided: BoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxComponent", function() { return BoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var BoxComponent = /** @class */ (function () {
    function BoxComponent(router) {
        this.router = router;
        this.limit = 130;
        this.truncating = true;
        this.currentState = 'initial';
        this.elevation = "";
        this.truncatingStyle = "";
        this.transition();
    }
    BoxComponent.prototype.ngOnInit = function () {
        this.truncatingStyle = this.truncating ? 'collapse' : 'expand';
    };
    BoxComponent.prototype.transition = function () {
        var _this = this;
        setTimeout(function () {
            _this.currentState = 'final';
        }, 100);
    };
    ;
    BoxComponent.prototype.changeStyle = function ($event) {
        this.elevation = $event.type == 'mouseover' ? 'shadow' : '';
    };
    BoxComponent.prototype.goToAssetDetails = function () {
        console.log("The URLS are", this.urls);
        if (this.urls != "") {
            this.router.navigate([this.urls]);
        }
    };
    BoxComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BoxComponent.prototype, "Data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BoxComponent.prototype, "image", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BoxComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BoxComponent.prototype, "urls", void 0);
    BoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-box',
            template: __webpack_require__(/*! raw-loader!./box.component.html */ "./node_modules/raw-loader/index.js!./src/app/Modules/box/box.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('changeDivSize', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: "0",
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: "1",
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('2500ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms'))
                ])
            ],
            styles: [__webpack_require__(/*! ./box.component.css */ "./src/app/Modules/box/box.component.css")]
        })
    ], BoxComponent);
    return BoxComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../asset-details/asset-details.component */ "./src/app/asset-details/asset-details.component.ts");
/* harmony import */ var _email_automation_email_automation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../email-automation/email-automation.component */ "./src/app/email-automation/email-automation.component.ts");
/* harmony import */ var _ssl_asset_ssl_asset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ssl-asset/ssl-asset.component */ "./src/app/ssl-asset/ssl-asset.component.ts");
/* harmony import */ var _employee_helpdesk_employee_helpdesk_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../employee-helpdesk/employee-helpdesk.component */ "./src/app/employee-helpdesk/employee-helpdesk.component.ts");
/* harmony import */ var _kyc_digitisation_kyc_digitisation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../kyc-digitisation/kyc-digitisation.component */ "./src/app/kyc-digitisation/kyc-digitisation.component.ts");
/* harmony import */ var _contract_digitization_contract_digitization_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../contract-digitization/contract-digitization.component */ "./src/app/contract-digitization/contract-digitization.component.ts");
/* harmony import */ var _invoice_digitization_invoice_digitization_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../invoice-digitization/invoice-digitization.component */ "./src/app/invoice-digitization/invoice-digitization.component.ts");
/* harmony import */ var _ssi_digitization_ssi_digitization_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ssi-digitization/ssi-digitization.component */ "./src/app/ssi-digitization/ssi-digitization.component.ts");
/* harmony import */ var _email_interpretation_email_interpretation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../email-interpretation/email-interpretation.component */ "./src/app/email-interpretation/email-interpretation.component.ts");
/* harmony import */ var _connected_scm_connected_scm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../connected-scm/connected-scm.component */ "./src/app/connected-scm/connected-scm.component.ts");
/* harmony import */ var _ey_opschain_ey_opschain_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ey-opschain/ey-opschain.component */ "./src/app/ey-opschain/ey-opschain.component.ts");
/* harmony import */ var _loyalty_solution_loyalty_solution_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../loyalty-solution/loyalty-solution.component */ "./src/app/loyalty-solution/loyalty-solution.component.ts");
/* harmony import */ var _asset_tracking_asset_tracking_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../asset-tracking/asset-tracking.component */ "./src/app/asset-tracking/asset-tracking.component.ts");


















var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "dashboard", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: "asset/:id", component: _asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_5__["AssetDetailsComponent"] },
    { path: "enesa", component: _email_automation_email_automation_component__WEBPACK_IMPORTED_MODULE_6__["EmailAutomationComponent"] },
    { path: "ssl", component: _ssl_asset_ssl_asset_component__WEBPACK_IMPORTED_MODULE_7__["SslAssetComponent"] },
    { path: "employeeHelpdesk", component: _employee_helpdesk_employee_helpdesk_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeHelpdeskComponent"] },
    { path: "kycdigitisation", component: _kyc_digitisation_kyc_digitisation_component__WEBPACK_IMPORTED_MODULE_9__["KycDigitisationComponent"] },
    { path: "contractdigitisation", component: _contract_digitization_contract_digitization_component__WEBPACK_IMPORTED_MODULE_10__["ContractDigitizationComponent"] },
    { path: "invoicedigitisation", component: _invoice_digitization_invoice_digitization_component__WEBPACK_IMPORTED_MODULE_11__["InvoiceDigitizationComponent"] },
    { path: "ssi", component: _ssi_digitization_ssi_digitization_component__WEBPACK_IMPORTED_MODULE_12__["SsiDigitizationComponent"] },
    { path: "emailinterpretation", component: _email_interpretation_email_interpretation_component__WEBPACK_IMPORTED_MODULE_13__["EmailInterpretationComponent"] },
    { path: "connectedscm", component: _connected_scm_connected_scm_component__WEBPACK_IMPORTED_MODULE_14__["ConnectedScmComponent"] },
    { path: "opschain", component: _ey_opschain_ey_opschain_component__WEBPACK_IMPORTED_MODULE_15__["EyOpschainComponent"] },
    { path: "loyaltysolution", component: _loyalty_solution_loyalty_solution_component__WEBPACK_IMPORTED_MODULE_16__["LoyaltySolutionComponent"] },
    { path: "assettracking", component: _asset_tracking_asset_tracking_component__WEBPACK_IMPORTED_MODULE_17__["AssetTrackingComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'UI';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var mat_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mat-video */ "./node_modules/mat-video/fesm5/mat-video.js");
/* harmony import */ var _yellowspot_ng_truncate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @yellowspot/ng-truncate */ "./node_modules/@yellowspot/ng-truncate/fesm5/yellowspot-ng-truncate.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _Modules_box_box_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Modules/box/box.component */ "./src/app/Modules/box/box.component.ts");
/* harmony import */ var _asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./asset-details/asset-details.component */ "./src/app/asset-details/asset-details.component.ts");
/* harmony import */ var _email_automation_email_automation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./email-automation/email-automation.component */ "./src/app/email-automation/email-automation.component.ts");
/* harmony import */ var _ssl_asset_ssl_asset_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ssl-asset/ssl-asset.component */ "./src/app/ssl-asset/ssl-asset.component.ts");
/* harmony import */ var _employee_helpdesk_employee_helpdesk_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./employee-helpdesk/employee-helpdesk.component */ "./src/app/employee-helpdesk/employee-helpdesk.component.ts");
/* harmony import */ var _kyc_digitisation_kyc_digitisation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./kyc-digitisation/kyc-digitisation.component */ "./src/app/kyc-digitisation/kyc-digitisation.component.ts");
/* harmony import */ var _contract_digitization_contract_digitization_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./contract-digitization/contract-digitization.component */ "./src/app/contract-digitization/contract-digitization.component.ts");
/* harmony import */ var _invoice_digitization_invoice_digitization_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./invoice-digitization/invoice-digitization.component */ "./src/app/invoice-digitization/invoice-digitization.component.ts");
/* harmony import */ var _ssi_digitization_ssi_digitization_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ssi-digitization/ssi-digitization.component */ "./src/app/ssi-digitization/ssi-digitization.component.ts");
/* harmony import */ var _email_interpretation_email_interpretation_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./email-interpretation/email-interpretation.component */ "./src/app/email-interpretation/email-interpretation.component.ts");
/* harmony import */ var _connected_scm_connected_scm_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./connected-scm/connected-scm.component */ "./src/app/connected-scm/connected-scm.component.ts");
/* harmony import */ var _ey_opschain_ey_opschain_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ey-opschain/ey-opschain.component */ "./src/app/ey-opschain/ey-opschain.component.ts");
/* harmony import */ var _loyalty_solution_loyalty_solution_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./loyalty-solution/loyalty-solution.component */ "./src/app/loyalty-solution/loyalty-solution.component.ts");
/* harmony import */ var _asset_tracking_asset_tracking_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./asset-tracking/asset-tracking.component */ "./src/app/asset-tracking/asset-tracking.component.ts");































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _Modules_box_box_component__WEBPACK_IMPORTED_MODULE_17__["BoxComponent"],
                _asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_18__["AssetDetailsComponent"],
                _email_automation_email_automation_component__WEBPACK_IMPORTED_MODULE_19__["EmailAutomationComponent"],
                _ssl_asset_ssl_asset_component__WEBPACK_IMPORTED_MODULE_20__["SslAssetComponent"],
                _employee_helpdesk_employee_helpdesk_component__WEBPACK_IMPORTED_MODULE_21__["EmployeeHelpdeskComponent"],
                _kyc_digitisation_kyc_digitisation_component__WEBPACK_IMPORTED_MODULE_22__["KycDigitisationComponent"],
                _contract_digitization_contract_digitization_component__WEBPACK_IMPORTED_MODULE_23__["ContractDigitizationComponent"],
                _invoice_digitization_invoice_digitization_component__WEBPACK_IMPORTED_MODULE_24__["InvoiceDigitizationComponent"],
                _ssi_digitization_ssi_digitization_component__WEBPACK_IMPORTED_MODULE_25__["SsiDigitizationComponent"],
                _email_interpretation_email_interpretation_component__WEBPACK_IMPORTED_MODULE_26__["EmailInterpretationComponent"],
                _connected_scm_connected_scm_component__WEBPACK_IMPORTED_MODULE_27__["ConnectedScmComponent"],
                _ey_opschain_ey_opschain_component__WEBPACK_IMPORTED_MODULE_28__["EyOpschainComponent"],
                _loyalty_solution_loyalty_solution_component__WEBPACK_IMPORTED_MODULE_29__["LoyaltySolutionComponent"],
                _asset_tracking_asset_tracking_component__WEBPACK_IMPORTED_MODULE_30__["AssetTrackingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _yellowspot_ng_truncate__WEBPACK_IMPORTED_MODULE_5__["TruncateModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                mat_video__WEBPACK_IMPORTED_MODULE_4__["MatVideoModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/asset-details/asset-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/asset-details/asset-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    background-color: black\r\n}\r\nh4 {\r\n    color: #ffff;\r\n}\r\nh3 {\r\n    color: #ffff;\r\n}\r\nh2 {\r\n    color: #ffff;\r\n}\r\np{\r\n    color: #ffff\r\n}\r\n/* .container2{\r\n    padding-right: 5px;\r\n    padding-left: 5px;\r\n} */\r\n.bg{\r\n    background-color: #2e2e38\r\n}\r\n.p{\r\n    font-family: Arial, Helvetica, sans-serif\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzZXQtZGV0YWlscy9hc3NldC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtBQUNKO0FBRUE7OztHQUdHO0FBRUg7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXNzZXQtZGV0YWlscy9hc3NldC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcclxufVxyXG5oNCB7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbn1cclxuaDMge1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG59XHJcbmgyIHtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxufVxyXG5we1xyXG4gICAgY29sb3I6ICNmZmZmXHJcbn1cclxuXHJcbi8qIC5jb250YWluZXIye1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn0gKi9cclxuXHJcbi5iZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTJlMzhcclxufVxyXG4ucHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/asset-details/asset-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/asset-details/asset-details.component.ts ***!
  \**********************************************************/
/*! exports provided: AssetDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetDetailsComponent", function() { return AssetDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AssetDetailsComponent = /** @class */ (function () {
    function AssetDetailsComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.currentState = 'initial';
    }
    AssetDetailsComponent.prototype.ngOnInit = function () {
        this.title = this.activatedRoute.snapshot.paramMap.get('id');
        this.changeState();
    };
    AssetDetailsComponent.prototype.changeState = function () {
        var _this = this;
        setTimeout(function () {
            _this.currentState = 'final';
        }, 100);
    };
    AssetDetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    AssetDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asset-details',
            template: __webpack_require__(/*! raw-loader!./asset-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/asset-details/asset-details.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('changeDivSize', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: "0",
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: "1",
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('2500ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms'))
                ])
            ],
            styles: [__webpack_require__(/*! ./asset-details.component.css */ "./src/app/asset-details/asset-details.component.css")]
        })
    ], AssetDetailsComponent);
    return AssetDetailsComponent;
}());



/***/ }),

/***/ "./src/app/asset-tracking/asset-tracking.component.css":
/*!*************************************************************!*\
  !*** ./src/app/asset-tracking/asset-tracking.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0LXRyYWNraW5nL2Fzc2V0LXRyYWNraW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/asset-tracking/asset-tracking.component.ts":
/*!************************************************************!*\
  !*** ./src/app/asset-tracking/asset-tracking.component.ts ***!
  \************************************************************/
/*! exports provided: AssetTrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetTrackingComponent", function() { return AssetTrackingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AssetTrackingComponent = /** @class */ (function () {
    function AssetTrackingComponent(elementRef) {
        this.elementRef = elementRef;
    }
    AssetTrackingComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    AssetTrackingComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
    };
    AssetTrackingComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    AssetTrackingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asset-tracking',
            template: __webpack_require__(/*! raw-loader!./asset-tracking.component.html */ "./node_modules/raw-loader/index.js!./src/app/asset-tracking/asset-tracking.component.html"),
            styles: [__webpack_require__(/*! ./asset-tracking.component.css */ "./src/app/asset-tracking/asset-tracking.component.css")]
        })
    ], AssetTrackingComponent);
    return AssetTrackingComponent;
}());



/***/ }),

/***/ "./src/app/connected-scm/connected-scm.component.css":
/*!***********************************************************!*\
  !*** ./src/app/connected-scm/connected-scm.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvbm5lY3RlZC1zY20vY29ubmVjdGVkLXNjbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/connected-scm/connected-scm.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/connected-scm/connected-scm.component.ts ***!
  \**********************************************************/
/*! exports provided: ConnectedScmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedScmComponent", function() { return ConnectedScmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConnectedScmComponent = /** @class */ (function () {
    function ConnectedScmComponent(elementRef) {
        this.elementRef = elementRef;
    }
    ConnectedScmComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    ConnectedScmComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
    };
    ConnectedScmComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    ConnectedScmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-connected-scm',
            template: __webpack_require__(/*! raw-loader!./connected-scm.component.html */ "./node_modules/raw-loader/index.js!./src/app/connected-scm/connected-scm.component.html"),
            styles: [__webpack_require__(/*! ./connected-scm.component.css */ "./src/app/connected-scm/connected-scm.component.css")]
        })
    ], ConnectedScmComponent);
    return ConnectedScmComponent;
}());



/***/ }),

/***/ "./src/app/contract-digitization/contract-digitization.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/contract-digitization/contract-digitization.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyYWN0LWRpZ2l0aXphdGlvbi9jb250cmFjdC1kaWdpdGl6YXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/contract-digitization/contract-digitization.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/contract-digitization/contract-digitization.component.ts ***!
  \**************************************************************************/
/*! exports provided: ContractDigitizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractDigitizationComponent", function() { return ContractDigitizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContractDigitizationComponent = /** @class */ (function () {
    function ContractDigitizationComponent(elementRef) {
        this.elementRef = elementRef;
    }
    ContractDigitizationComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    ContractDigitizationComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
    };
    ContractDigitizationComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    ContractDigitizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contract-digitization',
            template: __webpack_require__(/*! raw-loader!./contract-digitization.component.html */ "./node_modules/raw-loader/index.js!./src/app/contract-digitization/contract-digitization.component.html"),
            styles: [__webpack_require__(/*! ./contract-digitization.component.css */ "./src/app/contract-digitization/contract-digitization.component.css")]
        })
    ], ContractDigitizationComponent);
    return ContractDigitizationComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg{\r\n    background-color: rgb(75, 75, 75);\r\n}\r\n\r\n/* .box {\r\n    border-radius: 25px;\r\n    border: 2px solid #000000;\r\n    padding: 20px; \r\n    width: 86%;\r\n    height: 86%; \r\n  } */\r\n\r\np{\r\n    color: white\r\n}\r\n\r\nmat-grid-tile{\r\n    padding: 2rem\r\n}\r\n\r\n:host ::ng-deep .mat-drawer-inner-container\r\n{\r\n    overflow: hidden !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBOzs7Ozs7S0FNSzs7QUFFTDtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUVBOztJQUVJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzUsIDc1KTtcclxufVxyXG5cclxuLyogLmJveCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcclxuICAgIHBhZGRpbmc6IDIwcHg7IFxyXG4gICAgd2lkdGg6IDg2JTtcclxuICAgIGhlaWdodDogODYlOyBcclxuICB9ICovXHJcblxyXG5we1xyXG4gICAgY29sb3I6IHdoaXRlXHJcbn1cclxubWF0LWdyaWQtdGlsZXtcclxuICAgIHBhZGRpbmc6IDJyZW1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lclxyXG57XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(elementRef) {
        this.elementRef = elementRef;
        this.images = ["Group2_1.png", "Group2_2.png", "Group2_3.png", "Group2_4.png", "Group2_5.png",
            "Group2_6.png", "Group2_7.png", "Group2_8.png", "Group2_9.png", "Group2_10.png"
        ];
        this.titles = ["KYC document digitization", "CONTRACT DIGITIZATION",
            "INVOICE/PURCHASE ORDER DIGITIZATION", "STANDARD SETTLEMENT INSTRUCTION (SSI) DIGITIZATION",
            "EMAIL INTERPRETATION, RESPONSE AND ROUTING", "CONNECTED SCM (SUPPLY CHAIN MANAGEMENT) ",
            "Telecom_Asset", "EY OPS CHAIN ",
            " BLOCKCHAIN LOYALTY SOLUTION PLATFORM", "ASSET TRACKING "
        ];
        this.urls = ['kycdigitisation', 'contractdigitisation', 'invoicedigitisation', 'ssi', 'emailinterpretation', 'connectedscm', 'assettracking', 'opschain', 'loyaltysolution', 'assettracking'];
        this.KYC = "An advanced image processing technology that can extract data from scanned image of proof of identity (PoI) documents such as Passport, National ID cards, PAN card etc. with minimal training data required which otherwise is a manually intensive task.  ";
        this.CONTRACT = "EY\u2019s digital contract module uses advance AI algorithms to extract most commonly used information such as clauses, tabular information and key entities such as dates and names.";
        this.INVOICEorPURCHASE = "Accounts payable/receivable departments of different organisations receive purchase orders and invoices from multiple vendors. Relevant data is extracted from these documents and fed into the ERP systems. EY has developed a customized solution involving digitization tools and RPA to process these documents and enter the details in the ERP systems thus reducing manual effort, processing time, error and increasing efficiency.";
        this.STANDARD_SETTLEMENT = "Across organizations there are various documents containing tabular data in different unstructured formats coming from different sources which require human intervention for standardization and further processing. EY has built a customisable solution which can be leveraged to extract tabular information efficiently from different document formats automatically henceforth reducing processing time and saving manual effort.";
        this.EMAIL_INTERPRETATION = "An AI based solution for automated email classification, response, routing, and straight through processing of customer queries received by service desk in organizations";
        this.CONNECTED_SCM = "EY opschain based blockchain solution for tracking supply chain transactions between buyer and seller through enhanced visibility and near real time tracking of product movement.";
        this.Telecom_Asset = "EY opschain shared blockchain-powered site asset repository that is accessible to all stakeholders (Towerco\u2019s and Opco\u2019s) on desktop and mobile interfaces.";
        this.OPS_CHAIN = "EY Ops Chain is a standardized framework to improve trust and efficiency in business processes and workflows in a private, permissioned blockchain compatible with Ethereum.";
        this.LOYALTY_SOLUTION = "EY Blockchain Loyalty Solution platform enables seamless loyalty points management among stakeholders, secure real-time transactions with increased accuracy, intelligent insights and connected ecosystem with better customer experience";
        this.ASSET_TRACKING = "EY opschain shared blockchain-powered site asset repository that is accessible to all stakeholders (Towerco\u2019s and Opco\u2019s) on desktop and mobile interfaces.";
        this.data = [this.KYC, this.CONTRACT, this.INVOICEorPURCHASE, this.STANDARD_SETTLEMENT,
            this.EMAIL_INTERPRETATION, this.CONNECTED_SCM, this.Telecom_Asset,
            this.OPS_CHAIN, this.LOYALTY_SOLUTION, this.ASSET_TRACKING
        ];
        this.industry = "";
        this.sector = "";
        this.capability = "";
        this.function = "";
        this.industries = ['Financial Services', 'Technology, Media & Entertainment and Telecom', 'Advanced Manufacturing & Mobility', 'Consumer', 'Energy'];
        this.sectors = ['Consumer Banking', 'General Insurance', 'Individual life insurance', 'Mortgage Finance', 'WAM-Pro', 'Telecom',
            'Media & Entertainment', 'Automotive Finance', 'Automotive OEM', 'Consumer Products', 'Retail', 'Tobacco',
            'Chemicals', 'Mining & Metals', 'Oil & Gas', 'Oil Field Services', 'Power & Utilities', 'Water Utilities'];
        this.capabilities = ["InDEx (Digitization)", "NLP", "Blockchain"];
        this.functions = [
            'Account management',
            'Asset management',
            'Billing and invoicing',
            'Business Support System',
            'Claims processing & settlement',
            'Customer acquisition',
            'Distribution & Selling',
            'Invoice & Billing',
            'Invoicing & settlements',
            'Legal',
            'Lending operations',
            'Operations Support System',
            'Procurement & Supply',
            'Production',
            'Regulatory compliance',
            'Underwriting & policy servicing',
        ];
        this.arraySpliter(this.data, this.images, this.titles, this.urls);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.overflow = '';
    };
    DashboardComponent.prototype.arraySpliter = function (arr, arr1, arr2, arr3) {
        this.r1data = [];
        this.r2data = [];
        this.r3data = [];
        this.r1images = [];
        this.r2images = [];
        this.r3images = [];
        this.r1titles = [];
        this.r2titles = [];
        this.r3titles = [];
        this.r1urls = [];
        this.r2urls = [];
        this.r3urls = [];
        if (arr.length > 7) {
            this.r1data = arr.slice(0, 4);
            this.r2data = arr.slice(4, 8);
            this.r3data = arr.slice(8, arr.length);
            this.r1images = arr1.slice(0, 4);
            this.r2images = arr1.slice(4, 8);
            this.r3images = arr1.slice(8, arr.length);
            this.r1titles = arr2.slice(0, 4);
            this.r2titles = arr2.slice(4, 8);
            this.r3titles = arr2.slice(8, arr.length);
            this.r1urls = arr3.slice(0, 4);
            this.r2urls = arr3.slice(4, 8);
            this.r3urls = arr3.slice(8, arr.length);
        }
        else if (arr.length == 7 || (arr.length < 7 && arr.length >= 4)) {
            this.r1data = arr.slice(0, 4);
            this.r2data = arr.slice(4, arr.length);
            this.r1images = arr1.slice(0, 4);
            this.r2images = arr1.slice(4, arr.length);
            this.r1titles = arr2.slice(0, 4);
            this.r2titles = arr2.slice(4, arr.length);
            this.r1urls = arr3.slice(0, 4);
            this.r2urls = arr3.slice(4, arr.length);
        }
        else if (arr.length == 3 || (arr.length < 3 && arr.length >= 0)) {
            this.r1data = arr.slice(0, arr.length);
            this.r1images = arr1.slice(0, arr.length);
            this.r1titles = arr2.slice(0, arr.length);
            this.r1urls = arr3.slice(0, arr.length);
        }
    };
    DashboardComponent.prototype.elementRemover = function (data, images, titles, urls, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                data[index] = undefined;
                images[index] = undefined;
                titles[index] = undefined;
                urls[index] = undefined;
                return [2 /*return*/];
            });
        });
    };
    DashboardComponent.prototype.getClickInfo = function (Value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var visibleData, visibleImages, visibleTitles, visibleUrls, _a, _b, _c, _d;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this.industry = "";
                        this.sector = "";
                        this.group1ClickInfo = Value.Group1;
                        this.group2ClickInfo = Value.Group2;
                        this.group3ClickInfo = Value.Group3;
                        this.group4ClickInfo = Value.Group4;
                        visibleData = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.data);
                        visibleImages = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.images);
                        visibleTitles = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.titles);
                        visibleUrls = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.urls);
                        _a = this.group1ClickInfo;
                        switch (_a) {
                            case 1: return [3 /*break*/, 1];
                            case 2: return [3 /*break*/, 5];
                            case 3: return [3 /*break*/, 6];
                            case 4: return [3 /*break*/, 9];
                            case 5: return [3 /*break*/, 12];
                            case 100: return [3 /*break*/, 17];
                        }
                        return [3 /*break*/, 18];
                    case 1:
                        this.industry = this.industries[0];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 2:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 3:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 8)];
                    case 4:
                        _e.sent();
                        return [3 /*break*/, 18];
                    case 5:
                        {
                            this.industry = this.industries[1];
                            return [3 /*break*/, 18];
                        }
                        _e.label = 6;
                    case 6:
                        this.industry = this.industries[2];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 7:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 8:
                        _e.sent();
                        return [3 /*break*/, 18];
                    case 9:
                        this.industry = this.industries[3];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 10:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 11:
                        _e.sent();
                        return [3 /*break*/, 18];
                    case 12:
                        this.industry = this.industries[4];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1)];
                    case 13:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 14:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 4)];
                    case 15:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 16:
                        _e.sent();
                        return [3 /*break*/, 18];
                    case 17:
                        {
                            this.industry = "";
                        }
                        _e.label = 18;
                    case 18:
                        _b = this.group2ClickInfo;
                        switch (_b) {
                            case 1: return [3 /*break*/, 19];
                            case 2: return [3 /*break*/, 22];
                            case 3: return [3 /*break*/, 25];
                            case 4: return [3 /*break*/, 28];
                            case 5: return [3 /*break*/, 31];
                            case 6: return [3 /*break*/, 34];
                            case 7: return [3 /*break*/, 35];
                            case 8: return [3 /*break*/, 36];
                            case 9: return [3 /*break*/, 41];
                            case 10: return [3 /*break*/, 46];
                            case 11: return [3 /*break*/, 50];
                            case 12: return [3 /*break*/, 54];
                            case 13: return [3 /*break*/, 58];
                            case 14: return [3 /*break*/, 62];
                            case 15: return [3 /*break*/, 68];
                            case 16: return [3 /*break*/, 74];
                            case 17: return [3 /*break*/, 80];
                            case 18: return [3 /*break*/, 86];
                            case 19: return [3 /*break*/, 92];
                            case 100: return [3 /*break*/, 98];
                        }
                        return [3 /*break*/, 99];
                    case 19:
                        this.sector = this.sectors[0];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 20:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 21:
                        _e.sent();
                        return [3 /*break*/, 99];
                    case 22:
                        this.sector = this.sectors[1];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 23:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 24:
                        _e.sent();
                        return [3 /*break*/, 99];
                    case 25:
                        this.sector = this.sectors[2];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 26:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 27:
                        _e.sent();
                        return [3 /*break*/, 99];
                    case 28:
                        this.sector = this.sectors[3];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 29:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 30:
                        _e.sent();
                        return [3 /*break*/, 99];
                    case 31:
                        this.sector = this.sectors[4];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 32:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 33:
                        _e.sent();
                        return [3 /*break*/, 99];
                    case 34:
                        {
                            this.sector = this.sectors[5];
                            return [3 /*break*/, 99];
                        }
                        _e.label = 35;
                    case 35:
                        {
                            this.sector = this.sectors[6];
                            return [3 /*break*/, 99];
                        }
                        _e.label = 36;
                    case 36:
                        this.sector = this.sectors[7];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 37:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 38:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 8)];
                    case 39:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 9)];
                    case 40:
                        _e.sent();
                        return [3 /*break*/, 99];
                    case 41:
                        this.sector = this.sectors[8];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 42:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 43:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 44:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 45:
                        _e.sent();
                        return [3 /*break*/, 99];
                    case 46:
                        this.sector = this.sectors[9];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 47:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 48:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 49:
                        _e.sent();
                        return [3 /*break*/, 99];
                    case 50:
                        this.sector = this.sectors[10];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 51:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 52:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 53:
                        _e.sent();
                        return [3 /*break*/, 99];
                    case 54:
                        this.sector = this.sectors[11];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 55:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 56:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 57:
                        _e.sent();
                        return [3 /*break*/, 99];
                    case 58:
                        this.sector = this.sectors[12];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 59:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 60:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 61:
                        _e.sent();
                        return [3 /*break*/, 99];
                    case 62:
                        this.sector = this.sectors[13];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 63:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1)];
                    case 64:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 65:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 4)];
                    case 66:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 67:
                        _e.sent();
                        return [3 /*break*/, 99];
                    case 68:
                        this.sector = this.sectors[14];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 69:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1)];
                    case 70:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 71:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 4)];
                    case 72:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 73:
                        _e.sent();
                        return [3 /*break*/, 99];
                    case 74:
                        this.sector = this.sectors[15];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 75:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1)];
                    case 76:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 77:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 4)];
                    case 78:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 79:
                        _e.sent();
                        return [3 /*break*/, 99];
                    case 80:
                        this.sector = this.sectors[16];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 81:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1)];
                    case 82:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 83:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 4)];
                    case 84:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 85:
                        _e.sent();
                        return [3 /*break*/, 99];
                    case 86:
                        this.sector = this.sectors[17];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 87:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1)];
                    case 88:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 89:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 4)];
                    case 90:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 91:
                        _e.sent();
                        return [3 /*break*/, 99];
                    case 92:
                        this.sector = this.sectors[18];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 93:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1)];
                    case 94:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 95:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 4)];
                    case 96:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 97:
                        _e.sent();
                        return [3 /*break*/, 99];
                    case 98:
                        {
                            this.sector = "";
                        }
                        _e.label = 99;
                    case 99:
                        _c = this.group3ClickInfo;
                        switch (_c) {
                            case 1: return [3 /*break*/, 100];
                            case 2: return [3 /*break*/, 107];
                            case 3: return [3 /*break*/, 117];
                            case 100: return [3 /*break*/, 123];
                        }
                        return [3 /*break*/, 124];
                    case 100:
                        this.capability = this.capabilities[0];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 4)];
                    case 101:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 102:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 103:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7)];
                    case 104:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 8)];
                    case 105:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 9)];
                    case 106:
                        _e.sent();
                        return [3 /*break*/, 124];
                    case 107:
                        this.capability = this.capabilities[1];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 108:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1)];
                    case 109:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 2)];
                    case 110:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 111:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 112:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 113:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7)];
                    case 114:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 8)];
                    case 115:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 9)];
                    case 116:
                        _e.sent();
                        return [3 /*break*/, 124];
                    case 117:
                        this.capability = this.capabilities[2];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 118:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1)];
                    case 119:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 2)];
                    case 120:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 121:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 4)];
                    case 122:
                        _e.sent();
                        return [3 /*break*/, 124];
                    case 123:
                        {
                            this.capability = "";
                        }
                        _e.label = 124;
                    case 124:
                        _d = this.group4ClickInfo;
                        switch (_d) {
                            case 1: return [3 /*break*/, 125];
                            case 2: return [3 /*break*/, 133];
                            case 3: return [3 /*break*/, 139];
                            case 4: return [3 /*break*/, 148];
                            case 5: return [3 /*break*/, 156];
                            case 6: return [3 /*break*/, 166];
                            case 7: return [3 /*break*/, 174];
                            case 8: return [3 /*break*/, 180];
                            case 9: return [3 /*break*/, 189];
                            case 10: return [3 /*break*/, 197];
                            case 11: return [3 /*break*/, 207];
                            case 12: return [3 /*break*/, 215];
                            case 13: return [3 /*break*/, 222];
                            case 14: return [3 /*break*/, 228];
                            case 15: return [3 /*break*/, 236];
                            case 16: return [3 /*break*/, 246];
                            case 100: return [3 /*break*/, 257];
                        }
                        return [3 /*break*/, 258];
                    case 125:
                        this.function = this.functions[0];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 126:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1)];
                    case 127:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 2)];
                    case 128:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 129:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 130:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 131:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7)];
                    case 132:
                        _e.sent();
                        return [3 /*break*/, 258];
                    case 133:
                        this.function = this.functions[1];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 134:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1)];
                    case 135:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 136:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 137:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7)];
                    case 138:
                        _e.sent();
                        return [3 /*break*/, 258];
                    case 139:
                        this.function = this.functions[2];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 140:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1)];
                    case 141:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 4)];
                    case 142:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 143:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 144:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7)];
                    case 145:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 8)];
                    case 146:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 9)];
                    case 147:
                        _e.sent();
                        return [3 /*break*/, 258];
                    case 148:
                        this.function = this.functions[3];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 149:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1)];
                    case 150:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 151:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 152:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7)];
                    case 153:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 8)];
                    case 154:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 9)];
                    case 155:
                        _e.sent();
                        return [3 /*break*/, 258];
                    case 156:
                        this.function = this.functions[4];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 157:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1)];
                    case 158:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 2)];
                    case 159:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 160:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 4)];
                    case 161:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 162:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 163:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7)];
                    case 164:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 8)];
                    case 165:
                        _e.sent();
                        return [3 /*break*/, 258];
                    case 166:
                        this.function = this.functions[5];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1)];
                    case 167:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 2)];
                    case 168:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 169:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 170:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 171:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 8)];
                    case 172:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 9)];
                    case 173:
                        _e.sent();
                        return [3 /*break*/, 258];
                    case 174:
                        this.function = this.functions[6];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 175:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 176:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 4)];
                    case 177:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 178:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7)];
                    case 179:
                        _e.sent();
                        return [3 /*break*/, 258];
                    case 180:
                        this.function = this.functions[7];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 181:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1)];
                    case 182:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 4)];
                    case 183:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 184:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 185:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7)];
                    case 186:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 8)];
                    case 187:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 9)];
                    case 188:
                        _e.sent();
                        return [3 /*break*/, 258];
                    case 189:
                        this.function = this.functions[8];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 190:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1)];
                    case 191:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 4)];
                    case 192:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 193:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 194:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7)];
                    case 195:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 8)];
                    case 196:
                        _e.sent();
                        return [3 /*break*/, 258];
                    case 197:
                        this.function = this.functions[9];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 198:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 2)];
                    case 199:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 200:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 4)];
                    case 201:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 202:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 203:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7)];
                    case 204:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 8)];
                    case 205:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 9)];
                    case 206:
                        _e.sent();
                        return [3 /*break*/, 258];
                    case 207:
                        this.function = this.functions[10];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 208:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 4)];
                    case 209:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 210:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 211:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7)];
                    case 212:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 8)];
                    case 213:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 9)];
                    case 214:
                        _e.sent();
                        return [3 /*break*/, 258];
                    case 215:
                        this.function = this.functions[11];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 216:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1)];
                    case 217:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 2)];
                    case 218:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 219:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 4)];
                    case 220:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7)];
                    case 221:
                        _e.sent();
                        return [3 /*break*/, 258];
                    case 222:
                        this.function = this.functions[12];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 223:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 224:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 4)];
                    case 225:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 226:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7)];
                    case 227:
                        _e.sent();
                        return [3 /*break*/, 258];
                    case 228:
                        this.function = this.functions[13];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 229:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1)];
                    case 230:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 2)];
                    case 231:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 232:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 4)];
                    case 233:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 234:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7)];
                    case 235:
                        _e.sent();
                        return [3 /*break*/, 258];
                    case 236:
                        this.function = this.functions[14];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 237:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1)];
                    case 238:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 2)];
                    case 239:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 240:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 4)];
                    case 241:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 242:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 243:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7)];
                    case 244:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 9)];
                    case 245:
                        _e.sent();
                        return [3 /*break*/, 258];
                    case 246:
                        this.function = this.functions[15];
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 0)];
                    case 247:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 1)];
                    case 248:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 2)];
                    case 249:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 3)];
                    case 250:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 4)];
                    case 251:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 5)];
                    case 252:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 6)];
                    case 253:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 7)];
                    case 254:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 8)];
                    case 255:
                        _e.sent();
                        return [4 /*yield*/, this.elementRemover(visibleData, visibleImages, visibleTitles, visibleUrls, 9)];
                    case 256:
                        _e.sent();
                        return [3 /*break*/, 258];
                    case 257:
                        {
                            this.function = "";
                        }
                        _e.label = 258;
                    case 258:
                        if (this.industry != "" && this.sector != "")
                            this.industry += " - ";
                        if (this.sector != "" && this.capability != "")
                            this.sector += " - ";
                        if (this.capability != "" && this.function != "")
                            this.capability += " - ";
                        visibleData = visibleData.filter(function (el) {
                            return el != undefined;
                        });
                        visibleImages = visibleImages.filter(function (el) {
                            return el != undefined;
                        });
                        visibleTitles = visibleTitles.filter(function (el) {
                            return el != undefined;
                        });
                        visibleUrls = visibleUrls.filter(function (el) {
                            return el != undefined;
                        });
                        this.arraySpliter(visibleData, visibleImages, visibleTitles, visibleUrls);
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/email-automation/email-automation.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/email-automation/email-automation.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    background-color: black\r\n}\r\nh4 {\r\n    color: #ffff;\r\n}\r\nh3 {\r\n    color: #ffff;\r\n}\r\nh2 {\r\n    color: #ffff;\r\n}\r\np{\r\n    color: #ffff\r\n}\r\n/* .container2{\r\n    padding-right: 5px;\r\n    padding-left: 5px;\r\n} */\r\n.bg{\r\n    background-color: #2e2e38\r\n}\r\n.p{\r\n    font-family: Arial, Helvetica, sans-serif\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWwtYXV0b21hdGlvbi9lbWFpbC1hdXRvbWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtBQUNKO0FBRUE7OztHQUdHO0FBRUg7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZW1haWwtYXV0b21hdGlvbi9lbWFpbC1hdXRvbWF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcclxufVxyXG5oNCB7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbn1cclxuaDMge1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG59XHJcbmgyIHtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxufVxyXG5we1xyXG4gICAgY29sb3I6ICNmZmZmXHJcbn1cclxuXHJcbi8qIC5jb250YWluZXIye1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn0gKi9cclxuXHJcbi5iZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTJlMzhcclxufVxyXG4ucHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/email-automation/email-automation.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/email-automation/email-automation.component.ts ***!
  \****************************************************************/
/*! exports provided: EmailAutomationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailAutomationComponent", function() { return EmailAutomationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var EmailAutomationComponent = /** @class */ (function () {
    function EmailAutomationComponent() {
        this.currentState = 'initial';
    }
    EmailAutomationComponent.prototype.ngOnInit = function () {
        this.changeState();
    };
    EmailAutomationComponent.prototype.changeState = function () {
        var _this = this;
        setTimeout(function () {
            _this.currentState = 'final';
        }, 100);
    };
    EmailAutomationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-automation',
            template: __webpack_require__(/*! raw-loader!./email-automation.component.html */ "./node_modules/raw-loader/index.js!./src/app/email-automation/email-automation.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('changeDivSize', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: "0",
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: "1",
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('2500ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms'))
                ])
            ],
            styles: [__webpack_require__(/*! ./email-automation.component.css */ "./src/app/email-automation/email-automation.component.css")]
        })
    ], EmailAutomationComponent);
    return EmailAutomationComponent;
}());



/***/ }),

/***/ "./src/app/email-interpretation/email-interpretation.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/email-interpretation/email-interpretation.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsLWludGVycHJldGF0aW9uL2VtYWlsLWludGVycHJldGF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/email-interpretation/email-interpretation.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/email-interpretation/email-interpretation.component.ts ***!
  \************************************************************************/
/*! exports provided: EmailInterpretationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailInterpretationComponent", function() { return EmailInterpretationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmailInterpretationComponent = /** @class */ (function () {
    function EmailInterpretationComponent(elementRef) {
        this.elementRef = elementRef;
    }
    EmailInterpretationComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    EmailInterpretationComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
    };
    EmailInterpretationComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    EmailInterpretationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-interpretation',
            template: __webpack_require__(/*! raw-loader!./email-interpretation.component.html */ "./node_modules/raw-loader/index.js!./src/app/email-interpretation/email-interpretation.component.html"),
            styles: [__webpack_require__(/*! ./email-interpretation.component.css */ "./src/app/email-interpretation/email-interpretation.component.css")]
        })
    ], EmailInterpretationComponent);
    return EmailInterpretationComponent;
}());



/***/ }),

/***/ "./src/app/employee-helpdesk/employee-helpdesk.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/employee-helpdesk/employee-helpdesk.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    background-color: black\r\n}\r\nh4 {\r\n    color: #ffff;\r\n}\r\nh3 {\r\n    color: #ffff;\r\n}\r\nh2 {\r\n    color: #ffff;\r\n}\r\np{\r\n    color: #ffff\r\n}\r\n/* .container2{\r\n    padding-right: 5px;\r\n    padding-left: 5px;\r\n} */\r\n.bg{\r\n    background-color: #2e2e38\r\n}\r\n.p{\r\n    font-family: Arial, Helvetica, sans-serif\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtaGVscGRlc2svZW1wbG95ZWUtaGVscGRlc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJO0FBQ0o7QUFFQTs7O0dBR0c7QUFFSDtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1oZWxwZGVzay9lbXBsb3llZS1oZWxwZGVzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrXHJcbn1cclxuaDQge1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG59XHJcbmgzIHtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxufVxyXG5oMiB7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbn1cclxucHtcclxuICAgIGNvbG9yOiAjZmZmZlxyXG59XHJcblxyXG4vKiAuY29udGFpbmVyMntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59ICovXHJcblxyXG4uYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZTM4XHJcbn1cclxuLnB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZlxyXG59Il19 */"

/***/ }),

/***/ "./src/app/employee-helpdesk/employee-helpdesk.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/employee-helpdesk/employee-helpdesk.component.ts ***!
  \******************************************************************/
/*! exports provided: EmployeeHelpdeskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeHelpdeskComponent", function() { return EmployeeHelpdeskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var EmployeeHelpdeskComponent = /** @class */ (function () {
    function EmployeeHelpdeskComponent() {
        this.currentState = 'initial';
    }
    EmployeeHelpdeskComponent.prototype.ngOnInit = function () {
        this.changeState();
    };
    EmployeeHelpdeskComponent.prototype.changeState = function () {
        var _this = this;
        setTimeout(function () {
            _this.currentState = 'final';
        }, 100);
    };
    EmployeeHelpdeskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-helpdesk',
            template: __webpack_require__(/*! raw-loader!./employee-helpdesk.component.html */ "./node_modules/raw-loader/index.js!./src/app/employee-helpdesk/employee-helpdesk.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('changeDivSize', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: "0",
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: "1",
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('2500ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms'))
                ])
            ],
            styles: [__webpack_require__(/*! ./employee-helpdesk.component.css */ "./src/app/employee-helpdesk/employee-helpdesk.component.css")]
        })
    ], EmployeeHelpdeskComponent);
    return EmployeeHelpdeskComponent;
}());



/***/ }),

/***/ "./src/app/ey-opschain/ey-opschain.component.css":
/*!*******************************************************!*\
  !*** ./src/app/ey-opschain/ey-opschain.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V5LW9wc2NoYWluL2V5LW9wc2NoYWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/ey-opschain/ey-opschain.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ey-opschain/ey-opschain.component.ts ***!
  \******************************************************/
/*! exports provided: EyOpschainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyOpschainComponent", function() { return EyOpschainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EyOpschainComponent = /** @class */ (function () {
    function EyOpschainComponent(elementRef) {
        this.elementRef = elementRef;
    }
    EyOpschainComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    EyOpschainComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
    };
    EyOpschainComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    EyOpschainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ey-opschain',
            template: __webpack_require__(/*! raw-loader!./ey-opschain.component.html */ "./node_modules/raw-loader/index.js!./src/app/ey-opschain/ey-opschain.component.html"),
            styles: [__webpack_require__(/*! ./ey-opschain.component.css */ "./src/app/ey-opschain/ey-opschain.component.css")]
        })
    ], EyOpschainComponent);
    return EyOpschainComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered {\r\n    position: absolute;\r\n    top: 9%;\r\n    left: 2%;\r\n    /* transform: translate(-50%, -50%); */\r\n  }\r\np{\r\n    font-size: x-large;\r\n    font-weight: bold\r\n}\r\n.pr1 {\r\n  padding-right: 1rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1Isc0NBQXNDO0VBQ3hDO0FBQ0Y7SUFDSSxrQkFBa0I7SUFDbEI7QUFDSjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcmVkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOSU7XHJcbiAgICBsZWZ0OiAyJTtcclxuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAqL1xyXG4gIH1cclxucHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXHJcbn1cclxuXHJcbi5wcjEge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = "Home";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HeaderComponent.prototype, "industries", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HeaderComponent.prototype, "sectors", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HeaderComponent.prototype, "capabilities", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HeaderComponent.prototype, "functions", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    background-color: #2e2e38\r\n}\r\nh4 {\r\n    color: #ffff;\r\n}\r\nh3 {\r\n    color: #ffff;\r\n}\r\nh2 {\r\n    color: #ffff;\r\n}\r\np{\r\n    color: #ffff\r\n}\r\n/* .container2{\r\n    padding-right: 5px;\r\n    padding-left: 5px;\r\n} */\r\n.bg{\r\n    background-color: #2e2e38\r\n}\r\n.p{\r\n    font-family: Arial, Helvetica, sans-serif\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtBQUNKO0FBRUE7OztHQUdHO0FBRUg7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmUzOFxyXG59XHJcbmg0IHtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxufVxyXG5oMyB7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbn1cclxuaDIge1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG59XHJcbnB7XHJcbiAgICBjb2xvcjogI2ZmZmZcclxufVxyXG5cclxuLyogLmNvbnRhaW5lcjJ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufSAqL1xyXG5cclxuLmJne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmUzOFxyXG59XHJcbi5we1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.currentState = 'initial';
        this.currentHeaderState = 'initial';
        this.finalHeaderState = 'final';
        this.firstHeader = true;
        this.secondHeader = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.changeState();
    };
    HomeComponent.prototype.changeState = function () {
        var _this = this;
        setTimeout(function () {
            _this.currentState = 'final';
        }, 100);
    };
    HomeComponent.prototype.onWindowScroll = function ($event) {
        if (window.pageYOffset == 0) {
            this.currentHeaderState = 'initial';
            this.finalHeaderState = 'final';
            this.firstHeader = true;
            this.secondHeader = false;
        }
        else {
            this.currentHeaderState = 'final';
            this.finalHeaderState = 'initial';
            this.firstHeader = false;
            this.secondHeader = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
    ], HomeComponent.prototype, "onWindowScroll", null);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('changeDivSize', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: "0",
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: "1",
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('2500ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('changeHeader', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: "1",
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: "0",
                        display: 'none'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('changeHeader2', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: "1",
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: "0",
                        display: 'none'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in'))
                ])
            ],
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/invoice-digitization/invoice-digitization.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/invoice-digitization/invoice-digitization.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UtZGlnaXRpemF0aW9uL2ludm9pY2UtZGlnaXRpemF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/invoice-digitization/invoice-digitization.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/invoice-digitization/invoice-digitization.component.ts ***!
  \************************************************************************/
/*! exports provided: InvoiceDigitizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDigitizationComponent", function() { return InvoiceDigitizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InvoiceDigitizationComponent = /** @class */ (function () {
    function InvoiceDigitizationComponent(elementRef) {
        this.elementRef = elementRef;
    }
    InvoiceDigitizationComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    InvoiceDigitizationComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
    };
    InvoiceDigitizationComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    InvoiceDigitizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-digitization',
            template: __webpack_require__(/*! raw-loader!./invoice-digitization.component.html */ "./node_modules/raw-loader/index.js!./src/app/invoice-digitization/invoice-digitization.component.html"),
            styles: [__webpack_require__(/*! ./invoice-digitization.component.css */ "./src/app/invoice-digitization/invoice-digitization.component.css")]
        })
    ], InvoiceDigitizationComponent);
    return InvoiceDigitizationComponent;
}());



/***/ }),

/***/ "./src/app/kyc-digitisation/kyc-digitisation.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/kyc-digitisation/kyc-digitisation.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    overflow-y: hidden !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva3ljLWRpZ2l0aXNhdGlvbi9reWMtZGlnaXRpc2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9reWMtZGlnaXRpc2F0aW9uL2t5Yy1kaWdpdGlzYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW4gIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/kyc-digitisation/kyc-digitisation.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/kyc-digitisation/kyc-digitisation.component.ts ***!
  \****************************************************************/
/*! exports provided: KycDigitisationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycDigitisationComponent", function() { return KycDigitisationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var KycDigitisationComponent = /** @class */ (function () {
    function KycDigitisationComponent(document, elementRef) {
        this.document = document;
        this.elementRef = elementRef;
    }
    KycDigitisationComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    KycDigitisationComponent.prototype.ngAfterViewInit = function () {
        // this.document.body.scrollTop = 0;
        //  this.elementRef.nativeElement.ownerDocument.body.scrollTop = 0
        this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
    };
    KycDigitisationComponent.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    KycDigitisationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kyc-digitisation',
            template: __webpack_require__(/*! raw-loader!./kyc-digitisation.component.html */ "./node_modules/raw-loader/index.js!./src/app/kyc-digitisation/kyc-digitisation.component.html"),
            styles: [__webpack_require__(/*! ./kyc-digitisation.component.css */ "./src/app/kyc-digitisation/kyc-digitisation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
    ], KycDigitisationComponent);
    return KycDigitisationComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-solution/loyalty-solution.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/loyalty-solution/loyalty-solution.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xveWFsdHktc29sdXRpb24vbG95YWx0eS1zb2x1dGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/loyalty-solution/loyalty-solution.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/loyalty-solution/loyalty-solution.component.ts ***!
  \****************************************************************/
/*! exports provided: LoyaltySolutionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltySolutionComponent", function() { return LoyaltySolutionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoyaltySolutionComponent = /** @class */ (function () {
    function LoyaltySolutionComponent(elementRef) {
        this.elementRef = elementRef;
    }
    LoyaltySolutionComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    LoyaltySolutionComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
    };
    LoyaltySolutionComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    LoyaltySolutionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-solution',
            template: __webpack_require__(/*! raw-loader!./loyalty-solution.component.html */ "./node_modules/raw-loader/index.js!./src/app/loyalty-solution/loyalty-solution.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-solution.component.css */ "./src/app/loyalty-solution/loyalty-solution.component.css")]
        })
    ], LoyaltySolutionComponent);
    return LoyaltySolutionComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    color: white\r\n}\r\n/* button{\r\n    color: white\r\n} */\r\n.box {\r\n    border-radius: 25px;\r\n    border: 2px solid #000000;\r\n    /* padding: 20px;  */\r\n    /* width: 80%;\r\n    height: 80%;  */\r\n  }\r\nh4{\r\n    text-align: center;\r\n    color: rgb(255,230,0)\r\n}\r\n.btn-default {\r\n    color: white;\r\n    background-color: rgb(75, 75, 75);\r\n  }\r\n.btn-change {\r\n    color: rgb(255,230,0);\r\n  }\r\n.mb2{\r\n      margin-bottom: 2rem;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjtBQUNBOztHQUVHO0FBRUg7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQjttQkFDZTtFQUNqQjtBQUNGO0lBQ0ksa0JBQWtCO0lBQ2xCO0FBQ0o7QUFHQTtJQUNJLFlBQVk7SUFDWixpQ0FBaUM7RUFDbkM7QUFFQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUVBO01BQ0ksbUJBQW1CO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG59XHJcbi8qIGJ1dHRvbntcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG59ICovXHJcblxyXG4uYm94IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgLyogcGFkZGluZzogMjBweDsgICovXHJcbiAgICAvKiB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7ICAqL1xyXG4gIH1cclxuaDR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwyMzAsMClcclxufVxyXG5cclxuXHJcbi5idG4tZGVmYXVsdCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDc1LCA3NSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tY2hhbmdlIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LDIzMCwwKTtcclxuICB9XHJcblxyXG4gIC5tYjJ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.clickInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.key1 = 'INDUSTRIES';
        this.key2 = 'SECTORS';
        this.key3 = 'CAPABILITIES';
        this.key4 = 'FUNCTIONS';
        this.btnStyleGroup1 = ['btn-default', 'btn-default', 'btn-default', 'btn-default', 'btn-default'];
        this.btnStyleGroup2 = [
            'btn-default', 'btn-default', 'btn-default', 'btn-default', 'btn-default', 'btn-default', 'btn-default',
            'btn-default', 'btn-default', 'btn-default', 'btn-default', 'btn-default', 'btn-default', 'btn-default',
            'btn-default', 'btn-default', 'btn-default', 'btn-default', 'btn-default'
        ];
        this.btnStyleGroup3 = ['btn-default', 'btn-default', 'btn-default'];
        this.btnStyleGroup4 = [
            'btn-default', 'btn-default', 'btn-default', 'btn-default', 'btn-default', 'btn-default',
            'btn-default', 'btn-default', 'btn-default', 'btn-default', 'btn-default', 'btn-default',
            'btn-default', 'btn-default', 'btn-default', 'btn-default', 'btn-default'
        ];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        localStorage.clear();
    };
    NavbarComponent.prototype.evaluateButtonGroup1 = function (Value) {
        var previousValue = localStorage.getItem(this.key1);
        var flag = '';
        if (previousValue == Value) {
            if (this.btnStyleGroup1[parseInt(previousValue, 10) - 1] == 'btn-default') {
                flag = 'Select';
            }
            else {
                flag = 'Unselect';
            }
        }
        if (previousValue != undefined) {
            this.btnStyleGroup1[parseInt(previousValue, 10) - 1] = 'btn-default';
        }
        localStorage.setItem(this.key1, Value);
        this.btnStyleGroup1[Value - 1] = 'btn-change';
        var group2Value = parseInt(localStorage.getItem(this.key2), 10);
        var group3Value = parseInt(localStorage.getItem(this.key3), 10);
        var group4Value = parseInt(localStorage.getItem(this.key4), 10);
        if (flag == 'Unselect') {
            localStorage.removeItem(this.key1);
            this.btnStyleGroup1[Value - 1] = 'btn-default';
            Value = 100;
        }
        this.clickInfo.emit({ 'Group1': Value, 'Group2': group2Value, 'Group3': group3Value, 'Group4': group4Value });
    };
    NavbarComponent.prototype.evaluateButtonGroup2 = function (Value) {
        var previousValue = localStorage.getItem(this.key2);
        var flag = '';
        if (previousValue == Value) {
            if (this.btnStyleGroup2[parseInt(previousValue, 10) - 1] == 'btn-default') {
                flag = 'Select';
            }
            else {
                flag = 'Unselect';
            }
        }
        if (previousValue != undefined) {
            this.btnStyleGroup2[parseInt(previousValue, 10) - 1] = 'btn-default';
        }
        localStorage.setItem(this.key2, Value);
        this.btnStyleGroup2[Value - 1] = 'btn-change';
        var group1Value = parseInt(localStorage.getItem(this.key1), 10);
        var group3Value = parseInt(localStorage.getItem(this.key3), 10);
        var group4Value = parseInt(localStorage.getItem(this.key4), 10);
        if (flag == 'Unselect') {
            this.btnStyleGroup2[Value - 1] = 'btn-default';
            localStorage.removeItem(this.key2);
            Value = 100;
        }
        this.clickInfo.emit({ 'Group1': group1Value, 'Group2': Value, 'Group3': group3Value, 'Group4': group4Value });
    };
    NavbarComponent.prototype.evaluateButtonGroup3 = function (Value) {
        var previousValue = localStorage.getItem(this.key3);
        var flag = '';
        if (previousValue == Value) {
            if (this.btnStyleGroup3[parseInt(previousValue, 10) - 1] == 'btn-default') {
                flag = 'Select';
            }
            else {
                flag = 'Unselect';
            }
        }
        if (previousValue != undefined) {
            this.btnStyleGroup3[parseInt(previousValue, 10) - 1] = 'btn-default';
        }
        localStorage.setItem(this.key3, Value);
        this.btnStyleGroup3[Value - 1] = 'btn-change';
        var group1Value = parseInt(localStorage.getItem(this.key1), 10);
        var group2Value = parseInt(localStorage.getItem(this.key2), 10);
        var group4Value = parseInt(localStorage.getItem(this.key4), 10);
        if (flag == 'Unselect') {
            localStorage.removeItem(this.key3);
            this.btnStyleGroup3[Value - 1] = 'btn-default';
            Value = 100;
        }
        this.clickInfo.emit({ 'Group1': group1Value, 'Group2': group2Value, 'Group3': Value, 'Group4': group4Value });
    };
    NavbarComponent.prototype.evaluateButtonGroup4 = function (Value) {
        var previousValue = localStorage.getItem(this.key4);
        var flag = '';
        if (previousValue == Value) {
            if (this.btnStyleGroup4[parseInt(previousValue, 10) - 1] == 'btn-default') {
                flag = 'Select';
            }
            else {
                flag = 'Unselect';
            }
        }
        if (previousValue != undefined) {
            this.btnStyleGroup4[parseInt(previousValue, 10) - 1] = 'btn-default';
        }
        localStorage.setItem(this.key4, Value);
        this.btnStyleGroup4[Value - 1] = 'btn-change';
        var group1Value = parseInt(localStorage.getItem(this.key1), 10);
        var group2Value = parseInt(localStorage.getItem(this.key2), 10);
        var group3Value = parseInt(localStorage.getItem(this.key3), 10);
        if (flag == 'Unselect') {
            localStorage.removeItem(this.key4);
            this.btnStyleGroup4[Value - 1] = 'btn-default';
            Value = 100;
        }
        this.clickInfo.emit({ 'Group1': group1Value, 'Group2': group2Value, 'Group3': group3Value, 'Group4': Value });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NavbarComponent.prototype, "clickInfo", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/ssi-digitization/ssi-digitization.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/ssi-digitization/ssi-digitization.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NzaS1kaWdpdGl6YXRpb24vc3NpLWRpZ2l0aXphdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/ssi-digitization/ssi-digitization.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ssi-digitization/ssi-digitization.component.ts ***!
  \****************************************************************/
/*! exports provided: SsiDigitizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SsiDigitizationComponent", function() { return SsiDigitizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SsiDigitizationComponent = /** @class */ (function () {
    function SsiDigitizationComponent(elementRef) {
        this.elementRef = elementRef;
    }
    SsiDigitizationComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    SsiDigitizationComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
    };
    SsiDigitizationComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    SsiDigitizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ssi-digitization',
            template: __webpack_require__(/*! raw-loader!./ssi-digitization.component.html */ "./node_modules/raw-loader/index.js!./src/app/ssi-digitization/ssi-digitization.component.html"),
            styles: [__webpack_require__(/*! ./ssi-digitization.component.css */ "./src/app/ssi-digitization/ssi-digitization.component.css")]
        })
    ], SsiDigitizationComponent);
    return SsiDigitizationComponent;
}());



/***/ }),

/***/ "./src/app/ssl-asset/ssl-asset.component.css":
/*!***************************************************!*\
  !*** ./src/app/ssl-asset/ssl-asset.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    background-color: black\r\n}\r\nh4 {\r\n    color: #ffff;\r\n}\r\nh3 {\r\n    color: #ffff;\r\n}\r\nh2 {\r\n    color: #ffff;\r\n}\r\np{\r\n    color: #ffff\r\n}\r\n/* .container2{\r\n    padding-right: 5px;\r\n    padding-left: 5px;\r\n} */\r\n.bg{\r\n    background-color: #2e2e38\r\n}\r\n.p{\r\n    font-family: Arial, Helvetica, sans-serif\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3NsLWFzc2V0L3NzbC1hc3NldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0k7QUFDSjtBQUVBOzs7R0FHRztBQUVIO0lBQ0k7QUFDSjtBQUNBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NzbC1hc3NldC9zc2wtYXNzZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xyXG59XHJcbmg0IHtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxufVxyXG5oMyB7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbn1cclxuaDIge1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG59XHJcbnB7XHJcbiAgICBjb2xvcjogI2ZmZmZcclxufVxyXG5cclxuLyogLmNvbnRhaW5lcjJ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufSAqL1xyXG5cclxuLmJne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmUzOFxyXG59XHJcbi5we1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/ssl-asset/ssl-asset.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ssl-asset/ssl-asset.component.ts ***!
  \**************************************************/
/*! exports provided: SslAssetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SslAssetComponent", function() { return SslAssetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var SslAssetComponent = /** @class */ (function () {
    function SslAssetComponent() {
        this.currentState = 'initial';
    }
    SslAssetComponent.prototype.ngOnInit = function () {
        this.changeState();
    };
    SslAssetComponent.prototype.changeState = function () {
        var _this = this;
        setTimeout(function () {
            _this.currentState = 'final';
        }, 100);
    };
    SslAssetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ssl-asset',
            template: __webpack_require__(/*! raw-loader!./ssl-asset.component.html */ "./node_modules/raw-loader/index.js!./src/app/ssl-asset/ssl-asset.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('changeDivSize', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: "0",
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: "1",
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('2500ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms'))
                ])
            ],
            styles: [__webpack_require__(/*! ./ssl-asset.component.css */ "./src/app/ssl-asset/ssl-asset.component.css")]
        })
    ], SslAssetComponent);
    return SslAssetComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aswinraj.g\Documents\EY\Other\Assets-and-Solutions-Library\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map