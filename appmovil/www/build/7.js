webpackJsonp([7],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PPrincipalModule", function() { return PPrincipalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__p_principal__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PPrincipalModule = /** @class */ (function () {
    function PPrincipalModule() {
    }
    PPrincipalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__p_principal__["a" /* PPrincipal */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__p_principal__["a" /* PPrincipal */]),
            ],
        })
    ], PPrincipalModule);
    return PPrincipalModule;
}());

//# sourceMappingURL=p-principal.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PPrincipal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PPrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PPrincipal = /** @class */ (function () {
    function PPrincipal(navCtrl, navParams /*,private geolocation: Geolocation*/) {
        this.navCtrl = navCtrl;
        this.navParams = navParams; /*,private geolocation: Geolocation*/
    }
    PPrincipal.prototype.ionViewDidLoad = function () {
        this.loadMap();
        //console.log('ionViewDidLoad PPrincipalPage');
    };
    PPrincipal.prototype.loadMap = function () {
        // This code is necessary for browser
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* Environment */].setEnv({
            'API_KEY_FOR_BROWSER_RELEASE': '',
            'API_KEY_FOR_BROWSER_DEBUG': ''
        });
        var mapOptions = {
            camera: {
                target: {
                    lat: -33.610554,
                    lng: -70.594103
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMaps */].create('map_canvas', mapOptions);
        var marker = this.map.addMarkerSync({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: -33.610554,
                lng: -70.594103
            }
        });
        marker.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function () {
            alert('clicked');
        });
    };
    PPrincipal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-p-principal',template:/*ion-inline-start:"D:\Project\SW2_geoTrees\appmovil\src\pages\p-principal\p-principal.html"*/'<!--\n\n  Generated template for the PPrincipalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<!--HEADER-->\n\n<ion-header>\n\n    <!--BARRA-->\n\n    <ion-navbar>\n\n        <ion-buttons>\n\n            <button ion-button icon-only (click)="irpaginaprincipal()">\n\n                <ion-icon name="home"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <!--<ion-title padding text-center>Home</ion-title>-->\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                  <ion-icon name="options"></ion-icon>\n\n                </button>\n\n        </ion-buttons>\n\n        <ion-buttons start>\n\n            <button ion-button icon-only (click)="irperfil()">\n\n                  <ion-icon name="contact"></ion-icon>\n\n                </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n    <!--FIN-BARRA-->\n\n</ion-header>\n\n\n\n<!--CONTENIDO-->\n\n\n\n<ion-content padding>\n\n\n\n    <div id="map_canvas">\n\n    </div>\n\n</ion-content>\n\n\n\n<!--FOOTER-->\n\n\n\n<ion-footer>\n\n\n\n\n\n</ion-footer>'/*ion-inline-end:"D:\Project\SW2_geoTrees\appmovil\src\pages\p-principal\p-principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] /*,private geolocation: Geolocation*/])
    ], PPrincipal);
    return PPrincipal;
}());

//# sourceMappingURL=p-principal.js.map

/***/ })

});
//# sourceMappingURL=7.js.map