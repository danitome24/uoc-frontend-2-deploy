function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configuration-configuration-module"], {
  /***/
  "./src/app/profile/configuration/configuration-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/profile/configuration/configuration-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ConfigurationRoutingModule */

  /***/
  function srcAppProfileConfigurationConfigurationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurationRoutingModule", function () {
      return ConfigurationRoutingModule;
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


    var _configuration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./configuration.component */
    "./src/app/profile/configuration/configuration.component.ts"); //import { CompanyRoleGuard } from '../../shared/guards/company-role.guard';


    var routes = [{
      path: '',
      component: _configuration_component__WEBPACK_IMPORTED_MODULE_2__["ConfigurationComponent"]
    }];

    var ConfigurationRoutingModule = function ConfigurationRoutingModule() {
      _classCallCheck(this, ConfigurationRoutingModule);
    };

    ConfigurationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ConfigurationRoutingModule
    });
    ConfigurationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ConfigurationRoutingModule_Factory(t) {
        return new (t || ConfigurationRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConfigurationRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurationRoutingModule, [{
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
  "./src/app/profile/configuration/configuration.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/profile/configuration/configuration.component.ts ***!
    \******************************************************************/

  /*! exports provided: ConfigurationComponent */

  /***/
  function srcAppProfileConfigurationConfigurationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function () {
      return ConfigurationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/app.settings */
    "./src/app/shared/app.settings.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _reducers_configuration_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../reducers/configuration.reducer */
    "./src/app/profile/reducers/configuration.reducer.ts");
    /* harmony import */


    var _actions_configuration_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions/configuration.actions */
    "./src/app/profile/actions/configuration.actions.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function ConfigurationComponent_mat_option_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lang_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lang_r11.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lang_r11.name, " ");
      }
    }

    var ConfigurationComponent =
    /*#__PURE__*/
    function () {
      function ConfigurationComponent(store) {
        _classCallCheck(this, ConfigurationComponent);

        this.store = store;
      }

      _createClass(ConfigurationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.availableAppLanguages = _shared_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].APP_LOCALES;
          this.sendNotifications$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers_configuration_reducer__WEBPACK_IMPORTED_MODULE_3__["selectConfigurationSendNotifications"]));
          this.localeSelected$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers_configuration_reducer__WEBPACK_IMPORTED_MODULE_3__["selectConfigurationAppLocale"]));
        }
      }, {
        key: "updateNotifications",
        value: function updateNotifications(event) {
          console.log(event);
          var sendNotifications = event.checked;
          this.store.dispatch(_actions_configuration_actions__WEBPACK_IMPORTED_MODULE_4__["actions"].notificationsUpdate({
            sendNotifications: sendNotifications
          }));
        }
      }, {
        key: "updateAppLocale",
        value: function updateAppLocale(event) {
          var selectedLocale = _shared_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"].APP_LOCALES.find(function (locale) {
            return locale.id == event.value;
          });

          this.store.dispatch(_actions_configuration_actions__WEBPACK_IMPORTED_MODULE_4__["actions"].localeUpdate({
            locale: selectedLocale
          }));
        }
      }]);

      return ConfigurationComponent;
    }();

    ConfigurationComponent.ɵfac = function ConfigurationComponent_Factory(t) {
      return new (t || ConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    ConfigurationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfigurationComponent,
      selectors: [["app-configuration"]],
      decls: 17,
      vars: 4,
      consts: [["mat-card-avatar", ""], ["appearance", "fill"], [3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["color", "primary", 3, "checked", "change"], [3, "value"]],
      template: function ConfigurationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Configuraci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Idioma de la aplicaci\xF3n:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ConfigurationComponent_Template_mat_select_selectionChange_10_listener($event) {
            return ctx.updateAppLocale($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ConfigurationComponent_mat_option_11_Template, 2, 2, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Recibir notificaciones: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-checkbox", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ConfigurationComponent_Template_mat_checkbox_change_15_listener($event) {
            return ctx.updateNotifications($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.availableAppLanguages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 2, ctx.sendNotifications$));
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-configuration',
          templateUrl: './configuration.component.html',
          styleUrls: ['./configuration.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/configuration/configuration.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/profile/configuration/configuration.module.ts ***!
    \***************************************************************/

  /*! exports provided: ConfigurationModule */

  /***/
  function srcAppProfileConfigurationConfigurationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurationModule", function () {
      return ConfigurationModule;
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


    var _configuration_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./configuration-routing.module */
    "./src/app/profile/configuration/configuration-routing.module.ts");
    /* harmony import */


    var _configuration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./configuration.component */
    "./src/app/profile/configuration/configuration.component.ts");
    /* harmony import */


    var _shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/material.module */
    "./src/app/shared/material.module.ts");

    var ConfigurationModule = function ConfigurationModule() {
      _classCallCheck(this, ConfigurationModule);
    };

    ConfigurationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ConfigurationModule
    });
    ConfigurationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ConfigurationModule_Factory(t) {
        return new (t || ConfigurationModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _configuration_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConfigurationRoutingModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConfigurationModule, {
        declarations: [_configuration_component__WEBPACK_IMPORTED_MODULE_3__["ConfigurationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _configuration_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConfigurationRoutingModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_configuration_component__WEBPACK_IMPORTED_MODULE_3__["ConfigurationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _configuration_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConfigurationRoutingModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=configuration-configuration-module-es5.js.map