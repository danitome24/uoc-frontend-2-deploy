function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.ts":
  /*!********************************!*\
    !*** ./src/app/app-routing.ts ***!
    \********************************/

  /*! exports provided: rootRouterConfig */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rootRouterConfig", function () {
      return rootRouterConfig;
    });
    /* harmony import */


    var _shared_components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./shared/components/admin-layout/admin-layout.component */
    "./src/app/shared/components/admin-layout/admin-layout.component.ts");
    /* harmony import */


    var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/guards/auth.guard */
    "./src/app/shared/guards/auth.guard.ts");

    var rootRouterConfig = [{
      path: '',
      redirectTo: 'auth',
      pathMatch: 'full'
    }, {
      path: 'auth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | auth-auth-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./auth/auth.module */
        "./src/app/auth/auth.module.ts")).then(function (m) {
          return m.AuthModule;
        });
      },
      data: {
        title: 'Auth'
      }
    }, {
      path: 'admin',
      component: _shared_components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
      canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
      children: [{
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | views-dashboard-dashboard-module */
          "views-dashboard-dashboard-module").then(__webpack_require__.bind(null,
          /*! ./views/dashboard/dashboard.module */
          "./src/app/views/dashboard/dashboard.module.ts")).then(function (m) {
            return m.DashboardModule;
          });
        },
        data: {
          title: 'Dashboard',
          breadcrumb: 'DASHBOARD'
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | profile-profile-module */
          "profile-profile-module").then(__webpack_require__.bind(null,
          /*! ./profile/profile.module */
          "./src/app/profile/profile.module.ts")).then(function (m) {
            return m.ProfileModule;
          });
        },
        data: {
          title: 'Profile',
          breadcrumb: 'PROFILE'
        }
      }, {
        path: 'favorites',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | views-favorites-favorites-module */
          "views-favorites-favorites-module").then(__webpack_require__.bind(null,
          /*! ./views/favorites/favorites.module */
          "./src/app/views/favorites/favorites.module.ts")).then(function (m) {
            return m.FavoritesModule;
          });
        },
        data: {
          title: 'Favorites',
          breadcrumb: 'FAVORITES'
        }
      }, {
        path: 'offers',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | offers-offers-module */
          [__webpack_require__.e("common"), __webpack_require__.e("offers-offers-module")]).then(__webpack_require__.bind(null,
          /*! ./offers/offers.module */
          "./src/app/offers/offers.module.ts")).then(function (m) {
            return m.OffersModule;
          });
        },
        data: {
          title: 'Offers',
          breadcrumb: 'Offers'
        }
      }]
    }, {
      path: '**',
      redirectTo: 'sessions/404'
    }];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'UOCJob';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/core.module */
    "./src/app/shared/core.module.ts");
    /* harmony import */


    var _shared_inmemory_db_fake_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/inmemory-db/fake-backend.service */
    "./src/app/shared/inmemory-db/fake-backend.service.ts");
    /* harmony import */


    var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-in-memory-web-api */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing */
    "./src/app/app-routing.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _reducers_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./reducers/index */
    "./src/app/reducers/index.ts");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _auth_signin_signin_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./auth/signin/signin.module */
    "./src/app/auth/signin/signin.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"].withServerTransition({
        appId: 'serverApp'
      }), _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _shared_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_8__["rootRouterConfig"], {
        useHash: false,
        initialNavigation: 'enabled'
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _auth_signin_signin_module__WEBPACK_IMPORTED_MODULE_15__["SigninModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"].forRoot(_shared_inmemory_db_fake_backend_service__WEBPACK_IMPORTED_MODULE_2__["FakeBackendService"], {
        dataEncapsulation: false
      }), _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot(_reducers_index__WEBPACK_IMPORTED_MODULE_10__["reducers"], {
        metaReducers: _reducers_index__WEBPACK_IMPORTED_MODULE_10__["metaReducers"],
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__["EffectsModule"].forRoot(_reducers_index__WEBPACK_IMPORTED_MODULE_10__["effects"]), !_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__["StoreDevtoolsModule"].instrument() : [], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_12__["StoreRouterConnectingModule"].forRoot({
        stateKey: 'router'
      }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["NoopAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _shared_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _auth_signin_signin_module__WEBPACK_IMPORTED_MODULE_15__["SigninModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__["StoreDevtoolsModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_12__["StoreRouterConnectingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["NoopAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"].withServerTransition({
            appId: 'serverApp'
          }), _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _shared_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_8__["rootRouterConfig"], {
            useHash: false,
            initialNavigation: 'enabled'
          }), _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _auth_signin_signin_module__WEBPACK_IMPORTED_MODULE_15__["SigninModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"].forRoot(_shared_inmemory_db_fake_backend_service__WEBPACK_IMPORTED_MODULE_2__["FakeBackendService"], {
            dataEncapsulation: false
          }), _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot(_reducers_index__WEBPACK_IMPORTED_MODULE_10__["reducers"], {
            metaReducers: _reducers_index__WEBPACK_IMPORTED_MODULE_10__["metaReducers"],
            runtimeChecks: {
              strictStateImmutability: true,
              strictActionImmutability: true
            }
          }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__["EffectsModule"].forRoot(_reducers_index__WEBPACK_IMPORTED_MODULE_10__["effects"]), !_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__["StoreDevtoolsModule"].instrument() : [], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_12__["StoreRouterConnectingModule"].forRoot({
            stateKey: 'router'
          }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["NoopAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production
          })],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/actions/auth.actions.ts":
  /*!**********************************************!*\
    !*** ./src/app/auth/actions/auth.actions.ts ***!
    \**********************************************/

  /*! exports provided: SIGN_IN, SIGN_IN_FAILED, SIGN_IN_SUCCESS, LOGOUT, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_FAILED, FORGOT_PASSWORD_SUCCESS, SHOW_USER_PROFILE, UPDATE_USER_PROFILE, ADD_LANGUAGE, UPDATE_LANGUAGE, DELETE_LANGUAGE, ADD_STUDY, UPDATE_STUDY, DELETE_STUDY, ADD_WORK_EXPERIENCE, UPDATE_WORK_EXPERIENCE, DELETE_WORK_EXPERIENCE, actions */

  /***/
  function srcAppAuthActionsAuthActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SIGN_IN", function () {
      return SIGN_IN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SIGN_IN_FAILED", function () {
      return SIGN_IN_FAILED;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SIGN_IN_SUCCESS", function () {
      return SIGN_IN_SUCCESS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOGOUT", function () {
      return LOGOUT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FORGOT_PASSWORD_REQUEST", function () {
      return FORGOT_PASSWORD_REQUEST;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FORGOT_PASSWORD_FAILED", function () {
      return FORGOT_PASSWORD_FAILED;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FORGOT_PASSWORD_SUCCESS", function () {
      return FORGOT_PASSWORD_SUCCESS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SHOW_USER_PROFILE", function () {
      return SHOW_USER_PROFILE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_USER_PROFILE", function () {
      return UPDATE_USER_PROFILE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADD_LANGUAGE", function () {
      return ADD_LANGUAGE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_LANGUAGE", function () {
      return UPDATE_LANGUAGE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DELETE_LANGUAGE", function () {
      return DELETE_LANGUAGE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADD_STUDY", function () {
      return ADD_STUDY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_STUDY", function () {
      return UPDATE_STUDY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DELETE_STUDY", function () {
      return DELETE_STUDY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADD_WORK_EXPERIENCE", function () {
      return ADD_WORK_EXPERIENCE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_WORK_EXPERIENCE", function () {
      return UPDATE_WORK_EXPERIENCE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DELETE_WORK_EXPERIENCE", function () {
      return DELETE_WORK_EXPERIENCE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "actions", function () {
      return actions;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var SIGN_IN = '[SignIn Page] SignIn';
    var SIGN_IN_FAILED = '[SignIn Page] SignInFailed';
    var SIGN_IN_SUCCESS = '[SignIn Page] SignInSuccess';
    var LOGOUT = '[Logout Page] Logout';
    var FORGOT_PASSWORD_REQUEST = '[Forgotten Page] ForgotPasswordRequest';
    var FORGOT_PASSWORD_FAILED = '[Forgotten Page] ForgotPasswordFailed';
    var FORGOT_PASSWORD_SUCCESS = '[Forgotten Page] ForgotPasswordSuccess'; // Profile. TODO move this to profile module.

    var SHOW_USER_PROFILE = '[Profile Page] ShowUserProfile';
    var UPDATE_USER_PROFILE = '[Profile Page] UpdateUserProfile';
    var ADD_LANGUAGE = '[Profile Language Page] AddLanguage';
    var UPDATE_LANGUAGE = '[Profile Language Page] UpdateLanguage';
    var DELETE_LANGUAGE = '[Profile Language Page] DeleteLanguage';
    var ADD_STUDY = '[Profile Study Page] AddStudy';
    var UPDATE_STUDY = '[Profile Study Page] UpdateStudy';
    var DELETE_STUDY = '[Profile Study Page] DeleteStudy';
    var ADD_WORK_EXPERIENCE = '[Profile Study Page] AddWorkExperience';
    var UPDATE_WORK_EXPERIENCE = '[Profile Study Page] UpdateWorkExperience';
    var DELETE_WORK_EXPERIENCE = '[Profile Study Page] DeleteWorkExperience';
    var actions = {
      signIn: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SIGN_IN, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
      signInSuccess: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SIGN_IN_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
      signInFailed: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SIGN_IN_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
      logout: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOGOUT, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
      // ForgotPassword
      forgotPasswordRequest: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(FORGOT_PASSWORD_REQUEST, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
      // Profile. TODO move this to profile module.
      showUserProfile: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SHOW_USER_PROFILE),
      updateUserProfile: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE_USER_PROFILE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
      addLanguage: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_LANGUAGE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
      updateLanguage: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE_LANGUAGE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
      deleteLanguage: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DELETE_LANGUAGE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
      addStudy: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_STUDY, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
      updateStudy: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE_STUDY, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
      deleteStudy: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DELETE_STUDY, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
      addWorkExperience: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_WORK_EXPERIENCE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
      updateWorkExperience: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE_WORK_EXPERIENCE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
      deleteExperience: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DELETE_WORK_EXPERIENCE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])())
    };
    /***/
  },

  /***/
  "./src/app/auth/effects/auth.effects.ts":
  /*!**********************************************!*\
    !*** ./src/app/auth/effects/auth.effects.ts ***!
    \**********************************************/

  /*! exports provided: AuthEffects */

  /***/
  function srcAppAuthEffectsAuthEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthEffects", function () {
      return AuthEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/auth.actions */
    "./src/app/auth/actions/auth.actions.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _signin_signin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../signin/signin.service */
    "./src/app/auth/signin/signin.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/services/profile.service */
    "./src/app/shared/services/profile.service.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var AuthEffects = function AuthEffects(actions$, signinService, router, profileService, store$) {
      var _this = this;

      _classCallCheck(this, AuthEffects);

      this.actions$ = actions$;
      this.signinService = signinService;
      this.router = router;
      this.profileService = profileService;
      this.store$ = store$; // @ts-ignore

      this.login$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SIGN_IN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (payload) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_this.signinService.login(payload));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
          if (null == user) {
            return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].signInFailed({});
          }

          return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].signInSuccess({
            user: user
          });
        }));
      });
      this.crudStudy$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["DELETE_STUDY"], _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_STUDY"], _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["UPDATE_STUDY"], _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["DELETE_LANGUAGE"], _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_LANGUAGE"], _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["UPDATE_LANGUAGE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(_this.store$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              payload = _ref2[0],
              state = _ref2[1];

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_this.profileService.updateProfile(state.auth.user));
        }));
      }, {
        dispatch: false
      });
      this.updateProfile$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["UPDATE_USER_PROFILE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (payload) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_this.profileService.updateProfile(payload.user));
        }));
      }, {
        dispatch: false
      }); // @ts-ignore

      this.loginSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SIGN_IN_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
          return _this.router.navigate(['admin', 'dashboard']);
        }));
      }, {
        dispatch: false
      });
      this.loginFailed$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SIGN_IN_FAILED"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
          _this.router.navigateByUrl('/');
        }));
      }, {
        dispatch: false
      });
    };

    AuthEffects.ɵfac = function AuthEffects_Factory(t) {
      return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_signin_signin_service__WEBPACK_IMPORTED_MODULE_5__["SigninService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]));
    };

    AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthEffects,
      factory: AuthEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _signin_signin_service__WEBPACK_IMPORTED_MODULE_5__["SigninService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/reducers/auth.reducer.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/reducers/auth.reducer.ts ***!
    \***********************************************/

  /*! exports provided: initialState, reducer, selectAuthFeature, selectAuthErrorOnLogin, selectAuthIsLoggedIn, selectForgottenPasswordRequested, selectUserProfile, selectShowUserProfile, selectSelectedLanguage, selectNextUidLanguage, selectNextUidExperience, selectSelectedStudy, selectSelectedExperience, selectNextUidStudy */

  /***/
  function srcAppAuthReducersAuthReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectAuthFeature", function () {
      return selectAuthFeature;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectAuthErrorOnLogin", function () {
      return selectAuthErrorOnLogin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectAuthIsLoggedIn", function () {
      return selectAuthIsLoggedIn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectForgottenPasswordRequested", function () {
      return selectForgottenPasswordRequested;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectUserProfile", function () {
      return selectUserProfile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectShowUserProfile", function () {
      return selectShowUserProfile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectSelectedLanguage", function () {
      return selectSelectedLanguage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectNextUidLanguage", function () {
      return selectNextUidLanguage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectNextUidExperience", function () {
      return selectNextUidExperience;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectSelectedStudy", function () {
      return selectSelectedStudy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectSelectedExperience", function () {
      return selectSelectedExperience;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectNextUidStudy", function () {
      return selectNextUidStudy;
    });
    /* harmony import */


    var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../actions/auth.actions */
    "./src/app/auth/actions/auth.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var initialState = {
      user: null,
      auth: {
        errorOnLogin: false,
        loggedIn: false,
        forgottenPassword: false
      }
    };

    function reducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN"]:
          return Object.assign({}, state);

        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN_FAILED"]:
          return Object.assign(Object.assign({}, state), {
            auth: {
              errorOnLogin: true,
              loggedIn: false,
              forgottenPassword: false
            }
          });

        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN_SUCCESS"]:
          return Object.assign(Object.assign({}, state), {
            user: action.user,
            auth: {
              errorOnLogin: false,
              loggedIn: true,
              forgottenPassword: false
            }
          });

        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_USER_PROFILE"]:
          var updatedUserProfile = Object.assign(Object.assign({}, state.user), action.user);
          return Object.assign(Object.assign({}, state), {
            user: updatedUserProfile
          });

        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT"]:
          return Object.assign({}, initialState);

        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["FORGOT_PASSWORD_REQUEST"]:
          return Object.assign(Object.assign({}, state), {
            auth: {
              errorOnLogin: false,
              loggedIn: false,
              forgottenPassword: true
            }
          });

        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_LANGUAGE"]:
          var updatedUser = Object.assign({}, state.user);
          updatedUser.languages = [].concat(_toConsumableArray(state.user.languages), [action.language]);
          return Object.assign(Object.assign({}, state), {
            user: updatedUser
          });

        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_LANGUAGE"]:
          var updatedUserLang = Object.assign({}, state.user);
          var languages = state.user.languages.filter(function (lang) {
            return lang.uid !== action.language.uid;
          });
          var newLang = [].concat(_toConsumableArray(languages), [action.language]).sort(function (a, b) {
            return a.uid - b.uid;
          });
          updatedUserLang.languages = newLang;
          return Object.assign(Object.assign({}, state), {
            user: updatedUserLang
          });

        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_STUDY"]:
          var updatedUserStudy = Object.assign({}, state.user);
          updatedUserStudy.studies = [].concat(_toConsumableArray(state.user.studies), [action.study]);
          return Object.assign(Object.assign({}, state), {
            user: updatedUserStudy
          });

        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_STUDY"]:
          var updateUserStudy = Object.assign({}, state.user);
          var studies = state.user.studies.filter(function (study) {
            return study.uid !== action.study.uid;
          });
          var newStudy = [].concat(_toConsumableArray(studies), [action.study]).sort(function (a, b) {
            return a.uid - b.uid;
          });
          updateUserStudy.studies = newStudy;
          return Object.assign(Object.assign({}, state), {
            user: updateUserStudy
          });

        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_STUDY"]:
          var newUser = Object.assign({}, state.user);
          var newStudies = newUser.studies.filter(function (study) {
            return study.uid !== action.studyId;
          });
          newUser.studies = _toConsumableArray(newStudies);
          return Object.assign(Object.assign({}, state), {
            user: newUser
          });

        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_LANGUAGE"]:
          var newerUser = Object.assign({}, state.user);
          var newLanguages = newerUser.languages.filter(function (lang) {
            return lang.uid !== action.languageId;
          });
          newerUser.languages = _toConsumableArray(newLanguages);
          console.log(newLanguages);
          return Object.assign(Object.assign({}, state), {
            user: newerUser
          });

        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_WORK_EXPERIENCE"]:
          var user = Object.assign({}, state.user);
          user.experiencies = [].concat(_toConsumableArray(state.user.experiencies), [action.experience]);
          return Object.assign(Object.assign({}, state), {
            user: user
          });

        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_WORK_EXPERIENCE"]:
          var userWork = Object.assign({}, state.user);
          var works = state.user.experiencies.filter(function (work) {
            return work.uid !== action.experience.uid;
          });
          var newWork = [].concat(_toConsumableArray(works), [action.experience]).sort(function (a, b) {
            return a.uid - b.uid;
          });
          userWork.experiencies = newWork;
          return Object.assign(Object.assign({}, state), {
            user: userWork
          });

        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_WORK_EXPERIENCE"]:
          var userD = Object.assign({}, state.user);
          var newExperiences = userD.experiencies.filter(function (experience) {
            return experience.uid !== action.experienceId;
          });
          userD.experiencies = _toConsumableArray(newExperiences);
          return Object.assign(Object.assign({}, state), {
            user: userD
          });

        default:
          return state;
      }
    } // Selectors


    var selectAuthFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('auth');
    var selectAuthErrorOnLogin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAuthFeature, function (state) {
      return state.auth.errorOnLogin;
    });
    var selectAuthIsLoggedIn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAuthFeature, function (state) {
      return state.auth.loggedIn;
    });
    var selectForgottenPasswordRequested = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAuthFeature, function (state) {
      return state.auth.forgottenPassword;
    }); // Selectors
    // TODO move this to profile module

    var selectUserProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('auth');
    var selectShowUserProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectUserProfile, function (state) {
      return state.user;
    });
    var selectSelectedLanguage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectUserProfile, function (state, props) {
      return state.user.languages.find(function (language) {
        return language.uid === props.langUid;
      });
    });
    var selectNextUidLanguage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectUserProfile, function (state) {
      return state.user.languages.length + 1;
    });
    var selectNextUidExperience = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectUserProfile, function (state) {
      return state.user.experiencies.length + 1;
    });
    var selectSelectedStudy = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectUserProfile, function (state, props) {
      return state.user.studies.find(function (study) {
        return study.uid === props.studyId;
      });
    });
    var selectSelectedExperience = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectUserProfile, function (state, props) {
      return state.user.experiencies.find(function (study) {
        return study.uid === props.experienceUid;
      });
    });
    var selectNextUidStudy = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectUserProfile, function (state) {
      return state.user.studies.length + 1;
    });
    /***/
  },

  /***/
  "./src/app/auth/signin/signin-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/auth/signin/signin-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: SigninRoutingModule */

  /***/
  function srcAppAuthSigninSigninRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninRoutingModule", function () {
      return SigninRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./signin.component */
    "./src/app/auth/signin/signin.component.ts");

    var routes = [{
      path: '',
      component: _signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"]
    }];

    var SigninRoutingModule = function SigninRoutingModule() {
      _classCallCheck(this, SigninRoutingModule);
    };

    SigninRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SigninRoutingModule
    });
    SigninRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SigninRoutingModule_Factory(t) {
        return new (t || SigninRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SigninRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/signin/signin.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/auth/signin/signin.component.ts ***!
    \*************************************************/

  /*! exports provided: SigninComponent */

  /***/
  function srcAppAuthSigninSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
      return SigninComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions/auth.actions */
    "./src/app/auth/actions/auth.actions.ts");
    /* harmony import */


    var _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../reducers/auth.reducer */
    "./src/app/auth/reducers/auth.reducer.ts");
    /* harmony import */


    var _signin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./signin.service */
    "./src/app/auth/signin/signin.service.ts");
    /* harmony import */


    var src_app_shared_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/profile.service */
    "./src/app/shared/services/profile.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function SigninComponent_mat_error_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " There is an error in email or password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SigninComponent =
    /*#__PURE__*/
    function () {
      function SigninComponent(signinService, profileService, formBuilder, router, store) {
        _classCallCheck(this, SigninComponent);

        this.signinService = signinService;
        this.profileService = profileService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.store = store;
        this.submitted = false;
        this.errorLogin = false;
      }

      _createClass(SigninComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          this.submitted = true;
          this.store.dispatch(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].signIn({
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
          }));
          this.store.select(_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__["selectAuthErrorOnLogin"]).subscribe(function (hasError) {
            _this2.errorLogin = hasError;
          });
        }
      }]);

      return SigninComponent;
    }();

    SigninComponent.ɵfac = function SigninComponent_Factory(t) {
      return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_signin_service__WEBPACK_IMPORTED_MODULE_4__["SigninService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]));
    };

    SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SigninComponent,
      selectors: [["app-signin"]],
      decls: 19,
      vars: 3,
      consts: [[3, "formGroup", "ngSubmit"], [4, "ngIf"], ["appearance", "fill", 1, "full-width-input"], ["for", "email"], ["matInput", "", "type", "text", "id", "email", "formControlName", "email", 1, "form-control"], ["for", "password"], ["matInput", "", "type", "password", "id", "password", "formControlName", "password", 1, "form-control"], ["mat-raised-button", "", "color", "primary", 1, "btn", "btn-primary", 3, "disabled"], ["mat-button", "", "routerLink", "/auth/forgot-password"]],
      template: function SigninComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_5_listener($event) {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SigninComponent_mat_error_6_Template, 2, 0, "mat-error", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Remember password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]],
      styles: ["mat-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 2em auto;\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kdG9tZS9Xb3Jrc3BhY2UvSmF2YXNjcmlwdC9NYXN0ZXIvYWR2YW5jZWQtZnJvbnRlbmQvdW9jLWRlcGxveS9zcmMvYXBwL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMmVtIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiIsIm1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAyZW0gYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signin',
          templateUrl: './signin.component.html',
          styleUrls: ['./signin.component.scss']
        }]
      }], function () {
        return [{
          type: _signin_service__WEBPACK_IMPORTED_MODULE_4__["SigninService"]
        }, {
          type: src_app_shared_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/signin/signin.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/auth/signin/signin.module.ts ***!
    \**********************************************/

  /*! exports provided: SigninModule */

  /***/
  function srcAppAuthSigninSigninModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninModule", function () {
      return SigninModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _signin_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./signin-routing.module */
    "./src/app/auth/signin/signin-routing.module.ts");
    /* harmony import */


    var _signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./signin.component */
    "./src/app/auth/signin/signin.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _signin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./signin.service */
    "./src/app/auth/signin/signin.service.ts");
    /* harmony import */


    var _shared_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/material.module */
    "./src/app/shared/material.module.ts");

    var SigninModule = function SigninModule() {
      _classCallCheck(this, SigninModule);
    };

    SigninModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SigninModule
    });
    SigninModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SigninModule_Factory(t) {
        return new (t || SigninModule)();
      },
      providers: [_signin_service__WEBPACK_IMPORTED_MODULE_4__["SigninService"]],
      imports: [[src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _signin_routing_module__WEBPACK_IMPORTED_MODULE_1__["SigninRoutingModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SigninModule, {
        declarations: [_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"]],
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _signin_routing_module__WEBPACK_IMPORTED_MODULE_1__["SigninRoutingModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"]],
          imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _signin_routing_module__WEBPACK_IMPORTED_MODULE_1__["SigninRoutingModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]],
          providers: [_signin_service__WEBPACK_IMPORTED_MODULE_4__["SigninService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/signin/signin.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/signin/signin.service.ts ***!
    \***********************************************/

  /*! exports provided: SigninService */

  /***/
  function srcAppAuthSigninSigninServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninService", function () {
      return SigninService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/app.settings */
    "./src/app/shared/app.settings.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SigninService =
    /*#__PURE__*/
    function () {
      function SigninService(http) {
        _classCallCheck(this, SigninService);

        this.http = http;
      }

      _createClass(SigninService, [{
        key: "getUsers",
        value: function getUsers() {
          return this.http.get(src_app_shared_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].API_ENDPOINT_USERS).toPromise();
        }
      }, {
        key: "login",
        value: function login(_ref3) {
          var email = _ref3.email,
              password = _ref3.password;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var users;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.getUsers();

                  case 2:
                    users = _context.sent;
                    return _context.abrupt("return", users.find(function (user) {
                      return user.email === email && user.password === password;
                    }));

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return SigninService;
    }();

    SigninService.ɵfac = function SigninService_Factory(t) {
      return new (t || SigninService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    SigninService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SigninService,
      factory: SigninService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SigninService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/offers/actions/my-offers.actions.ts":
  /*!*****************************************************!*\
    !*** ./src/app/offers/actions/my-offers.actions.ts ***!
    \*****************************************************/

  /*! exports provided: SUBSCRIBE_TO_OFFER, UNSUBSCRIBE_TO_OFFER, actions */

  /***/
  function srcAppOffersActionsMyOffersActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SUBSCRIBE_TO_OFFER", function () {
      return SUBSCRIBE_TO_OFFER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UNSUBSCRIBE_TO_OFFER", function () {
      return UNSUBSCRIBE_TO_OFFER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "actions", function () {
      return actions;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var SUBSCRIBE_TO_OFFER = '[My-Offers Page] SubscribeToOffer';
    var UNSUBSCRIBE_TO_OFFER = '[My-Offers Page] UnsubscribeToOffer';
    var actions = {
      subscribeToOffer: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SUBSCRIBE_TO_OFFER, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
      unsubscribeToOffer: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UNSUBSCRIBE_TO_OFFER, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])())
    };
    /***/
  },

  /***/
  "./src/app/offers/actions/offer.actions.ts":
  /*!*************************************************!*\
    !*** ./src/app/offers/actions/offer.actions.ts ***!
    \*************************************************/

  /*! exports provided: LIST_OFFERS, LIST_OFFERS_SUCCESS, actions */

  /***/
  function srcAppOffersActionsOfferActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIST_OFFERS", function () {
      return LIST_OFFERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIST_OFFERS_SUCCESS", function () {
      return LIST_OFFERS_SUCCESS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "actions", function () {
      return actions;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var LIST_OFFERS = '[Offers Page] ListOffers';
    var LIST_OFFERS_SUCCESS = '[Offers Page] ListOffersSuccess';
    var actions = {
      listOffers: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LIST_OFFERS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
      listOffersSuccess: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LIST_OFFERS_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])())
    };
    /***/
  },

  /***/
  "./src/app/offers/effects/offer.effects.ts":
  /*!*************************************************!*\
    !*** ./src/app/offers/effects/offer.effects.ts ***!
    \*************************************************/

  /*! exports provided: OfferEffects */

  /***/
  function srcAppOffersEffectsOfferEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfferEffects", function () {
      return OfferEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _actions_offer_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions/offer.actions */
    "./src/app/offers/actions/offer.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_services_offers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/services/offers.service */
    "./src/app/shared/services/offers.service.ts");

    var OfferEffects = function OfferEffects(actions$, offersService) {
      var _this3 = this;

      _classCallCheck(this, OfferEffects);

      this.actions$ = actions$;
      this.offersService = offersService; // @ts-ignore

      this.listOffers$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this3.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_offer_actions__WEBPACK_IMPORTED_MODULE_2__["LIST_OFFERS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
          return _this3.offersService.getOffers();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (offers) {
          return _actions_offer_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].listOffersSuccess({
            offers: offers
          });
        }));
      });
    };

    OfferEffects.ɵfac = function OfferEffects_Factory(t) {
      return new (t || OfferEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_offers_service__WEBPACK_IMPORTED_MODULE_4__["OffersService"]));
    };

    OfferEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OfferEffects,
      factory: OfferEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfferEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _shared_services_offers_service__WEBPACK_IMPORTED_MODULE_4__["OffersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/offers/reducers/my-offers.reducer.ts":
  /*!******************************************************!*\
    !*** ./src/app/offers/reducers/my-offers.reducer.ts ***!
    \******************************************************/

  /*! exports provided: initialState, reducer, selectMyOffersFeature, selectOffersFeature, selectMyOffers, selectIsUserSubscribedTo */

  /***/
  function srcAppOffersReducersMyOffersReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectMyOffersFeature", function () {
      return selectMyOffersFeature;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectOffersFeature", function () {
      return selectOffersFeature;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectMyOffers", function () {
      return selectMyOffers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectIsUserSubscribedTo", function () {
      return selectIsUserSubscribedTo;
    });
    /* harmony import */


    var _actions_my_offers_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../actions/my-offers.actions */
    "./src/app/offers/actions/my-offers.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var initialState = {
      entities: []
    };

    function reducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions_my_offers_actions__WEBPACK_IMPORTED_MODULE_0__["SUBSCRIBE_TO_OFFER"]:
          return {
            entities: [].concat(_toConsumableArray(state.entities), [action.offerId])
          };

        case _actions_my_offers_actions__WEBPACK_IMPORTED_MODULE_0__["UNSUBSCRIBE_TO_OFFER"]:
          var entities = state.entities.filter(function (offerId) {
            return offerId !== action.offerId;
          });
          return {
            entities: entities
          };

        default:
          return state;
      }
    } // Selectors


    var selectMyOffersFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('my_offers');
    var selectOffersFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('offers');
    var selectMyOffers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectMyOffersFeature, selectOffersFeature, function (myOffers, offers) {
      return offers.entities.filter(function (offer) {
        return myOffers.entities.some(function (myOfferId) {
          return myOfferId === offer.id;
        });
      });
    });
    var selectIsUserSubscribedTo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectMyOffersFeature, function (myOffers, props) {
      return myOffers.entities.some(function (myOfferId) {
        return myOfferId === props.offerId;
      });
    });
    /***/
  },

  /***/
  "./src/app/offers/reducers/offer.reducer.ts":
  /*!**************************************************!*\
    !*** ./src/app/offers/reducers/offer.reducer.ts ***!
    \**************************************************/

  /*! exports provided: initialState, reducer, selectOfferFeature, selectUserFeature, selectOffersByUserStudies, selectOffersNotMatchingUserStudies */

  /***/
  function srcAppOffersReducersOfferReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectOfferFeature", function () {
      return selectOfferFeature;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectUserFeature", function () {
      return selectUserFeature;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectOffersByUserStudies", function () {
      return selectOffersByUserStudies;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectOffersNotMatchingUserStudies", function () {
      return selectOffersNotMatchingUserStudies;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actions_offer_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions/offer.actions */
    "./src/app/offers/actions/offer.actions.ts");

    var initialState = {
      entities: []
    };

    function reducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions_offer_actions__WEBPACK_IMPORTED_MODULE_1__["LIST_OFFERS_SUCCESS"]:
          return Object.assign(Object.assign({}, state), {
            entities: action.offers
          });

        default:
          return state;
      }
    } // Selectors


    var selectOfferFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('offers');
    var selectUserFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('auth');
    var selectOffersByUserStudies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOfferFeature, selectUserFeature, function (offerState, userState) {
      return offerState.entities.filter(function (offer) {
        return userState.user.studies.some(function (study) {
          return study.uid === offer.category.uid;
        });
      });
    });
    var selectOffersNotMatchingUserStudies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectOfferFeature, selectUserFeature, function (offerState, userState) {
      return offerState.entities.filter(function (offer) {
        return userState.user.studies.every(function (study) {
          return study.uid !== offer.category.uid;
        });
      });
    });
    /***/
  },

  /***/
  "./src/app/profile/actions/configuration.actions.ts":
  /*!**********************************************************!*\
    !*** ./src/app/profile/actions/configuration.actions.ts ***!
    \**********************************************************/

  /*! exports provided: PREFERENCES_NOTIFICATIONS_UPDATE, PREFERENCES_LOCALE_UPDATE, actions */

  /***/
  function srcAppProfileActionsConfigurationActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PREFERENCES_NOTIFICATIONS_UPDATE", function () {
      return PREFERENCES_NOTIFICATIONS_UPDATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PREFERENCES_LOCALE_UPDATE", function () {
      return PREFERENCES_LOCALE_UPDATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "actions", function () {
      return actions;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var PREFERENCES_NOTIFICATIONS_UPDATE = '[Config Page] NotificationsUpdate';
    var PREFERENCES_LOCALE_UPDATE = '[Config Page] LocaleUpdate';
    var actions = {
      notificationsUpdate: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PREFERENCES_NOTIFICATIONS_UPDATE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()),
      localeUpdate: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PREFERENCES_LOCALE_UPDATE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])())
    };
    /***/
  },

  /***/
  "./src/app/profile/reducers/configuration.reducer.ts":
  /*!***********************************************************!*\
    !*** ./src/app/profile/reducers/configuration.reducer.ts ***!
    \***********************************************************/

  /*! exports provided: initialState, reducer, selectConfigurationFeature, selectConfigurationAppLocale, selectConfigurationSendNotifications */

  /***/
  function srcAppProfileReducersConfigurationReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectConfigurationFeature", function () {
      return selectConfigurationFeature;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectConfigurationAppLocale", function () {
      return selectConfigurationAppLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectConfigurationSendNotifications", function () {
      return selectConfigurationSendNotifications;
    });
    /* harmony import */


    var _shared_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../shared/app.settings */
    "./src/app/shared/app.settings.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actions_configuration_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions/configuration.actions */
    "./src/app/profile/actions/configuration.actions.ts");

    var initialState = {
      app_locale: _shared_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].APP_DEFAULT_MOMENT_LOCALE,
      notifications: false
    }; // Reducer

    function reducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions_configuration_actions__WEBPACK_IMPORTED_MODULE_2__["PREFERENCES_NOTIFICATIONS_UPDATE"]:
          return Object.assign(Object.assign({}, state), {
            notifications: action.sendNotifications
          });

        case _actions_configuration_actions__WEBPACK_IMPORTED_MODULE_2__["PREFERENCES_LOCALE_UPDATE"]:
          return Object.assign(Object.assign({}, state), {
            app_locale: action.locale
          });

        default:
          return state;
      }
    } // Selectors


    var selectConfigurationFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('preferences');
    var selectConfigurationAppLocale = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectConfigurationFeature, function (state) {
      return state.app_locale;
    });
    var selectConfigurationSendNotifications = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectConfigurationFeature, function (state) {
      return state.notifications;
    });
    /***/
  },

  /***/
  "./src/app/reducers/index.ts":
  /*!***********************************!*\
    !*** ./src/app/reducers/index.ts ***!
    \***********************************/

  /*! exports provided: reducers, effects, metaReducers */

  /***/
  function srcAppReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "effects", function () {
      return effects;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "metaReducers", function () {
      return metaReducers;
    });
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
    /* harmony import */


    var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngrx-store-freeze */
    "./node_modules/ngrx-store-freeze/es6/index.js");
    /* harmony import */


    var _auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth/reducers/auth.reducer */
    "./src/app/auth/reducers/auth.reducer.ts");
    /* harmony import */


    var _auth_effects_auth_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth/effects/auth.effects */
    "./src/app/auth/effects/auth.effects.ts");
    /* harmony import */


    var _profile_reducers_configuration_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../profile/reducers/configuration.reducer */
    "./src/app/profile/reducers/configuration.reducer.ts");
    /* harmony import */


    var _offers_reducers_offer_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../offers/reducers/offer.reducer */
    "./src/app/offers/reducers/offer.reducer.ts");
    /* harmony import */


    var _offers_reducers_my_offers_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../offers/reducers/my-offers.reducer */
    "./src/app/offers/reducers/my-offers.reducer.ts");
    /* harmony import */


    var _offers_effects_offer_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../offers/effects/offer.effects */
    "./src/app/offers/effects/offer.effects.ts");

    var reducers = {
      router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["routerReducer"],
      auth: _auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"],
      preferences: _profile_reducers_configuration_reducer__WEBPACK_IMPORTED_MODULE_5__["reducer"],
      offers: _offers_reducers_offer_reducer__WEBPACK_IMPORTED_MODULE_6__["reducer"],
      my_offers: _offers_reducers_my_offers_reducer__WEBPACK_IMPORTED_MODULE_7__["reducer"]
    };
    var effects = [_auth_effects_auth_effects__WEBPACK_IMPORTED_MODULE_4__["AuthEffects"], _offers_effects_offer_effects__WEBPACK_IMPORTED_MODULE_8__["OfferEffects"]];
    var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_2__["storeFreeze"]] : [];
    /***/
  },

  /***/
  "./src/app/shared/app.settings.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/app.settings.ts ***!
    \****************************************/

  /*! exports provided: AppSettings */

  /***/
  function srcAppSharedAppSettingsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppSettings", function () {
      return AppSettings;
    });
    /* import * as moment from 'moment'; */


    var AppSettings =
    /*#__PURE__*/
    function () {
      function AppSettings() {
        _classCallCheck(this, AppSettings);
      }

      _createClass(AppSettings, null, [{
        key: "getAvatar",
        value: function getAvatar(user) {
          var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'sm';

          if (!user || !user.avatar_hash) {
            return this.IMAGES.UNKNOWN_FACE;
          }

          var _user$avatar_hash$spl = user.avatar_hash.split('.'),
              _user$avatar_hash$spl2 = _slicedToArray(_user$avatar_hash$spl, 2),
              hash = _user$avatar_hash$spl2[0],
              extension = _user$avatar_hash$spl2[1];

          return "".concat(this.STATIC_AVATAR_ENDPOINT).concat(user.uid, "/").concat(hash).concat(size, ".").concat(extension);
        }
      }]);

      return AppSettings;
    }();

    AppSettings.APP_NAME = 'PoliJob';
    AppSettings.APP_LOCALSTORAGE_TOKEN = 'PoliJob_Token';
    AppSettings.APP_VERSION = '0.1.0';
    AppSettings.API_ENDPOINT = 'api/';
    AppSettings.STATIC_ENDPOINT = AppSettings.API_ENDPOINT + 'static/';
    AppSettings.STATIC_AVATAR_ENDPOINT = AppSettings.STATIC_ENDPOINT + 'images/avatar/';
    AppSettings.API_ENDPOINT_APP = AppSettings.API_ENDPOINT + 'app/';
    AppSettings.API_ENDPOINT_USER = AppSettings.API_ENDPOINT + 'user';
    AppSettings.API_ENDPOINT_USERS = AppSettings.API_ENDPOINT + 'users';
    AppSettings.API_ENDPOINT_OFFERS = AppSettings.API_ENDPOINT + 'offers';
    AppSettings.API_ENDPOINT_USER_ME = AppSettings.API_ENDPOINT + 'user-me';
    AppSettings.API_ENDPOINT_USER_CREATE = AppSettings.API_ENDPOINT_USER + '/create';
    AppSettings.API_ENDPOINT_CONFIRM_USER = AppSettings.API_ENDPOINT_USER + '/confirm-user';
    AppSettings.API_ENDPOINT_USER_REMEMBER_PASSWORD = AppSettings.API_ENDPOINT_USER + '/remember-password';
    AppSettings.API_ENDPOINT_USER_REQUEST_REMEMBER_PASSWORD = AppSettings.API_ENDPOINT_USER + '/request-remember-password';
    AppSettings.API_ENDPOINT_USER_REQUEST_USER_AVATAR = AppSettings.API_ENDPOINT_USER + '/request-avatar-user';
    AppSettings.API_ENDPOINT_USER_UPLOAD_AVATAR = AppSettings.API_ENDPOINT_USER + '/upload-avatar';
    AppSettings.API_ENDPOINT_USER_SENDMAIL = AppSettings.API_ENDPOINT_USER + '/sendmail';
    AppSettings.API_ENDPOINT_AUTH = AppSettings.API_ENDPOINT + 'auth/';
    AppSettings.API_ENDPOINT_AUTH_LOCAL = AppSettings.API_ENDPOINT + 'auth/local/';
    AppSettings.APP_QUILL_EDITOR_CONFIGURATION = {
      toolbar: [['bold', 'italic', 'underline'], [{
        list: 'ordered'
      }, {
        list: 'bullet'
      }], [{
        direction: 'rtl'
      }], ['clean'], ['link']]
    };
    AppSettings.GUESS_ROL = {
      value: 'guess',
      text: 'settings.rol.GUESS'
    };
    AppSettings.STUDENT_ROL = {
      value: 'student',
      text: 'settings.rol.STUDENT'
    };
    AppSettings.ADMINISTRATOR_ROL = {
      value: 'admin',
      text: 'settings.rol.ADMINISTRATOR'
    };
    AppSettings.COMPANY_ROL = {
      value: 'company',
      text: 'settings.rol.COMPANY'
    };
    AppSettings.ROLES = [AppSettings.GUESS_ROL, AppSettings.STUDENT_ROL, AppSettings.COMPANY_ROL, AppSettings.ADMINISTRATOR_ROL];
    AppSettings.APP_LOCALES = [{
      id: 1,
      name: 'Castellano',
      locale: 'es'
    }, {
      id: 2,
      name: 'Inglés',
      locale: 'en'
    }, {
      id: 3,
      name: 'Francés',
      locale: 'fr'
    }];
    AppSettings.APP_DEFAULT_MOMENT_LOCALE = {
      id: 1,
      name: 'Castellano',
      locale: 'es'
    };
    AppSettings.USER_STATUS_PENDING = {
      value: 'pending',
      text: 'settings.status.PENDING'
    };
    AppSettings.USER_STATUS_ACTIVE = {
      value: 'active',
      text: 'settings.status.ACTIVE'
    };
    AppSettings.USER_STATUS_INACTIVE = {
      value: 'inactive',
      text: 'settings.status.INACTIVE'
    };
    AppSettings.USER_STATUS = [AppSettings.USER_STATUS_PENDING, AppSettings.USER_STATUS_ACTIVE, AppSettings.USER_STATUS_INACTIVE];
    AppSettings.FORMAT_DATE = 'MM/DD/YYYY';
    AppSettings.IMAGES = {
      UNKNOWN_IMAGE: 'assets/images/image-not-found.png',
      UNKNOWN_FACE: 'assets/images/face-unknown.png',
      UNKNOWN_TEAM: 'assets/images/image-not-found.png'
    };
    AppSettings.NOTIFICATIONS = {
      DEFAULT_TIME: 2000
    };
    /***/
  },

  /***/
  "./src/app/shared/components/admin-layout/admin-layout.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/admin-layout/admin-layout.component.ts ***!
    \**************************************************************************/

  /*! exports provided: AdminLayoutComponent */

  /***/
  function srcAppSharedComponentsAdminLayoutAdminLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () {
      return AdminLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.settings */
    "./src/app/shared/app.settings.ts");
    /* harmony import */


    var _auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../auth/actions/auth.actions */
    "./src/app/auth/actions/auth.actions.ts");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/profile.service */
    "./src/app/shared/services/profile.service.ts");
    /* harmony import */


    var _services_offers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/offers.service */
    "./src/app/shared/services/offers.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var _c0 = function _c0() {
      return ["/admin/dashboard"];
    };

    var _c1 = function _c1() {
      return ["/admin/profile"];
    };

    var _c2 = function _c2() {
      return ["/admin/offers"];
    };

    var _c3 = function _c3() {
      return ["/admin/profile/config"];
    };

    var _c4 = function _c4() {
      return ["/admin/offers/my-offers"];
    };

    var AdminLayoutComponent =
    /*#__PURE__*/
    function () {
      /* MOCK PURPOSES */
      function AdminLayoutComponent(profileService, offersService, http, store) {
        var _this4 = this;

        _classCallCheck(this, AdminLayoutComponent);

        this.profileService = profileService;
        this.offersService = offersService;
        this.http = http;
        this.store = store;
        this.login({
          email: 'carlos.caballero@gmail.com',
          password: '1234'
        }).then(function (user) {
          _this4.profileService.user = user;
        });
        this.offersService.getOffers().subscribe(function (offers) {
          _this4.offersService.offers = offers;
        });
      }

      _createClass(AdminLayoutComponent, [{
        key: "getUsers",
        value: function getUsers() {
          return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].API_ENDPOINT_USERS).toPromise();
        }
      }, {
        key: "login",
        value: function login(_ref4) {
          var email = _ref4.email,
              password = _ref4.password;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var users;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.getUsers();

                  case 2:
                    users = _context2.sent;
                    return _context2.abrupt("return", users.find(function (user) {
                      return user.email === email && user.password === password;
                    }));

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.store.dispatch(_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].logout({}));
        }
      }]);

      return AdminLayoutComponent;
    }();

    AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) {
      return new (t || AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_offers_service__WEBPACK_IMPORTED_MODULE_5__["OffersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]));
    };

    AdminLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdminLayoutComponent,
      selectors: [["app-admin-layout"]],
      decls: 30,
      vars: 15,
      consts: [[1, "example-container"], ["mode", "side", "opened", ""], ["mat-list-item", "", 3, "routerLinkActive", "routerLink"], [1, "sidenav-icon"], ["mat-list-item", ""], ["href", "#", 3, "click"]],
      template: function AdminLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-nav-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Dashboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "people");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Perfil ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Ofertas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Configuraci\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "move_to_inbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Mis ofertas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "power_settings_new");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_a_click_26_listener($event) {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c4));
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"]],
      styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kdG9tZS9Xb3Jrc3BhY2UvSmF2YXNjcmlwdC9NYXN0ZXIvYWR2YW5jZWQtZnJvbnRlbmQvdW9jLWRlcGxveS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FkbWluLWxheW91dC9hZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FkbWluLWxheW91dC9hZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuIiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-admin-layout',
          styleUrls: ['./admin-layout.component.scss'],
          templateUrl: './admin-layout.template.html'
        }]
      }], function () {
        return [{
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
        }, {
          type: _services_offers_service__WEBPACK_IMPORTED_MODULE_5__["OffersService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/core.module.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/core.module.ts ***!
    \***************************************/

  /*! exports provided: CORE_SERVICES, CoreModule */

  /***/
  function srcAppSharedCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CORE_SERVICES", function () {
      return CORE_SERVICES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/profile.service */
    "./src/app/shared/services/profile.service.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _services_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/notifications.service */
    "./src/app/shared/services/notifications.service.ts");
    /* harmony import */


    var _services_offers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/offers.service */
    "./src/app/shared/services/offers.service.ts");
    /* import { JWTInterceptor } from './interceptors/jwt.interceptor'; */

    /* import { JwtExpiredInterceptor } from './interceptors/jwt-expired.interceptor'; */

    /* import { StoreModule } from '@ngrx/store';
    import { EffectsModule } from '@ngrx/effects';
    import { StoreDevtoolsModule } from '@ngrx/store-devtools'; */

    /* import { metaReducers, reducers } from './states/root.reducer';
    import { AuthEffects } from './states/auth/effects/auth.effects';
    
    import { StoreRouterConnectingModule } from '@ngrx/router-store';
    import { RouterEffects } from './states/router/effects/router.effects';
    
    import { UserEffects } from './states/user/effects/user.effects';
    import { AppEffects } from './states/app/effects'; */

    /* import { UsersEffects } from './states/users/effects'; */

    /* import { UsersService } from '../views/users/shared/users.service'; */

    /* import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
    import { TranslateHttpLoader } from '@ngx-translate/http-loader'; */

    /* export function HttpLoaderFactory(httpClient: HttpClient) {
      return new TranslateHttpLoader(httpClient);
    } */


    var CORE_SERVICES = [_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"], _services_offers_service__WEBPACK_IMPORTED_MODULE_5__["OffersService"], _services_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]
    /* {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtExpiredInterceptor,
      multi: true,
    }, */

    /*   { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: RouterStateSerializer, useClass: CustomSerializer }, */

    /* {
      provide: MatPaginatorIntl,
      useClass: DatatablePaginatorIntl,
      deps: [TranslateService],
    }, */
    ];

    var CoreModule = function CoreModule(parentModule) {
      _classCallCheck(this, CoreModule);

      if (parentModule) {
        throw new Error('CoreModule is already loaded. Import it in the AppModule only');
      }
    };

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12));
      },
      providers: CORE_SERVICES,
      imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
      /*     StoreModule.forRoot(reducers, { metaReducers }),
      StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
      StoreDevtoolsModule.instrument({ maxAge: 50 }),
      EffectsModule.forRoot([
        AppEffects,
        AuthEffects,
        UserEffects,
        RouterEffects
      ]),*/

      /*  TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }) */
      // InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
      ]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        /*     StoreModule.forRoot(reducers, { metaReducers }),
        StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
        StoreDevtoolsModule.instrument({ maxAge: 50 }),
        EffectsModule.forRoot([
          AppEffects,
          AuthEffects,
          UserEffects,
          RouterEffects
        ]),*/

        /*  TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }) */
        // InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
        ]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
          /*     StoreModule.forRoot(reducers, { metaReducers }),
          StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
          StoreDevtoolsModule.instrument({ maxAge: 50 }),
          EffectsModule.forRoot([
            AppEffects,
            AuthEffects,
            UserEffects,
            RouterEffects
          ]),*/

          /*  TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
            }
          }) */
          // InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
          ],
          providers: CORE_SERVICES
        }]
      }], function () {
        return [{
          type: CoreModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/guards/auth.guard.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/guards/auth.guard.ts ***!
    \*********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../auth/reducers/auth.reducer */
    "./src/app/auth/reducers/auth.reducer.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, store) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.store = store;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this5 = this;

          return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["selectAuthIsLoggedIn"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (isLoggedIn) {
            if (isLoggedIn) {
              return true;
            }

            _this5.router.navigate(['auth', 'signin']);

            return false;
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/inmemory-db/fake-backend.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/inmemory-db/fake-backend.service.ts ***!
    \************************************************************/

  /*! exports provided: FakeBackendService */

  /***/
  function srcAppSharedInmemoryDbFakeBackendServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FakeBackendService", function () {
      return FakeBackendService;
    });

    var FakeBackendService =
    /*#__PURE__*/
    function () {
      function FakeBackendService() {
        _classCallCheck(this, FakeBackendService);
      }

      _createClass(FakeBackendService, [{
        key: "createDb",
        value: function createDb() {
          var users = [{
            id: 1,
            username: 'carloscg',
            name: 'Carlos',
            surname: 'Caballero',
            birthdate: '19/11/1984',
            phone: '644039911',
            phone2: '690940321',
            email: 'carlos.caballero@gmail.com',
            password: '1234',
            roles: ['student'],
            documentType: {
              uid: 1,
              name: 'NIF'
            },
            documentNumber: '26808956H',
            license: 'B1',
            aboutMe: 'LOREM IPSUM',
            otherCompetences: 'LOREM IPSUM',
            address: {
              street: 'Urbanización las Areanas - 45',
              province: {
                uid: 4,
                name: 'Cádiz'
              },
              municipe: {
                uid: 6,
                name: 'Chiclana de la Frontera'
              }
            },
            avatar_hash: 'assets/img/perfil.png',
            studies: [{
              uid: 1,
              level: {
                uid: 1,
                name: 'Ciclo Formativo'
              },
              category: {
                uid: 2,
                name: 'Informática y comunicaciones'
              },
              institution: {
                uid: 2,
                name: 'IES Politécnico Jesús Marin'
              },
              title: {
                uid: 2,
                name: 'Administracion de sistemas informaticos y redes'
              },
              grade: {
                uid: 3,
                name: 'Ciclo Formativo de Grado Superior'
              },
              date: '30/06/2005',
              dual: false,
              bilingue: true,
              certificate: true
            }, {
              uid: 2,
              institution: {
                uid: 2,
                name: 'IES Politécnico Jesús Marin'
              },
              category: {
                uid: 2,
                name: 'Informática y comunicaciones'
              },
              level: {
                uid: 1,
                name: 'Ciclo Formativo'
              },
              title: {
                uid: 1,
                name: 'Técnico Superior en Desarrollo de Aplicaciones Web'
              },
              grade: {
                uid: 3,
                name: 'Ciclo Formativo de Grado Superior'
              },
              date: '30/06/2007',
              dual: true,
              bilingue: false,
              certificate: false
            }],
            experiencies: [{
              uid: 1,
              company: 'Suma',
              position: 'Junior Software Developer',
              date: '30/12/2016-20/01/2019'
            }],
            languages: [{
              uid: 1,
              level: {
                uid: 5,
                name: 'C1'
              },
              name: {
                uid: 1,
                name: 'Inglés'
              },
              date: '30/06/2005'
            }, {
              uid: 2,
              level: {
                uid: 4,
                name: 'B2'
              },
              name: {
                uid: 2,
                name: 'Francés'
              },
              date: '30/06/1998'
            }],
            offers: []
            /*         experiences: [
              {
                id: 0,
                eid: 0,
                empresa: 'Suma',
                date_incio: '1548320228',
                date_fin: '1548320228',
                puesto: 'Junior',
                tareas: 'Desarrollador front-end'
              },
              {
                id: 0,
                eid: 1,
                empresa: 'Indra',
                date_incio: '1548320228',
                date_fin: '1548320228',
                puesto: 'Ingeniero',
                tareas: 'Desarrollador back-end'
              }
            ],
            languages: [
              { id: 0, lid: 0, idioma: 'Inglés', nivel: 'B2', date: '30/06/2008' },
              {
                id: 0,
                lid: 1,
                idioma: 'Portugués',
                nivel: 'A2',
                date: '30/06/2013'
              }
            ]
            */

          }, {
            id: 2,
            username: 'dtome',
            name: 'Daniel',
            surname: 'Tomé Fernández',
            birthdate: '27/09/1993',
            phone: '666666666',
            phone2: '677777666',
            email: 'dtome24@uoc.edu',
            password: '1234',
            roles: ['company'],
            documentType: {
              uid: 1,
              name: 'NIF'
            },
            documentNumber: '26808956H',
            license: 'B2',
            aboutMe: 'LOREM IPSUM',
            otherCompetences: 'LOREM IPSUM',
            address: {
              street: 'Avenida principal',
              province: {
                uid: 4,
                name: 'Cádiz'
              },
              municipe: {
                uid: 6,
                name: 'Chiclana de la Frontera'
              }
            },
            avatar_hash: 'assets/img/perfil.png',
            studies: [{
              uid: 1,
              level: {
                uid: 1,
                name: 'Ciclo Formativo'
              },
              category: {
                uid: 2,
                name: 'Informática y comunicaciones'
              },
              institution: {
                uid: 2,
                name: 'IES Politécnico Jesús Marin'
              },
              title: {
                uid: 2,
                name: 'Administracion de sistemas informaticos y redes'
              },
              grade: {
                uid: 3,
                name: 'Ciclo Formativo de Grado Superior'
              },
              date: '30/06/2005',
              dual: false,
              bilingue: true,
              certificate: true
            }, {
              uid: 2,
              institution: {
                uid: 2,
                name: 'IES Politécnico Jesús Marin'
              },
              category: {
                uid: 2,
                name: 'Informática y comunicaciones'
              },
              level: {
                uid: 1,
                name: 'Ciclo Formativo'
              },
              title: {
                uid: 2,
                name: 'Administracion de sistemas informaticos y redes'
              },
              grade: {
                uid: 3,
                name: 'Ciclo Formativo de Grado Superior'
              },
              date: '30/06/2007',
              dual: true,
              bilingue: false,
              certificate: false
            }, {
              uid: 3,
              level: {
                uid: 2,
                name: 'Título universitario'
              },
              title: {
                uid: 2,
                name: 'Administracion de sistemas informaticos y redes'
              },
              certificate: true,
              date: '30/06/2007',
              bilingue: true,
              name: 'Grado en Ingeniería Informática',
              institution: 'Universidad Rovira i Virgili'
            }],
            experiencies: [{
              uid: 1,
              company: 'Suma',
              position: 'Junior Software Developer',
              date: '30/12/2016-20/01/2019'
            }],
            languages: [{
              uid: 1,
              level: {
                uid: 5,
                name: 'C1'
              },
              name: {
                uid: 1,
                name: 'Inglés'
              },
              date: '30/06/2005'
            }, {
              uid: 2,
              level: {
                uid: 4,
                name: 'B2'
              },
              name: {
                uid: 2,
                name: 'Francés'
              },
              date: '30/06/1998'
            }],
            offers: []
          }];
          var offers = [{
            id: 1,
            company: {
              uid: 33,
              name: 'Coritel'
            },
            job: {
              name: 'Programador Jr Java',
              description: 'Programación y prueba unitaria en Java'
            },
            province: {
              uid: 1,
              name: 'Málaga'
            },
            municipe: {
              uid: 7,
              name: 'Estepona'
            },
            date: '21/09/2006',
            category: {
              uid: 2,
              name: 'Informática y Comunicaciones'
            },
            title: [{
              uid: 1,
              name: 'Desarrollo Aplicaciones Web'
            }, {
              uid: 4,
              name: 'Desarrollo Aplicaciones Multiplataforma'
            }]
          }, {
            id: 2,
            company: {
              uid: 33,
              name: 'Coritel'
            },
            job: {
              name: 'Comercial',
              description: 'Relaciones con los clientes y atención a las redes sociales.'
            },
            province: {
              uid: 1,
              name: 'Málaga'
            },
            municipe: {
              uid: 8,
              name: 'Campanillas (PTA)'
            },
            date: '21/09/2016',
            category: {
              uid: 4,
              name: 'Comercio y Marketing'
            },
            title: [{
              uid: 5,
              name: 'Gestión Comercial y Empresarial'
            }]
          }, {
            id: 3,
            company: {
              uid: 33,
              name: 'Coritel'
            },
            job: {
              name: 'Analista Programador Java',
              description: 'Análisis funcional y diseño técnico/detallado de componentes'
            },
            province: {
              uid: 5,
              name: 'Granada'
            },
            municipe: {
              uid: 9,
              name: 'Motril'
            },
            date: '11/07/2016',
            category: {
              uid: 2,
              name: 'Informática y Comunicaciones'
            },
            title: [{
              uid: 4,
              name: 'Desarrollo Aplicaciones Multiplataforma'
            }]
          }, {
            id: 4,
            company: {
              uid: 35,
              name: 'Indra'
            },
            job: {
              name: 'Administrativo',
              description: 'Gestión de cartera de clientes.'
            },
            province: {
              uid: 2,
              name: 'Sevilla'
            },
            municipe: {
              uid: 10,
              name: 'Osuna'
            },
            date: '01/12/2015',
            category: {
              uid: 5,
              name: 'Administración y Gestión'
            },
            title: [{
              uid: 6,
              name: 'Empresariales'
            }]
          }];
          return {
            users: users,
            offers: offers
          };
        }
      }]);

      return FakeBackendService;
    }();
    /***/

  },

  /***/
  "./src/app/shared/material.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/material.module.ts ***!
    \*******************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppSharedMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [[_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"]], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"]],
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_19__["NgModule"],
        args: [{
          imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"]],
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/app-confirm/app-confirm.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/services/app-confirm/app-confirm.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AppComfirmComponent */

  /***/
  function srcAppSharedServicesAppConfirmAppConfirmComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComfirmComponent", function () {
      return AppComfirmComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; */


    var AppComfirmComponent = function AppComfirmComponent() {
      _classCallCheck(this, AppComfirmComponent);
    };

    AppComfirmComponent.ɵfac = function AppComfirmComponent_Factory(t) {
      return new (t || AppComfirmComponent)();
    };

    AppComfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComfirmComponent,
      selectors: [["app-confirm"]],
      decls: 0,
      vars: 0,
      template: function AppComfirmComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComfirmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-confirm",
          template: "\n    <!--  <h1 matDialogTitle>{{ data.title }}</h1>\n    <div mat-dialog-content>{{ data.message }}</div>\n    <div mat-dialog-actions>\n      <button\n        type=\"button\"\n        mat-raised-button\n        color=\"primary\"\n        (click)=\"dialogRef.close(true)\"\n      >\n        OK\n      </button>\n      &nbsp;\n      <span fxFlex></span>\n      <button\n        type=\"button\"\n        color=\"accent\"\n        mat-raised-button\n        (click)=\"dialogRef.close(false)\"\n      >\n        Cancel\n      </button>\n    </div> -->\n  "
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/app-confirm/app-confirm.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shared/services/app-confirm/app-confirm.service.ts ***!
    \********************************************************************/

  /*! exports provided: AppConfirmService */

  /***/
  function srcAppSharedServicesAppConfirmAppConfirmServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConfirmService", function () {
      return AppConfirmService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material'; */


    var AppConfirmService =
    /*#__PURE__*/
    function () {
      function AppConfirmService() {
        _classCallCheck(this, AppConfirmService);
      }

      _createClass(AppConfirmService, [{
        key: "confirm",
        value: function confirm() {
          /*  data.title = data.title || 'Confirm';
          data.message = data.message || 'Are you sure?';
          let dialogRef: MatDialogRef<AppComfirmComponent>;
          dialogRef = this.dialog.open(AppComfirmComponent, {
            width: '380px',
            disableClose: true,
            data: { title: data.title, message: data.message }
          });
          return dialogRef.afterClosed(); */

          var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        }
      }]);

      return AppConfirmService;
    }();

    AppConfirmService.ɵfac = function AppConfirmService_Factory(t) {
      return new (t || AppConfirmService)();
    };

    AppConfirmService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppConfirmService,
      factory: AppConfirmService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppConfirmService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/notifications.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/services/notifications.service.ts ***!
    \**********************************************************/

  /*! exports provided: NotificationsService */

  /***/
  function srcAppSharedServicesNotificationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsService", function () {
      return NotificationsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* import { MatSnackBar } from '@angular/material'; */


    var NotificationsService =
    /*#__PURE__*/
    function () {
      function NotificationsService() {
        _classCallCheck(this, NotificationsService);
      }

      _createClass(NotificationsService, [{
        key: "showNotification",
        value: function showNotification(message, action) {
          /*     this.snackBar.open(message, action, {
            duration: AppSettings.NOTIFICATIONS.DEFAULT_TIME
          }); */
        }
      }]);

      return NotificationsService;
    }();

    NotificationsService.ɵfac = function NotificationsService_Factory(t) {
      return new (t || NotificationsService)();
    };

    NotificationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NotificationsService,
      factory: NotificationsService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/offers.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/services/offers.service.ts ***!
    \***************************************************/

  /*! exports provided: OffersService */

  /***/
  function srcAppSharedServicesOffersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffersService", function () {
      return OffersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../app.settings */
    "./src/app/shared/app.settings.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var OffersService =
    /*#__PURE__*/
    function () {
      function OffersService(http
      /* , private store$: Store<AppStore> */
      ) {
        _classCallCheck(this, OffersService);

        this.http = http;
        this._offers = [{}];
      }

      _createClass(OffersService, [{
        key: "getOffers",
        value: function getOffers() {
          return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].API_ENDPOINT_OFFERS);
        }
      }, {
        key: "offers",
        set: function set(_offers) {
          this._offers = _offers;
        },
        get: function get() {
          return this._offers;
        }
      }]);

      return OffersService;
    }();

    OffersService.ɵfac = function OffersService_Factory(t) {
      return new (t || OffersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    OffersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OffersService,
      factory: OffersService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OffersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/profile.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/services/profile.service.ts ***!
    \****************************************************/

  /*! exports provided: ProfileService */

  /***/
  function srcAppSharedServicesProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../app.settings */
    "./src/app/shared/app.settings.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProfileService =
    /*#__PURE__*/
    function () {
      function ProfileService(http
      /* , private store$: Store<AppStore> */
      ) {
        _classCallCheck(this, ProfileService);

        this.http = http;
        this._user = {};
      }

      _createClass(ProfileService, [{
        key: "loadProfile",
        value: function loadProfile() {
          return this.user; //return this.http.get<UserOptions>(AppSettings.API_ENDPOINT_USER_ME);
        }
      }, {
        key: "logout",
        value: function logout() {
          /*  this.store$.dispatch(new UserActions.Logout()); */
        }
      }, {
        key: "updateProfile",
        value: function updateProfile(profile
        /* User */
        ) {
          return this.http.put(_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].API_ENDPOINT_USERS, Object.assign({}, profile));
        }
      }, {
        key: "signupProfile",
        value: function signupProfile(profile
        /* UserOptions */
        ) {
          return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].API_ENDPOINT_USER_CREATE, profile);
        }
      }, {
        key: "requestRememberPassword",
        value: function requestRememberPassword(uid) {
          return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].API_ENDPOINT_USER_REQUEST_REMEMBER_PASSWORD, uid);
        }
      }, {
        key: "rememberPassword",
        value: function rememberPassword(uidAndHash) {
          return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].API_ENDPOINT_USER_REMEMBER_PASSWORD, uidAndHash);
        }
      }, {
        key: "confirmUser",
        value: function confirmUser(uidAndHash) {
          return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].API_ENDPOINT_CONFIRM_USER, uidAndHash);
        }
      }, {
        key: "user",
        set: function set(_user) {
          this._user = _user;
        },
        get: function get() {
          return this._user;
        }
      }]);

      return ProfileService;
    }();

    ProfileService.ɵfac = function ProfileService_Factory(t) {
      return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProfileService,
      factory: ProfileService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/app-confirm/app-confirm.component */
    "./src/app/shared/services/app-confirm/app-confirm.component.ts");
    /* harmony import */


    var _components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/admin-layout/admin-layout.component */
    "./src/app/shared/components/admin-layout/admin-layout.component.ts");
    /* harmony import */


    var _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/app-confirm/app-confirm.service */
    "./src/app/shared/services/app-confirm/app-confirm.service.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/shared/guards/auth.guard.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/shared/material.module.ts");
    /*
    import { TranslateModule } from '@ngx-translate/core';
    import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'; */
    // COMPONENTS
    // DIRECTIVES
    // PIPES
    // SERVICES


    var declarations = [_services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_4__["AppComfirmComponent"], _components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"]];
    var sharedExports = [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_4__["AppComfirmComponent"], _components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"]];
    var providers = [_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_6__["AppConfirmService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]];

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: providers,
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_4__["AppComfirmComponent"], _components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_4__["AppComfirmComponent"], _components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          entryComponents: [_services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_4__["AppComfirmComponent"]],
          providers: providers,
          declarations: declarations,
          exports: sharedExports
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    document.addEventListener('DOMContentLoaded', function () {
      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
        return console.error(err);
      });
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/dtome/Workspace/Javascript/Master/advanced-frontend/uoc-deploy/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map