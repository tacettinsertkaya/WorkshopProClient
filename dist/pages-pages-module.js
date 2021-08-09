(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/models/dto/retro-reset.ts":
/*!*******************************************!*\
  !*** ./src/app/models/dto/retro-reset.ts ***!
  \*******************************************/
/*! exports provided: RetroReset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetroReset", function() { return RetroReset; });
/* harmony import */ var _group_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-filter */ "./src/app/models/dto/group-filter.ts");

var RetroReset = /** @class */ (function () {
    function RetroReset() {
        this.filter = new _group_filter__WEBPACK_IMPORTED_MODULE_0__["GroupFilter"]();
        this.users = [];
    }
    return RetroReset;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.routing */ "./src/app/pages/pages.routing.ts");
/* harmony import */ var _retro_start_retro_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retro-start/retro-start.component */ "./src/app/pages/retro-start/retro-start.component.ts");
/* harmony import */ var _retro_subject_retro_subject_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./retro-subject/retro-subject.component */ "./src/app/pages/retro-subject/retro-subject.component.ts");
/* harmony import */ var _retro_template_retro_template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./retro-template/retro-template.component */ "./src/app/pages/retro-template/retro-template.component.ts");
/* harmony import */ var _retro_brainstorm_retro_brainstorm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./retro-brainstorm/retro-brainstorm.component */ "./src/app/pages/retro-brainstorm/retro-brainstorm.component.ts");
/* harmony import */ var _retro_comment_retro_comment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./retro-comment/retro-comment.component */ "./src/app/pages/retro-comment/retro-comment.component.ts");
/* harmony import */ var _retro_categorize_retro_categorize_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./retro-categorize/retro-categorize.component */ "./src/app/pages/retro-categorize/retro-categorize.component.ts");
/* harmony import */ var _retro_vote_retro_vote_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./retro-vote/retro-vote.component */ "./src/app/pages/retro-vote/retro-vote.component.ts");
/* harmony import */ var _retro_report_retro_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./retro-report/retro-report.component */ "./src/app/pages/retro-report/retro-report.component.ts");
/* harmony import */ var app_shared_subject_header_subject_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/shared/subject-header/subject-header.component */ "./src/app/shared/subject-header/subject-header.component.ts");
/* harmony import */ var app_shared_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/shared/tab-header/tab-header.component */ "./src/app/shared/tab-header/tab-header.component.ts");
/* harmony import */ var app_services_company_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var app_services_template_detail_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/services/template-detail.service */ "./src/app/services/template-detail.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var app_services_template_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/services/template.service */ "./src/app/services/template.service.ts");
/* harmony import */ var app_services_subject_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var app_services_shared_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var app_services_comment_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var app_services_category_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var app_services_hub_retro_hub_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! app/services/hub/retro-hub.service */ "./src/app/services/hub/retro-hub.service.ts");
/* harmony import */ var app_services_hub_user_hub_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! app/services/hub/user-hub.service */ "./src/app/services/hub/user-hub.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var app_app_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! app/app.module */ "./src/app/app.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_pages_routing__WEBPACK_IMPORTED_MODULE_4__["PagesRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__["TranslateLoader"],
                        useFactory: app_app_module__WEBPACK_IMPORTED_MODULE_26__["HttpLoaderFactory"],
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"]]
                    }
                })
            ],
            declarations: [
                _retro_start_retro_start_component__WEBPACK_IMPORTED_MODULE_5__["RetroStartComponent"],
                _retro_subject_retro_subject_component__WEBPACK_IMPORTED_MODULE_6__["RetroSubjectComponent"],
                _retro_template_retro_template_component__WEBPACK_IMPORTED_MODULE_7__["RetroTemplateComponent"],
                _retro_brainstorm_retro_brainstorm_component__WEBPACK_IMPORTED_MODULE_8__["RetroBrainstormComponent"],
                _retro_comment_retro_comment_component__WEBPACK_IMPORTED_MODULE_9__["RetroCommentComponent"],
                _retro_categorize_retro_categorize_component__WEBPACK_IMPORTED_MODULE_10__["RetroCategorizeComponent"],
                _retro_vote_retro_vote_component__WEBPACK_IMPORTED_MODULE_11__["RetroVoteComponent"],
                _retro_report_retro_report_component__WEBPACK_IMPORTED_MODULE_12__["RetroReportComponent"],
                app_shared_subject_header_subject_header_component__WEBPACK_IMPORTED_MODULE_13__["SubjectHeaderComponent"],
                app_shared_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_14__["TabHeaderComponent"],
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"],
                app_services_template_service__WEBPACK_IMPORTED_MODULE_18__["TemplateService"],
                app_services_subject_service__WEBPACK_IMPORTED_MODULE_19__["SubjectsService"],
                app_services_comment_service__WEBPACK_IMPORTED_MODULE_21__["CommentService"],
                app_services_shared_service__WEBPACK_IMPORTED_MODULE_20__["SharedService"],
                app_services_category_service__WEBPACK_IMPORTED_MODULE_22__["CategoryService"],
                app_services_template_detail_service__WEBPACK_IMPORTED_MODULE_16__["TemplateDetailService"],
                app_services_company_service__WEBPACK_IMPORTED_MODULE_15__["CompanyService"],
                app_services_hub_retro_hub_service__WEBPACK_IMPORTED_MODULE_23__["RetroHubService"],
                app_services_hub_user_hub_service__WEBPACK_IMPORTED_MODULE_24__["UserHubService"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routing.ts":
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/*! exports provided: PagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutes", function() { return PagesRoutes; });
/* harmony import */ var _retro_brainstorm_retro_brainstorm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retro-brainstorm/retro-brainstorm.component */ "./src/app/pages/retro-brainstorm/retro-brainstorm.component.ts");
/* harmony import */ var _retro_categorize_retro_categorize_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retro-categorize/retro-categorize.component */ "./src/app/pages/retro-categorize/retro-categorize.component.ts");
/* harmony import */ var _retro_comment_retro_comment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./retro-comment/retro-comment.component */ "./src/app/pages/retro-comment/retro-comment.component.ts");
/* harmony import */ var _retro_report_retro_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retro-report/retro-report.component */ "./src/app/pages/retro-report/retro-report.component.ts");
/* harmony import */ var _retro_start_retro_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./retro-start/retro-start.component */ "./src/app/pages/retro-start/retro-start.component.ts");
/* harmony import */ var _retro_subject_retro_subject_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retro-subject/retro-subject.component */ "./src/app/pages/retro-subject/retro-subject.component.ts");
/* harmony import */ var _retro_template_retro_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./retro-template/retro-template.component */ "./src/app/pages/retro-template/retro-template.component.ts");
/* harmony import */ var _retro_vote_retro_vote_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./retro-vote/retro-vote.component */ "./src/app/pages/retro-vote/retro-vote.component.ts");








var PagesRoutes = [{
        path: '',
        children: [
            {
                path: 'start',
                component: _retro_start_retro_start_component__WEBPACK_IMPORTED_MODULE_4__["RetroStartComponent"]
            },
            {
                path: 'subject',
                component: _retro_subject_retro_subject_component__WEBPACK_IMPORTED_MODULE_5__["RetroSubjectComponent"]
            },
            {
                path: 'template',
                component: _retro_template_retro_template_component__WEBPACK_IMPORTED_MODULE_6__["RetroTemplateComponent"]
            },
            {
                path: 'brainstorm',
                component: _retro_brainstorm_retro_brainstorm_component__WEBPACK_IMPORTED_MODULE_0__["RetroBrainstormComponent"]
            },
            {
                path: 'categorize',
                component: _retro_categorize_retro_categorize_component__WEBPACK_IMPORTED_MODULE_1__["RetroCategorizeComponent"]
            },
            {
                path: 'comment',
                component: _retro_comment_retro_comment_component__WEBPACK_IMPORTED_MODULE_2__["RetroCommentComponent"]
            },
            {
                path: 'vote',
                component: _retro_vote_retro_vote_component__WEBPACK_IMPORTED_MODULE_7__["RetroVoteComponent"]
            },
            {
                path: 'report',
                component: _retro_report_retro_report_component__WEBPACK_IMPORTED_MODULE_3__["RetroReportComponent"]
            }
        ]
    }];


/***/ }),

/***/ "./src/app/pages/retro-brainstorm/retro-brainstorm.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/retro-brainstorm/retro-brainstorm.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JldHJvLWJyYWluc3Rvcm0vcmV0cm8tYnJhaW5zdG9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/retro-brainstorm/retro-brainstorm.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/retro-brainstorm/retro-brainstorm.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-tab-header></app-tab-header>\r\n<app-subject-header></app-subject-header>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"d-flex justify-content-end\" *ngIf=\"retroRight != null\">\r\n  <span class=\"pill-title text-bold\" [ngClass]=\"retroRight.ideaRight > 0 ? 'text-success' : 'text-danger'\">\r\n    {{ 'retro_brainstrom.number_of_idea_Rights' | translate }} : {{retroRight.ideaRight}} </span>\r\n</div>\r\n<div #divView>\r\n\r\n</div>\r\n<div class=\"row mt-5\">\r\n  <div class=\"mobile-brainstorm\"\r\n    [ngClass]=\"{'col-xl-2':template.templateDetail.length>6, 'col':template.templateDetail.length<=6}\"\r\n\r\n    *ngFor=\"let detail of template.templateDetail; let i = index\">\r\n\r\n    <h5 class=\"mt-2\" *ngIf=\"\r\n      template.templateDetail.length >= 1 &&\r\n      template.templateDetail[0].header != ''\r\n    \"> {{ detail.header }}</h5>\r\n    <div class=\"card card-theme card-theme--warning card-custom-borderless\">\r\n      <div class=\"card-body p-0\">\r\n        <div class=\"form-group mb-0\">\r\n          <textarea [disabled]=\"retroRight.ideaRight <= 0 \" style=\"height: auto !important;resize: none;border:none;\"\r\n            rows=\"3\" class=\"form-control  card-theme--warning scroll\" [(ngModel)]=\"inputText[detail.id]\"\r\n            (keydown.enter)=\"sendMessage(detail.id)\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div *ngFor=\"let msg of messages\">\r\n      <div >\r\n\r\n\r\n        <div class=\"card card-theme box-shadow-sm mt-3 \" *ngIf=\"msg.clientuniqueid == detail.id\">\r\n          <div class=\"card-description\">\r\n            {{ msg.messageText }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/retro-brainstorm/retro-brainstorm.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/retro-brainstorm/retro-brainstorm.component.ts ***!
  \**********************************************************************/
/*! exports provided: RetroBrainstormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetroBrainstormComponent", function() { return RetroBrainstormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/message */ "./src/app/models/message.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_services_template_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/template.service */ "./src/app/services/template.service.ts");
/* harmony import */ var app_models_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/models/template */ "./src/app/models/template.ts");
/* harmony import */ var app_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var app_models_retro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/models/retro */ "./src/app/models/retro.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_models_userRight__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/models/userRight */ "./src/app/models/userRight.ts");
/* harmony import */ var app_services_retro_configuration__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/services/retro-configuration */ "./src/app/services/retro-configuration.ts");
/* harmony import */ var app_services_alertify_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var app_helpers_firebase_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/helpers/firebase-helper */ "./src/app/helpers/firebase-helper.ts");
/* harmony import */ var app_services_subject_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/services/subject.service */ "./src/app/services/subject.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var RetroBrainstormComponent = /** @class */ (function () {
    function RetroBrainstormComponent(chatService, _ngZone, retroService, messageService, authService, alertifyService, templateService, sharedService, router, subjectService, configureService) {
        var _this = this;
        this.chatService = chatService;
        this._ngZone = _ngZone;
        this.retroService = retroService;
        this.messageService = messageService;
        this.authService = authService;
        this.alertifyService = alertifyService;
        this.templateService = templateService;
        this.sharedService = sharedService;
        this.router = router;
        this.subjectService = subjectService;
        this.configureService = configureService;
        this.title = "ClientApp";
        this.txtMessage = "";
        this.uniqueID = new Date().getTime().toString();
        this.messages = new Array();
        this.message = new _models_message__WEBPACK_IMPORTED_MODULE_2__["Message"]();
        this.inputText = {};
        this.template = new app_models_template__WEBPACK_IMPORTED_MODULE_6__["Template"]();
        this.isUser = false;
        this.retroRight = new app_models_userRight__WEBPACK_IMPORTED_MODULE_11__["UserRight"]();
        this.retroId = '';
        this.isDisabled = false;
        firebase__WEBPACK_IMPORTED_MODULE_15__["default"].database().ref('messages/').on('value', function (resp) {
            if (_this.currentRetro) {
                var data = Object(app_helpers_firebase_helper__WEBPACK_IMPORTED_MODULE_16__["snapshotToArray"])(resp);
                var messages = data.find(function (x) { return x.retroId === _this.currentRetro.id; });
                if (messages !== undefined) {
                    _this.messages = messages;
                    // this.sortedlist();
                }
            }
        });
    }
    RetroBrainstormComponent.prototype.ngOnInit = function () {
        this.existUser();
        this.retroId = this.authService.currentRetroIdValue;
        if (this.retroId) {
            this.getLastCurrentRetro(this.retroId);
        }
    };
    RetroBrainstormComponent.prototype.existUser = function () {
        this.isUser = this.authService.hasRole("Member");
    };
    RetroBrainstormComponent.prototype.getLastCurrentRetro = function (retroId) {
        var _this = this;
        this.configureService
            .getCurrentRetro(retroId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            _this.currentRetro = res;
            if (_this.currentRetro) {
                _this.getRetroSubject(_this.currentRetro.id);
                _this.getTemplate(_this.currentRetro.templateId);
                _this.getUserRight(_this.currentRetro.id);
            }
        }, function (error) {
        });
    };
    RetroBrainstormComponent.prototype.getFirebaseMessage = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_15__["default"].database().ref('messages/').on('value', function (resp) {
            var data = Object(app_helpers_firebase_helper__WEBPACK_IMPORTED_MODULE_16__["snapshotToArray"])(resp);
            var messages = data.filter(function (x) { return x.retroId === _this.currentRetro.id; });
            if (messages !== undefined) {
                _this.messages = messages.reverse();
            }
        });
    };
    RetroBrainstormComponent.prototype.getUserRight = function (retroId) {
        var _this = this;
        var retro = new app_models_retro__WEBPACK_IMPORTED_MODULE_9__["Retro"]();
        retro.id = retroId;
        retro.userId = this.authService.currentUserValue.userId;
        this.configureService
            .getUserRight(retro)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            _this.retroRight = res;
        }, function (error) {
        });
    };
    RetroBrainstormComponent.prototype.getRetroSubject = function (retroId) {
        var _this = this;
        this.subjectService
            .getRetroSubject(retroId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            _this.selectedSubject = res;
        }, function (error) {
        });
    };
    RetroBrainstormComponent.prototype.getTemplate = function (templateId) {
        var _this = this;
        this.templateService
            .getTemplate(templateId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.template = data;
            _this.getFirebaseMessage();
        }, function (error) { });
    };
    RetroBrainstormComponent.prototype.filterTrim = function (x) {
        return x.replace(/^\s+|\s+$/gm, "");
    };
    RetroBrainstormComponent.prototype.sendMessage = function (headerId) {
        var _this = this;
        var msg = this.inputText[headerId];
        if (this.filterTrim(msg) !== "") {
            var currentUser = this.authService.currentUserValue;
            this.message = new _models_message__WEBPACK_IMPORTED_MODULE_2__["Message"]();
            this.message.userId = currentUser.userId;
            this.message.clientuniqueid = headerId;
            this.message.type = "sent";
            this.message.messageText = msg;
            this.message.subjectId = this.selectedSubject.id;
            this.message.date = new Date();
            this.message.isCategorized = false;
            this.message.retroId = this.currentRetro.id;
            this.configureService.newMessage(this.message).subscribe(function (res) {
                _this.retroRight = res;
                _this.inputText[headerId] = "";
                var newMessage = firebase__WEBPACK_IMPORTED_MODULE_15__["default"].database().ref('messages/').push();
                newMessage.set(_this.message);
            });
        }
    };
    RetroBrainstormComponent.prototype.sortedlist = function () {
        this.messages.sort(function (a, b) {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("myDiv"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RetroBrainstormComponent.prototype, "divView", void 0);
    RetroBrainstormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-retro-brainstorm',
            template: __webpack_require__(/*! ./retro-brainstorm.component.html */ "./src/app/pages/retro-brainstorm/retro-brainstorm.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('slideDownUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])("* => *", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["query"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["stagger"])(500, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])("0.5s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ opacity: 0 }))])], {
                            optional: true
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["query"])(":enter", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["stagger"])(500, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])("0.5s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ opacity: 1 }))])
                        ], { optional: true })
                    ])
                ]),
            ],
            styles: [__webpack_require__(/*! ./retro-brainstorm.component.css */ "./src/app/pages/retro-brainstorm/retro-brainstorm.component.css")]
        }),
        __metadata("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            app_services_retro_configuration__WEBPACK_IMPORTED_MODULE_12__["RetroConfigurationService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            app_services_alertify_service__WEBPACK_IMPORTED_MODULE_13__["AlertifyService"],
            app_services_template_service__WEBPACK_IMPORTED_MODULE_5__["TemplateService"],
            app_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            app_services_subject_service__WEBPACK_IMPORTED_MODULE_17__["SubjectsService"],
            app_services_retro_configuration__WEBPACK_IMPORTED_MODULE_12__["RetroConfigurationService"]])
    ], RetroBrainstormComponent);
    return RetroBrainstormComponent;
}());



/***/ }),

/***/ "./src/app/pages/retro-categorize/retro-categorize.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/retro-categorize/retro-categorize.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body {\r\n    padding: 20px 10px;\r\n  }\r\n\r\n  .checkbox {\r\n    margin-right: 20px;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .messaje-list-title {\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .message-list {\r\n    margin: 10px 10px 10px 10px;\r\n  }\r\n\r\n  .categorized-title {\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n    margin-bottom: 10px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmV0cm8tY2F0ZWdvcml6ZS9yZXRyby1jYXRlZ29yaXplLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JldHJvLWNhdGVnb3JpemUvcmV0cm8tY2F0ZWdvcml6ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWJvZHkge1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNoZWNrYm94IHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAubWVzc2FqZS1saXN0LXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLm1lc3NhZ2UtbGlzdCB7XHJcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuY2F0ZWdvcml6ZWQtdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/retro-categorize/retro-categorize.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/retro-categorize/retro-categorize.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <app-tab-header></app-tab-header>\r\n<app-subject-header></app-subject-header>\r\n\r\n<div class=\"d-flex justify-content-end mt-3\">\r\n    <button *ngIf=\"!isUser\" (click)=\"selectMessage()\" class=\"btn btn-theme btn-vertical-padding btn-horizontal-padding\">{{ 'retro_categorize.categorize' | translate }}\r\n    </button>\r\n    \r\n  </div>\r\n  \r\n  \r\n  <div class=\"categories mt-5\">\r\n    <div class=\"category\" *ngFor=\"let tmp of template.templateDetail\" >\r\n      <h5   *ngIf=\"GetHeaderMessage(tmp.id).length>0\">{{tmp.header}}</h5>\r\n      <div class=\"card card-theme box-shadow-sm border-radius-lg mb-3\" *ngFor=\"let msg of GetHeaderMessage(tmp.id)\">\r\n        <div class=\"card-body p-2\" [ngClass]=\"{'disabled': isUser }\">\r\n  \r\n          <label class=\"checkbox-theme\">\r\n  \r\n  \r\n            <span class=\"checkbox-theme__pseudo-control\"></span>\r\n            <input *ngIf=\"!isUser\" [(ngModel)]=\"msg.isCategorized\" class=\"checkbox-theme__control\" type=\"checkbox\">\r\n            <span>\r\n              <i *ngIf=\"!isUser\" class=\"fa fa-check\"></i>\r\n              <span> {{ msg.messageText }} </span>\r\n            </span>\r\n  \r\n          </label>\r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n  \r\n  </div>\r\n\r\n  \r\n  \r\n  <div class=\"modal fade\" id=\"categoryModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\r\n    aria-hidden=\"true\">\r\n    <form #templateForm=\"ngForm\" (ngSubmit)=\"saveCategorized()\">\r\n      <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">{{'common.categorize' | translate}}</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            \r\n              <div class=\"form-group\">\r\n                <label class=\"categorized-title\">{{ 'retro_categorize.enter_title' | translate }}</label>\r\n                <input style=\"max-height: max-content\" rows=\"10\" class=\"form-control textarea\"\r\n                  [(ngModel)]=\"categorized.title\" [ngModelOptions]=\"{ standalone: true }\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n\r\n               \r\n                  <div *ngFor=\"let slct of selectedMessages\" class=\"mt-2\">\r\n                 \r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-12\">\r\n                        <div class=\"card\">\r\n                          <div class=\"card-header\">\r\n                            {{ slct.messageText }}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  \r\n                  </div>\r\n               \r\n              </div>\r\n            \r\n          </div>\r\n          <div class=\"modal-footer d-flex align-items-center\">\r\n            <button type=\"button\" class=\"btn btn-default btn-outline-theme btn-block btn-vertical-padding\"\r\n              data-dismiss=\"modal\">{{ 'common.cancel' | translate }}\r\n            </button>\r\n            <button type=\"button\" (click)=\"saveCategorized()\" class=\"btn btn-theme btn-block mt-0 btn-vertical-padding justify-content-center\">\r\n              {{ 'retro_categorize.create' | translate }}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  \r\n  "

/***/ }),

/***/ "./src/app/pages/retro-categorize/retro-categorize.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/retro-categorize/retro-categorize.component.ts ***!
  \**********************************************************************/
/*! exports provided: RetroCategorizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetroCategorizeComponent", function() { return RetroCategorizeComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_models_categorized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/models/categorized */ "./src/app/models/categorized.ts");
/* harmony import */ var app_models_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/models/category */ "./src/app/models/category.ts");
/* harmony import */ var app_models_dto_categorized_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/models/dto/categorized-message */ "./src/app/models/dto/categorized-message.ts");
/* harmony import */ var app_models_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/models/message */ "./src/app/models/message.ts");
/* harmony import */ var app_models_retro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/models/retro */ "./src/app/models/retro.ts");
/* harmony import */ var app_models_subject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/models/subject */ "./src/app/models/subject.ts");
/* harmony import */ var app_models_template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/models/template */ "./src/app/models/template.ts");
/* harmony import */ var app_services_alertify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var app_services_category_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var app_services_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var app_services_retro_configuration__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/services/retro-configuration */ "./src/app/services/retro-configuration.ts");
/* harmony import */ var app_services_subject_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var app_services_template_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/services/template.service */ "./src/app/services/template.service.ts");
/* harmony import */ var app_services_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var RetroCategorizeComponent = /** @class */ (function () {
    function RetroCategorizeComponent(messageService, templateService, categoryService, alertiftyService, authService, subjectService, translate, configureService) {
        // this.subscribeToCurrentRetroEvents();
        // this.subscribeCategorizedMessagesRetroEvents();
        var _this = this;
        this.messageService = messageService;
        this.templateService = templateService;
        this.categoryService = categoryService;
        this.alertiftyService = alertiftyService;
        this.authService = authService;
        this.subjectService = subjectService;
        this.translate = translate;
        this.configureService = configureService;
        this.messages = new Array();
        this.categorys = new Array();
        this.subject = new app_models_subject__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.selectedMessages1 = new Array();
        this.selectedMessages = new Array();
        this.isUser = false;
        this.categorized = new app_models_categorized__WEBPACK_IMPORTED_MODULE_2__["Categorized"]();
        this.categorizedMessages = new Array();
        this.template = new app_models_template__WEBPACK_IMPORTED_MODULE_8__["Template"]();
        this.selectSubject = new app_models_subject__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.retroId = '';
        firebase__WEBPACK_IMPORTED_MODULE_17__["default"].database().ref('categorize/').on('value', function (resp) {
            if (_this.currentRetro) {
                _this.getMessage(_this.currentRetro.id);
                _this.getCategory(_this.currentRetro.id);
            }
        });
    }
    RetroCategorizeComponent.prototype.ngOnInit = function () {
        this.retroId = this.authService.currentRetroIdValue;
        if (this.retroId) {
            this.getLastCurrentRetro(this.retroId);
        }
        this.existUser();
    };
    RetroCategorizeComponent.prototype.getLastCurrentRetro = function (retroId) {
        var _this = this;
        this.configureService
            .getCurrentRetro(retroId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["first"])())
            .subscribe(function (res) {
            _this.currentRetro = res;
            if (_this.currentRetro) {
                _this.getRetroSubject(_this.currentRetro.id);
                _this.getRetroTemplate(_this.currentRetro.templateId);
                _this.getMessage(_this.currentRetro.id);
                _this.getCategory(_this.currentRetro.id);
            }
        }, function (error) {
        });
    };
    RetroCategorizeComponent.prototype.getRetroSubject = function (retroId) {
        var _this = this;
        this.subjectService
            .getRetroSubject(retroId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["first"])())
            .subscribe(function (res) {
            _this.selectSubject = res;
        }, function (error) {
        });
    };
    RetroCategorizeComponent.prototype.GetHeaderMessage = function (headerId) {
        var filteredData = this.messages.filter(function (p) { return p.clientuniqueid == headerId; });
        return filteredData;
    };
    RetroCategorizeComponent.prototype.getRetroTemplate = function (templateId) {
        var _this = this;
        this.templateService
            .getTemplate(templateId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["first"])())
            .subscribe(function (data) {
            _this.template = data;
            _this.sortedlist();
        }, function (error) {
            _this.alertiftyService.error();
        });
    };
    RetroCategorizeComponent.prototype.existUser = function () {
        this.isUser = this.authService.hasRole("Member");
    };
    RetroCategorizeComponent.prototype.getMessage = function (retroId) {
        var _this = this;
        this.messageService
            .getAllNonCategoryMessage(retroId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["first"])())
            .subscribe(function (data) {
            _this.messages = data;
            _this.sortedlist();
        }, function (error) {
            _this.alertiftyService.error();
        });
    };
    RetroCategorizeComponent.prototype.getCategory = function (retroId) {
        var _this = this;
        this.messageService
            .getAllCategoryMessage(retroId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["first"])())
            .subscribe(function (data) {
            _this.categorizedMessages = data;
        }, function (error) {
            _this.alertiftyService.error();
        });
    };
    RetroCategorizeComponent.prototype.sortedlist = function () {
        this.messages.sort(function (a, b) {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
    };
    RetroCategorizeComponent.prototype.deleteCategory = function (item) {
        var _this = this;
        this.categoryService
            .deleteCategoryMessage(item)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["first"])())
            .subscribe(function (data) {
            var retro = new app_models_retro__WEBPACK_IMPORTED_MODULE_6__["Retro"]();
            retro.id = _this.currentRetro.id;
            retro.state = 2;
            retro.templateId = _this.currentRetro.templateId;
            _this.configureService.setCurrentRetro(retro);
            // this.configureService.getCategorizedMessage();     
        }, function (error) { });
    };
    RetroCategorizeComponent.prototype.selectMessage = function () {
        var _this = this;
        this.selectedMessages = [];
        this.messages.filter(function (p) {
            if (p.isCategorized) {
                _this.selectedMessages.push(p);
            }
        });
        var isCheck = this.selectedMessages.filter(function (p) { return p.clientuniqueid != _this.selectedMessages[0].clientuniqueid; });
        if (isCheck.length > 0) {
            this.alertiftyService.warning(this.translate.instant("common.category_validation"));
        }
        else {
            if (this.selectedMessages.length == 0)
                this.alertiftyService.warning(this.translate.instant("common.select_category"));
            else
                $('#categoryModal').modal("show");
        }
    };
    RetroCategorizeComponent.prototype.saveCategorized = function () {
        var _this = this;
        var categoryMessage = new app_models_dto_categorized_message__WEBPACK_IMPORTED_MODULE_4__["CategorizedMessage"]();
        var category = new app_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"]();
        category.categoryTitle = this.categorized.title;
        categoryMessage.category = category;
        categoryMessage.messages = this.selectedMessages;
        this.categoryService
            .createCategoryMessage(categoryMessage)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["first"])())
            .subscribe(function (data) {
            $("#categoryModal").modal("hide");
            // this.chatService.getCategorizedMessage();
            // const newMessage = firebase.default.database().ref('categorized-message/').push();
            // newMessage.set(this.message);
            var currentUser = _this.authService.currentUserValue;
            var message = new app_models_message__WEBPACK_IMPORTED_MODULE_5__["Message"]();
            message.userId = currentUser.userId;
            message.clientuniqueid = _this.selectedMessages[0].clientuniqueid;
            message.type = "category";
            message.messageText = _this.categorized.title;
            message.subjectId = _this.selectedMessages[0].subjectId;
            message.date = new Date();
            message.isCategorized = false;
            message.retroId = _this.selectedMessages[0].retroId;
            _this.configureService.newMessage(message).subscribe(function (res) {
                var newMessage = firebase__WEBPACK_IMPORTED_MODULE_17__["default"].database().ref('categorize/').push();
                var categorize = firebase__WEBPACK_IMPORTED_MODULE_17__["default"].database().ref('message/').push();
                newMessage.set(message);
                categorize.set(message);
                _this.selectedMessages = [];
                _this.categorized.title = "";
            });
        }, function (error) { });
    };
    RetroCategorizeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-retro-categorize',
            template: __webpack_require__(/*! ./retro-categorize.component.html */ "./src/app/pages/retro-categorize/retro-categorize.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideDownUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* => *", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(500, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.5s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))])], {
                            optional: true
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(500, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.5s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))])
                        ], { optional: true })
                    ])
                ]),
            ],
            styles: [__webpack_require__(/*! ./retro-categorize.component.css */ "./src/app/pages/retro-categorize/retro-categorize.component.css")]
        }),
        __metadata("design:paramtypes", [app_services_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"],
            app_services_template_service__WEBPACK_IMPORTED_MODULE_14__["TemplateService"],
            app_services_category_service__WEBPACK_IMPORTED_MODULE_10__["CategoryService"],
            app_services_alertify_service__WEBPACK_IMPORTED_MODULE_9__["AlertifyService"],
            app_services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"],
            app_services_subject_service__WEBPACK_IMPORTED_MODULE_13__["SubjectsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateService"],
            app_services_retro_configuration__WEBPACK_IMPORTED_MODULE_12__["RetroConfigurationService"]])
    ], RetroCategorizeComponent);
    return RetroCategorizeComponent;
}());



/***/ }),

/***/ "./src/app/pages/retro-comment/retro-comment.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/retro-comment/retro-comment.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JldHJvLWNvbW1lbnQvcmV0cm8tY29tbWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/retro-comment/retro-comment.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/retro-comment/retro-comment.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-tab-header></app-tab-header>\r\n<app-subject-header></app-subject-header>\r\n\r\n\r\n<div class=\"d-flex justify-content-end mt-3\">\r\n    <span class=\"pill-title text-bold\" *ngIf=\"retroRight != null\" [ngClass]=\"\r\n    retroRight.commentRight > 0 ? 'text-success' : 'text-danger'\r\n  \">{{'common.comment_right' | translate}}: {{ retroRight.commentRight }}</span>\r\n  </div>\r\n  \r\n  <div class=\"categories mt-5\">\r\n    <div class=\"category\" *ngFor=\"let tmp of template.templateDetail\">\r\n      <h5 *ngIf=\"GetHeaderMessage(tmp.id).length>0\">{{tmp.header}}</h5>\r\n      <div *ngFor=\"let msg of GetHeaderMessage(tmp.id)\" class=\"mt-3\">\r\n        <div class=\"card card-theme box-shadow-sm border-radius-lg\">\r\n          <div class=\"card-body p-2 d-flex justify-content-between align-items-start\">\r\n            <div class=\"content\">\r\n              {{ msg.messageText }}\r\n            </div>\r\n            <button [disabled]=\"retroRight.commentRight <= 0\" (click)=\"addCommentModal(msg)\"\r\n              class=\"btn btn-theme btn-vertical-padding ml-3 btn-icon-text px-3\"><span>\r\n                {{'common.comment' | translate}}\r\n              </span> <i class=\"fa fa-comment\"></i></button>\r\n          </div>\r\n        </div>\r\n        <div class=\"category__comments mt-3\" *ngFor=\"let com of msg.comments\">\r\n          <div class=\"card card-theme card-theme--blue w-75 box-shadow-xs\">\r\n            <div class=\"card-body p-1 text-dark\">\r\n              {{ com.commentText }}\r\n            </div>\r\n          </div>\r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  <div class=\"modal fade\" id=\"commentModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\r\n    aria-hidden=\"true\">\r\n    <form #templateForm=\"ngForm\" (ngSubmit)=\"sendComment()\">\r\n      <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">{{ 'retro_comment.comment' | translate }}</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n  \r\n            <div class=\"form-group\">\r\n              <textarea style=\"height: auto !important;\" rows=\"5\" class=\"form-control\"\r\n                [disabled]=\"retroRight.commentRight == 0\" [(ngModel)]=\"commentText\"\r\n                [ngModelOptions]=\"{ standalone: true }\" (keydown.enter)=\"sendComment()\"></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default btn-outline-theme btn-block btn-vertical-padding\"\r\n              data-dismiss=\"modal\">\r\n              {{ 'common.cancel' | translate }}\r\n            </button>\r\n  \r\n            <button type=\"button\" (click)=\"sendComment()\"\r\n              class=\"btn btn-theme btn-block mt-0 btn-vertical-padding justify-content-center\">\r\n              {{ 'retro_comment.send' | translate }}\r\n            </button>\r\n  \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>"

/***/ }),

/***/ "./src/app/pages/retro-comment/retro-comment.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/retro-comment/retro-comment.component.ts ***!
  \****************************************************************/
/*! exports provided: RetroCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetroCommentComponent", function() { return RetroCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/message */ "./src/app/models/message.ts");
/* harmony import */ var _models_comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/comment */ "./src/app/models/comment.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_services_template_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/template.service */ "./src/app/services/template.service.ts");
/* harmony import */ var app_models_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/models/template */ "./src/app/models/template.ts");
/* harmony import */ var app_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var app_models_subject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/models/subject */ "./src/app/models/subject.ts");
/* harmony import */ var app_models_retro__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/models/retro */ "./src/app/models/retro.ts");
/* harmony import */ var app_services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var app_models_userRight__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/models/userRight */ "./src/app/models/userRight.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var app_services_subject_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var app_services_retro_configuration__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/services/retro-configuration */ "./src/app/services/retro-configuration.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var app_helpers_firebase_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/helpers/firebase-helper */ "./src/app/helpers/firebase-helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var RetroCommentComponent = /** @class */ (function () {
    function RetroCommentComponent(chatService, _ngZone, authService, messageService, templateService, sharedService, subjectService, configureService) {
        var _this = this;
        this.chatService = chatService;
        this._ngZone = _ngZone;
        this.authService = authService;
        this.messageService = messageService;
        this.templateService = templateService;
        this.sharedService = sharedService;
        this.subjectService = subjectService;
        this.configureService = configureService;
        this.messages = new Array();
        this.selectedMessage = new _models_message__WEBPACK_IMPORTED_MODULE_2__["Message"]();
        this.messageCount = 0;
        this.commentText = "";
        this.comment = new _models_comment__WEBPACK_IMPORTED_MODULE_3__["Comment"]();
        this.retroRight = new app_models_userRight__WEBPACK_IMPORTED_MODULE_12__["UserRight"]();
        this.isUser = false;
        this.template = new app_models_template__WEBPACK_IMPORTED_MODULE_7__["Template"]();
        this.retroId = '';
        this.selectSubject = new app_models_subject__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        firebase__WEBPACK_IMPORTED_MODULE_16__["default"].database().ref('comment/').limitToLast(1).on('value', function (resp) {
            if (_this.currentRetro) {
                var data = Object(app_helpers_firebase_helper__WEBPACK_IMPORTED_MODULE_17__["snapshotToArray"])(resp);
                if (data.length > 0) {
                    var comment_1 = data[0];
                    var message = _this.messages.filter(function (p) { return p.id == comment_1.messageId; });
                    if (message.length > 0 && message[0].comments != null) {
                        message[0].comments.unshift(comment_1);
                    }
                }
            }
        });
    }
    RetroCommentComponent.prototype.ngOnInit = function () {
        this.retroId = this.authService.currentRetroIdValue;
        if (this.retroId) {
            this.getLastCurrentRetro(this.retroId);
        }
        this.existUser();
    };
    RetroCommentComponent.prototype.getLastCurrentRetro = function (retroId) {
        var _this = this;
        this.configureService
            .getCurrentRetro(retroId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (res) {
            _this.currentRetro = res;
            if (_this.currentRetro) {
                _this.getRetroSubject(_this.currentRetro.id);
                _this.getRetroTemplate(_this.currentRetro.id);
                _this.getMessage();
                _this.getUserRight(_this.currentRetro.id);
            }
        }, function (error) {
        });
    };
    RetroCommentComponent.prototype.getRetroSubject = function (retroId) {
        var _this = this;
        this.subjectService
            .getRetroSubject(retroId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (res) {
            _this.selectSubject = res;
        }, function (error) {
        });
    };
    RetroCommentComponent.prototype.getUserRight = function (retroId) {
        var _this = this;
        var retro = new app_models_retro__WEBPACK_IMPORTED_MODULE_10__["Retro"]();
        retro.id = retroId;
        retro.userId = this.authService.currentUserValue.userId;
        this.configureService
            .getUserRight(retro)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (res) {
            _this.retroRight = res;
        }, function (error) {
        });
    };
    RetroCommentComponent.prototype.GetHeaderMessage = function (headerId) {
        var filteredData = this.messages.filter(function (p) { return p.clientuniqueid == headerId; });
        return filteredData;
    };
    RetroCommentComponent.prototype.getRetroTemplate = function (retroId) {
        var _this = this;
        this.templateService
            .getTemplateByRetroId(retroId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.template = data;
            _this.sortedlist();
        }, function (error) { });
    };
    RetroCommentComponent.prototype.sortedlist = function () {
        this.messages.sort(function (a, b) {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
    };
    RetroCommentComponent.prototype.filterTrim = function (x) {
        return x.replace(/^\s+|\s+$/gm, "");
    };
    RetroCommentComponent.prototype.addCommentModal = function (message) {
        this.selectedMessage = message;
        $("#commentModal").modal("show");
        this.commentText = "";
    };
    RetroCommentComponent.prototype.sendComment = function () {
        var _this = this;
        var currentUser = this.authService.currentUserValue;
        if (this.filterTrim(this.commentText) != "") {
            this.comment = new _models_comment__WEBPACK_IMPORTED_MODULE_3__["Comment"]();
            this.comment.userId = currentUser.userId;
            this.comment.messageId = this.selectedMessage.id;
            this.comment.commentText = this.commentText;
            this.comment.date = new Date();
            this.comment.retroId = this.currentRetro.id;
            this.configureService.newComment(this.comment).subscribe(function (res) {
                var newMessage = firebase__WEBPACK_IMPORTED_MODULE_16__["default"].database().ref('comment/').push();
                newMessage.set(_this.comment);
                _this.retroRight = res;
                _this.commentText = "";
            });
            $("#commentModal").modal("hide");
        }
    };
    RetroCommentComponent.prototype.existUser = function () {
        this.isUser = this.authService.hasRole("Member");
    };
    RetroCommentComponent.prototype.getMessage = function () {
        var _this = this;
        this.messageService
            .getAllNonCategoryMessage(this.currentRetro.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.messages = data.filter(function (p) { return p.isCategorized == false; });
            _this.messages.forEach(function (item) {
                item.comments = item.comments.reverse();
            });
            _this.messageCount = _this.messages.length;
            _this.sortedlist();
        }, function (error) { });
    };
    RetroCommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-retro-comment',
            template: __webpack_require__(/*! ./retro-comment.component.html */ "./src/app/pages/retro-comment/retro-comment.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["trigger"])('slideDownUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])("* => *", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["query"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["stagger"])(500, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])("0.5s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({ opacity: 0 }))])], {
                            optional: true
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["query"])(":enter", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["stagger"])(500, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])("0.5s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({ opacity: 1 }))])
                        ], { optional: true })
                    ])
                ]),
            ],
            styles: [__webpack_require__(/*! ./retro-comment.component.css */ "./src/app/pages/retro-comment/retro-comment.component.css")]
        }),
        __metadata("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            app_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            app_services_template_service__WEBPACK_IMPORTED_MODULE_6__["TemplateService"],
            app_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
            app_services_subject_service__WEBPACK_IMPORTED_MODULE_14__["SubjectsService"],
            app_services_retro_configuration__WEBPACK_IMPORTED_MODULE_15__["RetroConfigurationService"]])
    ], RetroCommentComponent);
    return RetroCommentComponent;
}());



/***/ }),

/***/ "./src/app/pages/retro-report/retro-report.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/retro-report/retro-report.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JldHJvLXJlcG9ydC9yZXRyby1yZXBvcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/retro-report/retro-report.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/retro-report/retro-report.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-tab-header></app-tab-header>\r\n\r\n\r\n<div class=\"report\" id=\"report-content\" name=\"report-content\" #content class=\"container form mt-50\">\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"container\">\r\n        <button type=\"button\" class=\"btn btn-danger float-right ml-5\" *ngIf=\"isLeader()\" (click)=\"finishRetro()\">{{ 'retro_report.finish_the_workshop' | translate }}</button>\r\n  \r\n        <button id=\"generate\" class=\"btn btn-success float-right\" *ngIf=\"isLeader()\" (click)=\"createPdf()\">\r\n          {{ 'retro_report.create_pdf' | translate }}</button>\r\n  \r\n      </div>\r\n    </div>\r\n  \r\n  \r\n    <div class=\"report-header mb-5\">\r\n  \r\n      <h1 class=\"report-header__title\">{{ 'retro_report.title' | translate }}</h1>\r\n      <span class=\"report-header__description\">\r\n        {{ 'retro_report.report_subtitle' | translate }}\r\n      </span>\r\n    </div>\r\n  \r\n    <div class=\"report-section mb-5\">\r\n      <h3 class=\"report-section__title\">{{ 'retro_report.topic' | translate }}</h3>\r\n      <div class=\"card card-theme card-theme--cyan\">\r\n        <div class=\"card-body p-2\">\r\n          <h4 class=\"card-title\">{{subject.subjectTitle}}</h4>\r\n          <div class=\"card-description\">{{subject.subjectDescription}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n  \r\n  \r\n    <div class=\"report-section mb-5\" *ngIf=\"categorizedMessages.length>0\">\r\n      <h3 class=\"report-section__title\">{{ 'retro_report.Priority_Ideas' | translate }}</h3>\r\n  \r\n      <div *ngFor=\"let tmp of template.templateDetail\">\r\n        <div *ngIf=\"GetHeaderCategorizedMessages(tmp.id).length>0\">\r\n          <h5 class=\"report-section__subtitle\">{{tmp.header}}</h5>\r\n          <div class=\"report-section__content\">\r\n            <div class=\"card card-theme box-shadow-xs mb-3\"\r\n              *ngFor=\" let message of GetHeaderCategorizedMessages(tmp.id);let index\">\r\n              <div class=\"card-body p-1 d-flex\">\r\n                <div class=\"card-description \" style=\"width: calc(100% - 70px);\">\r\n                  {{message.messageText}}\r\n                </div>\r\n                <div class=\"d-flex align-items-end\" style=\"width: 70px;\">\r\n                  <button class=\"btn btn-icon-theme\"><i class=\"fa fa-thumbs-up\"></i> ({{message.voteCount}})</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n  \r\n  \r\n<!--   \r\n  \r\n    <div class=\"report-section mb-5\" *ngIf=\"messages.length>0\">\r\n      <h3 class=\"report-section__title\">Diğer Fikirler</h3>\r\n  \r\n      <div *ngFor=\"let tmp of template.templateDetail\">\r\n        <div *ngIf=\"GetHeaderMessage(tmp.id).length>0\">\r\n  \r\n          <h5 class=\"report-section__subtitle\">{{tmp.header}}</h5>\r\n          <div class=\"report-section__content\" *ngFor=\"let message of GetHeaderMessage(tmp.id)\">\r\n            <div class=\"card card-theme box-shadow-xs mb-3\">\r\n              <div class=\"card-body p-1 d-flex\">\r\n                <div class=\"card-description\"  style=\"width: calc(100% - 70px);\"> \r\n                  {{message.messageText}}\r\n                </div>\r\n                <div class=\"d-flex align-items-end\" style=\"width:70px;\">\r\n                  <button class=\"btn btn-icon-theme\"><i class=\"fa fa-thumbs-up\"></i> ({{message.voteCount}})</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n  \r\n  \r\n    <div class=\"report-header mb-5\">\r\n      <h1 class=\"report-header__title\">{{ 'retro_report.report' | translate }}</h1>\r\n      <span class=\"report-header__description\">\r\n         {{'retro_report.footer_title' | translate}}\r\n      </span>\r\n    </div>\r\n  \r\n    <div class=\"report-section mb-5\">\r\n      <h3 class=\"report-section__title\">{{ 'retro_report.topic' | translate }}</h3>\r\n      <div class=\"card card-theme card-theme--cyan mb-3\">\r\n        <div class=\"card-body p-2\">\r\n          <h4 class=\"card-title\"> {{subject.subjectTitle}}</h4>\r\n          <div class=\"card-description\">{{subject.subjectDescription}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n  \r\n  \r\n  \r\n  \r\n    <div class=\"report-section category mb-5\" *ngIf=\"categorizedMessages.length>0\">\r\n      <h3 class=\"report-section__title\">{{ 'retro_report.Priority_Ideas' | translate }}</h3>\r\n      <div *ngFor=\"let tmp of template.templateDetail\">\r\n        <div *ngIf=\"GetHeaderCategorizedMessages(tmp.id).length>0\">\r\n          <h5 class=\"report-section__subtitle\">{{tmp.header}}</h5>\r\n          <div class=\"report-section__content\">\r\n            <div class=\"card card-theme box-shadow-xs mb-3\"\r\n              *ngFor=\" let message of GetHeaderCategorizedMessages(tmp.id);let index\">\r\n              <div class=\"card-body p-1 d-flex\">\r\n                <div class=\"card-description\" style=\"width: calc(100% - 70px);\">\r\n                  {{message.messageText}}\r\n                </div>\r\n                <div class=\"d-flex align-items-end\" style=\"width:70px;\">\r\n                  <button class=\"btn btn-icon-theme\"><i class=\"fa fa-thumbs-up\"></i> ({{message.voteCount}})</button>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"category__comments mt-3\">\r\n                <div class=\"card card-theme card-theme--blue mb-3 w-75 box-shadow-xs\"\r\n                  *ngFor=\"let comment of message.comments\">\r\n                  <div class=\"card-body p-1 text-dark\">\r\n                    {{comment.commentText}}\r\n                  </div>\r\n                </div>\r\n                </div>\r\n    \r\n            </div>\r\n           \r\n          \r\n  \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"report-section category mb-5\" *ngIf=\"messages.length>0\">\r\n      <h3 class=\"report-section__title\">{{ 'retro_report.Other_Ideas' | translate }}</h3>\r\n      <div *ngFor=\"let tmp of template.templateDetail\">\r\n        <div *ngIf=\"GetHeaderMessage(tmp.id).length>0\">\r\n          <h5 class=\"report-section__subtitle\">{{tmp.header}}</h5>\r\n          <div class=\"report-section__content\" *ngFor=\"let message of GetHeaderMessage(tmp.id)\">\r\n            <div class=\"card card-theme box-shadow-xs mb-3\">\r\n              <div class=\"card-body p-1 d-flex\">\r\n                <div class=\"card-description\" style=\"width: calc(100% - 70px);\">\r\n                  {{message.messageText}}\r\n                </div>\r\n                <div class=\"d-flex align-items-end\" style=\"width: 70px;\">\r\n                  <button class=\"btn btn-icon-theme\"><i class=\"fa fa-thumbs-up\"></i> ({{message.voteCount}})</button>\r\n                </div>\r\n              </div>\r\n              <div class=\"category__comments mt-3\">\r\n                <div class=\"card card-theme card-theme--blue mb-3 w-75 box-shadow-xs\"\r\n                  *ngFor=\"let comment of message.comments\">\r\n                  <div class=\"card-body p-1 text-dark\">\r\n                    {{comment.commentText}}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          \r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n  \r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  <div id=\"editor\"></div>\r\n  <div class=\"my-overlay\" *ngIf=\"showOverlay\">\r\n    <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n  </div>\r\n  \r\n  \r\n  <!--\r\n  \r\n  \r\n    <div *ngFor=\"let tmp of template.templateDetail\">\r\n      <div *ngIf=\"GetHeaderMessage(tmp.id).length>0\">\r\n        <h5 class=\"alert alert-danger\">{{tmp.header}}</h5>\r\n        <div *ngFor=\"let message of GetHeaderMessage(tmp.id)\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"alert alert-success\" role=\"alert\">\r\n            <div class=\"row\">\r\n              <p class=\"col-sm-11\"> {{message.messageText}}\r\n              </p>\r\n              <span class=\"float-right col-sm-1\"> <i class=\"fa fa-thumbs-up fa-2x \"></i>({{message.voteCount}})</span>\r\n            </div>\r\n  \r\n          </div>\r\n  \r\n  \r\n          <div class=\"row\" *ngFor=\"let comment of message.comments\">\r\n            <div class=\"col-sm-9 offset-sm-3\">\r\n              <div class=\"alert alert-primary\" role=\"alert\">\r\n  \r\n                <p> {{comment.commentText}}\r\n                </p>\r\n  \r\n  \r\n  \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  \r\n  \r\n  </div>\r\n  <div id=\"editor\"></div>\r\n  <div class=\"my-overlay\" *ngIf=\"showOverlay\">\r\n    <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n  </div> -->"

/***/ }),

/***/ "./src/app/pages/retro-report/retro-report.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/retro-report/retro-report.component.ts ***!
  \**************************************************************/
/*! exports provided: RetroReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetroReportComponent", function() { return RetroReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_models_categorized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/models/categorized */ "./src/app/models/categorized.ts");
/* harmony import */ var app_models_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/models/message */ "./src/app/models/message.ts");
/* harmony import */ var app_models_subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/models/subject */ "./src/app/models/subject.ts");
/* harmony import */ var app_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var app_services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var app_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var app_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_models_retro__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/models/retro */ "./src/app/models/retro.ts");
/* harmony import */ var app_services_subject_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var app_services_retro_configuration__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/services/retro-configuration */ "./src/app/services/retro-configuration.ts");
/* harmony import */ var app_services_template_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/services/template.service */ "./src/app/services/template.service.ts");
/* harmony import */ var app_models_template__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/models/template */ "./src/app/models/template.ts");
/* harmony import */ var app_services_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var app_services_company_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var app_services_group_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var app_models_dto_group_filter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/models/dto/group-filter */ "./src/app/models/dto/group-filter.ts");
/* harmony import */ var app_services_alertify_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var app_models_userRight__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/models/userRight */ "./src/app/models/userRight.ts");
/* harmony import */ var app_helpers_firebase_helper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/helpers/firebase-helper */ "./src/app/helpers/firebase-helper.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var app_models_dto_report_file__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! app/models/dto/report-file */ "./src/app/models/dto/report-file.ts");
/* harmony import */ var app_models_dto_retro_reset__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! app/models/dto/retro-reset */ "./src/app/models/dto/retro-reset.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

























var RetroReportComponent = /** @class */ (function () {
    function RetroReportComponent(_ngZone, router, chatService, groupService, alertifyService, userService, messageService, companyService, retroConfigurationService, subjectService, categoryService, templateService, configureService, sharedService) {
        this._ngZone = _ngZone;
        this.router = router;
        this.chatService = chatService;
        this.groupService = groupService;
        this.alertifyService = alertifyService;
        this.userService = userService;
        this.messageService = messageService;
        this.companyService = companyService;
        this.retroConfigurationService = retroConfigurationService;
        this.subjectService = subjectService;
        this.categoryService = categoryService;
        this.templateService = templateService;
        this.configureService = configureService;
        this.sharedService = sharedService;
        this.message = new app_models_message__WEBPACK_IMPORTED_MODULE_2__["Message"]();
        this.messages = new Array();
        this.categorys = new Array();
        this.subject = new app_models_subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.archiveMessagesList = Array();
        this.categorized = new app_models_categorized__WEBPACK_IMPORTED_MODULE_1__["Categorized"]();
        this.categorizedMessages = new Array();
        this.allMessages = new Array();
        this.nonCategorizedMessages = new Array();
        this.comments = new Array();
        this.retro = new app_models_retro__WEBPACK_IMPORTED_MODULE_10__["Retro"]();
        this.showOverlay = true;
        this.template = new app_models_template__WEBPACK_IMPORTED_MODULE_14__["Template"]();
        this.retroRight = new app_models_userRight__WEBPACK_IMPORTED_MODULE_20__["UserRight"]();
        this.onlineUsers = [];
        this.retroId = '';
    }
    RetroReportComponent.prototype.ngOnInit = function () {
        if (this.isLeader()) {
            this.currentCompany = this.userService.currentUserValue.company;
        }
        this.retroId = this.userService.currentRetroIdValue;
        if (this.retroId) {
            this.getLastCurrentRetro(this.retroId);
        }
    };
    RetroReportComponent.prototype.getLastCurrentRetro = function (retroId) {
        var _this = this;
        this.configureService
            .getCurrentRetro(retroId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
            .subscribe(function (res) {
            _this.currentRetro = res;
            if (_this.currentRetro) {
                // this.getFirebaseMessage();
                _this.getRetroSubject(_this.currentRetro.id);
                _this.getRetroTemplate(_this.currentRetro.id);
                _this.getUserRight(_this.currentRetro.id);
                _this.getOnlineUser();
            }
        }, function (error) {
        });
    };
    RetroReportComponent.prototype.getUserRight = function (retroId) {
        var _this = this;
        var retro = new app_models_retro__WEBPACK_IMPORTED_MODULE_10__["Retro"]();
        retro.id = retroId;
        retro.userId = this.userService.currentUserValue.userId;
        this.configureService
            .getUserRight(retro)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
            .subscribe(function (res) {
            _this.retroRight = res;
        }, function (error) {
        });
    };
    RetroReportComponent.prototype.getRetroSubject = function (retroId) {
        var _this = this;
        this.subjectService
            .getRetroSubject(retroId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
            .subscribe(function (res) {
            _this.subject = res;
        }, function (error) {
        });
    };
    RetroReportComponent.prototype.isLeader = function () {
        return this.userService.hasRole("Leader");
    };
    RetroReportComponent.prototype.getOnlineUser = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_22__["default"].database().ref('onlineuser/').on('value', function (resp) {
            var res = Object(app_helpers_firebase_helper__WEBPACK_IMPORTED_MODULE_21__["snapshotToArray"])(resp);
            if (_this.currentRetro) {
                if (res.length > 0) {
                    _this.onlineUsers = res.filter(function (p) { return p.retroId == _this.currentRetro.id; });
                }
            }
        });
    };
    RetroReportComponent.prototype.GetHeaderCategorizedMessages = function (headerId) {
        var filteredData = this.categorizedMessages.filter(function (p) { return p.clientuniqueid == headerId; });
        return filteredData;
    };
    RetroReportComponent.prototype.GetHeaderMessage = function (headerId) {
        var filteredData = this.messages.filter(function (p) { return p.clientuniqueid == headerId; });
        return filteredData;
    };
    RetroReportComponent.prototype.getRetroTemplate = function (retroId) {
        var _this = this;
        this.templateService
            .getTemplateByRetroId(retroId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
            .subscribe(function (data) {
            _this.template = data;
            _this.getMessage(_this.currentRetro.id);
        }, function (error) { });
    };
    RetroReportComponent.prototype.getMessage = function (retroId) {
        var _this = this;
        this.messageService
            .getReportMessage(retroId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
            .subscribe(function (data) {
            _this.messages = data.messages;
            _this.categorizedMessages = data.categorizedMessages;
            _this.showOverlay = false;
        }, function (error) { });
    };
    RetroReportComponent.prototype.sortedlist = function () {
        this.messages.sort(function (a, b) {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
    };
    RetroReportComponent.prototype.createPdf = function () {
        var _this = this;
        this.showOverlay = true;
        var data = new app_models_dto_report_file__WEBPACK_IMPORTED_MODULE_23__["ReportFile"]();
        data.retroId = this.currentRetro.id;
        data.onlineUsers = this.onlineUsers;
        this.retroConfigurationService.getRetroReport(data).subscribe(function (data) {
            var blob = new Blob([data], { type: 'application/pdf' });
            var downloadURL = window.URL.createObjectURL(data);
            var link = document.createElement('a');
            link.href = downloadURL;
            link.download = "report.pdf";
            link.click();
            _this.showOverlay = false;
        });
    };
    RetroReportComponent.prototype.finishRetro = function () {
        if (this.isLeader()) {
            this.currentCompany.retroCount = this.currentCompany.retroCount - 1;
            this.updateCompany(this.currentCompany);
            if (this.userService.hasRole("Leader")) {
                var retro = new app_models_retro__WEBPACK_IMPORTED_MODULE_10__["Retro"]();
                retro.id = this.currentRetro.id;
                retro.state = 2;
                retro.currentPage = "/current/report";
                retro.templateId = this.retro.templateId;
            }
        }
    };
    RetroReportComponent.prototype.updateCompany = function (company) {
        var _this = this;
        this.companyService.update(company).pipe().subscribe(function (res) {
            var currentUser = _this.userService.currentUserValue;
            currentUser.company = res;
            _this.userService.currentUserSetValue(currentUser);
            var filter = new app_models_dto_group_filter__WEBPACK_IMPORTED_MODULE_18__["GroupFilter"]();
            filter.companyId = _this.userService.currentUserValue.companyId;
            filter.leaderId = _this.userService.currentUserValue.userId;
            var resetData = new app_models_dto_retro_reset__WEBPACK_IMPORTED_MODULE_24__["RetroReset"]();
            resetData.filter = filter;
            var userIds = _this.onlineUsers.map(function (item) { return item.userId; });
            resetData.users = userIds;
            _this.groupService.getReset(resetData).pipe().subscribe(function (res) {
            });
            var retro = new app_models_retro__WEBPACK_IMPORTED_MODULE_10__["Retro"]();
            retro.id = _this.currentRetro.id;
            retro.currentPage = "/current/finish";
            var newMessage = firebase__WEBPACK_IMPORTED_MODULE_22__["default"].database().ref('currentpath/').push();
            newMessage.set(retro);
        });
    };
    RetroReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-retro-report',
            template: __webpack_require__(/*! ./retro-report.component.html */ "./src/app/pages/retro-report/retro-report.component.html"),
            styles: [__webpack_require__(/*! ./retro-report.component.css */ "./src/app/pages/retro-report/retro-report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            app_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"],
            app_services_group_service__WEBPACK_IMPORTED_MODULE_17__["GroupService"],
            app_services_alertify_service__WEBPACK_IMPORTED_MODULE_19__["AlertifyService"],
            app_services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"],
            app_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            app_services_company_service__WEBPACK_IMPORTED_MODULE_16__["CompanyService"],
            app_services_retro_configuration__WEBPACK_IMPORTED_MODULE_12__["RetroConfigurationService"],
            app_services_subject_service__WEBPACK_IMPORTED_MODULE_11__["SubjectsService"],
            app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            app_services_template_service__WEBPACK_IMPORTED_MODULE_13__["TemplateService"],
            app_services_retro_configuration__WEBPACK_IMPORTED_MODULE_12__["RetroConfigurationService"],
            app_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]])
    ], RetroReportComponent);
    return RetroReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/retro-start/retro-start.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/retro-start/retro-start.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JldHJvLXN0YXJ0L3JldHJvLXN0YXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/retro-start/retro-start.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/retro-start/retro-start.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<div class=\"create-retro d-flex justify-content-end\" style=\"background-image: url('assets/img/retro-bg.png')\">\r\n \r\n  <form #configForm=\"ngForm\"  (ngSubmit)=\"saveConfig()\" class=\"create-retro__form\">\r\n    <h3 class=\"card-title\">{{ 'retro_start.title' | translate }}</h3>\r\n    <div class=\"form-group\">\r\n      <label>{{ 'retro_start.number_of_idea_Rights' | translate }}</label>\r\n      <input type=\"number\" [disabled]=\"isCheckFailed()\" class=\"form-control\" [(ngModel)]=\"config.ideaRight\"\r\n        [ngModelOptions]=\"{ standalone: true }\" />\r\n    </div>\r\n    <div class=\"form-group \">\r\n      <label>{{ 'retro_start.number_of_Comments' | translate }}</label>\r\n      <input type=\"number\" [disabled]=\"isCheckFailed()\" class=\"form-control\" [(ngModel)]=\"config.commentRight\"\r\n        [ngModelOptions]=\"{ standalone: true }\" />\r\n    </div>\r\n    <div class=\"form-group \">\r\n      <label>{{ 'retro_start.number_of_Voting_Rights' | translate }}</label>\r\n      <input type=\"number\" [disabled]=\"isCheckFailed()\" class=\"form-control\" [(ngModel)]=\"config.voteRight\"\r\n        [ngModelOptions]=\"{ standalone: true }\" />\r\n    </div>\r\n    <div class=\"d-flex justify-content-end\">\r\n      <button type=\"submit\" [disabled]=\"isCheckFailed()\" class=\"btn btn-theme btn-vertical-padding btn-horizontal-padding\">{{ 'retro_start.start' | translate }}</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/retro-start/retro-start.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/retro-start/retro-start.component.ts ***!
  \************************************************************/
/*! exports provided: RetroStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetroStartComponent", function() { return RetroStartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var app_models_retro_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/models/retro-configuration */ "./src/app/models/retro-configuration.ts");
/* harmony import */ var app_services_retro_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/retro-configuration */ "./src/app/services/retro-configuration.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var app_models_retro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/models/retro */ "./src/app/models/retro.ts");
/* harmony import */ var app_models_userRight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/models/userRight */ "./src/app/models/userRight.ts");
/* harmony import */ var app_models_dto_report__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/models/dto/report */ "./src/app/models/dto/report.ts");
/* harmony import */ var app_services_group_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var app_models_dto_group_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/models/dto/group-filter */ "./src/app/models/dto/group-filter.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var app_services_company_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var app_services_alertify_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var app_services_hub_retro_hub_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/services/hub/retro-hub.service */ "./src/app/services/hub/retro-hub.service.ts");
/* harmony import */ var app_services_hub_user_hub_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/services/hub/user-hub.service */ "./src/app/services/hub/user-hub.service.ts");
/* harmony import */ var app_helpers_guid_generator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/helpers/guid-generator */ "./src/app/helpers/guid-generator.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var RetroStartComponent = /** @class */ (function () {
    function RetroStartComponent(sharedService, authService, groupService, companyService, configService, router, retroHubService, userHubService, alertifyService, _ngZone, route, translate) {
        this.sharedService = sharedService;
        this.authService = authService;
        this.groupService = groupService;
        this.companyService = companyService;
        this.configService = configService;
        this.router = router;
        this.retroHubService = retroHubService;
        this.userHubService = userHubService;
        this.alertifyService = alertifyService;
        this._ngZone = _ngZone;
        this.route = route;
        this.translate = translate;
        /**
         *
         */
        this.currentRetro = new app_models_retro__WEBPACK_IMPORTED_MODULE_7__["Retro"]();
        this.report = new app_models_dto_report__WEBPACK_IMPORTED_MODULE_9__["Report"]();
        this.config = new app_models_retro_configuration__WEBPACK_IMPORTED_MODULE_2__["RetroConfigration"]();
        this.selectSubject = null;
        this.isShow = false;
        this.retroRight = new app_models_userRight__WEBPACK_IMPORTED_MODULE_8__["UserRight"]();
        this.isFailed = false;
        this.isRetroFailed = false;
        this.categorizedMessages = new Array();
        this.groups = [];
    }
    RetroStartComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params.id;
        localStorage.setItem("retro", "");
        var currentLang = this.authService.currentLangValue;
        if (this.isUser()) {
            this.router.navigate(["/current/subject", id]);
        }
        if (this.isLeader()) {
            this.getFilterGroup();
            this.isCheckCompanyRetroRight();
        }
    };
    RetroStartComponent.prototype.isUser = function () {
        return this.authService.hasRole("Member");
    };
    RetroStartComponent.prototype.isLeader = function () {
        return this.authService.hasRole("Leader");
    };
    RetroStartComponent.prototype.isCheckFailed = function () {
        return this.isFailed || this.isRetroFailed;
    };
    RetroStartComponent.prototype.isCheckCompanyRetroRight = function () {
        var _this = this;
        var userValue = this.authService.currentUserValue;
        this.companyService
            .getCompany(userValue.companyId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            var company = res;
            if (company && company.retroCount <= 0) {
                _this.isRetroFailed = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_12___default()({
                    title: 'Uyarı!',
                    text: 'Şirketinize ait  retro hakkı bulunmamaktadır.',
                    type: 'warning',
                    showConfirmButton: false,
                    timer: 4000,
                    buttonsStyling: false
                });
            }
            else {
                _this.isRetroFailed = false;
            }
        });
    };
    RetroStartComponent.prototype.getFilterGroup = function () {
        var filter = new app_models_dto_group_filter__WEBPACK_IMPORTED_MODULE_11__["GroupFilter"]();
        filter.companyId = this.authService.currentUserValue.companyId;
        filter.leaderId = this.authService.currentUserValue.userId;
        filter.state = 0;
        this.getAllGroup(filter);
    };
    RetroStartComponent.prototype.getAllGroup = function (filter) {
        var _this = this;
        this.groupService
            .getAllGroup(filter)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            _this.groups = res;
            if (_this.groups.length <= 0) {
                _this.isFailed = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_12___default()({
                    title: 'Uyarı!',
                    text: 'Atanmış bir retro grubunuz bulunmamaktadır.',
                    type: 'warning',
                    showConfirmButton: false,
                    timer: 4000,
                    buttonsStyling: false
                });
            }
            else {
                _this.isFailed = false;
            }
        }, function (error) {
            _this.alertifyService.error();
        });
    };
    RetroStartComponent.prototype.updateGroup = function (group) {
        this.groupService
            .update(group)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
        });
    };
    RetroStartComponent.prototype.saveConfig = function () {
        var _this = this;
        var currentUser = this.authService.currentUserValue;
        this.config.userId = currentUser.userId;
        this.configService
            .create(this.config)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (res) {
            _this.config = res;
            var currentUser = _this.authService.currentUserValue;
            var retro = new app_models_retro__WEBPACK_IMPORTED_MODULE_7__["Retro"]();
            retro.id = res.retroId;
            retro.userId = currentUser.userId;
            retro.state = 2;
            retro.currentPage = "/current/subject";
            _this.configService.setCurrentRetro(retro);
            _this.groups[0].group.state = 1;
            _this.updateGroup(_this.groups[0].group);
            var generator = new app_helpers_guid_generator__WEBPACK_IMPORTED_MODULE_17__["GuidGenerator"]();
            var current = new app_models_retro__WEBPACK_IMPORTED_MODULE_7__["Retro"]();
            current.currentPage = "/current/subject";
            current.id = res.retroId;
            _this.authService.currentRetroIdSetValue(current.id);
            var newMessage = firebase__WEBPACK_IMPORTED_MODULE_18__["default"].database().ref('currentpath/').push();
            newMessage.set(current).then(function (p) {
                _this.router.navigate(["/current/subject"]);
            });
        }, function (error) {
            _this.alertifyService.error();
        });
    };
    RetroStartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-retro-start',
            template: __webpack_require__(/*! ./retro-start.component.html */ "./src/app/pages/retro-start/retro-start.component.html"),
            styles: [__webpack_require__(/*! ./retro-start.component.css */ "./src/app/pages/retro-start/retro-start.component.css")]
        }),
        __metadata("design:paramtypes", [app_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"],
            app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            app_services_group_service__WEBPACK_IMPORTED_MODULE_10__["GroupService"],
            app_services_company_service__WEBPACK_IMPORTED_MODULE_13__["CompanyService"],
            app_services_retro_configuration__WEBPACK_IMPORTED_MODULE_3__["RetroConfigurationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_services_hub_retro_hub_service__WEBPACK_IMPORTED_MODULE_15__["RetroHubService"],
            app_services_hub_user_hub_service__WEBPACK_IMPORTED_MODULE_16__["UserHubService"],
            app_services_alertify_service__WEBPACK_IMPORTED_MODULE_14__["AlertifyService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateService"]])
    ], RetroStartComponent);
    return RetroStartComponent;
}());



/***/ }),

/***/ "./src/app/pages/retro-subject/retro-subject.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/retro-subject/retro-subject.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JldHJvLXN1YmplY3QvcmV0cm8tc3ViamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/retro-subject/retro-subject.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/retro-subject/retro-subject.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-tab-header></app-tab-header>\r\n\r\n<div class=\"d-flex justify-content-end mb-3 mt-3\">\r\n    <button class=\"btn btn-theme\" *ngIf=\"!isUser\" type=\"button\" data-toggle=\"modal\" data-target=\"#addModal\">\r\n      <span>{{ 'retro_subject.add_subject' | translate }}</span>\r\n  \r\n    </button>\r\n  </div>\r\n  \r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\" *ngFor=\"let subject of subjects; let i = index\">\r\n      <div class=\"mb-3 card card-theme box-shadow\" >\r\n        <a href=\"javascript:;\" *ngIf=\"isCheckOwner(subject)\" class=\"corner-button\" (click)=\"removeSubject(subject.id)\"><i class=\"fa fa-times-circle fa-2x text-danger\"></i></a>\r\n        <a [class.disabled]=\"isUser\" (click)=\"selectSubject(subject)\" [ngClass]=\"{ active: selectSubjectId == subject.id }\">\r\n          <div class=\"card-body\">\r\n            <h3 class=\"card-title\">{{ subject.subjectTitle }}</h3>\r\n            <p class=\"card-description\">\r\n              {{subject.subjectDescription? subject.subjectDescription:'-'}}\r\n            </p>\r\n          </div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  <div class=\"modal fade\" id=\"addModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\r\n    aria-hidden=\"true\">\r\n    <form #templateForm=\"ngForm\" (ngSubmit)=\"saveSubject()\">\r\n      <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">  {{  getTitle()  }} </h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n  \r\n            <div class=\"form-group\">\r\n              <label>{{ 'retro_subject.company' | translate }}</label>\r\n              <select class=\"form-control\" disabled [(ngModel)]=\"subject.companyId\"\r\n                [ngModelOptions]=\"{ standalone: true }\">\r\n                <option value=\"\" selected>{{ 'retro_subject.select_company' | translate }}</option>\r\n                <option [value]=\"company.id\" *ngFor=\"let company of companys\">{{company.companyName}}</option>\r\n  \r\n              </select>\r\n  \r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>{{ 'retro_subject.hood' | translate }}</label>\r\n              <input style=\"max-height: max-content\" rows=\"10\" class=\"form-control textarea\"\r\n                [(ngModel)]=\"subject.subjectTitle\" [ngModelOptions]=\"{ standalone: true }\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleFormControlTextarea1\">{{ 'retro_subject.detail' | translate }}</label>\r\n              <textarea class=\"form-control\" style=\"height: auto !important;\" [(ngModel)]=\"subject.subjectDescription\" [ngModelOptions]=\"{ standalone: true }\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\r\n            </div>\r\n            \r\n  \r\n          </div>\r\n          <div class=\"modal-footer d-flex align-items-center\">\r\n            <button type=\"button\" class=\"btn btn-default btn-outline-theme btn-block btn-vertical-padding\"\r\n              data-dismiss=\"modal\">{{ 'common.cancel' | translate }}\r\n            </button>\r\n            <button type=\"submit\" class=\"btn btn-theme btn-block mt-0 btn-vertical-padding justify-content-center\">\r\n              {{ 'common.save' | translate }}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>"

/***/ }),

/***/ "./src/app/pages/retro-subject/retro-subject.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/retro-subject/retro-subject.component.ts ***!
  \****************************************************************/
/*! exports provided: RetroSubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetroSubjectComponent", function() { return RetroSubjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_models_subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/models/subject */ "./src/app/models/subject.ts");
/* harmony import */ var app_services_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var app_services_chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var app_models_retro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/models/retro */ "./src/app/models/retro.ts");
/* harmony import */ var app_models_retro_configuration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/models/retro-configuration */ "./src/app/models/retro-configuration.ts");
/* harmony import */ var app_models_dto_subject_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/models/dto/subject-dto */ "./src/app/models/dto/subject-dto.ts");
/* harmony import */ var app_services_company_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var app_models_dto_subject_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/models/dto/subject-filter */ "./src/app/models/dto/subject-filter.ts");
/* harmony import */ var app_services_alertify_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_services_hub_retro_hub_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/services/hub/retro-hub.service */ "./src/app/services/hub/retro-hub.service.ts");
/* harmony import */ var app_services_hub_user_hub_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/services/hub/user-hub.service */ "./src/app/services/hub/user-hub.service.ts");
/* harmony import */ var app_services_retro_configuration__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/services/retro-configuration */ "./src/app/services/retro-configuration.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var RetroSubjectComponent = /** @class */ (function () {
    function RetroSubjectComponent(subjectService, sharedService, authService, chatService, configurationService, retroHubService, userHubService, alertifyService, companyService, translate, router, _ngZone) {
        this.subjectService = subjectService;
        this.sharedService = sharedService;
        this.authService = authService;
        this.chatService = chatService;
        this.configurationService = configurationService;
        this.retroHubService = retroHubService;
        this.userHubService = userHubService;
        this.alertifyService = alertifyService;
        this.companyService = companyService;
        this.translate = translate;
        this.router = router;
        this._ngZone = _ngZone;
        this.subjects = [];
        this.subject = new app_models_subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isUpdate = false;
        this.isUser = false;
        this.retroRight = new app_models_retro_configuration__WEBPACK_IMPORTED_MODULE_9__["RetroConfigration"]();
        this.retro = new app_models_retro__WEBPACK_IMPORTED_MODULE_8__["Retro"]();
        this.selectSubjectId = "";
        this.companys = [];
        this.companyId = '';
        this.retroId = '';
        this.currentUserId = '';
    }
    RetroSubjectComponent.prototype.ngOnInit = function () {
        this.existUser();
        this.subject.companyId = this.authService.currentUserValue.companyId;
        this.getAllCompany();
        this.retroId = this.authService.currentRetroIdValue;
        if (this.retroId) {
            this.getSubjects();
        }
        this.currentUserId = this.authService.currentUserValue.userId;
    };
    RetroSubjectComponent.prototype.selectSubject = function (subject) {
        var _this = this;
        if (this.authService.hasRole("Leader")) {
            this.selectSubjectId = subject.id;
            var retro = new app_models_retro__WEBPACK_IMPORTED_MODULE_8__["Retro"]();
            retro.id = this.retroId;
            retro.state = 2;
            retro.subjectId = this.selectSubjectId;
            retro.currentPage = "/current/template";
            this.configurationService.setCurrentRetro(retro).subscribe(function (res) {
                var selectSubjectDto = new app_models_dto_subject_dto__WEBPACK_IMPORTED_MODULE_10__["SubjectDto"]();
                selectSubjectDto.id = subject.id;
                selectSubjectDto.subjectTitle = subject.subjectTitle;
                selectSubjectDto.subjectDescription = subject.subjectDescription;
                selectSubjectDto.retroId = _this.retroId;
                var current = new app_models_retro__WEBPACK_IMPORTED_MODULE_8__["Retro"]();
                current.currentPage = "/current/template";
                current.id = _this.retroId;
                var newMessage = firebase__WEBPACK_IMPORTED_MODULE_18__["default"].database().ref('currentpath/').push();
                newMessage.set(current);
                _this.configurationService.setSelectedSubject(selectSubjectDto).subscribe(function (res) {
                    _this.router.navigate(["/current/template"]);
                });
            });
        }
    };
    RetroSubjectComponent.prototype.existUser = function () {
        this.isUser = this.authService.hasRole("Member");
    };
    RetroSubjectComponent.prototype.getAllCompany = function () {
        var _this = this;
        this.companyService
            .getAllCompany()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            _this.companys = res;
        }, function (error) {
            _this.alertifyService.error();
        });
    };
    RetroSubjectComponent.prototype.isCheckOwner = function (subject) {
        return this.currentUserId == subject.userId;
    };
    RetroSubjectComponent.prototype.getSubjects = function () {
        var _this = this;
        var filter = new app_models_dto_subject_filter__WEBPACK_IMPORTED_MODULE_12__["SubjectFilter"]();
        filter.companyId = this.authService.currentUserValue.companyId;
        filter.retroId = this.retroId;
        this.subjectService
            .getAllSubject(filter)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            if (res.length > 0) {
                _this.subjects = res;
            }
            else {
                _this.showSwal("warning-message-and-confirmation");
            }
        }, function (error) {
            _this.alertifyService.error();
        });
    };
    RetroSubjectComponent.prototype.editSubject = function (subjectId) {
        var _this = this;
        this.subjectService
            .getSubject(subjectId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            _this.subject = res;
            _this.isUpdate = true;
            $("#addModal").modal("show");
        });
    };
    RetroSubjectComponent.prototype.removeSubject = function (subjectId) {
        var _this = this;
        this.subjectService
            .delete(subjectId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            _this.alertifyService.success();
            _this.getSubjects();
        }, function (error) {
            _this.alertifyService.error();
        });
    };
    RetroSubjectComponent.prototype.getTitle = function () {
        if (this.isUpdate)
            return this.translate.instant("subject.edit_subject");
        else
            return this.translate.instant("subject.add_subject");
    };
    RetroSubjectComponent.prototype.saveSubject = function () {
        var _this = this;
        var data = this.subject;
        this.subject.subjectTitle = this.subject.subjectTitle.replace(/[\t\r\n]/g, "");
        if (!this.isUpdate) {
            data.createRole = "Leader";
            data.userId = this.authService.currentUserValue.userId;
            this.subjectService
                .create(data)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                .subscribe(function (res) {
                _this.subject.subjectTitle = "";
                _this.subject.subjectDescription = "";
                _this.alertifyService.success();
                _this.getSubjects();
                $("#addModal").modal("hide");
            }, function (error) {
                _this.alertifyService.error();
            });
        }
        else {
            this.subjectService
                .update(data)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                .subscribe(function (res) {
                _this.subject.subjectTitle = "";
                _this.subject.subjectDescription = "";
                _this.alertifyService.success();
                _this.getSubjects();
                _this.isUpdate = false;
                $("#addModal").modal("hide");
            }, function (error) {
                _this.alertifyService.error();
            });
        }
    };
    RetroSubjectComponent.prototype.showSwal = function (type, id) {
        var _this = this;
        if (id === void 0) { id = 0; }
        if (type == "warning-message-and-confirmation") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                title: this.translate.instant("common.topic_not_found"),
                text: this.translate.instant("common.topic_create_request"),
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn btn-success",
                cancelButtonClass: "btn btn-danger",
                confirmButtonText: this.translate.instant('common.yes'),
                cancelButtonText: this.translate.instant('common.no'),
                buttonsStyling: false,
            }).then(function (result) {
                if (result.value) {
                    $(".btn-subject-create").click();
                }
            });
        }
        if (type == "warning-message-and-confirmation-delete") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                title: this.translate.instant("common.warning"),
                text: this.translate.instant("common.confirm_delete"),
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn btn-success",
                cancelButtonClass: "btn btn-danger",
                confirmButtonText: this.translate.instant("common.yes"),
                cancelButtonText: this.translate.instant("common.no"),
            }).then(function (result) {
                if (result.value) {
                    _this.removeSubject(id);
                }
            });
        }
    };
    RetroSubjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-retro-subject',
            template: __webpack_require__(/*! ./retro-subject.component.html */ "./src/app/pages/retro-subject/retro-subject.component.html"),
            styles: [__webpack_require__(/*! ./retro-subject.component.css */ "./src/app/pages/retro-subject/retro-subject.component.css")]
        }),
        __metadata("design:paramtypes", [app_services_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectsService"],
            app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            app_services_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"],
            app_services_retro_configuration__WEBPACK_IMPORTED_MODULE_17__["RetroConfigurationService"],
            app_services_hub_retro_hub_service__WEBPACK_IMPORTED_MODULE_15__["RetroHubService"],
            app_services_hub_user_hub_service__WEBPACK_IMPORTED_MODULE_16__["UserHubService"],
            app_services_alertify_service__WEBPACK_IMPORTED_MODULE_13__["AlertifyService"],
            app_services_company_service__WEBPACK_IMPORTED_MODULE_11__["CompanyService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], RetroSubjectComponent);
    return RetroSubjectComponent;
}());



/***/ }),

/***/ "./src/app/pages/retro-template/retro-template.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/retro-template/retro-template.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JldHJvLXRlbXBsYXRlL3JldHJvLXRlbXBsYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/retro-template/retro-template.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/retro-template/retro-template.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-tab-header></app-tab-header>\r\n<app-subject-header></app-subject-header>\r\n\r\n<div class=\"card-title\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <button *ngIf=\"!isUser\" type=\"button\" data-toggle=\"modal\" data-target=\"#addModal\"\r\n        class=\" float-right btn btn-theme btn-horizontal-padding btn-vertical-padding\">\r\n        {{ 'retro_template.add_template' | translate }}\r\n        </button>\r\n      \r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  <div class=\"row mt-5\" *ngIf=\"templates.length > 0\">\r\n    <div class=\"col-sm-6 col-xs-12 mb-3 corner-item\" *ngFor=\"let template of templates; let i = index\">\r\n      <a href=\"javascript:;\"  *ngIf=\"isCheckOwner(template)\" class=\"corner-button-template\" (click)=\"removeTemplate(template)\"><i class=\"fa fa-times-circle fa-2x text-danger\"></i></a>\r\n\r\n      <a [class.disabled]=\"isUser\" *ngIf=\"\r\n      template.templateDetail.length >= 1 &&\r\n      template.templateDetail[0].header != ''\r\n    \" (click)=\"selectTemplate(template.id)\" [ngClass]=\"{ active: selectTemplateId == template.id }\">\r\n        <div class=\"card box-shadow card-theme d-flex justify-content-center align-items-center\">\r\n          <h3 class=\"card-title mb-2 mt-2 text-secondary mini-btn\">\r\n            <span class=\"align-baseline m-1\" *ngFor=\"let detail of template.templateDetail; let j = index\">\r\n              {{ detail.header }}\r\n            </span>\r\n          </h3>\r\n        </div>\r\n      </a>\r\n\r\n      <a  [class.disabled]=\"isUser\"  *ngIf=\"\r\n      template.templateDetail.length == 1 &&\r\n      template.templateDetail[0].header == ''\r\n    \" (click)=\"selectTemplate(template.id)\" [ngClass]=\"{ active: selectTemplateId == template.id }\">\r\n        <div class=\"card box-shadow card-theme d-flex justify-content-center align-items-center\">\r\n          <h3 class=\"card-title mb-2 mt-2 text-secondary\">|\r\n            <span class=\"align-baseline m-1\" >\r\n              {{ 'retro_template.continue_without_template' | translate }}\r\n \r\n            </span>\r\n          </h3>\r\n        </div>\r\n      </a>\r\n    </div>\r\n  \r\n  \r\n  </div>\r\n  \r\n  \r\n  <div class=\"modal fade\" id=\"addModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\r\n    aria-hidden=\"true\">\r\n    <form #templateForm=\"ngForm\" class=\"container mt-3\" (ngSubmit)=\"saveTemplate()\">\r\n      <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">{{ 'retro_template.add_new_template' | translate }}</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n  \r\n            <div class=\"form-group\">\r\n              <label>{{ 'retro_template.company' | translate }}</label>\r\n              <select class=\"form-control\" disabled [(ngModel)]=\"data.companyId\" [ngModelOptions]=\"{ standalone: true }\">\r\n                <option value=\"\" selected>{{ 'retro_template.add_company' | translate }}</option>\r\n                <option [value]=\"company.id\" *ngFor=\"let company of companys\">{{company.companyName}}</option>\r\n  \r\n              </select>\r\n  \r\n            </div>\r\n            <button type=\"button\" (click)=\"addHeader()\" class=\"btn btn-block btn-outline-theme text-center btn-vertical-padding mb-3\">\r\n              <i class=\"fa fa-plus\"></i>\r\n            </button>\r\n            <div class=\"template-title\">\r\n             \r\n              <div class=\"template-title-group\" *ngFor=\"let header of headers; let i = index\">\r\n                <div class=\"form-group\">\r\n                  <label>{{ 'retro_template.hood' | translate }}</label>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"header.header\" name=\"header_{{ header.order }}\"\r\n                    placeholder=\"{{ 'common.title_required' | translate }}\" />\r\n                </div>\r\n                <div class=\"template-title-group__utils\">\r\n                  <div class=\"form-group\">\r\n                    <label>{{ 'retro_template.desk' | translate }}</label>\r\n                    <select class=\"form-control\" (change)=\"changeSort()\" [(ngModel)]=\"header.order\"\r\n                      name=\"order_{{ header.order }}\" placeholder=\"Sıra\">\r\n                      <option *ngFor=\"let i of orderlist; let i = index\" [value]=\"i\">\r\n                        {{ i }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"d-flex align-items-end pb-3 form-cancel\">\r\n                    <button type=\"button\" (click)=\"removeHeader(i)\" class=\"btn btn-theme\">\r\n                      <i class=\"fa fa-times\"></i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n  \r\n            </div>\r\n  \r\n          </div>\r\n          <div class=\"modal-footer d-flex align-items-center\">\r\n            <button type=\"button\" class=\"btn btn-default btn-outline-theme btn-block btn-vertical-padding\"\r\n              data-dismiss=\"modal\">\r\n              {{ 'common.cancel' | translate }}\r\n            </button>\r\n            <button type=\"submit\" class=\"btn btn-theme btn-block mt-0 btn-vertical-padding justify-content-center\">\r\n              {{ 'common.save' | translate }}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/pages/retro-template/retro-template.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/retro-template/retro-template.component.ts ***!
  \******************************************************************/
/*! exports provided: RetroTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetroTemplateComponent", function() { return RetroTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_models_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/models/template */ "./src/app/models/template.ts");
/* harmony import */ var app_services_template_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/template.service */ "./src/app/services/template.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var app_services_chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var app_models_retro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/models/retro */ "./src/app/models/retro.ts");
/* harmony import */ var app_models_subject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/models/subject */ "./src/app/models/subject.ts");
/* harmony import */ var app_services_company_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var app_models_dto_template_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/models/dto/template-filter */ "./src/app/models/dto/template-filter.ts");
/* harmony import */ var app_services_alertify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var app_services_subject_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var app_services_retro_configuration__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/services/retro-configuration */ "./src/app/services/retro-configuration.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_helpers_guid_generator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/helpers/guid-generator */ "./src/app/helpers/guid-generator.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var RetroTemplateComponent = /** @class */ (function () {
    function RetroTemplateComponent(templateService, companyService, sharedService, authService, alertifyService, chatService, subjectService, translate, configureService, router, _ngZone) {
        this.templateService = templateService;
        this.companyService = companyService;
        this.sharedService = sharedService;
        this.authService = authService;
        this.alertifyService = alertifyService;
        this.chatService = chatService;
        this.subjectService = subjectService;
        this.translate = translate;
        this.configureService = configureService;
        this.router = router;
        this._ngZone = _ngZone;
        this.headers = [
            {
                header: "",
                order: 1,
            },
        ];
        this.selectSubject = new app_models_subject__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.templates = [];
        this.isUser = false;
        this.companys = [];
        this.companyId = '';
        this.retroId = '';
        this.data = new app_models_template__WEBPACK_IMPORTED_MODULE_1__["Template"]();
        this.currentUserId = '';
        this.orderlist = [];
    }
    RetroTemplateComponent.prototype.ngOnInit = function () {
        for (var i = 1; i <= 10; i++) {
            this.orderlist.push(i);
        }
        this.existUser();
        this.getAllCompany();
        this.data.companyId = this.authService.currentUserValue.companyId;
        this.retroId = this.authService.currentRetroIdValue;
        if (this.retroId) {
            this.getRetroSubject(this.retroId);
            this.getTemplateList();
        }
        this.currentUserId = this.authService.currentUserValue.userId;
    };
    RetroTemplateComponent.prototype.existUser = function () {
        this.isUser = this.authService.hasRole("Member");
    };
    RetroTemplateComponent.prototype.getAllCompany = function () {
        var _this = this;
        this.companyService
            .getAllCompany()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            _this.companys = res;
        }, function (error) {
            _this.alertifyService.error();
        });
    };
    RetroTemplateComponent.prototype.getRetroSubject = function (retroId) {
        var _this = this;
        this.subjectService
            .getRetroSubject(retroId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            _this.selectSubject = res;
        }, function (error) {
        });
    };
    RetroTemplateComponent.prototype.selectTemplate = function (templateId) {
        var _this = this;
        if (this.authService.hasRole("Leader")) {
            var retro = new app_models_retro__WEBPACK_IMPORTED_MODULE_8__["Retro"]();
            retro.id = this.retroId;
            retro.state = 2;
            retro.subjectId = this.selectSubject.id;
            retro.templateId = templateId;
            retro.currentPage = "/current/brainstorm";
            var generator = new app_helpers_guid_generator__WEBPACK_IMPORTED_MODULE_16__["GuidGenerator"]();
            this.configureService.setCurrentRetro(retro).subscribe(function (res) {
                var current = new app_models_retro__WEBPACK_IMPORTED_MODULE_8__["Retro"]();
                current.currentPage = "/current/brainstorm";
                current.id = _this.retroId;
                var newMessage = firebase__WEBPACK_IMPORTED_MODULE_17__["default"].database().ref('currentpath/').push();
                newMessage.set(current).then(function (p) {
                    _this.router.navigate(["/current/brainstorm"]);
                });
            });
            ;
        }
    };
    RetroTemplateComponent.prototype.showSwal = function (type) {
        if (type == "warning-message-and-confirmation") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                title: this.translate.instant("common.template_not_found"),
                text: this.translate.instant("common.template_create_request"),
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn btn-success",
                cancelButtonClass: "btn btn-danger",
                confirmButtonText: this.translate.instant("common.yes"),
                cancelButtonText: this.translate.instant("common.no"),
                buttonsStyling: false,
            }).then(function (result) {
                if (result.value) {
                    $(".btn-create").click();
                }
            });
        }
    };
    RetroTemplateComponent.prototype.isCheckOwner = function (subject) {
        return this.currentUserId == subject.userId;
    };
    RetroTemplateComponent.prototype.removeTemplate = function (template) {
        var _this = this;
        this.templateService
            .delete(template.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            _this.getTemplateList();
        }, function (error) {
            _this.alertifyService.error();
        });
    };
    RetroTemplateComponent.prototype.getTemplateList = function () {
        var _this = this;
        var filter = new app_models_dto_template_filter__WEBPACK_IMPORTED_MODULE_11__["TemplateFilter"]();
        filter.companyId = this.authService.currentUserValue.companyId;
        filter.retroId = this.retroId;
        this.templateService
            .getAllTemplate(filter)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            if (res.length > 0) {
                _this.templates = res;
            }
            else {
                // this.showSwal("warning-message-and-confirmation");
            }
        }, function (error) {
            _this.alertifyService.error();
        });
    };
    RetroTemplateComponent.prototype.addHeader = function () {
        this.headers.push({
            header: "",
            order: this.headers.length + 1,
        });
    };
    RetroTemplateComponent.prototype.changeSort = function () {
        this.headers.sort(function (a, b) {
            return a.order - b.order;
        });
    };
    RetroTemplateComponent.prototype.removeHeader = function (i) {
        this.headers.splice(i, 1);
    };
    RetroTemplateComponent.prototype.saveTemplate = function () {
        var _this = this;
        this.headers = this.headers.filter(function (p) { return p.header != ""; });
        this.data.templateDetail = this.headers;
        this.data.templateName = new Date().getTime().toString();
        this.data.createRole = "Leader";
        this.data.userId = this.authService.currentUserValue.userId;
        this.templateService
            .create(this.data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (res) {
            _this.alertifyService.success();
            _this.getTemplateList();
            _this.headers = [
                {
                    header: "",
                    order: 1,
                },
            ];
            $("#addModal").modal("hide");
        }, function (error) {
            _this.alertifyService.error();
        });
    };
    RetroTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-retro-template',
            template: __webpack_require__(/*! ./retro-template.component.html */ "./src/app/pages/retro-template/retro-template.component.html"),
            styles: [__webpack_require__(/*! ./retro-template.component.css */ "./src/app/pages/retro-template/retro-template.component.css")]
        }),
        __metadata("design:paramtypes", [app_services_template_service__WEBPACK_IMPORTED_MODULE_2__["TemplateService"],
            app_services_company_service__WEBPACK_IMPORTED_MODULE_10__["CompanyService"],
            app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            app_services_alertify_service__WEBPACK_IMPORTED_MODULE_12__["AlertifyService"],
            app_services_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"],
            app_services_subject_service__WEBPACK_IMPORTED_MODULE_13__["SubjectsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateService"],
            app_services_retro_configuration__WEBPACK_IMPORTED_MODULE_14__["RetroConfigurationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], RetroTemplateComponent);
    return RetroTemplateComponent;
}());



/***/ }),

/***/ "./src/app/pages/retro-vote/retro-vote.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/retro-vote/retro-vote.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JldHJvLXZvdGUvcmV0cm8tdm90ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/retro-vote/retro-vote.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/retro-vote/retro-vote.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-tab-header></app-tab-header>\r\n<app-subject-header></app-subject-header>\r\n\r\n<div class=\"d-flex justify-content-end mt-3\">\r\n  <span class=\"pill-title text-bold\" *ngIf=\"retroRight != null\"  [ngClass]=\"\r\n  retroRight.voteRight > 0 ? 'text-success' : 'text-danger'\r\n\">\r\n{{ 'retro_vote.voting_right' | translate }}:{{ retroRight.voteRight }}</span>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"categories mt-5\" *ngFor=\"let tmp of template.templateDetail\">\r\n  <div class=\"category\" >\r\n    <h5 *ngIf=\"GetHeaderMessage(tmp.id).length>0\">{{tmp.header}}</h5>\r\n    <div class=\"card card-theme box-shadow-sm border-radius-lg mb-3\" *ngFor=\"let message of GetHeaderMessage(tmp.id)\" >\r\n      <div class=\"card-body p-1 d-flex align-items-center justify-content-between\" >\r\n        <div class=\"card-description\">\r\n          {{ message.messageText }}\r\n        </div>\r\n        <div class=\"card-actions d-flex justify-content-between text-nowrap\">\r\n          <button (click)=\"getComment(message)\" class=\"btn btn-theme btn-horizontal-padding-xs mr-2 btn-list-comment\">\r\n            <i class=\"fa fa-comment-alt mr-2\"></i>\r\n            <div class=\"d-md-block d-none\">{{ 'retro_vote.comments' | translate }}</div>\r\n            \r\n            <span class=\"count\">{{message.commentCount}}</span>\r\n          </button>\r\n          <button [disabled]=\"retroRight.voteRight <= 0 \" (click)=\"setVote(message)\"\r\n            class=\"btn btn-theme btn-horizontal-padding-xs\">\r\n            <i class=\"fa fa-thumbs-up mr-2\" [ngClass]=\"{\r\n              'text-secondary':isVotedCheck(message.id) === true\r\n              \r\n            }\"></i>\r\n            <div class=\"d-md-block d-none\">{{ 'retro_vote.vote' | translate }}</div>\r\n            <span class=\"count\">{{message.voteCount}}</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"modal fade\" id=\"modalComment\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\r\n    aria-hidden=\"true\">\r\n    <form #templateForm=\"ngForm\" (ngSubmit)=\"sendComment()\">\r\n      <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">{{ 'retro_vote.comments' | translate }}</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n\r\n            <div class=\"row\" *ngFor=\"let comment of message.comments\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"card mt-2\">\r\n                  <div class=\"card-header\">\r\n                    {{ comment.commentText }}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n\r\n\r\n  \r\n"

/***/ }),

/***/ "./src/app/pages/retro-vote/retro-vote.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/retro-vote/retro-vote.component.ts ***!
  \**********************************************************/
/*! exports provided: RetroVoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetroVoteComponent", function() { return RetroVoteComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_models_categorized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/models/categorized */ "./src/app/models/categorized.ts");
/* harmony import */ var app_models_dto_vote_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/models/dto/vote-dto */ "./src/app/models/dto/vote-dto.ts");
/* harmony import */ var app_models_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/models/message */ "./src/app/models/message.ts");
/* harmony import */ var app_models_retro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/models/retro */ "./src/app/models/retro.ts");
/* harmony import */ var app_models_retro_configuration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/models/retro-configuration */ "./src/app/models/retro-configuration.ts");
/* harmony import */ var app_models_subject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/models/subject */ "./src/app/models/subject.ts");
/* harmony import */ var app_models_template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/models/template */ "./src/app/models/template.ts");
/* harmony import */ var app_services_category_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var app_services_chat_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var app_services_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var app_services_retro_configuration__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/services/retro-configuration */ "./src/app/services/retro-configuration.ts");
/* harmony import */ var app_services_shared_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var app_services_subject_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var app_services_template_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/services/template.service */ "./src/app/services/template.service.ts");
/* harmony import */ var app_services_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var app_helpers_firebase_helper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/helpers/firebase-helper */ "./src/app/helpers/firebase-helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var RetroVoteComponent = /** @class */ (function () {
    function RetroVoteComponent(_ngZone, chatService, messageService, categoryService, sharedService, authService, templateService, subjectService, configureService) {
        var _this = this;
        this._ngZone = _ngZone;
        this.chatService = chatService;
        this.messageService = messageService;
        this.categoryService = categoryService;
        this.sharedService = sharedService;
        this.authService = authService;
        this.templateService = templateService;
        this.subjectService = subjectService;
        this.configureService = configureService;
        this.message = new app_models_message__WEBPACK_IMPORTED_MODULE_4__["Message"]();
        this.categorys = new Array();
        this.subject = new app_models_subject__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.categorized = new app_models_categorized__WEBPACK_IMPORTED_MODULE_2__["Categorized"]();
        this.categorizedMessages = new Array();
        this.comments = new Array();
        this.retroRight = new app_models_retro_configuration__WEBPACK_IMPORTED_MODULE_6__["RetroConfigration"]();
        this.isUser = false;
        this.votedMessages = new Array();
        this.messages = [];
        this.retro = new app_models_retro__WEBPACK_IMPORTED_MODULE_5__["Retro"]();
        this.template = new app_models_template__WEBPACK_IMPORTED_MODULE_8__["Template"]();
        this.retroId = '';
        this.selectSubject = new app_models_subject__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        firebase__WEBPACK_IMPORTED_MODULE_18__["default"].database().ref('vote/').limitToLast(1).on('value', function (resp) {
            if (_this.currentRetro) {
                var data = Object(app_helpers_firebase_helper__WEBPACK_IMPORTED_MODULE_19__["snapshotToArray"])(resp);
                if (data.length > 0) {
                    _this.messageService
                        .getAllNonCategoryMessage(_this.currentRetro.id)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["first"])())
                        .subscribe(function (data) {
                        _this.messages = data;
                    }, function (error) { });
                }
            }
        });
    }
    RetroVoteComponent.prototype.ngOnInit = function () {
        this.retroId = this.authService.currentRetroIdValue;
        if (this.retroId) {
            this.getLastCurrentRetro(this.retroId);
        }
        this.existUser();
    };
    RetroVoteComponent.prototype.getLastCurrentRetro = function (retroId) {
        var _this = this;
        this.configureService
            .getCurrentRetro(retroId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["first"])())
            .subscribe(function (res) {
            _this.currentRetro = res;
            if (_this.currentRetro) {
                _this.getRetroSubject(_this.currentRetro.id);
                _this.getRetroTemplate(_this.currentRetro.id);
                _this.getCategory();
                _this.getUserRight(_this.currentRetro.id);
                _this.getAllMessage();
            }
        }, function (error) {
        });
    };
    RetroVoteComponent.prototype.getAllMessage = function () {
        var _this = this;
        this.messageService
            .getAllNonCategoryMessage(this.currentRetro.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["first"])())
            .subscribe(function (data) {
            _this.messages = data;
        }, function (error) { });
    };
    RetroVoteComponent.prototype.getRetroSubject = function (retroId) {
        var _this = this;
        this.subjectService
            .getRetroSubject(retroId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["first"])())
            .subscribe(function (res) {
            _this.selectSubject = res;
        }, function (error) {
        });
    };
    RetroVoteComponent.prototype.getUserRight = function (retroId) {
        var _this = this;
        var retro = new app_models_retro__WEBPACK_IMPORTED_MODULE_5__["Retro"]();
        retro.id = retroId;
        retro.userId = this.authService.currentUserValue.userId;
        this.configureService
            .getUserRight(retro)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["first"])())
            .subscribe(function (res) {
            _this.retroRight = res;
        }, function (error) {
        });
    };
    RetroVoteComponent.prototype.getComment = function (message) {
        this.getMessage(message.id);
        $('#modalComment').modal('show');
    };
    RetroVoteComponent.prototype.GetHeaderMessage = function (headerId) {
        var filteredData = this.messages.filter(function (p) { return p.clientuniqueid == headerId; });
        return filteredData;
    };
    RetroVoteComponent.prototype.getRetroTemplate = function (retroId) {
        var _this = this;
        this.templateService
            .getTemplateByRetroId(retroId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["first"])())
            .subscribe(function (data) {
            _this.template = data;
        }, function (error) { });
    };
    RetroVoteComponent.prototype.existUser = function () {
        this.isUser = this.authService.hasRole("Member");
    };
    RetroVoteComponent.prototype.isVotedCheck = function (messageId) {
        var existVoted = this.votedMessages.filter(function (p) { return p == messageId; })[0];
        if (existVoted == null || existVoted == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    RetroVoteComponent.prototype.setVote = function (message) {
        var _this = this;
        var data = new app_models_dto_vote_dto__WEBPACK_IMPORTED_MODULE_3__["VoteDto"]();
        var currentUser = this.authService.currentUserValue;
        var existVoted = this.votedMessages.filter(function (p) { return p == message.id; })[0];
        if (existVoted == null || existVoted == undefined) {
            data.vote = true;
            this.votedMessages.push(message.id);
        }
        else {
            var index = this.votedMessages.indexOf(existVoted);
            this.votedMessages.splice(index, 1);
            data.vote = false;
        }
        data.messageId = message.id;
        data.retroId = this.retroRight.retroId;
        data.userId = currentUser.userId;
        // this.chatService.setVote(data);
        this.configureService.newVote(data).subscribe(function (res) {
            var newMessage = firebase__WEBPACK_IMPORTED_MODULE_18__["default"].database().ref('vote/').push();
            newMessage.set(data);
            _this.retroRight = res;
        });
    };
    RetroVoteComponent.prototype.getMessage = function (messageId) {
        var _this = this;
        this.messageService
            .getMessageById(messageId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["first"])())
            .subscribe(function (data) {
            _this.message = data;
        }, function (error) { });
    };
    RetroVoteComponent.prototype.getCategory = function () {
        var _this = this;
        this.messageService
            .getAllNonCategoryMessage(this.currentRetro.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["first"])())
            .subscribe(function (data) {
            _this.messages = data;
        }, function (error) { });
    };
    RetroVoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-retro-vote',
            template: __webpack_require__(/*! ./retro-vote.component.html */ "./src/app/pages/retro-vote/retro-vote.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideDownUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* => *", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":leave", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(500, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.5s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))])], {
                            optional: true
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(":enter", [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(500, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.5s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))])
                        ], { optional: true })
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./retro-vote.component.css */ "./src/app/pages/retro-vote/retro-vote.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            app_services_chat_service__WEBPACK_IMPORTED_MODULE_10__["ChatService"],
            app_services_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"],
            app_services_category_service__WEBPACK_IMPORTED_MODULE_9__["CategoryService"],
            app_services_shared_service__WEBPACK_IMPORTED_MODULE_13__["SharedService"],
            app_services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"],
            app_services_template_service__WEBPACK_IMPORTED_MODULE_15__["TemplateService"],
            app_services_subject_service__WEBPACK_IMPORTED_MODULE_14__["SubjectsService"],
            app_services_retro_configuration__WEBPACK_IMPORTED_MODULE_12__["RetroConfigurationService"]])
    ], RetroVoteComponent);
    return RetroVoteComponent;
}());



/***/ }),

/***/ "./src/app/services/hub/retro-hub.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/hub/retro-hub.service.ts ***!
  \***************************************************/
/*! exports provided: RetroHubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetroHubService", function() { return RetroHubService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var RetroHubService = /** @class */ (function () {
    function RetroHubService(userService, sharedService) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.connectionEstablished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentRetroReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.allUserRight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subjectReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.connectionIsEstablished = false;
        this.createConnection();
        this.startConnection();
        this.getCurrentRetro();
        this.getSelectedSubject();
    }
    RetroHubService.prototype.createConnection = function () {
        this._hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]()
            .withUrl(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverBaseUrl + "/RetroHub")
            .configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information)
            .build();
    };
    RetroHubService.prototype.startConnection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._hubConnection
                            .start()
                            .then(function () {
                            _this.connectionIsEstablished = true;
                            _this.connectionEstablished.emit(true);
                        })
                            .catch(function (err) {
                            console.log("Error while establishing connection, retrying...");
                            setTimeout(function () {
                                _this.startConnection();
                            }, 5000);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RetroHubService.prototype.setCurrentRetro = function (data) {
        var _this = this;
        this._hubConnection.invoke("setCurrentRetro", data).catch(function (err) { return _this.startConnection(); });
    };
    RetroHubService.prototype.getCurrentRetro = function () {
        var _this = this;
        this._hubConnection.on("currentRetroReceived", function (data) {
            _this.currentRetroReceived.emit(data);
        });
    };
    RetroHubService.prototype.setSelectedSubject = function (data) {
        var _this = this;
        this._hubConnection.invoke("setSelectedSubject", data).catch(function (err) { return _this.startConnection(); });
    };
    RetroHubService.prototype.getSelectedSubject = function () {
        var _this = this;
        this._hubConnection.on("getSelectedSubjectReceived", function (data) {
            _this.subjectReceived.emit(data);
        });
    };
    RetroHubService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], RetroHubService);
    return RetroHubService;
}());



/***/ }),

/***/ "./src/app/services/hub/user-hub.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/hub/user-hub.service.ts ***!
  \**************************************************/
/*! exports provided: UserHubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHubService", function() { return UserHubService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var UserHubService = /** @class */ (function () {
    function UserHubService(userService, sharedService) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.connectionEstablished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.allUserRight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.connectionIsEstablished = false;
        this.createConnection();
        this.startConnection();
        this.getUserRights();
    }
    UserHubService.prototype.createConnection = function () {
        this._hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]()
            .withUrl(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverBaseUrl + "/UserHub")
            .configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug)
            .build();
    };
    UserHubService.prototype.startConnection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._hubConnection
                            .start()
                            .then(function () {
                            _this.connectionIsEstablished = true;
                            _this.connectionEstablished.emit(true);
                        })
                            .catch(function (err) {
                            console.log("Error while establishing connection, retrying...");
                            setTimeout(function () {
                                _this.startConnection();
                            }, 5000);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserHubService.prototype.setAllUserRights = function (retro) {
        var _this = this;
        this._hubConnection.invoke("allUserRight", retro).catch(function (err) { return _this.startConnection(); });
    };
    UserHubService.prototype.getUserRights = function () {
        var _this = this;
        this._hubConnection.on("allUserRight", function (data) {
            _this.allUserRight.emit(data);
        });
    };
    UserHubService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], UserHubService);
    return UserHubService;
}());



/***/ }),

/***/ "./src/app/shared/subject-header/subject-header.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/subject-header/subject-header.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zdWJqZWN0LWhlYWRlci9zdWJqZWN0LWhlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/subject-header/subject-header.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/subject-header/subject-header.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-3 mt-4 card card-theme box-shadow\" *ngIf=\"  selectSubject.subjectTitle\">\r\n  <div class=\"card-body\">\r\n    <h3 class=\"card-title\">{{ selectSubject.subjectTitle }}</h3>\r\n    <p class=\"card-description\">\r\n      {{ selectSubject.subjectDescription }}\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/subject-header/subject-header.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/subject-header/subject-header.component.ts ***!
  \*******************************************************************/
/*! exports provided: SubjectHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectHeaderComponent", function() { return SubjectHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_models_subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/models/subject */ "./src/app/models/subject.ts");
/* harmony import */ var app_services_hub_retro_hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/hub/retro-hub.service */ "./src/app/services/hub/retro-hub.service.ts");
/* harmony import */ var app_services_retro_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/retro-configuration */ "./src/app/services/retro-configuration.ts");
/* harmony import */ var app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var app_services_subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/subject.service */ "./src/app/services/subject.service.ts");
/* harmony import */ var app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SubjectHeaderComponent = /** @class */ (function () {
    function SubjectHeaderComponent(subjectService, userService, retroConfigurationService, retroHubService, sharedService, _ngZone) {
        this.subjectService = subjectService;
        this.userService = userService;
        this.retroConfigurationService = retroConfigurationService;
        this.retroHubService = retroHubService;
        this.sharedService = sharedService;
        this._ngZone = _ngZone;
        this.selectSubject = new app_models_subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.retroId = '';
    }
    SubjectHeaderComponent.prototype.ngOnInit = function () {
        this.retroId = this.userService.currentRetroIdValue;
        if (this.retroId) {
            this.getLastCurrentRetro(this.retroId);
        }
    };
    SubjectHeaderComponent.prototype.getLastCurrentRetro = function (retroId) {
        var _this = this;
        this.retroConfigurationService
            .getCurrentRetro(retroId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
            .subscribe(function (res) {
            _this.currentRetro = res;
            if (_this.currentRetro)
                _this.getRetroSubject(_this.currentRetro.id);
        }, function (error) {
        });
    };
    SubjectHeaderComponent.prototype.getRetroSubject = function (retroId) {
        var _this = this;
        this.subjectService
            .getRetroSubject(retroId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
            .subscribe(function (res) {
            _this.selectSubject = res;
        }, function (error) {
        });
    };
    SubjectHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subject-header',
            template: __webpack_require__(/*! ./subject-header.component.html */ "./src/app/shared/subject-header/subject-header.component.html"),
            styles: [__webpack_require__(/*! ./subject-header.component.css */ "./src/app/shared/subject-header/subject-header.component.css")]
        }),
        __metadata("design:paramtypes", [app_services_subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectsService"],
            app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            app_services_retro_configuration__WEBPACK_IMPORTED_MODULE_3__["RetroConfigurationService"],
            app_services_hub_retro_hub_service__WEBPACK_IMPORTED_MODULE_2__["RetroHubService"],
            app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], SubjectHeaderComponent);
    return SubjectHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/tab-header/tab-header.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/tab-header/tab-header.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90YWItaGVhZGVyL3RhYi1oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/tab-header/tab-header.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/tab-header/tab-header.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ul class=\"header__retro-navigation tab-progress custom-slider-main\" #widgetsContent role=\"tablist\" >\r\n  <li class=\"navigation-item active\">\r\n    <a class=\"navigation-link template subject\"     [class.active]=\"isActive('/current/subject')\"\r\n    (click)=\"clickTab('/current/subject',true)\"\r\n      >\r\n      {{ 'tab_header.select_topic' | translate }}\r\n    </a>\r\n  </li>\r\n  <li class=\"navigation-item\">\r\n    <a class=\"navigation-link  template\"    [class.active]=\"isActive('/current/template')\"\r\n      (click)=\"clickTab('/current/template',true)\"\r\n     >\r\n     {{ 'tab_header.Choose_Template' | translate }}\r\n    </a>\r\n  </li>\r\n\r\n  <li class=\"navigation-item\">\r\n    <a class=\"navigation-link  brainstorm\"    [class.active]=\"isActive('/current/brainstorm')\"\r\n      (click)=\"clickTab('/current/brainstorm',true)\"\r\n      >\r\n      {{ 'tab_header.Develop_an_Idea' | translate }}\r\n    </a>\r\n  </li>\r\n  <li class=\"navigation-item\">\r\n  \r\n    <a class=\"navigation-link  categorize\"   [class.active]=\"isActive('/current/categorize')\"\r\n      (click)=\"clickTab('/current/categorize',true)\"\r\n      >\r\n      {{ 'tab_header.categorize' | translate }}\r\n    </a>\r\n  </li>\r\n  <li class=\"navigation-item\">\r\n    <a class=\"navigation-link  categorize\"  [class.active]=\"isActive('/current/comment')\"\r\n      (click)=\"clickTab('/current/comment',true)\">\r\n      {{ 'tab_header.comment' | translate }}\r\n    </a>\r\n  </li>\r\n\r\n  <li class=\"navigation-item\">\r\n    <a class=\"navigation-link  comment\"     [class.active]=\"isActive('/current/vote')\"\r\n      (click)=\"clickTab('/current/vote',true)\">\r\n      {{ 'tab_header.vote' | translate }}\r\n    </a>\r\n  </li>\r\n\r\n  <li class=\"navigation-item\">\r\n    <a class=\"navigation-link  vote report finish\"   [class.active]=\"isActive('/current/report')\"\r\n      (click)=\"clickTab('/current/report',true)\"\r\n      >\r\n      {{ 'tab_header.report' | translate }}\r\n    </a>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/shared/tab-header/tab-header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/tab-header/tab-header.component.ts ***!
  \***********************************************************/
/*! exports provided: TabHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHeaderComponent", function() { return TabHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var app_helpers_firebase_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/helpers/firebase-helper */ "./src/app/helpers/firebase-helper.ts");
/* harmony import */ var app_models_retro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/models/retro */ "./src/app/models/retro.ts");
/* harmony import */ var app_helpers_guid_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/helpers/guid-generator */ "./src/app/helpers/guid-generator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabHeaderComponent = /** @class */ (function () {
    function TabHeaderComponent(router, authService) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.currentTab = "";
        this.pathIndex = 0;
        this.retroId = '';
        this.retroId = this.authService.currentRetroIdValue;
        firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('currentpath/').orderByChild("id").equalTo(this.retroId).limitToLast(1).on('value', function (resp) {
            var data = Object(app_helpers_firebase_helper__WEBPACK_IMPORTED_MODULE_4__["snapshotToArray"])(resp);
            if (data.length > 0) {
                var currentPage = data[0].currentPage;
                var scrollDestination = currentPage.split("/");
                if (data[0].id == _this.retroId) {
                    if (scrollDestination.length >= 2) {
                        var elementList = document.querySelectorAll('.' + scrollDestination[2]);
                        var element = elementList[0];
                        if (element != undefined)
                            element.scrollIntoView({ behavior: 'smooth' });
                    }
                    if (currentPage != "/current/finish") {
                        _this.router.navigate([currentPage]);
                    }
                    else {
                        if (_this.isLeader()) {
                            firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref("/currentPath").remove();
                            _this.router.navigate(["/current/start"]);
                        }
                        else {
                            _this.authService.logout();
                            _this.router.navigate(["/current/finish"]);
                        }
                    }
                }
            }
        });
    }
    TabHeaderComponent.prototype.ngAfterViewInit = function () {
        var width = window.innerWidth;
        if (width <= 576)
            this.widgetsContent.nativeElement.scrollLeft += 150;
    };
    TabHeaderComponent.prototype.ngOnInit = function () {
        this.currentTab = this.router.url;
        this.retroId = this.authService.currentRetroIdValue;
        if (this.retroId) {
            this.clickTab(this.currentTab, false);
        }
    };
    TabHeaderComponent.prototype.isActive = function (currentTab) {
        return this.router.url == currentTab;
    };
    TabHeaderComponent.prototype.isLeader = function () {
        return this.authService.hasRole("Leader");
    };
    TabHeaderComponent.prototype.clickTab = function (tab, isAuto) {
        if (isAuto === void 0) { isAuto = true; }
        this.currentTab = tab;
        var generator = new app_helpers_guid_generator__WEBPACK_IMPORTED_MODULE_6__["GuidGenerator"]();
        var current = new app_models_retro__WEBPACK_IMPORTED_MODULE_5__["Retro"]();
        current.currentPage = this.currentTab;
        current.id = this.retroId;
        if (this.isLeader()) {
            var newMessage = firebase__WEBPACK_IMPORTED_MODULE_3__["default"].database().ref('currentpath/').push();
            newMessage.set(current);
            var scrollDestination = tab.split("/");
            if (scrollDestination.length >= 2) {
                var elementList = document.querySelectorAll('.' + scrollDestination[2]);
                var element = elementList[0];
                if (element != undefined)
                    element.scrollIntoView({ behavior: 'smooth' });
            }
            if ("/current/subject" == this.currentTab) {
                if (this.authService.hasRole("Leader")) {
                    this.pathIndex = 1;
                }
            }
            if ("/current/template" == this.currentTab) {
                if (this.authService.hasRole("Leader")) {
                    this.pathIndex = 2;
                }
            }
            if ("/current/brainstorm" == this.currentTab) {
                if (this.authService.hasRole("Leader")) {
                    this.pathIndex = 3;
                }
            }
            if ("/current/comment" == this.currentTab) {
                if (this.authService.hasRole("Leader")) {
                    this.pathIndex = 4;
                }
            }
            if ("/current/categorize" == this.currentTab) {
                if (this.authService.hasRole("Leader")) {
                    this.pathIndex = 5;
                }
            }
            if ("/current/vote" == this.currentTab) {
                if (this.authService.hasRole("Leader")) {
                    this.pathIndex = 6;
                }
            }
            if ("/current/report" == this.currentTab) {
                if (this.authService.hasRole("Leader")) {
                    this.pathIndex = 7;
                }
            }
            if (isAuto)
                this.router.navigate([this.currentTab]);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("widgetsContent"),
        __metadata("design:type", Object)
    ], TabHeaderComponent.prototype, "widgetsContent", void 0);
    TabHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab-header',
            template: __webpack_require__(/*! ./tab-header.component.html */ "./src/app/shared/tab-header/tab-header.component.html"),
            styles: [__webpack_require__(/*! ./tab-header.component.css */ "./src/app/shared/tab-header/tab-header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], TabHeaderComponent);
    return TabHeaderComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map