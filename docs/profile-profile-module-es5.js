function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/moment/locale/af.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/af.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleAfJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var af = moment.defineLocale('af', {
        months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
        weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
        weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
        meridiemParse: /vm|nm/i,
        isPM: function isPM(input) {
          return /^nm$/i.test(input);
        },
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours < 12) {
            return isLower ? 'vm' : 'VM';
          } else {
            return isLower ? 'nm' : 'NM';
          }
        },
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Vandag om] LT',
          nextDay: '[Môre om] LT',
          nextWeek: 'dddd [om] LT',
          lastDay: '[Gister om] LT',
          lastWeek: '[Laas] dddd [om] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'oor %s',
          past: '%s gelede',
          s: '\'n paar sekondes',
          ss: '%d sekondes',
          m: '\'n minuut',
          mm: '%d minute',
          h: '\'n uur',
          hh: '%d ure',
          d: '\'n dag',
          dd: '%d dae',
          M: '\'n maand',
          MM: '%d maande',
          y: '\'n jaar',
          yy: '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function ordinal(number) {
          return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
        },
        week: {
          dow: 1,
          // Maandag is die eerste dag van die week.
          doy: 4 // Die week wat die 4de Januarie bevat is die eerste week van die jaar.

        }
      });
      return af;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ar-dz.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/ar-dz.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleArDzJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var arDz = moment.defineLocale('ar-dz', {
        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'أح_إث_ثلا_أر_خم_جم_سب'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          ss: '%d ثانية',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات'
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return arDz;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ar-kw.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/ar-kw.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleArKwJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var arKw = moment.defineLocale('ar-kw', {
        months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          ss: '%d ثانية',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات'
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 12 // The week that contains Jan 12th is the first week of the year.

        }
      });
      return arKw;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ar-ly.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/ar-ly.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleArLyJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var symbolMap = {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '0': '0'
      },
          pluralForm = function pluralForm(n) {
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
      },
          plurals = {
        s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
        m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
        h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
        d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
        M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
        y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
      },
          pluralize = function pluralize(u) {
        return function (number, withoutSuffix, string, isFuture) {
          var f = pluralForm(number),
              str = plurals[u][pluralForm(number)];

          if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
          }

          return str.replace(/%d/i, number);
        };
      },
          months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];

      var arLy = moment.defineLocale('ar-ly', {
        months: months,
        monthsShort: months,
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: "D/\u200FM/\u200FYYYY",
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM: function isPM(input) {
          return 'م' === input;
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'ص';
          } else {
            return 'م';
          }
        },
        calendar: {
          sameDay: '[اليوم عند الساعة] LT',
          nextDay: '[غدًا عند الساعة] LT',
          nextWeek: 'dddd [عند الساعة] LT',
          lastDay: '[أمس عند الساعة] LT',
          lastWeek: 'dddd [عند الساعة] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'بعد %s',
          past: 'منذ %s',
          s: pluralize('s'),
          ss: pluralize('s'),
          m: pluralize('m'),
          mm: pluralize('m'),
          h: pluralize('h'),
          hh: pluralize('h'),
          d: pluralize('d'),
          dd: pluralize('d'),
          M: pluralize('M'),
          MM: pluralize('M'),
          y: pluralize('y'),
          yy: pluralize('y')
        },
        preparse: function preparse(string) {
          return string.replace(/،/g, ',');
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          }).replace(/,/g, '،');
        },
        week: {
          dow: 6,
          // Saturday is the first day of the week.
          doy: 12 // The week that contains Jan 12th is the first week of the year.

        }
      });
      return arLy;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ar-ma.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/ar-ma.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleArMaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var arMa = moment.defineLocale('ar-ma', {
        months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          ss: '%d ثانية',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات'
        },
        week: {
          dow: 6,
          // Saturday is the first day of the week.
          doy: 12 // The week that contains Jan 12th is the first week of the year.

        }
      });
      return arMa;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ar-sa.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/ar-sa.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleArSaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var symbolMap = {
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
        '0': '٠'
      },
          numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
      };
      var arSa = moment.defineLocale('ar-sa', {
        months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM: function isPM(input) {
          return 'م' === input;
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'ص';
          } else {
            return 'م';
          }
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          ss: '%d ثانية',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات'
        },
        preparse: function preparse(string) {
          return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
            return numberMap[match];
          }).replace(/،/g, ',');
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          }).replace(/,/g, '،');
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return arSa;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ar-tn.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/ar-tn.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleArTnJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var arTn = moment.defineLocale('ar-tn', {
        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          ss: '%d ثانية',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات'
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return arTn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ar.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ar.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleArJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var symbolMap = {
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
        '0': '٠'
      },
          numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
      },
          pluralForm = function pluralForm(n) {
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
      },
          plurals = {
        s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
        m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
        h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
        d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
        M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
        y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
      },
          pluralize = function pluralize(u) {
        return function (number, withoutSuffix, string, isFuture) {
          var f = pluralForm(number),
              str = plurals[u][pluralForm(number)];

          if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
          }

          return str.replace(/%d/i, number);
        };
      },
          months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];

      var ar = moment.defineLocale('ar', {
        months: months,
        monthsShort: months,
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: "D/\u200FM/\u200FYYYY",
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM: function isPM(input) {
          return 'م' === input;
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'ص';
          } else {
            return 'م';
          }
        },
        calendar: {
          sameDay: '[اليوم عند الساعة] LT',
          nextDay: '[غدًا عند الساعة] LT',
          nextWeek: 'dddd [عند الساعة] LT',
          lastDay: '[أمس عند الساعة] LT',
          lastWeek: 'dddd [عند الساعة] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'بعد %s',
          past: 'منذ %s',
          s: pluralize('s'),
          ss: pluralize('s'),
          m: pluralize('m'),
          mm: pluralize('m'),
          h: pluralize('h'),
          hh: pluralize('h'),
          d: pluralize('d'),
          dd: pluralize('d'),
          M: pluralize('M'),
          MM: pluralize('M'),
          y: pluralize('y'),
          yy: pluralize('y')
        },
        preparse: function preparse(string) {
          return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
            return numberMap[match];
          }).replace(/،/g, ',');
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          }).replace(/,/g, '،');
        },
        week: {
          dow: 6,
          // Saturday is the first day of the week.
          doy: 12 // The week that contains Jan 12th is the first week of the year.

        }
      });
      return ar;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/az.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/az.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleAzJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var suffixes = {
        1: '-inci',
        5: '-inci',
        8: '-inci',
        70: '-inci',
        80: '-inci',
        2: '-nci',
        7: '-nci',
        20: '-nci',
        50: '-nci',
        3: '-üncü',
        4: '-üncü',
        100: '-üncü',
        6: '-ncı',
        9: '-uncu',
        10: '-uncu',
        30: '-uncu',
        60: '-ıncı',
        90: '-ıncı'
      };
      var az = moment.defineLocale('az', {
        months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
        monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
        weekdays: 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
        weekdaysShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
        weekdaysMin: 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[bugün saat] LT',
          nextDay: '[sabah saat] LT',
          nextWeek: '[gələn həftə] dddd [saat] LT',
          lastDay: '[dünən] LT',
          lastWeek: '[keçən həftə] dddd [saat] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s sonra',
          past: '%s əvvəl',
          s: 'birneçə saniyə',
          ss: '%d saniyə',
          m: 'bir dəqiqə',
          mm: '%d dəqiqə',
          h: 'bir saat',
          hh: '%d saat',
          d: 'bir gün',
          dd: '%d gün',
          M: 'bir ay',
          MM: '%d ay',
          y: 'bir il',
          yy: '%d il'
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM: function isPM(input) {
          return /^(gündüz|axşam)$/.test(input);
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'gecə';
          } else if (hour < 12) {
            return 'səhər';
          } else if (hour < 17) {
            return 'gündüz';
          } else {
            return 'axşam';
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal: function ordinal(number) {
          if (number === 0) {
            // special case for zero
            return number + '-ıncı';
          }

          var a = number % 10,
              b = number % 100 - a,
              c = number >= 100 ? 100 : null;
          return number + (suffixes[a] || suffixes[b] || suffixes[c]);
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return az;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/be.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/be.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleBeJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
      }

      function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
          'ss': withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
          'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
          'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
          'dd': 'дзень_дні_дзён',
          'MM': 'месяц_месяцы_месяцаў',
          'yy': 'год_гады_гадоў'
        };

        if (key === 'm') {
          return withoutSuffix ? 'хвіліна' : 'хвіліну';
        } else if (key === 'h') {
          return withoutSuffix ? 'гадзіна' : 'гадзіну';
        } else {
          return number + ' ' + plural(format[key], +number);
        }
      }

      var be = moment.defineLocale('be', {
        months: {
          format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
          standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
        },
        monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
        weekdays: {
          format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
          standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
          isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
        },
        weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY г.',
          LLL: 'D MMMM YYYY г., HH:mm',
          LLLL: 'dddd, D MMMM YYYY г., HH:mm'
        },
        calendar: {
          sameDay: '[Сёння ў] LT',
          nextDay: '[Заўтра ў] LT',
          lastDay: '[Учора ў] LT',
          nextWeek: function nextWeek() {
            return '[У] dddd [ў] LT';
          },
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                return '[У мінулую] dddd [ў] LT';

              case 1:
              case 2:
              case 4:
                return '[У мінулы] dddd [ў] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'праз %s',
          past: '%s таму',
          s: 'некалькі секунд',
          m: relativeTimeWithPlural,
          mm: relativeTimeWithPlural,
          h: relativeTimeWithPlural,
          hh: relativeTimeWithPlural,
          d: 'дзень',
          dd: relativeTimeWithPlural,
          M: 'месяц',
          MM: relativeTimeWithPlural,
          y: 'год',
          yy: relativeTimeWithPlural
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM: function isPM(input) {
          return /^(дня|вечара)$/.test(input);
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'ночы';
          } else if (hour < 12) {
            return 'раніцы';
          } else if (hour < 17) {
            return 'дня';
          } else {
            return 'вечара';
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
              return (number % 10 === 2 || number % 10 === 3) && number % 100 !== 12 && number % 100 !== 13 ? number + '-і' : number + '-ы';

            case 'D':
              return number + '-га';

            default:
              return number;
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return be;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/bg.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/bg.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleBgJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var bg = moment.defineLocale('bg', {
        months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
        weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
        weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'D.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY H:mm',
          LLLL: 'dddd, D MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[Днес в] LT',
          nextDay: '[Утре в] LT',
          nextWeek: 'dddd [в] LT',
          lastDay: '[Вчера в] LT',
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
              case 3:
              case 6:
                return '[В изминалата] dddd [в] LT';

              case 1:
              case 2:
              case 4:
              case 5:
                return '[В изминалия] dddd [в] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'след %s',
          past: 'преди %s',
          s: 'няколко секунди',
          ss: '%d секунди',
          m: 'минута',
          mm: '%d минути',
          h: 'час',
          hh: '%d часа',
          d: 'ден',
          dd: '%d дни',
          M: 'месец',
          MM: '%d месеца',
          y: 'година',
          yy: '%d години'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function ordinal(number) {
          var lastDigit = number % 10,
              last2Digits = number % 100;

          if (number === 0) {
            return number + '-ев';
          } else if (last2Digits === 0) {
            return number + '-ен';
          } else if (last2Digits > 10 && last2Digits < 20) {
            return number + '-ти';
          } else if (lastDigit === 1) {
            return number + '-ви';
          } else if (lastDigit === 2) {
            return number + '-ри';
          } else if (lastDigit === 7 || lastDigit === 8) {
            return number + '-ми';
          } else {
            return number + '-ти';
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return bg;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/bm.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/bm.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleBmJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var bm = moment.defineLocale('bm', {
        months: 'Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo'.split('_'),
        monthsShort: 'Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des'.split('_'),
        weekdays: 'Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri'.split('_'),
        weekdaysShort: 'Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib'.split('_'),
        weekdaysMin: 'Ka_Nt_Ta_Ar_Al_Ju_Si'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'MMMM [tile] D [san] YYYY',
          LLL: 'MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
          LLLL: 'dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm'
        },
        calendar: {
          sameDay: '[Bi lɛrɛ] LT',
          nextDay: '[Sini lɛrɛ] LT',
          nextWeek: 'dddd [don lɛrɛ] LT',
          lastDay: '[Kunu lɛrɛ] LT',
          lastWeek: 'dddd [tɛmɛnen lɛrɛ] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s kɔnɔ',
          past: 'a bɛ %s bɔ',
          s: 'sanga dama dama',
          ss: 'sekondi %d',
          m: 'miniti kelen',
          mm: 'miniti %d',
          h: 'lɛrɛ kelen',
          hh: 'lɛrɛ %d',
          d: 'tile kelen',
          dd: 'tile %d',
          M: 'kalo kelen',
          MM: 'kalo %d',
          y: 'san kelen',
          yy: 'san %d'
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return bm;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/bn.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/bn.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleBnJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var symbolMap = {
        '1': '১',
        '2': '২',
        '3': '৩',
        '4': '৪',
        '5': '৫',
        '6': '৬',
        '7': '৭',
        '8': '৮',
        '9': '৯',
        '0': '০'
      },
          numberMap = {
        '১': '1',
        '২': '2',
        '৩': '3',
        '৪': '4',
        '৫': '5',
        '৬': '6',
        '৭': '7',
        '৮': '8',
        '৯': '9',
        '০': '0'
      };
      var bn = moment.defineLocale('bn', {
        months: 'জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
        monthsShort: 'জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
        weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
        weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
        weekdaysMin: 'রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি'.split('_'),
        longDateFormat: {
          LT: 'A h:mm সময়',
          LTS: 'A h:mm:ss সময়',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm সময়',
          LLLL: 'dddd, D MMMM YYYY, A h:mm সময়'
        },
        calendar: {
          sameDay: '[আজ] LT',
          nextDay: '[আগামীকাল] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[গতকাল] LT',
          lastWeek: '[গত] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s পরে',
          past: '%s আগে',
          s: 'কয়েক সেকেন্ড',
          ss: '%d সেকেন্ড',
          m: 'এক মিনিট',
          mm: '%d মিনিট',
          h: 'এক ঘন্টা',
          hh: '%d ঘন্টা',
          d: 'এক দিন',
          dd: '%d দিন',
          M: 'এক মাস',
          MM: '%d মাস',
          y: 'এক বছর',
          yy: '%d বছর'
        },
        preparse: function preparse(string) {
          return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
            return numberMap[match];
          });
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          });
        },
        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'রাত' && hour >= 4 || meridiem === 'দুপুর' && hour < 5 || meridiem === 'বিকাল') {
            return hour + 12;
          } else {
            return hour;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'রাত';
          } else if (hour < 10) {
            return 'সকাল';
          } else if (hour < 17) {
            return 'দুপুর';
          } else if (hour < 20) {
            return 'বিকাল';
          } else {
            return 'রাত';
          }
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return bn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/bo.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/bo.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleBoJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var symbolMap = {
        '1': '༡',
        '2': '༢',
        '3': '༣',
        '4': '༤',
        '5': '༥',
        '6': '༦',
        '7': '༧',
        '8': '༨',
        '9': '༩',
        '0': '༠'
      },
          numberMap = {
        '༡': '1',
        '༢': '2',
        '༣': '3',
        '༤': '4',
        '༥': '5',
        '༦': '6',
        '༧': '7',
        '༨': '8',
        '༩': '9',
        '༠': '0'
      };
      var bo = moment.defineLocale('bo', {
        months: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
        monthsShort: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
        weekdays: 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
        weekdaysShort: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
        weekdaysMin: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
        longDateFormat: {
          LT: 'A h:mm',
          LTS: 'A h:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm',
          LLLL: 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar: {
          sameDay: '[དི་རིང] LT',
          nextDay: '[སང་ཉིན] LT',
          nextWeek: '[བདུན་ཕྲག་རྗེས་མ], LT',
          lastDay: '[ཁ་སང] LT',
          lastWeek: '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s ལ་',
          past: '%s སྔན་ལ',
          s: 'ལམ་སང',
          ss: '%d སྐར་ཆ།',
          m: 'སྐར་མ་གཅིག',
          mm: '%d སྐར་མ',
          h: 'ཆུ་ཚོད་གཅིག',
          hh: '%d ཆུ་ཚོད',
          d: 'ཉིན་གཅིག',
          dd: '%d ཉིན་',
          M: 'ཟླ་བ་གཅིག',
          MM: '%d ཟླ་བ',
          y: 'ལོ་གཅིག',
          yy: '%d ལོ'
        },
        preparse: function preparse(string) {
          return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
            return numberMap[match];
          });
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          });
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'མཚན་མོ' && hour >= 4 || meridiem === 'ཉིན་གུང' && hour < 5 || meridiem === 'དགོང་དག') {
            return hour + 12;
          } else {
            return hour;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'མཚན་མོ';
          } else if (hour < 10) {
            return 'ཞོགས་ཀས';
          } else if (hour < 17) {
            return 'ཉིན་གུང';
          } else if (hour < 20) {
            return 'དགོང་དག';
          } else {
            return 'མཚན་མོ';
          }
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return bo;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/br.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/br.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleBrJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      function relativeTimeWithMutation(number, withoutSuffix, key) {
        var format = {
          'mm': 'munutenn',
          'MM': 'miz',
          'dd': 'devezh'
        };
        return number + ' ' + mutation(format[key], number);
      }

      function specialMutationForYears(number) {
        switch (lastNumber(number)) {
          case 1:
          case 3:
          case 4:
          case 5:
          case 9:
            return number + ' bloaz';

          default:
            return number + ' vloaz';
        }
      }

      function lastNumber(number) {
        if (number > 9) {
          return lastNumber(number % 10);
        }

        return number;
      }

      function mutation(text, number) {
        if (number === 2) {
          return softMutation(text);
        }

        return text;
      }

      function softMutation(text) {
        var mutationTable = {
          'm': 'v',
          'b': 'v',
          'd': 'z'
        };

        if (mutationTable[text.charAt(0)] === undefined) {
          return text;
        }

        return mutationTable[text.charAt(0)] + text.substring(1);
      }

      var br = moment.defineLocale('br', {
        months: 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
        monthsShort: 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
        weekdays: 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
        weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
        weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'h[e]mm A',
          LTS: 'h[e]mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D [a viz] MMMM YYYY',
          LLL: 'D [a viz] MMMM YYYY h[e]mm A',
          LLLL: 'dddd, D [a viz] MMMM YYYY h[e]mm A'
        },
        calendar: {
          sameDay: '[Hiziv da] LT',
          nextDay: '[Warc\'hoazh da] LT',
          nextWeek: 'dddd [da] LT',
          lastDay: '[Dec\'h da] LT',
          lastWeek: 'dddd [paset da] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'a-benn %s',
          past: '%s \'zo',
          s: 'un nebeud segondennoù',
          ss: '%d eilenn',
          m: 'ur vunutenn',
          mm: relativeTimeWithMutation,
          h: 'un eur',
          hh: '%d eur',
          d: 'un devezh',
          dd: relativeTimeWithMutation,
          M: 'ur miz',
          MM: relativeTimeWithMutation,
          y: 'ur bloaz',
          yy: specialMutationForYears
        },
        dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
        ordinal: function ordinal(number) {
          var output = number === 1 ? 'añ' : 'vet';
          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return br;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/bs.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/bs.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleBsJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      function translate(number, withoutSuffix, key) {
        var result = number + ' ';

        switch (key) {
          case 'ss':
            if (number === 1) {
              result += 'sekunda';
            } else if (number === 2 || number === 3 || number === 4) {
              result += 'sekunde';
            } else {
              result += 'sekundi';
            }

            return result;

          case 'm':
            return withoutSuffix ? 'jedna minuta' : 'jedne minute';

          case 'mm':
            if (number === 1) {
              result += 'minuta';
            } else if (number === 2 || number === 3 || number === 4) {
              result += 'minute';
            } else {
              result += 'minuta';
            }

            return result;

          case 'h':
            return withoutSuffix ? 'jedan sat' : 'jednog sata';

          case 'hh':
            if (number === 1) {
              result += 'sat';
            } else if (number === 2 || number === 3 || number === 4) {
              result += 'sata';
            } else {
              result += 'sati';
            }

            return result;

          case 'dd':
            if (number === 1) {
              result += 'dan';
            } else {
              result += 'dana';
            }

            return result;

          case 'MM':
            if (number === 1) {
              result += 'mjesec';
            } else if (number === 2 || number === 3 || number === 4) {
              result += 'mjeseca';
            } else {
              result += 'mjeseci';
            }

            return result;

          case 'yy':
            if (number === 1) {
              result += 'godina';
            } else if (number === 2 || number === 3 || number === 4) {
              result += 'godine';
            } else {
              result += 'godina';
            }

            return result;
        }
      }

      var bs = moment.defineLocale('bs', {
        months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[danas u] LT',
          nextDay: '[sutra u] LT',
          nextWeek: function nextWeek() {
            switch (this.day()) {
              case 0:
                return '[u] [nedjelju] [u] LT';

              case 3:
                return '[u] [srijedu] [u] LT';

              case 6:
                return '[u] [subotu] [u] LT';

              case 1:
              case 2:
              case 4:
              case 5:
                return '[u] dddd [u] LT';
            }
          },
          lastDay: '[jučer u] LT',
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
              case 3:
                return '[prošlu] dddd [u] LT';

              case 6:
                return '[prošle] [subote] [u] LT';

              case 1:
              case 2:
              case 4:
              case 5:
                return '[prošli] dddd [u] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'za %s',
          past: 'prije %s',
          s: 'par sekundi',
          ss: translate,
          m: translate,
          mm: translate,
          h: translate,
          hh: translate,
          d: 'dan',
          dd: translate,
          M: 'mjesec',
          MM: translate,
          y: 'godinu',
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return bs;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ca.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ca.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleCaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var ca = moment.defineLocale('ca', {
        months: {
          standalone: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
          format: 'de gener_de febrer_de març_d\'abril_de maig_de juny_de juliol_d\'agost_de setembre_d\'octubre_de novembre_de desembre'.split('_'),
          isFormat: /D[oD]?(\s)+MMMM/
        },
        monthsShort: 'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
        monthsParseExact: true,
        weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
        weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
        weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM [de] YYYY',
          ll: 'D MMM YYYY',
          LLL: 'D MMMM [de] YYYY [a les] H:mm',
          lll: 'D MMM YYYY, H:mm',
          LLLL: 'dddd D MMMM [de] YYYY [a les] H:mm',
          llll: 'ddd D MMM YYYY, H:mm'
        },
        calendar: {
          sameDay: function sameDay() {
            return '[avui a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
          },
          nextDay: function nextDay() {
            return '[demà a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
          },
          nextWeek: function nextWeek() {
            return 'dddd [a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
          },
          lastDay: function lastDay() {
            return '[ahir a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
          },
          lastWeek: function lastWeek() {
            return '[el] dddd [passat a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'd\'aquí %s',
          past: 'fa %s',
          s: 'uns segons',
          ss: '%d segons',
          m: 'un minut',
          mm: '%d minuts',
          h: 'una hora',
          hh: '%d hores',
          d: 'un dia',
          dd: '%d dies',
          M: 'un mes',
          MM: '%d mesos',
          y: 'un any',
          yy: '%d anys'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal: function ordinal(number, period) {
          var output = number === 1 ? 'r' : number === 2 ? 'n' : number === 3 ? 'r' : number === 4 ? 't' : 'è';

          if (period === 'w' || period === 'W') {
            output = 'a';
          }

          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return ca;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/cs.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/cs.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleCsJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
          monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
      var monthsParse = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i]; // NOTE: 'červen' is substring of 'červenec'; therefore 'červenec' must precede 'červen' in the regex to be fully matched.
      // Otherwise parser matches '1. červenec' as '1. červen' + 'ec'.

      var monthsRegex = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;

      function plural(n) {
        return n > 1 && n < 5 && ~~(n / 10) !== 1;
      }

      function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';

        switch (key) {
          case 's':
            // a few seconds / in a few seconds / a few seconds ago
            return withoutSuffix || isFuture ? 'pár sekund' : 'pár sekundami';

          case 'ss':
            // 9 seconds / in 9 seconds / 9 seconds ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'sekundy' : 'sekund');
            } else {
              return result + 'sekundami';
            }

            break;

          case 'm':
            // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minuta' : isFuture ? 'minutu' : 'minutou';

          case 'mm':
            // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'minuty' : 'minut');
            } else {
              return result + 'minutami';
            }

            break;

          case 'h':
            // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';

          case 'hh':
            // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'hodiny' : 'hodin');
            } else {
              return result + 'hodinami';
            }

            break;

          case 'd':
            // a day / in a day / a day ago
            return withoutSuffix || isFuture ? 'den' : 'dnem';

          case 'dd':
            // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'dny' : 'dní');
            } else {
              return result + 'dny';
            }

            break;

          case 'M':
            // a month / in a month / a month ago
            return withoutSuffix || isFuture ? 'měsíc' : 'měsícem';

          case 'MM':
            // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'měsíce' : 'měsíců');
            } else {
              return result + 'měsíci';
            }

            break;

          case 'y':
            // a year / in a year / a year ago
            return withoutSuffix || isFuture ? 'rok' : 'rokem';

          case 'yy':
            // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'roky' : 'let');
            } else {
              return result + 'lety';
            }

            break;
        }
      }

      var cs = moment.defineLocale('cs', {
        months: months,
        monthsShort: monthsShort,
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        // NOTE: 'červen' is substring of 'červenec'; therefore 'červenec' must precede 'červen' in the regex to be fully matched.
        // Otherwise parser matches '1. červenec' as '1. červen' + 'ec'.
        monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
        monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
        weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
        weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd D. MMMM YYYY H:mm',
          l: 'D. M. YYYY'
        },
        calendar: {
          sameDay: '[dnes v] LT',
          nextDay: '[zítra v] LT',
          nextWeek: function nextWeek() {
            switch (this.day()) {
              case 0:
                return '[v neděli v] LT';

              case 1:
              case 2:
                return '[v] dddd [v] LT';

              case 3:
                return '[ve středu v] LT';

              case 4:
                return '[ve čtvrtek v] LT';

              case 5:
                return '[v pátek v] LT';

              case 6:
                return '[v sobotu v] LT';
            }
          },
          lastDay: '[včera v] LT',
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
                return '[minulou neděli v] LT';

              case 1:
              case 2:
                return '[minulé] dddd [v] LT';

              case 3:
                return '[minulou středu v] LT';

              case 4:
              case 5:
                return '[minulý] dddd [v] LT';

              case 6:
                return '[minulou sobotu v] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'za %s',
          past: 'před %s',
          s: translate,
          ss: translate,
          m: translate,
          mm: translate,
          h: translate,
          hh: translate,
          d: translate,
          dd: translate,
          M: translate,
          MM: translate,
          y: translate,
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return cs;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/cv.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/cv.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleCvJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var cv = moment.defineLocale('cv', {
        months: 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
        monthsShort: 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
        weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
        weekdaysShort: 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
        weekdaysMin: 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD-MM-YYYY',
          LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
          LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
          LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
        },
        calendar: {
          sameDay: '[Паян] LT [сехетре]',
          nextDay: '[Ыран] LT [сехетре]',
          lastDay: '[Ӗнер] LT [сехетре]',
          nextWeek: '[Ҫитес] dddd LT [сехетре]',
          lastWeek: '[Иртнӗ] dddd LT [сехетре]',
          sameElse: 'L'
        },
        relativeTime: {
          future: function future(output) {
            var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';
            return output + affix;
          },
          past: '%s каялла',
          s: 'пӗр-ик ҫеккунт',
          ss: '%d ҫеккунт',
          m: 'пӗр минут',
          mm: '%d минут',
          h: 'пӗр сехет',
          hh: '%d сехет',
          d: 'пӗр кун',
          dd: '%d кун',
          M: 'пӗр уйӑх',
          MM: '%d уйӑх',
          y: 'пӗр ҫул',
          yy: '%d ҫул'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
        ordinal: '%d-мӗш',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return cv;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/cy.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/cy.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleCyJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var cy = moment.defineLocale('cy', {
        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
        weekdaysParseExact: true,
        // time formats are the same as en-gb
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Heddiw am] LT',
          nextDay: '[Yfory am] LT',
          nextWeek: 'dddd [am] LT',
          lastDay: '[Ddoe am] LT',
          lastWeek: 'dddd [diwethaf am] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'mewn %s',
          past: '%s yn ôl',
          s: 'ychydig eiliadau',
          ss: '%d eiliad',
          m: 'munud',
          mm: '%d munud',
          h: 'awr',
          hh: '%d awr',
          d: 'diwrnod',
          dd: '%d diwrnod',
          M: 'mis',
          MM: '%d mis',
          y: 'blwyddyn',
          yy: '%d flynedd'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
        ordinal: function ordinal(number) {
          var b = number,
              output = '',
              lookup = ['', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
          'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
          ];

          if (b > 20) {
            if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
              output = 'fed'; // not 30ain, 70ain or 90ain
            } else {
              output = 'ain';
            }
          } else if (b > 0) {
            output = lookup[b];
          }

          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return cy;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/da.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/da.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleDaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var da = moment.defineLocale('da', {
        months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),
        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH:mm',
          LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
        },
        calendar: {
          sameDay: '[i dag kl.] LT',
          nextDay: '[i morgen kl.] LT',
          nextWeek: 'på dddd [kl.] LT',
          lastDay: '[i går kl.] LT',
          lastWeek: '[i] dddd[s kl.] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'om %s',
          past: '%s siden',
          s: 'få sekunder',
          ss: '%d sekunder',
          m: 'et minut',
          mm: '%d minutter',
          h: 'en time',
          hh: '%d timer',
          d: 'en dag',
          dd: '%d dage',
          M: 'en måned',
          MM: '%d måneder',
          y: 'et år',
          yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return da;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/de-at.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/de-at.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleDeAtJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
          'm': ['eine Minute', 'einer Minute'],
          'h': ['eine Stunde', 'einer Stunde'],
          'd': ['ein Tag', 'einem Tag'],
          'dd': [number + ' Tage', number + ' Tagen'],
          'M': ['ein Monat', 'einem Monat'],
          'MM': [number + ' Monate', number + ' Monaten'],
          'y': ['ein Jahr', 'einem Jahr'],
          'yy': [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
      }

      var deAt = moment.defineLocale('de-at', {
        months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: true,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH:mm',
          LLLL: 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[heute um] LT [Uhr]',
          sameElse: 'L',
          nextDay: '[morgen um] LT [Uhr]',
          nextWeek: 'dddd [um] LT [Uhr]',
          lastDay: '[gestern um] LT [Uhr]',
          lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime: {
          future: 'in %s',
          past: 'vor %s',
          s: 'ein paar Sekunden',
          ss: '%d Sekunden',
          m: processRelativeTime,
          mm: '%d Minuten',
          h: processRelativeTime,
          hh: '%d Stunden',
          d: processRelativeTime,
          dd: processRelativeTime,
          M: processRelativeTime,
          MM: processRelativeTime,
          y: processRelativeTime,
          yy: processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return deAt;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/de-ch.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/de-ch.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleDeChJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
          'm': ['eine Minute', 'einer Minute'],
          'h': ['eine Stunde', 'einer Stunde'],
          'd': ['ein Tag', 'einem Tag'],
          'dd': [number + ' Tage', number + ' Tagen'],
          'M': ['ein Monat', 'einem Monat'],
          'MM': [number + ' Monate', number + ' Monaten'],
          'y': ['ein Jahr', 'einem Jahr'],
          'yy': [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
      }

      var deCh = moment.defineLocale('de-ch', {
        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: true,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH:mm',
          LLLL: 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[heute um] LT [Uhr]',
          sameElse: 'L',
          nextDay: '[morgen um] LT [Uhr]',
          nextWeek: 'dddd [um] LT [Uhr]',
          lastDay: '[gestern um] LT [Uhr]',
          lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime: {
          future: 'in %s',
          past: 'vor %s',
          s: 'ein paar Sekunden',
          ss: '%d Sekunden',
          m: processRelativeTime,
          mm: '%d Minuten',
          h: processRelativeTime,
          hh: '%d Stunden',
          d: processRelativeTime,
          dd: processRelativeTime,
          M: processRelativeTime,
          MM: processRelativeTime,
          y: processRelativeTime,
          yy: processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return deCh;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/de.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/de.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleDeJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
          'm': ['eine Minute', 'einer Minute'],
          'h': ['eine Stunde', 'einer Stunde'],
          'd': ['ein Tag', 'einem Tag'],
          'dd': [number + ' Tage', number + ' Tagen'],
          'M': ['ein Monat', 'einem Monat'],
          'MM': [number + ' Monate', number + ' Monaten'],
          'y': ['ein Jahr', 'einem Jahr'],
          'yy': [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
      }

      var de = moment.defineLocale('de', {
        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: true,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH:mm',
          LLLL: 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[heute um] LT [Uhr]',
          sameElse: 'L',
          nextDay: '[morgen um] LT [Uhr]',
          nextWeek: 'dddd [um] LT [Uhr]',
          lastDay: '[gestern um] LT [Uhr]',
          lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime: {
          future: 'in %s',
          past: 'vor %s',
          s: 'ein paar Sekunden',
          ss: '%d Sekunden',
          m: processRelativeTime,
          mm: '%d Minuten',
          h: processRelativeTime,
          hh: '%d Stunden',
          d: processRelativeTime,
          dd: processRelativeTime,
          M: processRelativeTime,
          MM: processRelativeTime,
          y: processRelativeTime,
          yy: processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return de;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/dv.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/dv.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleDvJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var months = ['ޖެނުއަރީ', 'ފެބްރުއަރީ', 'މާރިޗު', 'އޭޕްރީލު', 'މޭ', 'ޖޫން', 'ޖުލައި', 'އޯގަސްޓު', 'ސެޕްޓެމްބަރު', 'އޮކްޓޯބަރު', 'ނޮވެމްބަރު', 'ޑިސެމްބަރު'],
          weekdays = ['އާދިއްތަ', 'ހޯމަ', 'އަންގާރަ', 'ބުދަ', 'ބުރާސްފަތި', 'ހުކުރު', 'ހޮނިހިރު'];
      var dv = moment.defineLocale('dv', {
        months: months,
        monthsShort: months,
        weekdays: weekdays,
        weekdaysShort: weekdays,
        weekdaysMin: 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'D/M/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /މކ|މފ/,
        isPM: function isPM(input) {
          return 'މފ' === input;
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'މކ';
          } else {
            return 'މފ';
          }
        },
        calendar: {
          sameDay: '[މިއަދު] LT',
          nextDay: '[މާދަމާ] LT',
          nextWeek: 'dddd LT',
          lastDay: '[އިއްޔެ] LT',
          lastWeek: '[ފާއިތުވި] dddd LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'ތެރޭގައި %s',
          past: 'ކުރިން %s',
          s: 'ސިކުންތުކޮޅެއް',
          ss: 'd% ސިކުންތު',
          m: 'މިނިޓެއް',
          mm: 'މިނިޓު %d',
          h: 'ގަޑިއިރެއް',
          hh: 'ގަޑިއިރު %d',
          d: 'ދުވަހެއް',
          dd: 'ދުވަސް %d',
          M: 'މަހެއް',
          MM: 'މަސް %d',
          y: 'އަހަރެއް',
          yy: 'އަހަރު %d'
        },
        preparse: function preparse(string) {
          return string.replace(/،/g, ',');
        },
        postformat: function postformat(string) {
          return string.replace(/,/g, '،');
        },
        week: {
          dow: 7,
          // Sunday is the first day of the week.
          doy: 12 // The week that contains Jan 12th is the first week of the year.

        }
      });
      return dv;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/el.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/el.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleElJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
      }

      var el = moment.defineLocale('el', {
        monthsNominativeEl: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
        monthsGenitiveEl: 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
        months: function months(momentToFormat, format) {
          if (!momentToFormat) {
            return this._monthsNominativeEl;
          } else if (typeof format === 'string' && /D/.test(format.substring(0, format.indexOf('MMMM')))) {
            // if there is a day number before 'MMMM'
            return this._monthsGenitiveEl[momentToFormat.month()];
          } else {
            return this._monthsNominativeEl[momentToFormat.month()];
          }
        },
        monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
        weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
        weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
        weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours > 11) {
            return isLower ? 'μμ' : 'ΜΜ';
          } else {
            return isLower ? 'πμ' : 'ΠΜ';
          }
        },
        isPM: function isPM(input) {
          return (input + '').toLowerCase()[0] === 'μ';
        },
        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendarEl: {
          sameDay: '[Σήμερα {}] LT',
          nextDay: '[Αύριο {}] LT',
          nextWeek: 'dddd [{}] LT',
          lastDay: '[Χθες {}] LT',
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 6:
                return '[το προηγούμενο] dddd [{}] LT';

              default:
                return '[την προηγούμενη] dddd [{}] LT';
            }
          },
          sameElse: 'L'
        },
        calendar: function calendar(key, mom) {
          var output = this._calendarEl[key],
              hours = mom && mom.hours();

          if (isFunction(output)) {
            output = output.apply(mom);
          }

          return output.replace('{}', hours % 12 === 1 ? 'στη' : 'στις');
        },
        relativeTime: {
          future: 'σε %s',
          past: '%s πριν',
          s: 'λίγα δευτερόλεπτα',
          ss: '%d δευτερόλεπτα',
          m: 'ένα λεπτό',
          mm: '%d λεπτά',
          h: 'μία ώρα',
          hh: '%d ώρες',
          d: 'μία μέρα',
          dd: '%d μέρες',
          M: 'ένας μήνας',
          MM: '%d μήνες',
          y: 'ένας χρόνος',
          yy: '%d χρόνια'
        },
        dayOfMonthOrdinalParse: /\d{1,2}η/,
        ordinal: '%dη',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4st is the first week of the year.

        }
      });
      return el;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/en-SG.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/en-SG.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEnSGJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var enSG = moment.defineLocale('en-SG', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return enSG;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/en-au.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/en-au.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEnAuJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var enAu = moment.defineLocale('en-au', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return enAu;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/en-ca.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/en-ca.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEnCaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var enCa = moment.defineLocale('en-ca', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'YYYY-MM-DD',
          LL: 'MMMM D, YYYY',
          LLL: 'MMMM D, YYYY h:mm A',
          LLLL: 'dddd, MMMM D, YYYY h:mm A'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        }
      });
      return enCa;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/en-gb.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/en-gb.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEnGbJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var enGb = moment.defineLocale('en-gb', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return enGb;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/en-ie.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/en-ie.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEnIeJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var enIe = moment.defineLocale('en-ie', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return enIe;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/en-il.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/en-il.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEnIlJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var enIl = moment.defineLocale('en-il', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        }
      });
      return enIl;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/en-nz.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/en-nz.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEnNzJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var enNz = moment.defineLocale('en-nz', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return enNz;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/eo.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/eo.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEoJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var eo = moment.defineLocale('eo', {
        months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
        weekdays: 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),
        weekdaysShort: 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
        weekdaysMin: 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'D[-a de] MMMM, YYYY',
          LLL: 'D[-a de] MMMM, YYYY HH:mm',
          LLLL: 'dddd, [la] D[-a de] MMMM, YYYY HH:mm'
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function isPM(input) {
          return input.charAt(0).toLowerCase() === 'p';
        },
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours > 11) {
            return isLower ? 'p.t.m.' : 'P.T.M.';
          } else {
            return isLower ? 'a.t.m.' : 'A.T.M.';
          }
        },
        calendar: {
          sameDay: '[Hodiaŭ je] LT',
          nextDay: '[Morgaŭ je] LT',
          nextWeek: 'dddd [je] LT',
          lastDay: '[Hieraŭ je] LT',
          lastWeek: '[pasinta] dddd [je] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'post %s',
          past: 'antaŭ %s',
          s: 'sekundoj',
          ss: '%d sekundoj',
          m: 'minuto',
          mm: '%d minutoj',
          h: 'horo',
          hh: '%d horoj',
          d: 'tago',
          //ne 'diurno', ĉar estas uzita por proksimumo
          dd: '%d tagoj',
          M: 'monato',
          MM: '%d monatoj',
          y: 'jaro',
          yy: '%d jaroj'
        },
        dayOfMonthOrdinalParse: /\d{1,2}a/,
        ordinal: '%da',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return eo;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/es-do.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/es-do.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEsDoJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
          _monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

      var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
      var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      var esDo = moment.defineLocale('es-do', {
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: function monthsShort(m, format) {
          if (!m) {
            return monthsShortDot;
          } else if (/-MMM-/.test(format)) {
            return _monthsShort[m.month()];
          } else {
            return monthsShortDot[m.month()];
          }
        },
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY h:mm A',
          LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'
        },
        calendar: {
          sameDay: function sameDay() {
            return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          nextDay: function nextDay() {
            return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          nextWeek: function nextWeek() {
            return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          lastDay: function lastDay() {
            return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          lastWeek: function lastWeek() {
            return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'en %s',
          past: 'hace %s',
          s: 'unos segundos',
          ss: '%d segundos',
          m: 'un minuto',
          mm: '%d minutos',
          h: 'una hora',
          hh: '%d horas',
          d: 'un día',
          dd: '%d días',
          M: 'un mes',
          MM: '%d meses',
          y: 'un año',
          yy: '%d años'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return esDo;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/es-us.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/es-us.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEsUsJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
          _monthsShort2 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

      var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
      var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      var esUs = moment.defineLocale('es-us', {
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: function monthsShort(m, format) {
          if (!m) {
            return monthsShortDot;
          } else if (/-MMM-/.test(format)) {
            return _monthsShort2[m.month()];
          } else {
            return monthsShortDot[m.month()];
          }
        },
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'MM/DD/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY h:mm A',
          LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'
        },
        calendar: {
          sameDay: function sameDay() {
            return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          nextDay: function nextDay() {
            return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          nextWeek: function nextWeek() {
            return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          lastDay: function lastDay() {
            return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          lastWeek: function lastWeek() {
            return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'en %s',
          past: 'hace %s',
          s: 'unos segundos',
          ss: '%d segundos',
          m: 'un minuto',
          mm: '%d minutos',
          h: 'una hora',
          hh: '%d horas',
          d: 'un día',
          dd: '%d días',
          M: 'un mes',
          MM: '%d meses',
          y: 'un año',
          yy: '%d años'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return esUs;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/es.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/es.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEsJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
          _monthsShort3 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

      var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
      var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      var es = moment.defineLocale('es', {
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: function monthsShort(m, format) {
          if (!m) {
            return monthsShortDot;
          } else if (/-MMM-/.test(format)) {
            return _monthsShort3[m.month()];
          } else {
            return monthsShortDot[m.month()];
          }
        },
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY H:mm',
          LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar: {
          sameDay: function sameDay() {
            return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          nextDay: function nextDay() {
            return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          nextWeek: function nextWeek() {
            return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          lastDay: function lastDay() {
            return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          lastWeek: function lastWeek() {
            return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'en %s',
          past: 'hace %s',
          s: 'unos segundos',
          ss: '%d segundos',
          m: 'un minuto',
          mm: '%d minutos',
          h: 'una hora',
          hh: '%d horas',
          d: 'un día',
          dd: '%d días',
          M: 'un mes',
          MM: '%d meses',
          y: 'un año',
          yy: '%d años'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return es;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/et.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/et.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEtJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
          's': ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
          'ss': [number + 'sekundi', number + 'sekundit'],
          'm': ['ühe minuti', 'üks minut'],
          'mm': [number + ' minuti', number + ' minutit'],
          'h': ['ühe tunni', 'tund aega', 'üks tund'],
          'hh': [number + ' tunni', number + ' tundi'],
          'd': ['ühe päeva', 'üks päev'],
          'M': ['kuu aja', 'kuu aega', 'üks kuu'],
          'MM': [number + ' kuu', number + ' kuud'],
          'y': ['ühe aasta', 'aasta', 'üks aasta'],
          'yy': [number + ' aasta', number + ' aastat']
        };

        if (withoutSuffix) {
          return format[key][2] ? format[key][2] : format[key][1];
        }

        return isFuture ? format[key][0] : format[key][1];
      }

      var et = moment.defineLocale('et', {
        months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
        monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
        weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
        weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
        weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[Täna,] LT',
          nextDay: '[Homme,] LT',
          nextWeek: '[Järgmine] dddd LT',
          lastDay: '[Eile,] LT',
          lastWeek: '[Eelmine] dddd LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s pärast',
          past: '%s tagasi',
          s: processRelativeTime,
          ss: processRelativeTime,
          m: processRelativeTime,
          mm: processRelativeTime,
          h: processRelativeTime,
          hh: processRelativeTime,
          d: processRelativeTime,
          dd: '%d päeva',
          M: processRelativeTime,
          MM: processRelativeTime,
          y: processRelativeTime,
          yy: processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return et;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/eu.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/eu.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleEuJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var eu = moment.defineLocale('eu', {
        months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
        monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
        monthsParseExact: true,
        weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
        weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
        weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'YYYY[ko] MMMM[ren] D[a]',
          LLL: 'YYYY[ko] MMMM[ren] D[a] HH:mm',
          LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
          l: 'YYYY-M-D',
          ll: 'YYYY[ko] MMM D[a]',
          lll: 'YYYY[ko] MMM D[a] HH:mm',
          llll: 'ddd, YYYY[ko] MMM D[a] HH:mm'
        },
        calendar: {
          sameDay: '[gaur] LT[etan]',
          nextDay: '[bihar] LT[etan]',
          nextWeek: 'dddd LT[etan]',
          lastDay: '[atzo] LT[etan]',
          lastWeek: '[aurreko] dddd LT[etan]',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s barru',
          past: 'duela %s',
          s: 'segundo batzuk',
          ss: '%d segundo',
          m: 'minutu bat',
          mm: '%d minutu',
          h: 'ordu bat',
          hh: '%d ordu',
          d: 'egun bat',
          dd: '%d egun',
          M: 'hilabete bat',
          MM: '%d hilabete',
          y: 'urte bat',
          yy: '%d urte'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return eu;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/fa.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/fa.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleFaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var symbolMap = {
        '1': '۱',
        '2': '۲',
        '3': '۳',
        '4': '۴',
        '5': '۵',
        '6': '۶',
        '7': '۷',
        '8': '۸',
        '9': '۹',
        '0': '۰'
      },
          numberMap = {
        '۱': '1',
        '۲': '2',
        '۳': '3',
        '۴': '4',
        '۵': '5',
        '۶': '6',
        '۷': '7',
        '۸': '8',
        '۹': '9',
        '۰': '0'
      };
      var fa = moment.defineLocale('fa', {
        months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        weekdays: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split('_'),
        weekdaysShort: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split('_'),
        weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM: function isPM(input) {
          return /بعد از ظهر/.test(input);
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'قبل از ظهر';
          } else {
            return 'بعد از ظهر';
          }
        },
        calendar: {
          sameDay: '[امروز ساعت] LT',
          nextDay: '[فردا ساعت] LT',
          nextWeek: 'dddd [ساعت] LT',
          lastDay: '[دیروز ساعت] LT',
          lastWeek: 'dddd [پیش] [ساعت] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'در %s',
          past: '%s پیش',
          s: 'چند ثانیه',
          ss: 'ثانیه d%',
          m: 'یک دقیقه',
          mm: '%d دقیقه',
          h: 'یک ساعت',
          hh: '%d ساعت',
          d: 'یک روز',
          dd: '%d روز',
          M: 'یک ماه',
          MM: '%d ماه',
          y: 'یک سال',
          yy: '%d سال'
        },
        preparse: function preparse(string) {
          return string.replace(/[۰-۹]/g, function (match) {
            return numberMap[match];
          }).replace(/،/g, ',');
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          }).replace(/,/g, '،');
        },
        dayOfMonthOrdinalParse: /\d{1,2}م/,
        ordinal: '%dم',
        week: {
          dow: 6,
          // Saturday is the first day of the week.
          doy: 12 // The week that contains Jan 12th is the first week of the year.

        }
      });
      return fa;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/fi.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/fi.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleFiJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
          numbersFuture = ['nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden', numbersPast[7], numbersPast[8], numbersPast[9]];

      function translate(number, withoutSuffix, key, isFuture) {
        var result = '';

        switch (key) {
          case 's':
            return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';

          case 'ss':
            return isFuture ? 'sekunnin' : 'sekuntia';

          case 'm':
            return isFuture ? 'minuutin' : 'minuutti';

          case 'mm':
            result = isFuture ? 'minuutin' : 'minuuttia';
            break;

          case 'h':
            return isFuture ? 'tunnin' : 'tunti';

          case 'hh':
            result = isFuture ? 'tunnin' : 'tuntia';
            break;

          case 'd':
            return isFuture ? 'päivän' : 'päivä';

          case 'dd':
            result = isFuture ? 'päivän' : 'päivää';
            break;

          case 'M':
            return isFuture ? 'kuukauden' : 'kuukausi';

          case 'MM':
            result = isFuture ? 'kuukauden' : 'kuukautta';
            break;

          case 'y':
            return isFuture ? 'vuoden' : 'vuosi';

          case 'yy':
            result = isFuture ? 'vuoden' : 'vuotta';
            break;
        }

        result = verbalNumber(number, isFuture) + ' ' + result;
        return result;
      }

      function verbalNumber(number, isFuture) {
        return number < 10 ? isFuture ? numbersFuture[number] : numbersPast[number] : number;
      }

      var fi = moment.defineLocale('fi', {
        months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
        monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
        weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
        weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
        weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD.MM.YYYY',
          LL: 'Do MMMM[ta] YYYY',
          LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
          LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
          l: 'D.M.YYYY',
          ll: 'Do MMM YYYY',
          lll: 'Do MMM YYYY, [klo] HH.mm',
          llll: 'ddd, Do MMM YYYY, [klo] HH.mm'
        },
        calendar: {
          sameDay: '[tänään] [klo] LT',
          nextDay: '[huomenna] [klo] LT',
          nextWeek: 'dddd [klo] LT',
          lastDay: '[eilen] [klo] LT',
          lastWeek: '[viime] dddd[na] [klo] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s päästä',
          past: '%s sitten',
          s: translate,
          ss: translate,
          m: translate,
          mm: translate,
          h: translate,
          hh: translate,
          d: translate,
          dd: translate,
          M: translate,
          MM: translate,
          y: translate,
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return fi;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/fo.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/fo.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleFoJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var fo = moment.defineLocale('fo', {
        months: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
        weekdaysShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
        weekdaysMin: 'su_má_tý_mi_hó_fr_le'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D. MMMM, YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Í dag kl.] LT',
          nextDay: '[Í morgin kl.] LT',
          nextWeek: 'dddd [kl.] LT',
          lastDay: '[Í gjár kl.] LT',
          lastWeek: '[síðstu] dddd [kl] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'um %s',
          past: '%s síðani',
          s: 'fá sekund',
          ss: '%d sekundir',
          m: 'ein minuttur',
          mm: '%d minuttir',
          h: 'ein tími',
          hh: '%d tímar',
          d: 'ein dagur',
          dd: '%d dagar',
          M: 'ein mánaður',
          MM: '%d mánaðir',
          y: 'eitt ár',
          yy: '%d ár'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return fo;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/fr-ca.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/fr-ca.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleFrCaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var frCa = moment.defineLocale('fr-ca', {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact: true,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Aujourd’hui à] LT',
          nextDay: '[Demain à] LT',
          nextWeek: 'dddd [à] LT',
          lastDay: '[Hier à] LT',
          lastWeek: 'dddd [dernier à] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'dans %s',
          past: 'il y a %s',
          s: 'quelques secondes',
          ss: '%d secondes',
          m: 'une minute',
          mm: '%d minutes',
          h: 'une heure',
          hh: '%d heures',
          d: 'un jour',
          dd: '%d jours',
          M: 'un mois',
          MM: '%d mois',
          y: 'un an',
          yy: '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            // Words with masculine grammatical gender: mois, trimestre, jour
            default:
            case 'M':
            case 'Q':
            case 'D':
            case 'DDD':
            case 'd':
              return number + (number === 1 ? 'er' : 'e');
            // Words with feminine grammatical gender: semaine

            case 'w':
            case 'W':
              return number + (number === 1 ? 're' : 'e');
          }
        }
      });
      return frCa;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/fr-ch.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/fr-ch.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleFrChJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var frCh = moment.defineLocale('fr-ch', {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact: true,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Aujourd’hui à] LT',
          nextDay: '[Demain à] LT',
          nextWeek: 'dddd [à] LT',
          lastDay: '[Hier à] LT',
          lastWeek: 'dddd [dernier à] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'dans %s',
          past: 'il y a %s',
          s: 'quelques secondes',
          ss: '%d secondes',
          m: 'une minute',
          mm: '%d minutes',
          h: 'une heure',
          hh: '%d heures',
          d: 'un jour',
          dd: '%d jours',
          M: 'un mois',
          MM: '%d mois',
          y: 'un an',
          yy: '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            // Words with masculine grammatical gender: mois, trimestre, jour
            default:
            case 'M':
            case 'Q':
            case 'D':
            case 'DDD':
            case 'd':
              return number + (number === 1 ? 'er' : 'e');
            // Words with feminine grammatical gender: semaine

            case 'w':
            case 'W':
              return number + (number === 1 ? 're' : 'e');
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return frCh;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/fr.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/fr.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleFrJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var fr = moment.defineLocale('fr', {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact: true,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Aujourd’hui à] LT',
          nextDay: '[Demain à] LT',
          nextWeek: 'dddd [à] LT',
          lastDay: '[Hier à] LT',
          lastWeek: 'dddd [dernier à] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'dans %s',
          past: 'il y a %s',
          s: 'quelques secondes',
          ss: '%d secondes',
          m: 'une minute',
          mm: '%d minutes',
          h: 'une heure',
          hh: '%d heures',
          d: 'un jour',
          dd: '%d jours',
          M: 'un mois',
          MM: '%d mois',
          y: 'un an',
          yy: '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            // TODO: Return 'e' when day of month > 1. Move this case inside
            // block for masculine words below.
            // See https://github.com/moment/moment/issues/3375
            case 'D':
              return number + (number === 1 ? 'er' : '');
            // Words with masculine grammatical gender: mois, trimestre, jour

            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
              return number + (number === 1 ? 'er' : 'e');
            // Words with feminine grammatical gender: semaine

            case 'w':
            case 'W':
              return number + (number === 1 ? 're' : 'e');
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return fr;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/fy.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/fy.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleFyJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
          monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');
      var fy = moment.defineLocale('fy', {
        months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
        monthsShort: function monthsShort(m, format) {
          if (!m) {
            return monthsShortWithDots;
          } else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[m.month()];
          } else {
            return monthsShortWithDots[m.month()];
          }
        },
        monthsParseExact: true,
        weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
        weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
        weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD-MM-YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[hjoed om] LT',
          nextDay: '[moarn om] LT',
          nextWeek: 'dddd [om] LT',
          lastDay: '[juster om] LT',
          lastWeek: '[ôfrûne] dddd [om] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'oer %s',
          past: '%s lyn',
          s: 'in pear sekonden',
          ss: '%d sekonden',
          m: 'ien minút',
          mm: '%d minuten',
          h: 'ien oere',
          hh: '%d oeren',
          d: 'ien dei',
          dd: '%d dagen',
          M: 'ien moanne',
          MM: '%d moannen',
          y: 'ien jier',
          yy: '%d jierren'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function ordinal(number) {
          return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return fy;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ga.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ga.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleGaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var months = ['Eanáir', 'Feabhra', 'Márta', 'Aibreán', 'Bealtaine', 'Méitheamh', 'Iúil', 'Lúnasa', 'Meán Fómhair', 'Deaireadh Fómhair', 'Samhain', 'Nollaig'];
      var monthsShort = ['Eaná', 'Feab', 'Márt', 'Aibr', 'Beal', 'Méit', 'Iúil', 'Lúna', 'Meán', 'Deai', 'Samh', 'Noll'];
      var weekdays = ['Dé Domhnaigh', 'Dé Luain', 'Dé Máirt', 'Dé Céadaoin', 'Déardaoin', 'Dé hAoine', 'Dé Satharn'];
      var weekdaysShort = ['Dom', 'Lua', 'Mái', 'Céa', 'Déa', 'hAo', 'Sat'];
      var weekdaysMin = ['Do', 'Lu', 'Má', 'Ce', 'Dé', 'hA', 'Sa'];
      var ga = moment.defineLocale('ga', {
        months: months,
        monthsShort: monthsShort,
        monthsParseExact: true,
        weekdays: weekdays,
        weekdaysShort: weekdaysShort,
        weekdaysMin: weekdaysMin,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Inniu ag] LT',
          nextDay: '[Amárach ag] LT',
          nextWeek: 'dddd [ag] LT',
          lastDay: '[Inné aig] LT',
          lastWeek: 'dddd [seo caite] [ag] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'i %s',
          past: '%s ó shin',
          s: 'cúpla soicind',
          ss: '%d soicind',
          m: 'nóiméad',
          mm: '%d nóiméad',
          h: 'uair an chloig',
          hh: '%d uair an chloig',
          d: 'lá',
          dd: '%d lá',
          M: 'mí',
          MM: '%d mí',
          y: 'bliain',
          yy: '%d bliain'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function ordinal(number) {
          var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return ga;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/gd.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/gd.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleGdJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var months = ['Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd'];
      var monthsShort = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'];
      var weekdays = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'];
      var weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'];
      var weekdaysMin = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];
      var gd = moment.defineLocale('gd', {
        months: months,
        monthsShort: monthsShort,
        monthsParseExact: true,
        weekdays: weekdays,
        weekdaysShort: weekdaysShort,
        weekdaysMin: weekdaysMin,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[An-diugh aig] LT',
          nextDay: '[A-màireach aig] LT',
          nextWeek: 'dddd [aig] LT',
          lastDay: '[An-dè aig] LT',
          lastWeek: 'dddd [seo chaidh] [aig] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'ann an %s',
          past: 'bho chionn %s',
          s: 'beagan diogan',
          ss: '%d diogan',
          m: 'mionaid',
          mm: '%d mionaidean',
          h: 'uair',
          hh: '%d uairean',
          d: 'latha',
          dd: '%d latha',
          M: 'mìos',
          MM: '%d mìosan',
          y: 'bliadhna',
          yy: '%d bliadhna'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function ordinal(number) {
          var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return gd;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/gl.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/gl.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleGlJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var gl = moment.defineLocale('gl', {
        months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
        monthsShort: 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY H:mm',
          LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar: {
          sameDay: function sameDay() {
            return '[hoxe ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';
          },
          nextDay: function nextDay() {
            return '[mañá ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';
          },
          nextWeek: function nextWeek() {
            return 'dddd [' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';
          },
          lastDay: function lastDay() {
            return '[onte ' + (this.hours() !== 1 ? 'á' : 'a') + '] LT';
          },
          lastWeek: function lastWeek() {
            return '[o] dddd [pasado ' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: function future(str) {
            if (str.indexOf('un') === 0) {
              return 'n' + str;
            }

            return 'en ' + str;
          },
          past: 'hai %s',
          s: 'uns segundos',
          ss: '%d segundos',
          m: 'un minuto',
          mm: '%d minutos',
          h: 'unha hora',
          hh: '%d horas',
          d: 'un día',
          dd: '%d días',
          M: 'un mes',
          MM: '%d meses',
          y: 'un ano',
          yy: '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return gl;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/gom-latn.js":
  /*!************************************************!*\
    !*** ./node_modules/moment/locale/gom-latn.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleGomLatnJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
          's': ['thodde secondanim', 'thodde second'],
          'ss': [number + ' secondanim', number + ' second'],
          'm': ['eka mintan', 'ek minute'],
          'mm': [number + ' mintanim', number + ' mintam'],
          'h': ['eka voran', 'ek vor'],
          'hh': [number + ' voranim', number + ' voram'],
          'd': ['eka disan', 'ek dis'],
          'dd': [number + ' disanim', number + ' dis'],
          'M': ['eka mhoinean', 'ek mhoino'],
          'MM': [number + ' mhoineanim', number + ' mhoine'],
          'y': ['eka vorsan', 'ek voros'],
          'yy': [number + ' vorsanim', number + ' vorsam']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
      }

      var gomLatn = moment.defineLocale('gom-latn', {
        months: 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split('_'),
        monthsShort: 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split('_'),
        monthsParseExact: true,
        weekdays: 'Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son\'var'.split('_'),
        weekdaysShort: 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
        weekdaysMin: 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'A h:mm [vazta]',
          LTS: 'A h:mm:ss [vazta]',
          L: 'DD-MM-YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY A h:mm [vazta]',
          LLLL: 'dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]',
          llll: 'ddd, D MMM YYYY, A h:mm [vazta]'
        },
        calendar: {
          sameDay: '[Aiz] LT',
          nextDay: '[Faleam] LT',
          nextWeek: '[Ieta to] dddd[,] LT',
          lastDay: '[Kal] LT',
          lastWeek: '[Fatlo] dddd[,] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s',
          past: '%s adim',
          s: processRelativeTime,
          ss: processRelativeTime,
          m: processRelativeTime,
          mm: processRelativeTime,
          h: processRelativeTime,
          hh: processRelativeTime,
          d: processRelativeTime,
          dd: processRelativeTime,
          M: processRelativeTime,
          MM: processRelativeTime,
          y: processRelativeTime,
          yy: processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            // the ordinal 'er' only applies to day of the month
            case 'D':
              return number + 'er';

            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
            case 'w':
            case 'W':
              return number;
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        },
        meridiemParse: /rati|sokalli|donparam|sanje/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'rati') {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === 'sokalli') {
            return hour;
          } else if (meridiem === 'donparam') {
            return hour > 12 ? hour : hour + 12;
          } else if (meridiem === 'sanje') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'rati';
          } else if (hour < 12) {
            return 'sokalli';
          } else if (hour < 16) {
            return 'donparam';
          } else if (hour < 20) {
            return 'sanje';
          } else {
            return 'rati';
          }
        }
      });
      return gomLatn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/gu.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/gu.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleGuJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var symbolMap = {
        '1': '૧',
        '2': '૨',
        '3': '૩',
        '4': '૪',
        '5': '૫',
        '6': '૬',
        '7': '૭',
        '8': '૮',
        '9': '૯',
        '0': '૦'
      },
          numberMap = {
        '૧': '1',
        '૨': '2',
        '૩': '3',
        '૪': '4',
        '૫': '5',
        '૬': '6',
        '૭': '7',
        '૮': '8',
        '૯': '9',
        '૦': '0'
      };
      var gu = moment.defineLocale('gu', {
        months: 'જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર'.split('_'),
        monthsShort: 'જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.'.split('_'),
        monthsParseExact: true,
        weekdays: 'રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર'.split('_'),
        weekdaysShort: 'રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ'.split('_'),
        weekdaysMin: 'ર_સો_મં_બુ_ગુ_શુ_શ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm વાગ્યે',
          LTS: 'A h:mm:ss વાગ્યે',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm વાગ્યે',
          LLLL: 'dddd, D MMMM YYYY, A h:mm વાગ્યે'
        },
        calendar: {
          sameDay: '[આજ] LT',
          nextDay: '[કાલે] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[ગઇકાલે] LT',
          lastWeek: '[પાછલા] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s મા',
          past: '%s પેહલા',
          s: 'અમુક પળો',
          ss: '%d સેકંડ',
          m: 'એક મિનિટ',
          mm: '%d મિનિટ',
          h: 'એક કલાક',
          hh: '%d કલાક',
          d: 'એક દિવસ',
          dd: '%d દિવસ',
          M: 'એક મહિનો',
          MM: '%d મહિનો',
          y: 'એક વર્ષ',
          yy: '%d વર્ષ'
        },
        preparse: function preparse(string) {
          return string.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (match) {
            return numberMap[match];
          });
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          });
        },
        // Gujarati notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Gujarati.
        meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'રાત') {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === 'સવાર') {
            return hour;
          } else if (meridiem === 'બપોર') {
            return hour >= 10 ? hour : hour + 12;
          } else if (meridiem === 'સાંજ') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'રાત';
          } else if (hour < 10) {
            return 'સવાર';
          } else if (hour < 17) {
            return 'બપોર';
          } else if (hour < 20) {
            return 'સાંજ';
          } else {
            return 'રાત';
          }
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return gu;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/he.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/he.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleHeJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var he = moment.defineLocale('he', {
        months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
        monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
        weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
        weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
        weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [ב]MMMM YYYY',
          LLL: 'D [ב]MMMM YYYY HH:mm',
          LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
          l: 'D/M/YYYY',
          ll: 'D MMM YYYY',
          lll: 'D MMM YYYY HH:mm',
          llll: 'ddd, D MMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[היום ב־]LT',
          nextDay: '[מחר ב־]LT',
          nextWeek: 'dddd [בשעה] LT',
          lastDay: '[אתמול ב־]LT',
          lastWeek: '[ביום] dddd [האחרון בשעה] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'בעוד %s',
          past: 'לפני %s',
          s: 'מספר שניות',
          ss: '%d שניות',
          m: 'דקה',
          mm: '%d דקות',
          h: 'שעה',
          hh: function hh(number) {
            if (number === 2) {
              return 'שעתיים';
            }

            return number + ' שעות';
          },
          d: 'יום',
          dd: function dd(number) {
            if (number === 2) {
              return 'יומיים';
            }

            return number + ' ימים';
          },
          M: 'חודש',
          MM: function MM(number) {
            if (number === 2) {
              return 'חודשיים';
            }

            return number + ' חודשים';
          },
          y: 'שנה',
          yy: function yy(number) {
            if (number === 2) {
              return 'שנתיים';
            } else if (number % 10 === 0 && number !== 10) {
              return number + ' שנה';
            }

            return number + ' שנים';
          }
        },
        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM: function isPM(input) {
          return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 5) {
            return 'לפנות בוקר';
          } else if (hour < 10) {
            return 'בבוקר';
          } else if (hour < 12) {
            return isLower ? 'לפנה"צ' : 'לפני הצהריים';
          } else if (hour < 18) {
            return isLower ? 'אחה"צ' : 'אחרי הצהריים';
          } else {
            return 'בערב';
          }
        }
      });
      return he;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/hi.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/hi.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleHiJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var symbolMap = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
      },
          numberMap = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
      };
      var hi = moment.defineLocale('hi', {
        months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
        monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
        monthsParseExact: true,
        weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat: {
          LT: 'A h:mm बजे',
          LTS: 'A h:mm:ss बजे',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm बजे',
          LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
        },
        calendar: {
          sameDay: '[आज] LT',
          nextDay: '[कल] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[कल] LT',
          lastWeek: '[पिछले] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s में',
          past: '%s पहले',
          s: 'कुछ ही क्षण',
          ss: '%d सेकंड',
          m: 'एक मिनट',
          mm: '%d मिनट',
          h: 'एक घंटा',
          hh: '%d घंटे',
          d: 'एक दिन',
          dd: '%d दिन',
          M: 'एक महीने',
          MM: '%d महीने',
          y: 'एक वर्ष',
          yy: '%d वर्ष'
        },
        preparse: function preparse(string) {
          return string.replace(/[१२३४५६७८९०]/g, function (match) {
            return numberMap[match];
          });
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          });
        },
        // Hindi notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'रात') {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === 'सुबह') {
            return hour;
          } else if (meridiem === 'दोपहर') {
            return hour >= 10 ? hour : hour + 12;
          } else if (meridiem === 'शाम') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'रात';
          } else if (hour < 10) {
            return 'सुबह';
          } else if (hour < 17) {
            return 'दोपहर';
          } else if (hour < 20) {
            return 'शाम';
          } else {
            return 'रात';
          }
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return hi;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/hr.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/hr.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleHrJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      function translate(number, withoutSuffix, key) {
        var result = number + ' ';

        switch (key) {
          case 'ss':
            if (number === 1) {
              result += 'sekunda';
            } else if (number === 2 || number === 3 || number === 4) {
              result += 'sekunde';
            } else {
              result += 'sekundi';
            }

            return result;

          case 'm':
            return withoutSuffix ? 'jedna minuta' : 'jedne minute';

          case 'mm':
            if (number === 1) {
              result += 'minuta';
            } else if (number === 2 || number === 3 || number === 4) {
              result += 'minute';
            } else {
              result += 'minuta';
            }

            return result;

          case 'h':
            return withoutSuffix ? 'jedan sat' : 'jednog sata';

          case 'hh':
            if (number === 1) {
              result += 'sat';
            } else if (number === 2 || number === 3 || number === 4) {
              result += 'sata';
            } else {
              result += 'sati';
            }

            return result;

          case 'dd':
            if (number === 1) {
              result += 'dan';
            } else {
              result += 'dana';
            }

            return result;

          case 'MM':
            if (number === 1) {
              result += 'mjesec';
            } else if (number === 2 || number === 3 || number === 4) {
              result += 'mjeseca';
            } else {
              result += 'mjeseci';
            }

            return result;

          case 'yy':
            if (number === 1) {
              result += 'godina';
            } else if (number === 2 || number === 3 || number === 4) {
              result += 'godine';
            } else {
              result += 'godina';
            }

            return result;
        }
      }

      var hr = moment.defineLocale('hr', {
        months: {
          format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
          standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
        },
        monthsShort: 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
        monthsParseExact: true,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[danas u] LT',
          nextDay: '[sutra u] LT',
          nextWeek: function nextWeek() {
            switch (this.day()) {
              case 0:
                return '[u] [nedjelju] [u] LT';

              case 3:
                return '[u] [srijedu] [u] LT';

              case 6:
                return '[u] [subotu] [u] LT';

              case 1:
              case 2:
              case 4:
              case 5:
                return '[u] dddd [u] LT';
            }
          },
          lastDay: '[jučer u] LT',
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
              case 3:
                return '[prošlu] dddd [u] LT';

              case 6:
                return '[prošle] [subote] [u] LT';

              case 1:
              case 2:
              case 4:
              case 5:
                return '[prošli] dddd [u] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'za %s',
          past: 'prije %s',
          s: 'par sekundi',
          ss: translate,
          m: translate,
          mm: translate,
          h: translate,
          hh: translate,
          d: 'dan',
          dd: translate,
          M: 'mjesec',
          MM: translate,
          y: 'godinu',
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return hr;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/hu.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/hu.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleHuJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');

      function translate(number, withoutSuffix, key, isFuture) {
        var num = number;

        switch (key) {
          case 's':
            return isFuture || withoutSuffix ? 'néhány másodperc' : 'néhány másodperce';

          case 'ss':
            return num + (isFuture || withoutSuffix) ? ' másodperc' : ' másodperce';

          case 'm':
            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');

          case 'mm':
            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');

          case 'h':
            return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');

          case 'hh':
            return num + (isFuture || withoutSuffix ? ' óra' : ' órája');

          case 'd':
            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');

          case 'dd':
            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');

          case 'M':
            return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');

          case 'MM':
            return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');

          case 'y':
            return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');

          case 'yy':
            return num + (isFuture || withoutSuffix ? ' év' : ' éve');
        }

        return '';
      }

      function week(isFuture) {
        return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
      }

      var hu = moment.defineLocale('hu', {
        months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
        monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
        weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
        weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
        weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'YYYY.MM.DD.',
          LL: 'YYYY. MMMM D.',
          LLL: 'YYYY. MMMM D. H:mm',
          LLLL: 'YYYY. MMMM D., dddd H:mm'
        },
        meridiemParse: /de|du/i,
        isPM: function isPM(input) {
          return input.charAt(1).toLowerCase() === 'u';
        },
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours < 12) {
            return isLower === true ? 'de' : 'DE';
          } else {
            return isLower === true ? 'du' : 'DU';
          }
        },
        calendar: {
          sameDay: '[ma] LT[-kor]',
          nextDay: '[holnap] LT[-kor]',
          nextWeek: function nextWeek() {
            return week.call(this, true);
          },
          lastDay: '[tegnap] LT[-kor]',
          lastWeek: function lastWeek() {
            return week.call(this, false);
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s múlva',
          past: '%s',
          s: translate,
          ss: translate,
          m: translate,
          mm: translate,
          h: translate,
          hh: translate,
          d: translate,
          dd: translate,
          M: translate,
          MM: translate,
          y: translate,
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return hu;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/hy-am.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/hy-am.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleHyAmJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var hyAm = moment.defineLocale('hy-am', {
        months: {
          format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
          standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_')
        },
        monthsShort: 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
        weekdays: 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
        weekdaysShort: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        weekdaysMin: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY թ.',
          LLL: 'D MMMM YYYY թ., HH:mm',
          LLLL: 'dddd, D MMMM YYYY թ., HH:mm'
        },
        calendar: {
          sameDay: '[այսօր] LT',
          nextDay: '[վաղը] LT',
          lastDay: '[երեկ] LT',
          nextWeek: function nextWeek() {
            return 'dddd [օրը ժամը] LT';
          },
          lastWeek: function lastWeek() {
            return '[անցած] dddd [օրը ժամը] LT';
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s հետո',
          past: '%s առաջ',
          s: 'մի քանի վայրկյան',
          ss: '%d վայրկյան',
          m: 'րոպե',
          mm: '%d րոպե',
          h: 'ժամ',
          hh: '%d ժամ',
          d: 'օր',
          dd: '%d օր',
          M: 'ամիս',
          MM: '%d ամիս',
          y: 'տարի',
          yy: '%d տարի'
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function isPM(input) {
          return /^(ցերեկվա|երեկոյան)$/.test(input);
        },
        meridiem: function meridiem(hour) {
          if (hour < 4) {
            return 'գիշերվա';
          } else if (hour < 12) {
            return 'առավոտվա';
          } else if (hour < 17) {
            return 'ցերեկվա';
          } else {
            return 'երեկոյան';
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'DDD':
            case 'w':
            case 'W':
            case 'DDDo':
              if (number === 1) {
                return number + '-ին';
              }

              return number + '-րդ';

            default:
              return number;
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return hyAm;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/id.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/id.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleIdJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var id = moment.defineLocale('id', {
        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
        weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [pukul] HH.mm',
          LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'pagi') {
            return hour;
          } else if (meridiem === 'siang') {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === 'sore' || meridiem === 'malam') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours < 11) {
            return 'pagi';
          } else if (hours < 15) {
            return 'siang';
          } else if (hours < 19) {
            return 'sore';
          } else {
            return 'malam';
          }
        },
        calendar: {
          sameDay: '[Hari ini pukul] LT',
          nextDay: '[Besok pukul] LT',
          nextWeek: 'dddd [pukul] LT',
          lastDay: '[Kemarin pukul] LT',
          lastWeek: 'dddd [lalu pukul] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'dalam %s',
          past: '%s yang lalu',
          s: 'beberapa detik',
          ss: '%d detik',
          m: 'semenit',
          mm: '%d menit',
          h: 'sejam',
          hh: '%d jam',
          d: 'sehari',
          dd: '%d hari',
          M: 'sebulan',
          MM: '%d bulan',
          y: 'setahun',
          yy: '%d tahun'
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return id;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/is.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/is.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleIsJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      function plural(n) {
        if (n % 100 === 11) {
          return true;
        } else if (n % 10 === 1) {
          return false;
        }

        return true;
      }

      function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';

        switch (key) {
          case 's':
            return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';

          case 'ss':
            if (plural(number)) {
              return result + (withoutSuffix || isFuture ? 'sekúndur' : 'sekúndum');
            }

            return result + 'sekúnda';

          case 'm':
            return withoutSuffix ? 'mínúta' : 'mínútu';

          case 'mm':
            if (plural(number)) {
              return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
            } else if (withoutSuffix) {
              return result + 'mínúta';
            }

            return result + 'mínútu';

          case 'hh':
            if (plural(number)) {
              return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
            }

            return result + 'klukkustund';

          case 'd':
            if (withoutSuffix) {
              return 'dagur';
            }

            return isFuture ? 'dag' : 'degi';

          case 'dd':
            if (plural(number)) {
              if (withoutSuffix) {
                return result + 'dagar';
              }

              return result + (isFuture ? 'daga' : 'dögum');
            } else if (withoutSuffix) {
              return result + 'dagur';
            }

            return result + (isFuture ? 'dag' : 'degi');

          case 'M':
            if (withoutSuffix) {
              return 'mánuður';
            }

            return isFuture ? 'mánuð' : 'mánuði';

          case 'MM':
            if (plural(number)) {
              if (withoutSuffix) {
                return result + 'mánuðir';
              }

              return result + (isFuture ? 'mánuði' : 'mánuðum');
            } else if (withoutSuffix) {
              return result + 'mánuður';
            }

            return result + (isFuture ? 'mánuð' : 'mánuði');

          case 'y':
            return withoutSuffix || isFuture ? 'ár' : 'ári';

          case 'yy':
            if (plural(number)) {
              return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
            }

            return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
        }
      }

      var is = moment.defineLocale('is', {
        months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
        weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
        weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
        weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY [kl.] H:mm',
          LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm'
        },
        calendar: {
          sameDay: '[í dag kl.] LT',
          nextDay: '[á morgun kl.] LT',
          nextWeek: 'dddd [kl.] LT',
          lastDay: '[í gær kl.] LT',
          lastWeek: '[síðasta] dddd [kl.] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'eftir %s',
          past: 'fyrir %s síðan',
          s: translate,
          ss: translate,
          m: translate,
          mm: translate,
          h: 'klukkustund',
          hh: translate,
          d: translate,
          dd: translate,
          M: translate,
          MM: translate,
          y: translate,
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return is;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/it-ch.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/it-ch.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleItChJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var itCh = moment.defineLocale('it-ch', {
        months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
        weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Oggi alle] LT',
          nextDay: '[Domani alle] LT',
          nextWeek: 'dddd [alle] LT',
          lastDay: '[Ieri alle] LT',
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
                return '[la scorsa] dddd [alle] LT';

              default:
                return '[lo scorso] dddd [alle] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: function future(s) {
            return (/^[0-9].+$/.test(s) ? 'tra' : 'in') + ' ' + s;
          },
          past: '%s fa',
          s: 'alcuni secondi',
          ss: '%d secondi',
          m: 'un minuto',
          mm: '%d minuti',
          h: 'un\'ora',
          hh: '%d ore',
          d: 'un giorno',
          dd: '%d giorni',
          M: 'un mese',
          MM: '%d mesi',
          y: 'un anno',
          yy: '%d anni'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return itCh;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/it.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/it.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleItJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var it = moment.defineLocale('it', {
        months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
        weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Oggi alle] LT',
          nextDay: '[Domani alle] LT',
          nextWeek: 'dddd [alle] LT',
          lastDay: '[Ieri alle] LT',
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
                return '[la scorsa] dddd [alle] LT';

              default:
                return '[lo scorso] dddd [alle] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: function future(s) {
            return (/^[0-9].+$/.test(s) ? 'tra' : 'in') + ' ' + s;
          },
          past: '%s fa',
          s: 'alcuni secondi',
          ss: '%d secondi',
          m: 'un minuto',
          mm: '%d minuti',
          h: 'un\'ora',
          hh: '%d ore',
          d: 'un giorno',
          dd: '%d giorni',
          M: 'un mese',
          MM: '%d mesi',
          y: 'un anno',
          yy: '%d anni'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return it;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ja.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ja.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleJaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var ja = moment.defineLocale('ja', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
        weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
        weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY年M月D日',
          LLL: 'YYYY年M月D日 HH:mm',
          LLLL: 'YYYY年M月D日 dddd HH:mm',
          l: 'YYYY/MM/DD',
          ll: 'YYYY年M月D日',
          lll: 'YYYY年M月D日 HH:mm',
          llll: 'YYYY年M月D日(ddd) HH:mm'
        },
        meridiemParse: /午前|午後/i,
        isPM: function isPM(input) {
          return input === '午後';
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return '午前';
          } else {
            return '午後';
          }
        },
        calendar: {
          sameDay: '[今日] LT',
          nextDay: '[明日] LT',
          nextWeek: function nextWeek(now) {
            if (now.week() < this.week()) {
              return '[来週]dddd LT';
            } else {
              return 'dddd LT';
            }
          },
          lastDay: '[昨日] LT',
          lastWeek: function lastWeek(now) {
            if (this.week() < now.week()) {
              return '[先週]dddd LT';
            } else {
              return 'dddd LT';
            }
          },
          sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}日/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
              return number + '日';

            default:
              return number;
          }
        },
        relativeTime: {
          future: '%s後',
          past: '%s前',
          s: '数秒',
          ss: '%d秒',
          m: '1分',
          mm: '%d分',
          h: '1時間',
          hh: '%d時間',
          d: '1日',
          dd: '%d日',
          M: '1ヶ月',
          MM: '%dヶ月',
          y: '1年',
          yy: '%d年'
        }
      });
      return ja;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/jv.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/jv.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleJvJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var jv = moment.defineLocale('jv', {
        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
        weekdays: 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
        weekdaysShort: 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [pukul] HH.mm',
          LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'enjing') {
            return hour;
          } else if (meridiem === 'siyang') {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours < 11) {
            return 'enjing';
          } else if (hours < 15) {
            return 'siyang';
          } else if (hours < 19) {
            return 'sonten';
          } else {
            return 'ndalu';
          }
        },
        calendar: {
          sameDay: '[Dinten puniko pukul] LT',
          nextDay: '[Mbenjang pukul] LT',
          nextWeek: 'dddd [pukul] LT',
          lastDay: '[Kala wingi pukul] LT',
          lastWeek: 'dddd [kepengker pukul] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'wonten ing %s',
          past: '%s ingkang kepengker',
          s: 'sawetawis detik',
          ss: '%d detik',
          m: 'setunggal menit',
          mm: '%d menit',
          h: 'setunggal jam',
          hh: '%d jam',
          d: 'sedinten',
          dd: '%d dinten',
          M: 'sewulan',
          MM: '%d wulan',
          y: 'setaun',
          yy: '%d taun'
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return jv;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ka.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ka.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleKaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var ka = moment.defineLocale('ka', {
        months: {
          standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
          format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
        },
        monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
        weekdays: {
          standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
          format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
          isFormat: /(წინა|შემდეგ)/
        },
        weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
        weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendar: {
          sameDay: '[დღეს] LT[-ზე]',
          nextDay: '[ხვალ] LT[-ზე]',
          lastDay: '[გუშინ] LT[-ზე]',
          nextWeek: '[შემდეგ] dddd LT[-ზე]',
          lastWeek: '[წინა] dddd LT-ზე',
          sameElse: 'L'
        },
        relativeTime: {
          future: function future(s) {
            return /(წამი|წუთი|საათი|წელი)/.test(s) ? s.replace(/ი$/, 'ში') : s + 'ში';
          },
          past: function past(s) {
            if (/(წამი|წუთი|საათი|დღე|თვე)/.test(s)) {
              return s.replace(/(ი|ე)$/, 'ის წინ');
            }

            if (/წელი/.test(s)) {
              return s.replace(/წელი$/, 'წლის წინ');
            }
          },
          s: 'რამდენიმე წამი',
          ss: '%d წამი',
          m: 'წუთი',
          mm: '%d წუთი',
          h: 'საათი',
          hh: '%d საათი',
          d: 'დღე',
          dd: '%d დღე',
          M: 'თვე',
          MM: '%d თვე',
          y: 'წელი',
          yy: '%d წელი'
        },
        dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal: function ordinal(number) {
          if (number === 0) {
            return number;
          }

          if (number === 1) {
            return number + '-ლი';
          }

          if (number < 20 || number <= 100 && number % 20 === 0 || number % 100 === 0) {
            return 'მე-' + number;
          }

          return number + '-ე';
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      return ka;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/kk.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/kk.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleKkJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var suffixes = {
        0: '-ші',
        1: '-ші',
        2: '-ші',
        3: '-ші',
        4: '-ші',
        5: '-ші',
        6: '-шы',
        7: '-ші',
        8: '-ші',
        9: '-шы',
        10: '-шы',
        20: '-шы',
        30: '-шы',
        40: '-шы',
        50: '-ші',
        60: '-шы',
        70: '-ші',
        80: '-ші',
        90: '-шы',
        100: '-ші'
      };
      var kk = moment.defineLocale('kk', {
        months: 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
        monthsShort: 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
        weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
        weekdaysShort: 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
        weekdaysMin: 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Бүгін сағат] LT',
          nextDay: '[Ертең сағат] LT',
          nextWeek: 'dddd [сағат] LT',
          lastDay: '[Кеше сағат] LT',
          lastWeek: '[Өткен аптаның] dddd [сағат] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s ішінде',
          past: '%s бұрын',
          s: 'бірнеше секунд',
          ss: '%d секунд',
          m: 'бір минут',
          mm: '%d минут',
          h: 'бір сағат',
          hh: '%d сағат',
          d: 'бір күн',
          dd: '%d күн',
          M: 'бір ай',
          MM: '%d ай',
          y: 'бір жыл',
          yy: '%d жыл'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
        ordinal: function ordinal(number) {
          var a = number % 10,
              b = number >= 100 ? 100 : null;
          return number + (suffixes[number] || suffixes[a] || suffixes[b]);
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return kk;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/km.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/km.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleKmJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var symbolMap = {
        '1': '១',
        '2': '២',
        '3': '៣',
        '4': '៤',
        '5': '៥',
        '6': '៦',
        '7': '៧',
        '8': '៨',
        '9': '៩',
        '0': '០'
      },
          numberMap = {
        '១': '1',
        '២': '2',
        '៣': '3',
        '៤': '4',
        '៥': '5',
        '៦': '6',
        '៧': '7',
        '៨': '8',
        '៩': '9',
        '០': '0'
      };
      var km = moment.defineLocale('km', {
        months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
        monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
        weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
        weekdaysShort: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
        weekdaysMin: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /ព្រឹក|ល្ងាច/,
        isPM: function isPM(input) {
          return input === 'ល្ងាច';
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'ព្រឹក';
          } else {
            return 'ល្ងាច';
          }
        },
        calendar: {
          sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
          nextDay: '[ស្អែក ម៉ោង] LT',
          nextWeek: 'dddd [ម៉ោង] LT',
          lastDay: '[ម្សិលមិញ ម៉ោង] LT',
          lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%sទៀត',
          past: '%sមុន',
          s: 'ប៉ុន្មានវិនាទី',
          ss: '%d វិនាទី',
          m: 'មួយនាទី',
          mm: '%d នាទី',
          h: 'មួយម៉ោង',
          hh: '%d ម៉ោង',
          d: 'មួយថ្ងៃ',
          dd: '%d ថ្ងៃ',
          M: 'មួយខែ',
          MM: '%d ខែ',
          y: 'មួយឆ្នាំ',
          yy: '%d ឆ្នាំ'
        },
        dayOfMonthOrdinalParse: /ទី\d{1,2}/,
        ordinal: 'ទី%d',
        preparse: function preparse(string) {
          return string.replace(/[១២៣៤៥៦៧៨៩០]/g, function (match) {
            return numberMap[match];
          });
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          });
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return km;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/kn.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/kn.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleKnJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var symbolMap = {
        '1': '೧',
        '2': '೨',
        '3': '೩',
        '4': '೪',
        '5': '೫',
        '6': '೬',
        '7': '೭',
        '8': '೮',
        '9': '೯',
        '0': '೦'
      },
          numberMap = {
        '೧': '1',
        '೨': '2',
        '೩': '3',
        '೪': '4',
        '೫': '5',
        '೬': '6',
        '೭': '7',
        '೮': '8',
        '೯': '9',
        '೦': '0'
      };
      var kn = moment.defineLocale('kn', {
        months: 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split('_'),
        monthsShort: 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ'.split('_'),
        monthsParseExact: true,
        weekdays: 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split('_'),
        weekdaysShort: 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
        weekdaysMin: 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm',
          LTS: 'A h:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm',
          LLLL: 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar: {
          sameDay: '[ಇಂದು] LT',
          nextDay: '[ನಾಳೆ] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[ನಿನ್ನೆ] LT',
          lastWeek: '[ಕೊನೆಯ] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s ನಂತರ',
          past: '%s ಹಿಂದೆ',
          s: 'ಕೆಲವು ಕ್ಷಣಗಳು',
          ss: '%d ಸೆಕೆಂಡುಗಳು',
          m: 'ಒಂದು ನಿಮಿಷ',
          mm: '%d ನಿಮಿಷ',
          h: 'ಒಂದು ಗಂಟೆ',
          hh: '%d ಗಂಟೆ',
          d: 'ಒಂದು ದಿನ',
          dd: '%d ದಿನ',
          M: 'ಒಂದು ತಿಂಗಳು',
          MM: '%d ತಿಂಗಳು',
          y: 'ಒಂದು ವರ್ಷ',
          yy: '%d ವರ್ಷ'
        },
        preparse: function preparse(string) {
          return string.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (match) {
            return numberMap[match];
          });
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          });
        },
        meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'ರಾತ್ರಿ') {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === 'ಬೆಳಿಗ್ಗೆ') {
            return hour;
          } else if (meridiem === 'ಮಧ್ಯಾಹ್ನ') {
            return hour >= 10 ? hour : hour + 12;
          } else if (meridiem === 'ಸಂಜೆ') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'ರಾತ್ರಿ';
          } else if (hour < 10) {
            return 'ಬೆಳಿಗ್ಗೆ';
          } else if (hour < 17) {
            return 'ಮಧ್ಯಾಹ್ನ';
          } else if (hour < 20) {
            return 'ಸಂಜೆ';
          } else {
            return 'ರಾತ್ರಿ';
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
        ordinal: function ordinal(number) {
          return number + 'ನೇ';
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return kn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ko.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ko.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleKoJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var ko = moment.defineLocale('ko', {
        months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
        weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
        weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
        longDateFormat: {
          LT: 'A h:mm',
          LTS: 'A h:mm:ss',
          L: 'YYYY.MM.DD.',
          LL: 'YYYY년 MMMM D일',
          LLL: 'YYYY년 MMMM D일 A h:mm',
          LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
          l: 'YYYY.MM.DD.',
          ll: 'YYYY년 MMMM D일',
          lll: 'YYYY년 MMMM D일 A h:mm',
          llll: 'YYYY년 MMMM D일 dddd A h:mm'
        },
        calendar: {
          sameDay: '오늘 LT',
          nextDay: '내일 LT',
          nextWeek: 'dddd LT',
          lastDay: '어제 LT',
          lastWeek: '지난주 dddd LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s 후',
          past: '%s 전',
          s: '몇 초',
          ss: '%d초',
          m: '1분',
          mm: '%d분',
          h: '한 시간',
          hh: '%d시간',
          d: '하루',
          dd: '%d일',
          M: '한 달',
          MM: '%d달',
          y: '일 년',
          yy: '%d년'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
              return number + '일';

            case 'M':
              return number + '월';

            case 'w':
            case 'W':
              return number + '주';

            default:
              return number;
          }
        },
        meridiemParse: /오전|오후/,
        isPM: function isPM(token) {
          return token === '오후';
        },
        meridiem: function meridiem(hour, minute, isUpper) {
          return hour < 12 ? '오전' : '오후';
        }
      });
      return ko;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ku.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ku.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleKuJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var symbolMap = {
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
        '0': '٠'
      },
          numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
      },
          months = ['کانونی دووەم', 'شوبات', 'ئازار', 'نیسان', 'ئایار', 'حوزەیران', 'تەمموز', 'ئاب', 'ئەیلوول', 'تشرینی یەكەم', 'تشرینی دووەم', 'كانونی یەکەم'];
      var ku = moment.defineLocale('ku', {
        months: months,
        monthsShort: months,
        weekdays: 'یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌'.split('_'),
        weekdaysShort: 'یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌'.split('_'),
        weekdaysMin: 'ی_د_س_چ_پ_ه_ش'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /ئێواره‌|به‌یانی/,
        isPM: function isPM(input) {
          return /ئێواره‌/.test(input);
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'به‌یانی';
          } else {
            return 'ئێواره‌';
          }
        },
        calendar: {
          sameDay: '[ئه‌مرۆ كاتژمێر] LT',
          nextDay: '[به‌یانی كاتژمێر] LT',
          nextWeek: 'dddd [كاتژمێر] LT',
          lastDay: '[دوێنێ كاتژمێر] LT',
          lastWeek: 'dddd [كاتژمێر] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'له‌ %s',
          past: '%s',
          s: 'چه‌ند چركه‌یه‌ك',
          ss: 'چركه‌ %d',
          m: 'یه‌ك خوله‌ك',
          mm: '%d خوله‌ك',
          h: 'یه‌ك كاتژمێر',
          hh: '%d كاتژمێر',
          d: 'یه‌ك ڕۆژ',
          dd: '%d ڕۆژ',
          M: 'یه‌ك مانگ',
          MM: '%d مانگ',
          y: 'یه‌ك ساڵ',
          yy: '%d ساڵ'
        },
        preparse: function preparse(string) {
          return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
            return numberMap[match];
          }).replace(/،/g, ',');
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          }).replace(/,/g, '،');
        },
        week: {
          dow: 6,
          // Saturday is the first day of the week.
          doy: 12 // The week that contains Jan 12th is the first week of the year.

        }
      });
      return ku;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ky.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ky.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleKyJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var suffixes = {
        0: '-чү',
        1: '-чи',
        2: '-чи',
        3: '-чү',
        4: '-чү',
        5: '-чи',
        6: '-чы',
        7: '-чи',
        8: '-чи',
        9: '-чу',
        10: '-чу',
        20: '-чы',
        30: '-чу',
        40: '-чы',
        50: '-чү',
        60: '-чы',
        70: '-чи',
        80: '-чи',
        90: '-чу',
        100: '-чү'
      };
      var ky = moment.defineLocale('ky', {
        months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
        monthsShort: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
        weekdays: 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
        weekdaysShort: 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
        weekdaysMin: 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Бүгүн саат] LT',
          nextDay: '[Эртең саат] LT',
          nextWeek: 'dddd [саат] LT',
          lastDay: '[Кечээ саат] LT',
          lastWeek: '[Өткөн аптанын] dddd [күнү] [саат] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s ичинде',
          past: '%s мурун',
          s: 'бирнече секунд',
          ss: '%d секунд',
          m: 'бир мүнөт',
          mm: '%d мүнөт',
          h: 'бир саат',
          hh: '%d саат',
          d: 'бир күн',
          dd: '%d күн',
          M: 'бир ай',
          MM: '%d ай',
          y: 'бир жыл',
          yy: '%d жыл'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
        ordinal: function ordinal(number) {
          var a = number % 10,
              b = number >= 100 ? 100 : null;
          return number + (suffixes[number] || suffixes[a] || suffixes[b]);
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return ky;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/lb.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/lb.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleLbJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
          'm': ['eng Minutt', 'enger Minutt'],
          'h': ['eng Stonn', 'enger Stonn'],
          'd': ['een Dag', 'engem Dag'],
          'M': ['ee Mount', 'engem Mount'],
          'y': ['ee Joer', 'engem Joer']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
      }

      function processFutureTime(string) {
        var number = string.substr(0, string.indexOf(' '));

        if (eifelerRegelAppliesToNumber(number)) {
          return 'a ' + string;
        }

        return 'an ' + string;
      }

      function processPastTime(string) {
        var number = string.substr(0, string.indexOf(' '));

        if (eifelerRegelAppliesToNumber(number)) {
          return 'viru ' + string;
        }

        return 'virun ' + string;
      }
      /**
       * Returns true if the word before the given number loses the '-n' ending.
       * e.g. 'an 10 Deeg' but 'a 5 Deeg'
       *
       * @param number {integer}
       * @returns {boolean}
       */


      function eifelerRegelAppliesToNumber(number) {
        number = parseInt(number, 10);

        if (isNaN(number)) {
          return false;
        }

        if (number < 0) {
          // Negative Number --> always true
          return true;
        } else if (number < 10) {
          // Only 1 digit
          if (4 <= number && number <= 7) {
            return true;
          }

          return false;
        } else if (number < 100) {
          // 2 digits
          var lastDigit = number % 10,
              firstDigit = number / 10;

          if (lastDigit === 0) {
            return eifelerRegelAppliesToNumber(firstDigit);
          }

          return eifelerRegelAppliesToNumber(lastDigit);
        } else if (number < 10000) {
          // 3 or 4 digits --> recursively check first digit
          while (number >= 10) {
            number = number / 10;
          }

          return eifelerRegelAppliesToNumber(number);
        } else {
          // Anything larger than 4 digits: recursively check first n-3 digits
          number = number / 1000;
          return eifelerRegelAppliesToNumber(number);
        }
      }

      var lb = moment.defineLocale('lb', {
        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: true,
        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm [Auer]',
          LTS: 'H:mm:ss [Auer]',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm [Auer]',
          LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
        },
        calendar: {
          sameDay: '[Haut um] LT',
          sameElse: 'L',
          nextDay: '[Muer um] LT',
          nextWeek: 'dddd [um] LT',
          lastDay: '[Gëschter um] LT',
          lastWeek: function lastWeek() {
            // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
            switch (this.day()) {
              case 2:
              case 4:
                return '[Leschten] dddd [um] LT';

              default:
                return '[Leschte] dddd [um] LT';
            }
          }
        },
        relativeTime: {
          future: processFutureTime,
          past: processPastTime,
          s: 'e puer Sekonnen',
          ss: '%d Sekonnen',
          m: processRelativeTime,
          mm: '%d Minutten',
          h: processRelativeTime,
          hh: '%d Stonnen',
          d: processRelativeTime,
          dd: '%d Deeg',
          M: processRelativeTime,
          MM: '%d Méint',
          y: processRelativeTime,
          yy: '%d Joer'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return lb;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/lo.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/lo.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleLoJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var lo = moment.defineLocale('lo', {
        months: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
        monthsShort: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
        weekdays: 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
        weekdaysShort: 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
        weekdaysMin: 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'ວັນdddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
        isPM: function isPM(input) {
          return input === 'ຕອນແລງ';
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'ຕອນເຊົ້າ';
          } else {
            return 'ຕອນແລງ';
          }
        },
        calendar: {
          sameDay: '[ມື້ນີ້ເວລາ] LT',
          nextDay: '[ມື້ອື່ນເວລາ] LT',
          nextWeek: '[ວັນ]dddd[ໜ້າເວລາ] LT',
          lastDay: '[ມື້ວານນີ້ເວລາ] LT',
          lastWeek: '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'ອີກ %s',
          past: '%sຜ່ານມາ',
          s: 'ບໍ່ເທົ່າໃດວິນາທີ',
          ss: '%d ວິນາທີ',
          m: '1 ນາທີ',
          mm: '%d ນາທີ',
          h: '1 ຊົ່ວໂມງ',
          hh: '%d ຊົ່ວໂມງ',
          d: '1 ມື້',
          dd: '%d ມື້',
          M: '1 ເດືອນ',
          MM: '%d ເດືອນ',
          y: '1 ປີ',
          yy: '%d ປີ'
        },
        dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
        ordinal: function ordinal(number) {
          return 'ທີ່' + number;
        }
      });
      return lo;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/lt.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/lt.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleLtJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var units = {
        'ss': 'sekundė_sekundžių_sekundes',
        'm': 'minutė_minutės_minutę',
        'mm': 'minutės_minučių_minutes',
        'h': 'valanda_valandos_valandą',
        'hh': 'valandos_valandų_valandas',
        'd': 'diena_dienos_dieną',
        'dd': 'dienos_dienų_dienas',
        'M': 'mėnuo_mėnesio_mėnesį',
        'MM': 'mėnesiai_mėnesių_mėnesius',
        'y': 'metai_metų_metus',
        'yy': 'metai_metų_metus'
      };

      function translateSeconds(number, withoutSuffix, key, isFuture) {
        if (withoutSuffix) {
          return 'kelios sekundės';
        } else {
          return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
        }
      }

      function translateSingular(number, withoutSuffix, key, isFuture) {
        return withoutSuffix ? forms(key)[0] : isFuture ? forms(key)[1] : forms(key)[2];
      }

      function special(number) {
        return number % 10 === 0 || number > 10 && number < 20;
      }

      function forms(key) {
        return units[key].split('_');
      }

      function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';

        if (number === 1) {
          return result + translateSingular(number, withoutSuffix, key[0], isFuture);
        } else if (withoutSuffix) {
          return result + (special(number) ? forms(key)[1] : forms(key)[0]);
        } else {
          if (isFuture) {
            return result + forms(key)[1];
          } else {
            return result + (special(number) ? forms(key)[1] : forms(key)[2]);
          }
        }
      }

      var lt = moment.defineLocale('lt', {
        months: {
          format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
          standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
          isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
        },
        monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
        weekdays: {
          format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
          standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
          isFormat: /dddd HH:mm/
        },
        weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
        weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'YYYY [m.] MMMM D [d.]',
          LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
          LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
          l: 'YYYY-MM-DD',
          ll: 'YYYY [m.] MMMM D [d.]',
          lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
          llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
        },
        calendar: {
          sameDay: '[Šiandien] LT',
          nextDay: '[Rytoj] LT',
          nextWeek: 'dddd LT',
          lastDay: '[Vakar] LT',
          lastWeek: '[Praėjusį] dddd LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'po %s',
          past: 'prieš %s',
          s: translateSeconds,
          ss: translate,
          m: translateSingular,
          mm: translate,
          h: translateSingular,
          hh: translate,
          d: translateSingular,
          dd: translate,
          M: translateSingular,
          MM: translate,
          y: translateSingular,
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal: function ordinal(number) {
          return number + '-oji';
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return lt;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/lv.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/lv.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleLvJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var units = {
        'ss': 'sekundes_sekundēm_sekunde_sekundes'.split('_'),
        'm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        'mm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        'h': 'stundas_stundām_stunda_stundas'.split('_'),
        'hh': 'stundas_stundām_stunda_stundas'.split('_'),
        'd': 'dienas_dienām_diena_dienas'.split('_'),
        'dd': 'dienas_dienām_diena_dienas'.split('_'),
        'M': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        'MM': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        'y': 'gada_gadiem_gads_gadi'.split('_'),
        'yy': 'gada_gadiem_gads_gadi'.split('_')
      };
      /**
       * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
       */

      function format(forms, number, withoutSuffix) {
        if (withoutSuffix) {
          // E.g. "21 minūte", "3 minūtes".
          return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
        } else {
          // E.g. "21 minūtes" as in "pēc 21 minūtes".
          // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
          return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
        }
      }

      function relativeTimeWithPlural(number, withoutSuffix, key) {
        return number + ' ' + format(units[key], number, withoutSuffix);
      }

      function relativeTimeWithSingular(number, withoutSuffix, key) {
        return format(units[key], number, withoutSuffix);
      }

      function relativeSeconds(number, withoutSuffix) {
        return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
      }

      var lv = moment.defineLocale('lv', {
        months: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
        monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
        weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY.',
          LL: 'YYYY. [gada] D. MMMM',
          LLL: 'YYYY. [gada] D. MMMM, HH:mm',
          LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm'
        },
        calendar: {
          sameDay: '[Šodien pulksten] LT',
          nextDay: '[Rīt pulksten] LT',
          nextWeek: 'dddd [pulksten] LT',
          lastDay: '[Vakar pulksten] LT',
          lastWeek: '[Pagājušā] dddd [pulksten] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'pēc %s',
          past: 'pirms %s',
          s: relativeSeconds,
          ss: relativeTimeWithPlural,
          m: relativeTimeWithSingular,
          mm: relativeTimeWithPlural,
          h: relativeTimeWithSingular,
          hh: relativeTimeWithPlural,
          d: relativeTimeWithSingular,
          dd: relativeTimeWithPlural,
          M: relativeTimeWithSingular,
          MM: relativeTimeWithPlural,
          y: relativeTimeWithSingular,
          yy: relativeTimeWithPlural
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return lv;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/me.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/me.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleMeJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var translator = {
        words: {
          //Different grammatical cases
          ss: ['sekund', 'sekunda', 'sekundi'],
          m: ['jedan minut', 'jednog minuta'],
          mm: ['minut', 'minuta', 'minuta'],
          h: ['jedan sat', 'jednog sata'],
          hh: ['sat', 'sata', 'sati'],
          dd: ['dan', 'dana', 'dana'],
          MM: ['mjesec', 'mjeseca', 'mjeseci'],
          yy: ['godina', 'godine', 'godina']
        },
        correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
          return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
        },
        translate: function translate(number, withoutSuffix, key) {
          var wordKey = translator.words[key];

          if (key.length === 1) {
            return withoutSuffix ? wordKey[0] : wordKey[1];
          } else {
            return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
          }
        }
      };
      var me = moment.defineLocale('me', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[danas u] LT',
          nextDay: '[sjutra u] LT',
          nextWeek: function nextWeek() {
            switch (this.day()) {
              case 0:
                return '[u] [nedjelju] [u] LT';

              case 3:
                return '[u] [srijedu] [u] LT';

              case 6:
                return '[u] [subotu] [u] LT';

              case 1:
              case 2:
              case 4:
              case 5:
                return '[u] dddd [u] LT';
            }
          },
          lastDay: '[juče u] LT',
          lastWeek: function lastWeek() {
            var lastWeekDays = ['[prošle] [nedjelje] [u] LT', '[prošlog] [ponedjeljka] [u] LT', '[prošlog] [utorka] [u] LT', '[prošle] [srijede] [u] LT', '[prošlog] [četvrtka] [u] LT', '[prošlog] [petka] [u] LT', '[prošle] [subote] [u] LT'];
            return lastWeekDays[this.day()];
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'za %s',
          past: 'prije %s',
          s: 'nekoliko sekundi',
          ss: translator.translate,
          m: translator.translate,
          mm: translator.translate,
          h: translator.translate,
          hh: translator.translate,
          d: 'dan',
          dd: translator.translate,
          M: 'mjesec',
          MM: translator.translate,
          y: 'godinu',
          yy: translator.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return me;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/mi.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/mi.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleMiJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var mi = moment.defineLocale('mi', {
        months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split('_'),
        monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
        weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
        weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [i] HH:mm',
          LLLL: 'dddd, D MMMM YYYY [i] HH:mm'
        },
        calendar: {
          sameDay: '[i teie mahana, i] LT',
          nextDay: '[apopo i] LT',
          nextWeek: 'dddd [i] LT',
          lastDay: '[inanahi i] LT',
          lastWeek: 'dddd [whakamutunga i] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'i roto i %s',
          past: '%s i mua',
          s: 'te hēkona ruarua',
          ss: '%d hēkona',
          m: 'he meneti',
          mm: '%d meneti',
          h: 'te haora',
          hh: '%d haora',
          d: 'he ra',
          dd: '%d ra',
          M: 'he marama',
          MM: '%d marama',
          y: 'he tau',
          yy: '%d tau'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return mi;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/mk.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/mk.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleMkJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var mk = moment.defineLocale('mk', {
        months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
        weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
        weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
        weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'D.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY H:mm',
          LLLL: 'dddd, D MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[Денес во] LT',
          nextDay: '[Утре во] LT',
          nextWeek: '[Во] dddd [во] LT',
          lastDay: '[Вчера во] LT',
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
              case 3:
              case 6:
                return '[Изминатата] dddd [во] LT';

              case 1:
              case 2:
              case 4:
              case 5:
                return '[Изминатиот] dddd [во] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'после %s',
          past: 'пред %s',
          s: 'неколку секунди',
          ss: '%d секунди',
          m: 'минута',
          mm: '%d минути',
          h: 'час',
          hh: '%d часа',
          d: 'ден',
          dd: '%d дена',
          M: 'месец',
          MM: '%d месеци',
          y: 'година',
          yy: '%d години'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function ordinal(number) {
          var lastDigit = number % 10,
              last2Digits = number % 100;

          if (number === 0) {
            return number + '-ев';
          } else if (last2Digits === 0) {
            return number + '-ен';
          } else if (last2Digits > 10 && last2Digits < 20) {
            return number + '-ти';
          } else if (lastDigit === 1) {
            return number + '-ви';
          } else if (lastDigit === 2) {
            return number + '-ри';
          } else if (lastDigit === 7 || lastDigit === 8) {
            return number + '-ми';
          } else {
            return number + '-ти';
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return mk;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ml.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ml.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleMlJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var ml = moment.defineLocale('ml', {
        months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
        monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
        monthsParseExact: true,
        weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
        weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
        weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm -നു',
          LTS: 'A h:mm:ss -നു',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm -നു',
          LLLL: 'dddd, D MMMM YYYY, A h:mm -നു'
        },
        calendar: {
          sameDay: '[ഇന്ന്] LT',
          nextDay: '[നാളെ] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[ഇന്നലെ] LT',
          lastWeek: '[കഴിഞ്ഞ] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s കഴിഞ്ഞ്',
          past: '%s മുൻപ്',
          s: 'അൽപ നിമിഷങ്ങൾ',
          ss: '%d സെക്കൻഡ്',
          m: 'ഒരു മിനിറ്റ്',
          mm: '%d മിനിറ്റ്',
          h: 'ഒരു മണിക്കൂർ',
          hh: '%d മണിക്കൂർ',
          d: 'ഒരു ദിവസം',
          dd: '%d ദിവസം',
          M: 'ഒരു മാസം',
          MM: '%d മാസം',
          y: 'ഒരു വർഷം',
          yy: '%d വർഷം'
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'രാത്രി' && hour >= 4 || meridiem === 'ഉച്ച കഴിഞ്ഞ്' || meridiem === 'വൈകുന്നേരം') {
            return hour + 12;
          } else {
            return hour;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'രാത്രി';
          } else if (hour < 12) {
            return 'രാവിലെ';
          } else if (hour < 17) {
            return 'ഉച്ച കഴിഞ്ഞ്';
          } else if (hour < 20) {
            return 'വൈകുന്നേരം';
          } else {
            return 'രാത്രി';
          }
        }
      });
      return ml;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/mn.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/mn.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleMnJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      function translate(number, withoutSuffix, key, isFuture) {
        switch (key) {
          case 's':
            return withoutSuffix ? 'хэдхэн секунд' : 'хэдхэн секундын';

          case 'ss':
            return number + (withoutSuffix ? ' секунд' : ' секундын');

          case 'm':
          case 'mm':
            return number + (withoutSuffix ? ' минут' : ' минутын');

          case 'h':
          case 'hh':
            return number + (withoutSuffix ? ' цаг' : ' цагийн');

          case 'd':
          case 'dd':
            return number + (withoutSuffix ? ' өдөр' : ' өдрийн');

          case 'M':
          case 'MM':
            return number + (withoutSuffix ? ' сар' : ' сарын');

          case 'y':
          case 'yy':
            return number + (withoutSuffix ? ' жил' : ' жилийн');

          default:
            return number;
        }
      }

      var mn = moment.defineLocale('mn', {
        months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
        monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
        monthsParseExact: true,
        weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
        weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
        weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'YYYY оны MMMMын D',
          LLL: 'YYYY оны MMMMын D HH:mm',
          LLLL: 'dddd, YYYY оны MMMMын D HH:mm'
        },
        meridiemParse: /ҮӨ|ҮХ/i,
        isPM: function isPM(input) {
          return input === 'ҮХ';
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'ҮӨ';
          } else {
            return 'ҮХ';
          }
        },
        calendar: {
          sameDay: '[Өнөөдөр] LT',
          nextDay: '[Маргааш] LT',
          nextWeek: '[Ирэх] dddd LT',
          lastDay: '[Өчигдөр] LT',
          lastWeek: '[Өнгөрсөн] dddd LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s дараа',
          past: '%s өмнө',
          s: translate,
          ss: translate,
          m: translate,
          mm: translate,
          h: translate,
          hh: translate,
          d: translate,
          dd: translate,
          M: translate,
          MM: translate,
          y: translate,
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
              return number + ' өдөр';

            default:
              return number;
          }
        }
      });
      return mn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/mr.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/mr.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleMrJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var symbolMap = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
      },
          numberMap = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
      };

      function relativeTimeMr(number, withoutSuffix, string, isFuture) {
        var output = '';

        if (withoutSuffix) {
          switch (string) {
            case 's':
              output = 'काही सेकंद';
              break;

            case 'ss':
              output = '%d सेकंद';
              break;

            case 'm':
              output = 'एक मिनिट';
              break;

            case 'mm':
              output = '%d मिनिटे';
              break;

            case 'h':
              output = 'एक तास';
              break;

            case 'hh':
              output = '%d तास';
              break;

            case 'd':
              output = 'एक दिवस';
              break;

            case 'dd':
              output = '%d दिवस';
              break;

            case 'M':
              output = 'एक महिना';
              break;

            case 'MM':
              output = '%d महिने';
              break;

            case 'y':
              output = 'एक वर्ष';
              break;

            case 'yy':
              output = '%d वर्षे';
              break;
          }
        } else {
          switch (string) {
            case 's':
              output = 'काही सेकंदां';
              break;

            case 'ss':
              output = '%d सेकंदां';
              break;

            case 'm':
              output = 'एका मिनिटा';
              break;

            case 'mm':
              output = '%d मिनिटां';
              break;

            case 'h':
              output = 'एका तासा';
              break;

            case 'hh':
              output = '%d तासां';
              break;

            case 'd':
              output = 'एका दिवसा';
              break;

            case 'dd':
              output = '%d दिवसां';
              break;

            case 'M':
              output = 'एका महिन्या';
              break;

            case 'MM':
              output = '%d महिन्यां';
              break;

            case 'y':
              output = 'एका वर्षा';
              break;

            case 'yy':
              output = '%d वर्षां';
              break;
          }
        }

        return output.replace(/%d/i, number);
      }

      var mr = moment.defineLocale('mr', {
        months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
        monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
        monthsParseExact: true,
        weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat: {
          LT: 'A h:mm वाजता',
          LTS: 'A h:mm:ss वाजता',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm वाजता',
          LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता'
        },
        calendar: {
          sameDay: '[आज] LT',
          nextDay: '[उद्या] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[काल] LT',
          lastWeek: '[मागील] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%sमध्ये',
          past: '%sपूर्वी',
          s: relativeTimeMr,
          ss: relativeTimeMr,
          m: relativeTimeMr,
          mm: relativeTimeMr,
          h: relativeTimeMr,
          hh: relativeTimeMr,
          d: relativeTimeMr,
          dd: relativeTimeMr,
          M: relativeTimeMr,
          MM: relativeTimeMr,
          y: relativeTimeMr,
          yy: relativeTimeMr
        },
        preparse: function preparse(string) {
          return string.replace(/[१२३४५६७८९०]/g, function (match) {
            return numberMap[match];
          });
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          });
        },
        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'रात्री') {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === 'सकाळी') {
            return hour;
          } else if (meridiem === 'दुपारी') {
            return hour >= 10 ? hour : hour + 12;
          } else if (meridiem === 'सायंकाळी') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'रात्री';
          } else if (hour < 10) {
            return 'सकाळी';
          } else if (hour < 17) {
            return 'दुपारी';
          } else if (hour < 20) {
            return 'सायंकाळी';
          } else {
            return 'रात्री';
          }
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return mr;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ms-my.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/ms-my.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleMsMyJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var msMy = moment.defineLocale('ms-my', {
        months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [pukul] HH.mm',
          LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'pagi') {
            return hour;
          } else if (meridiem === 'tengahari') {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === 'petang' || meridiem === 'malam') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours < 11) {
            return 'pagi';
          } else if (hours < 15) {
            return 'tengahari';
          } else if (hours < 19) {
            return 'petang';
          } else {
            return 'malam';
          }
        },
        calendar: {
          sameDay: '[Hari ini pukul] LT',
          nextDay: '[Esok pukul] LT',
          nextWeek: 'dddd [pukul] LT',
          lastDay: '[Kelmarin pukul] LT',
          lastWeek: 'dddd [lepas pukul] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'dalam %s',
          past: '%s yang lepas',
          s: 'beberapa saat',
          ss: '%d saat',
          m: 'seminit',
          mm: '%d minit',
          h: 'sejam',
          hh: '%d jam',
          d: 'sehari',
          dd: '%d hari',
          M: 'sebulan',
          MM: '%d bulan',
          y: 'setahun',
          yy: '%d tahun'
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return msMy;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ms.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ms.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleMsJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var ms = moment.defineLocale('ms', {
        months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [pukul] HH.mm',
          LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'pagi') {
            return hour;
          } else if (meridiem === 'tengahari') {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === 'petang' || meridiem === 'malam') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours < 11) {
            return 'pagi';
          } else if (hours < 15) {
            return 'tengahari';
          } else if (hours < 19) {
            return 'petang';
          } else {
            return 'malam';
          }
        },
        calendar: {
          sameDay: '[Hari ini pukul] LT',
          nextDay: '[Esok pukul] LT',
          nextWeek: 'dddd [pukul] LT',
          lastDay: '[Kelmarin pukul] LT',
          lastWeek: 'dddd [lepas pukul] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'dalam %s',
          past: '%s yang lepas',
          s: 'beberapa saat',
          ss: '%d saat',
          m: 'seminit',
          mm: '%d minit',
          h: 'sejam',
          hh: '%d jam',
          d: 'sehari',
          dd: '%d hari',
          M: 'sebulan',
          MM: '%d bulan',
          y: 'setahun',
          yy: '%d tahun'
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return ms;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/mt.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/mt.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleMtJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var mt = moment.defineLocale('mt', {
        months: 'Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru'.split('_'),
        monthsShort: 'Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ'.split('_'),
        weekdays: 'Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt'.split('_'),
        weekdaysShort: 'Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib'.split('_'),
        weekdaysMin: 'Ħa_Tn_Tl_Er_Ħa_Ġi_Si'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Illum fil-]LT',
          nextDay: '[Għada fil-]LT',
          nextWeek: 'dddd [fil-]LT',
          lastDay: '[Il-bieraħ fil-]LT',
          lastWeek: 'dddd [li għadda] [fil-]LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'f’ %s',
          past: '%s ilu',
          s: 'ftit sekondi',
          ss: '%d sekondi',
          m: 'minuta',
          mm: '%d minuti',
          h: 'siegħa',
          hh: '%d siegħat',
          d: 'ġurnata',
          dd: '%d ġranet',
          M: 'xahar',
          MM: '%d xhur',
          y: 'sena',
          yy: '%d sni'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return mt;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/my.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/my.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleMyJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var symbolMap = {
        '1': '၁',
        '2': '၂',
        '3': '၃',
        '4': '၄',
        '5': '၅',
        '6': '၆',
        '7': '၇',
        '8': '၈',
        '9': '၉',
        '0': '၀'
      },
          numberMap = {
        '၁': '1',
        '၂': '2',
        '၃': '3',
        '၄': '4',
        '၅': '5',
        '၆': '6',
        '၇': '7',
        '၈': '8',
        '၉': '9',
        '၀': '0'
      };
      var my = moment.defineLocale('my', {
        months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
        monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
        weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
        weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
        weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[ယနေ.] LT [မှာ]',
          nextDay: '[မနက်ဖြန်] LT [မှာ]',
          nextWeek: 'dddd LT [မှာ]',
          lastDay: '[မနေ.က] LT [မှာ]',
          lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'လာမည့် %s မှာ',
          past: 'လွန်ခဲ့သော %s က',
          s: 'စက္ကန်.အနည်းငယ်',
          ss: '%d စက္ကန့်',
          m: 'တစ်မိနစ်',
          mm: '%d မိနစ်',
          h: 'တစ်နာရီ',
          hh: '%d နာရီ',
          d: 'တစ်ရက်',
          dd: '%d ရက်',
          M: 'တစ်လ',
          MM: '%d လ',
          y: 'တစ်နှစ်',
          yy: '%d နှစ်'
        },
        preparse: function preparse(string) {
          return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
            return numberMap[match];
          });
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          });
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return my;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/nb.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/nb.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleNbJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var nb = moment.defineLocale('nb', {
        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
        monthsParseExact: true,
        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY [kl.] HH:mm',
          LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
        },
        calendar: {
          sameDay: '[i dag kl.] LT',
          nextDay: '[i morgen kl.] LT',
          nextWeek: 'dddd [kl.] LT',
          lastDay: '[i går kl.] LT',
          lastWeek: '[forrige] dddd [kl.] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'om %s',
          past: '%s siden',
          s: 'noen sekunder',
          ss: '%d sekunder',
          m: 'ett minutt',
          mm: '%d minutter',
          h: 'en time',
          hh: '%d timer',
          d: 'en dag',
          dd: '%d dager',
          M: 'en måned',
          MM: '%d måneder',
          y: 'ett år',
          yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return nb;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ne.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ne.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleNeJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var symbolMap = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
      },
          numberMap = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
      };
      var ne = moment.defineLocale('ne', {
        months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
        monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
        monthsParseExact: true,
        weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
        weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
        weekdaysMin: 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'Aको h:mm बजे',
          LTS: 'Aको h:mm:ss बजे',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, Aको h:mm बजे',
          LLLL: 'dddd, D MMMM YYYY, Aको h:mm बजे'
        },
        preparse: function preparse(string) {
          return string.replace(/[१२३४५६७८९०]/g, function (match) {
            return numberMap[match];
          });
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          });
        },
        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'राति') {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === 'बिहान') {
            return hour;
          } else if (meridiem === 'दिउँसो') {
            return hour >= 10 ? hour : hour + 12;
          } else if (meridiem === 'साँझ') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 3) {
            return 'राति';
          } else if (hour < 12) {
            return 'बिहान';
          } else if (hour < 16) {
            return 'दिउँसो';
          } else if (hour < 20) {
            return 'साँझ';
          } else {
            return 'राति';
          }
        },
        calendar: {
          sameDay: '[आज] LT',
          nextDay: '[भोलि] LT',
          nextWeek: '[आउँदो] dddd[,] LT',
          lastDay: '[हिजो] LT',
          lastWeek: '[गएको] dddd[,] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%sमा',
          past: '%s अगाडि',
          s: 'केही क्षण',
          ss: '%d सेकेण्ड',
          m: 'एक मिनेट',
          mm: '%d मिनेट',
          h: 'एक घण्टा',
          hh: '%d घण्टा',
          d: 'एक दिन',
          dd: '%d दिन',
          M: 'एक महिना',
          MM: '%d महिना',
          y: 'एक बर्ष',
          yy: '%d बर्ष'
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return ne;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/nl-be.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/nl-be.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleNlBeJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
          monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
      var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
      var monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      var nlBe = moment.defineLocale('nl-be', {
        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort: function monthsShort(m, format) {
          if (!m) {
            return monthsShortWithDots;
          } else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[m.month()];
          } else {
            return monthsShortWithDots[m.month()];
          }
        },
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[vandaag om] LT',
          nextDay: '[morgen om] LT',
          nextWeek: 'dddd [om] LT',
          lastDay: '[gisteren om] LT',
          lastWeek: '[afgelopen] dddd [om] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'over %s',
          past: '%s geleden',
          s: 'een paar seconden',
          ss: '%d seconden',
          m: 'één minuut',
          mm: '%d minuten',
          h: 'één uur',
          hh: '%d uur',
          d: 'één dag',
          dd: '%d dagen',
          M: 'één maand',
          MM: '%d maanden',
          y: 'één jaar',
          yy: '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function ordinal(number) {
          return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return nlBe;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/nl.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/nl.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleNlJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
          monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
      var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
      var monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      var nl = moment.defineLocale('nl', {
        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort: function monthsShort(m, format) {
          if (!m) {
            return monthsShortWithDots;
          } else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[m.month()];
          } else {
            return monthsShortWithDots[m.month()];
          }
        },
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD-MM-YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[vandaag om] LT',
          nextDay: '[morgen om] LT',
          nextWeek: 'dddd [om] LT',
          lastDay: '[gisteren om] LT',
          lastWeek: '[afgelopen] dddd [om] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'over %s',
          past: '%s geleden',
          s: 'een paar seconden',
          ss: '%d seconden',
          m: 'één minuut',
          mm: '%d minuten',
          h: 'één uur',
          hh: '%d uur',
          d: 'één dag',
          dd: '%d dagen',
          M: 'één maand',
          MM: '%d maanden',
          y: 'één jaar',
          yy: '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function ordinal(number) {
          return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return nl;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/nn.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/nn.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleNnJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var nn = moment.defineLocale('nn', {
        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
        weekdaysShort: 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
        weekdaysMin: 'su_må_ty_on_to_fr_lø'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY [kl.] H:mm',
          LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
        },
        calendar: {
          sameDay: '[I dag klokka] LT',
          nextDay: '[I morgon klokka] LT',
          nextWeek: 'dddd [klokka] LT',
          lastDay: '[I går klokka] LT',
          lastWeek: '[Føregåande] dddd [klokka] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'om %s',
          past: '%s sidan',
          s: 'nokre sekund',
          ss: '%d sekund',
          m: 'eit minutt',
          mm: '%d minutt',
          h: 'ein time',
          hh: '%d timar',
          d: 'ein dag',
          dd: '%d dagar',
          M: 'ein månad',
          MM: '%d månader',
          y: 'eit år',
          yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return nn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/pa-in.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/pa-in.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocalePaInJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var symbolMap = {
        '1': '੧',
        '2': '੨',
        '3': '੩',
        '4': '੪',
        '5': '੫',
        '6': '੬',
        '7': '੭',
        '8': '੮',
        '9': '੯',
        '0': '੦'
      },
          numberMap = {
        '੧': '1',
        '੨': '2',
        '੩': '3',
        '੪': '4',
        '੫': '5',
        '੬': '6',
        '੭': '7',
        '੮': '8',
        '੯': '9',
        '੦': '0'
      };
      var paIn = moment.defineLocale('pa-in', {
        // There are months name as per Nanakshahi Calendar but they are not used as rigidly in modern Punjabi.
        months: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
        monthsShort: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
        weekdays: 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
        weekdaysShort: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
        weekdaysMin: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm ਵਜੇ',
          LTS: 'A h:mm:ss ਵਜੇ',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm ਵਜੇ',
          LLLL: 'dddd, D MMMM YYYY, A h:mm ਵਜੇ'
        },
        calendar: {
          sameDay: '[ਅਜ] LT',
          nextDay: '[ਕਲ] LT',
          nextWeek: '[ਅਗਲਾ] dddd, LT',
          lastDay: '[ਕਲ] LT',
          lastWeek: '[ਪਿਛਲੇ] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s ਵਿੱਚ',
          past: '%s ਪਿਛਲੇ',
          s: 'ਕੁਝ ਸਕਿੰਟ',
          ss: '%d ਸਕਿੰਟ',
          m: 'ਇਕ ਮਿੰਟ',
          mm: '%d ਮਿੰਟ',
          h: 'ਇੱਕ ਘੰਟਾ',
          hh: '%d ਘੰਟੇ',
          d: 'ਇੱਕ ਦਿਨ',
          dd: '%d ਦਿਨ',
          M: 'ਇੱਕ ਮਹੀਨਾ',
          MM: '%d ਮਹੀਨੇ',
          y: 'ਇੱਕ ਸਾਲ',
          yy: '%d ਸਾਲ'
        },
        preparse: function preparse(string) {
          return string.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (match) {
            return numberMap[match];
          });
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          });
        },
        // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'ਰਾਤ') {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === 'ਸਵੇਰ') {
            return hour;
          } else if (meridiem === 'ਦੁਪਹਿਰ') {
            return hour >= 10 ? hour : hour + 12;
          } else if (meridiem === 'ਸ਼ਾਮ') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'ਰਾਤ';
          } else if (hour < 10) {
            return 'ਸਵੇਰ';
          } else if (hour < 17) {
            return 'ਦੁਪਹਿਰ';
          } else if (hour < 20) {
            return 'ਸ਼ਾਮ';
          } else {
            return 'ਰਾਤ';
          }
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return paIn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/pl.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/pl.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocalePlJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
          monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');

      function plural(n) {
        return n % 10 < 5 && n % 10 > 1 && ~~(n / 10) % 10 !== 1;
      }

      function translate(number, withoutSuffix, key) {
        var result = number + ' ';

        switch (key) {
          case 'ss':
            return result + (plural(number) ? 'sekundy' : 'sekund');

          case 'm':
            return withoutSuffix ? 'minuta' : 'minutę';

          case 'mm':
            return result + (plural(number) ? 'minuty' : 'minut');

          case 'h':
            return withoutSuffix ? 'godzina' : 'godzinę';

          case 'hh':
            return result + (plural(number) ? 'godziny' : 'godzin');

          case 'MM':
            return result + (plural(number) ? 'miesiące' : 'miesięcy');

          case 'yy':
            return result + (plural(number) ? 'lata' : 'lat');
        }
      }

      var pl = moment.defineLocale('pl', {
        months: function months(momentToFormat, format) {
          if (!momentToFormat) {
            return monthsNominative;
          } else if (format === '') {
            // Hack: if format empty we know this is used to generate
            // RegExp by moment. Give then back both valid forms of months
            // in RegExp ready format.
            return '(' + monthsSubjective[momentToFormat.month()] + '|' + monthsNominative[momentToFormat.month()] + ')';
          } else if (/D MMMM/.test(format)) {
            return monthsSubjective[momentToFormat.month()];
          } else {
            return monthsNominative[momentToFormat.month()];
          }
        },
        monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
        weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
        weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
        weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Dziś o] LT',
          nextDay: '[Jutro o] LT',
          nextWeek: function nextWeek() {
            switch (this.day()) {
              case 0:
                return '[W niedzielę o] LT';

              case 2:
                return '[We wtorek o] LT';

              case 3:
                return '[W środę o] LT';

              case 6:
                return '[W sobotę o] LT';

              default:
                return '[W] dddd [o] LT';
            }
          },
          lastDay: '[Wczoraj o] LT',
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
                return '[W zeszłą niedzielę o] LT';

              case 3:
                return '[W zeszłą środę o] LT';

              case 6:
                return '[W zeszłą sobotę o] LT';

              default:
                return '[W zeszły] dddd [o] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'za %s',
          past: '%s temu',
          s: 'kilka sekund',
          ss: translate,
          m: translate,
          mm: translate,
          h: translate,
          hh: translate,
          d: '1 dzień',
          dd: '%d dni',
          M: 'miesiąc',
          MM: translate,
          y: 'rok',
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return pl;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/pt-br.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/pt-br.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocalePtBrJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var ptBr = moment.defineLocale('pt-br', {
        months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
          LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
        },
        calendar: {
          sameDay: '[Hoje às] LT',
          nextDay: '[Amanhã às] LT',
          nextWeek: 'dddd [às] LT',
          lastDay: '[Ontem às] LT',
          lastWeek: function lastWeek() {
            return this.day() === 0 || this.day() === 6 ? '[Último] dddd [às] LT' : // Saturday + Sunday
            '[Última] dddd [às] LT'; // Monday - Friday
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'em %s',
          past: 'há %s',
          s: 'poucos segundos',
          ss: '%d segundos',
          m: 'um minuto',
          mm: '%d minutos',
          h: 'uma hora',
          hh: '%d horas',
          d: 'um dia',
          dd: '%d dias',
          M: 'um mês',
          MM: '%d meses',
          y: 'um ano',
          yy: '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº'
      });
      return ptBr;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/pt.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/pt.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocalePtJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var pt = moment.defineLocale('pt', {
        months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY HH:mm',
          LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Hoje às] LT',
          nextDay: '[Amanhã às] LT',
          nextWeek: 'dddd [às] LT',
          lastDay: '[Ontem às] LT',
          lastWeek: function lastWeek() {
            return this.day() === 0 || this.day() === 6 ? '[Último] dddd [às] LT' : // Saturday + Sunday
            '[Última] dddd [às] LT'; // Monday - Friday
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'em %s',
          past: 'há %s',
          s: 'segundos',
          ss: '%d segundos',
          m: 'um minuto',
          mm: '%d minutos',
          h: 'uma hora',
          hh: '%d horas',
          d: 'um dia',
          dd: '%d dias',
          M: 'um mês',
          MM: '%d meses',
          y: 'um ano',
          yy: '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return pt;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ro.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ro.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleRoJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
          'ss': 'secunde',
          'mm': 'minute',
          'hh': 'ore',
          'dd': 'zile',
          'MM': 'luni',
          'yy': 'ani'
        },
            separator = ' ';

        if (number % 100 >= 20 || number >= 100 && number % 100 === 0) {
          separator = ' de ';
        }

        return number + separator + format[key];
      }

      var ro = moment.defineLocale('ro', {
        months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
        monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
        weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
        weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY H:mm',
          LLLL: 'dddd, D MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[azi la] LT',
          nextDay: '[mâine la] LT',
          nextWeek: 'dddd [la] LT',
          lastDay: '[ieri la] LT',
          lastWeek: '[fosta] dddd [la] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'peste %s',
          past: '%s în urmă',
          s: 'câteva secunde',
          ss: relativeTimeWithPlural,
          m: 'un minut',
          mm: relativeTimeWithPlural,
          h: 'o oră',
          hh: relativeTimeWithPlural,
          d: 'o zi',
          dd: relativeTimeWithPlural,
          M: 'o lună',
          MM: relativeTimeWithPlural,
          y: 'un an',
          yy: relativeTimeWithPlural
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return ro;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ru.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ru.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleRuJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
      }

      function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
          'ss': withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
          'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
          'hh': 'час_часа_часов',
          'dd': 'день_дня_дней',
          'MM': 'месяц_месяца_месяцев',
          'yy': 'год_года_лет'
        };

        if (key === 'm') {
          return withoutSuffix ? 'минута' : 'минуту';
        } else {
          return number + ' ' + plural(format[key], +number);
        }
      }

      var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i]; // http://new.gramota.ru/spravka/rules/139-prop : § 103
      // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
      // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753

      var ru = moment.defineLocale('ru', {
        months: {
          format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
          standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
        },
        monthsShort: {
          // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
          format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
          standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
        },
        weekdays: {
          standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
          format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
          isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
        },
        weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        // копия предыдущего
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        // полные названия с падежами
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        // Выражение, которое соотвествует только сокращённым формам
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY г.',
          LLL: 'D MMMM YYYY г., H:mm',
          LLLL: 'dddd, D MMMM YYYY г., H:mm'
        },
        calendar: {
          sameDay: '[Сегодня, в] LT',
          nextDay: '[Завтра, в] LT',
          lastDay: '[Вчера, в] LT',
          nextWeek: function nextWeek(now) {
            if (now.week() !== this.week()) {
              switch (this.day()) {
                case 0:
                  return '[В следующее] dddd, [в] LT';

                case 1:
                case 2:
                case 4:
                  return '[В следующий] dddd, [в] LT';

                case 3:
                case 5:
                case 6:
                  return '[В следующую] dddd, [в] LT';
              }
            } else {
              if (this.day() === 2) {
                return '[Во] dddd, [в] LT';
              } else {
                return '[В] dddd, [в] LT';
              }
            }
          },
          lastWeek: function lastWeek(now) {
            if (now.week() !== this.week()) {
              switch (this.day()) {
                case 0:
                  return '[В прошлое] dddd, [в] LT';

                case 1:
                case 2:
                case 4:
                  return '[В прошлый] dddd, [в] LT';

                case 3:
                case 5:
                case 6:
                  return '[В прошлую] dddd, [в] LT';
              }
            } else {
              if (this.day() === 2) {
                return '[Во] dddd, [в] LT';
              } else {
                return '[В] dddd, [в] LT';
              }
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'через %s',
          past: '%s назад',
          s: 'несколько секунд',
          ss: relativeTimeWithPlural,
          m: relativeTimeWithPlural,
          mm: relativeTimeWithPlural,
          h: 'час',
          hh: relativeTimeWithPlural,
          d: 'день',
          dd: relativeTimeWithPlural,
          M: 'месяц',
          MM: relativeTimeWithPlural,
          y: 'год',
          yy: relativeTimeWithPlural
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function isPM(input) {
          return /^(дня|вечера)$/.test(input);
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'ночи';
          } else if (hour < 12) {
            return 'утра';
          } else if (hour < 17) {
            return 'дня';
          } else {
            return 'вечера';
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
              return number + '-й';

            case 'D':
              return number + '-го';

            case 'w':
            case 'W':
              return number + '-я';

            default:
              return number;
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return ru;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/sd.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/sd.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSdJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var months = ['جنوري', 'فيبروري', 'مارچ', 'اپريل', 'مئي', 'جون', 'جولاءِ', 'آگسٽ', 'سيپٽمبر', 'آڪٽوبر', 'نومبر', 'ڊسمبر'];
      var days = ['آچر', 'سومر', 'اڱارو', 'اربع', 'خميس', 'جمع', 'ڇنڇر'];
      var sd = moment.defineLocale('sd', {
        months: months,
        monthsShort: months,
        weekdays: days,
        weekdaysShort: days,
        weekdaysMin: days,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd، D MMMM YYYY HH:mm'
        },
        meridiemParse: /صبح|شام/,
        isPM: function isPM(input) {
          return 'شام' === input;
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'صبح';
          }

          return 'شام';
        },
        calendar: {
          sameDay: '[اڄ] LT',
          nextDay: '[سڀاڻي] LT',
          nextWeek: 'dddd [اڳين هفتي تي] LT',
          lastDay: '[ڪالهه] LT',
          lastWeek: '[گزريل هفتي] dddd [تي] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s پوء',
          past: '%s اڳ',
          s: 'چند سيڪنڊ',
          ss: '%d سيڪنڊ',
          m: 'هڪ منٽ',
          mm: '%d منٽ',
          h: 'هڪ ڪلاڪ',
          hh: '%d ڪلاڪ',
          d: 'هڪ ڏينهن',
          dd: '%d ڏينهن',
          M: 'هڪ مهينو',
          MM: '%d مهينا',
          y: 'هڪ سال',
          yy: '%d سال'
        },
        preparse: function preparse(string) {
          return string.replace(/،/g, ',');
        },
        postformat: function postformat(string) {
          return string.replace(/,/g, '،');
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return sd;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/se.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/se.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSeJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var se = moment.defineLocale('se', {
        months: 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
        monthsShort: 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
        weekdays: 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
        weekdaysShort: 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
        weekdaysMin: 's_v_m_g_d_b_L'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'MMMM D. [b.] YYYY',
          LLL: 'MMMM D. [b.] YYYY [ti.] HH:mm',
          LLLL: 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
        },
        calendar: {
          sameDay: '[otne ti] LT',
          nextDay: '[ihttin ti] LT',
          nextWeek: 'dddd [ti] LT',
          lastDay: '[ikte ti] LT',
          lastWeek: '[ovddit] dddd [ti] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s geažes',
          past: 'maŋit %s',
          s: 'moadde sekunddat',
          ss: '%d sekunddat',
          m: 'okta minuhta',
          mm: '%d minuhtat',
          h: 'okta diimmu',
          hh: '%d diimmut',
          d: 'okta beaivi',
          dd: '%d beaivvit',
          M: 'okta mánnu',
          MM: '%d mánut',
          y: 'okta jahki',
          yy: '%d jagit'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return se;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/si.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/si.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSiJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';
      /*jshint -W100*/

      var si = moment.defineLocale('si', {
        months: 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
        monthsShort: 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
        weekdays: 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
        weekdaysShort: 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
        weekdaysMin: 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'a h:mm',
          LTS: 'a h:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY MMMM D',
          LLL: 'YYYY MMMM D, a h:mm',
          LLLL: 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
        },
        calendar: {
          sameDay: '[අද] LT[ට]',
          nextDay: '[හෙට] LT[ට]',
          nextWeek: 'dddd LT[ට]',
          lastDay: '[ඊයේ] LT[ට]',
          lastWeek: '[පසුගිය] dddd LT[ට]',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%sකින්',
          past: '%sකට පෙර',
          s: 'තත්පර කිහිපය',
          ss: 'තත්පර %d',
          m: 'මිනිත්තුව',
          mm: 'මිනිත්තු %d',
          h: 'පැය',
          hh: 'පැය %d',
          d: 'දිනය',
          dd: 'දින %d',
          M: 'මාසය',
          MM: 'මාස %d',
          y: 'වසර',
          yy: 'වසර %d'
        },
        dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
        ordinal: function ordinal(number) {
          return number + ' වැනි';
        },
        meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
        isPM: function isPM(input) {
          return input === 'ප.ව.' || input === 'පස් වරු';
        },
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours > 11) {
            return isLower ? 'ප.ව.' : 'පස් වරු';
          } else {
            return isLower ? 'පෙ.ව.' : 'පෙර වරු';
          }
        }
      });
      return si;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/sk.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/sk.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSkJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
          monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');

      function plural(n) {
        return n > 1 && n < 5;
      }

      function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';

        switch (key) {
          case 's':
            // a few seconds / in a few seconds / a few seconds ago
            return withoutSuffix || isFuture ? 'pár sekúnd' : 'pár sekundami';

          case 'ss':
            // 9 seconds / in 9 seconds / 9 seconds ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'sekundy' : 'sekúnd');
            } else {
              return result + 'sekundami';
            }

            break;

          case 'm':
            // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minúta' : isFuture ? 'minútu' : 'minútou';

          case 'mm':
            // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'minúty' : 'minút');
            } else {
              return result + 'minútami';
            }

            break;

          case 'h':
            // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';

          case 'hh':
            // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'hodiny' : 'hodín');
            } else {
              return result + 'hodinami';
            }

            break;

          case 'd':
            // a day / in a day / a day ago
            return withoutSuffix || isFuture ? 'deň' : 'dňom';

          case 'dd':
            // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'dni' : 'dní');
            } else {
              return result + 'dňami';
            }

            break;

          case 'M':
            // a month / in a month / a month ago
            return withoutSuffix || isFuture ? 'mesiac' : 'mesiacom';

          case 'MM':
            // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'mesiace' : 'mesiacov');
            } else {
              return result + 'mesiacmi';
            }

            break;

          case 'y':
            // a year / in a year / a year ago
            return withoutSuffix || isFuture ? 'rok' : 'rokom';

          case 'yy':
            // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
              return result + (plural(number) ? 'roky' : 'rokov');
            } else {
              return result + 'rokmi';
            }

            break;
        }
      }

      var sk = moment.defineLocale('sk', {
        months: months,
        monthsShort: monthsShort,
        weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
        weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
        weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd D. MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[dnes o] LT',
          nextDay: '[zajtra o] LT',
          nextWeek: function nextWeek() {
            switch (this.day()) {
              case 0:
                return '[v nedeľu o] LT';

              case 1:
              case 2:
                return '[v] dddd [o] LT';

              case 3:
                return '[v stredu o] LT';

              case 4:
                return '[vo štvrtok o] LT';

              case 5:
                return '[v piatok o] LT';

              case 6:
                return '[v sobotu o] LT';
            }
          },
          lastDay: '[včera o] LT',
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
                return '[minulú nedeľu o] LT';

              case 1:
              case 2:
                return '[minulý] dddd [o] LT';

              case 3:
                return '[minulú stredu o] LT';

              case 4:
              case 5:
                return '[minulý] dddd [o] LT';

              case 6:
                return '[minulú sobotu o] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'za %s',
          past: 'pred %s',
          s: translate,
          ss: translate,
          m: translate,
          mm: translate,
          h: translate,
          hh: translate,
          d: translate,
          dd: translate,
          M: translate,
          MM: translate,
          y: translate,
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return sk;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/sl.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/sl.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSlJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';

        switch (key) {
          case 's':
            return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';

          case 'ss':
            if (number === 1) {
              result += withoutSuffix ? 'sekundo' : 'sekundi';
            } else if (number === 2) {
              result += withoutSuffix || isFuture ? 'sekundi' : 'sekundah';
            } else if (number < 5) {
              result += withoutSuffix || isFuture ? 'sekunde' : 'sekundah';
            } else {
              result += 'sekund';
            }

            return result;

          case 'm':
            return withoutSuffix ? 'ena minuta' : 'eno minuto';

          case 'mm':
            if (number === 1) {
              result += withoutSuffix ? 'minuta' : 'minuto';
            } else if (number === 2) {
              result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
            } else if (number < 5) {
              result += withoutSuffix || isFuture ? 'minute' : 'minutami';
            } else {
              result += withoutSuffix || isFuture ? 'minut' : 'minutami';
            }

            return result;

          case 'h':
            return withoutSuffix ? 'ena ura' : 'eno uro';

          case 'hh':
            if (number === 1) {
              result += withoutSuffix ? 'ura' : 'uro';
            } else if (number === 2) {
              result += withoutSuffix || isFuture ? 'uri' : 'urama';
            } else if (number < 5) {
              result += withoutSuffix || isFuture ? 'ure' : 'urami';
            } else {
              result += withoutSuffix || isFuture ? 'ur' : 'urami';
            }

            return result;

          case 'd':
            return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';

          case 'dd':
            if (number === 1) {
              result += withoutSuffix || isFuture ? 'dan' : 'dnem';
            } else if (number === 2) {
              result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
            } else {
              result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
            }

            return result;

          case 'M':
            return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';

          case 'MM':
            if (number === 1) {
              result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
            } else if (number === 2) {
              result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
            } else if (number < 5) {
              result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
            } else {
              result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
            }

            return result;

          case 'y':
            return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';

          case 'yy':
            if (number === 1) {
              result += withoutSuffix || isFuture ? 'leto' : 'letom';
            } else if (number === 2) {
              result += withoutSuffix || isFuture ? 'leti' : 'letoma';
            } else if (number < 5) {
              result += withoutSuffix || isFuture ? 'leta' : 'leti';
            } else {
              result += withoutSuffix || isFuture ? 'let' : 'leti';
            }

            return result;
        }
      }

      var sl = moment.defineLocale('sl', {
        months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
        weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
        weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[danes ob] LT',
          nextDay: '[jutri ob] LT',
          nextWeek: function nextWeek() {
            switch (this.day()) {
              case 0:
                return '[v] [nedeljo] [ob] LT';

              case 3:
                return '[v] [sredo] [ob] LT';

              case 6:
                return '[v] [soboto] [ob] LT';

              case 1:
              case 2:
              case 4:
              case 5:
                return '[v] dddd [ob] LT';
            }
          },
          lastDay: '[včeraj ob] LT',
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
                return '[prejšnjo] [nedeljo] [ob] LT';

              case 3:
                return '[prejšnjo] [sredo] [ob] LT';

              case 6:
                return '[prejšnjo] [soboto] [ob] LT';

              case 1:
              case 2:
              case 4:
              case 5:
                return '[prejšnji] dddd [ob] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'čez %s',
          past: 'pred %s',
          s: processRelativeTime,
          ss: processRelativeTime,
          m: processRelativeTime,
          mm: processRelativeTime,
          h: processRelativeTime,
          hh: processRelativeTime,
          d: processRelativeTime,
          dd: processRelativeTime,
          M: processRelativeTime,
          MM: processRelativeTime,
          y: processRelativeTime,
          yy: processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return sl;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/sq.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/sq.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSqJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var sq = moment.defineLocale('sq', {
        months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
        monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
        weekdays: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
        weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
        weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
        weekdaysParseExact: true,
        meridiemParse: /PD|MD/,
        isPM: function isPM(input) {
          return input.charAt(0) === 'M';
        },
        meridiem: function meridiem(hours, minutes, isLower) {
          return hours < 12 ? 'PD' : 'MD';
        },
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Sot në] LT',
          nextDay: '[Nesër në] LT',
          nextWeek: 'dddd [në] LT',
          lastDay: '[Dje në] LT',
          lastWeek: 'dddd [e kaluar në] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'në %s',
          past: '%s më parë',
          s: 'disa sekonda',
          ss: '%d sekonda',
          m: 'një minutë',
          mm: '%d minuta',
          h: 'një orë',
          hh: '%d orë',
          d: 'një ditë',
          dd: '%d ditë',
          M: 'një muaj',
          MM: '%d muaj',
          y: 'një vit',
          yy: '%d vite'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return sq;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/sr-cyrl.js":
  /*!***********************************************!*\
    !*** ./node_modules/moment/locale/sr-cyrl.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSrCyrlJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var translator = {
        words: {
          //Different grammatical cases
          ss: ['секунда', 'секунде', 'секунди'],
          m: ['један минут', 'једне минуте'],
          mm: ['минут', 'минуте', 'минута'],
          h: ['један сат', 'једног сата'],
          hh: ['сат', 'сата', 'сати'],
          dd: ['дан', 'дана', 'дана'],
          MM: ['месец', 'месеца', 'месеци'],
          yy: ['година', 'године', 'година']
        },
        correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
          return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
        },
        translate: function translate(number, withoutSuffix, key) {
          var wordKey = translator.words[key];

          if (key.length === 1) {
            return withoutSuffix ? wordKey[0] : wordKey[1];
          } else {
            return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
          }
        }
      };
      var srCyrl = moment.defineLocale('sr-cyrl', {
        months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
        monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
        monthsParseExact: true,
        weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
        weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
        weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[данас у] LT',
          nextDay: '[сутра у] LT',
          nextWeek: function nextWeek() {
            switch (this.day()) {
              case 0:
                return '[у] [недељу] [у] LT';

              case 3:
                return '[у] [среду] [у] LT';

              case 6:
                return '[у] [суботу] [у] LT';

              case 1:
              case 2:
              case 4:
              case 5:
                return '[у] dddd [у] LT';
            }
          },
          lastDay: '[јуче у] LT',
          lastWeek: function lastWeek() {
            var lastWeekDays = ['[прошле] [недеље] [у] LT', '[прошлог] [понедељка] [у] LT', '[прошлог] [уторка] [у] LT', '[прошле] [среде] [у] LT', '[прошлог] [четвртка] [у] LT', '[прошлог] [петка] [у] LT', '[прошле] [суботе] [у] LT'];
            return lastWeekDays[this.day()];
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'за %s',
          past: 'пре %s',
          s: 'неколико секунди',
          ss: translator.translate,
          m: translator.translate,
          mm: translator.translate,
          h: translator.translate,
          hh: translator.translate,
          d: 'дан',
          dd: translator.translate,
          M: 'месец',
          MM: translator.translate,
          y: 'годину',
          yy: translator.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return srCyrl;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/sr.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/sr.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSrJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var translator = {
        words: {
          //Different grammatical cases
          ss: ['sekunda', 'sekunde', 'sekundi'],
          m: ['jedan minut', 'jedne minute'],
          mm: ['minut', 'minute', 'minuta'],
          h: ['jedan sat', 'jednog sata'],
          hh: ['sat', 'sata', 'sati'],
          dd: ['dan', 'dana', 'dana'],
          MM: ['mesec', 'meseca', 'meseci'],
          yy: ['godina', 'godine', 'godina']
        },
        correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
          return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
        },
        translate: function translate(number, withoutSuffix, key) {
          var wordKey = translator.words[key];

          if (key.length === 1) {
            return withoutSuffix ? wordKey[0] : wordKey[1];
          } else {
            return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
          }
        }
      };
      var sr = moment.defineLocale('sr', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[danas u] LT',
          nextDay: '[sutra u] LT',
          nextWeek: function nextWeek() {
            switch (this.day()) {
              case 0:
                return '[u] [nedelju] [u] LT';

              case 3:
                return '[u] [sredu] [u] LT';

              case 6:
                return '[u] [subotu] [u] LT';

              case 1:
              case 2:
              case 4:
              case 5:
                return '[u] dddd [u] LT';
            }
          },
          lastDay: '[juče u] LT',
          lastWeek: function lastWeek() {
            var lastWeekDays = ['[prošle] [nedelje] [u] LT', '[prošlog] [ponedeljka] [u] LT', '[prošlog] [utorka] [u] LT', '[prošle] [srede] [u] LT', '[prošlog] [četvrtka] [u] LT', '[prošlog] [petka] [u] LT', '[prošle] [subote] [u] LT'];
            return lastWeekDays[this.day()];
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'za %s',
          past: 'pre %s',
          s: 'nekoliko sekundi',
          ss: translator.translate,
          m: translator.translate,
          mm: translator.translate,
          h: translator.translate,
          hh: translator.translate,
          d: 'dan',
          dd: translator.translate,
          M: 'mesec',
          MM: translator.translate,
          y: 'godinu',
          yy: translator.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return sr;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ss.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ss.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSsJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var ss = moment.defineLocale('ss', {
        months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
        monthsShort: 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
        weekdays: 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
        weekdaysShort: 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
        weekdaysMin: 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendar: {
          sameDay: '[Namuhla nga] LT',
          nextDay: '[Kusasa nga] LT',
          nextWeek: 'dddd [nga] LT',
          lastDay: '[Itolo nga] LT',
          lastWeek: 'dddd [leliphelile] [nga] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'nga %s',
          past: 'wenteka nga %s',
          s: 'emizuzwana lomcane',
          ss: '%d mzuzwana',
          m: 'umzuzu',
          mm: '%d emizuzu',
          h: 'lihora',
          hh: '%d emahora',
          d: 'lilanga',
          dd: '%d emalanga',
          M: 'inyanga',
          MM: '%d tinyanga',
          y: 'umnyaka',
          yy: '%d iminyaka'
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours < 11) {
            return 'ekuseni';
          } else if (hours < 15) {
            return 'emini';
          } else if (hours < 19) {
            return 'entsambama';
          } else {
            return 'ebusuku';
          }
        },
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'ekuseni') {
            return hour;
          } else if (meridiem === 'emini') {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {
            if (hour === 0) {
              return 0;
            }

            return hour + 12;
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: '%d',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return ss;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/sv.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/sv.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSvJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var sv = moment.defineLocale('sv', {
        months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
        weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
        weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [kl.] HH:mm',
          LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
          lll: 'D MMM YYYY HH:mm',
          llll: 'ddd D MMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Idag] LT',
          nextDay: '[Imorgon] LT',
          lastDay: '[Igår] LT',
          nextWeek: '[På] dddd LT',
          lastWeek: '[I] dddd[s] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'om %s',
          past: 'för %s sedan',
          s: 'några sekunder',
          ss: '%d sekunder',
          m: 'en minut',
          mm: '%d minuter',
          h: 'en timme',
          hh: '%d timmar',
          d: 'en dag',
          dd: '%d dagar',
          M: 'en månad',
          MM: '%d månader',
          y: 'ett år',
          yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = ~~(number % 100 / 10) === 1 ? 'e' : b === 1 ? 'a' : b === 2 ? 'a' : b === 3 ? 'e' : 'e';
          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return sv;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/sw.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/sw.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSwJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var sw = moment.defineLocale('sw', {
        months: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
        weekdaysShort: 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
        weekdaysMin: 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[leo saa] LT',
          nextDay: '[kesho saa] LT',
          nextWeek: '[wiki ijayo] dddd [saat] LT',
          lastDay: '[jana] LT',
          lastWeek: '[wiki iliyopita] dddd [saat] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s baadaye',
          past: 'tokea %s',
          s: 'hivi punde',
          ss: 'sekunde %d',
          m: 'dakika moja',
          mm: 'dakika %d',
          h: 'saa limoja',
          hh: 'masaa %d',
          d: 'siku moja',
          dd: 'masiku %d',
          M: 'mwezi mmoja',
          MM: 'miezi %d',
          y: 'mwaka mmoja',
          yy: 'miaka %d'
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return sw;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ta.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ta.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleTaJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var symbolMap = {
        '1': '௧',
        '2': '௨',
        '3': '௩',
        '4': '௪',
        '5': '௫',
        '6': '௬',
        '7': '௭',
        '8': '௮',
        '9': '௯',
        '0': '௦'
      },
          numberMap = {
        '௧': '1',
        '௨': '2',
        '௩': '3',
        '௪': '4',
        '௫': '5',
        '௬': '6',
        '௭': '7',
        '௮': '8',
        '௯': '9',
        '௦': '0'
      };
      var ta = moment.defineLocale('ta', {
        months: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        monthsShort: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        weekdays: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
        weekdaysShort: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
        weekdaysMin: 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, HH:mm',
          LLLL: 'dddd, D MMMM YYYY, HH:mm'
        },
        calendar: {
          sameDay: '[இன்று] LT',
          nextDay: '[நாளை] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[நேற்று] LT',
          lastWeek: '[கடந்த வாரம்] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s இல்',
          past: '%s முன்',
          s: 'ஒரு சில விநாடிகள்',
          ss: '%d விநாடிகள்',
          m: 'ஒரு நிமிடம்',
          mm: '%d நிமிடங்கள்',
          h: 'ஒரு மணி நேரம்',
          hh: '%d மணி நேரம்',
          d: 'ஒரு நாள்',
          dd: '%d நாட்கள்',
          M: 'ஒரு மாதம்',
          MM: '%d மாதங்கள்',
          y: 'ஒரு வருடம்',
          yy: '%d ஆண்டுகள்'
        },
        dayOfMonthOrdinalParse: /\d{1,2}வது/,
        ordinal: function ordinal(number) {
          return number + 'வது';
        },
        preparse: function preparse(string) {
          return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
            return numberMap[match];
          });
        },
        postformat: function postformat(string) {
          return string.replace(/\d/g, function (match) {
            return symbolMap[match];
          });
        },
        // refer http://ta.wikipedia.org/s/1er1
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 2) {
            return ' யாமம்';
          } else if (hour < 6) {
            return ' வைகறை'; // வைகறை
          } else if (hour < 10) {
            return ' காலை'; // காலை
          } else if (hour < 14) {
            return ' நண்பகல்'; // நண்பகல்
          } else if (hour < 18) {
            return ' எற்பாடு'; // எற்பாடு
          } else if (hour < 22) {
            return ' மாலை'; // மாலை
          } else {
            return ' யாமம்';
          }
        },
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'யாமம்') {
            return hour < 2 ? hour : hour + 12;
          } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
            return hour;
          } else if (meridiem === 'நண்பகல்') {
            return hour >= 10 ? hour : hour + 12;
          } else {
            return hour + 12;
          }
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return ta;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/te.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/te.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleTeJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var te = moment.defineLocale('te', {
        months: 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
        monthsShort: 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
        monthsParseExact: true,
        weekdays: 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
        weekdaysShort: 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
        weekdaysMin: 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm',
          LTS: 'A h:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm',
          LLLL: 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar: {
          sameDay: '[నేడు] LT',
          nextDay: '[రేపు] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[నిన్న] LT',
          lastWeek: '[గత] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s లో',
          past: '%s క్రితం',
          s: 'కొన్ని క్షణాలు',
          ss: '%d సెకన్లు',
          m: 'ఒక నిమిషం',
          mm: '%d నిమిషాలు',
          h: 'ఒక గంట',
          hh: '%d గంటలు',
          d: 'ఒక రోజు',
          dd: '%d రోజులు',
          M: 'ఒక నెల',
          MM: '%d నెలలు',
          y: 'ఒక సంవత్సరం',
          yy: '%d సంవత్సరాలు'
        },
        dayOfMonthOrdinalParse: /\d{1,2}వ/,
        ordinal: '%dవ',
        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'రాత్రి') {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === 'ఉదయం') {
            return hour;
          } else if (meridiem === 'మధ్యాహ్నం') {
            return hour >= 10 ? hour : hour + 12;
          } else if (meridiem === 'సాయంత్రం') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'రాత్రి';
          } else if (hour < 10) {
            return 'ఉదయం';
          } else if (hour < 17) {
            return 'మధ్యాహ్నం';
          } else if (hour < 20) {
            return 'సాయంత్రం';
          } else {
            return 'రాత్రి';
          }
        },
        week: {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        }
      });
      return te;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/tet.js":
  /*!*******************************************!*\
    !*** ./node_modules/moment/locale/tet.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleTetJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var tet = moment.defineLocale('tet', {
        months: 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays: 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu'.split('_'),
        weekdaysShort: 'Dom_Seg_Ters_Kua_Kint_Sest_Sab'.split('_'),
        weekdaysMin: 'Do_Seg_Te_Ku_Ki_Ses_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Ohin iha] LT',
          nextDay: '[Aban iha] LT',
          nextWeek: 'dddd [iha] LT',
          lastDay: '[Horiseik iha] LT',
          lastWeek: 'dddd [semana kotuk] [iha] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'iha %s',
          past: '%s liuba',
          s: 'minutu balun',
          ss: 'minutu %d',
          m: 'minutu ida',
          mm: 'minutu %d',
          h: 'oras ida',
          hh: 'oras %d',
          d: 'loron ida',
          dd: 'loron %d',
          M: 'fulan ida',
          MM: 'fulan %d',
          y: 'tinan ida',
          yy: 'tinan %d'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return tet;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/tg.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/tg.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleTgJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var suffixes = {
        0: '-ум',
        1: '-ум',
        2: '-юм',
        3: '-юм',
        4: '-ум',
        5: '-ум',
        6: '-ум',
        7: '-ум',
        8: '-ум',
        9: '-ум',
        10: '-ум',
        12: '-ум',
        13: '-ум',
        20: '-ум',
        30: '-юм',
        40: '-ум',
        50: '-ум',
        60: '-ум',
        70: '-ум',
        80: '-ум',
        90: '-ум',
        100: '-ум'
      };
      var tg = moment.defineLocale('tg', {
        months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
        monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
        weekdays: 'якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе'.split('_'),
        weekdaysShort: 'яшб_дшб_сшб_чшб_пшб_ҷум_шнб'.split('_'),
        weekdaysMin: 'яш_дш_сш_чш_пш_ҷм_шб'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Имрӯз соати] LT',
          nextDay: '[Пагоҳ соати] LT',
          lastDay: '[Дирӯз соати] LT',
          nextWeek: 'dddd[и] [ҳафтаи оянда соати] LT',
          lastWeek: 'dddd[и] [ҳафтаи гузашта соати] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'баъди %s',
          past: '%s пеш',
          s: 'якчанд сония',
          m: 'як дақиқа',
          mm: '%d дақиқа',
          h: 'як соат',
          hh: '%d соат',
          d: 'як рӯз',
          dd: '%d рӯз',
          M: 'як моҳ',
          MM: '%d моҳ',
          y: 'як сол',
          yy: '%d сол'
        },
        meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'шаб') {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === 'субҳ') {
            return hour;
          } else if (meridiem === 'рӯз') {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === 'бегоҳ') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'шаб';
          } else if (hour < 11) {
            return 'субҳ';
          } else if (hour < 16) {
            return 'рӯз';
          } else if (hour < 19) {
            return 'бегоҳ';
          } else {
            return 'шаб';
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
        ordinal: function ordinal(number) {
          var a = number % 10,
              b = number >= 100 ? 100 : null;
          return number + (suffixes[number] || suffixes[a] || suffixes[b]);
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 1th is the first week of the year.

        }
      });
      return tg;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/th.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/th.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleThJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var th = moment.defineLocale('th', {
        months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
        monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
        monthsParseExact: true,
        weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
        weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
        // yes, three characters difference
        weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY เวลา H:mm',
          LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: function isPM(input) {
          return input === 'หลังเที่ยง';
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'ก่อนเที่ยง';
          } else {
            return 'หลังเที่ยง';
          }
        },
        calendar: {
          sameDay: '[วันนี้ เวลา] LT',
          nextDay: '[พรุ่งนี้ เวลา] LT',
          nextWeek: 'dddd[หน้า เวลา] LT',
          lastDay: '[เมื่อวานนี้ เวลา] LT',
          lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'อีก %s',
          past: '%sที่แล้ว',
          s: 'ไม่กี่วินาที',
          ss: '%d วินาที',
          m: '1 นาที',
          mm: '%d นาที',
          h: '1 ชั่วโมง',
          hh: '%d ชั่วโมง',
          d: '1 วัน',
          dd: '%d วัน',
          M: '1 เดือน',
          MM: '%d เดือน',
          y: '1 ปี',
          yy: '%d ปี'
        }
      });
      return th;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/tl-ph.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/tl-ph.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleTlPhJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var tlPh = moment.defineLocale('tl-ph', {
        months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
        monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
        weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
        weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
        weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'MM/D/YYYY',
          LL: 'MMMM D, YYYY',
          LLL: 'MMMM D, YYYY HH:mm',
          LLLL: 'dddd, MMMM DD, YYYY HH:mm'
        },
        calendar: {
          sameDay: 'LT [ngayong araw]',
          nextDay: '[Bukas ng] LT',
          nextWeek: 'LT [sa susunod na] dddd',
          lastDay: 'LT [kahapon]',
          lastWeek: 'LT [noong nakaraang] dddd',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'sa loob ng %s',
          past: '%s ang nakalipas',
          s: 'ilang segundo',
          ss: '%d segundo',
          m: 'isang minuto',
          mm: '%d minuto',
          h: 'isang oras',
          hh: '%d oras',
          d: 'isang araw',
          dd: '%d araw',
          M: 'isang buwan',
          MM: '%d buwan',
          y: 'isang taon',
          yy: '%d taon'
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function ordinal(number) {
          return number;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return tlPh;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/tlh.js":
  /*!*******************************************!*\
    !*** ./node_modules/moment/locale/tlh.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleTlhJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var numbersNouns = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');

      function translateFuture(output) {
        var time = output;
        time = output.indexOf('jaj') !== -1 ? time.slice(0, -3) + 'leS' : output.indexOf('jar') !== -1 ? time.slice(0, -3) + 'waQ' : output.indexOf('DIS') !== -1 ? time.slice(0, -3) + 'nem' : time + ' pIq';
        return time;
      }

      function translatePast(output) {
        var time = output;
        time = output.indexOf('jaj') !== -1 ? time.slice(0, -3) + 'Hu’' : output.indexOf('jar') !== -1 ? time.slice(0, -3) + 'wen' : output.indexOf('DIS') !== -1 ? time.slice(0, -3) + 'ben' : time + ' ret';
        return time;
      }

      function translate(number, withoutSuffix, string, isFuture) {
        var numberNoun = numberAsNoun(number);

        switch (string) {
          case 'ss':
            return numberNoun + ' lup';

          case 'mm':
            return numberNoun + ' tup';

          case 'hh':
            return numberNoun + ' rep';

          case 'dd':
            return numberNoun + ' jaj';

          case 'MM':
            return numberNoun + ' jar';

          case 'yy':
            return numberNoun + ' DIS';
        }
      }

      function numberAsNoun(number) {
        var hundred = Math.floor(number % 1000 / 100),
            ten = Math.floor(number % 100 / 10),
            one = number % 10,
            word = '';

        if (hundred > 0) {
          word += numbersNouns[hundred] + 'vatlh';
        }

        if (ten > 0) {
          word += (word !== '' ? ' ' : '') + numbersNouns[ten] + 'maH';
        }

        if (one > 0) {
          word += (word !== '' ? ' ' : '') + numbersNouns[one];
        }

        return word === '' ? 'pagh' : word;
      }

      var tlh = moment.defineLocale('tlh', {
        months: 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split('_'),
        monthsShort: 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
        monthsParseExact: true,
        weekdays: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysShort: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysMin: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[DaHjaj] LT',
          nextDay: '[wa’leS] LT',
          nextWeek: 'LLL',
          lastDay: '[wa’Hu’] LT',
          lastWeek: 'LLL',
          sameElse: 'L'
        },
        relativeTime: {
          future: translateFuture,
          past: translatePast,
          s: 'puS lup',
          ss: translate,
          m: 'wa’ tup',
          mm: translate,
          h: 'wa’ rep',
          hh: translate,
          d: 'wa’ jaj',
          dd: translate,
          M: 'wa’ jar',
          MM: translate,
          y: 'wa’ DIS',
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return tlh;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/tr.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/tr.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleTrJs(module, exports, __webpack_require__) {
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var suffixes = {
        1: '\'inci',
        5: '\'inci',
        8: '\'inci',
        70: '\'inci',
        80: '\'inci',
        2: '\'nci',
        7: '\'nci',
        20: '\'nci',
        50: '\'nci',
        3: '\'üncü',
        4: '\'üncü',
        100: '\'üncü',
        6: '\'ncı',
        9: '\'uncu',
        10: '\'uncu',
        30: '\'uncu',
        60: '\'ıncı',
        90: '\'ıncı'
      };
      var tr = moment.defineLocale('tr', {
        months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
        monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
        weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
        weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
        weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[bugün saat] LT',
          nextDay: '[yarın saat] LT',
          nextWeek: '[gelecek] dddd [saat] LT',
          lastDay: '[dün] LT',
          lastWeek: '[geçen] dddd [saat] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s sonra',
          past: '%s önce',
          s: 'birkaç saniye',
          ss: '%d saniye',
          m: 'bir dakika',
          mm: '%d dakika',
          h: 'bir saat',
          hh: '%d saat',
          d: 'bir gün',
          dd: '%d gün',
          M: 'bir ay',
          MM: '%d ay',
          y: 'bir yıl',
          yy: '%d yıl'
        },
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'd':
            case 'D':
            case 'Do':
            case 'DD':
              return number;

            default:
              if (number === 0) {
                // special case for zero
                return number + '\'ıncı';
              }

              var a = number % 10,
                  b = number % 100 - a,
                  c = number >= 100 ? 100 : null;
              return number + (suffixes[a] || suffixes[b] || suffixes[c]);
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return tr;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/tzl.js":
  /*!*******************************************!*\
    !*** ./node_modules/moment/locale/tzl.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleTzlJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict'; // After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
      // This is currently too difficult (maybe even impossible) to add.

      var tzl = moment.defineLocale('tzl', {
        months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
        weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
        weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
        weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM [dallas] YYYY',
          LLL: 'D. MMMM [dallas] YYYY HH.mm',
          LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
        },
        meridiemParse: /d\'o|d\'a/i,
        isPM: function isPM(input) {
          return 'd\'o' === input.toLowerCase();
        },
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours > 11) {
            return isLower ? 'd\'o' : 'D\'O';
          } else {
            return isLower ? 'd\'a' : 'D\'A';
          }
        },
        calendar: {
          sameDay: '[oxhi à] LT',
          nextDay: '[demà à] LT',
          nextWeek: 'dddd [à] LT',
          lastDay: '[ieiri à] LT',
          lastWeek: '[sür el] dddd [lasteu à] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'osprei %s',
          past: 'ja%s',
          s: processRelativeTime,
          ss: processRelativeTime,
          m: processRelativeTime,
          mm: processRelativeTime,
          h: processRelativeTime,
          hh: processRelativeTime,
          d: processRelativeTime,
          dd: processRelativeTime,
          M: processRelativeTime,
          MM: processRelativeTime,
          y: processRelativeTime,
          yy: processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });

      function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
          's': ['viensas secunds', '\'iensas secunds'],
          'ss': [number + ' secunds', '' + number + ' secunds'],
          'm': ['\'n míut', '\'iens míut'],
          'mm': [number + ' míuts', '' + number + ' míuts'],
          'h': ['\'n þora', '\'iensa þora'],
          'hh': [number + ' þoras', '' + number + ' þoras'],
          'd': ['\'n ziua', '\'iensa ziua'],
          'dd': [number + ' ziuas', '' + number + ' ziuas'],
          'M': ['\'n mes', '\'iens mes'],
          'MM': [number + ' mesen', '' + number + ' mesen'],
          'y': ['\'n ar', '\'iens ar'],
          'yy': [number + ' ars', '' + number + ' ars']
        };
        return isFuture ? format[key][0] : withoutSuffix ? format[key][0] : format[key][1];
      }

      return tzl;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/tzm-latn.js":
  /*!************************************************!*\
    !*** ./node_modules/moment/locale/tzm-latn.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleTzmLatnJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var tzmLatn = moment.defineLocale('tzm-latn', {
        months: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        monthsShort: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[asdkh g] LT',
          nextDay: '[aska g] LT',
          nextWeek: 'dddd [g] LT',
          lastDay: '[assant g] LT',
          lastWeek: 'dddd [g] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'dadkh s yan %s',
          past: 'yan %s',
          s: 'imik',
          ss: '%d imik',
          m: 'minuḍ',
          mm: '%d minuḍ',
          h: 'saɛa',
          hh: '%d tassaɛin',
          d: 'ass',
          dd: '%d ossan',
          M: 'ayowr',
          MM: '%d iyyirn',
          y: 'asgas',
          yy: '%d isgasn'
        },
        week: {
          dow: 6,
          // Saturday is the first day of the week.
          doy: 12 // The week that contains Jan 12th is the first week of the year.

        }
      });
      return tzmLatn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/tzm.js":
  /*!*******************************************!*\
    !*** ./node_modules/moment/locale/tzm.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleTzmJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var tzm = moment.defineLocale('tzm', {
        months: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
        monthsShort: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
        weekdays: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        weekdaysShort: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        weekdaysMin: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
          nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
          nextWeek: 'dddd [ⴴ] LT',
          lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
          lastWeek: 'dddd [ⴴ] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
          past: 'ⵢⴰⵏ %s',
          s: 'ⵉⵎⵉⴽ',
          ss: '%d ⵉⵎⵉⴽ',
          m: 'ⵎⵉⵏⵓⴺ',
          mm: '%d ⵎⵉⵏⵓⴺ',
          h: 'ⵙⴰⵄⴰ',
          hh: '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
          d: 'ⴰⵙⵙ',
          dd: '%d oⵙⵙⴰⵏ',
          M: 'ⴰⵢoⵓⵔ',
          MM: '%d ⵉⵢⵢⵉⵔⵏ',
          y: 'ⴰⵙⴳⴰⵙ',
          yy: '%d ⵉⵙⴳⴰⵙⵏ'
        },
        week: {
          dow: 6,
          // Saturday is the first day of the week.
          doy: 12 // The week that contains Jan 12th is the first week of the year.

        }
      });
      return tzm;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ug-cn.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/ug-cn.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleUgCnJs(module, exports, __webpack_require__) {
    //! moment.js language configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var ugCn = moment.defineLocale('ug-cn', {
        months: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),
        monthsShort: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),
        weekdays: 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split('_'),
        weekdaysShort: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
        weekdaysMin: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'YYYY-يىلىM-ئاينىڭD-كۈنى',
          LLL: 'YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm',
          LLLL: 'dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm'
        },
        meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === 'يېرىم كېچە' || meridiem === 'سەھەر' || meridiem === 'چۈشتىن بۇرۇن') {
            return hour;
          } else if (meridiem === 'چۈشتىن كېيىن' || meridiem === 'كەچ') {
            return hour + 12;
          } else {
            return hour >= 11 ? hour : hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          var hm = hour * 100 + minute;

          if (hm < 600) {
            return 'يېرىم كېچە';
          } else if (hm < 900) {
            return 'سەھەر';
          } else if (hm < 1130) {
            return 'چۈشتىن بۇرۇن';
          } else if (hm < 1230) {
            return 'چۈش';
          } else if (hm < 1800) {
            return 'چۈشتىن كېيىن';
          } else {
            return 'كەچ';
          }
        },
        calendar: {
          sameDay: '[بۈگۈن سائەت] LT',
          nextDay: '[ئەتە سائەت] LT',
          nextWeek: '[كېلەركى] dddd [سائەت] LT',
          lastDay: '[تۆنۈگۈن] LT',
          lastWeek: '[ئالدىنقى] dddd [سائەت] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s كېيىن',
          past: '%s بۇرۇن',
          s: 'نەچچە سېكونت',
          ss: '%d سېكونت',
          m: 'بىر مىنۇت',
          mm: '%d مىنۇت',
          h: 'بىر سائەت',
          hh: '%d سائەت',
          d: 'بىر كۈن',
          dd: '%d كۈن',
          M: 'بىر ئاي',
          MM: '%d ئاي',
          y: 'بىر يىل',
          yy: '%d يىل'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
              return number + '-كۈنى';

            case 'w':
            case 'W':
              return number + '-ھەپتە';

            default:
              return number;
          }
        },
        preparse: function preparse(string) {
          return string.replace(/،/g, ',');
        },
        postformat: function postformat(string) {
          return string.replace(/,/g, '،');
        },
        week: {
          // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 1st is the first week of the year.

        }
      });
      return ugCn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/uk.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/uk.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleUkJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
      }

      function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
          'ss': withoutSuffix ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
          'mm': withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
          'hh': withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
          'dd': 'день_дні_днів',
          'MM': 'місяць_місяці_місяців',
          'yy': 'рік_роки_років'
        };

        if (key === 'm') {
          return withoutSuffix ? 'хвилина' : 'хвилину';
        } else if (key === 'h') {
          return withoutSuffix ? 'година' : 'годину';
        } else {
          return number + ' ' + plural(format[key], +number);
        }
      }

      function weekdaysCaseReplace(m, format) {
        var weekdays = {
          'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
          'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
          'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
        };

        if (m === true) {
          return weekdays['nominative'].slice(1, 7).concat(weekdays['nominative'].slice(0, 1));
        }

        if (!m) {
          return weekdays['nominative'];
        }

        var nounCase = /(\[[ВвУу]\]) ?dddd/.test(format) ? 'accusative' : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(format) ? 'genitive' : 'nominative';
        return weekdays[nounCase][m.day()];
      }

      function processHoursFunction(str) {
        return function () {
          return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
        };
      }

      var uk = moment.defineLocale('uk', {
        months: {
          'format': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
          'standalone': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
        },
        monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
        weekdays: weekdaysCaseReplace,
        weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY р.',
          LLL: 'D MMMM YYYY р., HH:mm',
          LLLL: 'dddd, D MMMM YYYY р., HH:mm'
        },
        calendar: {
          sameDay: processHoursFunction('[Сьогодні '),
          nextDay: processHoursFunction('[Завтра '),
          lastDay: processHoursFunction('[Вчора '),
          nextWeek: processHoursFunction('[У] dddd ['),
          lastWeek: function lastWeek() {
            switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                return processHoursFunction('[Минулої] dddd [').call(this);

              case 1:
              case 2:
              case 4:
                return processHoursFunction('[Минулого] dddd [').call(this);
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'за %s',
          past: '%s тому',
          s: 'декілька секунд',
          ss: relativeTimeWithPlural,
          m: relativeTimeWithPlural,
          mm: relativeTimeWithPlural,
          h: 'годину',
          hh: relativeTimeWithPlural,
          d: 'день',
          dd: relativeTimeWithPlural,
          M: 'місяць',
          MM: relativeTimeWithPlural,
          y: 'рік',
          yy: relativeTimeWithPlural
        },
        // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function isPM(input) {
          return /^(дня|вечора)$/.test(input);
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 4) {
            return 'ночі';
          } else if (hour < 12) {
            return 'ранку';
          } else if (hour < 17) {
            return 'дня';
          } else {
            return 'вечора';
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
              return number + '-й';

            case 'D':
              return number + '-го';

            default:
              return number;
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return uk;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/ur.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/ur.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleUrJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var months = ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'];
      var days = ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'];
      var ur = moment.defineLocale('ur', {
        months: months,
        monthsShort: months,
        weekdays: days,
        weekdaysShort: days,
        weekdaysMin: days,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd، D MMMM YYYY HH:mm'
        },
        meridiemParse: /صبح|شام/,
        isPM: function isPM(input) {
          return 'شام' === input;
        },
        meridiem: function meridiem(hour, minute, isLower) {
          if (hour < 12) {
            return 'صبح';
          }

          return 'شام';
        },
        calendar: {
          sameDay: '[آج بوقت] LT',
          nextDay: '[کل بوقت] LT',
          nextWeek: 'dddd [بوقت] LT',
          lastDay: '[گذشتہ روز بوقت] LT',
          lastWeek: '[گذشتہ] dddd [بوقت] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s بعد',
          past: '%s قبل',
          s: 'چند سیکنڈ',
          ss: '%d سیکنڈ',
          m: 'ایک منٹ',
          mm: '%d منٹ',
          h: 'ایک گھنٹہ',
          hh: '%d گھنٹے',
          d: 'ایک دن',
          dd: '%d دن',
          M: 'ایک ماہ',
          MM: '%d ماہ',
          y: 'ایک سال',
          yy: '%d سال'
        },
        preparse: function preparse(string) {
          return string.replace(/،/g, ',');
        },
        postformat: function postformat(string) {
          return string.replace(/,/g, '،');
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return ur;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/uz-latn.js":
  /*!***********************************************!*\
    !*** ./node_modules/moment/locale/uz-latn.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleUzLatnJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var uzLatn = moment.defineLocale('uz-latn', {
        months: 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split('_'),
        monthsShort: 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
        weekdays: 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split('_'),
        weekdaysShort: 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
        weekdaysMin: 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'D MMMM YYYY, dddd HH:mm'
        },
        calendar: {
          sameDay: '[Bugun soat] LT [da]',
          nextDay: '[Ertaga] LT [da]',
          nextWeek: 'dddd [kuni soat] LT [da]',
          lastDay: '[Kecha soat] LT [da]',
          lastWeek: '[O\'tgan] dddd [kuni soat] LT [da]',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'Yaqin %s ichida',
          past: 'Bir necha %s oldin',
          s: 'soniya',
          ss: '%d soniya',
          m: 'bir daqiqa',
          mm: '%d daqiqa',
          h: 'bir soat',
          hh: '%d soat',
          d: 'bir kun',
          dd: '%d kun',
          M: 'bir oy',
          MM: '%d oy',
          y: 'bir yil',
          yy: '%d yil'
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 7th is the first week of the year.

        }
      });
      return uzLatn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/uz.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/uz.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleUzJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var uz = moment.defineLocale('uz', {
        months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
        monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
        weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
        weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
        weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'D MMMM YYYY, dddd HH:mm'
        },
        calendar: {
          sameDay: '[Бугун соат] LT [да]',
          nextDay: '[Эртага] LT [да]',
          nextWeek: 'dddd [куни соат] LT [да]',
          lastDay: '[Кеча соат] LT [да]',
          lastWeek: '[Утган] dddd [куни соат] LT [да]',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'Якин %s ичида',
          past: 'Бир неча %s олдин',
          s: 'фурсат',
          ss: '%d фурсат',
          m: 'бир дакика',
          mm: '%d дакика',
          h: 'бир соат',
          hh: '%d соат',
          d: 'бир кун',
          dd: '%d кун',
          M: 'бир ой',
          MM: '%d ой',
          y: 'бир йил',
          yy: '%d йил'
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 7 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return uz;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/vi.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/vi.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleViJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var vi = moment.defineLocale('vi', {
        months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
        monthsShort: 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
        monthsParseExact: true,
        weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
        weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysParseExact: true,
        meridiemParse: /sa|ch/i,
        isPM: function isPM(input) {
          return /^ch$/i.test(input);
        },
        meridiem: function meridiem(hours, minutes, isLower) {
          if (hours < 12) {
            return isLower ? 'sa' : 'SA';
          } else {
            return isLower ? 'ch' : 'CH';
          }
        },
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM [năm] YYYY',
          LLL: 'D MMMM [năm] YYYY HH:mm',
          LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
          l: 'DD/M/YYYY',
          ll: 'D MMM YYYY',
          lll: 'D MMM YYYY HH:mm',
          llll: 'ddd, D MMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Hôm nay lúc] LT',
          nextDay: '[Ngày mai lúc] LT',
          nextWeek: 'dddd [tuần tới lúc] LT',
          lastDay: '[Hôm qua lúc] LT',
          lastWeek: 'dddd [tuần rồi lúc] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s tới',
          past: '%s trước',
          s: 'vài giây',
          ss: '%d giây',
          m: 'một phút',
          mm: '%d phút',
          h: 'một giờ',
          hh: '%d giờ',
          d: 'một ngày',
          dd: '%d ngày',
          M: 'một tháng',
          MM: '%d tháng',
          y: 'một năm',
          yy: '%d năm'
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function ordinal(number) {
          return number;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return vi;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/x-pseudo.js":
  /*!************************************************!*\
    !*** ./node_modules/moment/locale/x-pseudo.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleXPseudoJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var xPseudo = moment.defineLocale('x-pseudo', {
        months: 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split('_'),
        monthsShort: 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
        monthsParseExact: true,
        weekdays: 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
        weekdaysShort: 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
        weekdaysMin: 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: 'HH:mm',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[T~ódá~ý át] LT',
          nextDay: '[T~ómó~rró~w át] LT',
          nextWeek: 'dddd [át] LT',
          lastDay: '[Ý~ést~érdá~ý át] LT',
          lastWeek: '[L~ást] dddd [át] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'í~ñ %s',
          past: '%s á~gó',
          s: 'á ~féw ~sécó~ñds',
          ss: '%d s~écóñ~ds',
          m: 'á ~míñ~úté',
          mm: '%d m~íñú~tés',
          h: 'á~ñ hó~úr',
          hh: '%d h~óúrs',
          d: 'á ~dáý',
          dd: '%d d~áýs',
          M: 'á ~móñ~th',
          MM: '%d m~óñt~hs',
          y: 'á ~ýéár',
          yy: '%d ý~éárs'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function ordinal(number) {
          var b = number % 10,
              output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return number + output;
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return xPseudo;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/yo.js":
  /*!******************************************!*\
    !*** ./node_modules/moment/locale/yo.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleYoJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var yo = moment.defineLocale('yo', {
        months: 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split('_'),
        monthsShort: 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split('_'),
        weekdays: 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
        weekdaysShort: 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
        weekdaysMin: 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendar: {
          sameDay: '[Ònì ni] LT',
          nextDay: '[Ọ̀la ni] LT',
          nextWeek: 'dddd [Ọsẹ̀ tón\'bọ] [ni] LT',
          lastDay: '[Àna ni] LT',
          lastWeek: 'dddd [Ọsẹ̀ tólọ́] [ni] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'ní %s',
          past: '%s kọjá',
          s: 'ìsẹjú aayá die',
          ss: 'aayá %d',
          m: 'ìsẹjú kan',
          mm: 'ìsẹjú %d',
          h: 'wákati kan',
          hh: 'wákati %d',
          d: 'ọjọ́ kan',
          dd: 'ọjọ́ %d',
          M: 'osù kan',
          MM: 'osù %d',
          y: 'ọdún kan',
          yy: 'ọdún %d'
        },
        dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
        ordinal: 'ọjọ́ %d',
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return yo;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/zh-cn.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/zh-cn.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleZhCnJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var zhCn = moment.defineLocale('zh-cn', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY年M月D日',
          LLL: 'YYYY年M月D日Ah点mm分',
          LLLL: 'YYYY年M月D日ddddAh点mm分',
          l: 'YYYY/M/D',
          ll: 'YYYY年M月D日',
          lll: 'YYYY年M月D日 HH:mm',
          llll: 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
            return hour;
          } else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
          } else {
            // '中午'
            return hour >= 11 ? hour : hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          var hm = hour * 100 + minute;

          if (hm < 600) {
            return '凌晨';
          } else if (hm < 900) {
            return '早上';
          } else if (hm < 1130) {
            return '上午';
          } else if (hm < 1230) {
            return '中午';
          } else if (hm < 1800) {
            return '下午';
          } else {
            return '晚上';
          }
        },
        calendar: {
          sameDay: '[今天]LT',
          nextDay: '[明天]LT',
          nextWeek: '[下]ddddLT',
          lastDay: '[昨天]LT',
          lastWeek: '[上]ddddLT',
          sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
              return number + '日';

            case 'M':
              return number + '月';

            case 'w':
            case 'W':
              return number + '周';

            default:
              return number;
          }
        },
        relativeTime: {
          future: '%s内',
          past: '%s前',
          s: '几秒',
          ss: '%d 秒',
          m: '1 分钟',
          mm: '%d 分钟',
          h: '1 小时',
          hh: '%d 小时',
          d: '1 天',
          dd: '%d 天',
          M: '1 个月',
          MM: '%d 个月',
          y: '1 年',
          yy: '%d 年'
        },
        week: {
          // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
          dow: 1,
          // Monday is the first day of the week.
          doy: 4 // The week that contains Jan 4th is the first week of the year.

        }
      });
      return zhCn;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/zh-hk.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/zh-hk.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleZhHkJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var zhHk = moment.defineLocale('zh-hk', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY年M月D日',
          LLL: 'YYYY年M月D日 HH:mm',
          LLLL: 'YYYY年M月D日dddd HH:mm',
          l: 'YYYY/M/D',
          ll: 'YYYY年M月D日',
          lll: 'YYYY年M月D日 HH:mm',
          llll: 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
            return hour;
          } else if (meridiem === '中午') {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          var hm = hour * 100 + minute;

          if (hm < 600) {
            return '凌晨';
          } else if (hm < 900) {
            return '早上';
          } else if (hm < 1130) {
            return '上午';
          } else if (hm < 1230) {
            return '中午';
          } else if (hm < 1800) {
            return '下午';
          } else {
            return '晚上';
          }
        },
        calendar: {
          sameDay: '[今天]LT',
          nextDay: '[明天]LT',
          nextWeek: '[下]ddddLT',
          lastDay: '[昨天]LT',
          lastWeek: '[上]ddddLT',
          sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
              return number + '日';

            case 'M':
              return number + '月';

            case 'w':
            case 'W':
              return number + '週';

            default:
              return number;
          }
        },
        relativeTime: {
          future: '%s內',
          past: '%s前',
          s: '幾秒',
          ss: '%d 秒',
          m: '1 分鐘',
          mm: '%d 分鐘',
          h: '1 小時',
          hh: '%d 小時',
          d: '1 天',
          dd: '%d 天',
          M: '1 個月',
          MM: '%d 個月',
          y: '1 年',
          yy: '%d 年'
        }
      });
      return zhHk;
    });
    /***/

  },

  /***/
  "./node_modules/moment/locale/zh-tw.js":
  /*!*********************************************!*\
    !*** ./node_modules/moment/locale/zh-tw.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleZhTwJs(module, exports, __webpack_require__) {
    //! moment.js locale configuration
    ;

    (function (global, factory) {
      true ? factory(__webpack_require__(
      /*! ../moment */
      "./node_modules/moment/moment.js")) : undefined;
    })(this, function (moment) {
      'use strict';

      var zhTw = moment.defineLocale('zh-tw', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY年M月D日',
          LLL: 'YYYY年M月D日 HH:mm',
          LLLL: 'YYYY年M月D日dddd HH:mm',
          l: 'YYYY/M/D',
          ll: 'YYYY年M月D日',
          lll: 'YYYY年M月D日 HH:mm',
          llll: 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function meridiemHour(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }

          if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
            return hour;
          } else if (meridiem === '中午') {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
          }
        },
        meridiem: function meridiem(hour, minute, isLower) {
          var hm = hour * 100 + minute;

          if (hm < 600) {
            return '凌晨';
          } else if (hm < 900) {
            return '早上';
          } else if (hm < 1130) {
            return '上午';
          } else if (hm < 1230) {
            return '中午';
          } else if (hm < 1800) {
            return '下午';
          } else {
            return '晚上';
          }
        },
        calendar: {
          sameDay: '[今天] LT',
          nextDay: '[明天] LT',
          nextWeek: '[下]dddd LT',
          lastDay: '[昨天] LT',
          lastWeek: '[上]dddd LT',
          sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function ordinal(number, period) {
          switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
              return number + '日';

            case 'M':
              return number + '月';

            case 'w':
            case 'W':
              return number + '週';

            default:
              return number;
          }
        },
        relativeTime: {
          future: '%s內',
          past: '%s前',
          s: '幾秒',
          ss: '%d 秒',
          m: '1 分鐘',
          mm: '%d 分鐘',
          h: '1 小時',
          hh: '%d 小時',
          d: '1 天',
          dd: '%d 天',
          M: '1 個月',
          MM: '%d 個月',
          y: '1 年',
          yy: '%d 年'
        }
      });
      return zhTw;
    });
    /***/

  },

  /***/
  "./node_modules/moment/moment.js":
  /*!***************************************!*\
    !*** ./node_modules/moment/moment.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentMomentJs(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function (module) {
      var require; //! moment.js


      ;

      (function (global, factory) {
        true ? module.exports = factory() : undefined;
      })(this, function () {
        'use strict';

        var hookCallback;

        function hooks() {
          return hookCallback.apply(null, arguments);
        } // This is done to register the method called with moment()
        // without creating circular dependencies.


        function setHookCallback(callback) {
          hookCallback = callback;
        }

        function isArray(input) {
          return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
        }

        function isObject(input) {
          // IE8 will treat undefined and null as object if it wasn't for
          // input != null
          return input != null && Object.prototype.toString.call(input) === '[object Object]';
        }

        function isObjectEmpty(obj) {
          if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
          } else {
            var k;

            for (k in obj) {
              if (obj.hasOwnProperty(k)) {
                return false;
              }
            }

            return true;
          }
        }

        function isUndefined(input) {
          return input === void 0;
        }

        function isNumber(input) {
          return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
        }

        function isDate(input) {
          return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
        }

        function map(arr, fn) {
          var res = [],
              i;

          for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
          }

          return res;
        }

        function hasOwnProp(a, b) {
          return Object.prototype.hasOwnProperty.call(a, b);
        }

        function extend(a, b) {
          for (var i in b) {
            if (hasOwnProp(b, i)) {
              a[i] = b[i];
            }
          }

          if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
          }

          if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
          }

          return a;
        }

        function createUTC(input, format, locale, strict) {
          return createLocalOrUTC(input, format, locale, strict, true).utc();
        }

        function defaultParsingFlags() {
          // We need to deep clone this object.
          return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
          };
        }

        function getParsingFlags(m) {
          if (m._pf == null) {
            m._pf = defaultParsingFlags();
          }

          return m._pf;
        }

        var some;

        if (Array.prototype.some) {
          some = Array.prototype.some;
        } else {
          some = function some(fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
              if (i in t && fun.call(this, t[i], i, t)) {
                return true;
              }
            }

            return false;
          };
        }

        function isValid(m) {
          if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
              return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);

            if (m._strict) {
              isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
              m._isValid = isNowValid;
            } else {
              return isNowValid;
            }
          }

          return m._isValid;
        }

        function createInvalid(flags) {
          var m = createUTC(NaN);

          if (flags != null) {
            extend(getParsingFlags(m), flags);
          } else {
            getParsingFlags(m).userInvalidated = true;
          }

          return m;
        } // Plugins that add properties should also add the key here (null value),
        // so we can properly clone ourselves.


        var momentProperties = hooks.momentProperties = [];

        function copyConfig(to, from) {
          var i, prop, val;

          if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
          }

          if (!isUndefined(from._i)) {
            to._i = from._i;
          }

          if (!isUndefined(from._f)) {
            to._f = from._f;
          }

          if (!isUndefined(from._l)) {
            to._l = from._l;
          }

          if (!isUndefined(from._strict)) {
            to._strict = from._strict;
          }

          if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
          }

          if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
          }

          if (!isUndefined(from._offset)) {
            to._offset = from._offset;
          }

          if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
          }

          if (!isUndefined(from._locale)) {
            to._locale = from._locale;
          }

          if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
              prop = momentProperties[i];
              val = from[prop];

              if (!isUndefined(val)) {
                to[prop] = val;
              }
            }
          }

          return to;
        }

        var updateInProgress = false; // Moment prototype object

        function Moment(config) {
          copyConfig(this, config);
          this._d = new Date(config._d != null ? config._d.getTime() : NaN);

          if (!this.isValid()) {
            this._d = new Date(NaN);
          } // Prevent infinite loop in case updateOffset creates new moment
          // objects.


          if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
          }
        }

        function isMoment(obj) {
          return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
        }

        function absFloor(number) {
          if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
          } else {
            return Math.floor(number);
          }
        }

        function toInt(argumentForCoercion) {
          var coercedNumber = +argumentForCoercion,
              value = 0;

          if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
          }

          return value;
        } // compare two arrays, return the number of differences


        function compareArrays(array1, array2, dontConvert) {
          var len = Math.min(array1.length, array2.length),
              lengthDiff = Math.abs(array1.length - array2.length),
              diffs = 0,
              i;

          for (i = 0; i < len; i++) {
            if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
              diffs++;
            }
          }

          return diffs + lengthDiff;
        }

        function warn(msg) {
          if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
            console.warn('Deprecation warning: ' + msg);
          }
        }

        function deprecate(msg, fn) {
          var firstTime = true;
          return extend(function () {
            if (hooks.deprecationHandler != null) {
              hooks.deprecationHandler(null, msg);
            }

            if (firstTime) {
              var args = [];
              var arg;

              for (var i = 0; i < arguments.length; i++) {
                arg = '';

                if (typeof arguments[i] === 'object') {
                  arg += '\n[' + i + '] ';

                  for (var key in arguments[0]) {
                    arg += key + ': ' + arguments[0][key] + ', ';
                  }

                  arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                  arg = arguments[i];
                }

                args.push(arg);
              }

              warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
              firstTime = false;
            }

            return fn.apply(this, arguments);
          }, fn);
        }

        var deprecations = {};

        function deprecateSimple(name, msg) {
          if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
          }

          if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
          }
        }

        hooks.suppressDeprecationWarnings = false;
        hooks.deprecationHandler = null;

        function isFunction(input) {
          return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
        }

        function set(config) {
          var prop, i;

          for (i in config) {
            prop = config[i];

            if (isFunction(prop)) {
              this[i] = prop;
            } else {
              this['_' + i] = prop;
            }
          }

          this._config = config; // Lenient ordinal parsing accepts just a number in addition to
          // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
          // TODO: Remove "ordinalParse" fallback in next major release.

          this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
        }

        function mergeConfigs(parentConfig, childConfig) {
          var res = extend({}, parentConfig),
              prop;

          for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
              if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
              } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
              } else {
                delete res[prop];
              }
            }
          }

          for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
              // make sure changes to properties don't modify parent config
              res[prop] = extend({}, res[prop]);
            }
          }

          return res;
        }

        function Locale(config) {
          if (config != null) {
            this.set(config);
          }
        }

        var keys;

        if (Object.keys) {
          keys = Object.keys;
        } else {
          keys = function keys(obj) {
            var i,
                res = [];

            for (i in obj) {
              if (hasOwnProp(obj, i)) {
                res.push(i);
              }
            }

            return res;
          };
        }

        var defaultCalendar = {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        };

        function calendar(key, mom, now) {
          var output = this._calendar[key] || this._calendar['sameElse'];
          return isFunction(output) ? output.call(mom, now) : output;
        }

        var defaultLongDateFormat = {
          LTS: 'h:mm:ss A',
          LT: 'h:mm A',
          L: 'MM/DD/YYYY',
          LL: 'MMMM D, YYYY',
          LLL: 'MMMM D, YYYY h:mm A',
          LLLL: 'dddd, MMMM D, YYYY h:mm A'
        };

        function longDateFormat(key) {
          var format = this._longDateFormat[key],
              formatUpper = this._longDateFormat[key.toUpperCase()];

          if (format || !formatUpper) {
            return format;
          }

          this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
          });
          return this._longDateFormat[key];
        }

        var defaultInvalidDate = 'Invalid date';

        function invalidDate() {
          return this._invalidDate;
        }

        var defaultOrdinal = '%d';
        var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

        function ordinal(number) {
          return this._ordinal.replace('%d', number);
        }

        var defaultRelativeTime = {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        };

        function relativeTime(number, withoutSuffix, string, isFuture) {
          var output = this._relativeTime[string];
          return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
        }

        function pastFuture(diff, output) {
          var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
          return isFunction(format) ? format(output) : format.replace(/%s/i, output);
        }

        var aliases = {};

        function addUnitAlias(unit, shorthand) {
          var lowerCase = unit.toLowerCase();
          aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
        }

        function normalizeUnits(units) {
          return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
        }

        function normalizeObjectUnits(inputObject) {
          var normalizedInput = {},
              normalizedProp,
              prop;

          for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
              normalizedProp = normalizeUnits(prop);

              if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
              }
            }
          }

          return normalizedInput;
        }

        var priorities = {};

        function addUnitPriority(unit, priority) {
          priorities[unit] = priority;
        }

        function getPrioritizedUnits(unitsObj) {
          var units = [];

          for (var u in unitsObj) {
            units.push({
              unit: u,
              priority: priorities[u]
            });
          }

          units.sort(function (a, b) {
            return a.priority - b.priority;
          });
          return units;
        }

        function zeroFill(number, targetLength, forceSign) {
          var absNumber = '' + Math.abs(number),
              zerosToFill = targetLength - absNumber.length,
              sign = number >= 0;
          return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
        }

        var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
        var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
        var formatFunctions = {};
        var formatTokenFunctions = {}; // token:    'M'
        // padded:   ['MM', 2]
        // ordinal:  'Mo'
        // callback: function () { this.month() + 1 }

        function addFormatToken(token, padded, ordinal, callback) {
          var func = callback;

          if (typeof callback === 'string') {
            func = function func() {
              return this[callback]();
            };
          }

          if (token) {
            formatTokenFunctions[token] = func;
          }

          if (padded) {
            formatTokenFunctions[padded[0]] = function () {
              return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
          }

          if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
              return this.localeData().ordinal(func.apply(this, arguments), token);
            };
          }
        }

        function removeFormattingTokens(input) {
          if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
          }

          return input.replace(/\\/g, '');
        }

        function makeFormatFunction(format) {
          var array = format.match(formattingTokens),
              i,
              length;

          for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
              array[i] = formatTokenFunctions[array[i]];
            } else {
              array[i] = removeFormattingTokens(array[i]);
            }
          }

          return function (mom) {
            var output = '',
                i;

            for (i = 0; i < length; i++) {
              output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }

            return output;
          };
        } // format date using native date object


        function formatMoment(m, format) {
          if (!m.isValid()) {
            return m.localeData().invalidDate();
          }

          format = expandFormat(format, m.localeData());
          formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
          return formatFunctions[format](m);
        }

        function expandFormat(format, locale) {
          var i = 5;

          function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
          }

          localFormattingTokens.lastIndex = 0;

          while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
          }

          return format;
        }

        var match1 = /\d/; //       0 - 9

        var match2 = /\d\d/; //      00 - 99

        var match3 = /\d{3}/; //     000 - 999

        var match4 = /\d{4}/; //    0000 - 9999

        var match6 = /[+-]?\d{6}/; // -999999 - 999999

        var match1to2 = /\d\d?/; //       0 - 99

        var match3to4 = /\d\d\d\d?/; //     999 - 9999

        var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999

        var match1to3 = /\d{1,3}/; //       0 - 999

        var match1to4 = /\d{1,4}/; //       0 - 9999

        var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

        var matchUnsigned = /\d+/; //       0 - inf

        var matchSigned = /[+-]?\d+/; //    -inf - inf

        var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z

        var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

        var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
        // any word (or two) characters or numbers including two/three word month in arabic.
        // includes scottish gaelic two word and hyphenated months

        var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
        var regexes = {};

        function addRegexToken(token, regex, strictRegex) {
          regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return isStrict && strictRegex ? strictRegex : regex;
          };
        }

        function getParseRegexForToken(token, config) {
          if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
          }

          return regexes[token](config._strict, config._locale);
        } // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript


        function unescapeFormat(s) {
          return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
          }));
        }

        function regexEscape(s) {
          return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        }

        var tokens = {};

        function addParseToken(token, callback) {
          var i,
              func = callback;

          if (typeof token === 'string') {
            token = [token];
          }

          if (isNumber(callback)) {
            func = function func(input, array) {
              array[callback] = toInt(input);
            };
          }

          for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
          }
        }

        function addWeekParseToken(token, callback) {
          addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
          });
        }

        function addTimeToArrayFromToken(token, input, config) {
          if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
          }
        }

        var YEAR = 0;
        var MONTH = 1;
        var DATE = 2;
        var HOUR = 3;
        var MINUTE = 4;
        var SECOND = 5;
        var MILLISECOND = 6;
        var WEEK = 7;
        var WEEKDAY = 8; // FORMATTING

        addFormatToken('Y', 0, 0, function () {
          var y = this.year();
          return y <= 9999 ? '' + y : '+' + y;
        });
        addFormatToken(0, ['YY', 2], 0, function () {
          return this.year() % 100;
        });
        addFormatToken(0, ['YYYY', 4], 0, 'year');
        addFormatToken(0, ['YYYYY', 5], 0, 'year');
        addFormatToken(0, ['YYYYYY', 6, true], 0, 'year'); // ALIASES

        addUnitAlias('year', 'y'); // PRIORITIES

        addUnitPriority('year', 1); // PARSING

        addRegexToken('Y', matchSigned);
        addRegexToken('YY', match1to2, match2);
        addRegexToken('YYYY', match1to4, match4);
        addRegexToken('YYYYY', match1to6, match6);
        addRegexToken('YYYYYY', match1to6, match6);
        addParseToken(['YYYYY', 'YYYYYY'], YEAR);
        addParseToken('YYYY', function (input, array) {
          array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
        });
        addParseToken('YY', function (input, array) {
          array[YEAR] = hooks.parseTwoDigitYear(input);
        });
        addParseToken('Y', function (input, array) {
          array[YEAR] = parseInt(input, 10);
        }); // HELPERS

        function daysInYear(year) {
          return isLeapYear(year) ? 366 : 365;
        }

        function isLeapYear(year) {
          return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
        } // HOOKS


        hooks.parseTwoDigitYear = function (input) {
          return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
        }; // MOMENTS


        var getSetYear = makeGetSet('FullYear', true);

        function getIsLeapYear() {
          return isLeapYear(this.year());
        }

        function makeGetSet(unit, keepTime) {
          return function (value) {
            if (value != null) {
              set$1(this, unit, value);
              hooks.updateOffset(this, keepTime);
              return this;
            } else {
              return get(this, unit);
            }
          };
        }

        function get(mom, unit) {
          return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
        }

        function set$1(mom, unit, value) {
          if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
              mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            } else {
              mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
          }
        } // MOMENTS


        function stringGet(units) {
          units = normalizeUnits(units);

          if (isFunction(this[units])) {
            return this[units]();
          }

          return this;
        }

        function stringSet(units, value) {
          if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);

            for (var i = 0; i < prioritized.length; i++) {
              this[prioritized[i].unit](units[prioritized[i].unit]);
            }
          } else {
            units = normalizeUnits(units);

            if (isFunction(this[units])) {
              return this[units](value);
            }
          }

          return this;
        }

        function mod(n, x) {
          return (n % x + x) % x;
        }

        var indexOf;

        if (Array.prototype.indexOf) {
          indexOf = Array.prototype.indexOf;
        } else {
          indexOf = function indexOf(o) {
            // I know
            var i;

            for (i = 0; i < this.length; ++i) {
              if (this[i] === o) {
                return i;
              }
            }

            return -1;
          };
        }

        function daysInMonth(year, month) {
          if (isNaN(year) || isNaN(month)) {
            return NaN;
          }

          var modMonth = mod(month, 12);
          year += (month - modMonth) / 12;
          return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
        } // FORMATTING


        addFormatToken('M', ['MM', 2], 'Mo', function () {
          return this.month() + 1;
        });
        addFormatToken('MMM', 0, 0, function (format) {
          return this.localeData().monthsShort(this, format);
        });
        addFormatToken('MMMM', 0, 0, function (format) {
          return this.localeData().months(this, format);
        }); // ALIASES

        addUnitAlias('month', 'M'); // PRIORITY

        addUnitPriority('month', 8); // PARSING

        addRegexToken('M', match1to2);
        addRegexToken('MM', match1to2, match2);
        addRegexToken('MMM', function (isStrict, locale) {
          return locale.monthsShortRegex(isStrict);
        });
        addRegexToken('MMMM', function (isStrict, locale) {
          return locale.monthsRegex(isStrict);
        });
        addParseToken(['M', 'MM'], function (input, array) {
          array[MONTH] = toInt(input) - 1;
        });
        addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
          var month = config._locale.monthsParse(input, token, config._strict); // if we didn't find a month name, mark the date as invalid.


          if (month != null) {
            array[MONTH] = month;
          } else {
            getParsingFlags(config).invalidMonth = input;
          }
        }); // LOCALES

        var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
        var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');

        function localeMonths(m, format) {
          if (!m) {
            return isArray(this._months) ? this._months : this._months['standalone'];
          }

          return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
        }

        var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');

        function localeMonthsShort(m, format) {
          if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
          }

          return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
        }

        function handleStrictParse(monthName, format, strict) {
          var i,
              ii,
              mom,
              llc = monthName.toLocaleLowerCase();

          if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];

            for (i = 0; i < 12; ++i) {
              mom = createUTC([2000, i]);
              this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
              this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
          }

          if (strict) {
            if (format === 'MMM') {
              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
            }
          } else {
            if (format === 'MMM') {
              ii = indexOf.call(this._shortMonthsParse, llc);

              if (ii !== -1) {
                return ii;
              }

              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._longMonthsParse, llc);

              if (ii !== -1) {
                return ii;
              }

              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
            }
          }
        }

        function localeMonthsParse(monthName, format, strict) {
          var i, mom, regex;

          if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
          }

          if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
          } // TODO: add sorting
          // Sorting makes sure if one month (or abbr) is a prefix of another
          // see sorting in computeMonthsParse


          for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);

            if (strict && !this._longMonthsParse[i]) {
              this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
              this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }

            if (!strict && !this._monthsParse[i]) {
              regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
              this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            } // test the regex


            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
              return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
              return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
              return i;
            }
          }
        } // MOMENTS


        function setMonth(mom, value) {
          var dayOfMonth;

          if (!mom.isValid()) {
            // No op
            return mom;
          }

          if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
              value = toInt(value);
            } else {
              value = mom.localeData().monthsParse(value); // TODO: Another silent failure?

              if (!isNumber(value)) {
                return mom;
              }
            }
          }

          dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));

          mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);

          return mom;
        }

        function getSetMonth(value) {
          if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
          } else {
            return get(this, 'Month');
          }
        }

        function getDaysInMonth() {
          return daysInMonth(this.year(), this.month());
        }

        var defaultMonthsShortRegex = matchWord;

        function monthsShortRegex(isStrict) {
          if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
              computeMonthsParse.call(this);
            }

            if (isStrict) {
              return this._monthsShortStrictRegex;
            } else {
              return this._monthsShortRegex;
            }
          } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
              this._monthsShortRegex = defaultMonthsShortRegex;
            }

            return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
          }
        }

        var defaultMonthsRegex = matchWord;

        function monthsRegex(isStrict) {
          if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
              computeMonthsParse.call(this);
            }

            if (isStrict) {
              return this._monthsStrictRegex;
            } else {
              return this._monthsRegex;
            }
          } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
              this._monthsRegex = defaultMonthsRegex;
            }

            return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
          }
        }

        function computeMonthsParse() {
          function cmpLenRev(a, b) {
            return b.length - a.length;
          }

          var shortPieces = [],
              longPieces = [],
              mixedPieces = [],
              i,
              mom;

          for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
          } // Sorting makes sure if one month (or abbr) is a prefix of another it
          // will match the longer piece.


          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);

          for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
          }

          for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
          }

          this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
          this._monthsShortRegex = this._monthsRegex;
          this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
          this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        }

        function createDate(y, m, d, h, M, s, ms) {
          // can't just apply() to create a date:
          // https://stackoverflow.com/q/181348
          var date; // the date constructor remaps years 0-99 to 1900-1999

          if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);

            if (isFinite(date.getFullYear())) {
              date.setFullYear(y);
            }
          } else {
            date = new Date(y, m, d, h, M, s, ms);
          }

          return date;
        }

        function createUTCDate(y) {
          var date; // the Date.UTC function remaps years 0-99 to 1900-1999

          if (y < 100 && y >= 0) {
            var args = Array.prototype.slice.call(arguments); // preserve leap years using a full 400 year cycle, then reset

            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));

            if (isFinite(date.getUTCFullYear())) {
              date.setUTCFullYear(y);
            }
          } else {
            date = new Date(Date.UTC.apply(null, arguments));
          }

          return date;
        } // start-of-first-week - start-of-year


        function firstWeekOffset(year, dow, doy) {
          var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
          fwd = 7 + dow - doy,
              // first-week day local weekday -- which local weekday is fwd
          fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
          return -fwdlw + fwd - 1;
        } // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday


        function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
          var localWeekday = (7 + weekday - dow) % 7,
              weekOffset = firstWeekOffset(year, dow, doy),
              dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
              resYear,
              resDayOfYear;

          if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
          } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
          } else {
            resYear = year;
            resDayOfYear = dayOfYear;
          }

          return {
            year: resYear,
            dayOfYear: resDayOfYear
          };
        }

        function weekOfYear(mom, dow, doy) {
          var weekOffset = firstWeekOffset(mom.year(), dow, doy),
              week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
              resWeek,
              resYear;

          if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
          } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
          } else {
            resYear = mom.year();
            resWeek = week;
          }

          return {
            week: resWeek,
            year: resYear
          };
        }

        function weeksInYear(year, dow, doy) {
          var weekOffset = firstWeekOffset(year, dow, doy),
              weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
          return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
        } // FORMATTING


        addFormatToken('w', ['ww', 2], 'wo', 'week');
        addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek'); // ALIASES

        addUnitAlias('week', 'w');
        addUnitAlias('isoWeek', 'W'); // PRIORITIES

        addUnitPriority('week', 5);
        addUnitPriority('isoWeek', 5); // PARSING

        addRegexToken('w', match1to2);
        addRegexToken('ww', match1to2, match2);
        addRegexToken('W', match1to2);
        addRegexToken('WW', match1to2, match2);
        addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
          week[token.substr(0, 1)] = toInt(input);
        }); // HELPERS
        // LOCALES

        function localeWeek(mom) {
          return weekOfYear(mom, this._week.dow, this._week.doy).week;
        }

        var defaultLocaleWeek = {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6 // The week that contains Jan 6th is the first week of the year.

        };

        function localeFirstDayOfWeek() {
          return this._week.dow;
        }

        function localeFirstDayOfYear() {
          return this._week.doy;
        } // MOMENTS


        function getSetWeek(input) {
          var week = this.localeData().week(this);
          return input == null ? week : this.add((input - week) * 7, 'd');
        }

        function getSetISOWeek(input) {
          var week = weekOfYear(this, 1, 4).week;
          return input == null ? week : this.add((input - week) * 7, 'd');
        } // FORMATTING


        addFormatToken('d', 0, 'do', 'day');
        addFormatToken('dd', 0, 0, function (format) {
          return this.localeData().weekdaysMin(this, format);
        });
        addFormatToken('ddd', 0, 0, function (format) {
          return this.localeData().weekdaysShort(this, format);
        });
        addFormatToken('dddd', 0, 0, function (format) {
          return this.localeData().weekdays(this, format);
        });
        addFormatToken('e', 0, 0, 'weekday');
        addFormatToken('E', 0, 0, 'isoWeekday'); // ALIASES

        addUnitAlias('day', 'd');
        addUnitAlias('weekday', 'e');
        addUnitAlias('isoWeekday', 'E'); // PRIORITY

        addUnitPriority('day', 11);
        addUnitPriority('weekday', 11);
        addUnitPriority('isoWeekday', 11); // PARSING

        addRegexToken('d', match1to2);
        addRegexToken('e', match1to2);
        addRegexToken('E', match1to2);
        addRegexToken('dd', function (isStrict, locale) {
          return locale.weekdaysMinRegex(isStrict);
        });
        addRegexToken('ddd', function (isStrict, locale) {
          return locale.weekdaysShortRegex(isStrict);
        });
        addRegexToken('dddd', function (isStrict, locale) {
          return locale.weekdaysRegex(isStrict);
        });
        addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
          var weekday = config._locale.weekdaysParse(input, token, config._strict); // if we didn't get a weekday name, mark the date as invalid


          if (weekday != null) {
            week.d = weekday;
          } else {
            getParsingFlags(config).invalidWeekday = input;
          }
        });
        addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
          week[token] = toInt(input);
        }); // HELPERS

        function parseWeekday(input, locale) {
          if (typeof input !== 'string') {
            return input;
          }

          if (!isNaN(input)) {
            return parseInt(input, 10);
          }

          input = locale.weekdaysParse(input);

          if (typeof input === 'number') {
            return input;
          }

          return null;
        }

        function parseIsoWeekday(input, locale) {
          if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
          }

          return isNaN(input) ? null : input;
        } // LOCALES


        function shiftWeekdays(ws, n) {
          return ws.slice(n, 7).concat(ws.slice(0, n));
        }

        var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');

        function localeWeekdays(m, format) {
          var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
          return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
        }

        var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');

        function localeWeekdaysShort(m) {
          return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
        }

        var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');

        function localeWeekdaysMin(m) {
          return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
        }

        function handleStrictParse$1(weekdayName, format, strict) {
          var i,
              ii,
              mom,
              llc = weekdayName.toLocaleLowerCase();

          if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
              mom = createUTC([2000, 1]).day(i);
              this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
              this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
              this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
          }

          if (strict) {
            if (format === 'dddd') {
              ii = indexOf.call(this._weekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            }
          } else {
            if (format === 'dddd') {
              ii = indexOf.call(this._weekdaysParse, llc);

              if (ii !== -1) {
                return ii;
              }

              ii = indexOf.call(this._shortWeekdaysParse, llc);

              if (ii !== -1) {
                return ii;
              }

              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
              ii = indexOf.call(this._shortWeekdaysParse, llc);

              if (ii !== -1) {
                return ii;
              }

              ii = indexOf.call(this._weekdaysParse, llc);

              if (ii !== -1) {
                return ii;
              }

              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._minWeekdaysParse, llc);

              if (ii !== -1) {
                return ii;
              }

              ii = indexOf.call(this._weekdaysParse, llc);

              if (ii !== -1) {
                return ii;
              }

              ii = indexOf.call(this._shortWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            }
          }
        }

        function localeWeekdaysParse(weekdayName, format, strict) {
          var i, mom, regex;

          if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
          }

          if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
          }

          for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);

            if (strict && !this._fullWeekdaysParse[i]) {
              this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
              this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
              this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }

            if (!this._weekdaysParse[i]) {
              regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
              this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            } // test the regex


            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
              return i;
            }
          }
        } // MOMENTS


        function getSetDayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }

          var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();

          if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
          } else {
            return day;
          }
        }

        function getSetLocaleDayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }

          var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return input == null ? weekday : this.add(input - weekday, 'd');
        }

        function getSetISODayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          } // behaves the same as moment#day except
          // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
          // as a setter, sunday should belong to the previous week.


          if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
          } else {
            return this.day() || 7;
          }
        }

        var defaultWeekdaysRegex = matchWord;

        function weekdaysRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
              computeWeekdaysParse.call(this);
            }

            if (isStrict) {
              return this._weekdaysStrictRegex;
            } else {
              return this._weekdaysRegex;
            }
          } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
              this._weekdaysRegex = defaultWeekdaysRegex;
            }

            return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
          }
        }

        var defaultWeekdaysShortRegex = matchWord;

        function weekdaysShortRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
              computeWeekdaysParse.call(this);
            }

            if (isStrict) {
              return this._weekdaysShortStrictRegex;
            } else {
              return this._weekdaysShortRegex;
            }
          } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
              this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }

            return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
          }
        }

        var defaultWeekdaysMinRegex = matchWord;

        function weekdaysMinRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
              computeWeekdaysParse.call(this);
            }

            if (isStrict) {
              return this._weekdaysMinStrictRegex;
            } else {
              return this._weekdaysMinRegex;
            }
          } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
              this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }

            return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
          }
        }

        function computeWeekdaysParse() {
          function cmpLenRev(a, b) {
            return b.length - a.length;
          }

          var minPieces = [],
              shortPieces = [],
              longPieces = [],
              mixedPieces = [],
              i,
              mom,
              minp,
              shortp,
              longp;

          for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
          } // Sorting makes sure if one weekday (or abbr) is a prefix of another it
          // will match the longer piece.


          minPieces.sort(cmpLenRev);
          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);

          for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
          }

          this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
          this._weekdaysShortRegex = this._weekdaysRegex;
          this._weekdaysMinRegex = this._weekdaysRegex;
          this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
          this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
          this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
        } // FORMATTING


        function hFormat() {
          return this.hours() % 12 || 12;
        }

        function kFormat() {
          return this.hours() || 24;
        }

        addFormatToken('H', ['HH', 2], 0, 'hour');
        addFormatToken('h', ['hh', 2], 0, hFormat);
        addFormatToken('k', ['kk', 2], 0, kFormat);
        addFormatToken('hmm', 0, 0, function () {
          return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
        });
        addFormatToken('hmmss', 0, 0, function () {
          return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
        });
        addFormatToken('Hmm', 0, 0, function () {
          return '' + this.hours() + zeroFill(this.minutes(), 2);
        });
        addFormatToken('Hmmss', 0, 0, function () {
          return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
        });

        function meridiem(token, lowercase) {
          addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
          });
        }

        meridiem('a', true);
        meridiem('A', false); // ALIASES

        addUnitAlias('hour', 'h'); // PRIORITY

        addUnitPriority('hour', 13); // PARSING

        function matchMeridiem(isStrict, locale) {
          return locale._meridiemParse;
        }

        addRegexToken('a', matchMeridiem);
        addRegexToken('A', matchMeridiem);
        addRegexToken('H', match1to2);
        addRegexToken('h', match1to2);
        addRegexToken('k', match1to2);
        addRegexToken('HH', match1to2, match2);
        addRegexToken('hh', match1to2, match2);
        addRegexToken('kk', match1to2, match2);
        addRegexToken('hmm', match3to4);
        addRegexToken('hmmss', match5to6);
        addRegexToken('Hmm', match3to4);
        addRegexToken('Hmmss', match5to6);
        addParseToken(['H', 'HH'], HOUR);
        addParseToken(['k', 'kk'], function (input, array, config) {
          var kInput = toInt(input);
          array[HOUR] = kInput === 24 ? 0 : kInput;
        });
        addParseToken(['a', 'A'], function (input, array, config) {
          config._isPm = config._locale.isPM(input);
          config._meridiem = input;
        });
        addParseToken(['h', 'hh'], function (input, array, config) {
          array[HOUR] = toInt(input);
          getParsingFlags(config).bigHour = true;
        });
        addParseToken('hmm', function (input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
          getParsingFlags(config).bigHour = true;
        });
        addParseToken('hmmss', function (input, array, config) {
          var pos1 = input.length - 4;
          var pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
          getParsingFlags(config).bigHour = true;
        });
        addParseToken('Hmm', function (input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
        });
        addParseToken('Hmmss', function (input, array, config) {
          var pos1 = input.length - 4;
          var pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
        }); // LOCALES

        function localeIsPM(input) {
          // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
          // Using charAt should be more compatible.
          return (input + '').toLowerCase().charAt(0) === 'p';
        }

        var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;

        function localeMeridiem(hours, minutes, isLower) {
          if (hours > 11) {
            return isLower ? 'pm' : 'PM';
          } else {
            return isLower ? 'am' : 'AM';
          }
        } // MOMENTS
        // Setting the hour should keep the time, because the user explicitly
        // specified which hour they want. So trying to maintain the same hour (in
        // a new timezone) makes sense. Adding/subtracting hours does not follow
        // this rule.


        var getSetHour = makeGetSet('Hours', true);
        var baseConfig = {
          calendar: defaultCalendar,
          longDateFormat: defaultLongDateFormat,
          invalidDate: defaultInvalidDate,
          ordinal: defaultOrdinal,
          dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
          relativeTime: defaultRelativeTime,
          months: defaultLocaleMonths,
          monthsShort: defaultLocaleMonthsShort,
          week: defaultLocaleWeek,
          weekdays: defaultLocaleWeekdays,
          weekdaysMin: defaultLocaleWeekdaysMin,
          weekdaysShort: defaultLocaleWeekdaysShort,
          meridiemParse: defaultLocaleMeridiemParse
        }; // internal storage for locale config files

        var locales = {};
        var localeFamilies = {};
        var globalLocale;

        function normalizeLocale(key) {
          return key ? key.toLowerCase().replace('_', '-') : key;
        } // pick the locale from the array
        // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
        // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root


        function chooseLocale(names) {
          var i = 0,
              j,
              next,
              locale,
              split;

          while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;

            while (j > 0) {
              locale = loadLocale(split.slice(0, j).join('-'));

              if (locale) {
                return locale;
              }

              if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
              }

              j--;
            }

            i++;
          }

          return globalLocale;
        }

        function loadLocale(name) {
          var oldLocale = null; // TODO: Find a better way to register and load all the locales in Node

          if (!locales[name] && typeof module !== 'undefined' && module && module.exports) {
            try {
              oldLocale = globalLocale._abbr;
              var aliasedRequire = require;

              __webpack_require__("./node_modules/moment/locale sync recursive ^\\.\\/.*$")("./" + name);

              getSetGlobalLocale(oldLocale);
            } catch (e) {}
          }

          return locales[name];
        } // This function will load locale and then set the global locale.  If
        // no arguments are passed in, it will simply return the current global
        // locale key.


        function getSetGlobalLocale(key, values) {
          var data;

          if (key) {
            if (isUndefined(values)) {
              data = getLocale(key);
            } else {
              data = defineLocale(key, values);
            }

            if (data) {
              // moment.duration._locale = moment._locale = data;
              globalLocale = data;
            } else {
              if (typeof console !== 'undefined' && console.warn) {
                //warn user if arguments are passed but the locale could not be set
                console.warn('Locale ' + key + ' not found. Did you forget to load it?');
              }
            }
          }

          return globalLocale._abbr;
        }

        function defineLocale(name, config) {
          if (config !== null) {
            var locale,
                parentConfig = baseConfig;
            config.abbr = name;

            if (locales[name] != null) {
              deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
              parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
              if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
              } else {
                locale = loadLocale(config.parentLocale);

                if (locale != null) {
                  parentConfig = locale._config;
                } else {
                  if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                  }

                  localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                  });
                  return null;
                }
              }
            }

            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
              localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
              });
            } // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.


            getSetGlobalLocale(name);
            return locales[name];
          } else {
            // useful for testing
            delete locales[name];
            return null;
          }
        }

        function updateLocale(name, config) {
          if (config != null) {
            var locale,
                tmpLocale,
                parentConfig = baseConfig; // MERGE

            tmpLocale = loadLocale(name);

            if (tmpLocale != null) {
              parentConfig = tmpLocale._config;
            }

            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale; // backwards compat for now: also set the locale

            getSetGlobalLocale(name);
          } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
              if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
              } else if (locales[name] != null) {
                delete locales[name];
              }
            }
          }

          return locales[name];
        } // returns locale data


        function getLocale(key) {
          var locale;

          if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
          }

          if (!key) {
            return globalLocale;
          }

          if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);

            if (locale) {
              return locale;
            }

            key = [key];
          }

          return chooseLocale(key);
        }

        function listLocales() {
          return keys(locales);
        }

        function checkOverflow(m) {
          var overflow;
          var a = m._a;

          if (a && getParsingFlags(m).overflow === -2) {
            overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
              overflow = DATE;
            }

            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
              overflow = WEEK;
            }

            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
              overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
          }

          return m;
        } // Pick the first defined of two or three arguments.


        function defaults(a, b, c) {
          if (a != null) {
            return a;
          }

          if (b != null) {
            return b;
          }

          return c;
        }

        function currentDateArray(config) {
          // hooks is actually the exported moment object
          var nowValue = new Date(hooks.now());

          if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
          }

          return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
        } // convert an array to a date.
        // the array should mirror the parameters below
        // note: all values past the year are optional and will default to the lowest possible value.
        // [year, month, day , hour, minute, second, millisecond]


        function configFromArray(config) {
          var i,
              date,
              input = [],
              currentDate,
              expectedWeekday,
              yearToUse;

          if (config._d) {
            return;
          }

          currentDate = currentDateArray(config); //compute day of the year from weeks and weekdays

          if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
          } //if the day of the year is set, figure out what it is


          if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
              getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
          } // Default to current date.
          // * if no year, month, day of month are given, default to today
          // * if day of month is given, default month and year
          // * if month is given, default only year
          // * if year is given, don't default anything


          for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
          } // Zero out whatever was not defaulted, including time


          for (; i < 7; i++) {
            config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
          } // Check for 24:00:00.000


          if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
          }

          config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
          expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay(); // Apply timezone offset from input. The actual utcOffset can be changed
          // with parseZone.

          if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
          }

          if (config._nextDay) {
            config._a[HOUR] = 24;
          } // check for mismatching day of week


          if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
          }
        }

        function dayOfYearFromWeekInfo(config) {
          var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
          w = config._w;

          if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4; // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).

            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);

            if (weekday < 1 || weekday > 7) {
              weekdayOverflow = true;
            }
          } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            var curWeek = weekOfYear(createLocal(), dow, doy);
            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year); // Default to current week.

            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
              // weekday -- low day numbers are considered next week
              weekday = w.d;

              if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
              }
            } else if (w.e != null) {
              // local weekday -- counting starts from beginning of week
              weekday = w.e + dow;

              if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
              }
            } else {
              // default to beginning of week
              weekday = dow;
            }
          }

          if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
          } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
          } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
          }
        } // iso 8601 regex
        // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)


        var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
        var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
        var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
        var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/]]; // iso time formats and regexes

        var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];
        var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i; // date from iso format

        function configFromISO(config) {
          var i,
              l,
              string = config._i,
              match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
              allowTime,
              dateFormat,
              timeFormat,
              tzFormat;

          if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
              if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
              }
            }

            if (dateFormat == null) {
              config._isValid = false;
              return;
            }

            if (match[3]) {
              for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                  // match[2] should be 'T' or space
                  timeFormat = (match[2] || ' ') + isoTimes[i][0];
                  break;
                }
              }

              if (timeFormat == null) {
                config._isValid = false;
                return;
              }
            }

            if (!allowTime && timeFormat != null) {
              config._isValid = false;
              return;
            }

            if (match[4]) {
              if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
              } else {
                config._isValid = false;
                return;
              }
            }

            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
          } else {
            config._isValid = false;
          }
        } // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3


        var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

        function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
          var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];

          if (secondStr) {
            result.push(parseInt(secondStr, 10));
          }

          return result;
        }

        function untruncateYear(yearStr) {
          var year = parseInt(yearStr, 10);

          if (year <= 49) {
            return 2000 + year;
          } else if (year <= 999) {
            return 1900 + year;
          }

          return year;
        }

        function preprocessRFC2822(s) {
          // Remove comments and folding whitespace and replace multiple-spaces with a single space
          return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
        }

        function checkWeekday(weekdayStr, parsedInput, config) {
          if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();

            if (weekdayProvided !== weekdayActual) {
              getParsingFlags(config).weekdayMismatch = true;
              config._isValid = false;
              return false;
            }
          }

          return true;
        }

        var obsOffsets = {
          UT: 0,
          GMT: 0,
          EDT: -4 * 60,
          EST: -5 * 60,
          CDT: -5 * 60,
          CST: -6 * 60,
          MDT: -6 * 60,
          MST: -7 * 60,
          PDT: -7 * 60,
          PST: -8 * 60
        };

        function calculateOffset(obsOffset, militaryOffset, numOffset) {
          if (obsOffset) {
            return obsOffsets[obsOffset];
          } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
          } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100,
                h = (hm - m) / 100;
            return h * 60 + m;
          }
        } // date and time from ref 2822 format


        function configFromRFC2822(config) {
          var match = rfc2822.exec(preprocessRFC2822(config._i));

          if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);

            if (!checkWeekday(match[1], parsedArray, config)) {
              return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);
            config._d = createUTCDate.apply(null, config._a);

            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
          } else {
            config._isValid = false;
          }
        } // date from iso format or fallback


        function configFromString(config) {
          var matched = aspNetJsonRegex.exec(config._i);

          if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
          }

          configFromISO(config);

          if (config._isValid === false) {
            delete config._isValid;
          } else {
            return;
          }

          configFromRFC2822(config);

          if (config._isValid === false) {
            delete config._isValid;
          } else {
            return;
          } // Final attempt, use Input Fallback


          hooks.createFromInputFallback(config);
        }

        hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged and will be removed in an upcoming major release. Please refer to ' + 'http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
          config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }); // constant that refers to the ISO standard

        hooks.ISO_8601 = function () {}; // constant that refers to the RFC 2822 form


        hooks.RFC_2822 = function () {}; // date from string and format string


        function configFromStringAndFormat(config) {
          // TODO: Move this to another part of the creation flow to prevent circular deps
          if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
          }

          if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
          }

          config._a = [];
          getParsingFlags(config).empty = true; // This array is used to make a Date, either with `new Date` or `Date.UTC`

          var string = '' + config._i,
              i,
              parsedInput,
              tokens,
              token,
              skipped,
              stringLength = string.length,
              totalParsedInputLength = 0;
          tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

          for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0]; // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));

            if (parsedInput) {
              skipped = string.substr(0, string.indexOf(parsedInput));

              if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
              }

              string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
              totalParsedInputLength += parsedInput.length;
            } // don't parse if it's not a known token


            if (formatTokenFunctions[token]) {
              if (parsedInput) {
                getParsingFlags(config).empty = false;
              } else {
                getParsingFlags(config).unusedTokens.push(token);
              }

              addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) {
              getParsingFlags(config).unusedTokens.push(token);
            }
          } // add remaining unparsed input length to the string


          getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;

          if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
          } // clear _12h flag if hour is <= 12


          if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
          }

          getParsingFlags(config).parsedDateParts = config._a.slice(0);
          getParsingFlags(config).meridiem = config._meridiem; // handle meridiem

          config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
          configFromArray(config);
          checkOverflow(config);
        }

        function meridiemFixWrap(locale, hour, meridiem) {
          var isPm;

          if (meridiem == null) {
            // nothing to do
            return hour;
          }

          if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
          } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);

            if (isPm && hour < 12) {
              hour += 12;
            }

            if (!isPm && hour === 12) {
              hour = 0;
            }

            return hour;
          } else {
            // this is not supposed to happen
            return hour;
          }
        } // date from string and array of format strings


        function configFromStringAndArray(config) {
          var tempConfig, bestMoment, scoreToBeat, i, currentScore;

          if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
          }

          for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);

            if (config._useUTC != null) {
              tempConfig._useUTC = config._useUTC;
            }

            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
              continue;
            } // if there is any input that was not parsed add a penalty for that format


            currentScore += getParsingFlags(tempConfig).charsLeftOver; //or tokens

            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;
            }
          }

          extend(config, bestMoment || tempConfig);
        }

        function configFromObject(config) {
          if (config._d) {
            return;
          }

          var i = normalizeObjectUnits(config._i);
          config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
          });
          configFromArray(config);
        }

        function createFromConfig(config) {
          var res = new Moment(checkOverflow(prepareConfig(config)));

          if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
          }

          return res;
        }

        function prepareConfig(config) {
          var input = config._i,
              format = config._f;
          config._locale = config._locale || getLocale(config._l);

          if (input === null || format === undefined && input === '') {
            return createInvalid({
              nullInput: true
            });
          }

          if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
          }

          if (isMoment(input)) {
            return new Moment(checkOverflow(input));
          } else if (isDate(input)) {
            config._d = input;
          } else if (isArray(format)) {
            configFromStringAndArray(config);
          } else if (format) {
            configFromStringAndFormat(config);
          } else {
            configFromInput(config);
          }

          if (!isValid(config)) {
            config._d = null;
          }

          return config;
        }

        function configFromInput(config) {
          var input = config._i;

          if (isUndefined(input)) {
            config._d = new Date(hooks.now());
          } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
          } else if (typeof input === 'string') {
            configFromString(config);
          } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
              return parseInt(obj, 10);
            });
            configFromArray(config);
          } else if (isObject(input)) {
            configFromObject(config);
          } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
          } else {
            hooks.createFromInputFallback(config);
          }
        }

        function createLocalOrUTC(input, format, locale, strict, isUTC) {
          var c = {};

          if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
          }

          if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
            input = undefined;
          } // object construction must be done this way.
          // https://github.com/moment/moment/issues/1423


          c._isAMomentObject = true;
          c._useUTC = c._isUTC = isUTC;
          c._l = locale;
          c._i = input;
          c._f = format;
          c._strict = strict;
          return createFromConfig(c);
        }

        function createLocal(input, format, locale, strict) {
          return createLocalOrUTC(input, format, locale, strict, false);
        }

        var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
          var other = createLocal.apply(null, arguments);

          if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
          } else {
            return createInvalid();
          }
        });
        var prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
          var other = createLocal.apply(null, arguments);

          if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
          } else {
            return createInvalid();
          }
        }); // Pick a moment m from moments so that m[fn](other) is true for all
        // other. This relies on the function fn to be transitive.
        //
        // moments should either be an array of moment objects or an array, whose
        // first element is an array of moment objects.

        function pickBy(fn, moments) {
          var res, i;

          if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
          }

          if (!moments.length) {
            return createLocal();
          }

          res = moments[0];

          for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
              res = moments[i];
            }
          }

          return res;
        } // TODO: Use [].sort instead?


        function min() {
          var args = [].slice.call(arguments, 0);
          return pickBy('isBefore', args);
        }

        function max() {
          var args = [].slice.call(arguments, 0);
          return pickBy('isAfter', args);
        }

        var now = function now() {
          return Date.now ? Date.now() : +new Date();
        };

        var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

        function isDurationValid(m) {
          for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
              return false;
            }
          }

          var unitHasDecimal = false;

          for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
              if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
              }

              if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
              }
            }
          }

          return true;
        }

        function isValid$1() {
          return this._isValid;
        }

        function createInvalid$1() {
          return createDuration(NaN);
        }

        function Duration(duration) {
          var normalizedInput = normalizeObjectUnits(duration),
              years = normalizedInput.year || 0,
              quarters = normalizedInput.quarter || 0,
              months = normalizedInput.month || 0,
              weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
              days = normalizedInput.day || 0,
              hours = normalizedInput.hour || 0,
              minutes = normalizedInput.minute || 0,
              seconds = normalizedInput.second || 0,
              milliseconds = normalizedInput.millisecond || 0;
          this._isValid = isDurationValid(normalizedInput); // representation for dateAddRemove

          this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
          minutes * 6e4 + // 1000 * 60
          hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
          // Because of dateAddRemove treats 24 hours as different from a
          // day when working around DST, we need to store them separately

          this._days = +days + weeks * 7; // It is impossible to translate months into days without knowing
          // which months you are are talking about, so we have to store
          // it separately.

          this._months = +months + quarters * 3 + years * 12;
          this._data = {};
          this._locale = getLocale();

          this._bubble();
        }

        function isDuration(obj) {
          return obj instanceof Duration;
        }

        function absRound(number) {
          if (number < 0) {
            return Math.round(-1 * number) * -1;
          } else {
            return Math.round(number);
          }
        } // FORMATTING


        function offset(token, separator) {
          addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';

            if (offset < 0) {
              offset = -offset;
              sign = '-';
            }

            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
          });
        }

        offset('Z', ':');
        offset('ZZ', ''); // PARSING

        addRegexToken('Z', matchShortOffset);
        addRegexToken('ZZ', matchShortOffset);
        addParseToken(['Z', 'ZZ'], function (input, array, config) {
          config._useUTC = true;
          config._tzm = offsetFromString(matchShortOffset, input);
        }); // HELPERS
        // timezone chunker
        // '+10:00' > ['10',  '00']
        // '-1530'  > ['-15', '30']

        var chunkOffset = /([\+\-]|\d\d)/gi;

        function offsetFromString(matcher, string) {
          var matches = (string || '').match(matcher);

          if (matches === null) {
            return null;
          }

          var chunk = matches[matches.length - 1] || [];
          var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
          var minutes = +(parts[1] * 60) + toInt(parts[2]);
          return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
        } // Return a moment from input, that is local/utc/zone equivalent to model.


        function cloneWithOffset(input, model) {
          var res, diff;

          if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf(); // Use low-level api, because this fn is low-level api.

            res._d.setTime(res._d.valueOf() + diff);

            hooks.updateOffset(res, false);
            return res;
          } else {
            return createLocal(input).local();
          }
        }

        function getDateOffset(m) {
          // On Firefox.24 Date#getTimezoneOffset returns a floating point.
          // https://github.com/moment/moment/pull/1871
          return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
        } // HOOKS
        // This function will be called whenever a moment is mutated.
        // It is intended to keep the offset in sync with the timezone.


        hooks.updateOffset = function () {}; // MOMENTS
        // keepLocalTime = true means only change the timezone, without
        // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
        // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
        // +0200, so we adjust the time as needed, to be valid.
        //
        // Keeping the time actually adds/subtracts (one hour)
        // from the actual represented time. That is why we call updateOffset
        // a second time. In case it wants us to change the offset again
        // _changeInProgress == true case, then we have to adjust, because
        // there is no such time in the given timezone.


        function getSetOffset(input, keepLocalTime, keepMinutes) {
          var offset = this._offset || 0,
              localAdjust;

          if (!this.isValid()) {
            return input != null ? this : NaN;
          }

          if (input != null) {
            if (typeof input === 'string') {
              input = offsetFromString(matchShortOffset, input);

              if (input === null) {
                return this;
              }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
              input = input * 60;
            }

            if (!this._isUTC && keepLocalTime) {
              localAdjust = getDateOffset(this);
            }

            this._offset = input;
            this._isUTC = true;

            if (localAdjust != null) {
              this.add(localAdjust, 'm');
            }

            if (offset !== input) {
              if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
              } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
              }
            }

            return this;
          } else {
            return this._isUTC ? offset : getDateOffset(this);
          }
        }

        function getSetZone(input, keepLocalTime) {
          if (input != null) {
            if (typeof input !== 'string') {
              input = -input;
            }

            this.utcOffset(input, keepLocalTime);
            return this;
          } else {
            return -this.utcOffset();
          }
        }

        function setOffsetToUTC(keepLocalTime) {
          return this.utcOffset(0, keepLocalTime);
        }

        function setOffsetToLocal(keepLocalTime) {
          if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
              this.subtract(getDateOffset(this), 'm');
            }
          }

          return this;
        }

        function setOffsetToParsedOffset() {
          if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
          } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);

            if (tZone != null) {
              this.utcOffset(tZone);
            } else {
              this.utcOffset(0, true);
            }
          }

          return this;
        }

        function hasAlignedHourOffset(input) {
          if (!this.isValid()) {
            return false;
          }

          input = input ? createLocal(input).utcOffset() : 0;
          return (this.utcOffset() - input) % 60 === 0;
        }

        function isDaylightSavingTime() {
          return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
        }

        function isDaylightSavingTimeShifted() {
          if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
          }

          var c = {};
          copyConfig(c, this);
          c = prepareConfig(c);

          if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
          } else {
            this._isDSTShifted = false;
          }

          return this._isDSTShifted;
        }

        function isLocal() {
          return this.isValid() ? !this._isUTC : false;
        }

        function isUtcOffset() {
          return this.isValid() ? this._isUTC : false;
        }

        function isUtc() {
          return this.isValid() ? this._isUTC && this._offset === 0 : false;
        } // ASP.NET json date format regex


        var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/; // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        // and further modified to allow for strings containing both week and day

        var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

        function createDuration(input, key) {
          var duration = input,
              // matching against regexp is expensive, do it on demand
          match = null,
              sign,
              ret,
              diffRes;

          if (isDuration(input)) {
            duration = {
              ms: input._milliseconds,
              d: input._days,
              M: input._months
            };
          } else if (isNumber(input)) {
            duration = {};

            if (key) {
              duration[key] = input;
            } else {
              duration.milliseconds = input;
            }
          } else if (!!(match = aspNetRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
              y: 0,
              d: toInt(match[DATE]) * sign,
              h: toInt(match[HOUR]) * sign,
              m: toInt(match[MINUTE]) * sign,
              s: toInt(match[SECOND]) * sign,
              ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match

            };
          } else if (!!(match = isoRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
              y: parseIso(match[2], sign),
              M: parseIso(match[3], sign),
              w: parseIso(match[4], sign),
              d: parseIso(match[5], sign),
              h: parseIso(match[6], sign),
              m: parseIso(match[7], sign),
              s: parseIso(match[8], sign)
            };
          } else if (duration == null) {
            // checks for null or undefined
            duration = {};
          } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
          }

          ret = new Duration(duration);

          if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
          }

          return ret;
        }

        createDuration.fn = Duration.prototype;
        createDuration.invalid = createInvalid$1;

        function parseIso(inp, sign) {
          // We'd normally use ~~inp for this, but unfortunately it also
          // converts floats to ints.
          // inp may be undefined, so careful calling replace on it.
          var res = inp && parseFloat(inp.replace(',', '.')); // apply sign while we're at it

          return (isNaN(res) ? 0 : res) * sign;
        }

        function positiveMomentsDifference(base, other) {
          var res = {};
          res.months = other.month() - base.month() + (other.year() - base.year()) * 12;

          if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
          }

          res.milliseconds = +other - +base.clone().add(res.months, 'M');
          return res;
        }

        function momentsDifference(base, other) {
          var res;

          if (!(base.isValid() && other.isValid())) {
            return {
              milliseconds: 0,
              months: 0
            };
          }

          other = cloneWithOffset(other, base);

          if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
          } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
          }

          return res;
        } // TODO: remove 'name' arg after deprecation is removed


        function createAdder(direction, name) {
          return function (val, period) {
            var dur, tmp; //invert the arguments, but complain about it

            if (period !== null && !isNaN(+period)) {
              deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
              tmp = val;
              val = period;
              period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
          };
        }

        function addSubtract(mom, duration, isAdding, updateOffset) {
          var milliseconds = duration._milliseconds,
              days = absRound(duration._days),
              months = absRound(duration._months);

          if (!mom.isValid()) {
            // No op
            return;
          }

          updateOffset = updateOffset == null ? true : updateOffset;

          if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
          }

          if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
          }

          if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
          }

          if (updateOffset) {
            hooks.updateOffset(mom, days || months);
          }
        }

        var add = createAdder(1, 'add');
        var subtract = createAdder(-1, 'subtract');

        function getCalendarFormat(myMoment, now) {
          var diff = myMoment.diff(now, 'days', true);
          return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
        }

        function calendar$1(time, formats) {
          // We want to compare the start of today, vs this.
          // Getting start-of-today depends on whether we're local/utc/offset or not.
          var now = time || createLocal(),
              sod = cloneWithOffset(now, this).startOf('day'),
              format = hooks.calendarFormat(this, sod) || 'sameElse';
          var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
          return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
        }

        function clone() {
          return new Moment(this);
        }

        function isAfter(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);

          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }

          units = normalizeUnits(units) || 'millisecond';

          if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
          } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
          }
        }

        function isBefore(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);

          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }

          units = normalizeUnits(units) || 'millisecond';

          if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
          } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
          }
        }

        function isBetween(from, to, units, inclusivity) {
          var localFrom = isMoment(from) ? from : createLocal(from),
              localTo = isMoment(to) ? to : createLocal(to);

          if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
          }

          inclusivity = inclusivity || '()';
          return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
        }

        function isSame(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input),
              inputMs;

          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }

          units = normalizeUnits(units) || 'millisecond';

          if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
          } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
          }
        }

        function isSameOrAfter(input, units) {
          return this.isSame(input, units) || this.isAfter(input, units);
        }

        function isSameOrBefore(input, units) {
          return this.isSame(input, units) || this.isBefore(input, units);
        }

        function diff(input, units, asFloat) {
          var that, zoneDelta, output;

          if (!this.isValid()) {
            return NaN;
          }

          that = cloneWithOffset(input, this);

          if (!that.isValid()) {
            return NaN;
          }

          zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
          units = normalizeUnits(units);

          switch (units) {
            case 'year':
              output = monthDiff(this, that) / 12;
              break;

            case 'month':
              output = monthDiff(this, that);
              break;

            case 'quarter':
              output = monthDiff(this, that) / 3;
              break;

            case 'second':
              output = (this - that) / 1e3;
              break;
            // 1000

            case 'minute':
              output = (this - that) / 6e4;
              break;
            // 1000 * 60

            case 'hour':
              output = (this - that) / 36e5;
              break;
            // 1000 * 60 * 60

            case 'day':
              output = (this - that - zoneDelta) / 864e5;
              break;
            // 1000 * 60 * 60 * 24, negate dst

            case 'week':
              output = (this - that - zoneDelta) / 6048e5;
              break;
            // 1000 * 60 * 60 * 24 * 7, negate dst

            default:
              output = this - that;
          }

          return asFloat ? output : absFloor(output);
        }

        function monthDiff(a, b) {
          // difference in months
          var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
              // b is in (anchor - 1 month, anchor + 1 month)
          anchor = a.clone().add(wholeMonthDiff, 'months'),
              anchor2,
              adjust;

          if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months'); // linear across the month

            adjust = (b - anchor) / (anchor - anchor2);
          } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months'); // linear across the month

            adjust = (b - anchor) / (anchor2 - anchor);
          } //check for negative zero, return zero if negative zero


          return -(wholeMonthDiff + adjust) || 0;
        }

        hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
        hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

        function toString() {
          return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
        }

        function toISOString(keepOffset) {
          if (!this.isValid()) {
            return null;
          }

          var utc = keepOffset !== true;
          var m = utc ? this.clone().utc() : this;

          if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
          }

          if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
              return this.toDate().toISOString();
            } else {
              return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
          }

          return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        /**
         * Return a human readable representation of a moment that can
         * also be evaluated to get a new moment which is the same
         *
         * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
         */


        function inspect() {
          if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
          }

          var func = 'moment';
          var zone = '';

          if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
          }

          var prefix = '[' + func + '("]';
          var year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
          var datetime = '-MM-DD[T]HH:mm:ss.SSS';
          var suffix = zone + '[")]';
          return this.format(prefix + year + datetime + suffix);
        }

        function format(inputString) {
          if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
          }

          var output = formatMoment(this, inputString);
          return this.localeData().postformat(output);
        }

        function from(time, withoutSuffix) {
          if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
            return createDuration({
              to: this,
              from: time
            }).locale(this.locale()).humanize(!withoutSuffix);
          } else {
            return this.localeData().invalidDate();
          }
        }

        function fromNow(withoutSuffix) {
          return this.from(createLocal(), withoutSuffix);
        }

        function to(time, withoutSuffix) {
          if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
            return createDuration({
              from: this,
              to: time
            }).locale(this.locale()).humanize(!withoutSuffix);
          } else {
            return this.localeData().invalidDate();
          }
        }

        function toNow(withoutSuffix) {
          return this.to(createLocal(), withoutSuffix);
        } // If passed a locale key, it will set the locale for this
        // instance.  Otherwise, it will return the locale configuration
        // variables for this instance.


        function locale(key) {
          var newLocaleData;

          if (key === undefined) {
            return this._locale._abbr;
          } else {
            newLocaleData = getLocale(key);

            if (newLocaleData != null) {
              this._locale = newLocaleData;
            }

            return this;
          }
        }

        var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
          if (key === undefined) {
            return this.localeData();
          } else {
            return this.locale(key);
          }
        });

        function localeData() {
          return this._locale;
        }

        var MS_PER_SECOND = 1000;
        var MS_PER_MINUTE = 60 * MS_PER_SECOND;
        var MS_PER_HOUR = 60 * MS_PER_MINUTE;
        var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR; // actual modulo - handles negative numbers (for dates before 1970):

        function mod$1(dividend, divisor) {
          return (dividend % divisor + divisor) % divisor;
        }

        function localStartOfDate(y, m, d) {
          // the date constructor remaps years 0-99 to 1900-1999
          if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
          } else {
            return new Date(y, m, d).valueOf();
          }
        }

        function utcStartOfDate(y, m, d) {
          // Date.UTC remaps years 0-99 to 1900-1999
          if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
          } else {
            return Date.UTC(y, m, d);
          }
        }

        function startOf(units) {
          var time;
          units = normalizeUnits(units);

          if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
          }

          var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

          switch (units) {
            case 'year':
              time = startOfDate(this.year(), 0, 1);
              break;

            case 'quarter':
              time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
              break;

            case 'month':
              time = startOfDate(this.year(), this.month(), 1);
              break;

            case 'week':
              time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
              break;

            case 'isoWeek':
              time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
              break;

            case 'day':
            case 'date':
              time = startOfDate(this.year(), this.month(), this.date());
              break;

            case 'hour':
              time = this._d.valueOf();
              time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
              break;

            case 'minute':
              time = this._d.valueOf();
              time -= mod$1(time, MS_PER_MINUTE);
              break;

            case 'second':
              time = this._d.valueOf();
              time -= mod$1(time, MS_PER_SECOND);
              break;
          }

          this._d.setTime(time);

          hooks.updateOffset(this, true);
          return this;
        }

        function endOf(units) {
          var time;
          units = normalizeUnits(units);

          if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
          }

          var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

          switch (units) {
            case 'year':
              time = startOfDate(this.year() + 1, 0, 1) - 1;
              break;

            case 'quarter':
              time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
              break;

            case 'month':
              time = startOfDate(this.year(), this.month() + 1, 1) - 1;
              break;

            case 'week':
              time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
              break;

            case 'isoWeek':
              time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
              break;

            case 'day':
            case 'date':
              time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
              break;

            case 'hour':
              time = this._d.valueOf();
              time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
              break;

            case 'minute':
              time = this._d.valueOf();
              time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
              break;

            case 'second':
              time = this._d.valueOf();
              time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
              break;
          }

          this._d.setTime(time);

          hooks.updateOffset(this, true);
          return this;
        }

        function valueOf() {
          return this._d.valueOf() - (this._offset || 0) * 60000;
        }

        function unix() {
          return Math.floor(this.valueOf() / 1000);
        }

        function toDate() {
          return new Date(this.valueOf());
        }

        function toArray() {
          var m = this;
          return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
        }

        function toObject() {
          var m = this;
          return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
          };
        }

        function toJSON() {
          // new Date(NaN).toJSON() === null
          return this.isValid() ? this.toISOString() : null;
        }

        function isValid$2() {
          return isValid(this);
        }

        function parsingFlags() {
          return extend({}, getParsingFlags(this));
        }

        function invalidAt() {
          return getParsingFlags(this).overflow;
        }

        function creationData() {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
          };
        } // FORMATTING


        addFormatToken(0, ['gg', 2], 0, function () {
          return this.weekYear() % 100;
        });
        addFormatToken(0, ['GG', 2], 0, function () {
          return this.isoWeekYear() % 100;
        });

        function addWeekYearFormatToken(token, getter) {
          addFormatToken(0, [token, token.length], 0, getter);
        }

        addWeekYearFormatToken('gggg', 'weekYear');
        addWeekYearFormatToken('ggggg', 'weekYear');
        addWeekYearFormatToken('GGGG', 'isoWeekYear');
        addWeekYearFormatToken('GGGGG', 'isoWeekYear'); // ALIASES

        addUnitAlias('weekYear', 'gg');
        addUnitAlias('isoWeekYear', 'GG'); // PRIORITY

        addUnitPriority('weekYear', 1);
        addUnitPriority('isoWeekYear', 1); // PARSING

        addRegexToken('G', matchSigned);
        addRegexToken('g', matchSigned);
        addRegexToken('GG', match1to2, match2);
        addRegexToken('gg', match1to2, match2);
        addRegexToken('GGGG', match1to4, match4);
        addRegexToken('gggg', match1to4, match4);
        addRegexToken('GGGGG', match1to6, match6);
        addRegexToken('ggggg', match1to6, match6);
        addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
          week[token.substr(0, 2)] = toInt(input);
        });
        addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
          week[token] = hooks.parseTwoDigitYear(input);
        }); // MOMENTS

        function getSetWeekYear(input) {
          return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
        }

        function getSetISOWeekYear(input) {
          return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
        }

        function getISOWeeksInYear() {
          return weeksInYear(this.year(), 1, 4);
        }

        function getWeeksInYear() {
          var weekInfo = this.localeData()._week;

          return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        }

        function getSetWeekYearHelper(input, week, weekday, dow, doy) {
          var weeksTarget;

          if (input == null) {
            return weekOfYear(this, dow, doy).year;
          } else {
            weeksTarget = weeksInYear(input, dow, doy);

            if (week > weeksTarget) {
              week = weeksTarget;
            }

            return setWeekAll.call(this, input, week, weekday, dow, doy);
          }
        }

        function setWeekAll(weekYear, week, weekday, dow, doy) {
          var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
              date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
          this.year(date.getUTCFullYear());
          this.month(date.getUTCMonth());
          this.date(date.getUTCDate());
          return this;
        } // FORMATTING


        addFormatToken('Q', 0, 'Qo', 'quarter'); // ALIASES

        addUnitAlias('quarter', 'Q'); // PRIORITY

        addUnitPriority('quarter', 7); // PARSING

        addRegexToken('Q', match1);
        addParseToken('Q', function (input, array) {
          array[MONTH] = (toInt(input) - 1) * 3;
        }); // MOMENTS

        function getSetQuarter(input) {
          return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        } // FORMATTING


        addFormatToken('D', ['DD', 2], 'Do', 'date'); // ALIASES

        addUnitAlias('date', 'D'); // PRIORITY

        addUnitPriority('date', 9); // PARSING

        addRegexToken('D', match1to2);
        addRegexToken('DD', match1to2, match2);
        addRegexToken('Do', function (isStrict, locale) {
          // TODO: Remove "ordinalParse" fallback in next major release.
          return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
        });
        addParseToken(['D', 'DD'], DATE);
        addParseToken('Do', function (input, array) {
          array[DATE] = toInt(input.match(match1to2)[0]);
        }); // MOMENTS

        var getSetDayOfMonth = makeGetSet('Date', true); // FORMATTING

        addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'); // ALIASES

        addUnitAlias('dayOfYear', 'DDD'); // PRIORITY

        addUnitPriority('dayOfYear', 4); // PARSING

        addRegexToken('DDD', match1to3);
        addRegexToken('DDDD', match3);
        addParseToken(['DDD', 'DDDD'], function (input, array, config) {
          config._dayOfYear = toInt(input);
        }); // HELPERS
        // MOMENTS

        function getSetDayOfYear(input) {
          var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
          return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
        } // FORMATTING


        addFormatToken('m', ['mm', 2], 0, 'minute'); // ALIASES

        addUnitAlias('minute', 'm'); // PRIORITY

        addUnitPriority('minute', 14); // PARSING

        addRegexToken('m', match1to2);
        addRegexToken('mm', match1to2, match2);
        addParseToken(['m', 'mm'], MINUTE); // MOMENTS

        var getSetMinute = makeGetSet('Minutes', false); // FORMATTING

        addFormatToken('s', ['ss', 2], 0, 'second'); // ALIASES

        addUnitAlias('second', 's'); // PRIORITY

        addUnitPriority('second', 15); // PARSING

        addRegexToken('s', match1to2);
        addRegexToken('ss', match1to2, match2);
        addParseToken(['s', 'ss'], SECOND); // MOMENTS

        var getSetSecond = makeGetSet('Seconds', false); // FORMATTING

        addFormatToken('S', 0, 0, function () {
          return ~~(this.millisecond() / 100);
        });
        addFormatToken(0, ['SS', 2], 0, function () {
          return ~~(this.millisecond() / 10);
        });
        addFormatToken(0, ['SSS', 3], 0, 'millisecond');
        addFormatToken(0, ['SSSS', 4], 0, function () {
          return this.millisecond() * 10;
        });
        addFormatToken(0, ['SSSSS', 5], 0, function () {
          return this.millisecond() * 100;
        });
        addFormatToken(0, ['SSSSSS', 6], 0, function () {
          return this.millisecond() * 1000;
        });
        addFormatToken(0, ['SSSSSSS', 7], 0, function () {
          return this.millisecond() * 10000;
        });
        addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
          return this.millisecond() * 100000;
        });
        addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
          return this.millisecond() * 1000000;
        }); // ALIASES

        addUnitAlias('millisecond', 'ms'); // PRIORITY

        addUnitPriority('millisecond', 16); // PARSING

        addRegexToken('S', match1to3, match1);
        addRegexToken('SS', match1to3, match2);
        addRegexToken('SSS', match1to3, match3);
        var token;

        for (token = 'SSSS'; token.length <= 9; token += 'S') {
          addRegexToken(token, matchUnsigned);
        }

        function parseMs(input, array) {
          array[MILLISECOND] = toInt(('0.' + input) * 1000);
        }

        for (token = 'S'; token.length <= 9; token += 'S') {
          addParseToken(token, parseMs);
        } // MOMENTS


        var getSetMillisecond = makeGetSet('Milliseconds', false); // FORMATTING

        addFormatToken('z', 0, 0, 'zoneAbbr');
        addFormatToken('zz', 0, 0, 'zoneName'); // MOMENTS

        function getZoneAbbr() {
          return this._isUTC ? 'UTC' : '';
        }

        function getZoneName() {
          return this._isUTC ? 'Coordinated Universal Time' : '';
        }

        var proto = Moment.prototype;
        proto.add = add;
        proto.calendar = calendar$1;
        proto.clone = clone;
        proto.diff = diff;
        proto.endOf = endOf;
        proto.format = format;
        proto.from = from;
        proto.fromNow = fromNow;
        proto.to = to;
        proto.toNow = toNow;
        proto.get = stringGet;
        proto.invalidAt = invalidAt;
        proto.isAfter = isAfter;
        proto.isBefore = isBefore;
        proto.isBetween = isBetween;
        proto.isSame = isSame;
        proto.isSameOrAfter = isSameOrAfter;
        proto.isSameOrBefore = isSameOrBefore;
        proto.isValid = isValid$2;
        proto.lang = lang;
        proto.locale = locale;
        proto.localeData = localeData;
        proto.max = prototypeMax;
        proto.min = prototypeMin;
        proto.parsingFlags = parsingFlags;
        proto.set = stringSet;
        proto.startOf = startOf;
        proto.subtract = subtract;
        proto.toArray = toArray;
        proto.toObject = toObject;
        proto.toDate = toDate;
        proto.toISOString = toISOString;
        proto.inspect = inspect;
        proto.toJSON = toJSON;
        proto.toString = toString;
        proto.unix = unix;
        proto.valueOf = valueOf;
        proto.creationData = creationData;
        proto.year = getSetYear;
        proto.isLeapYear = getIsLeapYear;
        proto.weekYear = getSetWeekYear;
        proto.isoWeekYear = getSetISOWeekYear;
        proto.quarter = proto.quarters = getSetQuarter;
        proto.month = getSetMonth;
        proto.daysInMonth = getDaysInMonth;
        proto.week = proto.weeks = getSetWeek;
        proto.isoWeek = proto.isoWeeks = getSetISOWeek;
        proto.weeksInYear = getWeeksInYear;
        proto.isoWeeksInYear = getISOWeeksInYear;
        proto.date = getSetDayOfMonth;
        proto.day = proto.days = getSetDayOfWeek;
        proto.weekday = getSetLocaleDayOfWeek;
        proto.isoWeekday = getSetISODayOfWeek;
        proto.dayOfYear = getSetDayOfYear;
        proto.hour = proto.hours = getSetHour;
        proto.minute = proto.minutes = getSetMinute;
        proto.second = proto.seconds = getSetSecond;
        proto.millisecond = proto.milliseconds = getSetMillisecond;
        proto.utcOffset = getSetOffset;
        proto.utc = setOffsetToUTC;
        proto.local = setOffsetToLocal;
        proto.parseZone = setOffsetToParsedOffset;
        proto.hasAlignedHourOffset = hasAlignedHourOffset;
        proto.isDST = isDaylightSavingTime;
        proto.isLocal = isLocal;
        proto.isUtcOffset = isUtcOffset;
        proto.isUtc = isUtc;
        proto.isUTC = isUtc;
        proto.zoneAbbr = getZoneAbbr;
        proto.zoneName = getZoneName;
        proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
        proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
        proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
        proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
        proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

        function createUnix(input) {
          return createLocal(input * 1000);
        }

        function createInZone() {
          return createLocal.apply(null, arguments).parseZone();
        }

        function preParsePostFormat(string) {
          return string;
        }

        var proto$1 = Locale.prototype;
        proto$1.calendar = calendar;
        proto$1.longDateFormat = longDateFormat;
        proto$1.invalidDate = invalidDate;
        proto$1.ordinal = ordinal;
        proto$1.preparse = preParsePostFormat;
        proto$1.postformat = preParsePostFormat;
        proto$1.relativeTime = relativeTime;
        proto$1.pastFuture = pastFuture;
        proto$1.set = set;
        proto$1.months = localeMonths;
        proto$1.monthsShort = localeMonthsShort;
        proto$1.monthsParse = localeMonthsParse;
        proto$1.monthsRegex = monthsRegex;
        proto$1.monthsShortRegex = monthsShortRegex;
        proto$1.week = localeWeek;
        proto$1.firstDayOfYear = localeFirstDayOfYear;
        proto$1.firstDayOfWeek = localeFirstDayOfWeek;
        proto$1.weekdays = localeWeekdays;
        proto$1.weekdaysMin = localeWeekdaysMin;
        proto$1.weekdaysShort = localeWeekdaysShort;
        proto$1.weekdaysParse = localeWeekdaysParse;
        proto$1.weekdaysRegex = weekdaysRegex;
        proto$1.weekdaysShortRegex = weekdaysShortRegex;
        proto$1.weekdaysMinRegex = weekdaysMinRegex;
        proto$1.isPM = localeIsPM;
        proto$1.meridiem = localeMeridiem;

        function get$1(format, index, field, setter) {
          var locale = getLocale();
          var utc = createUTC().set(setter, index);
          return locale[field](utc, format);
        }

        function listMonthsImpl(format, index, field) {
          if (isNumber(format)) {
            index = format;
            format = undefined;
          }

          format = format || '';

          if (index != null) {
            return get$1(format, index, field, 'month');
          }

          var i;
          var out = [];

          for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
          }

          return out;
        } // ()
        // (5)
        // (fmt, 5)
        // (fmt)
        // (true)
        // (true, 5)
        // (true, fmt, 5)
        // (true, fmt)


        function listWeekdaysImpl(localeSorted, format, index, field) {
          if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
              index = format;
              format = undefined;
            }

            format = format || '';
          } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
              index = format;
              format = undefined;
            }

            format = format || '';
          }

          var locale = getLocale(),
              shift = localeSorted ? locale._week.dow : 0;

          if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
          }

          var i;
          var out = [];

          for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
          }

          return out;
        }

        function listMonths(format, index) {
          return listMonthsImpl(format, index, 'months');
        }

        function listMonthsShort(format, index) {
          return listMonthsImpl(format, index, 'monthsShort');
        }

        function listWeekdays(localeSorted, format, index) {
          return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
        }

        function listWeekdaysShort(localeSorted, format, index) {
          return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
        }

        function listWeekdaysMin(localeSorted, format, index) {
          return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
        }

        getSetGlobalLocale('en', {
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function ordinal(number) {
            var b = number % 10,
                output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return number + output;
          }
        }); // Side effect imports

        hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
        hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
        var mathAbs = Math.abs;

        function abs() {
          var data = this._data;
          this._milliseconds = mathAbs(this._milliseconds);
          this._days = mathAbs(this._days);
          this._months = mathAbs(this._months);
          data.milliseconds = mathAbs(data.milliseconds);
          data.seconds = mathAbs(data.seconds);
          data.minutes = mathAbs(data.minutes);
          data.hours = mathAbs(data.hours);
          data.months = mathAbs(data.months);
          data.years = mathAbs(data.years);
          return this;
        }

        function addSubtract$1(duration, input, value, direction) {
          var other = createDuration(input, value);
          duration._milliseconds += direction * other._milliseconds;
          duration._days += direction * other._days;
          duration._months += direction * other._months;
          return duration._bubble();
        } // supports only 2.0-style add(1, 's') or add(duration)


        function add$1(input, value) {
          return addSubtract$1(this, input, value, 1);
        } // supports only 2.0-style subtract(1, 's') or subtract(duration)


        function subtract$1(input, value) {
          return addSubtract$1(this, input, value, -1);
        }

        function absCeil(number) {
          if (number < 0) {
            return Math.floor(number);
          } else {
            return Math.ceil(number);
          }
        }

        function bubble() {
          var milliseconds = this._milliseconds;
          var days = this._days;
          var months = this._months;
          var data = this._data;
          var seconds, minutes, hours, years, monthsFromDays; // if we have a mix of positive and negative values, bubble down first
          // check: https://github.com/moment/moment/issues/2166

          if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
          } // The following code bubbles up values, see the tests for
          // examples of what that means.


          data.milliseconds = milliseconds % 1000;
          seconds = absFloor(milliseconds / 1000);
          data.seconds = seconds % 60;
          minutes = absFloor(seconds / 60);
          data.minutes = minutes % 60;
          hours = absFloor(minutes / 60);
          data.hours = hours % 24;
          days += absFloor(hours / 24); // convert days to months

          monthsFromDays = absFloor(daysToMonths(days));
          months += monthsFromDays;
          days -= absCeil(monthsToDays(monthsFromDays)); // 12 months -> 1 year

          years = absFloor(months / 12);
          months %= 12;
          data.days = days;
          data.months = months;
          data.years = years;
          return this;
        }

        function daysToMonths(days) {
          // 400 years have 146097 days (taking into account leap year rules)
          // 400 years have 12 months === 4800
          return days * 4800 / 146097;
        }

        function monthsToDays(months) {
          // the reverse of daysToMonths
          return months * 146097 / 4800;
        }

        function as(units) {
          if (!this.isValid()) {
            return NaN;
          }

          var days;
          var months;
          var milliseconds = this._milliseconds;
          units = normalizeUnits(units);

          if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);

            switch (units) {
              case 'month':
                return months;

              case 'quarter':
                return months / 3;

              case 'year':
                return months / 12;
            }
          } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));

            switch (units) {
              case 'week':
                return days / 7 + milliseconds / 6048e5;

              case 'day':
                return days + milliseconds / 864e5;

              case 'hour':
                return days * 24 + milliseconds / 36e5;

              case 'minute':
                return days * 1440 + milliseconds / 6e4;

              case 'second':
                return days * 86400 + milliseconds / 1000;
              // Math.floor prevents floating point math errors here

              case 'millisecond':
                return Math.floor(days * 864e5) + milliseconds;

              default:
                throw new Error('Unknown unit ' + units);
            }
          }
        } // TODO: Use this.as('ms')?


        function valueOf$1() {
          if (!this.isValid()) {
            return NaN;
          }

          return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
        }

        function makeAs(alias) {
          return function () {
            return this.as(alias);
          };
        }

        var asMilliseconds = makeAs('ms');
        var asSeconds = makeAs('s');
        var asMinutes = makeAs('m');
        var asHours = makeAs('h');
        var asDays = makeAs('d');
        var asWeeks = makeAs('w');
        var asMonths = makeAs('M');
        var asQuarters = makeAs('Q');
        var asYears = makeAs('y');

        function clone$1() {
          return createDuration(this);
        }

        function get$2(units) {
          units = normalizeUnits(units);
          return this.isValid() ? this[units + 's']() : NaN;
        }

        function makeGetter(name) {
          return function () {
            return this.isValid() ? this._data[name] : NaN;
          };
        }

        var milliseconds = makeGetter('milliseconds');
        var seconds = makeGetter('seconds');
        var minutes = makeGetter('minutes');
        var hours = makeGetter('hours');
        var days = makeGetter('days');
        var months = makeGetter('months');
        var years = makeGetter('years');

        function weeks() {
          return absFloor(this.days() / 7);
        }

        var round = Math.round;
        var thresholds = {
          ss: 44,
          // a few seconds to seconds
          s: 45,
          // seconds to minute
          m: 45,
          // minutes to hour
          h: 22,
          // hours to day
          d: 26,
          // days to month
          M: 11 // months to year

        }; // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize

        function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
          return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
        }

        function relativeTime$1(posNegDuration, withoutSuffix, locale) {
          var duration = createDuration(posNegDuration).abs();
          var seconds = round(duration.as('s'));
          var minutes = round(duration.as('m'));
          var hours = round(duration.as('h'));
          var days = round(duration.as('d'));
          var months = round(duration.as('M'));
          var years = round(duration.as('y'));
          var a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
          a[2] = withoutSuffix;
          a[3] = +posNegDuration > 0;
          a[4] = locale;
          return substituteTimeAgo.apply(null, a);
        } // This function allows you to set the rounding function for relative time strings


        function getSetRelativeTimeRounding(roundingFunction) {
          if (roundingFunction === undefined) {
            return round;
          }

          if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
          }

          return false;
        } // This function allows you to set a threshold for relative time strings


        function getSetRelativeTimeThreshold(threshold, limit) {
          if (thresholds[threshold] === undefined) {
            return false;
          }

          if (limit === undefined) {
            return thresholds[threshold];
          }

          thresholds[threshold] = limit;

          if (threshold === 's') {
            thresholds.ss = limit - 1;
          }

          return true;
        }

        function humanize(withSuffix) {
          if (!this.isValid()) {
            return this.localeData().invalidDate();
          }

          var locale = this.localeData();
          var output = relativeTime$1(this, !withSuffix, locale);

          if (withSuffix) {
            output = locale.pastFuture(+this, output);
          }

          return locale.postformat(output);
        }

        var abs$1 = Math.abs;

        function sign(x) {
          return (x > 0) - (x < 0) || +x;
        }

        function toISOString$1() {
          // for ISO strings we do not use the normal bubbling rules:
          //  * milliseconds bubble up until they become hours
          //  * days do not bubble at all
          //  * months bubble up until they become years
          // This is because there is no context-free conversion between hours and days
          // (think of clock changes)
          // and also not between days and months (28-31 days per month)
          if (!this.isValid()) {
            return this.localeData().invalidDate();
          }

          var seconds = abs$1(this._milliseconds) / 1000;
          var days = abs$1(this._days);
          var months = abs$1(this._months);
          var minutes, hours, years; // 3600 seconds -> 60 minutes -> 1 hour

          minutes = absFloor(seconds / 60);
          hours = absFloor(minutes / 60);
          seconds %= 60;
          minutes %= 60; // 12 months -> 1 year

          years = absFloor(months / 12);
          months %= 12; // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js

          var Y = years;
          var M = months;
          var D = days;
          var h = hours;
          var m = minutes;
          var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
          var total = this.asSeconds();

          if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
          }

          var totalSign = total < 0 ? '-' : '';
          var ymSign = sign(this._months) !== sign(total) ? '-' : '';
          var daysSign = sign(this._days) !== sign(total) ? '-' : '';
          var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
          return totalSign + 'P' + (Y ? ymSign + Y + 'Y' : '') + (M ? ymSign + M + 'M' : '') + (D ? daysSign + D + 'D' : '') + (h || m || s ? 'T' : '') + (h ? hmsSign + h + 'H' : '') + (m ? hmsSign + m + 'M' : '') + (s ? hmsSign + s + 'S' : '');
        }

        var proto$2 = Duration.prototype;
        proto$2.isValid = isValid$1;
        proto$2.abs = abs;
        proto$2.add = add$1;
        proto$2.subtract = subtract$1;
        proto$2.as = as;
        proto$2.asMilliseconds = asMilliseconds;
        proto$2.asSeconds = asSeconds;
        proto$2.asMinutes = asMinutes;
        proto$2.asHours = asHours;
        proto$2.asDays = asDays;
        proto$2.asWeeks = asWeeks;
        proto$2.asMonths = asMonths;
        proto$2.asQuarters = asQuarters;
        proto$2.asYears = asYears;
        proto$2.valueOf = valueOf$1;
        proto$2._bubble = bubble;
        proto$2.clone = clone$1;
        proto$2.get = get$2;
        proto$2.milliseconds = milliseconds;
        proto$2.seconds = seconds;
        proto$2.minutes = minutes;
        proto$2.hours = hours;
        proto$2.days = days;
        proto$2.weeks = weeks;
        proto$2.months = months;
        proto$2.years = years;
        proto$2.humanize = humanize;
        proto$2.toISOString = toISOString$1;
        proto$2.toString = toISOString$1;
        proto$2.toJSON = toISOString$1;
        proto$2.locale = locale;
        proto$2.localeData = localeData;
        proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
        proto$2.lang = lang; // Side effect imports
        // FORMATTING

        addFormatToken('X', 0, 0, 'unix');
        addFormatToken('x', 0, 0, 'valueOf'); // PARSING

        addRegexToken('x', matchSigned);
        addRegexToken('X', matchTimestamp);
        addParseToken('X', function (input, array, config) {
          config._d = new Date(parseFloat(input, 10) * 1000);
        });
        addParseToken('x', function (input, array, config) {
          config._d = new Date(toInt(input));
        }); // Side effect imports

        hooks.version = '2.24.0';
        setHookCallback(createLocal);
        hooks.fn = proto;
        hooks.min = min;
        hooks.max = max;
        hooks.now = now;
        hooks.utc = createUTC;
        hooks.unix = createUnix;
        hooks.months = listMonths;
        hooks.isDate = isDate;
        hooks.locale = getSetGlobalLocale;
        hooks.invalid = createInvalid;
        hooks.duration = createDuration;
        hooks.isMoment = isMoment;
        hooks.weekdays = listWeekdays;
        hooks.parseZone = createInZone;
        hooks.localeData = getLocale;
        hooks.isDuration = isDuration;
        hooks.monthsShort = listMonthsShort;
        hooks.weekdaysMin = listWeekdaysMin;
        hooks.defineLocale = defineLocale;
        hooks.updateLocale = updateLocale;
        hooks.locales = listLocales;
        hooks.weekdaysShort = listWeekdaysShort;
        hooks.normalizeUnits = normalizeUnits;
        hooks.relativeTimeRounding = getSetRelativeTimeRounding;
        hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
        hooks.calendarFormat = getCalendarFormat;
        hooks.prototype = proto; // currently HTML5 input type only supports 24-hour formats

        hooks.HTML5_FMT = {
          DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
          // <input type="datetime-local" />
          DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
          // <input type="datetime-local" step="1" />
          DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
          // <input type="datetime-local" step="0.001" />
          DATE: 'YYYY-MM-DD',
          // <input type="date" />
          TIME: 'HH:mm',
          // <input type="time" />
          TIME_SECONDS: 'HH:mm:ss',
          // <input type="time" step="1" />
          TIME_MS: 'HH:mm:ss.SSS',
          // <input type="time" step="0.001" />
          WEEK: 'GGGG-[W]WW',
          // <input type="week" />
          MONTH: 'YYYY-MM' // <input type="month" />

        };
        return hooks;
      });
      /* WEBPACK VAR INJECTION */

    }).call(this, __webpack_require__(
    /*! ./../webpack/buildin/module.js */
    "./node_modules/webpack/buildin/module.js")(module));
    /***/
  },

  /***/
  "./node_modules/rxjs/internal/BehaviorSubject.js":
  /*!*******************************************************!*\
    !*** ./node_modules/rxjs/internal/BehaviorSubject.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalBehaviorSubjectJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subject_1 = __webpack_require__(
    /*! ./Subject */
    "./node_modules/rxjs/internal/Subject.js");

    var ObjectUnsubscribedError_1 = __webpack_require__(
    /*! ./util/ObjectUnsubscribedError */
    "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");

    var BehaviorSubject = function (_super) {
      __extends(BehaviorSubject, _super);

      function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;

        _this._value = _value;
        return _this;
      }

      Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function get() {
          return this.getValue();
        },
        enumerable: true,
        configurable: true
      });

      BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);

        if (subscription && !subscription.closed) {
          subscriber.next(this._value);
        }

        return subscription;
      };

      BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
          throw this.thrownError;
        } else if (this.closed) {
          throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        } else {
          return this._value;
        }
      };

      BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
      };

      return BehaviorSubject;
    }(Subject_1.Subject);

    exports.BehaviorSubject = BehaviorSubject; //# sourceMappingURL=BehaviorSubject.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Observable.js":
  /*!**************************************************!*\
    !*** ./node_modules/rxjs/internal/Observable.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObservableJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var canReportError_1 = __webpack_require__(
    /*! ./util/canReportError */
    "./node_modules/rxjs/internal/util/canReportError.js");

    var toSubscriber_1 = __webpack_require__(
    /*! ./util/toSubscriber */
    "./node_modules/rxjs/internal/util/toSubscriber.js");

    var observable_1 = __webpack_require__(
    /*! ./symbol/observable */
    "./node_modules/rxjs/internal/symbol/observable.js");

    var pipe_1 = __webpack_require__(
    /*! ./util/pipe */
    "./node_modules/rxjs/internal/util/pipe.js");

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var Observable = function () {
      function Observable(subscribe) {
        this._isScalar = false;

        if (subscribe) {
          this._subscribe = subscribe;
        }
      }

      Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
      };

      Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);

        if (operator) {
          sink.add(operator.call(sink, this.source));
        } else {
          sink.add(this.source || config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        }

        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;

            if (sink.syncErrorThrown) {
              throw sink.syncErrorValue;
            }
          }
        }

        return sink;
      };

      Observable.prototype._trySubscribe = function (sink) {
        try {
          return this._subscribe(sink);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
          }

          if (canReportError_1.canReportError(sink)) {
            sink.error(err);
          } else {
            console.warn(err);
          }
        }
      };

      Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;

        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
          var subscription;
          subscription = _this.subscribe(function (value) {
            try {
              next(value);
            } catch (err) {
              reject(err);

              if (subscription) {
                subscription.unsubscribe();
              }
            }
          }, reject, resolve);
        });
      };

      Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
      };

      Observable.prototype[observable_1.observable] = function () {
        return this;
      };

      Observable.prototype.pipe = function () {
        var operations = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          operations[_i] = arguments[_i];
        }

        if (operations.length === 0) {
          return this;
        }

        return pipe_1.pipeFromArray(operations)(this);
      };

      Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;

        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
          var value;

          _this.subscribe(function (x) {
            return value = x;
          }, function (err) {
            return reject(err);
          }, function () {
            return resolve(value);
          });
        });
      };

      Observable.create = function (subscribe) {
        return new Observable(subscribe);
      };

      return Observable;
    }();

    exports.Observable = Observable;

    function getPromiseCtor(promiseCtor) {
      if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
      }

      if (!promiseCtor) {
        throw new Error('no Promise impl found');
      }

      return promiseCtor;
    } //# sourceMappingURL=Observable.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/Observer.js":
  /*!************************************************!*\
    !*** ./node_modules/rxjs/internal/Observer.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObserverJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var hostReportError_1 = __webpack_require__(
    /*! ./util/hostReportError */
    "./node_modules/rxjs/internal/util/hostReportError.js");

    exports.empty = {
      closed: true,
      next: function next(value) {},
      error: function error(err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw err;
        } else {
          hostReportError_1.hostReportError(err);
        }
      },
      complete: function complete() {}
    }; //# sourceMappingURL=Observer.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Subject.js":
  /*!***********************************************!*\
    !*** ./node_modules/rxjs/internal/Subject.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSubjectJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics2 = function extendStatics(d, b) {
        _extendStatics2 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics2(d, b);
      };

      return function (d, b) {
        _extendStatics2(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Observable_1 = __webpack_require__(
    /*! ./Observable */
    "./node_modules/rxjs/internal/Observable.js");

    var Subscriber_1 = __webpack_require__(
    /*! ./Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    var Subscription_1 = __webpack_require__(
    /*! ./Subscription */
    "./node_modules/rxjs/internal/Subscription.js");

    var ObjectUnsubscribedError_1 = __webpack_require__(
    /*! ./util/ObjectUnsubscribedError */
    "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");

    var SubjectSubscription_1 = __webpack_require__(
    /*! ./SubjectSubscription */
    "./node_modules/rxjs/internal/SubjectSubscription.js");

    var rxSubscriber_1 = __webpack_require__(
    /*! ../internal/symbol/rxSubscriber */
    "./node_modules/rxjs/internal/symbol/rxSubscriber.js");

    var SubjectSubscriber = function (_super) {
      __extends(SubjectSubscriber, _super);

      function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;

        _this.destination = destination;
        return _this;
      }

      return SubjectSubscriber;
    }(Subscriber_1.Subscriber);

    exports.SubjectSubscriber = SubjectSubscriber;

    var Subject = function (_super) {
      __extends(Subject, _super);

      function Subject() {
        var _this = _super.call(this) || this;

        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
      }

      Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return new SubjectSubscriber(this);
      };

      Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
      };

      Subject.prototype.next = function (value) {
        if (this.closed) {
          throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }

        if (!this.isStopped) {
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();

          for (var i = 0; i < len; i++) {
            copy[i].next(value);
          }
        }
      };

      Subject.prototype.error = function (err) {
        if (this.closed) {
          throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }

        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();

        for (var i = 0; i < len; i++) {
          copy[i].error(err);
        }

        this.observers.length = 0;
      };

      Subject.prototype.complete = function () {
        if (this.closed) {
          throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }

        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();

        for (var i = 0; i < len; i++) {
          copy[i].complete();
        }

        this.observers.length = 0;
      };

      Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
      };

      Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
          throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        } else {
          return _super.prototype._trySubscribe.call(this, subscriber);
        }
      };

      Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
          throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        } else if (this.hasError) {
          subscriber.error(this.thrownError);
          return Subscription_1.Subscription.EMPTY;
        } else if (this.isStopped) {
          subscriber.complete();
          return Subscription_1.Subscription.EMPTY;
        } else {
          this.observers.push(subscriber);
          return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
      };

      Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
      };

      Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
      };

      return Subject;
    }(Observable_1.Observable);

    exports.Subject = Subject;

    var AnonymousSubject = function (_super) {
      __extends(AnonymousSubject, _super);

      function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;

        _this.destination = destination;
        _this.source = source;
        return _this;
      }

      AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;

        if (destination && destination.next) {
          destination.next(value);
        }
      };

      AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;

        if (destination && destination.error) {
          this.destination.error(err);
        }
      };

      AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;

        if (destination && destination.complete) {
          this.destination.complete();
        }
      };

      AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;

        if (source) {
          return this.source.subscribe(subscriber);
        } else {
          return Subscription_1.Subscription.EMPTY;
        }
      };

      return AnonymousSubject;
    }(Subject);

    exports.AnonymousSubject = AnonymousSubject; //# sourceMappingURL=Subject.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/SubjectSubscription.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs/internal/SubjectSubscription.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSubjectSubscriptionJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics3 = function extendStatics(d, b) {
        _extendStatics3 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics3(d, b);
      };

      return function (d, b) {
        _extendStatics3(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscription_1 = __webpack_require__(
    /*! ./Subscription */
    "./node_modules/rxjs/internal/Subscription.js");

    var SubjectSubscription = function (_super) {
      __extends(SubjectSubscription, _super);

      function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;

        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
      }

      SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
          return;
        }

        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;

        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
          return;
        }

        var subscriberIndex = observers.indexOf(this.subscriber);

        if (subscriberIndex !== -1) {
          observers.splice(subscriberIndex, 1);
        }
      };

      return SubjectSubscription;
    }(Subscription_1.Subscription);

    exports.SubjectSubscription = SubjectSubscription; //# sourceMappingURL=SubjectSubscription.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Subscriber.js":
  /*!**************************************************!*\
    !*** ./node_modules/rxjs/internal/Subscriber.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics4 = function extendStatics(d, b) {
        _extendStatics4 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics4(d, b);
      };

      return function (d, b) {
        _extendStatics4(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var isFunction_1 = __webpack_require__(
    /*! ./util/isFunction */
    "./node_modules/rxjs/internal/util/isFunction.js");

    var Observer_1 = __webpack_require__(
    /*! ./Observer */
    "./node_modules/rxjs/internal/Observer.js");

    var Subscription_1 = __webpack_require__(
    /*! ./Subscription */
    "./node_modules/rxjs/internal/Subscription.js");

    var rxSubscriber_1 = __webpack_require__(
    /*! ../internal/symbol/rxSubscriber */
    "./node_modules/rxjs/internal/symbol/rxSubscriber.js");

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var hostReportError_1 = __webpack_require__(
    /*! ./util/hostReportError */
    "./node_modules/rxjs/internal/util/hostReportError.js");

    var Subscriber = function (_super) {
      __extends(Subscriber, _super);

      function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;

        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;

        switch (arguments.length) {
          case 0:
            _this.destination = Observer_1.empty;
            break;

          case 1:
            if (!destinationOrNext) {
              _this.destination = Observer_1.empty;
              break;
            }

            if (typeof destinationOrNext === 'object') {
              if (destinationOrNext instanceof Subscriber) {
                _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                _this.destination = destinationOrNext;
                destinationOrNext.add(_this);
              } else {
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext);
              }

              break;
            }

          default:
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
            break;
        }

        return _this;
      }

      Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return this;
      };

      Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
      };

      Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
          this._next(value);
        }
      };

      Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
          this.isStopped = true;

          this._error(err);
        }
      };

      Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
          this.isStopped = true;

          this._complete();
        }
      };

      Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
          return;
        }

        this.isStopped = true;

        _super.prototype.unsubscribe.call(this);
      };

      Subscriber.prototype._next = function (value) {
        this.destination.next(value);
      };

      Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
      };

      Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
      };

      Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
      };

      return Subscriber;
    }(Subscription_1.Subscription);

    exports.Subscriber = Subscriber;

    var SafeSubscriber = function (_super) {
      __extends(SafeSubscriber, _super);

      function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;

        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;

        if (isFunction_1.isFunction(observerOrNext)) {
          next = observerOrNext;
        } else if (observerOrNext) {
          next = observerOrNext.next;
          error = observerOrNext.error;
          complete = observerOrNext.complete;

          if (observerOrNext !== Observer_1.empty) {
            context = Object.create(observerOrNext);

            if (isFunction_1.isFunction(context.unsubscribe)) {
              _this.add(context.unsubscribe.bind(context));
            }

            context.unsubscribe = _this.unsubscribe.bind(_this);
          }
        }

        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
      }

      SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
          var _parentSubscriber = this._parentSubscriber;

          if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
            this.__tryOrUnsub(this._next, value);
          } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;

          if (this._error) {
            if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._error, err);

              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, this._error, err);

              this.unsubscribe();
            }
          } else if (!_parentSubscriber.syncErrorThrowable) {
            this.unsubscribe();

            if (useDeprecatedSynchronousErrorHandling) {
              throw err;
            }

            hostReportError_1.hostReportError(err);
          } else {
            if (useDeprecatedSynchronousErrorHandling) {
              _parentSubscriber.syncErrorValue = err;
              _parentSubscriber.syncErrorThrown = true;
            } else {
              hostReportError_1.hostReportError(err);
            }

            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.complete = function () {
        var _this = this;

        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;

          if (this._complete) {
            var wrappedComplete = function wrappedComplete() {
              return _this._complete.call(_this._context);
            };

            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(wrappedComplete);

              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, wrappedComplete);

              this.unsubscribe();
            }
          } else {
            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
          fn.call(this._context, value);
        } catch (err) {
          this.unsubscribe();

          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
          } else {
            hostReportError_1.hostReportError(err);
          }
        }
      };

      SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw new Error('bad call');
        }

        try {
          fn.call(this._context, value);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
          } else {
            hostReportError_1.hostReportError(err);
            return true;
          }
        }

        return false;
      };

      SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;

        _parentSubscriber.unsubscribe();
      };

      return SafeSubscriber;
    }(Subscriber);

    exports.SafeSubscriber = SafeSubscriber; //# sourceMappingURL=Subscriber.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Subscription.js":
  /*!****************************************************!*\
    !*** ./node_modules/rxjs/internal/Subscription.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSubscriptionJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var isArray_1 = __webpack_require__(
    /*! ./util/isArray */
    "./node_modules/rxjs/internal/util/isArray.js");

    var isObject_1 = __webpack_require__(
    /*! ./util/isObject */
    "./node_modules/rxjs/internal/util/isObject.js");

    var isFunction_1 = __webpack_require__(
    /*! ./util/isFunction */
    "./node_modules/rxjs/internal/util/isFunction.js");

    var UnsubscriptionError_1 = __webpack_require__(
    /*! ./util/UnsubscriptionError */
    "./node_modules/rxjs/internal/util/UnsubscriptionError.js");

    var Subscription = function () {
      function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;

        if (unsubscribe) {
          this._unsubscribe = unsubscribe;
        }
      }

      Subscription.prototype.unsubscribe = function () {
        var errors;

        if (this.closed) {
          return;
        }

        var _a = this,
            _parentOrParents = _a._parentOrParents,
            _unsubscribe = _a._unsubscribe,
            _subscriptions = _a._subscriptions;

        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;

        if (_parentOrParents instanceof Subscription) {
          _parentOrParents.remove(this);
        } else if (_parentOrParents !== null) {
          for (var index = 0; index < _parentOrParents.length; ++index) {
            var parent_1 = _parentOrParents[index];
            parent_1.remove(this);
          }
        }

        if (isFunction_1.isFunction(_unsubscribe)) {
          try {
            _unsubscribe.call(this);
          } catch (e) {
            errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
          }
        }

        if (isArray_1.isArray(_subscriptions)) {
          var index = -1;
          var len = _subscriptions.length;

          while (++index < len) {
            var sub = _subscriptions[index];

            if (isObject_1.isObject(sub)) {
              try {
                sub.unsubscribe();
              } catch (e) {
                errors = errors || [];

                if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                  errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                } else {
                  errors.push(e);
                }
              }
            }
          }
        }

        if (errors) {
          throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
      };

      Subscription.prototype.add = function (teardown) {
        var subscription = teardown;

        if (!teardown) {
          return Subscription.EMPTY;
        }

        switch (typeof teardown) {
          case 'function':
            subscription = new Subscription(teardown);

          case 'object':
            if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
              return subscription;
            } else if (this.closed) {
              subscription.unsubscribe();
              return subscription;
            } else if (!(subscription instanceof Subscription)) {
              var tmp = subscription;
              subscription = new Subscription();
              subscription._subscriptions = [tmp];
            }

            break;

          default:
            {
              throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }

        var _parentOrParents = subscription._parentOrParents;

        if (_parentOrParents === null) {
          subscription._parentOrParents = this;
        } else if (_parentOrParents instanceof Subscription) {
          if (_parentOrParents === this) {
            return subscription;
          }

          subscription._parentOrParents = [_parentOrParents, this];
        } else if (_parentOrParents.indexOf(this) === -1) {
          _parentOrParents.push(this);
        } else {
          return subscription;
        }

        var subscriptions = this._subscriptions;

        if (subscriptions === null) {
          this._subscriptions = [subscription];
        } else {
          subscriptions.push(subscription);
        }

        return subscription;
      };

      Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;

        if (subscriptions) {
          var subscriptionIndex = subscriptions.indexOf(subscription);

          if (subscriptionIndex !== -1) {
            subscriptions.splice(subscriptionIndex, 1);
          }
        }
      };

      Subscription.EMPTY = function (empty) {
        empty.closed = true;
        return empty;
      }(new Subscription());

      return Subscription;
    }();

    exports.Subscription = Subscription;

    function flattenUnsubscriptionErrors(errors) {
      return errors.reduce(function (errs, err) {
        return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
      }, []);
    } //# sourceMappingURL=Subscription.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/config.js":
  /*!**********************************************!*\
    !*** ./node_modules/rxjs/internal/config.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalConfigJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    exports.config = {
      Promise: undefined,

      set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
          var error = new Error();
          console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
          console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }

        _enable_super_gross_mode_that_will_cause_bad_things = value;
      },

      get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
      }

    }; //# sourceMappingURL=config.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/symbol/observable.js":
  /*!*********************************************************!*\
    !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSymbolObservableJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.observable = function () {
      return typeof Symbol === 'function' && Symbol.observable || '@@observable';
    }(); //# sourceMappingURL=observable.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSymbolRxSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.rxSubscriber = function () {
      return typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
    }();

    exports.$$rxSubscriber = exports.rxSubscriber; //# sourceMappingURL=rxSubscriber.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js":
  /*!********************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilObjectUnsubscribedErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var ObjectUnsubscribedErrorImpl = function () {
      function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
      }

      ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
      return ObjectUnsubscribedErrorImpl;
    }();

    exports.ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl; //# sourceMappingURL=ObjectUnsubscribedError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
  /*!****************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilUnsubscriptionErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var UnsubscriptionErrorImpl = function () {
      function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
          return i + 1 + ") " + err.toString();
        }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
      }

      UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
      return UnsubscriptionErrorImpl;
    }();

    exports.UnsubscriptionError = UnsubscriptionErrorImpl; //# sourceMappingURL=UnsubscriptionError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/canReportError.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilCanReportErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscriber_1 = __webpack_require__(
    /*! ../Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    function canReportError(observer) {
      while (observer) {
        var _a = observer,
            closed_1 = _a.closed,
            destination = _a.destination,
            isStopped = _a.isStopped;

        if (closed_1 || isStopped) {
          return false;
        } else if (destination && destination instanceof Subscriber_1.Subscriber) {
          observer = destination;
        } else {
          observer = null;
        }
      }

      return true;
    }

    exports.canReportError = canReportError; //# sourceMappingURL=canReportError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/hostReportError.js":
  /*!************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilHostReportErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function hostReportError(err) {
      setTimeout(function () {
        throw err;
      }, 0);
    }

    exports.hostReportError = hostReportError; //# sourceMappingURL=hostReportError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/isArray.js":
  /*!****************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isArray.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsArrayJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.isArray = function () {
      return Array.isArray || function (x) {
        return x && typeof x.length === 'number';
      };
    }(); //# sourceMappingURL=isArray.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/util/isFunction.js":
  /*!*******************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsFunctionJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function isFunction(x) {
      return typeof x === 'function';
    }

    exports.isFunction = isFunction; //# sourceMappingURL=isFunction.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/isObject.js":
  /*!*****************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isObject.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsObjectJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function isObject(x) {
      return x !== null && typeof x === 'object';
    }

    exports.isObject = isObject; //# sourceMappingURL=isObject.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/noop.js":
  /*!*************************************************!*\
    !*** ./node_modules/rxjs/internal/util/noop.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilNoopJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function noop() {}

    exports.noop = noop; //# sourceMappingURL=noop.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/pipe.js":
  /*!*************************************************!*\
    !*** ./node_modules/rxjs/internal/util/pipe.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilPipeJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var noop_1 = __webpack_require__(
    /*! ./noop */
    "./node_modules/rxjs/internal/util/noop.js");

    function pipe() {
      var fns = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
      }

      return pipeFromArray(fns);
    }

    exports.pipe = pipe;

    function pipeFromArray(fns) {
      if (!fns) {
        return noop_1.noop;
      }

      if (fns.length === 1) {
        return fns[0];
      }

      return function piped(input) {
        return fns.reduce(function (prev, fn) {
          return fn(prev);
        }, input);
      };
    }

    exports.pipeFromArray = pipeFromArray; //# sourceMappingURL=pipe.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/toSubscriber.js":
  /*!*********************************************************!*\
    !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilToSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscriber_1 = __webpack_require__(
    /*! ../Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    var rxSubscriber_1 = __webpack_require__(
    /*! ../symbol/rxSubscriber */
    "./node_modules/rxjs/internal/symbol/rxSubscriber.js");

    var Observer_1 = __webpack_require__(
    /*! ../Observer */
    "./node_modules/rxjs/internal/Observer.js");

    function toSubscriber(nextOrObserver, error, complete) {
      if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
          return nextOrObserver;
        }

        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
          return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
      }

      if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
      }

      return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
    }

    exports.toSubscriber = toSubscriber; //# sourceMappingURL=toSubscriber.js.map

    /***/
  },

  /***/
  "./node_modules/webpack/buildin/module.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/module.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinModuleJs(module, exports) {
    module.exports = function (module) {
      if (!module.webpackPolyfill) {
        module.deprecate = function () {};

        module.paths = []; // module.parent = undefined by default

        if (!module.children) module.children = [];
        Object.defineProperty(module, "loaded", {
          enumerable: true,
          get: function get() {
            return module.l;
          }
        });
        Object.defineProperty(module, "id", {
          enumerable: true,
          get: function get() {
            return module.i;
          }
        });
        module.webpackPolyfill = 1;
      }

      return module;
    };
    /***/

  },

  /***/
  "./src/app/profile/datasource/experience-datasource.ts":
  /*!*************************************************************!*\
    !*** ./src/app/profile/datasource/experience-datasource.ts ***!
    \*************************************************************/

  /*! exports provided: ExperienceDatasource */

  /***/
  function srcAppProfileDatasourceExperienceDatasourceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceDatasource", function () {
      return ExperienceDatasource;
    });
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/internal/BehaviorSubject */
    "./node_modules/rxjs/internal/BehaviorSubject.js");
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../auth/reducers/auth.reducer */
    "./src/app/auth/reducers/auth.reducer.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var ExperienceDatasource =
    /*#__PURE__*/
    function () {
      function ExperienceDatasource(store) {
        _classCallCheck(this, ExperienceDatasource);

        this.store = store;
        this.userSubject = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.loadingUser = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.loading$ = this.loadingUser.asObservable();
      }

      _createClass(ExperienceDatasource, [{
        key: "connect",
        value: function connect(collectionViewer) {
          return this.userSubject.asObservable();
        }
      }, {
        key: "disconnect",
        value: function disconnect(collectionViewer) {
          this.userSubject.complete();
          this.loadingUser.complete();
        }
      }, {
        key: "loadExperiences",
        value: function loadExperiences() {
          var _this2 = this;

          this.loadingUser.next(true);
          this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["selectShowUserProfile"])).subscribe(function (user) {
            return _this2.userSubject.next(user.experiencies);
          });
        }
      }]);

      return ExperienceDatasource;
    }();
    /***/

  },

  /***/
  "./src/app/profile/datasource/languages-datasource.ts":
  /*!************************************************************!*\
    !*** ./src/app/profile/datasource/languages-datasource.ts ***!
    \************************************************************/

  /*! exports provided: LanguagesDatasource */

  /***/
  function srcAppProfileDatasourceLanguagesDatasourceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguagesDatasource", function () {
      return LanguagesDatasource;
    });
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/internal/BehaviorSubject */
    "./node_modules/rxjs/internal/BehaviorSubject.js");
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../auth/reducers/auth.reducer */
    "./src/app/auth/reducers/auth.reducer.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var LanguagesDatasource =
    /*#__PURE__*/
    function () {
      function LanguagesDatasource(store) {
        _classCallCheck(this, LanguagesDatasource);

        this.store = store;
        this.userSubject = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.loadingUser = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.loading$ = this.loadingUser.asObservable();
      }

      _createClass(LanguagesDatasource, [{
        key: "connect",
        value: function connect(collectionViewer) {
          return this.userSubject.asObservable();
        }
      }, {
        key: "disconnect",
        value: function disconnect(collectionViewer) {
          this.userSubject.complete();
          this.loadingUser.complete();
        }
      }, {
        key: "loadLanguages",
        value: function loadLanguages() {
          var _this3 = this;

          this.loadingUser.next(true);
          this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["selectShowUserProfile"])).subscribe(function (user) {
            return _this3.userSubject.next(user.languages);
          });
        }
      }]);

      return LanguagesDatasource;
    }();
    /***/

  },

  /***/
  "./src/app/profile/datasource/study-datasource.ts":
  /*!********************************************************!*\
    !*** ./src/app/profile/datasource/study-datasource.ts ***!
    \********************************************************/

  /*! exports provided: StudyDatasource */

  /***/
  function srcAppProfileDatasourceStudyDatasourceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudyDatasource", function () {
      return StudyDatasource;
    });
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/internal/BehaviorSubject */
    "./node_modules/rxjs/internal/BehaviorSubject.js");
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../auth/reducers/auth.reducer */
    "./src/app/auth/reducers/auth.reducer.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var StudyDatasource =
    /*#__PURE__*/
    function () {
      function StudyDatasource(store) {
        _classCallCheck(this, StudyDatasource);

        this.store = store;
        this.userSubject = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.loadingUser = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.loading$ = this.loadingUser.asObservable();
      }

      _createClass(StudyDatasource, [{
        key: "connect",
        value: function connect(collectionViewer) {
          return this.userSubject.asObservable();
        }
      }, {
        key: "disconnect",
        value: function disconnect(collectionViewer) {
          this.userSubject.complete();
          this.loadingUser.complete();
        }
      }, {
        key: "loadStudies",
        value: function loadStudies() {
          var _this4 = this;

          this.loadingUser.next(true);
          this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["selectShowUserProfile"])).subscribe(function (user) {
            return _this4.userSubject.next(user.studies);
          });
        }
      }]);

      return StudyDatasource;
    }();
    /***/

  },

  /***/
  "./src/app/profile/profile-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/profile/profile-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ProfileRoutingModule */

  /***/
  function srcAppProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function () {
      return ProfileRoutingModule;
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


    var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _profile_student_study_profile_study_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile-student/study/profile-study.component */
    "./src/app/profile/profile-student/study/profile-study.component.ts");
    /* harmony import */


    var _profile_student_language_profile_language_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile-student/language/profile-language.component */
    "./src/app/profile/profile-student/language/profile-language.component.ts");
    /* harmony import */


    var _profile_student_account_profile_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-student/account/profile-account.component */
    "./src/app/profile/profile-student/account/profile-account.component.ts");
    /* harmony import */


    var _profile_student_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile-student/work-experience/work-experience.component */
    "./src/app/profile/profile-student/work-experience/work-experience.component.ts");

    var routes = [{
      path: '',
      component: _profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]
    }, {
      path: 'profile-student/work-experience',
      component: _profile_student_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_6__["WorkExperienceComponent"]
    }, {
      path: 'profile-student/work-experience/:uid',
      component: _profile_student_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_6__["WorkExperienceComponent"]
    }, {
      path: 'profile-student/account',
      component: _profile_student_account_profile_account_component__WEBPACK_IMPORTED_MODULE_5__["ProfileAccountComponent"]
    }, {
      path: 'profile-student/study',
      component: _profile_student_study_profile_study_component__WEBPACK_IMPORTED_MODULE_3__["ProfileStudyComponent"]
    }, {
      path: 'profile-student/study/:uid',
      component: _profile_student_study_profile_study_component__WEBPACK_IMPORTED_MODULE_3__["ProfileStudyComponent"]
    }, {
      path: 'profile-student/language',
      component: _profile_student_language_profile_language_component__WEBPACK_IMPORTED_MODULE_4__["ProfileLanguageComponent"]
    }, {
      path: 'profile-student/language/:uid',
      component: _profile_student_language_profile_language_component__WEBPACK_IMPORTED_MODULE_4__["ProfileLanguageComponent"]
    }, {
      path: 'config',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | configuration-configuration-module */
        "configuration-configuration-module").then(__webpack_require__.bind(null,
        /*! ./configuration/configuration.module */
        "./src/app/profile/configuration/configuration.module.ts")).then(function (m) {
          return m.ConfigurationModule;
        });
      }
    }];

    var ProfileRoutingModule = function ProfileRoutingModule() {
      _classCallCheck(this, ProfileRoutingModule);
    };

    ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProfileRoutingModule
    });
    ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProfileRoutingModule_Factory(t) {
        return new (t || ProfileRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileRoutingModule, [{
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
  "./src/app/profile/profile-student/account/profile-account-form/profile-account-form.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/profile/profile-student/account/profile-account-form/profile-account-form.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: ProfileAccountFormComponent */

  /***/
  function srcAppProfileProfileStudentAccountProfileAccountFormProfileAccountFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileAccountFormComponent", function () {
      return ProfileAccountFormComponent;
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


    var _shared_directives_date_validator_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/date-validator.directive */
    "./src/app/shared/directives/date-validator.directive.ts");
    /* harmony import */


    var _shared_directives_document_number_validator_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/directives/document-number-validator.directive */
    "./src/app/shared/directives/document-number-validator.directive.ts");
    /* harmony import */


    var _shared_mock_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/mock-data */
    "./src/app/shared/mock-data.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function ProfileAccountFormComponent_mat_option_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var documentType_r89 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", documentType_r89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", documentType_r89.name, " ");
      }
    }

    function ProfileAccountFormComponent_mat_option_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var province_r90 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", province_r90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](province_r90.name);
      }
    }

    function ProfileAccountFormComponent_mat_option_58_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var municipe_r91 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", municipe_r91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](municipe_r91.name);
      }
    }

    var ProfileAccountFormComponent =
    /*#__PURE__*/
    function () {
      function ProfileAccountFormComponent() {
        _classCallCheck(this, ProfileAccountFormComponent);

        this.updateUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ProfileAccountFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadSelectProperties();
          this.loadFormInstance();
        }
      }, {
        key: "compareByUID",
        value: function compareByUID(option1, option2) {
          return option1.uid === (option2 && option2.uid);
        }
      }, {
        key: "loadSelectProperties",
        value: function loadSelectProperties() {
          this.documentsType = _shared_mock_data__WEBPACK_IMPORTED_MODULE_4__["MockData"].DOCUMENTS_TYPE;
          this.municipes = _shared_mock_data__WEBPACK_IMPORTED_MODULE_4__["MockData"].MUNICIPES;
          this.provinces = _shared_mock_data__WEBPACK_IMPORTED_MODULE_4__["MockData"].PROVINCES;
        }
      }, {
        key: "loadFormInstance",
        value: function loadFormInstance() {
          this.rForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userProfile.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(55), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z]+$/)]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userProfile.surname, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(55), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z]+$/)]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userProfile.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]{6,}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            phone2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userProfile.phone2, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]{6,}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userProfile.birthdate, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_shared_directives_date_validator_directive__WEBPACK_IMPORTED_MODULE_2__["dateValidator"])()]),
            documentType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userProfile.documentType, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            documentNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userProfile.documentNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userProfile.address.street, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            municipe: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userProfile.address.municipe, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userProfile.address.province, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            aboutMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userProfile.aboutMe),
            otherCompetences: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userProfile.aboutMe),
            license: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userProfile.license)
          }, Object(_shared_directives_document_number_validator_directive__WEBPACK_IMPORTED_MODULE_3__["documentNumberValidator"])());
        }
      }, {
        key: "update",
        value: function update() {
          if (this.rForm.valid) {
            var userUpdated = Object.assign(Object.assign({}, this.userProfile), this.rForm.value);
            this.updateUser.emit(userUpdated);
          }
        }
      }]);

      return ProfileAccountFormComponent;
    }();

    ProfileAccountFormComponent.ɵfac = function ProfileAccountFormComponent_Factory(t) {
      return new (t || ProfileAccountFormComponent)();
    };

    ProfileAccountFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileAccountFormComponent,
      selectors: [["app-profile-account-form"]],
      inputs: {
        userProfile: "userProfile"
      },
      outputs: {
        updateUser: "updateUser"
      },
      decls: 76,
      vars: 8,
      consts: [[3, "formGroup", "submit"], [1, "form-group"], ["appearance", "fill"], ["matInput", "", "type", "text", "name", "name", "formControlName", "name", 1, "col-sm-10", "form-control"], ["matInput", "", "type", "text", "name", "surname", "formControlName", "surname", 1, "col-sm-10", "form-control"], ["matInput", "", "type", "text", "name", "birthdate", "formControlName", "birthdate", 1, "col-sm-10", "form-control"], ["matInput", "", "type", "text", "name", "phone", "formControlName", "phone", 1, "col-sm-10", "form-control"], ["matInput", "", "type", "text", "name", "phone2", "formControlName", "phone2", 1, "col-sm-10", "form-control"], ["name", "documentType", "formControlName", "documentType", 1, "col-sm-10", "form-control", 3, "compareWith"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "text", "name", "documentNumber", "formControlName", "documentNumber", 1, "col-sm-10", "form-control"], ["matInput", "", "type", "text", "name", "street", "formControlName", "street", 1, "col-sm-10", "form-control"], ["name", "province", "formControlName", "province", 1, "col-sm-10", "form-control", 3, "compareWith"], ["name", "municipe", "formControlName", "municipe", 1, "col-sm-10", "form-control", 3, "compareWith"], ["matInput", "", "name", "aboutMe", "formControlName", "aboutMe", 1, "col-sm-10", "form-control"], ["matInput", "", "name", "otherCompetences", "formControlName", "otherCompetences", 1, "col-sm-10", "form-control"], ["matInput", "", "name", "license", "formControlName", "license", 1, "col-sm-10", "form-control"], ["mat-button", "", "color", "primary", "type", "submit", 3, "disabled"], [3, "value"]],
      template: function ProfileAccountFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Modificar el perfil");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ProfileAccountFormComponent_Template_form_submit_5_listener($event) {
            return ctx.update();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Apellidos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Fecha de nacimiento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Tel\xE9fono");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Tel\xE9fono 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Tipo de documento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ProfileAccountFormComponent_mat_option_36_Template, 2, 2, "mat-option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "N\xFAmero de documento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Calle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Provincia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ProfileAccountFormComponent_mat_option_52_Template, 2, 2, "mat-option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Municipio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, ProfileAccountFormComponent_mat_option_58_Template, 2, 2, "mat-option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Acerca de mi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "textarea", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Otras competencias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "textarea", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Licencias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "textarea", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Guardar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("compareWith", ctx.compareByUID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.documentsType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("compareWith", ctx.compareByUID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.provinces);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("compareWith", ctx.compareByUID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.municipes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.rForm.invalid);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS1zdHVkZW50L2FjY291bnQvcHJvZmlsZS1hY2NvdW50LWZvcm0vcHJvZmlsZS1hY2NvdW50LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileAccountFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile-account-form',
          templateUrl: './profile-account-form.component.html',
          styleUrls: ['./profile-account-form.component.scss']
        }]
      }], function () {
        return [];
      }, {
        userProfile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        updateUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/profile/profile-student/account/profile-account.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/profile/profile-student/account/profile-account.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ProfileAccountComponent */

  /***/
  function srcAppProfileProfileStudentAccountProfileAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileAccountComponent", function () {
      return ProfileAccountComponent;
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
    /*! ../../../auth/reducers/auth.reducer */
    "./src/app/auth/reducers/auth.reducer.ts");
    /* harmony import */


    var _auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../auth/actions/auth.actions */
    "./src/app/auth/actions/auth.actions.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _profile_account_form_profile_account_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-account-form/profile-account-form.component */
    "./src/app/profile/profile-student/account/profile-account-form/profile-account-form.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ProfileAccountComponent =
    /*#__PURE__*/
    function () {
      function ProfileAccountComponent(router, store) {
        _classCallCheck(this, ProfileAccountComponent);

        this.router = router;
        this.store = store;
      }

      _createClass(ProfileAccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadUserProfile();
        }
      }, {
        key: "loadUserProfile",
        value: function loadUserProfile() {
          this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["selectShowUserProfile"]));
        }
      }, {
        key: "updateUser",
        value: function updateUser($event) {
          this.store.dispatch(_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].updateUserProfile({
            user: $event
          }));
          this.router.navigate(['/admin/profile']);
        }
      }]);

      return ProfileAccountComponent;
    }();

    ProfileAccountComponent.ɵfac = function ProfileAccountComponent_Factory(t) {
      return new (t || ProfileAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    ProfileAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileAccountComponent,
      selectors: [["app-profile-account"]],
      decls: 2,
      vars: 3,
      consts: [[3, "userProfile", "updateUser"]],
      template: function ProfileAccountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-profile-account-form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateUser", function ProfileAccountComponent_Template_app_profile_account_form_updateUser_0_listener($event) {
            return ctx.updateUser($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userProfile", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.user$));
        }
      },
      directives: [_profile_account_form_profile_account_form_component__WEBPACK_IMPORTED_MODULE_5__["ProfileAccountFormComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: ["form[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #FA787E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kdG9tZS9Xb3Jrc3BhY2UvSmF2YXNjcmlwdC9NYXN0ZXIvYWR2YW5jZWQtZnJvbnRlbmQvdW9jLWRlcGxveS9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS1zdHVkZW50L2FjY291bnQvcHJvZmlsZS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUtc3R1ZGVudC9hY2NvdW50L3Byb2ZpbGUtYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUtc3R1ZGVudC9hY2NvdW50L3Byb2ZpbGUtYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0gaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXItY29sb3I6ICNGQTc4N0U7XHJcbn1cclxuIiwiZm9ybSBpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXItY29sb3I6ICNGQTc4N0U7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile-account',
          templateUrl: './profile-account.component.html',
          styleUrls: ['./profile-account.component.scss']
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
  "./src/app/profile/profile-student/language/profile-language-form/profile-language-form.component.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/profile/profile-student/language/profile-language-form/profile-language-form.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: ProfileLanguageFormComponent */

  /***/
  function srcAppProfileProfileStudentLanguageProfileLanguageFormProfileLanguageFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileLanguageFormComponent", function () {
      return ProfileLanguageFormComponent;
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


    var _shared_directives_date_validator_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/directives/date-validator.directive */
    "./src/app/shared/directives/date-validator.directive.ts");
    /* harmony import */


    var _shared_mock_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/mock-data */
    "./src/app/shared/mock-data.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function ProfileLanguageFormComponent_mat_option_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var level_r94 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", level_r94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", level_r94.name, "");
      }
    }

    function ProfileLanguageFormComponent_mat_option_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var name_r95 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", name_r95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", name_r95.name, " ");
      }
    }

    var ProfileLanguageFormComponent =
    /*#__PURE__*/
    function () {
      function ProfileLanguageFormComponent() {
        _classCallCheck(this, ProfileLanguageFormComponent);

        this.submitForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ProfileLanguageFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadFormInstance();
          this.loadSelectProperties();
        }
      }, {
        key: "loadFormInstance",
        value: function loadFormInstance() {
          this.langForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            uid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.language.uid),
            level: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.language.level, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.language.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.language.date, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_shared_directives_date_validator_directive__WEBPACK_IMPORTED_MODULE_2__["dateValidator"])()])
          });
        }
      }, {
        key: "loadSelectProperties",
        value: function loadSelectProperties() {
          this.languageLevels = _shared_mock_data__WEBPACK_IMPORTED_MODULE_3__["MockData"].LANGUAGES_LEVEL;
          this.languageNames = _shared_mock_data__WEBPACK_IMPORTED_MODULE_3__["MockData"].LANGUAGES_NAME;
        }
      }, {
        key: "compareLevel",
        value: function compareLevel(option1, option2) {
          return option1.uid === (option2 && option2.uid);
        }
      }, {
        key: "compareName",
        value: function compareName(option1, option2) {
          return option1.uid === (option2 && option2.uid);
        }
      }, {
        key: "submit",
        value: function submit() {
          var language = Object.assign({}, this.langForm.value);
          this.submitForm.emit(language);
        }
      }]);

      return ProfileLanguageFormComponent;
    }();

    ProfileLanguageFormComponent.ɵfac = function ProfileLanguageFormComponent_Factory(t) {
      return new (t || ProfileLanguageFormComponent)();
    };

    ProfileLanguageFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileLanguageFormComponent,
      selectors: [["app-profile-language-form"]],
      inputs: {
        language: "language"
      },
      outputs: {
        submitForm: "submitForm"
      },
      decls: 25,
      vars: 6,
      consts: [[3, "formGroup", "submit"], [1, "form-group"], ["appearance", "fill"], ["name", "level", "formControlName", "level", 1, "col-sm-10", "form-control", 3, "compareWith"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "name", "formControlName", "name", 1, "col-sm-10", "form-control", 3, "compareWith"], ["matInput", "", "type", "text", "name", "date", "formControlName", "date", 1, "col-sm-10", "form-control"], ["mat-button", "", "color", "primary", "type", "submit", 3, "disabled"], [3, "value"]],
      template: function ProfileLanguageFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Editar/Nuevo idioma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ProfileLanguageFormComponent_Template_form_submit_5_listener($event) {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nivel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProfileLanguageFormComponent_mat_option_11_Template, 2, 2, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Idioma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfileLanguageFormComponent_mat_option_17_Template, 2, 2, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Fecha de obtenci\xF3n del t\xEDtulo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Guardar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.langForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("compareWith", ctx.compareLevel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languageLevels);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("compareWith", ctx.compareName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languageNames);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.langForm.invalid);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS1zdHVkZW50L2xhbmd1YWdlL3Byb2ZpbGUtbGFuZ3VhZ2UtZm9ybS9wcm9maWxlLWxhbmd1YWdlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileLanguageFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile-language-form',
          templateUrl: './profile-language-form.component.html',
          styleUrls: ['./profile-language-form.component.scss']
        }]
      }], function () {
        return [];
      }, {
        language: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        submitForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/profile/profile-student/language/profile-language.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/profile/profile-student/language/profile-language.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ProfileLanguageComponent */

  /***/
  function srcAppProfileProfileStudentLanguageProfileLanguageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileLanguageComponent", function () {
      return ProfileLanguageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../auth/reducers/auth.reducer */
    "./src/app/auth/reducers/auth.reducer.ts");
    /* harmony import */


    var _auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../auth/actions/auth.actions */
    "./src/app/auth/actions/auth.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _profile_language_form_profile_language_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-language-form/profile-language-form.component */
    "./src/app/profile/profile-student/language/profile-language-form/profile-language-form.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ProfileLanguageComponent =
    /*#__PURE__*/
    function () {
      function ProfileLanguageComponent(route, store, router) {
        var _this5 = this;

        _classCallCheck(this, ProfileLanguageComponent);

        this.route = route;
        this.store = store;
        this.router = router;
        this.language = {};
        this.route.params.subscribe(function (params) {
          _this5.selectedLanguage$ = _this5.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["selectSelectedLanguage"], {
            langUid: +params.uid
          }));
        });
      }

      _createClass(ProfileLanguageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.nextLangUid$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["selectNextUidLanguage"]));
          this.nextLangUid$.subscribe(function (nextUid) {
            _this6.nextLangUid = nextUid;
          });
        }
      }, {
        key: "saveOrUpdate",
        value: function saveOrUpdate(language) {
          language.uid ? this.update(language) : this.save(language);
        }
      }, {
        key: "save",
        value: function save(language) {
          var newLang = Object.assign(Object.assign({}, language), {
            uid: this.nextLangUid
          });
          this.store.dispatch(_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].addLanguage({
            language: newLang
          }));
          this.router.navigate(['/admin/profile']);
        }
      }, {
        key: "update",
        value: function update(language) {
          this.store.dispatch(_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].updateLanguage({
            language: language
          }));
          this.router.navigate(['/admin/profile']);
        }
      }]);

      return ProfileLanguageComponent;
    }();

    ProfileLanguageComponent.ɵfac = function ProfileLanguageComponent_Factory(t) {
      return new (t || ProfileLanguageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    ProfileLanguageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileLanguageComponent,
      selectors: [["app-profile-language"]],
      decls: 2,
      vars: 3,
      consts: [[3, "language", "submitForm"]],
      template: function ProfileLanguageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-profile-language-form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submitForm", function ProfileLanguageComponent_Template_app_profile_language_form_submitForm_0_listener($event) {
            return ctx.saveOrUpdate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("language", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.selectedLanguage$) || ctx.language);
        }
      },
      directives: [_profile_language_form_profile_language_form_component__WEBPACK_IMPORTED_MODULE_5__["ProfileLanguageFormComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: ["form[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #FA787E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kdG9tZS9Xb3Jrc3BhY2UvSmF2YXNjcmlwdC9NYXN0ZXIvYWR2YW5jZWQtZnJvbnRlbmQvdW9jLWRlcGxveS9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS1zdHVkZW50L2xhbmd1YWdlL3Byb2ZpbGUtbGFuZ3VhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS1zdHVkZW50L2xhbmd1YWdlL3Byb2ZpbGUtbGFuZ3VhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLXN0dWRlbnQvbGFuZ3VhZ2UvcHJvZmlsZS1sYW5ndWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0gaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXItY29sb3I6ICNGQTc4N0U7XHJcbn1cclxuIiwiZm9ybSBpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXItY29sb3I6ICNGQTc4N0U7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileLanguageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile-language',
          templateUrl: './profile-language.component.html',
          styleUrls: ['./profile-language.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/profile-student/profile-student.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/profile/profile-student/profile-student.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ProfileStudentComponent */

  /***/
  function srcAppProfileProfileStudentProfileStudentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileStudentComponent", function () {
      return ProfileStudentComponent;
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


    var _auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../auth/actions/auth.actions */
    "./src/app/auth/actions/auth.actions.ts");
    /* harmony import */


    var _datasource_study_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../datasource/study-datasource */
    "./src/app/profile/datasource/study-datasource.ts");
    /* harmony import */


    var _datasource_languages_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../datasource/languages-datasource */
    "./src/app/profile/datasource/languages-datasource.ts");
    /* harmony import */


    var _datasource_experience_datasource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../datasource/experience-datasource */
    "./src/app/profile/datasource/experience-datasource.ts");
    /* harmony import */


    var _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/services/profile.service */
    "./src/app/shared/services/profile.service.ts");
    /* harmony import */


    var _auth_signin_signin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../auth/signin/signin.service */
    "./src/app/auth/signin/signin.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProfileStudentComponent_th_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tipo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileStudentComponent_td_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var study_r52 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", study_r52.level.name, " ");
      }
    }

    function ProfileStudentComponent_th_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nivel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileStudentComponent_td_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var study_r53 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", study_r53.grade == null ? null : study_r53.grade.name, " ");
      }
    }

    function ProfileStudentComponent_th_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " T\xEDtulo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileStudentComponent_td_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var study_r54 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", study_r54.title.name || study_r54.title, " ");
      }
    }

    function ProfileStudentComponent_th_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Centro");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileStudentComponent_td_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var study_r55 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", study_r55.institution.name || study_r55.institution, " ");
      }
    }

    function ProfileStudentComponent_th_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fecha");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileStudentComponent_td_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var study_r56 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", study_r56.date, " ");
      }
    }

    function ProfileStudentComponent_th_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Certificado");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileStudentComponent_td_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var study_r57 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", study_r57.certificate ? "S\xED" : "No", " ");
      }
    }

    function ProfileStudentComponent_th_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Biling\xFCe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileStudentComponent_td_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var study_r58 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", study_r58.bilingue ? "S\xED" : "No", " ");
      }
    }

    function ProfileStudentComponent_th_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dual");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileStudentComponent_td_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var study_r59 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", study_r59.dual ? "S\xED" : "No", " ");
      }
    }

    function ProfileStudentComponent_th_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Acciones");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["/admin/profile/profile-student/study", a1];
    };

    function ProfileStudentComponent_td_69_Template(rf, ctx) {
      if (rf & 1) {
        var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Editar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " | ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileStudentComponent_td_69_Template_a_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var study_r60 = ctx.$implicit;

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r61.deleteStudy(study_r60.uid);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Borrar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var study_r60 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, study_r60.uid));
      }
    }

    function ProfileStudentComponent_tr_70_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 27);
      }
    }

    function ProfileStudentComponent_tr_71_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 28);
      }
    }

    function ProfileStudentComponent_th_79_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nivel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileStudentComponent_td_80_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lang_r64 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r64.level.name);
      }
    }

    function ProfileStudentComponent_th_82_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Idioma");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileStudentComponent_td_83_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lang_r65 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lang_r65.name.name, "");
      }
    }

    function ProfileStudentComponent_th_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fecha");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileStudentComponent_td_86_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lang_r66 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lang_r66.date, "");
      }
    }

    function ProfileStudentComponent_th_88_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Acciones");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a1) {
      return ["/admin/profile/profile-student/language", a1];
    };

    function ProfileStudentComponent_td_89_Template(rf, ctx) {
      if (rf & 1) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Editar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " | ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileStudentComponent_td_89_Template_a_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

          var lang_r67 = ctx.$implicit;

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r68.deleteLanguage(lang_r67.uid);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Borrar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lang_r67 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, lang_r67.uid));
      }
    }

    function ProfileStudentComponent_tr_90_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 27);
      }
    }

    function ProfileStudentComponent_tr_91_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 28);
      }
    }

    function ProfileStudentComponent_th_99_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Empresa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileStudentComponent_td_100_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var experience_r71 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", experience_r71.company, "");
      }
    }

    function ProfileStudentComponent_th_102_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Posici\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileStudentComponent_td_103_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var experience_r72 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", experience_r72.position, "");
      }
    }

    function ProfileStudentComponent_th_105_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Empresa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileStudentComponent_td_106_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var experience_r73 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", experience_r73.date, "");
      }
    }

    function ProfileStudentComponent_th_108_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Acciones");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2(a1) {
      return ["/admin/profile/profile-student/work-experience", a1];
    };

    function ProfileStudentComponent_td_109_Template(rf, ctx) {
      if (rf & 1) {
        var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Editar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " | ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileStudentComponent_td_109_Template_a_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

          var experience_r74 = ctx.$implicit;

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r75.deleteExperience(experience_r74.uid);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Borrar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var experience_r74 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, experience_r74.uid));
      }
    }

    function ProfileStudentComponent_tr_110_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 27);
      }
    }

    function ProfileStudentComponent_tr_111_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 28);
      }
    }

    var _c3 = function _c3() {
      return ["/admin/profile/profile-student/account"];
    };

    var _c4 = function _c4() {
      return ["/admin/profile/profile-student/study"];
    };

    var _c5 = function _c5() {
      return ["/admin/profile/profile-student/language"];
    };

    var _c6 = function _c6() {
      return ["/admin/profile/profile-student/work-experience"];
    };

    var ProfileStudentComponent =
    /*#__PURE__*/
    function () {
      function ProfileStudentComponent(profileService, store, signinService) {
        _classCallCheck(this, ProfileStudentComponent);

        this.profileService = profileService;
        this.store = store;
        this.signinService = signinService;
        this.displayedColumnsStudies = ['type', 'level', 'title', 'center', 'date', 'cert', 'bilingue', 'dual', 'actions'];
        this.displayedColumnsLanguages = ['level', 'language', 'date', 'actions'];
        this.displayedColumnsExperience = ['company', 'position', 'date', 'actions']; // this.user = this.profileService.user;

        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["selectShowUserProfile"]));
      }

      _createClass(ProfileStudentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.studyDatasource = new _datasource_study_datasource__WEBPACK_IMPORTED_MODULE_4__["StudyDatasource"](this.store);
          this.studyDatasource.loadStudies();
          this.languagesDatasource = new _datasource_languages_datasource__WEBPACK_IMPORTED_MODULE_5__["LanguagesDatasource"](this.store);
          this.languagesDatasource.loadLanguages();
          this.experienceDatasource = new _datasource_experience_datasource__WEBPACK_IMPORTED_MODULE_6__["ExperienceDatasource"](this.store);
          this.experienceDatasource.loadExperiences();
        }
      }, {
        key: "deleteStudy",
        value: function deleteStudy(studyID) {
          this.store.dispatch(_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].deleteStudy({
            studyId: studyID
          }));
        }
      }, {
        key: "deleteLanguage",
        value: function deleteLanguage(languageID) {
          this.store.dispatch(_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].deleteLanguage({
            languageId: languageID
          }));
        }
      }, {
        key: "deleteExperience",
        value: function deleteExperience(uid) {
          this.store.dispatch(_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].deleteExperience({
            experienceId: uid
          }));
        }
      }]);

      return ProfileStudentComponent;
    }();

    ProfileStudentComponent.ɵfac = function ProfileStudentComponent_Factory(t) {
      return new (t || ProfileStudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_signin_signin_service__WEBPACK_IMPORTED_MODULE_8__["SigninService"]));
    };

    ProfileStudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileStudentComponent,
      selectors: [["app-profile-student"]],
      decls: 114,
      vars: 51,
      consts: [["id", "foto-perfil"], [1, "img-fluid", "img-profile", "rounded-circle", "mx-auto", "mb-2", 3, "src"], [1, "text-center", "pr-5"], ["id", "datosPersonales"], ["mat-stroked-button", "", "color", "primary", 3, "routerLink"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "type"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "level"], ["matColumnDef", "title"], ["matColumnDef", "center"], ["matColumnDef", "date"], ["matColumnDef", "cert"], ["matColumnDef", "bilingue"], ["matColumnDef", "dual"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-button", "", "color", "primary", 3, "routerLink"], ["id", "language-table"], ["matColumnDef", "language"], ["matColumnDef", "company"], ["matColumnDef", "position"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-button", "", "color", "primary", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function ProfileStudentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Modificar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Formaci\xF3n acad\xE9mica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](43, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ProfileStudentComponent_th_44_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ProfileStudentComponent_td_45_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](46, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ProfileStudentComponent_th_47_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ProfileStudentComponent_td_48_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](49, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ProfileStudentComponent_th_50_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ProfileStudentComponent_td_51_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](52, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ProfileStudentComponent_th_53_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ProfileStudentComponent_td_54_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](55, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ProfileStudentComponent_th_56_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ProfileStudentComponent_td_57_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](58, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ProfileStudentComponent_th_59_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ProfileStudentComponent_td_60_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](61, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ProfileStudentComponent_th_62_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ProfileStudentComponent_td_63_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](64, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ProfileStudentComponent_th_65_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ProfileStudentComponent_td_66_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](67, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ProfileStudentComponent_th_68_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ProfileStudentComponent_td_69_Template, 6, 3, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, ProfileStudentComponent_tr_70_Template, 1, 0, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ProfileStudentComponent_tr_71_Template, 1, 0, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Nueva formaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "section", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Idiomas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](78, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, ProfileStudentComponent_th_79_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, ProfileStudentComponent_td_80_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](81, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, ProfileStudentComponent_th_82_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, ProfileStudentComponent_td_83_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](84, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, ProfileStudentComponent_th_85_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, ProfileStudentComponent_td_86_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](87, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, ProfileStudentComponent_th_88_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, ProfileStudentComponent_td_89_Template, 6, 3, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, ProfileStudentComponent_tr_90_Template, 1, 0, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, ProfileStudentComponent_tr_91_Template, 1, 0, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Nuevo idioma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Experiencia laboral");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](98, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, ProfileStudentComponent_th_99_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, ProfileStudentComponent_td_100_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](101, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, ProfileStudentComponent_th_102_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, ProfileStudentComponent_td_103_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](104, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, ProfileStudentComponent_th_105_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, ProfileStudentComponent_td_106_Template, 2, 1, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](107, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, ProfileStudentComponent_th_108_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, ProfileStudentComponent_td_109_Template, 6, 3, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, ProfileStudentComponent_tr_110_Template, 1, 0, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, ProfileStudentComponent_tr_111_Template, 1, 0, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Nueva experiencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 23, ctx.user$).avatar_hash, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 25, ctx.user$).name + " " + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 27, ctx.user$).surname, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 29, ctx.user$).email, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Fecha de nacimiento: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 31, ctx.user$).birthdate, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tel\xE9fono: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 33, ctx.user$).phone, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("NIF/NIE: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 35, ctx.user$).documentNumber, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Permisos de conducir: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 37, ctx.user$).license, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Direccion: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 39, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 41, ctx.user$).address), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Acerca de mi...: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 43, ctx.user$).aboutMe, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Otras competencias...: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 45, ctx.user$).otherCompetences, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.studyDatasource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsStudies);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsStudies);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](48, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.languagesDatasource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsLanguages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsLanguages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](49, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.experienceDatasource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsExperience);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsExperience);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](50, _c6));
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["JsonPipe"]],
      styles: ["#contenido[_ngcontent-%COMP%] {\n  padding-top: 4em;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding-left: 2em;\n}\n\n#foto-perfil[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n#datosPersonales[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n#otra_info[_ngcontent-%COMP%] {\n  padding-left: 3em;\n}\n\n#otra_info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-left: 1em;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kdG9tZS9Xb3Jrc3BhY2UvSmF2YXNjcmlwdC9NYXN0ZXIvYWR2YW5jZWQtZnJvbnRlbmQvdW9jLWRlcGxveS9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS1zdHVkZW50L3Byb2ZpbGUtc3R1ZGVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLXN0dWRlbnQvcHJvZmlsZS1zdHVkZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxVQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUtc3R1ZGVudC9wcm9maWxlLXN0dWRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2NvbnRlbmlkbyB7XHJcbiAgcGFkZGluZy10b3A6IDRlbTtcclxufVxyXG5cclxudGQge1xyXG4gIHBhZGRpbmctbGVmdDogMmVtO1xyXG59XHJcblxyXG4jZm90by1wZXJmaWwge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbiNkYXRvc1BlcnNvbmFsZXMge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbiNvdHJhX2luZm8ge1xyXG4gIHBhZGRpbmctbGVmdDogM2VtO1xyXG59XHJcblxyXG4jb3RyYV9pbmZvIGRpdiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbn1cclxuXHJcbmgyIHtcclxuICBtYXJnaW4tdG9wOiAyZW07XHJcbn0iLCIjY29udGVuaWRvIHtcbiAgcGFkZGluZy10b3A6IDRlbTtcbn1cblxudGQge1xuICBwYWRkaW5nLWxlZnQ6IDJlbTtcbn1cblxuI2ZvdG8tcGVyZmlsIHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuI2RhdG9zUGVyc29uYWxlcyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbiNvdHJhX2luZm8ge1xuICBwYWRkaW5nLWxlZnQ6IDNlbTtcbn1cblxuI290cmFfaW5mbyBkaXYge1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbn1cblxuaDIge1xuICBtYXJnaW4tdG9wOiAyZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileStudentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile-student',
          templateUrl: './profile-student.component.html',
          styleUrls: ['./profile-student.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }, {
          type: _auth_signin_signin_service__WEBPACK_IMPORTED_MODULE_8__["SigninService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/profile-student/study/profile-study.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/profile/profile-student/study/profile-study.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ProfileStudyComponent */

  /***/
  function srcAppProfileProfileStudentStudyProfileStudyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileStudyComponent", function () {
      return ProfileStudyComponent;
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


    var src_app_shared_mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/mock-data */
    "./src/app/shared/mock-data.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../auth/actions/auth.actions */
    "./src/app/auth/actions/auth.actions.ts");
    /* harmony import */


    var _auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../auth/reducers/auth.reducer */
    "./src/app/auth/reducers/auth.reducer.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/services/profile.service */
    "./src/app/shared/services/profile.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _vocational_form_vocational_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./vocational-form/vocational-form.component */
    "./src/app/profile/profile-student/study/vocational-form/vocational-form.component.ts");
    /* harmony import */


    var _university_degree_form_university_degree_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./university-degree-form/university-degree-form.component */
    "./src/app/profile/profile-student/study/university-degree-form/university-degree-form.component.ts");

    function ProfileStudyComponent_mat_option_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r5.name, " ");
      }
    }

    function ProfileStudyComponent_app_vocational_form_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-vocational-form", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSave", function ProfileStudyComponent_app_vocational_form_10_Template_app_vocational_form_onSave_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.saveOrUpdate($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("study", ctx_r3.study);
      }
    }

    function ProfileStudyComponent_app_university_degree_form_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-university-degree-form", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSave", function ProfileStudyComponent_app_university_degree_form_11_Template_app_university_degree_form_onSave_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.saveOrUpdate($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("study", ctx_r4.study);
      }
    }

    var ProfileStudyComponent =
    /*#__PURE__*/
    function () {
      function ProfileStudyComponent(route, router, profileService, store) {
        var _this7 = this;

        _classCallCheck(this, ProfileStudyComponent);

        var _a;

        this.route = route;
        this.router = router;
        this.profileService = profileService;
        this.store = store;
        this.options = src_app_shared_mock_data__WEBPACK_IMPORTED_MODULE_2__["MockData"].TYPE_STUDIES;
        this.study = {};
        this.route.params.subscribe(function (params) {
          _this7.selectedStudy$ = _this7.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_5__["selectSelectedStudy"], {
            studyId: +params.uid
          }));
        });
        this.selectedStudy$.subscribe(function (study) {
          if (study != null) {
            _this7.study = study;
          }
        });
        this.studiesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          option: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](((_a = this.study) === null || _a === void 0 ? void 0 : _a.level) || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
      }

      _createClass(ProfileStudyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.nextStudyId$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_5__["selectNextUidStudy"]));
          this.nextStudyId$.subscribe(function (nextUid) {
            _this8.nextStudyId = nextUid;
          });
        }
      }, {
        key: "compareOption",
        value: function compareOption(option1, option2) {
          return option1.uid === (option2 && option2.uid);
        }
      }, {
        key: "update",
        value: function update(study) {
          this.store.dispatch(_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["actions"].updateStudy({
            study: study
          }));
          this.router.navigate(['/admin/profile']);
        }
      }, {
        key: "save",
        value: function save(study) {
          var newStudy = Object.assign(Object.assign({}, study), {
            uid: this.nextStudyId
          });
          this.store.dispatch(_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["actions"].addStudy({
            study: newStudy
          }));
          this.router.navigate(['/admin/profile']);
        }
      }, {
        key: "saveOrUpdate",
        value: function saveOrUpdate(study) {
          study.level = this.studiesForm.get('option').value;
          this.isNew() ? this.save(study) : this.update(study);
        }
      }, {
        key: "isNew",
        value: function isNew() {
          return !!!this.study.uid;
        }
      }, {
        key: "isSelectVocational",
        value: function isSelectVocational() {
          var value = this.studiesForm.get('option').value;
          return value && value.uid === src_app_shared_mock_data__WEBPACK_IMPORTED_MODULE_2__["MockData"].TYPE_STUDIES[0].uid;
        }
      }, {
        key: "isSelectUniversity",
        value: function isSelectUniversity() {
          var value = this.studiesForm.get('option').value;
          return value && value.uid === src_app_shared_mock_data__WEBPACK_IMPORTED_MODULE_2__["MockData"].TYPE_STUDIES[1].uid;
        }
      }, {
        key: "backProfile",
        value: function backProfile() {
          this.router.navigate(['/admin/profile']);
        }
      }]);

      return ProfileStudyComponent;
    }();

    ProfileStudyComponent.ɵfac = function ProfileStudyComponent_Factory(t) {
      return new (t || ProfileStudyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
    };

    ProfileStudyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileStudyComponent,
      selectors: [["app-profile-study"]],
      decls: 12,
      vars: 5,
      consts: [[3, "formGroup"], ["formControlName", "option", "appearance", "fill", 1, "col-sm-10", "form-control", 3, "compareWith"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "study", "onSave", 4, "ngIf"], [3, "value"], [3, "study", "onSave"]],
      template: function ProfileStudyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tipo de formaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "---");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileStudyComponent_mat_option_9_Template, 2, 2, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileStudyComponent_app_vocational_form_10_Template, 1, 1, "app-vocational-form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProfileStudyComponent_app_university_degree_form_11_Template, 1, 1, "app-university-degree-form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.studiesForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("compareWith", ctx.compareOption);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSelectVocational());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSelectUniversity());
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _vocational_form_vocational_form_component__WEBPACK_IMPORTED_MODULE_12__["VocationalFormComponent"], _university_degree_form_university_degree_form_component__WEBPACK_IMPORTED_MODULE_13__["UniversityDegreeComponent"]],
      styles: ["form[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #FA787E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kdG9tZS9Xb3Jrc3BhY2UvSmF2YXNjcmlwdC9NYXN0ZXIvYWR2YW5jZWQtZnJvbnRlbmQvdW9jLWRlcGxveS9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS1zdHVkZW50L3N0dWR5L3Byb2ZpbGUtc3R1ZHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS1zdHVkZW50L3N0dWR5L3Byb2ZpbGUtc3R1ZHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLXN0dWRlbnQvc3R1ZHkvcHJvZmlsZS1zdHVkeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0gaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXItY29sb3I6ICNGQTc4N0U7XHJcbn1cclxuIiwiZm9ybSBpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXItY29sb3I6ICNGQTc4N0U7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileStudyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile-study',
          templateUrl: './profile-study.component.html',
          styleUrls: ['./profile-study.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/profile-student/study/university-degree-form/university-degree-form.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/profile/profile-student/study/university-degree-form/university-degree-form.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: UniversityDegreeComponent */

  /***/
  function srcAppProfileProfileStudentStudyUniversityDegreeFormUniversityDegreeFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniversityDegreeComponent", function () {
      return UniversityDegreeComponent;
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


    var src_app_shared_directives_date_validator_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/directives/date-validator.directive */
    "./src/app/shared/directives/date-validator.directive.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var UniversityDegreeComponent =
    /*#__PURE__*/
    function () {
      function UniversityDegreeComponent() {
        _classCallCheck(this, UniversityDegreeComponent);

        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.study = {};
      }

      _createClass(UniversityDegreeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadSelectProperties();
          this.loadFormInstance();
        }
      }, {
        key: "loadSelectProperties",
        value: function loadSelectProperties() {}
      }, {
        key: "loadFormInstance",
        value: function loadFormInstance() {
          this.rForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            institution: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.study.institution, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.study.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.study.date, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(src_app_shared_directives_date_validator_directive__WEBPACK_IMPORTED_MODULE_2__["dateValidator"])()]),
            bilingue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.study.bilingue, [])
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          this.onSave.emit(Object.assign(Object.assign({}, this.study), this.rForm.value));
        }
      }, {
        key: "save",
        value: function save() {
          var study = Object.assign({
            certificate: false
          }, this.rForm.value);
          this.onSave.emit(study);
        }
      }]);

      return UniversityDegreeComponent;
    }();

    UniversityDegreeComponent.ɵfac = function UniversityDegreeComponent_Factory(t) {
      return new (t || UniversityDegreeComponent)();
    };

    UniversityDegreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UniversityDegreeComponent,
      selectors: [["app-university-degree-form"]],
      inputs: {
        study: "study"
      },
      outputs: {
        onSave: "onSave"
      },
      decls: 24,
      vars: 2,
      consts: [[3, "formGroup", "submit"], [1, "form-group"], ["appearance", "fill"], ["matInput", "", "type", "text", "name", "institution", "formControlName", "institution", 1, "col-sm-10", "form-control"], ["matInput", "", "type", "text", "name", "title", "formControlName", "title", 1, "col-sm-10", "form-control"], ["matInput", "", "type", "text", "name", "date", "formControlName", "date", 1, "col-sm-10", "form-control"], ["for", "date"], ["type", "checkbox", "name", "bilingue", "formControlName", "bilingue", 1, "form-check-input"], ["mat-button", "", "color", "primary", "type", "submit", 3, "disabled"]],
      template: function UniversityDegreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function UniversityDegreeComponent_Template_form_submit_2_listener($event) {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Centro educativo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "T\xEDtulo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Fecha de obtenci\xF3n del t\xEDtulo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-checkbox", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Bilingue ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Guardar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.rForm.invalid);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UniversityDegreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-university-degree-form',
          templateUrl: './university-degree-form.component.html'
        }]
      }], function () {
        return [];
      }, {
        onSave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        study: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/profile/profile-student/study/vocational-form/vocational-form.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/profile/profile-student/study/vocational-form/vocational-form.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: VocationalFormComponent */

  /***/
  function srcAppProfileProfileStudentStudyVocationalFormVocationalFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VocationalFormComponent", function () {
      return VocationalFormComponent;
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


    var src_app_shared_mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/mock-data */
    "./src/app/shared/mock-data.ts");
    /* harmony import */


    var src_app_shared_directives_date_validator_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/directives/date-validator.directive */
    "./src/app/shared/directives/date-validator.directive.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function VocationalFormComponent_mat_option_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var institution_r82 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", institution_r82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", institution_r82.name, " ");
      }
    }

    function VocationalFormComponent_mat_option_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r83 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r83.name, " ");
      }
    }

    function VocationalFormComponent_mat_option_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var grade_r84 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", grade_r84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", grade_r84.name, " ");
      }
    }

    function VocationalFormComponent_mat_option_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var title_r85 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", title_r85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", title_r85.name, " ");
      }
    }

    var VocationalFormComponent =
    /*#__PURE__*/
    function () {
      function VocationalFormComponent() {
        _classCallCheck(this, VocationalFormComponent);

        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.study = {};
      }

      _createClass(VocationalFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadSelectProperties();
          this.loadFormInstance();
        }
      }, {
        key: "loadSelectProperties",
        value: function loadSelectProperties() {
          this.institutions = src_app_shared_mock_data__WEBPACK_IMPORTED_MODULE_2__["MockData"].VOCATIONAL_INSTITUTION;
          this.categories = src_app_shared_mock_data__WEBPACK_IMPORTED_MODULE_2__["MockData"].VOCATIONAL_CATEGORY;
          this.titles = src_app_shared_mock_data__WEBPACK_IMPORTED_MODULE_2__["MockData"].VOCATIONAL_TITLE;
          this.grades = src_app_shared_mock_data__WEBPACK_IMPORTED_MODULE_2__["MockData"].VOCATIONAL_GRADES;
        }
      }, {
        key: "loadFormInstance",
        value: function loadFormInstance() {
          this.rForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            institution: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.study.institution, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.study.category, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            grade: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.study.grade, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.study.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.study.date, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(src_app_shared_directives_date_validator_directive__WEBPACK_IMPORTED_MODULE_3__["dateValidator"])()]),
            dual: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.study.dual, []),
            bilingue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.study.bilingue, [])
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          this.onSave.emit(Object.assign(Object.assign({}, this.study), this.rForm.value));
        }
      }, {
        key: "compareInstitution",
        value: function compareInstitution(institution1, institution2) {
          return institution1.uid === (institution2 && institution2.uid);
        }
      }, {
        key: "compareCategory",
        value: function compareCategory(category1, category2) {
          return category1.uid === (category2 && category2.uid);
        }
      }, {
        key: "compareTitle",
        value: function compareTitle(title1, title2) {
          return title1.uid === (title2 && title2.uid);
        }
      }, {
        key: "compareGrade",
        value: function compareGrade(grade1, grade2) {
          return grade1.uid === (grade2 && grade2.uid);
        }
      }, {
        key: "save",
        value: function save() {
          var study = Object.assign({
            certificate: false
          }, this.rForm.value);
          this.onSave.emit(study);
        }
      }]);

      return VocationalFormComponent;
    }();

    VocationalFormComponent.ɵfac = function VocationalFormComponent_Factory(t) {
      return new (t || VocationalFormComponent)();
    };

    VocationalFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VocationalFormComponent,
      selectors: [["app-vocational-form"]],
      inputs: {
        study: "study"
      },
      outputs: {
        onSave: "onSave"
      },
      decls: 43,
      vars: 10,
      consts: [[3, "formGroup", "submit"], [1, "form-group"], ["appearance", "fill"], ["name", "institution", "formControlName", "institution", 1, "col-sm-10", "form-control", 3, "compareWith"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "category", "formControlName", "category", 1, "col-sm-10", "form-control", 3, "compareWith"], ["name", "grade", "formControlName", "grade", 1, "col-sm-10", "form-control", 3, "compareWith"], ["name", "title", "formControlName", "title", 1, "col-sm-10", "form-control", 3, "compareWith"], ["matInput", "", "type", "text", "name", "date", "formControlName", "date", 1, "col-sm-10", "form-control"], ["name", "bilingue", "formControlName", "bilingue", 1, "form-check-input"], ["name", "dual", "formControlName", "dual", 1, "form-check-input"], ["mat-button", "", "color", "primary", "type", "submit", 3, "disabled"], [3, "value"]],
      template: function VocationalFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Editar/A\xF1adir ciclo formativo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function VocationalFormComponent_Template_form_submit_5_listener($event) {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Centro educativo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, VocationalFormComponent_mat_option_11_Template, 2, 2, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Familia profesional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, VocationalFormComponent_mat_option_17_Template, 2, 2, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nivel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, VocationalFormComponent_mat_option_23_Template, 2, 2, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "T\xEDtulo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, VocationalFormComponent_mat_option_29_Template, 2, 2, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Fecha de obtenci\xF3n del t\xEDtulo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-checkbox", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Bilingue ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-checkbox", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Dual ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Guardar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("compareWith", ctx.compareInstitution);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.institutions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("compareWith", ctx.compareCategory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("compareWith", ctx.compareGrade);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.grades);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("compareWith", ctx.compareTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.titles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.rForm.invalid);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VocationalFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vocational-form',
          templateUrl: './vocational-form.component.html'
        }]
      }], function () {
        return [];
      }, {
        onSave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        study: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/profile/profile-student/work-experience/work-experience-form/work-experience-form.component.ts":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/profile/profile-student/work-experience/work-experience-form/work-experience-form.component.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: WorkExperienceFormComponent */

  /***/
  function srcAppProfileProfileStudentWorkExperienceWorkExperienceFormWorkExperienceFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkExperienceFormComponent", function () {
      return WorkExperienceFormComponent;
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


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var WorkExperienceFormComponent =
    /*#__PURE__*/
    function () {
      function WorkExperienceFormComponent(fb) {
        _classCallCheck(this, WorkExperienceFormComponent);

        this.fb = fb;
        this.submitForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(WorkExperienceFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadFormInstance();
        }
      }, {
        key: "loadFormInstance",
        value: function loadFormInstance() {
          this.workForm = this.fb.group({
            uid: [this.workExperience.uid],
            company: [this.workExperience.company, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            position: [this.workExperience.position, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            date: [this.workExperience.date, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var newWorkExperience = Object.assign({}, this.workForm.value);
          this.submitForm.emit(newWorkExperience);
        }
      }]);

      return WorkExperienceFormComponent;
    }();

    WorkExperienceFormComponent.ɵfac = function WorkExperienceFormComponent_Factory(t) {
      return new (t || WorkExperienceFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    WorkExperienceFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorkExperienceFormComponent,
      selectors: [["app-work-experience-form"]],
      inputs: {
        workExperience: "workExperience"
      },
      outputs: {
        submitForm: "submitForm"
      },
      decls: 23,
      vars: 2,
      consts: [[3, "formGroup", "submit"], [1, "form-group"], ["appearance", "fill"], ["matInput", "", "id", "company", "type", "text", "formControlName", "company", 1, "col-sm-10", "form-control"], ["matInput", "", "id", "position", "type", "text", "formControlName", "position", 1, "col-sm-10", "form-control"], ["matInput", "", "id", "date", "type", "text", "name", "date", "formControlName", "date", 1, "col-sm-10", "form-control"], ["mat-button", "", "color", "primary", "type", "submit", 3, "disabled"]],
      template: function WorkExperienceFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Editar/Nueva experiencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function WorkExperienceFormComponent_Template_form_submit_5_listener($event) {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Empresa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Posici\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Fecha de obtenci\xF3n del t\xEDtulo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Guardar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.workForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.workForm.invalid);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS1zdHVkZW50L3dvcmstZXhwZXJpZW5jZS93b3JrLWV4cGVyaWVuY2UtZm9ybS93b3JrLWV4cGVyaWVuY2UtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkExperienceFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-work-experience-form',
          templateUrl: './work-experience-form.component.html',
          styleUrls: ['./work-experience-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, {
        workExperience: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        submitForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/profile/profile-student/work-experience/work-experience.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/profile/profile-student/work-experience/work-experience.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: WorkExperienceComponent */

  /***/
  function srcAppProfileProfileStudentWorkExperienceWorkExperienceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkExperienceComponent", function () {
      return WorkExperienceComponent;
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


    var _auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../auth/actions/auth.actions */
    "./src/app/auth/actions/auth.actions.ts");
    /* harmony import */


    var _auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../auth/reducers/auth.reducer */
    "./src/app/auth/reducers/auth.reducer.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _work_experience_form_work_experience_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./work-experience-form/work-experience-form.component */
    "./src/app/profile/profile-student/work-experience/work-experience-form/work-experience-form.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var WorkExperienceComponent =
    /*#__PURE__*/
    function () {
      function WorkExperienceComponent(store, router, route) {
        var _this9 = this;

        _classCallCheck(this, WorkExperienceComponent);

        this.store = store;
        this.router = router;
        this.route = route;
        this.experience = {};
        this.route.params.subscribe(function (params) {
          _this9.selectedExperience$ = _this9.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__["selectSelectedExperience"], {
            experienceUid: +params.uid
          }));
        });
      }

      _createClass(WorkExperienceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.nextWorkUid$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_3__["selectNextUidExperience"]));
          this.nextWorkUid$.subscribe(function (nextUid) {
            _this10.nextWorkUid = nextUid;
          });
        }
      }, {
        key: "addOrUpdateExperience",
        value: function addOrUpdateExperience(experience) {
          experience.uid ? this.update(experience) : this.save(experience);
        }
      }, {
        key: "update",
        value: function update(experience) {
          this.store.dispatch(_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].updateWorkExperience({
            experience: experience
          }));
          this.router.navigate(['/admin/profile']);
        }
      }, {
        key: "save",
        value: function save(experience) {
          var newWorkExperience = Object.assign(Object.assign({}, experience), {
            uid: this.nextWorkUid
          });
          this.store.dispatch(_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].addWorkExperience({
            experience: newWorkExperience
          }));
          this.router.navigate(['/admin/profile']);
        }
      }]);

      return WorkExperienceComponent;
    }();

    WorkExperienceComponent.ɵfac = function WorkExperienceComponent_Factory(t) {
      return new (t || WorkExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    WorkExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorkExperienceComponent,
      selectors: [["app-work-experience"]],
      decls: 2,
      vars: 3,
      consts: [[3, "workExperience", "submitForm"]],
      template: function WorkExperienceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-work-experience-form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submitForm", function WorkExperienceComponent_Template_app_work_experience_form_submitForm_0_listener($event) {
            return ctx.addOrUpdateExperience($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("workExperience", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.selectedExperience$) || ctx.experience);
        }
      },
      directives: [_work_experience_form_work_experience_form_component__WEBPACK_IMPORTED_MODULE_5__["WorkExperienceFormComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS1zdHVkZW50L3dvcmstZXhwZXJpZW5jZS93b3JrLWV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-work-experience',
          templateUrl: './work-experience.component.html',
          styleUrls: ['./work-experience.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _profile_student_profile_student_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./profile-student/profile-student.component */
    "./src/app/profile/profile-student/profile-student.component.ts");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)();
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 3,
      vars: 0,
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Profile\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-profile-student");
        }
      },
      directives: [_profile_student_profile_student_component__WEBPACK_IMPORTED_MODULE_1__["ProfileStudentComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/profile.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.module.ts ***!
    \*******************************************/

  /*! exports provided: ProfileModule */

  /***/
  function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _profile_student_profile_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile-student/profile-student.component */
    "./src/app/profile/profile-student/profile-student.component.ts");
    /* harmony import */


    var _profile_student_study_profile_study_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-student/study/profile-study.component */
    "./src/app/profile/profile-student/study/profile-study.component.ts");
    /* harmony import */


    var _profile_student_study_vocational_form_vocational_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile-student/study/vocational-form/vocational-form.component */
    "./src/app/profile/profile-student/study/vocational-form/vocational-form.component.ts");
    /* harmony import */


    var _profile_student_study_university_degree_form_university_degree_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./profile-student/study/university-degree-form/university-degree-form.component */
    "./src/app/profile/profile-student/study/university-degree-form/university-degree-form.component.ts");
    /* harmony import */


    var _profile_student_language_profile_language_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./profile-student/language/profile-language.component */
    "./src/app/profile/profile-student/language/profile-language.component.ts");
    /* harmony import */


    var _profile_student_account_profile_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./profile-student/account/profile-account.component */
    "./src/app/profile/profile-student/account/profile-account.component.ts");
    /* harmony import */


    var _profile_student_account_profile_account_form_profile_account_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./profile-student/account/profile-account-form/profile-account-form.component */
    "./src/app/profile/profile-student/account/profile-account-form/profile-account-form.component.ts");
    /* harmony import */


    var _profile_student_language_profile_language_form_profile_language_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./profile-student/language/profile-language-form/profile-language-form.component */
    "./src/app/profile/profile-student/language/profile-language-form/profile-language-form.component.ts");
    /* harmony import */


    var _profile_student_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./profile-student/work-experience/work-experience.component */
    "./src/app/profile/profile-student/work-experience/work-experience.component.ts");
    /* harmony import */


    var _profile_student_work_experience_work_experience_form_work_experience_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./profile-student/work-experience/work-experience-form/work-experience-form.component */
    "./src/app/profile/profile-student/work-experience/work-experience-form/work-experience-form.component.ts");
    /* harmony import */


    var _shared_material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../shared/material.module */
    "./src/app/shared/material.module.ts");

    var ProfileModule = function ProfileModule() {
      _classCallCheck(this, ProfileModule);
    };

    ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProfileModule
    });
    ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProfileModule_Factory(t) {
        return new (t || ProfileModule)();
      },
      imports: [[src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProfileRoutingModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_14__["MaterialModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, {
        declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], _profile_student_profile_student_component__WEBPACK_IMPORTED_MODULE_4__["ProfileStudentComponent"], _profile_student_study_profile_study_component__WEBPACK_IMPORTED_MODULE_5__["ProfileStudyComponent"], _profile_student_study_vocational_form_vocational_form_component__WEBPACK_IMPORTED_MODULE_6__["VocationalFormComponent"], _profile_student_study_university_degree_form_university_degree_form_component__WEBPACK_IMPORTED_MODULE_7__["UniversityDegreeComponent"], _profile_student_language_profile_language_component__WEBPACK_IMPORTED_MODULE_8__["ProfileLanguageComponent"], _profile_student_account_profile_account_component__WEBPACK_IMPORTED_MODULE_9__["ProfileAccountComponent"], _profile_student_account_profile_account_form_profile_account_form_component__WEBPACK_IMPORTED_MODULE_10__["ProfileAccountFormComponent"], _profile_student_language_profile_language_form_profile_language_form_component__WEBPACK_IMPORTED_MODULE_11__["ProfileLanguageFormComponent"], _profile_student_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_12__["WorkExperienceComponent"], _profile_student_work_experience_work_experience_form_work_experience_form_component__WEBPACK_IMPORTED_MODULE_13__["WorkExperienceFormComponent"]],
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProfileRoutingModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_14__["MaterialModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], _profile_student_profile_student_component__WEBPACK_IMPORTED_MODULE_4__["ProfileStudentComponent"], _profile_student_study_profile_study_component__WEBPACK_IMPORTED_MODULE_5__["ProfileStudyComponent"], _profile_student_study_vocational_form_vocational_form_component__WEBPACK_IMPORTED_MODULE_6__["VocationalFormComponent"], _profile_student_study_university_degree_form_university_degree_form_component__WEBPACK_IMPORTED_MODULE_7__["UniversityDegreeComponent"], _profile_student_language_profile_language_component__WEBPACK_IMPORTED_MODULE_8__["ProfileLanguageComponent"], _profile_student_account_profile_account_component__WEBPACK_IMPORTED_MODULE_9__["ProfileAccountComponent"], _profile_student_account_profile_account_form_profile_account_form_component__WEBPACK_IMPORTED_MODULE_10__["ProfileAccountFormComponent"], _profile_student_language_profile_language_form_profile_language_form_component__WEBPACK_IMPORTED_MODULE_11__["ProfileLanguageFormComponent"], _profile_student_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_12__["WorkExperienceComponent"], _profile_student_work_experience_work_experience_form_work_experience_form_component__WEBPACK_IMPORTED_MODULE_13__["WorkExperienceFormComponent"]],
          imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProfileRoutingModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_14__["MaterialModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/directives/date-validator.directive.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/directives/date-validator.directive.ts ***!
    \***************************************************************/

  /*! exports provided: dateValidator */

  /***/
  function srcAppSharedDirectivesDateValidatorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dateValidator", function () {
      return dateValidator;
    });
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

    function dateValidator() {
      return function (control) {
        var forbidden = !moment__WEBPACK_IMPORTED_MODULE_0__(control.value, 'DD/MM/YYYY', true).isValid();
        return forbidden ? {
          forbiddenDate: {
            value: control.value
          }
        } : null;
      };
    }
    /***/

  },

  /***/
  "./src/app/shared/directives/document-number-validator.directive.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/directives/document-number-validator.directive.ts ***!
    \**************************************************************************/

  /*! exports provided: documentNumberValidator */

  /***/
  function srcAppSharedDirectivesDocumentNumberValidatorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _COMMAND;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "documentNumberValidator", function () {
      return documentNumberValidator;
    });
    /* harmony import */


    var _mock_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../mock-data */
    "./src/app/shared/mock-data.ts");

    var COMMAND = (_COMMAND = {}, _defineProperty(_COMMAND, _mock_data__WEBPACK_IMPORTED_MODULE_0__["MockData"].DOCUMENTS_TYPE[0].uid, isValidNIF), _defineProperty(_COMMAND, _mock_data__WEBPACK_IMPORTED_MODULE_0__["MockData"].DOCUMENTS_TYPE[1].uid, isValidPassport), _defineProperty(_COMMAND, _mock_data__WEBPACK_IMPORTED_MODULE_0__["MockData"].DOCUMENTS_TYPE[2].uid, isValidOther), _defineProperty(_COMMAND, "execute", function execute(documentType, params) {
      var type = documentType.uid;
      return !this[type](params);
    }), _COMMAND);

    function isValidNIF(nif) {
      var isValid = false;
      var fixedNIF = nif.toUpperCase();
      var correctDigit = '';
      var writtenDigit = '';

      if (!/^[A-Z]+$/i.test(fixedNIF.substr(1, 1))) {
        fixedNIF = '000000000' + nif;
        fixedNIF = fixedNIF.substr(-9);
      }

      writtenDigit = nif.substr(-1, 1);

      if (isValidNIFFormat(fixedNIF)) {
        correctDigit = getNIFCheckDigit(fixedNIF);

        if (writtenDigit == correctDigit) {
          isValid = true;
        }
      }

      return isValid;
    }

    function isValidNIFFormat(docNumber) {
      return respectsDocPattern(docNumber, /^[KLM0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][A-Z0-9]/);
    }

    function respectsDocPattern(givenString, pattern) {
      var isValid = false;
      var fixedString = givenString.toUpperCase();
      var firstChar = parseInt(fixedString.substr(0, 1), 10);

      if (firstChar % 1 === 0) {
        fixedString = '000000000' + fixedString;
        fixedString = fixedString.substr(-9);
      }

      if (pattern.test(fixedString)) {
        isValid = true;
      }

      return isValid;
    }

    function getNIFCheckDigit(docNumber) {
      var keyString = 'TRWAGMYFPDXBNJZSQVHLCKE';
      var fixedDocNumber = docNumber.toUpperCase();
      var position = 0;
      var writtenLetter = '';
      var correctLetter = '';

      if (!/^[A-Z]+$/i.test(fixedDocNumber.substr(1, 1))) {
        fixedDocNumber = '000000000' + fixedDocNumber;
        fixedDocNumber = fixedDocNumber.substr(-9);
      } else {
        fixedDocNumber = docNumber.toUpperCase();
      }

      if (isValidNIFFormat(fixedDocNumber)) {
        writtenLetter = fixedDocNumber.substr(-1);
        fixedDocNumber = fixedDocNumber.replace('K', '0');
        fixedDocNumber = fixedDocNumber.replace('L', '0');
        fixedDocNumber = fixedDocNumber.replace('M', '0');
        position = fixedDocNumber.substr(0, 8) % 23;
        correctLetter = keyString.substr(position, 1);
      }

      return correctLetter;
    }

    function isValidPassport(passport) {
      //TODO: This code is not develop yet.
      return true;
    }

    function isValidOther(other) {
      return true;
    }

    function documentNumberValidator() {
      return function (form) {
        var documentType = form.controls['documentType'].value;
        var documentNumber = form.controls['documentNumber'].value;
        var forbidden = COMMAND.execute(documentType, documentNumber);
        return forbidden ? {
          documentNumberForbbiden: {
            value: documentNumber
          }
        } : null;
      };
    }
    /***/

  },

  /***/
  "./src/app/shared/mock-data.ts":
  /*!*************************************!*\
    !*** ./src/app/shared/mock-data.ts ***!
    \*************************************/

  /*! exports provided: MockData */

  /***/
  function srcAppSharedMockDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MockData", function () {
      return MockData;
    });

    var MockData =
    /*#__PURE__*/
    function () {
      function MockData() {
        _classCallCheck(this, MockData);
      }

      _createClass(MockData, null, [{
        key: "fakeIncreaseID",
        value: function fakeIncreaseID(collection, object) {
          var _object = Object.assign({}, object);

          var uid = collection[collection.length - 1].uid + 1;
          _object['uid'] = uid;
          return _object;
        }
      }]);

      return MockData;
    }();

    MockData.VOCATIONAL_INSTITUTION = [{
      uid: 1,
      name: 'IES Belén'
    }, {
      uid: 2,
      name: 'IES Politécnico Jesús Marín'
    }, {
      uid: 3,
      name: 'IES Rosaleda'
    }];
    MockData.VOCATIONAL_CATEGORY = [{
      uid: 1,
      name: 'Artes Gráficas'
    }, {
      uid: 2,
      name: 'Informática y comunicaciones'
    }, {
      uid: 3,
      name: 'Imagen y sonido'
    }, {
      uid: 4,
      name: 'Comercio y Marketing'
    }, {
      uid: 5,
      name: 'Administración y Gestión'
    }];
    MockData.VOCATIONAL_TITLE = [{
      uid: 1,
      name: 'Desarrollo de Aplicaciones Web'
    }, {
      uid: 2,
      name: 'Administración de Sistemas Informáticos y Redes '
    }, {
      uid: 3,
      name: 'VideoDJ'
    }, {
      uid: 4,
      name: 'Desarrollo Aplicaciones Multiplataforma'
    }, {
      uid: 5,
      name: 'Gestión Comercial y Empresarial'
    }, {
      uid: 6,
      name: 'Empresariales'
    }];
    MockData.VOCATIONAL_GRADES = [{
      uid: 1,
      name: 'FP Básica'
    }, {
      uid: 2,
      name: 'Ciclo Formativo de Grado Medio'
    }, {
      uid: 3,
      name: 'Ciclo Formativo de Grado Superior'
    }];
    MockData.TYPE_STUDIES = [{
      uid: 1,
      name: 'Ciclo formativo'
    }, {
      uid: 2,
      name: 'Título Universitario'
    }, {
      uid: 3,
      name: 'Otro título'
    }];
    MockData.LANGUAGES_LEVEL = [{
      uid: 1,
      name: 'A1'
    }, {
      uid: 2,
      name: 'A2'
    }, {
      uid: 3,
      name: 'B1'
    }, {
      uid: 4,
      name: 'B2'
    }, {
      uid: 5,
      name: 'C1'
    }, {
      uid: 6,
      name: 'C2'
    }];
    MockData.LANGUAGES_NAME = [{
      uid: 1,
      name: 'Inglés'
    }, {
      uid: 2,
      name: 'Francés'
    }, {
      uid: 3,
      name: 'Alemán'
    }, {
      uid: 4,
      name: 'Espaol'
    }];
    MockData.DOCUMENTS_TYPE = [{
      uid: 1,
      name: 'NIF'
    }, {
      uid: 2,
      name: 'Pasaporte'
    }, {
      uid: 3,
      name: 'Otro'
    }];
    MockData.MUNICIPES = [{
      uid: 1,
      name: 'Málaga'
    }, {
      uid: 2,
      name: 'Fuengirola'
    }, {
      uid: 3,
      name: 'Rincón de la victoria'
    }, {
      uid: 4,
      name: 'Dos hermanas'
    }, {
      uid: 5,
      name: 'Sevilla'
    }, {
      uid: 6,
      name: 'Chiclana de la Frontera'
    }, {
      uid: 7,
      name: 'Estepona'
    }, {
      uid: 8,
      name: 'Campanillas (PTA)'
    }, {
      uid: 9,
      name: 'Motril'
    }, {
      uid: 10,
      name: 'Osuna'
    }];
    MockData.PROVINCES = [{
      uid: 1,
      name: 'Málaga'
    }, {
      uid: 2,
      name: 'Sevilla'
    }, {
      uid: 3,
      name: 'Huelva'
    }, {
      uid: 4,
      name: 'Cádiz'
    }, {
      uid: 5,
      name: 'Granada'
    }];
    /***/
  }
}]);
//# sourceMappingURL=profile-profile-module-es5.js.map