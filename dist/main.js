(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  margin: 0;\r\n}\r\n.containerComponents {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n}\r\n/*app-header-component {\r\n  flex: 0.99 0.99 0;                   \r\n  background: whitesmoke;\r\n}\r\nrouter-outlet {\r\n  flex: 8.21 8.21 0;                   \r\n  background: whitesmoke;\r\n  overflow: auto;\r\n}\r\napp-footer-component {\r\n  flex: 0.80 0.80 0;                   \r\n  background: whitesmoke;\r\n}*/\r\nh1 {\r\n  font-family: 'Julius Sans One', sans-serif;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmO0FBRUE7Ozs7Ozs7Ozs7OztFQVlFO0FBRUY7RUFDRSwwQ0FBMEM7QUFDNUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uY29udGFpbmVyQ29tcG9uZW50cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi8qYXBwLWhlYWRlci1jb21wb25lbnQge1xyXG4gIGZsZXg6IDAuOTkgMC45OSAwOyAgICAgICAgICAgICAgICAgICBcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG59XHJcbnJvdXRlci1vdXRsZXQge1xyXG4gIGZsZXg6IDguMjEgOC4yMSAwOyAgICAgICAgICAgICAgICAgICBcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbmFwcC1mb290ZXItY29tcG9uZW50IHtcclxuICBmbGV4OiAwLjgwIDAuODAgMDsgICAgICAgICAgICAgICAgICAgXHJcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxufSovXHJcblxyXG5oMSB7XHJcbiAgZm9udC1mYW1pbHk6ICdKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containerComponents\">\r\n    <app-header></app-header>\r\n    <!-- <app-header-component *ngIf=\"notMobile == true\"></app-header-component> -->\r\n    <router-outlet></router-outlet>\r\n    <!-- <app-content-component></app-content-component> -->\r\n    <!-- <app-footer-component></app-footer-component> -->\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_users_view_users_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/users-view/users-view.component */ "./src/app/components/users-view/users-view.component.ts");
/* harmony import */ var _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/introduction/introduction.component */ "./src/app/components/introduction/introduction.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _routes_app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/app.routing */ "./src/app/routes/app.routing.ts");
/* harmony import */ var _auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth_guard/auth.guard */ "./src/app/auth_guard/auth.guard.ts");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth-service.service */ "./src/app/services/auth-service.service.ts");
/* harmony import */ var _services_etabot_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/etabot-api.service */ "./src/app/services/etabot-api.service.ts");
/* harmony import */ var _services_sign_up_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/sign-up.service */ "./src/app/services/sign-up.service.ts");
/* harmony import */ var _services_jira_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/jira.service */ "./src/app/services/jira.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/register-page/register-page.component */ "./src/app/components/register-page/register-page.component.ts");
/* harmony import */ var _components_register_page_verification_view_verification_pending_verification_pending_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/register-page/verification-view/verification-pending/verification-pending.component */ "./src/app/components/register-page/verification-view/verification-pending/verification-pending.component.ts");
/* harmony import */ var _components_register_page_verification_view_verification_activate_verification_activate_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/register-page/verification-view/verification-activate/verification-activate.component */ "./src/app/components/register-page/verification-view/verification-activate/verification-activate.component.ts");
/* harmony import */ var _components_register_page_terms_conditions_full_terms_conditions_full_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/register-page/terms-conditions-full/terms-conditions-full.component */ "./src/app/components/register-page/terms-conditions-full/terms-conditions-full.component.ts");
/* harmony import */ var _components_jira_credentials_jira_credentials_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/jira-credentials/jira-credentials.component */ "./src/app/components/jira-credentials/jira-credentials.component.ts");
/* harmony import */ var _components_users_view_projects_view_projects_view_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/users-view/projects-view/projects-view.component */ "./src/app/components/users-view/projects-view/projects-view.component.ts");
/* harmony import */ var _components_need_sign_up_token_need_sign_up_token_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/need-sign-up-token/need-sign-up-token.component */ "./src/app/components/need-sign-up-token/need-sign-up-token.component.ts");
/* harmony import */ var _components_jira_issue_collector_jira_issue_collector_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/jira-issue-collector/jira-issue-collector.component */ "./src/app/components/jira-issue-collector/jira-issue-collector.component.ts");
/* harmony import */ var _components_tms_list_tms_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/tms-list/tms-list.component */ "./src/app/components/tms-list/tms-list.component.ts");
/* harmony import */ var _components_tms_card_tms_card_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/tms-card/tms-card.component */ "./src/app/components/tms-card/tms-card.component.ts");
/* harmony import */ var _components_settings_window_settings_window_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/settings-window/settings-window.component */ "./src/app/components/settings-window/settings-window.component.ts");
/* harmony import */ var _components_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/project-card/project-card.component */ "./src/app/components/project-card/project-card.component.ts");
/* harmony import */ var _components_attention_icon_attention_icon_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/attention-icon/attention-icon.component */ "./src/app/components/attention-icon/attention-icon.component.ts");
/* harmony import */ var _components_error_box_error_box_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/error-box/error-box.component */ "./src/app/components/error-box/error-box.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { DomSanitizer } from '@angular/platform-browser';








// import { materialExportModule } from './material-scheme/app.materialExportModule';



















// import { ProjectComponent } from './components/project/project.component';

let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _components_users_view_users_view_component__WEBPACK_IMPORTED_MODULE_4__["UsersViewComponent"],
            _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_5__["IntroductionComponent"],
            _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
            _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_21__["RegisterPageComponent"],
            _components_register_page_terms_conditions_full_terms_conditions_full_component__WEBPACK_IMPORTED_MODULE_24__["TermsConditionsFullComponent"],
            _components_jira_credentials_jira_credentials_component__WEBPACK_IMPORTED_MODULE_25__["JiraCredentialsComponent"],
            _components_users_view_projects_view_projects_view_component__WEBPACK_IMPORTED_MODULE_26__["ProjectsViewComponent"],
            _components_register_page_verification_view_verification_pending_verification_pending_component__WEBPACK_IMPORTED_MODULE_22__["VerificationPendingComponent"],
            _components_register_page_verification_view_verification_activate_verification_activate_component__WEBPACK_IMPORTED_MODULE_23__["VerificationActivateComponent"],
            _components_need_sign_up_token_need_sign_up_token_component__WEBPACK_IMPORTED_MODULE_27__["NeedSignUpTokenComponent"],
            _components_jira_issue_collector_jira_issue_collector_component__WEBPACK_IMPORTED_MODULE_28__["JiraIssueCollectorComponent"],
            _components_tms_list_tms_list_component__WEBPACK_IMPORTED_MODULE_29__["TmsListComponent"],
            _components_tms_card_tms_card_component__WEBPACK_IMPORTED_MODULE_30__["TmsCardComponent"],
            _components_settings_window_settings_window_component__WEBPACK_IMPORTED_MODULE_31__["SettingsWindowComponent"],
            _components_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_32__["ProjectCardComponent"],
            _components_attention_icon_attention_icon_component__WEBPACK_IMPORTED_MODULE_33__["AttentionIconComponent"],
            //ProjectComponent,
            _components_error_box_error_box_component__WEBPACK_IMPORTED_MODULE_34__["ErrorBoxComponent"]
        ],
        entryComponents: [
            _components_register_page_terms_conditions_full_terms_conditions_full_component__WEBPACK_IMPORTED_MODULE_24__["TermsConditionsFullComponent"],
            _components_settings_window_settings_window_component__WEBPACK_IMPORTED_MODULE_31__["SettingsWindowComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
            _routes_app_routing__WEBPACK_IMPORTED_MODULE_8__["routing"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"]
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"]
        ],
        providers: [_services_etabot_api_service__WEBPACK_IMPORTED_MODULE_11__["EtabotApiService"], _services_auth_service_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _services_sign_up_service__WEBPACK_IMPORTED_MODULE_12__["SignUpService"], _auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"], _services_jira_service__WEBPACK_IMPORTED_MODULE_13__["JiraService"],
            {
                provide: _angular_http__WEBPACK_IMPORTED_MODULE_2__["XSRFStrategy"],
                useValue: new _angular_http__WEBPACK_IMPORTED_MODULE_2__["CookieXSRFStrategy"]('csrftoken', 'X-CSRFToken')
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth_guard/auth.guard.ts":
/*!******************************************!*\
  !*** ./src/app/auth_guard/auth.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (localStorage.getItem('username')) {
            // either signed up or logged in so return true
            console.log("the auth guard is true");
            return true;
        }
        else 
        // not logged in so redirect to login page with the return url
        {
            console.log("the auth guard is false");
            this.router.navigate(['/']);
            return false;
        }
    }
};
AuthGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/components/attention-icon/attention-icon.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/attention-icon/attention-icon.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXR0ZW50aW9uLWljb24vYXR0ZW50aW9uLWljb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/attention-icon/attention-icon.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/attention-icon/attention-icon.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"error_display\" matTooltip=\"{{ error_message }}\">(!)</div>\r\n<!--     <mat-icon svgIcon=\"error_outline\"></mat-icon>\r\n    <mat-icon>error_outline</mat-icon>\r\n    <mat-icon svgIcon=\"baseline-error_outline-24px\"></mat-icon>\r\n -->    \r\n"

/***/ }),

/***/ "./src/app/components/attention-icon/attention-icon.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/attention-icon/attention-icon.component.ts ***!
  \***********************************************************************/
/*! exports provided: AttentionIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttentionIconComponent", function() { return AttentionIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../project */ "./src/app/project.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AttentionIconComponent = class AttentionIconComponent {
    constructor() { }
    ngOnInit() {
        this.error_message = '';
        console.log('attention icon init with project: ' + this.project);
        this.error_display = false;
        if (this.tms && this.tms.connectivity_status.status === 'error') {
            this.error_display = true;
            this.error_message += 'Connectivity problem. ';
        }
        if (this.project && this.project.get_scope_field_name() === null) {
            console.log('scope field name: ' + this.project.get_scope_field_name());
            this.error_display = true;
            this.error_message += 'Scope data problem. ';
        }
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], AttentionIconComponent.prototype, "tms", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", _project__WEBPACK_IMPORTED_MODULE_1__["Project"])
], AttentionIconComponent.prototype, "project", void 0);
AttentionIconComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-attention-icon',
        template: __webpack_require__(/*! ./attention-icon.component.html */ "./src/app/components/attention-icon/attention-icon.component.html"),
        styles: [__webpack_require__(/*! ./attention-icon.component.css */ "./src/app/components/attention-icon/attention-icon.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AttentionIconComponent);



/***/ }),

/***/ "./src/app/components/error-box/error-box.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/error-box/error-box.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3ItYm94L2Vycm9yLWJveC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/error-box/error-box.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/error-box/error-box.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\" innerHTML=\"An error has occured: {{ error_message }}\"></div>"

/***/ }),

/***/ "./src/app/components/error-box/error-box.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/error-box/error-box.component.ts ***!
  \*************************************************************/
/*! exports provided: ErrorBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorBoxComponent", function() { return ErrorBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ErrorBoxComponent = class ErrorBoxComponent {
    constructor() {
        this.error_message = '';
    }
    ngOnInit() {
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], ErrorBoxComponent.prototype, "error_message", void 0);
ErrorBoxComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-error-box',
        template: __webpack_require__(/*! ./error-box.component.html */ "./src/app/components/error-box/error-box.component.html"),
        styles: [__webpack_require__(/*! ./error-box.component.css */ "./src/app/components/error-box/error-box.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ErrorBoxComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-the-space {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.space-between-log-in-sign-up {\r\n    flex: 0.008 0.008 auto;\r\n}\r\n\r\nimg {\r\n    max-width: 55%;\r\n}\r\n\r\n.new-font {\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    font-size: 20px;\r\n}\r\n\r\na.mat-button:hover {\r\n    background: #534bae;\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\n.logout_button {\r\n    font-size: 20px;\r\n    margin-left: 5px;    \r\n    font-family: 'Josefin Sans';\r\n}\r\n\r\n.header_container{\r\n    \r\n}\r\n\r\n/* Add application styles & imports to this file! */\r\n\r\n.bounds {\r\n  /*background-color:#ddd;*/\r\n  /*height :800px;*/\r\n}\r\n\r\n.sec1 {\r\n  /*background: red;*/\r\n  /*color:white;*/\r\n  /*text-transform: uppercase*/\r\n}\r\n\r\n.sec2 {\r\n  /*background: yellow;*/\r\n  /*color:blue;*/\r\n  \r\n}\r\n\r\n.sec3 {\r\n  /*background: blue;*/\r\n  /*color:white;*/\r\n  /*text-transform: uppercase*/\r\n}\r\n\r\n.sec1, .sec2, .sec3 {\r\n  /*padding-top:20px;*/\r\n  text-align:center\r\n}\r\n\r\n.content {\r\n  /*min-width: 300px;*/\r\n  /*height: 400px;*/\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtBQUMvQjs7QUFFQTs7QUFFQTs7QUFFQSxtREFBbUQ7O0FBRW5EO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7O0FBRWhCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxsLXRoZS1zcGFjZSB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLnNwYWNlLWJldHdlZW4tbG9nLWluLXNpZ24tdXAge1xyXG4gICAgZmxleDogMC4wMDggMC4wMDggYXV0bztcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogNTUlO1xyXG59XHJcblxyXG4ubmV3LWZvbnQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5hLm1hdC1idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzUzNGJhZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubG9nb3V0X2J1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4OyAgICBcclxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJztcclxufVxyXG5cclxuLmhlYWRlcl9jb250YWluZXJ7XHJcbiAgICBcclxufVxyXG5cclxuLyogQWRkIGFwcGxpY2F0aW9uIHN0eWxlcyAmIGltcG9ydHMgdG8gdGhpcyBmaWxlISAqL1xyXG5cclxuLmJvdW5kcyB7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiNkZGQ7Ki9cclxuICAvKmhlaWdodCA6ODAwcHg7Ki9cclxufVxyXG5cclxuLnNlYzEge1xyXG4gIC8qYmFja2dyb3VuZDogcmVkOyovXHJcbiAgLypjb2xvcjp3aGl0ZTsqL1xyXG4gIC8qdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSovXHJcbn1cclxuXHJcbi5zZWMyIHtcclxuICAvKmJhY2tncm91bmQ6IHllbGxvdzsqL1xyXG4gIC8qY29sb3I6Ymx1ZTsqL1xyXG4gIFxyXG59XHJcblxyXG4uc2VjMyB7XHJcbiAgLypiYWNrZ3JvdW5kOiBibHVlOyovXHJcbiAgLypjb2xvcjp3aGl0ZTsqL1xyXG4gIC8qdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSovXHJcbn1cclxuXHJcbi5zZWMxLCAuc2VjMiwgLnNlYzMge1xyXG4gIC8qcGFkZGluZy10b3A6MjBweDsqL1xyXG4gIHRleHQtYWxpZ246Y2VudGVyXHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAvKm1pbi13aWR0aDogMzAwcHg7Ki9cclxuICAvKmhlaWdodDogNDAwcHg7Ki9cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" >\r\n    <!-- style=\"min-height: 90px;\" -->\r\n<!--         <span style=\"margin-left: 10px; margin-right: 10px;\" >\r\n            </span>\r\n        <div >\r\n        </div>\r\n -->        \r\n\r\n<!-- </div>         -->\r\n<mat-toolbar-row fxLayout=\"row wrap\" style=\"align-items: center;\">\r\n\r\n  <!-- <div class=\"content\" fxLayout=\"row wrap\" > -->\r\n       \r\n  <div class=\"sec1\"  [routerLink]=\"['/']\" class=\"logo-image\" alt=\"etabot homepage\"></div>\r\n  <div fxShow.lt-md=\"true\" fxHide.gt-sm=\"true\" style=\"font-size: 20px;\" title=\"This is the alpha version of ETAbot - please expect and report bugs\">Alpha version</div>\r\n  <div  class=\"sec2\" fxHide.lt-md=\"true\" style=\"font-size: 20px; width: 200px; overflow-wrap: break-word; word-break: break-all;\">Alpha version - please <a href=\"mailto:hello@etabot.ai\">report</a> bugs</div>\r\n  <span  class=\"fill-the-space\"></span>\r\n  <div  *ngIf=\"isLoggedIn\" fxHide.lt-sm=\"true\">{{ username }}</div>\r\n  <div  class=\"sec3\">\r\n    <a mat-button [routerLink]=\"['/signup']\"  *ngIf=\"!isLoggedIn\"  class=\"new-font\">Sign up</a>\r\n<!-- <span class=\"space-between-log-in-sign-up\"></span> -->\r\n    <a mat-button [routerLink] = \"['/login']\"  *ngIf=\"!isLoggedIn\" class=\"new-font\">Log in</a>\r\n<!-- <i *ngIf=\"isLoggedIn\" class=\"material-icons\" style=\"font-size: 48px;\">account_circle</i> -->\r\n  </div> \r\n  <div style=\"display: block\">\r\n    <button  *ngIf=\"isLoggedIn\" (click)=\"logout()\" mat-raised-button color=\"accent\" class=\"logout_button\">Log Out</button>\r\n  </div>\r\n\r\n<!-- <span  *ngIf=\"isLoggedIn\" class=\"space-between-log-in-sign-up\"></span> -->\r\n<!-- <span  class=\"space-between-log-in-sign-up\"></span> -->\r\n\r\n<!-- </div> -->\r\n  \r\n\r\n</mat-toolbar-row>\r\n    \r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth-service.service */ "./src/app/services/auth-service.service.ts");
/* harmony import */ var _services_sign_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sign-up.service */ "./src/app/services/sign-up.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let HeaderComponent = class HeaderComponent {
    constructor(dialog, signUpService, logInService, router) {
        this.dialog = dialog;
        this.signUpService = signUpService;
        this.logInService = logInService;
        this.router = router;
        this.isLoggedIn = false;
        this.loggedOut = false;
        this.username = '';
        logInService.getLoggedIn.subscribe(response => this.changeLogInStatus());
        //signUpService.getRegisteredStatus.subscribe(response => this.changeLogInStatus());
    }
    ngOnInit() {
        if (localStorage.getItem('username'))
            this.isLoggedIn = true;
        this.username = localStorage.getItem('username');
    }
    redirectHomePage() {
        this.router.navigate(['./']);
    }
    changeLogInStatus() {
        console.log("changing the login status...");
        this.isLoggedIn = !this.isLoggedIn;
    }
    logout() {
        console.log("logging out...");
        this.logInService.logout();
        //window.location.href = "https://etabot.ai";
    }
};
HeaderComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        _services_sign_up_service__WEBPACK_IMPORTED_MODULE_2__["SignUpService"],
        _services_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/introduction/introduction.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/introduction/introduction.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n  color: blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnRyb2R1Y3Rpb24vaW50cm9kdWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ludHJvZHVjdGlvbi9pbnRyb2R1Y3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gIGNvbG9yOiBibHVlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/introduction/introduction.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/introduction/introduction.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"sign-login-card\">\r\n  <mat-card-title style=\"text-align: center; margin-bottom: 70px; \">\r\n    Welcome to ETAbot!\r\n</mat-card-title>\r\n<mat-card-content style=\"justify-content: center\" align=\"center\">\r\n    <div style=\"display: flex; justify-content: center\">\r\n        <div [routerLink]=\"['/']\" class=\"logo-image\"  alt=\"etabot homepage\" align=\"center\"></div>\r\n    </div>\r\n    <br>\r\n    <a mat-button [routerLink]=\"['/signup']\" style=\"margin-top: 10px;\" align=\"center\">Sign up</a>\r\n    <br>\r\n    <a mat-button [routerLink] = \"['/login']\" style=\"margin-top: 10px;\" align=\"center\">Login</a>\r\n</mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/introduction/introduction.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/introduction/introduction.component.ts ***!
  \*******************************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let IntroductionComponent = class IntroductionComponent {
    constructor() { }
    ngOnInit() {
    }
};
IntroductionComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-introduction',
        template: __webpack_require__(/*! ./introduction.component.html */ "./src/app/components/introduction/introduction.component.html"),
        styles: [__webpack_require__(/*! ./introduction.component.css */ "./src/app/components/introduction/introduction.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IntroductionComponent);



/***/ }),

/***/ "./src/app/components/jira-credentials/jira-credentials.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/jira-credentials/jira-credentials.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group input[type=text]:focus {\r\n     border-bottom: 1px solid #1a237e;\r\n     box-shadow: 0 1px 0 0 #1a237e;\r\n}\r\n\r\n.form-group input[type=password]:focus {\r\n     border-bottom: 1px solid #1a237e;\r\n     box-shadow: 0 1px 0 0 #1a237e;\r\n}\r\n\r\n.new-font {\r\n    font-family: 'Josefin Sans', sans-serif;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n   font-style: italic;\r\n}\r\n\r\n:-moz-placeholder {\r\n   font-style: italic;  \r\n}\r\n\r\n::-moz-placeholder {\r\n   font-style: italic;  \r\n}\r\n\r\n:-ms-input-placeholder {  \r\n   font-style: italic; \r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9qaXJhLWNyZWRlbnRpYWxzL2ppcmEtY3JlZGVudGlhbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtLQUNLLGdDQUFnQztLQUNoQyw2QkFBNkI7QUFDbEM7O0FBRUE7S0FDSyxnQ0FBZ0M7S0FDaEMsNkJBQTZCO0FBQ2xDOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0dBQ0csa0JBQWtCO0FBQ3JCOztBQUNBO0dBQ0csa0JBQWtCO0FBQ3JCOztBQUNBO0dBQ0csa0JBQWtCO0FBQ3JCOztBQUNBO0dBQ0csa0JBQWtCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9qaXJhLWNyZWRlbnRpYWxzL2ppcmEtY3JlZGVudGlhbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWEyMzdlO1xyXG4gICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgMCAjMWEyMzdlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxYTIzN2U7XHJcbiAgICAgYm94LXNoYWRvdzogMCAxcHggMCAwICMxYTIzN2U7XHJcbn1cclxuXHJcbi5uZXctZm9udCB7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG46LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgIFxyXG59XHJcbjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgIFxyXG59XHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAgXHJcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgXHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/jira-credentials/jira-credentials.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/jira-credentials/jira-credentials.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"sign-login-card\">\r\n  <mat-card-title style=\"text-align: left;\">\r\n    <h1>Connect to JIRA</h1>\r\n  </mat-card-title>\r\n  <div *ngIf=\"error == true\" class=\"alert alert-danger\">Something went wrong. <div [innerHTML]=\"error_message\"></div></div>\r\n  <div *ngIf=\"loading == true\" class=\"alert alert-info\">Hold tight! We are verifying your info with Atlassian...</div>\r\n  <form #f=\"ngForm\" (ngSubmit)=\"add_tms_via_service()\" class=\"new-font\">\r\n    <div class=\"form-group\">\r\n      <label for=\"jira_url\" style=\"font-size: 20px; color: black;\">Your JIRA address</label>        \r\n      <div class=\"form-group\">\r\n          <input type=\"text\" id=\"jira_url\" class=\"form-control\" name=\"jira_url\" required [(ngModel)]=\"model.jira_url\" #jira_url=\"ngModel\" value=\"{{ team }}\" placeholder=\"e.g. https://your_team.atlassian.net\" style=\"text-align: middle; font-size: 18px;\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\" style=\"font-size: 20px; color: black;\">JIRA Username</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" required [(ngModel)]=\"model.email\" #email=\"ngModel\" style=\"font-size: 16px;\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"password\" style=\"font-size: 20px; color: black;\">JIRA API key (<a href=\"https://confluence.atlassian.com/cloud/api-tokens-938839638.html\">instructions</a>)</label>\r\n      <input class=\"form-control\" type=\"password\" id=\"password\" class=\"form-control\" name=\"password\" required [(ngModel)]=\"model.password\" #password=\"ngModel\" style=\"font-size: 16px;\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button mat-raised-button color=\"accent\" style=\"margin-right: 10px; margin-bottom: 5px; font-size: 20px; width: 120px; height: 44px;\" class=\"new-font\">Connect</button>\r\n    </div>\r\n    <div>\r\n      <label for=\"terms\" style=\"font-size: 15px;\"> {{ username }}, you can read our Security and Privacy policy regarding JIRA <a (click)=\"openDialog()\"> here.</a></label>\r\n    </div>\r\n  </form>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/jira-credentials/jira-credentials.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/jira-credentials/jira-credentials.component.ts ***!
  \***************************************************************************/
/*! exports provided: JiraCredentialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JiraCredentialsComponent", function() { return JiraCredentialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _register_page_terms_conditions_full_terms_conditions_full_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../register-page/terms-conditions-full/terms-conditions-full.component */ "./src/app/components/register-page/terms-conditions-full/terms-conditions-full.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_jira_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/jira.service */ "./src/app/services/jira.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let JiraCredentialsComponent = class JiraCredentialsComponent {
    constructor(dialog, titleService, jiraService, router) {
        this.dialog = dialog;
        this.titleService = titleService;
        this.jiraService = jiraService;
        this.router = router;
        this.model = {};
        if (localStorage.getItem('username')) {
            this.username = localStorage.getItem('username');
        }
    }
    ngOnInit() {
        this.titleService.setTitle('JIRA Credentials');
        this.error = false;
        this.loading = false;
    }
    openDialog() {
        const dialogRef = this.dialog.open(_register_page_terms_conditions_full_terms_conditions_full_component__WEBPACK_IMPORTED_MODULE_1__["TermsConditionsFullComponent"], {
            width: '800px',
            height: '500px',
        });
    }
    add_tms_via_service() {
        this.loading = true;
        this.error = false;
        this.jiraService.add_tms(this.username, this.model.jira_url, this.model.email, this.model.password)
            .subscribe(success => {
            this.loading = false;
            this.router.navigate(['/projects']);
        }, error => {
            this.loading = false;
            this.error = true;
            this.error_message = this.jiraService.parse_error(error);
        });
    }
};
JiraCredentialsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-jira-credentials',
        template: __webpack_require__(/*! ./jira-credentials.component.html */ "./src/app/components/jira-credentials/jira-credentials.component.html"),
        styles: [__webpack_require__(/*! ./jira-credentials.component.css */ "./src/app/components/jira-credentials/jira-credentials.component.css")]
    }),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
        _services_jira_service__WEBPACK_IMPORTED_MODULE_4__["JiraService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], JiraCredentialsComponent);



/***/ }),

/***/ "./src/app/components/jira-issue-collector/jira-issue-collector.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/jira-issue-collector/jira-issue-collector.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvamlyYS1pc3N1ZS1jb2xsZWN0b3IvamlyYS1pc3N1ZS1jb2xsZWN0b3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/jira-issue-collector/jira-issue-collector.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/jira-issue-collector/jira-issue-collector.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/javascript\" src=\"https://etabot.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/5f8ntp/b/25/a44af77267a987a660377e5c46e0fb64/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=3af0c800\"></script>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/jira-issue-collector/jira-issue-collector.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/jira-issue-collector/jira-issue-collector.component.ts ***!
  \***********************************************************************************/
/*! exports provided: JiraIssueCollectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JiraIssueCollectorComponent", function() { return JiraIssueCollectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let JiraIssueCollectorComponent = class JiraIssueCollectorComponent {
    constructor() { }
    ngOnInit() {
    }
};
JiraIssueCollectorComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-jira-issue-collector',
        template: __webpack_require__(/*! ./jira-issue-collector.component.html */ "./src/app/components/jira-issue-collector/jira-issue-collector.component.html"),
        styles: [__webpack_require__(/*! ./jira-issue-collector.component.css */ "./src/app/components/jira-issue-collector/jira-issue-collector.component.css")]
    }),
    __metadata("design:paramtypes", [])
], JiraIssueCollectorComponent);



/***/ }),

/***/ "./src/app/components/need-sign-up-token/need-sign-up-token.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/need-sign-up-token/need-sign-up-token.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    font-size: 22px;\r\n    color: #4a148c !important;\r\n    text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZWVkLXNpZ24tdXAtdG9rZW4vbmVlZC1zaWduLXVwLXRva2VuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1Q0FBdUM7SUFDdkMsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25lZWQtc2lnbi11cC10b2tlbi9uZWVkLXNpZ24tdXAtdG9rZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjNGExNDhjICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/need-sign-up-token/need-sign-up-token.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/need-sign-up-token/need-sign-up-token.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Thank you for your interest in ETAbot.</h1>\r\n<h1>We are currently testing our private alpha version of the product.</h1>\r\n<h1>Please email us at <a href=\"mailto:hello@etabot.ai\">hello@etabot.ai</a> to request the signup URL.</h1>"

/***/ }),

/***/ "./src/app/components/need-sign-up-token/need-sign-up-token.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/need-sign-up-token/need-sign-up-token.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NeedSignUpTokenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedSignUpTokenComponent", function() { return NeedSignUpTokenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let NeedSignUpTokenComponent = class NeedSignUpTokenComponent {
    constructor() { }
    ngOnInit() {
    }
};
NeedSignUpTokenComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-need-sign-up-token',
        template: __webpack_require__(/*! ./need-sign-up-token.component.html */ "./src/app/components/need-sign-up-token/need-sign-up-token.component.html"),
        styles: [__webpack_require__(/*! ./need-sign-up-token.component.css */ "./src/app/components/need-sign-up-token/need-sign-up-token.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NeedSignUpTokenComponent);



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\">\r\n  Page not found\r\n</h1>\r\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/components/project-card/project-card.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/project-card/project-card.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n\r\n.update_button_spinner_container{\r\n    vertical-align: middle;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.card-update-button {\r\n    display:inline-block;\r\n    vertical-align: middle;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.update_eta_button {\r\n    font-size: 22px;\r\n    height: 50px;\r\n    margin-left: 12px;\r\n}\r\n\r\n\r\n.spinner {\r\n  margin: 0 10px;\r\n  align-items: right;\r\n  display:inline-block;\r\n  align-items: center;\r\n}\r\n\r\n\r\n.spinner_div {\r\n    vertical-align: middle;\r\n    display:inline-block;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.eta_update_status {\r\n    margin: 10px;\r\n}\r\n\r\n\r\n.metrics_table {\r\n    font-size: 18px;\r\n}\r\n\r\n\r\n.eta_option_checkbox {\r\n    margin: 10px 10px;\r\n}\r\n\r\n\r\n.checkbox-section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LWNhcmQvcHJvamVjdC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOzs7QUFHQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7OztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LWNhcmQvcHJvamVjdC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG5cclxuLnVwZGF0ZV9idXR0b25fc3Bpbm5lcl9jb250YWluZXJ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5jYXJkLXVwZGF0ZS1idXR0b24ge1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnVwZGF0ZV9ldGFfYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgYWxpZ24taXRlbXM6IHJpZ2h0O1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zcGlubmVyX2RpdiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZXRhX3VwZGF0ZV9zdGF0dXMge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4ubWV0cmljc190YWJsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5ldGFfb3B0aW9uX2NoZWNrYm94IHtcclxuICAgIG1hcmdpbjogMTBweCAxMHB4O1xyXG59XHJcblxyXG4uY2hlY2tib3gtc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/project-card/project-card.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/project-card/project-card.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div *ngIf=\"error_retrieving == true\">Error Retrieving JIRA Projects. Please go back to JIRA set up page to provide your <a [routerLink]=\"['/jira']\">JIRA credentials.</a></div>\r\n  <mat-card class=\"project-card\" *ngIf=\"projects_received == true\">\r\n    <!-- <mat-card-header > -->\r\n      <mat-card-title-group style=\"margin-bottom: 28px; margin-top: 8px; font-size: 24px;\" class=\"julius-font\">\r\n            <span>{{ project.name }}</span>\r\n            <span class=\"fill-remaining-space\"></span>\r\n            <span  style=\"display: flex; align-items: center;\">\r\n                <div style=\"display:inline-block;\">\r\n                    <app-attention-icon [tms]=\"tms\" (click)=\"openSettings(tms, project_obj)\"></app-attention-icon></div>\r\n                <div style=\"display:inline-block;\">\r\n                    <app-attention-icon [project]=\"project_obj\" (click)=\"openSettings(tms, project_obj)\"></app-attention-icon></div>\r\n\r\n                <div style=\"display:inline-block;\" (click)=\"openSettings(tms, project_obj)\" class=\"gear-image\" matTooltip=\"settings\"></div>\r\n            </span>\r\n    </mat-card-title-group>\r\n        \r\n    <!-- </mat-card-header> -->\r\n      <mat-card-content>\r\n        <div fxLayout=\"row wrap\" class=\"update_button_spinner_container\">\r\n          <div fxFlex class=\"card-update-button new-font\" matTooltip=\"{{update_eta_tooltip}}\">\r\n              <button [disabled]=\"!project_obj.velocity_available\" (click)=\"estimate(project)\" mat-raised-button color=\"primary\" class=\"update_eta_button new-font julius-font\">Update ETAs</button>\r\n          </div>\r\n          <div>\r\n            <section class=\"checkbox-section\">\r\n                <mat-checkbox class=\"eta_option_checkbox\" [(ngModel)]=\"update_active_sprints\">Active sprints</mat-checkbox>\r\n                <mat-checkbox class=\"eta_option_checkbox\" [(ngModel)]=\"update_future_sprints\">Future sprints</mat-checkbox>\r\n                <mat-checkbox class=\"eta_option_checkbox\" [(ngModel)]=\"update_backlog\">Backlog</mat-checkbox>\r\n            </section>\r\n          </div>\r\n          <div fxFlex class=\"spinner_div\">\r\n             <mat-progress-spinner *ngIf=\"project.eta_in_progress\" class=\"spinner\" mode=\"indeterminate\" [diameter]=\"35\">\r\n             </mat-progress-spinner>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"eta_update_status\">\r\n           <div *ngIf=\"project.eta_in_progress || project.last_updated\">Your JIRA task summaries will be updated with ETAs soon. This could take a few minutes (and will continue even if the browser is closed).</div>\r\n           <div *ngIf=\"project.error_message\" class=\"alert-danger\">Error: {{ project.error_message }}.</div>\r\n           <div *ngIf=\"project.result_message\" class=\"alert-success\">{{ project.result_message }}</div>\r\n\r\n        </div>\r\n        <div>\r\n          <table class=\"metrics_table\">\r\n            <tr>\r\n              <td>Velocity</td>\r\n              <td>\r\n                <div style=\"display: flex; align-items: center;\">\r\n                    {{ (project_obj.velocity_available) ? (project.velocities.mean | number:'1.0-2') : \"TBD\" }}  \r\n                    <div *ngIf=\"project_obj.velocity_available\" matTooltip=\"points per hour of work\">&nbsp;pph</div>\r\n                </div></td>\r\n            </tr>\r\n<!--             <tr>\r\n              <td>Issues on track</td>\r\n              <td>Coming soon</td>\r\n            </tr>        \r\n -->\r\n          </table>\r\n        </div>\r\n        <div>\r\n    \r\n        </div>\r\n        <div *ngIf=\"project.last_updated\">ETAs last triggered {{ project.last_updated | date:'short' }}.</div>\r\n    </mat-card-content>\r\n\r\n  </mat-card>"

/***/ }),

/***/ "./src/app/components/project-card/project-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/project-card/project-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCardComponent", function() { return ProjectCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _settings_window_settings_window_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings-window/settings-window.component */ "./src/app/components/settings-window/settings-window.component.ts");
/* harmony import */ var _services_etabot_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/etabot-api.service */ "./src/app/services/etabot-api.service.ts");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../project */ "./src/app/project.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let ProjectCardComponent = class ProjectCardComponent {
    constructor(dialog, etabotAPI) {
        this.dialog = dialog;
        this.etabotAPI = etabotAPI;
        console.log('constructor update_backlog=' + this.update_backlog);
    }
    ngOnInit() {
        this.update_active_sprints = true;
        this.update_future_sprints = true;
        this.update_backlog = false;
        console.log('initing Project Card with project: ' + this.project.name + ' tms id: ' + this.tms.id);
        console.log('ngOnInit update_backlog=' + this.update_backlog);
        this.project_obj = new _project__WEBPACK_IMPORTED_MODULE_4__["Project"](this.project);
        if (this.project_obj.velocity_available) {
            this.update_eta_tooltip = 'Submit job to update ETAs';
        }
        else {
            this.update_eta_tooltip = 'Need to accumulate velocity data before making ETA predictions.';
        }
        // console.log(this.project_obj.get_scope_field_name());
    }
    openSettings(tms, project) {
        const dialogRef = this.dialog.open(_settings_window_settings_window_component__WEBPACK_IMPORTED_MODULE_2__["SettingsWindowComponent"], {
            width: '800px',
            height: '500px',
            data: {
                tms: tms,
                project: project,
                tms_service: this.tms_service
            }
        });
    }
    estimate(project) {
        // this.etabotAPI.estimate('16', '51')
        project['eta_in_progress'] = true;
        this.project.include_active_sprints = this.update_active_sprints;
        this.project.include_future_sprints = this.update_future_sprints;
        this.project.include_backlog = this.update_backlog;
        this.etabotAPI.estimate(project);
    }
    get_connectivity_status() {
        // console.log('parsing "' + this.tms.connectivity_status + "'");
        // console.log(typeof(this.tms.connectivity_status));
        // console.log('"'+this.tms.connectivity_status+'"')
        // const cs = JSON.parse(this.tms.connectivity_status);
        // console.log(cs)
        return this.tms.connectivity_status;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], ProjectCardComponent.prototype, "project", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], ProjectCardComponent.prototype, "tms", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], ProjectCardComponent.prototype, "tms_service", void 0);
ProjectCardComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-project-card',
        template: __webpack_require__(/*! ./project-card.component.html */ "./src/app/components/project-card/project-card.component.html"),
        styles: [__webpack_require__(/*! ./project-card.component.css */ "./src/app/components/project-card/project-card.component.css")]
    }),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
        _services_etabot_api_service__WEBPACK_IMPORTED_MODULE_3__["EtabotApiService"]])
], ProjectCardComponent);



/***/ }),

/***/ "./src/app/components/register-page/register-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/register-page/register-page.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.input-field input[type=text]:focus {\r\n     border-bottom: 1px solid #000;\r\n     box-shadow: 0 1px 0 0 #000;\r\n   }*/\r\n[type=\"checkbox\"].filled-in:not(:checked)+label:after {\r\n  border: 2px solid #e53935 !important;\r\n}\r\n[type=\"checkbox\"].filled-in:checked + label:after {\r\n  border: 2px solid #1a237e !important;\r\n  background-color: #1a237e;\r\n}\r\n.form-group input[type=text]:focus {\r\n     border-bottom: 1px solid #1a237e;\r\n     box-shadow: 0 1px 0 0 #1a237e;\r\n}\r\n.form-group input[type=password]:focus {\r\n     border-bottom: 1px solid #1a237e;\r\n     box-shadow: 0 1px 0 0 #1a237e;\r\n}\r\nh1 {\r\n  font-family: 'Julius Sans One', sans-serif;\r\n}\r\n.new-font {\r\n  font-family: 'Josefin Sans', sans-serif;\r\n  font-size: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci1wYWdlL3JlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0tBR0s7QUFDTDtFQUNFLG9DQUFvQztBQUN0QztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHlCQUF5QjtBQUMzQjtBQUVBO0tBQ0ssZ0NBQWdDO0tBQ2hDLDZCQUE2QjtBQUNsQztBQUVBO0tBQ0ssZ0NBQWdDO0tBQ2hDLDZCQUE2QjtBQUNsQztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDO0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5pbnB1dC1maWVsZCBpbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcclxuICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICAgICBib3gtc2hhZG93OiAwIDFweCAwIDAgIzAwMDtcclxuICAgfSovXHJcblt0eXBlPVwiY2hlY2tib3hcIl0uZmlsbGVkLWluOm5vdCg6Y2hlY2tlZCkrbGFiZWw6YWZ0ZXIge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlNTM5MzUgIWltcG9ydGFudDtcclxufVxyXG5cclxuW3R5cGU9XCJjaGVja2JveFwiXS5maWxsZWQtaW46Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMWEyMzdlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMjM3ZTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxYTIzN2U7XHJcbiAgICAgYm94LXNoYWRvdzogMCAxcHggMCAwICMxYTIzN2U7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFhMjM3ZTtcclxuICAgICBib3gtc2hhZG93OiAwIDFweCAwIDAgIzFhMjM3ZTtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtZmFtaWx5OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm5ldy1mb250IHtcclxuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/register-page/register-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/register-page/register-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col-md-6 col-md-offset-3 mat-typography\" style=\"margin-top: 40px;\" > -->\r\n<mat-card class=\"sign-login-card\">\r\n  <mat-card-title style=\"text-align: center;\">\r\n    <h1>Sign up</h1></mat-card-title>\r\n  <form #f=\"ngForm\" (ngSubmit)=\"f.form.valid && signup()\">\r\n    <div *ngIf=\"userFailure\" class=\"alert alert-danger\" style=\"font-size: 16px;\">Server Error has occured: {{ error_message }}</div>\r\n<!--     <div class=\"form-group\">\r\n      <label for=\"username\" style=\"font-size: 20px;\">Username:</label>\r\n      <input type=\"text\" id=\"username\" class=\"form-control\" name=\"username\" required [(ngModel)]=\"model.username\" #username=\"ngModel\" style=\"font-size: 20px;\" />\r\n      <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block new-font\">Username is required</div>\r\n    </div> -->\r\n    <div class=\"form-group\">\r\n      <label for=\"email\" style=\"font-size: 20px;\">Register with your email:</label>\r\n      <input type=\"text\" id=\"email\" class=\"form-control\" name=\"email\" required [(ngModel)]=\"model.email\" #email=\"ngModel\" style=\"font-size: 16px;\" />\r\n      <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block new-font\">Email is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n      <label for=\"password\" style=\"font-size: 20px;\">Password:</label>\r\n      <input type=\"password\" id=\"password\" class=\"form-control\" name=\"password\" required [(ngModel)]=\"model.password\" #password=\"ngModel\" style=\"font-size: 20px;\" />\r\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block new-font\">Password is required</div>\r\n    </div>\r\n    <!-- <div class=\"form-group\">\r\n            <label for=\"passwordrepeat\" style=\"font-size: 20px;\">Repeat password:</label>\r\n            <input type=\"passwordrepeat\" id=\"passwordrepeat\" class=\"form-control\" name=\"passwordrepeat\" required ngModel style=\"font-size: 20px;\"/>        \r\n        </div> -->\r\n    <div style=\"margin-bottom: 10px;\">\r\n      <input type=\"checkbox\" [checked]=\"isAcceptedTerms\" (change)=\"isAcceptedTerms = !isAcceptedTerms\" id=\"terms\" class=\"filled-in\">\r\n      <label for=\"terms\" style=\"font-size: 16px; margin-left: 3px;\">I agree with</label> <a (click)=\"openDialog()\" style=\"font-size: 16px;\"> Terms and Conditions and Privacy Policy.</a>\r\n    </div>\r\n    <div class=\"form-group\" style=\"font-size: 16px;\">\r\n      <button mat-raised-button [disabled]=\"!isAcceptedTerms && !passwordMatched\" color=\"accent\" class=\"new-font\" style=\"margin-right: 10px; margin-bottom: 5px; margin-left: 3px; font-size: 20px; font-size: 20px; width: 120px; height: 44px;\">Sign up\r\n      </button>\r\n      Already registered? <a [routerLink]=\"['/login']\">Log in here</a>\r\n    </div>\r\n  </form>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/register-page/register-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/register-page/register-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_etabot_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/etabot-api.service */ "./src/app/services/etabot-api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_sign_up_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sign-up.service */ "./src/app/services/sign-up.service.ts");
/* harmony import */ var _services_jira_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/jira.service */ "./src/app/services/jira.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _terms_conditions_full_terms_conditions_full_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terms-conditions-full/terms-conditions-full.component */ "./src/app/components/register-page/terms-conditions-full/terms-conditions-full.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let RegisterPageComponent = class RegisterPageComponent {
    constructor(etabotAPI, router, signUpService, jiraService, dialog, route, titleService) {
        this.etabotAPI = etabotAPI;
        this.router = router;
        this.signUpService = signUpService;
        this.jiraService = jiraService;
        this.dialog = dialog;
        this.route = route;
        this.titleService = titleService;
        this.model = {};
        this.returnUrl = '';
        this.error_message = '';
        this.token = 137;
        this.isAcceptedTerms = false;
        this.passwordMatched = false;
        this.userFailure = false;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.token = params['token'];
            console.log('params[token]: ' + params['token']);
            try {
                const int_token = Number(this.token);
                if (int_token % 188748146801 !== 0) {
                    this.router.navigate(['/need_sign_up_token']);
                }
            }
            catch (e) {
                this.router.navigate(['/need_sign_up_token']);
            }
        });
        this.returnUrl = '/verification/pending';
        // if (localStorage.getItem('username')) {
        //   this.router.navigate([this.returnUrl]);
        // }
        this.titleService.setTitle('ETAbot Sign Up');
    }
    openDialog() {
        const dialogRef = this.dialog.open(_terms_conditions_full_terms_conditions_full_component__WEBPACK_IMPORTED_MODULE_6__["TermsConditionsFullComponent"], {
            width: '800px',
            height: '500px',
        });
    }
    signup() {
        this.signUpService.signup(this.model.email, this.model.email, this.model.password)
            .subscribe(success => {
            console.log('signup success! redirecting...');
            this.router.navigate([this.returnUrl]);
        }, error => {
            console.log('signup error');
            this.error_message = error + '; \n' + error._body;
            this.userFailure = true;
        });
    }
};
RegisterPageComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-register-page',
        template: __webpack_require__(/*! ./register-page.component.html */ "./src/app/components/register-page/register-page.component.html"),
        styles: [__webpack_require__(/*! ./register-page.component.css */ "./src/app/components/register-page/register-page.component.css")]
    }),
    __metadata("design:paramtypes", [_services_etabot_api_service__WEBPACK_IMPORTED_MODULE_1__["EtabotApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _services_sign_up_service__WEBPACK_IMPORTED_MODULE_3__["SignUpService"],
        _services_jira_service__WEBPACK_IMPORTED_MODULE_4__["JiraService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]])
], RegisterPageComponent);



/***/ }),

/***/ "./src/app/components/register-page/terms-conditions-full/terms-conditions-full.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/register-page/terms-conditions-full/terms-conditions-full.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n  font-family: 'Julius Sans One', sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci1wYWdlL3Rlcm1zLWNvbmRpdGlvbnMtZnVsbC90ZXJtcy1jb25kaXRpb25zLWZ1bGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBDQUEwQztBQUM1QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXItcGFnZS90ZXJtcy1jb25kaXRpb25zLWZ1bGwvdGVybXMtY29uZGl0aW9ucy1mdWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgZm9udC1mYW1pbHk6ICdKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/register-page/terms-conditions-full/terms-conditions-full.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/register-page/terms-conditions-full/terms-conditions-full.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n<h2 style=\"text-align: center;\">TERMS AND CONDITIONS</h2><ol><li><strong>Introduction</strong></li></ol><p>These Website Standard Terms and Conditions written on this webpage shall manage your use of this website. These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.</p><p>Minors or people below 18 years old are not allowed to use this Website.</p><ol start=\"2\"><li><strong>Intellectual Property Rights</strong></li></ol><p>Other than the content you own, under these Terms, Etabot and/or its licensors own all the intellectual property rights and materials contained in this Website.</p><p>You are granted limited license only for purposes of viewing the material contained on this Website.</p><ol start=\"3\"><li><strong>Restrictions</strong></li></ol><p>You are specifically restricted from all of the following</p><ul><li>publishing any Website material in any other media;</li><li>selling, sublicensing and/or otherwise commercializing any Website material;</li><li>publicly performing and/or showing any Website material;</li><li>using this Website in any way that is or may be damaging to this Website;</li><li>using this Website in any way that impacts user access to this Website;</li><li>using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li><li>engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li><li>using this Website to engage in any advertising or marketing.</li></ul><p>Certain areas of this Website are restricted from being access by you and Etabot may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.</p><ol start=\"4\"><li><strong>Your Content</strong></li></ol><p>In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Etabot a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</p><p>Your Content must be your own and must not be invading any third-party’s rights. Etabot reserves the right to remove any of Your Content from this Website at any time without notice.</p><ol start=\"5\"><li><strong>No warranties</strong></li></ol><p>This Website is provided “as is,” with all faults, and Etabot express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</p><ol start=\"6\"><li><strong>Limitation of liability</strong></li></ol><p>In no event shall Etabot, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. &nbsp;Etabot, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p><ol start=\"7\"><li><strong>Indemnification</strong></li></ol><p>You hereby indemnify to the fullest extent Etabot from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.</p><ol start=\"8\"><li><strong>Severability</strong></li></ol><p>If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p><ol start=\"9\"><li><strong>Variation of Terms</strong></li></ol><p>Etabot is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.</p><ol start=\"10\"><li><strong>Assignment</strong></li></ol><p>The Etabot is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.</p><ol start=\"11\"><li><strong>Entire Agreement</strong></li></ol><p>These Terms constitute the entire agreement between Etabot and you in relation to your use of this Website, and supersede all prior agreements and understandings.</p><ol start=\"12\"><li><strong>Governing Law &amp; Jurisdiction</strong></li></ol><p>These Terms will be governed by and interpreted in accordance with the laws of the State of California, and you submit to the non-exclusive jurisdiction of the state and federal courts located in California for the resolution of any disputes.</p>\r\n</div>\r\n\r\n<div>\r\n\r\n<!-- https://www.freeprivacypolicy.com/privacy/view/9fa33208006b168a276e4db0f04568e5 -->\r\n<h1>Privacy Policy</h1>\r\n\r\n\r\n<p>Effective date: November 14, 2018</p>\r\n\r\n\r\n<p>ETAbot, Inc. (\"us\", \"we\", or \"our\") operates the https://app.etabot.ai website (the \"Service\").</p>\r\n\r\n<p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. <!-- Our Privacy Policy  for ETAbot, Inc. is managed through <a href=\"https://www.freeprivacypolicy.com/free-privacy-policy-generator.php\">Free Privacy Policy Website</a>. --></p>\r\n\r\n<p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from https://app.etabot.ai</p>\r\n\r\n\r\n<h2>Information Collection And Use</h2>\r\n\r\n<p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>\r\n\r\n<h3>Types of Data Collected</h3>\r\n\r\n<h4>Personal Data</h4>\r\n\r\n<p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (\"Personal Data\"). Personally identifiable information may include, but is not limited to:</p>\r\n\r\n<ul>\r\n<li>Email address</li><li>First name and last name</li><li>Cookies and Usage Data</li>\r\n<li>Credentials to task management systems (e.g. JIRA)\r\n</ul>\r\n\r\n<h4>Usage Data</h4>\r\n\r\n<p>We may also collect information how the Service is accessed and used (\"Usage Data\"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>\r\n\r\n<h4>Tracking & Cookies Data</h4>\r\n<p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>\r\n<p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>\r\n<p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>\r\n<p>Examples of Cookies we use:</p>\r\n<ul>\r\n    <li><strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li>\r\n    <li><strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li>\r\n    <li><strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li>\r\n</ul>\r\n\r\n<h2>Use of Data</h2>\r\n    \r\n<p>ETAbot, Inc. uses the collected data for various purposes:</p>    \r\n<ul>\r\n    <li>To provide and maintain the Service</li>\r\n    <li>To notify you about changes to our Service</li>\r\n    <li>To allow you to participate in interactive features of our Service when you choose to do so</li>\r\n    <li>To provide customer care and support</li>\r\n    <li>To provide analysis or valuable information so that we can improve the Service</li>\r\n    <li>To monitor the usage of the Service</li>\r\n    <li>To detect, prevent and address technical issues</li>\r\n</ul>\r\n\r\n<h2>Transfer Of Data</h2>\r\n<p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>\r\n<p>If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.</p>\r\n<p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>\r\n<p>ETAbot, Inc. will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>\r\n\r\n<h2>Disclosure Of Data</h2>\r\n\r\n<h3>Legal Requirements</h3>\r\n<p>ETAbot, Inc. may disclose your Personal Data in the good faith belief that such action is necessary to:</p>\r\n<ul>\r\n    <li>To comply with a legal obligation</li>\r\n    <li>To protect and defend the rights or property of ETAbot, Inc.</li>\r\n    <li>To prevent or investigate possible wrongdoing in connection with the Service</li>\r\n    <li>To protect the personal safety of users of the Service or the public</li>\r\n    <li>To protect against legal liability</li>\r\n</ul>\r\n\r\n<h2>Security Of Data</h2>\r\n<p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>\r\n\r\n<h2>Service Providers</h2>\r\n<p>We may employ third party companies and individuals to facilitate our Service (\"Service Providers\"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>\r\n<p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>\r\n\r\n<h3>Analytics</h3>\r\n<p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>    \r\n<ul>\r\n        <li>\r\n        <p><strong>Google Analytics</strong></p>\r\n        <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>\r\n        <p>You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity.</p>                <p>For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: https://policies.google.com/privacy?hl=en<!-- <a href=\"https://policies.google.com/privacy?hl=en\">https://policies.google.com/privacy?hl=en</a> --></p>\r\n    </li>\r\n                            </ul>\r\n\r\n\r\n<h2>Links To Other Sites</h2>\r\n<p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>\r\n<p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>\r\n\r\n\r\n<h2>Children's Privacy</h2>\r\n<p>Our Service does not address anyone under the age of 18 (\"Children\").</p>\r\n<p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>\r\n\r\n\r\n<h2>Changes To This Privacy Policy</h2>\r\n<p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>\r\n<p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the \"effective date\" at the top of this Privacy Policy.</p>\r\n<p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>\r\n\r\n\r\n<h2>Contact Us</h2>\r\n<p>If you have any questions about this Privacy Policy, please contact us:</p>\r\n<ul>\r\n        <li>By email: hello@etabot.ai</li>\r\n          \r\n        </ul>\r\n\r\n</div>            "

/***/ }),

/***/ "./src/app/components/register-page/terms-conditions-full/terms-conditions-full.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/register-page/terms-conditions-full/terms-conditions-full.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: TermsConditionsFullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsFullComponent", function() { return TermsConditionsFullComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let TermsConditionsFullComponent = class TermsConditionsFullComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // console.log("data " + data.isAcceptedTerms);
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
TermsConditionsFullComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-terms-conditions-full',
        template: __webpack_require__(/*! ./terms-conditions-full.component.html */ "./src/app/components/register-page/terms-conditions-full/terms-conditions-full.component.html"),
        styles: [__webpack_require__(/*! ./terms-conditions-full.component.css */ "./src/app/components/register-page/terms-conditions-full/terms-conditions-full.component.css")]
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
], TermsConditionsFullComponent);



/***/ }),

/***/ "./src/app/components/register-page/verification-view/verification-activate/verification-activate.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/register-page/verification-view/verification-activate/verification-activate.component.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-font {\r\n\tfont-family: 'Josefin Sans', sans-serif;\r\n\tfont-size: 22px;\r\n\tcolor: #4a148c !important;\r\n\ttext-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci1wYWdlL3ZlcmlmaWNhdGlvbi12aWV3L3ZlcmlmaWNhdGlvbi1hY3RpdmF0ZS92ZXJpZmljYXRpb24tYWN0aXZhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHVDQUF1QztDQUN2QyxlQUFlO0NBQ2YseUJBQXlCO0NBQ3pCLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXItcGFnZS92ZXJpZmljYXRpb24tdmlldy92ZXJpZmljYXRpb24tYWN0aXZhdGUvdmVyaWZpY2F0aW9uLWFjdGl2YXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LWZvbnQge1xyXG5cdGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDIycHg7XHJcblx0Y29sb3I6ICM0YTE0OGMgIWltcG9ydGFudDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/register-page/verification-view/verification-activate/verification-activate.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/components/register-page/verification-view/verification-activate/verification-activate.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 200px;\">\r\n  <div class=\"new-font\"><strong>{{ message }}</strong></div>\r\n\r\n  <div *ngIf=\"show_login\" align=\"center\">\r\n    <a [routerLink]=\"['/login']\">Log in here</a>\r\n  </div>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/register-page/verification-view/verification-activate/verification-activate.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/register-page/verification-view/verification-activate/verification-activate.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: VerificationActivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationActivateComponent", function() { return VerificationActivateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_etabot_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/etabot-api.service */ "./src/app/services/etabot-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_sign_up_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/sign-up.service */ "./src/app/services/sign-up.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let VerificationActivateComponent = class VerificationActivateComponent {
    constructor(titleService, signupService, etabotAPI, router, route) {
        this.titleService = titleService;
        this.signupService = signupService;
        this.etabotAPI = etabotAPI;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.titleService.setTitle('ETAbot Verification Processed Notification');
        this.show_login = false;
        this.message = 'Activating your account, please wait.';
        this.route.params.subscribe(params => {
            this.token = params['token'];
            console.log('params[token]: ' + params['token']);
        });
        this.signupService.verificationResponse.subscribe(res => {
            console.log('verificationResponse (' + typeof (res) + '):' + res);
            console.log('verification reponse message:' + res['message']);
            this.setMessage(res);
            if (res['message'] === 'Thank you for your confirmation. Please login with your account!') {
                console.log('successful activation -> redirecting to login page');
                localStorage.removeItem('email');
                this.router.navigate(['/login']);
            }
            else {
                console.log('activation error: ' + res['message']);
            }
        }, err => {
            console.log(err);
            this.setMessage(err._body);
        });
        this.signupService.activate(this.token);
    }
    setMessage(data) {
        console.log('data message: ' + data['message']);
        this.message = data['message'];
        if (this.message === 'Thank you for your confirmation. Please login with your account!' ||
            this.message === 'You were already activated. Please login with your account!') {
            this.show_login = true;
        }
    }
};
VerificationActivateComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-verification-activate',
        template: __webpack_require__(/*! ./verification-activate.component.html */ "./src/app/components/register-page/verification-view/verification-activate/verification-activate.component.html"),
        styles: [__webpack_require__(/*! ./verification-activate.component.css */ "./src/app/components/register-page/verification-view/verification-activate/verification-activate.component.css")]
    }),
    __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
        _services_sign_up_service__WEBPACK_IMPORTED_MODULE_4__["SignUpService"],
        _services_etabot_api_service__WEBPACK_IMPORTED_MODULE_1__["EtabotApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], VerificationActivateComponent);



/***/ }),

/***/ "./src/app/components/register-page/verification-view/verification-pending/verification-pending.component.css":
/*!********************************************************************************************************************!*\
  !*** ./src/app/components/register-page/verification-view/verification-pending/verification-pending.component.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-font {\r\n\tfont-family: 'Josefin Sans', sans-serif;\r\n\tfont-size: 22px;\r\n\tcolor: #4a148c !important;\r\n\ttext-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci1wYWdlL3ZlcmlmaWNhdGlvbi12aWV3L3ZlcmlmaWNhdGlvbi1wZW5kaW5nL3ZlcmlmaWNhdGlvbi1wZW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx1Q0FBdUM7Q0FDdkMsZUFBZTtDQUNmLHlCQUF5QjtDQUN6QixrQkFBa0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyLXBhZ2UvdmVyaWZpY2F0aW9uLXZpZXcvdmVyaWZpY2F0aW9uLXBlbmRpbmcvdmVyaWZpY2F0aW9uLXBlbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctZm9udCB7XHJcblx0Zm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMjJweDtcclxuXHRjb2xvcjogIzRhMTQ4YyAhaW1wb3J0YW50O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/register-page/verification-view/verification-pending/verification-pending.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/register-page/verification-view/verification-pending/verification-pending.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 180px;\">\r\n  <div class=\"new-font\"><strong>Thank you for your signing up!</strong></div>\r\n  <div class=\"new-font\"><strong>We have sent a confirmation email to</strong></div>\r\n  <div class=\"new-font\"><strong>{{ email }}.</strong></div>\r\n  <div class=\"new-font\"><strong>Please follow the instructions to gain full</strong></div>\r\n  <div class=\"new-font\"><strong>access to the site.</strong></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/register-page/verification-view/verification-pending/verification-pending.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/register-page/verification-view/verification-pending/verification-pending.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: VerificationPendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPendingComponent", function() { return VerificationPendingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let VerificationPendingComponent = class VerificationPendingComponent {
    constructor(titleService) {
        this.titleService = titleService;
    }
    ngOnInit() {
        this.titleService.setTitle('ETAbot Verification Pending Page');
        this.email = localStorage.getItem('email');
    }
};
VerificationPendingComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-verification-pending',
        template: __webpack_require__(/*! ./verification-pending.component.html */ "./src/app/components/register-page/verification-view/verification-pending/verification-pending.component.html"),
        styles: [__webpack_require__(/*! ./verification-pending.component.css */ "./src/app/components/register-page/verification-view/verification-pending/verification-pending.component.css")]
    }),
    __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
], VerificationPendingComponent);



/***/ }),

/***/ "./src/app/components/settings-window/settings-window.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/settings-window/settings-window.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mtd2luZG93L3NldHRpbmdzLXdpbmRvdy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/settings-window/settings-window.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/settings-window/settings-window.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Project {{ project_obj.name  }} Settings </h1>\r\n\r\n<mat-tab-group md-stretch-tabs>\r\n  <mat-tab>\r\n    <ng-template mat-tab-label>\r\n      Data fields <app-attention-icon [project]=\"project_obj\"></app-attention-icon>\r\n    </ng-template>\r\n\r\n      <mat-accordion>\r\n        <mat-expansion-panel >\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              Scope field name\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n              {{ project_obj.scope_field_name !==null ? project_obj.scope_field_name : \"needs attention\"}}\r\n            </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <div innerHTML=\"{{ project_obj.scope_ui_message }} \">\r\n          </div>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel >\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              Sprint field name\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n              {{ (project_obj.sprint_field_name !== null ) ? project_obj.sprint_field_name : \"needs attention\"}}\r\n            </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <div *ngIf=\"(project_obj.sprint_field_name !== null)\">Parsed correctly</div>\r\n          <div *ngIf=\"project_obj.sprint_field_name === null\">Sprint field name was not determined automatically. This can cause inaccurate predictions due to lack of data. Please contact us at <a href=\"mailto:hello@etabot.ai\">hello@etabot.ai</a></div>\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion>      \r\n\r\n  </mat-tab>\r\n  <mat-tab>\r\n    <ng-template mat-tab-label>\r\n      Account <app-attention-icon [tms]=\"tms\"></app-attention-icon>\r\n    </ng-template>\r\n    <div style=\"align-items: center\">\r\n        <app-tms-card [tms]=\"tms\" [tms_service]=\"tms_service\" style=\"align-self: center\"></app-tms-card>\r\n    </div>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/settings-window/settings-window.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/settings-window/settings-window.component.ts ***!
  \*************************************************************************/
/*! exports provided: SettingsWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsWindowComponent", function() { return SettingsWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



let SettingsWindowComponent = class SettingsWindowComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        console.log(this.data);
        this.tms = this.data['tms'];
        this.project_obj = this.data['project'];
        this.tms_service = this.data['tms_service'];
        console.log('settings window inited.');
    }
};
SettingsWindowComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-settings-window',
        template: __webpack_require__(/*! ./settings-window.component.html */ "./src/app/components/settings-window/settings-window.component.html"),
        styles: [__webpack_require__(/*! ./settings-window.component.css */ "./src/app/components/settings-window/settings-window.component.css")]
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [Object])
], SettingsWindowComponent);



/***/ }),

/***/ "./src/app/components/tms-card/tms-card.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/tms-card/tms-card.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG1zLWNhcmQvdG1zLWNhcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/tms-card/tms-card.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/tms-card/tms-card.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <mat-card class=\"tms-card\">\r\n\r\n    <mat-card-header class=\"card-header\" style=\"margin-bottom: 28px;\">\r\n      <mat-card-title class=\"new-font\" style=\"margin-top: 8px; font-size: 24px;\" class=\"julius-font\">{{  remove_protocol_from_string(tms.endpoint) }}</mat-card-title>\r\n\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n\r\n      <mat-accordion>\r\n        <mat-expansion-panel >\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              TMS Connectivity\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n                {{ tms_status.status }}\r\n            </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n            URL {{ tms.endpoint }} <br>\r\n            {{ tms_status.description | slice:0:200 }}\r\n        </mat-expansion-panel>\r\n      </mat-accordion>      \r\n        <div>\r\n          <app-error-box *ngIf=\"error == true\" [error_message]=\"error_message\"></app-error-box>\r\n          <div *ngIf=\"updating_tms == true\" class=\"alert alert-info\">Hold tight! We are verifying your info with Atlassian...</div>\r\n      <mat-accordion>\r\n        <mat-expansion-panel >\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              Update credentials for this JIRA account\r\n            </mat-panel-title>\r\n            <mat-panel-description></mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n            <div style=\"margin-top: 35px;\">              \r\n              <form #f=\"ngForm\" (ngSubmit)=\"update_password(tms.id)\">\r\n                <div class=\"form-group\">\r\n                  \r\n                    <label for=\"username\" style=\"font-size: 16px;\">Username</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" required [(ngModel)]=\"new_username\" #email=\"ngModel\" style=\"font-size: 16px;\" placeholder=\"{{ tms.username }}\" />\r\n                </div>                \r\n                <div>\r\n                  <label for=\"password\" style=\"font-size: 16px;\">Password</label>\r\n                  <input type=\"password\" id=\"password\"  name=\"password\" required [(ngModel)]=\"new_password\" #password=\"ngModel\" style=\"font-size: 16px;\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <button mat-raised-button color=\"accent\" style=\"margin-right: 10px; margin-bottom: 5px; font-size: 20px; width: 120px; height: 44px;\" class=\"new-font\">Update</button>\r\n                </div>                  \r\n              </form>   \r\n            </div>   \r\n        </mat-expansion-panel>\r\n      </mat-accordion>      \r\n        <br>\r\n      <div align=\"center\">\r\n        <button mat-raised-button (click)=\"parse_projects(tms.id)\" color=\"accent\" style=\"margin-right: 10px; margin-bottom: 5px; font-size: 20px; width: 340px; height: 44px;\" class=\"new-font\">Parse projects</button>        \r\n      </div>\r\n      <div align=\"center\">\r\n          <button mat-raised-button (click)=\"delete_tms(tms.id)\" matTooltip=\"This will also remove all projects associated with this JIRA account\" color=\"accent\" style=\"margin-right: 10px; margin-bottom: 5px; font-size: 20px; width: 340px; height: 44px;\" class=\"new-font\">Remove this JIRA account</button>\r\n          </div>\r\n\r\n      </div>\r\n      <div align=\"right\">TMS ETAbot ID {{ tms.id }}</div>\r\n    </mat-card-content>\r\n\r\n\r\n  </mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/tms-card/tms-card.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/tms-card/tms-card.component.ts ***!
  \***********************************************************/
/*! exports provided: TmsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmsCardComponent", function() { return TmsCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_jira_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/jira.service */ "./src/app/services/jira.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { EtabotApiService } from '../../services/etabot-api.service';
let TmsCardComponent = class TmsCardComponent {
    constructor(jiraService, router
    // private etabotAPI: EtabotApiService
    ) {
        this.jiraService = jiraService;
        this.router = router;
        this.updating_tms = false;
        this.error = false;
    }
    ngOnInit() {
        console.log('TmsCardComponent Init tms: ' + this.tms.id + this.tms.connectivity_status + this.tms);
        if (this.tms.connectivity_status !== null) {
            this.tms_status = this.tms.connectivity_status;
        }
        else {
            this.tms_status = { 'status': 'unknown', 'descrtiption': '' };
        }
    }
    remove_protocol_from_string(url) {
        return url.replace(/(^\w+:|^)\/\//, '');
    }
    update_password(tms_id) {
        // console.log('updating tms id ' + tms_id + ' with new password: ' + this.new_password);
        this.updating_tms = true;
        this.jiraService.patch_username_password_tms(tms_id, this.new_username, this.new_password)
            .subscribe(success => {
            console.log('update password is successful');
            this.updating_tms = false;
            this.error = false;
            if (this.tms_service) {
                this.tms_service.get_tms();
            }
        }, error => {
            this.error_message = this.jiraService.parse_error(error);
            console.log(error);
            this.error = true;
            this.updating_tms = false;
        });
    }
    parse_projects(tms_id) {
        // console.log('updating tms id ' + tms_id + ' with new password: ' + this.new_password);
        this.updating_tms = true;
        this.jiraService.parse_projects(tms_id)
            .subscribe(success => {
            this.updating_tms = false;
            this.error = false;
        }, error => {
            this.error_message = error;
            this.error_message = this.jiraService.parse_error(error);
            console.log(error);
            this.error = true;
            this.updating_tms = false;
        });
    }
    delete_tms(tms_id) {
        // console.log('updating tms id ' + tms_id + ' with new password: ' + this.new_password);
        if (confirm('Are you sure you want to remove this JIRA account and its projects from ETAbot? You can add it again later.')) {
            this.updating_tms = true;
            this.jiraService.delete_tms(tms_id)
                .subscribe(success => {
                this.updating_tms = false;
                this.error = false;
                console.log('redirecting to /tmss');
                this.router.navigate(['/projects']);
                // this.etabotAPI.get_real_projects();
            }, error => {
                this.error_message = error;
                this.error_message = this.jiraService.parse_error(error);
                console.log(error);
                this.error = true;
                this.updating_tms = false;
            });
        }
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], TmsCardComponent.prototype, "tms", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], TmsCardComponent.prototype, "tms_service", void 0);
TmsCardComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-tms-card',
        template: __webpack_require__(/*! ./tms-card.component.html */ "./src/app/components/tms-card/tms-card.component.html"),
        styles: [__webpack_require__(/*! ./tms-card.component.css */ "./src/app/components/tms-card/tms-card.component.css")]
    }),
    __metadata("design:paramtypes", [_services_jira_service__WEBPACK_IMPORTED_MODULE_1__["JiraService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        // private etabotAPI: EtabotApiService
    ])
], TmsCardComponent);



/***/ }),

/***/ "./src/app/components/tms-list/tms-list.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/tms-list/tms-list.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG1zLWxpc3QvdG1zLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/tms-list/tms-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/tms-list/tms-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"new-font\">\r\n<h1 style=\"text-align: center; font-size: 32px;\" class=\"julius-font\">Task Management Systems accounts</h1>\r\n\r\n<div class=\"add_tms_link\"><a [routerLink]=\"['/jira']\" style=\"cursor: pointer\">Add account</a></div>\r\n<div class=\"add_tms_link\"><a [routerLink]=\"['/projects']\" style=\"cursor: pointer\">Projects</a></div>\r\n\r\n<div class=\"projects-container\" fxLayout=\"row wrap\"  fxLayoutAlign=\"space-evenly start\">\r\n<!-- fxLayoutGap=\"0.5%\" -->\r\n\r\n        <app-tms-card *ngFor=\"let tms_i of tmss\" [tms]=\"tms_i\"></app-tms-card>\r\n\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/tms-list/tms-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/tms-list/tms-list.component.ts ***!
  \***********************************************************/
/*! exports provided: TmsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmsListComponent", function() { return TmsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_jira_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/jira.service */ "./src/app/services/jira.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let TmsListComponent = class TmsListComponent {
    constructor(tms_service) {
        this.tms_service = tms_service;
        tms_service.get_tms().subscribe();
        tms_service.tmss.subscribe(data => this.setTmss(data));
    }
    ngOnInit() {
    }
    setTmss(data) {
        console.log('saving TMS data');
        this.tmss = data;
    }
};
TmsListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-tms-list',
        template: __webpack_require__(/*! ./tms-list.component.html */ "./src/app/components/tms-list/tms-list.component.html"),
        styles: [__webpack_require__(/*! ./tms-list.component.css */ "./src/app/components/tms-list/tms-list.component.css")]
    }),
    __metadata("design:paramtypes", [_services_jira_service__WEBPACK_IMPORTED_MODULE_1__["JiraService"]])
], TmsListComponent);



/***/ }),

/***/ "./src/app/components/users-view/projects-view/projects-view.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/users-view/projects-view/projects-view.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".julius-font {\r\n  font-family: 'Julius Sans One', sans-serif;\r\n}\r\n.new-font {\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    font-size: 24px;\r\n}\r\n.header-image {\r\n  background-image: url('launchpadme.png');\r\n  background-size: cover;\r\n}\r\n.wrapper {\r\n    display: grid;\r\n}\r\n.mat-card-avatar {\r\n    min-height: 55px;\r\n    min-width: 55px;\r\n}\r\n/*.mat-raised-button {\r\n    background-color: #d9edf7; border-color: #bce8f1;\r\n}*/\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy12aWV3L3Byb2plY3RzLXZpZXcvcHJvamVjdHMtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQTBDO0FBQzVDO0FBQ0E7SUFDSSx1Q0FBdUM7SUFDdkMsZUFBZTtBQUNuQjtBQUVBO0VBQ0Usd0NBQTJEO0VBQzNELHNCQUFzQjtBQUN4QjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFHQTs7RUFFRSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMtdmlldy9wcm9qZWN0cy12aWV3L3Byb2plY3RzLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdWxpdXMtZm9udCB7XHJcbiAgZm9udC1mYW1pbHk6ICdKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5uZXctZm9udCB7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2xhdW5jaHBhZG1lLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbn1cclxuXHJcblxyXG4ubWF0LWNhcmQtYXZhdGFyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDU1cHg7XHJcbiAgICBtaW4td2lkdGg6IDU1cHg7XHJcbn1cclxuXHJcblxyXG4vKi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllZGY3OyBib3JkZXItY29sb3I6ICNiY2U4ZjE7XHJcbn0qL1xyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/users-view/projects-view/projects-view.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/users-view/projects-view/projects-view.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"projectsReceived == true\" class=\"new-font\">\r\n    <div class=\"add_tms_link\"><a [routerLink]=\"['/jira']\" style=\"cursor: pointer\">Add JIRA account</a></div>\r\n    <div class=\"add_tms_link\"><a [routerLink]=\"['/tmss']\" style=\"cursor: pointer\">View accounts</a></div>\r\n    <h1 style=\"text-align: center; font-size: 32px;\" class=\"julius-font\">Projects</h1>\r\n    <div class=\"alert alert-info new-font\" style=\"text-align: center; font-size: 20px;  \"><p style=\"color: #1a237e;\">All JIRA tasks will be updated daily around midnight, or click <a (click)=\"estimate_all_projects()\" style=\"cursor: pointer\">here</a> to update ETA for all projects now.</p></div> \r\n\r\n    <div class=\"projects-container\" fxLayout=\"row wrap\"  fxLayoutAlign=\"space-evenly start\">\r\n        <app-project-card *ngFor=\"let project of realProjects\" [project]=\"project\" [tms]=\"tmss_by_id[project.project_tms_id]\" [tms_service]=\"tms_service\"></app-project-card>\r\n    </div>\r\n</div>\r\n    \r\n    <!-- fxLayoutGap=\"0.5%\" -->\r\n\r\n    <!--           <div class=\"container\">    \r\n                <div fxFlex mat-card-avatar class=\"header-image\" ></div>\r\n                <div fxFlex class=\"card-title-subtitle\">\r\n                  <mat-card-subtitle class=\"new-font\">{{ project.mode }}</mat-card-subtitle>\r\n                  <mat-card-subtitle>{{ project.id }}</mat-card-subtitle>\r\n                  <mat-card-subtitle>{{ project.work_hours.time_zone}}</mat-card-subtitle>\r\n                </div>\r\n              </div>\r\n     --> \r\n     <!--            <div fxFlex>\r\n                </div>\r\n     -->\r\n\r\n      \r\n        <!-- <div fxLayout=\"row\">\r\n          <div fxFlex=\"10\" class=\"new-font\">\r\n            Time Zone\r\n          </div>\r\n          <div class=\"new-font\" >\r\n            {{ timeZone }}\r\n          </div>\r\n        </div> -->\r\n<!--         <div fxLayout=\"row\" style=\"margin-bottom: 20px;\">\r\n          <div fxFlex=\"10\" class=\"new-font\" style=\"margin-top: 28px; margin-right: 8px;\">\r\n            Work Hours\r\n          </div>\r\n          <div fxFlex class=\"new-font\">\r\n            <div *ngIf=\"project.work_hours === null; else exists_work_hours\">\r\n -->              <!-- No work hours -->\r\n<!--               <app-work-hours-view (timeZone)=\"defaultTimeZone\" [workHoursData]=\"[]\"></app-work-hours-view >\r\n            </div>\r\n            <ng-template #exists_work_hours>\r\n            <app-work-hours-view (timeZone)=\"setTimeZone($event)\" [workHoursData]=\"project.work_hours\">\r\n            </app-work-hours-view>\r\n          </ng-template>\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n --><!--       <mat-card-content class=\"new-font\">\r\n        <div *ngIf=\"project.vacation_days === null; else exists_vacation\">\r\n          <app-vacations [vacationData]=\"[]\"></app-vacations>\r\n        </div>\r\n        <ng-template #exists_vacation>\r\n        <app-vacations [vacationData]=\"project.vacation_days\"></app-vacations>\r\n      </ng-template>\r\n -->        <!--\r\n        <div *ngIf=\"project.vacation_days != null\">\r\n          <app-vacations [vacationData]=\"project.vacation_days\"></app-vacations>\r\n        </div>\r\n        <div *ngIf=\"project.vacation_days == null\">\r\n          null\r\n        </div>\r\n      -->\r\n      <!-- </mat-card-content> -->\r\n<!--       <mat-card-content>\r\n        <app-advanced-settings [open_status]=\"project.open_status\" [grace_period]=\"project.grace_period\"></app-advanced-settings>\r\n      </mat-card-content>\r\n -->    "

/***/ }),

/***/ "./src/app/components/users-view/projects-view/projects-view.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/users-view/projects-view/projects-view.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProjectsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsViewComponent", function() { return ProjectsViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_etabot_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/etabot-api.service */ "./src/app/services/etabot-api.service.ts");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth-service.service */ "./src/app/services/auth-service.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_jira_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/jira.service */ "./src/app/services/jira.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let ProjectsViewComponent = class ProjectsViewComponent {
    // isLoggedInStatus = false;
    // panelOpenState = false;
    constructor(etabotAPI, tms_service, authService, http, titleService) {
        this.etabotAPI = etabotAPI;
        this.tms_service = tms_service;
        this.authService = authService;
        this.http = http;
        this.titleService = titleService;
        this.gotProjects = false;
        this.defaultTimeZone = 'GMT +7';
        this.showAdvancedSetting = false;
        this.tmss_by_id = {};
        this.etabotAPI.get_real_projects();
        etabotAPI.projects.subscribe(success => {
            data => this.setProjects(data);
        }, error => {
            console.log("error occured");
            console.log(error);
        });
        etabotAPI.projects.subscribe(success => {
            change => this.setGotProjects();
        }, error => {
            console.log("error occured");
            console.log(error);
        });
        tms_service.get_tms().subscribe(success => {
            console.log("successfully subscribed");
        }, error => {
            this.error_retrieving = true;
            console.log("error retrieving");
        });
        tms_service.tmss.subscribe(success => {
            data => this.setTmss(data);
        }, error => {
            console.log("error occured");
            console.log(error);
        });
    }
    setTmss(data) {
        console.log('saving TMS data');
        Object.entries(data).forEach(([key, tms]) => {
            console.log(tms);
            this.tmss_by_id[tms['id']] = tms;
        });
    }
    setProjects(data) {
        this.realProjects = data;
    }
    setGotProjects() {
        this.projectsReceived = true;
    }
    ngOnInit() {
        this.titleService.setTitle('Your projects');
    }
    setTimeZone(receivedTimeZone) {
        this.timeZone = receivedTimeZone;
    }
    estimate_all_projects() {
        console.log('updating all projects: ' + typeof (this.realProjects) + this.realProjects);
        Object.entries(this.realProjects).forEach(([key, value]) => {
            value['eta_in_progress'] = true;
            this.etabotAPI.estimate(value);
        });
    }
};
ProjectsViewComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-projects-view',
        template: __webpack_require__(/*! ./projects-view.component.html */ "./src/app/components/users-view/projects-view/projects-view.component.html"),
        styles: [__webpack_require__(/*! ./projects-view.component.css */ "./src/app/components/users-view/projects-view/projects-view.component.css")]
    }),
    __metadata("design:paramtypes", [_services_etabot_api_service__WEBPACK_IMPORTED_MODULE_1__["EtabotApiService"],
        _services_jira_service__WEBPACK_IMPORTED_MODULE_5__["JiraService"],
        _services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
], ProjectsViewComponent);



/***/ }),

/***/ "./src/app/components/users-view/users-view.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/users-view/users-view.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group input[type=text]:focus {\r\n     border-bottom: 1px solid #1a237e;\r\n     box-shadow: 0 1px 0 0 #1a237e;\r\n}\r\n\r\n.form-group input[type=password]:focus {\r\n     border-bottom: 1px solid #1a237e;\r\n     box-shadow: 0 1px 0 0 #1a237e;\r\n}\r\n\r\nh1 {\r\n    font-family: 'Julius Sans One', sans-serif;\r\n    font-weight: normal;\r\n}\r\n\r\n.new-font {\r\n    font-family: 'Josefin Sans', sans-serif;\r\n    font-size: 20px;\r\n}\r\n\r\n.container {\r\n  display: flex; /* or inline-flex */\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  font-size: 16px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy12aWV3L3VzZXJzLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtLQUNLLGdDQUFnQztLQUNoQyw2QkFBNkI7QUFDbEM7O0FBRUE7S0FDSyxnQ0FBZ0M7S0FDaEMsNkJBQTZCO0FBQ2xDOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxlQUFlO0FBQ25COztBQUVBO0VBQ0UsYUFBYSxFQUFFLG1CQUFtQjtFQUNsQyxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJzLXZpZXcvdXNlcnMtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxYTIzN2U7XHJcbiAgICAgYm94LXNoYWRvdzogMCAxcHggMCAwICMxYTIzN2U7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFhMjM3ZTtcclxuICAgICBib3gtc2hhZG93OiAwIDFweCAwIDAgIzFhMjM3ZTtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLm5ldy1mb250IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDsgLyogb3IgaW5saW5lLWZsZXggKi9cclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/users-view/users-view.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/users-view/users-view.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-card style=\"margin-left:500px; margin-top: 82px; margin-right: 500px;\"> -->\r\n<mat-card class=\"sign-login-card\">\r\n  <mat-card-title style=\"text-align: left; margin-bottom: 70px; \">\r\n    <h1>Log in</h1>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n  <div *ngIf=\"newUser == true\" class=\"alert alert-success\">Your account has been confirmed.</div>\r\n  <div *ngIf=\"loading == false\" class=\"alert alert-danger\">Error occurred {{ error_message }}</div>\r\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n      <label for=\"username\" class=\"new-font\" style=\"font-size: 20px;\">Email</label>\r\n      <input type=\"text\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required style=\"font-size: 18px;\" class=\"new-font\" />\r\n      <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block new-font\">Email is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n      <label for=\"password\" class=\"new-font\" style=\"font-size: 20px;\">Password</label>\r\n      <input type=\"password\" class=\"form-control new-font\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required style=\"font-size: 18px;\" />\r\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block new-font\">Password is required</div>\r\n    </div>\r\n    <div class=\"form-group\" style=\"margin-bottom: 56px;\">\r\n      <button [disabled]=\"loading\" mat-raised-button color=\"accent\" class=\"new-font\" style=\"font-size: 20px; width: 100px; height: 44px;\">Log in</button>\r\n    </div>\r\n  </form>\r\n  </mat-card-content>\r\n  <mat-card-content>\r\n    <div class=\"container\">\r\n        <div fxFlex>\r\n            <label style=\"font-size: 16px;\">Don't have an account?</label><br>\r\n            <a [routerLink]=\"['/signup']\">Sign Up</a>\r\n        </div>\r\n        <div fxFlex> \r\n            <a href = '/account/password_reset/'>Forgot password?</a>\r\n        </div>\r\n      </div>\r\n\r\n    </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/users-view/users-view.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/users-view/users-view.component.ts ***!
  \***************************************************************/
/*! exports provided: UsersViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersViewComponent", function() { return UsersViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_etabot_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/etabot-api.service */ "./src/app/services/etabot-api.service.ts");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth-service.service */ "./src/app/services/auth-service.service.ts");
/* harmony import */ var _services_jira_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/jira.service */ "./src/app/services/jira.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let UsersViewComponent = class UsersViewComponent {
    constructor(etabotAPI, router, authService, titleService, jiraService) {
        this.etabotAPI = etabotAPI;
        this.router = router;
        this.authService = authService;
        this.titleService = titleService;
        this.jiraService = jiraService;
        this.error = '';
        this.model = {};
        this.newUser = false;
    }
    ngOnInit() {
        this.returnUrl = '/jira';
        this.titleService.setTitle('ETAbot Log In');
        if (localStorage.getItem('newUser') === 'true') {
            this.newUser = true;
            localStorage.removeItem('newUser');
        }
    }
    login() {
        this.loading = true;
        console.log('logging in...');
        this.authService.login(this.model.username, this.model.password)
            .subscribe(success => {
            this.jiraService.get_tms()
                .subscribe(success => {
                console.log('redirecting to projects');
                this.router.navigate(['/projects']);
            }, error => {
                console.log('get_tms() error occurred - redirecting to: ' + this.returnUrl);
                this.router.navigate([this.returnUrl]);
            });
        }, error => {
            console.log('authService.login error: ' + error);
            this.error_message = error + '; \n' + error._body;
            this.loading = false;
        });
    }
};
UsersViewComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-users-view',
        template: __webpack_require__(/*! ./users-view.component.html */ "./src/app/components/users-view/users-view.component.html"),
        styles: [__webpack_require__(/*! ./users-view.component.css */ "./src/app/components/users-view/users-view.component.css")]
    }),
    __metadata("design:paramtypes", [_services_etabot_api_service__WEBPACK_IMPORTED_MODULE_1__["EtabotApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"],
        _services_jira_service__WEBPACK_IMPORTED_MODULE_3__["JiraService"]])
], UsersViewComponent);



/***/ }),

/***/ "./src/app/project.ts":
/*!****************************!*\
  !*** ./src/app/project.ts ***!
  \****************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
class Project {
    constructor(project_json) {
        this.velocity_available = false;
        this.project_json = project_json;
        this.settings = project_json.project_settings;
        this.name = project_json.name;
        if (project_json.velocities) {
            this.velocity = project_json.velocities.mean;
        }
        if (this.velocity) {
            this.velocity_available = true;
        }
        this.get_scope_field_name();
        this.get_sprint_field_name();
        console.log('Project inited with settings: ' + this.settings + 'project_json.velocities: ' + project_json.velocities + 'velocity: ' + this.velocity + 'velocity_available ' + this.velocity_available);
    }
    get_scope_field_name() {
        if (!!this.settings &&
            !!this.settings.scope_field_name_message &&
            !!this.settings.scope_field_name_message.scope_field_name) {
            this.scope_field_name = this.settings.scope_field_name_message.scope_field_name;
            this.scope_ui_message = this.settings.scope_field_name_message.ui_message;
        }
        else {
            this.scope_field_name = null;
            this.scope_ui_message = 'Could not find scope (storypoints) in your data. \
          If you do use it, please let us know at <a href="mailto:hello@etabot.ai">hello@etabot.ai</a> \
          so we can fix it. In a meantime, we assume each task has about the same scope.';
        }
        return this.scope_field_name;
    }
    get_sprint_field_name() {
        if (!!this.settings &&
            !!this.settings.sprint_field_name) {
            this.sprint_field_name = this.settings.sprint_field_name;
        }
        else {
            this.sprint_field_name = null;
        }
        return this.sprint_field_name;
    }
}


/***/ }),

/***/ "./src/app/routes/app.routing.ts":
/*!***************************************!*\
  !*** ./src/app/routes/app.routing.ts ***!
  \***************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/introduction/introduction.component */ "./src/app/components/introduction/introduction.component.ts");
/* harmony import */ var _components_users_view_projects_view_projects_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/users-view/projects-view/projects-view.component */ "./src/app/components/users-view/projects-view/projects-view.component.ts");
/* harmony import */ var _components_users_view_users_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/users-view/users-view.component */ "./src/app/components/users-view/users-view.component.ts");
/* harmony import */ var _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/register-page/register-page.component */ "./src/app/components/register-page/register-page.component.ts");
/* harmony import */ var _components_register_page_verification_view_verification_pending_verification_pending_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/register-page/verification-view/verification-pending/verification-pending.component */ "./src/app/components/register-page/verification-view/verification-pending/verification-pending.component.ts");
/* harmony import */ var _components_register_page_verification_view_verification_activate_verification_activate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/register-page/verification-view/verification-activate/verification-activate.component */ "./src/app/components/register-page/verification-view/verification-activate/verification-activate.component.ts");
/* harmony import */ var _components_jira_credentials_jira_credentials_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/jira-credentials/jira-credentials.component */ "./src/app/components/jira-credentials/jira-credentials.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth_guard/auth.guard */ "./src/app/auth_guard/auth.guard.ts");
/* harmony import */ var _components_need_sign_up_token_need_sign_up_token_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/need-sign-up-token/need-sign-up-token.component */ "./src/app/components/need-sign-up-token/need-sign-up-token.component.ts");
/* harmony import */ var _components_jira_issue_collector_jira_issue_collector_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/jira-issue-collector/jira-issue-collector.component */ "./src/app/components/jira-issue-collector/jira-issue-collector.component.ts");
/* harmony import */ var _components_tms_list_tms_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/tms-list/tms-list.component */ "./src/app/components/tms-list/tms-list.component.ts");







// import { AboutViewComponent } from '../components/about-view/about-view.component';
// import { ContactViewComponent } from '../components/contact-view/contact-view.component';

// import { MobileWarningComponent } from '../components/mobile-warning/mobile-warning.component';





const appRoutes = [
    {
        path: 'intro',
        component: _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_1__["IntroductionComponent"]
    },
    {
        path: 'projects',
        canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        component: _components_users_view_projects_view_projects_view_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsViewComponent"]
    },
    {
        path: 'tmss',
        canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        component: _components_tms_list_tms_list_component__WEBPACK_IMPORTED_MODULE_12__["TmsListComponent"]
    },
    {
        path: 'login',
        component: _components_users_view_users_view_component__WEBPACK_IMPORTED_MODULE_3__["UsersViewComponent"]
    },
    {
        path: 'signup/:token',
        component: _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__["RegisterPageComponent"]
    },
    {
        path: 'signup',
        component: _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__["RegisterPageComponent"]
    },
    {
        path: 'verification/pending',
        component: _components_register_page_verification_view_verification_pending_verification_pending_component__WEBPACK_IMPORTED_MODULE_5__["VerificationPendingComponent"]
    },
    {
        path: 'verification/activate/:token',
        component: _components_register_page_verification_view_verification_activate_verification_activate_component__WEBPACK_IMPORTED_MODULE_6__["VerificationActivateComponent"]
    },
    {
        path: 'need_sign_up_token',
        component: _components_need_sign_up_token_need_sign_up_token_component__WEBPACK_IMPORTED_MODULE_10__["NeedSignUpTokenComponent"]
    },
    {
        path: 'issue_collector',
        component: _components_jira_issue_collector_jira_issue_collector_component__WEBPACK_IMPORTED_MODULE_11__["JiraIssueCollectorComponent"]
    },
    // {
    //   path: 'about',
    //   component: AboutViewComponent
    // },
    // {
    //   path: 'contact',
    //   component: ContactViewComponent
    // },
    {
        path: 'jira',
        //canActivate: [AuthGuard],
        component: _components_jira_credentials_jira_credentials_component__WEBPACK_IMPORTED_MODULE_7__["JiraCredentialsComponent"]
    },
    // {
    //   path: 'mobile',
    //   component: MobileWarningComponent
    // },
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]
    }
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: false, enableTracing: true });


/***/ }),

/***/ "./src/app/services/auth-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/auth-service.service.ts ***!
  \**************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';



let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.getLoggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // var loggedIn = JSON.parse(localStorage.getItem('currentUser'))
    // this.token = loggedIn && loggedIn.token;
    construct_options() {
        const loggedIn = JSON.parse(localStorage.getItem('currentUser'));
        this.token = loggedIn && loggedIn.token;
        console.log('token is ' + this.token);
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
        headers.append('Authorization', `Token ${this.token}`);
        const options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: headers
        });
        return options;
    }
    login(username, password) {
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
        const options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: headers
        });
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'get-token/', JSON.stringify({ username: username, password: password }), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            const user = response.json();
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('username', username);
                this.token = user.token;
                this.getLoggedIn.emit(true);
                return true;
            }
            else {
                console.log('get-token response: ' + response);
                console.log('get-token response json: ' + response.json());
                this.getLoggedIn.emit(false);
                return false;
            }
        }));
    }
    logout() {
        this.token = null;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('username');
        this.getLoggedIn.emit(false);
        this.router.navigate(['/']);
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], AuthService.prototype, "getLoggedIn", void 0);
AuthService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AuthService);



/***/ }),

/***/ "./src/app/services/etabot-api.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/etabot-api.service.ts ***!
  \************************************************/
/*! exports provided: EtabotApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtabotApiService", function() { return EtabotApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-service.service */ "./src/app/services/auth-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {Observable} from 'rxjs/Rx';


let EtabotApiService = class EtabotApiService {
    constructor(http, authService) {
        // depending on the environment (e.g. production or local) api end point could be different
        // this.service_api_end_point = environment.apiUrl;
        this.http = http;
        this.authService = authService;
        this.loginCheck = false;
        this.projects = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.projectsReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        authService.getLoggedIn.subscribe(response => this.logInChange(response));
    }
    logInChange(response) {
        this.loginCheck = true;
        console.log('logInChange response: ' + response);
        console.log('authService.token: ' + this.authService.token);
    }
    get_real_projects() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'projects/', this.authService.construct_options())
            .subscribe((response) => {
            if (response.status === 200) {
                const res = response.json();
                // Object.entries(res).forEach(
                //     ([key, value]) => {
                //         // value['velocities'] = value['velocities']['mean'];
                //         console.log(typeof(value['velocities']) + value['velocities']);
                //         console.log(typeof(value['work_hours']) + value['work_hours']);
                //         // console.log(key + typeof(JSON.parse(value['velocities'].replace("'","\""))));
                //     });
                console.log('get_real_projects 200 response status: '
                    + response.status
                    + 'json: '
                    + JSON.stringify(res));
                this.projects.emit(res);
                this.projectsReceived.emit(true);
                return true;
            }
            else if (response.status == 500) {
                console.log("internal server error occured");
                console.log('get_real_projects non-200 response status ' + response.status);
                return false;
            }
            else {
                console.log("fatal error");
                return false;
            }
        });
    }
    estimate(project) {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'estimate/';
        if (project.project_tms_id != null) {
            url = url + '?tms=' + project.project_tms_id;
            if (project.id != null) {
                url = url + '&project_id=' + project.id;
            }
        }
        console.log('url: ' + url);
        const json_params = JSON.stringify({ params: {
                include_active_sprints: project.include_active_sprints,
                include_future_sprints: project.include_future_sprints,
                include_backlog: project.include_backlog
            }
        });
        console.log('json_params: ' + json_params);
        return this.http.post(url, json_params, this.authService.construct_options()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            console.log('Response: ' + _angular_http__WEBPACK_IMPORTED_MODULE_1__["Response"]);
            project['eta_in_progress'] = false;
            if (String(response.status) === '201') {
                console.log('estimate get returns 201');
                return true;
            }
            else {
                console.log('estimate get returns not 201');
                return false;
            }
        })).subscribe(success => {
            console.log('estimate success');
            project['error_message'] = null;
            project['last_updated'] = Date.now();
            project['result_message'] = 'ETAs update started!';
        }, error => {
            console.log('estimate error' + error);
            project['error_message'] = error;
            project['eta_in_progress'] = false;
            project['result_message'] = null;
        });
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], EtabotApiService.prototype, "projects", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], EtabotApiService.prototype, "projectsReceived", void 0);
EtabotApiService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
        _auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], EtabotApiService);



/***/ }),

/***/ "./src/app/services/jira.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/jira.service.ts ***!
  \******************************************/
/*! exports provided: JiraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JiraService", function() { return JiraService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-service.service */ "./src/app/services/auth-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let JiraService = class JiraService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.tmss = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.service_api_end_point = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    add_tms(owner, tms_url, email, password) {
        console.log('tms_url:' + tms_url);
        const type = 'JI';
        const jiraObject = JSON.stringify({ endpoint: tms_url,
            username: email,
            password: password,
            type: type,
            connectivity_status: 'not tested.' });
        return this.http.post(this.service_api_end_point + 'tms/', jiraObject, this.authService.construct_options())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            if (String(response.status) === '201') {
                return true;
            }
            else {
                return false;
            }
        }));
    }
    get_tms() {
        console.log('started get_tms');
        return this.http.get(this.service_api_end_point + 'tms/', this.authService.construct_options())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            const res = response.json();
            console.log('get_tms response: ' + res);
            if (res.length === 0) {
                throw new Error('user does not have TMS accounts');
            }
            else {
                console.log('number of TMS accounts found: ' + res.length);
                console.log('emitting tmss');
                this.tmss.emit(res);
                console.log('done emitting tmss');
                return res.length;
            }
        }));
    }
    delete_tms(tms_id) {
        return this.http.delete(this.service_api_end_point + 'tms/' + tms_id + '/', this.authService.construct_options())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            const res = response.json();
            console.log(res);
        }));
    }
    parse_projects(tms_id) {
        console.log('started parse_projects with tms_id ' + tms_id);
        // const params = JSON.stringify(
        //     {tms: tms_id});
        // console.log('params: ' + params);
        return this.http.get(this.service_api_end_point + 'parse_projects/?tms=' + tms_id, this.authService.construct_options())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            const res = response.json();
            console.log('parse_projects response: ' + res);
        }));
    }
    patch_username_password_tms(tms_id, username, password) {
        const jiraObject = JSON.stringify({ username: username,
            password: password });
        return this.http.patch(this.service_api_end_point + 'tms/' + tms_id + '/', jiraObject, this.authService.construct_options())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            const res = response.json();
            console.log(res);
        }));
    }
    parse_error(error) {
        let error_message = String(error._body);
        if (String(error.status) === '400') {
            if (error._body.includes('Unauthorized (401)') || error._body.includes('cannot connnect to TMS')) {
                error_message = 'Cannot connect - please check address, combination of username/email and password, and try again.';
            }
            else {
                if (error._body.includes('already exists for this user')) {
                    error_message = 'This username and team name already exist in your account. \
Please enter another one or edit your existing one in projects screen.';
                }
                else if (error._body.includes('Need to pass CAPTCHA challenge first.')) {
                    const error_obj = JSON.parse(error._body);
                    console.log(error_obj);
                    console.log(error_obj.non_field_errors);
                    error_message = error_obj.non_field_errors[0];
                }
                else {
                    error_message = 'Bad request (4xx) - Cannot connnect - please check\
 all inputs and try again. If the issue persists, please report the issue to \
 hello@etabot.ai';
                }
            }
        }
        console.log(error);
        return error_message;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], JiraService.prototype, "tmss", void 0);
JiraService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
        _auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], JiraService);



/***/ }),

/***/ "./src/app/services/sign-up.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/sign-up.service.ts ***!
  \*********************************************/
/*! exports provided: SignUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpService", function() { return SignUpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let SignUpService = class SignUpService {
    constructor(http) {
        this.http = http;
        this.getRegisteredStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.verificationResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.signUpSuccess = true;
        this.service_api_end_point = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    signup(username, email, password) {
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
        const options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: headers
        });
        const userObject = JSON.stringify({ username: username, password: password, email: email });
        return this.http.post(this.service_api_end_point + 'users/', userObject, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            if (String(response.status) === '201') {
                console.log('users/ POST response is 201:');
                console.log(response);
                localStorage.setItem('email', email);
                this.getRegisteredStatus.emit(true);
                // let user = response.json();
                // console.log("sign up token is " + user.token);
                return true;
            }
            else {
                console.log('users/ POST response is not 201:');
                console.log(response);
                this.getRegisteredStatus.emit(false);
                return false;
            }
        }));
    }
    activate(token) {
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
        const options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: headers
        });
        console.log('generating http post request with token: "' + token + '"');
        const tokenObject = JSON.stringify({ 'token': token });
        console.log('generating http post request with tokenObject: "' + tokenObject + '"');
        return this.http.post(this.service_api_end_point + 'verification/activate/', tokenObject, options)
            .subscribe((response) => {
            console.log(response);
            const res = response.json();
            if (response.status === 200) {
                console.log('verfication/activate 200 response status: ' +
                    response.status +
                    'json: ' +
                    JSON.stringify(res));
                const newUser = true;
                localStorage.setItem('newUser', String(newUser));
                this.verificationResponse.emit(res);
                return true;
            }
            else {
                console.log('verfication/activate non-200 response status ' + response.status);
                this.verificationResponse.emit(res);
                return true;
            }
        }, err => {
            console.log('error in verification/activate/:' + err);
            this.verificationResponse.emit(JSON.parse(err._body));
            return false;
        });
    }
    signupSuccess() {
        return this.signUpSuccess;
    }
    handleError(error) {
        console.error('error:');
        console.error(error);
        console.error('end of error');
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], SignUpService.prototype, "getRegisteredStatus", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], SignUpService.prototype, "verificationResponse", void 0);
SignUpService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
], SignUpService);



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:8000/api/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mishabehey/Desktop/Work/etabot-frontend/etabot-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map