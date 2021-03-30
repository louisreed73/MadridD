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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <p>provisional Header</p>\n</header>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/filter-tabs/filter-tabs.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/filter-tabs/filter-tabs.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/documentos']\" routerLinkActive=\"active\">documentos</a>\n<a [routerLink]=\"['/escritos']\" routerLinkActive=\"active\">escritos</a>\n<a [routerLink]=\"['/resoluciones']\" routerLinkActive=\"active\">resoluciones</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/search-layout/search-layout.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/search-layout/search-layout.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n    <section>\n        <div class=\"search\">\n            <!-- <label for=\"search\">Search</label> -->\n            <input type=\"text\" name=\"\" id=\"search\" placeholder=\"Buscar\">\n        </div>\n    </section>\n    <section class=\"filterTabs\">\n        <app-filter-tabs></app-filter-tabs>\n    </section>\n</main>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/detail/detail.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/detail/detail.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>detail works!</p>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/documentos/search-documents/search-documents.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/documentos/search-documents/search-documents.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    \n    <p>search-documents works!</p>\n</section>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/documentos/search-escritos/search-escritos.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/documentos/search-escritos/search-escritos.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    <p>search-escritos works!</p>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/documentos/search-resoluciones/search-resoluciones.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/documentos/search-resoluciones/search-resoluciones.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    <p>search-resoluciones works!</p>\n</section>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_search_layout_search_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/search-layout/search-layout.component */ "./src/app/layouts/search-layout/search-layout.component.ts");
/* harmony import */ var _pages_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/detail/detail.component */ "./src/app/pages/detail/detail.component.ts");
/* harmony import */ var _pages_documentos_search_documents_search_documents_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/documentos/search-documents/search-documents.component */ "./src/app/pages/documentos/search-documents/search-documents.component.ts");
/* harmony import */ var _components_filter_tabs_filter_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/filter-tabs/filter-tabs.component */ "./src/app/components/filter-tabs/filter-tabs.component.ts");
/* harmony import */ var _pages_documentos_search_resoluciones_search_resoluciones_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/documentos/search-resoluciones/search-resoluciones.component */ "./src/app/pages/documentos/search-resoluciones/search-resoluciones.component.ts");
/* harmony import */ var _pages_documentos_search_escritos_search_escritos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/documentos/search-escritos/search-escritos.component */ "./src/app/pages/documentos/search-escritos/search-escritos.component.ts");









var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'documentos' },
    { path: '', component: _layouts_search_layout_search_layout_component__WEBPACK_IMPORTED_MODULE_3__["SearchLayoutComponent"], children: [
            { path: 'documentos', component: _pages_documentos_search_documents_search_documents_component__WEBPACK_IMPORTED_MODULE_5__["SearchDocumentsComponent"] },
            { path: 'resoluciones', component: _pages_documentos_search_resoluciones_search_resoluciones_component__WEBPACK_IMPORTED_MODULE_7__["SearchResolucionesComponent"] },
            { path: 'escritos', component: _pages_documentos_search_escritos_search_escritos_component__WEBPACK_IMPORTED_MODULE_8__["SearchEscritosComponent"] },
        ]
    },
    { path: 'detail', component: _pages_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"] },
    { path: '**', redirectTo: "documentos" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [
                _layouts_search_layout_search_layout_component__WEBPACK_IMPORTED_MODULE_3__["SearchLayoutComponent"],
                _pages_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"],
                _pages_documentos_search_documents_search_documents_component__WEBPACK_IMPORTED_MODULE_5__["SearchDocumentsComponent"],
                _pages_documentos_search_escritos_search_escritos_component__WEBPACK_IMPORTED_MODULE_8__["SearchEscritosComponent"],
                _pages_documentos_search_resoluciones_search_resoluciones_component__WEBPACK_IMPORTED_MODULE_7__["SearchResolucionesComponent"],
                _components_filter_tabs_filter_tabs_component__WEBPACK_IMPORTED_MODULE_6__["FilterTabsComponent"],
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  height: 9rem;\n  background: red;\n  color: white;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxsdWlzLnNhbmNoZXouYWxjYXphclxcREFUQVxcV29ya1xcTWFkcmlkLURpZ2l0YWwvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaGVhZGVyIHtcclxuICAgIGhlaWdodDo5cmVtO1xyXG4gICAgYmFja2dyb3VuZDpyZWQ7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZmxvdzpjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgcGFkZGluZzoycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbToycmVtO1xyXG4gICAgZm9udC1zaXplOjEuNXJlbTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJoZWFkZXIge1xuICBoZWlnaHQ6IDlyZW07XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufSJdfQ== */"

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
        this.title = 'Madrid-Digital update';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/filter-tabs/filter-tabs.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/filter-tabs/filter-tabs.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  margin: 2rem 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 3rem;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n  width: 11rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXItdGFicy9DOlxcVXNlcnNcXGx1aXMuc2FuY2hlei5hbGNhemFyXFxEQVRBXFxXb3JrXFxNYWRyaWQtRGlnaXRhbC9zcmNcXGFwcFxcY29tcG9uZW50c1xcZmlsdGVyLXRhYnNcXGZpbHRlci10YWJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZpbHRlci10YWJzL2ZpbHRlci10YWJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUdBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpbHRlci10YWJzL2ZpbHRlci10YWJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgbWFyZ2luOjJyZW0gMDtcclxuICAgIC8vIGJhY2tncm91bmQ6cmVkO1xyXG4gICAgLy8gY29sb3I6d2hpdGU7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBoZWlnaHQ6M3JlbTtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjppbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICB3aWR0aDoxMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsIjpob3N0IHtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzcmVtO1xufVxuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2lkdGg6IDExcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/filter-tabs/filter-tabs.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/filter-tabs/filter-tabs.component.ts ***!
  \*****************************************************************/
/*! exports provided: FilterTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTabsComponent", function() { return FilterTabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterTabsComponent = /** @class */ (function () {
    function FilterTabsComponent() {
    }
    FilterTabsComponent.prototype.ngOnInit = function () {
    };
    FilterTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter-tabs',
            template: __webpack_require__(/*! raw-loader!./filter-tabs.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/filter-tabs/filter-tabs.component.html"),
            styles: [__webpack_require__(/*! ./filter-tabs.component.scss */ "./src/app/components/filter-tabs/filter-tabs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FilterTabsComponent);
    return FilterTabsComponent;
}());



/***/ }),

/***/ "./src/app/layouts/search-layout/search-layout.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/layouts/search-layout/search-layout.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep section {\n  padding: 1rem 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9zZWFyY2gtbGF5b3V0L0M6XFxVc2Vyc1xcbHVpcy5zYW5jaGV6LmFsY2F6YXJcXERBVEFcXFdvcmtcXE1hZHJpZC1EaWdpdGFsL3NyY1xcYXBwXFxsYXlvdXRzXFxzZWFyY2gtbGF5b3V0XFxzZWFyY2gtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLGtCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIHNlY3Rpb25cclxuIHtcclxuICAgIHBhZGRpbmc6MXJlbSAzcmVtO1xyXG59IiwiOmhvc3QgOjpuZy1kZWVwIHNlY3Rpb24ge1xuICBwYWRkaW5nOiAxcmVtIDNyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/layouts/search-layout/search-layout.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layouts/search-layout/search-layout.component.ts ***!
  \******************************************************************/
/*! exports provided: SearchLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchLayoutComponent", function() { return SearchLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchLayoutComponent = /** @class */ (function () {
    function SearchLayoutComponent() {
    }
    SearchLayoutComponent.prototype.ngOnInit = function () {
    };
    SearchLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-layout',
            template: __webpack_require__(/*! raw-loader!./search-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/search-layout/search-layout.component.html"),
            styles: [__webpack_require__(/*! ./search-layout.component.scss */ "./src/app/layouts/search-layout/search-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchLayoutComponent);
    return SearchLayoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/detail/detail.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/detail/detail.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep > * {\n  padding: 2rem 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWlsL0M6XFxVc2Vyc1xcbHVpcy5zYW5jaGV6LmFsY2F6YXJcXERBVEFcXFdvcmtcXE1hZHJpZC1EaWdpdGFsL3NyY1xcYXBwXFxwYWdlc1xcZGV0YWlsXFxkZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCA+ICpcclxuIHtcclxuICAgIHBhZGRpbmc6MnJlbSAzcmVtO1xyXG59IiwiOmhvc3QgOjpuZy1kZWVwID4gKiB7XG4gIHBhZGRpbmc6IDJyZW0gM3JlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/detail/detail.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/detail/detail.component.ts ***!
  \**************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailComponent = /** @class */ (function () {
    function DetailComponent() {
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/documentos/search-documents/search-documents.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/documentos/search-documents/search-documents.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep section {\n  padding: 2rem 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdW1lbnRvcy9zZWFyY2gtZG9jdW1lbnRzL0M6XFxVc2Vyc1xcbHVpcy5zYW5jaGV6LmFsY2F6YXJcXERBVEFcXFdvcmtcXE1hZHJpZC1EaWdpdGFsL3NyY1xcYXBwXFxwYWdlc1xcZG9jdW1lbnRvc1xcc2VhcmNoLWRvY3VtZW50c1xcc2VhcmNoLWRvY3VtZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZG9jdW1lbnRvcy9zZWFyY2gtZG9jdW1lbnRzL3NlYXJjaC1kb2N1bWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZG9jdW1lbnRvcy9zZWFyY2gtZG9jdW1lbnRzL3NlYXJjaC1kb2N1bWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgc2VjdGlvblxyXG4ge1xyXG4gICAgcGFkZGluZzoycmVtIDNyZW07XHJcbn0iLCI6aG9zdCA6Om5nLWRlZXAgc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDJyZW0gM3JlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/documentos/search-documents/search-documents.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/documentos/search-documents/search-documents.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SearchDocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDocumentsComponent", function() { return SearchDocumentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchDocumentsComponent = /** @class */ (function () {
    function SearchDocumentsComponent() {
    }
    SearchDocumentsComponent.prototype.ngOnInit = function () {
    };
    SearchDocumentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-documents',
            template: __webpack_require__(/*! raw-loader!./search-documents.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/documentos/search-documents/search-documents.component.html"),
            styles: [__webpack_require__(/*! ./search-documents.component.scss */ "./src/app/pages/documentos/search-documents/search-documents.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchDocumentsComponent);
    return SearchDocumentsComponent;
}());



/***/ }),

/***/ "./src/app/pages/documentos/search-escritos/search-escritos.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/documentos/search-escritos/search-escritos.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep section {\n  padding: 2rem 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdW1lbnRvcy9zZWFyY2gtZXNjcml0b3MvQzpcXFVzZXJzXFxsdWlzLnNhbmNoZXouYWxjYXphclxcREFUQVxcV29ya1xcTWFkcmlkLURpZ2l0YWwvc3JjXFxhcHBcXHBhZ2VzXFxkb2N1bWVudG9zXFxzZWFyY2gtZXNjcml0b3NcXHNlYXJjaC1lc2NyaXRvcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZG9jdW1lbnRvcy9zZWFyY2gtZXNjcml0b3Mvc2VhcmNoLWVzY3JpdG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3VtZW50b3Mvc2VhcmNoLWVzY3JpdG9zL3NlYXJjaC1lc2NyaXRvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCBzZWN0aW9uXHJcbiB7XHJcbiAgICBwYWRkaW5nOjJyZW0gM3JlbTtcclxufSIsIjpob3N0IDo6bmctZGVlcCBzZWN0aW9uIHtcbiAgcGFkZGluZzogMnJlbSAzcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/documentos/search-escritos/search-escritos.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/documentos/search-escritos/search-escritos.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SearchEscritosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchEscritosComponent", function() { return SearchEscritosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchEscritosComponent = /** @class */ (function () {
    function SearchEscritosComponent() {
    }
    SearchEscritosComponent.prototype.ngOnInit = function () {
    };
    SearchEscritosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-escritos',
            template: __webpack_require__(/*! raw-loader!./search-escritos.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/documentos/search-escritos/search-escritos.component.html"),
            styles: [__webpack_require__(/*! ./search-escritos.component.scss */ "./src/app/pages/documentos/search-escritos/search-escritos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchEscritosComponent);
    return SearchEscritosComponent;
}());



/***/ }),

/***/ "./src/app/pages/documentos/search-resoluciones/search-resoluciones.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/documentos/search-resoluciones/search-resoluciones.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep section {\n  padding: 2rem 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdW1lbnRvcy9zZWFyY2gtcmVzb2x1Y2lvbmVzL0M6XFxVc2Vyc1xcbHVpcy5zYW5jaGV6LmFsY2F6YXJcXERBVEFcXFdvcmtcXE1hZHJpZC1EaWdpdGFsL3NyY1xcYXBwXFxwYWdlc1xcZG9jdW1lbnRvc1xcc2VhcmNoLXJlc29sdWNpb25lc1xcc2VhcmNoLXJlc29sdWNpb25lcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZG9jdW1lbnRvcy9zZWFyY2gtcmVzb2x1Y2lvbmVzL3NlYXJjaC1yZXNvbHVjaW9uZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZG9jdW1lbnRvcy9zZWFyY2gtcmVzb2x1Y2lvbmVzL3NlYXJjaC1yZXNvbHVjaW9uZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgc2VjdGlvblxyXG4ge1xyXG4gICAgcGFkZGluZzoycmVtIDNyZW07XHJcbn0iLCI6aG9zdCA6Om5nLWRlZXAgc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDJyZW0gM3JlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/documentos/search-resoluciones/search-resoluciones.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/documentos/search-resoluciones/search-resoluciones.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SearchResolucionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResolucionesComponent", function() { return SearchResolucionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchResolucionesComponent = /** @class */ (function () {
    function SearchResolucionesComponent() {
    }
    SearchResolucionesComponent.prototype.ngOnInit = function () {
    };
    SearchResolucionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-resoluciones',
            template: __webpack_require__(/*! raw-loader!./search-resoluciones.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/documentos/search-resoluciones/search-resoluciones.component.html"),
            styles: [__webpack_require__(/*! ./search-resoluciones.component.scss */ "./src/app/pages/documentos/search-resoluciones/search-resoluciones.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchResolucionesComponent);
    return SearchResolucionesComponent;
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

module.exports = __webpack_require__(/*! C:\Users\luis.sanchez.alcazar\DATA\Work\Madrid-Digital\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map