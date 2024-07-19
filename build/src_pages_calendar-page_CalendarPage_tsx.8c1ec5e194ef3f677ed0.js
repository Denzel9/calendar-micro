"use strict";
(self["webpackChunkmicro"] = self["webpackChunkmicro"] || []).push([["src_pages_calendar-page_CalendarPage_tsx"],{

/***/ "./src/helpers/getCalendar.ts":
/*!************************************!*\
  !*** ./src/helpers/getCalendar.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInMonth: () => (/* binding */ daysInMonth),
/* harmony export */   delay: () => (/* binding */ delay),
/* harmony export */   listDaysCalendarField: () => (/* binding */ listDaysCalendarField),
/* harmony export */   listDaysCalendarRow: () => (/* binding */ listDaysCalendarRow)
/* harmony export */ });
/* harmony import */ var _getDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDate */ "./src/helpers/getDate.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var daysInMonth = function (month, year) {
    return new Date(year, month, 0).getDate();
};
var delay = [0, 3, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
var prevMonthListDays = function () {
    var prevMonth = [];
    for (var i = 0; i < daysInMonth(+_getDate__WEBPACK_IMPORTED_MODULE_0__.month, _getDate__WEBPACK_IMPORTED_MODULE_0__.year); i++) {
        prevMonth.push(i + 1);
    }
    return prevMonth;
};
var listDaysCalendarField = function (month) {
    var delaySlice = prevMonthListDays().slice(-delay[+month]);
    var currentMonth = month > 0 && delay[+month] !== 0 ? __spreadArray([], delaySlice, true) : [];
    for (var i = 1; i <= daysInMonth(+month + 1, _getDate__WEBPACK_IMPORTED_MODULE_0__.year); i++) {
        currentMonth.push(i);
    }
    for (var i = 1; currentMonth.length < 42; i++) {
        currentMonth.push(i);
    }
    return currentMonth;
};
var listDaysCalendarRow = function (month) {
    var currentMonth = [];
    var tempArr = [];
    for (var i = 1; i <= daysInMonth(+month + 1, _getDate__WEBPACK_IMPORTED_MODULE_0__.year); i++) {
        tempArr.push(i);
        if (tempArr.length === 7) {
            currentMonth.push(tempArr);
            tempArr = [];
        }
        else if (daysInMonth(+month + 1, _getDate__WEBPACK_IMPORTED_MODULE_0__.year) === i) {
            currentMonth.push(tempArr);
            tempArr = [];
        }
    }
    return currentMonth;
};


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/helpers/getDate.ts":
/*!********************************!*\
  !*** ./src/helpers/getDate.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMonthName: () => (/* binding */ getMonthName),
/* harmony export */   month: () => (/* binding */ month),
/* harmony export */   months: () => (/* binding */ months),
/* harmony export */   today: () => (/* binding */ today),
/* harmony export */   weekDays: () => (/* binding */ weekDays),
/* harmony export */   weekDaysShorts: () => (/* binding */ weekDaysShorts),
/* harmony export */   year: () => (/* binding */ year)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var today = new Date().getDate();
var month = new Date().getMonth().toString().padStart(2, '0');
var year = new Date().getFullYear();
var weekDays = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
];
var weekDaysShorts = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
var months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
];
var getMonthName = function (num) {
    return months[+num];
};


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/pages/calendar-page/CalendarPage.tsx":
/*!**************************************************!*\
  !*** ./src/pages/calendar-page/CalendarPage.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarContext: () => (/* binding */ CalendarContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _calendar_page_nav_CalendarPageNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-page-nav/CalendarPageNav */ "./src/pages/calendar-page/calendar-page-nav/CalendarPageNav.tsx");
/* harmony import */ var _calendar_page_desk_CalendarPageDesk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-page-desk/CalendarPageDesk */ "./src/pages/calendar-page/calendar-page-desk/CalendarPageDesk.tsx");
/* harmony import */ var _helpers_getDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/getDate */ "./src/helpers/getDate.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();





var CalendarContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
var CalendarPage = function () {
    _react_refresh_temp_2();
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Неделя'), calendarMode = _a[0], setCalendarMode = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(+_helpers_getDate__WEBPACK_IMPORTED_MODULE_4__.month), numberMonth = _b[0], setNumberMonth = _b[1];
    var currentPositionMonth = _helpers_getDate__WEBPACK_IMPORTED_MODULE_4__.months.indexOf((0,_helpers_getDate__WEBPACK_IMPORTED_MODULE_4__.getMonthName)(_helpers_getDate__WEBPACK_IMPORTED_MODULE_4__.month));
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentPositionMonth < 7 ? [0, 7] : [5, 12]), monthCount = _c[0], setMonthCount = _c[1];
    var contextValue = {
        calendarMode: calendarMode,
        setCalendarMode: setCalendarMode,
        numberMonth: numberMonth,
        setNumberMonth: setNumberMonth,
        monthCount: monthCount,
        setMonthCount: setMonthCount,
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CalendarContext.Provider, { value: contextValue, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: " bg-white rounded-lg relative h-full", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_calendar_page_nav_CalendarPageNav__WEBPACK_IMPORTED_MODULE_2__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_calendar_page_desk_CalendarPageDesk__WEBPACK_IMPORTED_MODULE_3__["default"], {})] }) }));
};
_react_refresh_temp_1 = CalendarPage;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "CalendarPage");
_react_refresh_temp_2(CalendarPage, "Uz6+bRVF6E/XdREZVO4gzh7EOJc=");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarPage);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/pages/calendar-page/calendar-page-desk/CalendarPageDesk.tsx":
/*!*************************************************************************!*\
  !*** ./src/pages/calendar-page/calendar-page-desk/CalendarPageDesk.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CalendarPageDeskItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalendarPageDeskItem */ "./src/pages/calendar-page/calendar-page-desk/CalendarPageDeskItem.tsx");
/* harmony import */ var _CalendarPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CalendarPage */ "./src/pages/calendar-page/CalendarPage.tsx");
/* harmony import */ var _helpers_getDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/getDate */ "./src/helpers/getDate.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "webpack/sharing/consume/default/classnames/classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();






var test = [
    {
        time: '09:00 - 10:30',
        date: 20,
        month: 'Май',
        type: 'MEETING',
        message: 'Забрать договор в банке',
    },
    { time: '12:30 - 13:30', date: 20, month: 'Май', type: 'TASK', message: 'Собрать вещи' },
    { time: '09:00 - 10:00', date: 21, month: 'Май', type: 'NOTION', message: 'Позвонить Арине' },
    { time: '10:00 - 11:00', date: 21, month: 'Май', type: 'ANY', message: 'Доделать компоненты' },
    {
        time: '09:00 - 11:00',
        date: 22,
        month: 'Май',
        type: 'MEETING',
        message: 'Забрать договор в банке',
    },
    { time: '11:00 - 12:00', date: 22, month: 'Май', type: 'TASK', message: 'Собрать вещи' },
    { time: '09:00 - 11:00', date: 23, month: 'Май', type: 'NOTION', message: 'Позвонить Арине' },
    { time: '11:00 - 13:00', date: 23, month: 'Май', type: 'ANY', message: 'Доделать компоненты' },
    { time: '09:00 - 11:00', date: 24, month: 'Май', type: 'NOTION', message: 'Позвонить Арине' },
    { time: '12:00 - 13:00', date: 24, month: 'Май', type: 'ANY', message: 'Доделать компоненты' },
    { time: '09:00 - 11:00', date: 25, month: 'Май', type: 'NOTION', message: 'Позвонить Арине' },
    { time: '11:00 - 12:00', date: 25, month: 'Май', type: 'ANY', message: 'Доделать компоненты' },
    { time: '09:00 - 11:00', date: 26, month: 'Май', type: 'NOTION', message: 'Позвонить Арине' },
    { time: '11:00 - 12:00', date: 26, month: 'Май', type: 'ANY', message: 'Доделать компоненты' },
];
var CalendarPageDesk = function () {
    _react_refresh_temp_2();
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_CalendarPage__WEBPACK_IMPORTED_MODULE_3__.CalendarContext), calendarMode = _a.calendarMode, monthCount = _a.monthCount;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1), hoverIndex = _b[0], sethoverIndex = _b[1];
    var range = [20, 21, 22, 23, 24, 25, 26];
    var getCalendarDeskBoxs = function (date) {
        var obj = {};
        for (var index = 0; index < test.length; index++) {
            var element = test[index];
            if (obj[element.date]) {
                obj[element.date].push(element);
            }
            else {
                obj[element.date] = [element];
            }
        }
        return obj[date];
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: " bg-lightGrey px-12 py-5 grid grid-cols-7", children: range.map(function (elem, i) {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: " items-center flex flex-col gap-1", children: [calendarMode === 'Неделя' &&
                        getCalendarDeskBoxs(elem).map(function (el) {
                            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CalendarPageDeskItem__WEBPACK_IMPORTED_MODULE_2__["default"], { time: (el === null || el === void 0 ? void 0 : el.time) || '', date: (el === null || el === void 0 ? void 0 : el.date) || 0, type: (el === null || el === void 0 ? void 0 : el.type) || '', message: (el === null || el === void 0 ? void 0 : el.message) || '' }, Math.random()));
                        }), calendarMode === 'Месяц' &&
                        test.map(function (el, index) {
                            console.log(hoverIndex, i);
                            if (el.month &&
                                i === _helpers_getDate__WEBPACK_IMPORTED_MODULE_4__.months.indexOf(el.month) &&
                                _helpers_getDate__WEBPACK_IMPORTED_MODULE_4__.months.indexOf(el.month) > monthCount[0] &&
                                _helpers_getDate__WEBPACK_IMPORTED_MODULE_4__.months.indexOf(el.month) < monthCount[1]) {
                                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(index >= 1 && '-mt-20', hoverIndex >= 0 && index > hoverIndex && index - hoverIndex === 1
                                        ? ' duration-300 -mt-1'
                                        : ''), onMouseEnter: function () { return sethoverIndex(index); }, onMouseLeave: function () { return sethoverIndex(-1); }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CalendarPageDeskItem__WEBPACK_IMPORTED_MODULE_2__["default"], { time: (el === null || el === void 0 ? void 0 : el.time) || '', date: (el === null || el === void 0 ? void 0 : el.date) || 0, type: (el === null || el === void 0 ? void 0 : el.type) || '', message: (el === null || el === void 0 ? void 0 : el.message) || '', defaultSize: true }, Math.random()) }));
                            }
                            else
                                return null;
                        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CalendarPageDeskItem__WEBPACK_IMPORTED_MODULE_2__["default"], { time: '', date: 0, type: '', message: '' }, Math.random())] }, elem));
        }) }));
};
_react_refresh_temp_1 = CalendarPageDesk;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "CalendarPageDesk");
_react_refresh_temp_2(CalendarPageDesk, "gbFccOzJif/XOUQCwgsGhYLqIbc=");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarPageDesk);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/pages/calendar-page/calendar-page-desk/CalendarPageDeskItem.tsx":
/*!*****************************************************************************!*\
  !*** ./src/pages/calendar-page/calendar-page-desk/CalendarPageDeskItem.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   eventTypes: () => (/* binding */ eventTypes)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "webpack/sharing/consume/default/classnames/classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.mjs");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();




var eventTypes = {
    MEETING: 'MEETING',
    TASK: 'TASK',
    NOTION: 'NOTION',
    ANY: 'ANY',
};
var CalendarPageDeskItem = function (_a) {
    var message = _a.message, type = _a.type, time = _a.time, date = _a.date, prevItemTime = _a.prevItemTime, defaultSize = _a.defaultSize;
    _react_refresh_temp_2();
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isShowPlus = _b[0], setIsShowPlus = _b[1];
    var getSize = function (time) {
        var baseSize = 112;
        var splitedTime = time === null || time === void 0 ? void 0 : time.split('-').map(function (el) { return el.trim(); });
        var hours = [];
        var minutes = [];
        splitedTime === null || splitedTime === void 0 ? void 0 : splitedTime.forEach(function (el) {
            hours.push(el.split(':')[0]);
            minutes.push(el.split(':')[1]);
        });
        return (+hours[1] % +hours[0]) * baseSize + +minutes[1] * 1.9;
    };
    var getCurrentSize = function (time) {
        if (prevItemTime && getSize(prevItemTime) > 112) {
            return getSize(prevItemTime) - getSize(time);
        }
        else
            return getSize(time) || 112;
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
            height: defaultSize ? 112 : getCurrentSize(time),
        }, onMouseEnter: function () { return setIsShowPlus(true); }, onMouseLeave: function () { return setIsShowPlus(false); }, className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(' w-28 rounded-lg cursor-pointer pl-2 pt-3 pb-1 pr-2 text-xs text-dark relative z-10 ', !type && 'hover:border border-dashed border-purple2', type === eventTypes.MEETING && ' bg-blues', type === eventTypes.TASK && '  bg-reds', type === eventTypes.NOTION && ' bg-red-400', type === eventTypes.ANY && ' bg-purple-400'), children: type && message ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "", children: time }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "mt-2", children: message })] })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: " w-full h-full flex items-center justify-center", children: isShowPlus && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiPlus, { className: " text-3xl text-purple-400" }) })) }));
};
_react_refresh_temp_1 = CalendarPageDeskItem;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "CalendarPageDeskItem");
_react_refresh_temp_2(CalendarPageDeskItem, "v4DywX3m6JRbwZmrbxnqbe5S/1Y=");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarPageDeskItem);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/pages/calendar-page/calendar-page-nav/CalendarPageNav.tsx":
/*!***********************************************************************!*\
  !*** ./src/pages/calendar-page/calendar-page-nav/CalendarPageNav.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _CalendarPageNavMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarPageNavMode */ "./src/pages/calendar-page/calendar-page-nav/CalendarPageNavMode.tsx");
/* harmony import */ var _calendar_page_nav_handler_CalendarPageNavHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-page-nav-handler/CalendarPageNavHandler */ "./src/pages/calendar-page/calendar-page-nav/calendar-page-nav-handler/CalendarPageNavHandler.tsx");
/* harmony import */ var _helpers_getDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/getDate */ "./src/helpers/getDate.ts");
/* harmony import */ var _CalendarPageNavField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CalendarPageNavField */ "./src/pages/calendar-page/calendar-page-nav/CalendarPageNavField.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;





var CalendarPageNav = function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: " p-5", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: " flex items-end justify-between", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: " text-3xl", children: "".concat((0,_helpers_getDate__WEBPACK_IMPORTED_MODULE_3__.getMonthName)(_helpers_getDate__WEBPACK_IMPORTED_MODULE_3__.month), ", ").concat(_helpers_getDate__WEBPACK_IMPORTED_MODULE_3__.year) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CalendarPageNavMode__WEBPACK_IMPORTED_MODULE_1__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CalendarPageNavField__WEBPACK_IMPORTED_MODULE_4__["default"], {})] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_calendar_page_nav_handler_CalendarPageNavHandler__WEBPACK_IMPORTED_MODULE_2__["default"], {})] }));
};
_react_refresh_temp_1 = CalendarPageNav;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "CalendarPageNav");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarPageNav);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/pages/calendar-page/calendar-page-nav/CalendarPageNavField.tsx":
/*!****************************************************************************!*\
  !*** ./src/pages/calendar-page/calendar-page-nav/CalendarPageNavField.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/ti */ "./node_modules/react-icons/ti/index.mjs");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.mjs");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;



var CalendarPageNavField = function () {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: " flex items-center gap-3 text-white bg-zinc-800 rounded-lg p-2", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: " flex items-center gap-2", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ti__WEBPACK_IMPORTED_MODULE_1__.TiWeatherCloudy, { className: "", size: 25 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "+25\u00B0C" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: " hover:bg-zinc-700 active:bg-zinc-900 rounded-lg duration-300", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosMore, { size: 25 }) })] }));
};
_react_refresh_temp_1 = CalendarPageNavField;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "CalendarPageNavField");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarPageNavField);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/pages/calendar-page/calendar-page-nav/CalendarPageNavMode.tsx":
/*!***************************************************************************!*\
  !*** ./src/pages/calendar-page/calendar-page-nav/CalendarPageNavMode.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "webpack/sharing/consume/default/classnames/classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CalendarPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CalendarPage */ "./src/pages/calendar-page/CalendarPage.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();




var CalendarPageNavMode = function () {
    _react_refresh_temp_2();
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_CalendarPage__WEBPACK_IMPORTED_MODULE_3__.CalendarContext), calendarMode = _a.calendarMode, setCalendarMode = _a.setCalendarMode;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: " flex gap-5 bg-zinc-800 text-white rounded-lg p-1", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: function () { return setCalendarMode('Месяц'); }, className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('  w-24 rounded-lg text-center py-2 duration-300 hover:bg-zinc-700 active:bg-zinc-950', calendarMode === 'Месяц' && '  bg-zinc-900  hover:bg-zinc-900 '), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: " text-sm", children: "\u041C\u0435\u0441\u044F\u0446" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: function () { return setCalendarMode('Неделя'); }, className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('  w-24 rounded-lg text-center py-2 duration-300 hover:bg-zinc-700 active:bg-zinc-950', calendarMode === 'Неделя' && ' bg-zinc-900  hover:bg-zinc-900 '), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: " text-sm", children: "\u041D\u0435\u0434\u0435\u043B\u044F" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: function () { return setCalendarMode('День'); }, className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(' w-24 rounded-lg text-center py-2 duration-300 hover:bg-zinc-700 active:bg-zinc-950', calendarMode === 'День' && ' bg-zinc-900  hover:bg-zinc-900'), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: " text-sm", children: "\u0414\u0435\u043D\u044C" }) })] }));
};
_react_refresh_temp_1 = CalendarPageNavMode;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "CalendarPageNavMode");
_react_refresh_temp_2(CalendarPageNavMode, "+seq/t9xjfa6I45ZepiIl9asmp4=");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarPageNavMode);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/pages/calendar-page/calendar-page-nav/calendar-page-nav-handler/CalendarPageNavHandler.tsx":
/*!********************************************************************************************************!*\
  !*** ./src/pages/calendar-page/calendar-page-nav/calendar-page-nav-handler/CalendarPageNavHandler.tsx ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CalendarPageNavhandlerItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalendarPageNavhandlerItem */ "./src/pages/calendar-page/calendar-page-nav/calendar-page-nav-handler/CalendarPageNavhandlerItem.tsx");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.mjs");
/* harmony import */ var _helpers_getDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/getDate */ "./src/helpers/getDate.ts");
/* harmony import */ var _CalendarPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../CalendarPage */ "./src/pages/calendar-page/CalendarPage.tsx");
/* harmony import */ var _helpers_getCalendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/getCalendar */ "./src/helpers/getCalendar.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "webpack/sharing/consume/default/classnames/classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;
var _react_refresh_temp_2;
_react_refresh_temp_2 = __webpack_require__.$Refresh$.signature();








var CalendarPageNavHandler = function () {
    var _a;
    _react_refresh_temp_2();
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_CalendarPage__WEBPACK_IMPORTED_MODULE_4__.CalendarContext), calendarMode = _b.calendarMode, numberMonth = _b.numberMonth, monthCount = _b.monthCount, setMonthCount = _b.setMonthCount;
    var currentPositionDay = (0,_helpers_getCalendar__WEBPACK_IMPORTED_MODULE_5__.listDaysCalendarRow)(numberMonth).flat().indexOf(_helpers_getDate__WEBPACK_IMPORTED_MODULE_3__.today);
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(+Number((currentPositionDay + 6) / 7).toFixed() - 1), dayCount = _c[0], setDayCount = _c[1];
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(' flex justify-between items-center mt-5'), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: " w-8 mr-2 duration-300 hover:scale-125", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowBack, { size: 30, className: " cursor-pointer rounded-full px-1", onClick: function () {
                        calendarMode === 'Месяц' && setMonthCount([0, 7]);
                        calendarMode === 'Неделя' && dayCount >= 1 && setDayCount(function (prev) { return prev - 1; });
                    } }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('flex w-full ', dayCount >= 4 ? ' justify-start gap-3' : 'justify-between'), children: [calendarMode === 'Неделя' &&
                        (0,_helpers_getCalendar__WEBPACK_IMPORTED_MODULE_5__.listDaysCalendarRow)(numberMonth)[dayCount].map(function (el, i) {
                            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CalendarPageNavhandlerItem__WEBPACK_IMPORTED_MODULE_2__["default"], { title: _helpers_getDate__WEBPACK_IMPORTED_MODULE_3__.weekDays[i], num: el }, el);
                        }), calendarMode === 'Месяц' && (_a = _helpers_getDate__WEBPACK_IMPORTED_MODULE_3__.months
                        .map(function (el) {
                        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CalendarPageNavhandlerItem__WEBPACK_IMPORTED_MODULE_2__["default"], { title: el }, el);
                    }))
                        .slice.apply(_a, monthCount)] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: " w-8 ml-2", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoIosArrowForward, { size: 30, className: "cursor-pointer rounded-full px-1 duration-300 hover:scale-125", onClick: function () {
                        calendarMode === 'Месяц' && setMonthCount([5, 12]);
                        calendarMode === 'Неделя' && dayCount <= 3 && setDayCount(function (prev) { return prev + 1; });
                    } }) })] }));
};
_react_refresh_temp_1 = CalendarPageNavHandler;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "CalendarPageNavHandler");
_react_refresh_temp_2(CalendarPageNavHandler, "SR0fotyMtCnWVUyuk1yjcNjMPBE=");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarPageNavHandler);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/pages/calendar-page/calendar-page-nav/calendar-page-nav-handler/CalendarPageNavhandlerItem.tsx":
/*!************************************************************************************************************!*\
  !*** ./src/pages/calendar-page/calendar-page-nav/calendar-page-nav-handler/CalendarPageNavhandlerItem.tsx ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "webpack/sharing/consume/default/classnames/classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_getDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../helpers/getDate */ "./src/helpers/getDate.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _react_refresh_temp_1;



var CalendarPageNavhandlerItem = function (_a) {
    var title = _a.title, num = _a.num;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(' w-28 py-2 h-[70px] rounded-lg  text-center', _helpers_getDate__WEBPACK_IMPORTED_MODULE_2__.today === num || _helpers_getDate__WEBPACK_IMPORTED_MODULE_2__.months.indexOf(title) === +_helpers_getDate__WEBPACK_IMPORTED_MODULE_2__.month
            ? 'bg-reds text-dark'
            : 'bg-zinc-800 text-white'), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: title }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: " font-bold text-2xl", children: num })] }));
};
_react_refresh_temp_1 = CalendarPageNavhandlerItem;
__webpack_require__.$Refresh$.register(_react_refresh_temp_1, "CalendarPageNavhandlerItem");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarPageNavhandlerItem);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX2NhbGVuZGFyLXBhZ2VfQ2FsZW5kYXJQYWdlX3RzeC44YzFlYzVlMTk0ZWYzZjY3N2VkMC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUFxQixTQUFJLElBQUksU0FBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dDO0FBQ2pDO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLHFDQUFxQywyQ0FBSyxFQUFFLDBDQUFJO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsaURBQWlELDBDQUFJO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsaURBQWlELDBDQUFJO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsMENBQUk7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ087QUFDQTtBQUNBO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQSx3QkFBd0IsdUNBQVk7QUFDMkI7QUFDZjtBQUNrQjtBQUNHO0FBQ0Q7QUFDN0Qsc0JBQXNCLG9EQUFhO0FBQzFDO0FBQ0E7QUFDQSxhQUFhLCtDQUFRO0FBQ3JCLGFBQWEsK0NBQVEsRUFBRSxtREFBSztBQUM1QiwrQkFBK0Isb0RBQU0sU0FBUyw4REFBWSxDQUFDLG1EQUFLO0FBQ2hFLGFBQWEsK0NBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFNLHFCQUFxQixtREFBSztBQUNwSjtBQUNBLG9EQUFvRCxzREFBSSw0QkFBNEIsc0RBQUk7QUFDeEY7QUFDQTtBQUNBLHNDQUFZO0FBQ1osaUVBQWUsMEJBQTBCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWNyby8uL3NyYy9oZWxwZXJzL2dldENhbGVuZGFyLnRzIiwid2VicGFjazovL21pY3JvLy4vc3JjL2hlbHBlcnMvZ2V0RGF0ZS50cyIsIndlYnBhY2s6Ly9taWNyby8uL3NyYy9wYWdlcy9jYWxlbmRhci1wYWdlL0NhbGVuZGFyUGFnZS50c3giLCJ3ZWJwYWNrOi8vbWljcm8vLi9zcmMvcGFnZXMvY2FsZW5kYXItcGFnZS9jYWxlbmRhci1wYWdlLWRlc2svQ2FsZW5kYXJQYWdlRGVzay50c3giLCJ3ZWJwYWNrOi8vbWljcm8vLi9zcmMvcGFnZXMvY2FsZW5kYXItcGFnZS9jYWxlbmRhci1wYWdlLWRlc2svQ2FsZW5kYXJQYWdlRGVza0l0ZW0udHN4Iiwid2VicGFjazovL21pY3JvLy4vc3JjL3BhZ2VzL2NhbGVuZGFyLXBhZ2UvY2FsZW5kYXItcGFnZS1uYXYvQ2FsZW5kYXJQYWdlTmF2LnRzeCIsIndlYnBhY2s6Ly9taWNyby8uL3NyYy9wYWdlcy9jYWxlbmRhci1wYWdlL2NhbGVuZGFyLXBhZ2UtbmF2L0NhbGVuZGFyUGFnZU5hdkZpZWxkLnRzeCIsIndlYnBhY2s6Ly9taWNyby8uL3NyYy9wYWdlcy9jYWxlbmRhci1wYWdlL2NhbGVuZGFyLXBhZ2UtbmF2L0NhbGVuZGFyUGFnZU5hdk1vZGUudHN4Iiwid2VicGFjazovL21pY3JvLy4vc3JjL3BhZ2VzL2NhbGVuZGFyLXBhZ2UvY2FsZW5kYXItcGFnZS1uYXYvY2FsZW5kYXItcGFnZS1uYXYtaGFuZGxlci9DYWxlbmRhclBhZ2VOYXZIYW5kbGVyLnRzeCIsIndlYnBhY2s6Ly9taWNyby8uL3NyYy9wYWdlcy9jYWxlbmRhci1wYWdlL2NhbGVuZGFyLXBhZ2UtbmF2L2NhbGVuZGFyLXBhZ2UtbmF2LWhhbmRsZXIvQ2FsZW5kYXJQYWdlTmF2aGFuZGxlckl0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbmltcG9ydCB7IG1vbnRoLCB5ZWFyIH0gZnJvbSAnLi9nZXREYXRlJztcbmV4cG9ydCB2YXIgZGF5c0luTW9udGggPSBmdW5jdGlvbiAobW9udGgsIHllYXIpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcbn07XG5leHBvcnQgdmFyIGRlbGF5ID0gWzAsIDMsIDQsIDAsIDIsIDUsIDAsIDMsIDYsIDEsIDQsIDZdO1xudmFyIHByZXZNb250aExpc3REYXlzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcmV2TW9udGggPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRheXNJbk1vbnRoKCttb250aCwgeWVhcik7IGkrKykge1xuICAgICAgICBwcmV2TW9udGgucHVzaChpICsgMSk7XG4gICAgfVxuICAgIHJldHVybiBwcmV2TW9udGg7XG59O1xuZXhwb3J0IHZhciBsaXN0RGF5c0NhbGVuZGFyRmllbGQgPSBmdW5jdGlvbiAobW9udGgpIHtcbiAgICB2YXIgZGVsYXlTbGljZSA9IHByZXZNb250aExpc3REYXlzKCkuc2xpY2UoLWRlbGF5Wyttb250aF0pO1xuICAgIHZhciBjdXJyZW50TW9udGggPSBtb250aCA+IDAgJiYgZGVsYXlbK21vbnRoXSAhPT0gMCA/IF9fc3ByZWFkQXJyYXkoW10sIGRlbGF5U2xpY2UsIHRydWUpIDogW107XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gZGF5c0luTW9udGgoK21vbnRoICsgMSwgeWVhcik7IGkrKykge1xuICAgICAgICBjdXJyZW50TW9udGgucHVzaChpKTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDE7IGN1cnJlbnRNb250aC5sZW5ndGggPCA0MjsgaSsrKSB7XG4gICAgICAgIGN1cnJlbnRNb250aC5wdXNoKGkpO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudE1vbnRoO1xufTtcbmV4cG9ydCB2YXIgbGlzdERheXNDYWxlbmRhclJvdyA9IGZ1bmN0aW9uIChtb250aCkge1xuICAgIHZhciBjdXJyZW50TW9udGggPSBbXTtcbiAgICB2YXIgdGVtcEFyciA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IGRheXNJbk1vbnRoKCttb250aCArIDEsIHllYXIpOyBpKyspIHtcbiAgICAgICAgdGVtcEFyci5wdXNoKGkpO1xuICAgICAgICBpZiAodGVtcEFyci5sZW5ndGggPT09IDcpIHtcbiAgICAgICAgICAgIGN1cnJlbnRNb250aC5wdXNoKHRlbXBBcnIpO1xuICAgICAgICAgICAgdGVtcEFyciA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRheXNJbk1vbnRoKCttb250aCArIDEsIHllYXIpID09PSBpKSB7XG4gICAgICAgICAgICBjdXJyZW50TW9udGgucHVzaCh0ZW1wQXJyKTtcbiAgICAgICAgICAgIHRlbXBBcnIgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3VycmVudE1vbnRoO1xufTtcbiIsImV4cG9ydCB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpLmdldERhdGUoKTtcbmV4cG9ydCB2YXIgbW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuZXhwb3J0IHZhciB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuZXhwb3J0IHZhciB3ZWVrRGF5cyA9IFtcbiAgICAn0J/QvtC90LXQtNC10LvRjNC90LjQuicsXG4gICAgJ9CS0YLQvtGA0L3QuNC6JyxcbiAgICAn0KHRgNC10LTQsCcsXG4gICAgJ9Cn0LXRgtCy0LXRgNCzJyxcbiAgICAn0J/Rj9GC0L3QuNGG0LAnLFxuICAgICfQodGD0LHQsdC+0YLQsCcsXG4gICAgJ9CS0L7RgdC60YDQtdGB0LXQvdGM0LUnLFxuXTtcbmV4cG9ydCB2YXIgd2Vla0RheXNTaG9ydHMgPSBbJ9Cf0L0nLCAn0JLRgicsICfQodGAJywgJ9Cn0YInLCAn0J/RgicsICfQodCxJywgJ9CS0YEnXTtcbmV4cG9ydCB2YXIgbW9udGhzID0gW1xuICAgICfQr9C90LLQsNGA0YwnLFxuICAgICfQpNC10LLRgNCw0LvRjCcsXG4gICAgJ9Cc0LDRgNGCJyxcbiAgICAn0JDQv9GA0LXQu9GMJyxcbiAgICAn0JzQsNC5JyxcbiAgICAn0JjRjtC90YwnLFxuICAgICfQmNGO0LvRjCcsXG4gICAgJ9CQ0LLQs9GD0YHRgicsXG4gICAgJ9Ch0LXQvdGC0Y/QsdGA0YwnLFxuICAgICfQntC60YLRj9Cx0YDRjCcsXG4gICAgJ9Cd0L7Rj9Cx0YDRjCcsXG4gICAgJ9CU0LXQutCw0LHRgNGMJyxcbl07XG5leHBvcnQgdmFyIGdldE1vbnRoTmFtZSA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICByZXR1cm4gbW9udGhzWytudW1dO1xufTtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8yO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FsZW5kYXJQYWdlTmF2IGZyb20gJy4vY2FsZW5kYXItcGFnZS1uYXYvQ2FsZW5kYXJQYWdlTmF2JztcbmltcG9ydCBDYWxlbmRhclBhZ2VEZXNrIGZyb20gJy4vY2FsZW5kYXItcGFnZS1kZXNrL0NhbGVuZGFyUGFnZURlc2snO1xuaW1wb3J0IHsgZ2V0TW9udGhOYW1lLCBtb250aCwgbW9udGhzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9nZXREYXRlJztcbmV4cG9ydCB2YXIgQ2FsZW5kYXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG52YXIgQ2FsZW5kYXJQYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfMigpO1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKCfQndC10LTQtdC70Y8nKSwgY2FsZW5kYXJNb2RlID0gX2FbMF0sIHNldENhbGVuZGFyTW9kZSA9IF9hWzFdO1xuICAgIHZhciBfYiA9IHVzZVN0YXRlKCttb250aCksIG51bWJlck1vbnRoID0gX2JbMF0sIHNldE51bWJlck1vbnRoID0gX2JbMV07XG4gICAgdmFyIGN1cnJlbnRQb3NpdGlvbk1vbnRoID0gbW9udGhzLmluZGV4T2YoZ2V0TW9udGhOYW1lKG1vbnRoKSk7XG4gICAgdmFyIF9jID0gdXNlU3RhdGUoY3VycmVudFBvc2l0aW9uTW9udGggPCA3ID8gWzAsIDddIDogWzUsIDEyXSksIG1vbnRoQ291bnQgPSBfY1swXSwgc2V0TW9udGhDb3VudCA9IF9jWzFdO1xuICAgIHZhciBjb250ZXh0VmFsdWUgPSB7XG4gICAgICAgIGNhbGVuZGFyTW9kZTogY2FsZW5kYXJNb2RlLFxuICAgICAgICBzZXRDYWxlbmRhck1vZGU6IHNldENhbGVuZGFyTW9kZSxcbiAgICAgICAgbnVtYmVyTW9udGg6IG51bWJlck1vbnRoLFxuICAgICAgICBzZXROdW1iZXJNb250aDogc2V0TnVtYmVyTW9udGgsXG4gICAgICAgIG1vbnRoQ291bnQ6IG1vbnRoQ291bnQsXG4gICAgICAgIHNldE1vbnRoQ291bnQ6IHNldE1vbnRoQ291bnQsXG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3goQ2FsZW5kYXJDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0VmFsdWUsIGNoaWxkcmVuOiBfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCIgYmctd2hpdGUgcm91bmRlZC1sZyByZWxhdGl2ZSBoLWZ1bGxcIiwgY2hpbGRyZW46IFtfanN4KENhbGVuZGFyUGFnZU5hdiwge30pLCBfanN4KENhbGVuZGFyUGFnZURlc2ssIHt9KV0gfSkgfSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IENhbGVuZGFyUGFnZTtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiQ2FsZW5kYXJQYWdlXCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yKENhbGVuZGFyUGFnZSwgXCJVejYrYlJWRjZFL1hkUkVaVk80Z3poN0VPSmM9XCIpO1xuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXJQYWdlO1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzI7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYWxlbmRhclBhZ2VEZXNrSXRlbSBmcm9tICcuL0NhbGVuZGFyUGFnZURlc2tJdGVtJztcbmltcG9ydCB7IENhbGVuZGFyQ29udGV4dCB9IGZyb20gJy4uL0NhbGVuZGFyUGFnZSc7XG5pbXBvcnQgeyBtb250aHMgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2dldERhdGUnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG52YXIgdGVzdCA9IFtcbiAgICB7XG4gICAgICAgIHRpbWU6ICcwOTowMCAtIDEwOjMwJyxcbiAgICAgICAgZGF0ZTogMjAsXG4gICAgICAgIG1vbnRoOiAn0JzQsNC5JyxcbiAgICAgICAgdHlwZTogJ01FRVRJTkcnLFxuICAgICAgICBtZXNzYWdlOiAn0JfQsNCx0YDQsNGC0Ywg0LTQvtCz0L7QstC+0YAg0LIg0LHQsNC90LrQtScsXG4gICAgfSxcbiAgICB7IHRpbWU6ICcxMjozMCAtIDEzOjMwJywgZGF0ZTogMjAsIG1vbnRoOiAn0JzQsNC5JywgdHlwZTogJ1RBU0snLCBtZXNzYWdlOiAn0KHQvtCx0YDQsNGC0Ywg0LLQtdGJ0LgnIH0sXG4gICAgeyB0aW1lOiAnMDk6MDAgLSAxMDowMCcsIGRhdGU6IDIxLCBtb250aDogJ9Cc0LDQuScsIHR5cGU6ICdOT1RJT04nLCBtZXNzYWdlOiAn0J/QvtC30LLQvtC90LjRgtGMINCQ0YDQuNC90LUnIH0sXG4gICAgeyB0aW1lOiAnMTA6MDAgLSAxMTowMCcsIGRhdGU6IDIxLCBtb250aDogJ9Cc0LDQuScsIHR5cGU6ICdBTlknLCBtZXNzYWdlOiAn0JTQvtC00LXQu9Cw0YLRjCDQutC+0LzQv9C+0L3QtdC90YLRiycgfSxcbiAgICB7XG4gICAgICAgIHRpbWU6ICcwOTowMCAtIDExOjAwJyxcbiAgICAgICAgZGF0ZTogMjIsXG4gICAgICAgIG1vbnRoOiAn0JzQsNC5JyxcbiAgICAgICAgdHlwZTogJ01FRVRJTkcnLFxuICAgICAgICBtZXNzYWdlOiAn0JfQsNCx0YDQsNGC0Ywg0LTQvtCz0L7QstC+0YAg0LIg0LHQsNC90LrQtScsXG4gICAgfSxcbiAgICB7IHRpbWU6ICcxMTowMCAtIDEyOjAwJywgZGF0ZTogMjIsIG1vbnRoOiAn0JzQsNC5JywgdHlwZTogJ1RBU0snLCBtZXNzYWdlOiAn0KHQvtCx0YDQsNGC0Ywg0LLQtdGJ0LgnIH0sXG4gICAgeyB0aW1lOiAnMDk6MDAgLSAxMTowMCcsIGRhdGU6IDIzLCBtb250aDogJ9Cc0LDQuScsIHR5cGU6ICdOT1RJT04nLCBtZXNzYWdlOiAn0J/QvtC30LLQvtC90LjRgtGMINCQ0YDQuNC90LUnIH0sXG4gICAgeyB0aW1lOiAnMTE6MDAgLSAxMzowMCcsIGRhdGU6IDIzLCBtb250aDogJ9Cc0LDQuScsIHR5cGU6ICdBTlknLCBtZXNzYWdlOiAn0JTQvtC00LXQu9Cw0YLRjCDQutC+0LzQv9C+0L3QtdC90YLRiycgfSxcbiAgICB7IHRpbWU6ICcwOTowMCAtIDExOjAwJywgZGF0ZTogMjQsIG1vbnRoOiAn0JzQsNC5JywgdHlwZTogJ05PVElPTicsIG1lc3NhZ2U6ICfQn9C+0LfQstC+0L3QuNGC0Ywg0JDRgNC40L3QtScgfSxcbiAgICB7IHRpbWU6ICcxMjowMCAtIDEzOjAwJywgZGF0ZTogMjQsIG1vbnRoOiAn0JzQsNC5JywgdHlwZTogJ0FOWScsIG1lc3NhZ2U6ICfQlNC+0LTQtdC70LDRgtGMINC60L7QvNC/0L7QvdC10L3RgtGLJyB9LFxuICAgIHsgdGltZTogJzA5OjAwIC0gMTE6MDAnLCBkYXRlOiAyNSwgbW9udGg6ICfQnNCw0LknLCB0eXBlOiAnTk9USU9OJywgbWVzc2FnZTogJ9Cf0L7Qt9Cy0L7QvdC40YLRjCDQkNGA0LjQvdC1JyB9LFxuICAgIHsgdGltZTogJzExOjAwIC0gMTI6MDAnLCBkYXRlOiAyNSwgbW9udGg6ICfQnNCw0LknLCB0eXBlOiAnQU5ZJywgbWVzc2FnZTogJ9CU0L7QtNC10LvQsNGC0Ywg0LrQvtC80L/QvtC90LXQvdGC0YsnIH0sXG4gICAgeyB0aW1lOiAnMDk6MDAgLSAxMTowMCcsIGRhdGU6IDI2LCBtb250aDogJ9Cc0LDQuScsIHR5cGU6ICdOT1RJT04nLCBtZXNzYWdlOiAn0J/QvtC30LLQvtC90LjRgtGMINCQ0YDQuNC90LUnIH0sXG4gICAgeyB0aW1lOiAnMTE6MDAgLSAxMjowMCcsIGRhdGU6IDI2LCBtb250aDogJ9Cc0LDQuScsIHR5cGU6ICdBTlknLCBtZXNzYWdlOiAn0JTQvtC00LXQu9Cw0YLRjCDQutC+0LzQv9C+0L3QtdC90YLRiycgfSxcbl07XG52YXIgQ2FsZW5kYXJQYWdlRGVzayA9IGZ1bmN0aW9uICgpIHtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzIoKTtcbiAgICB2YXIgX2EgPSB1c2VDb250ZXh0KENhbGVuZGFyQ29udGV4dCksIGNhbGVuZGFyTW9kZSA9IF9hLmNhbGVuZGFyTW9kZSwgbW9udGhDb3VudCA9IF9hLm1vbnRoQ291bnQ7XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoLTEpLCBob3ZlckluZGV4ID0gX2JbMF0sIHNldGhvdmVySW5kZXggPSBfYlsxXTtcbiAgICB2YXIgcmFuZ2UgPSBbMjAsIDIxLCAyMiwgMjMsIDI0LCAyNSwgMjZdO1xuICAgIHZhciBnZXRDYWxlbmRhckRlc2tCb3hzID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGVzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gdGVzdFtpbmRleF07XG4gICAgICAgICAgICBpZiAob2JqW2VsZW1lbnQuZGF0ZV0pIHtcbiAgICAgICAgICAgICAgICBvYmpbZWxlbWVudC5kYXRlXS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqW2VsZW1lbnQuZGF0ZV0gPSBbZWxlbWVudF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ialtkYXRlXTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCIgYmctbGlnaHRHcmV5IHB4LTEyIHB5LTUgZ3JpZCBncmlkLWNvbHMtN1wiLCBjaGlsZHJlbjogcmFuZ2UubWFwKGZ1bmN0aW9uIChlbGVtLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIiBpdGVtcy1jZW50ZXIgZmxleCBmbGV4LWNvbCBnYXAtMVwiLCBjaGlsZHJlbjogW2NhbGVuZGFyTW9kZSA9PT0gJ9Cd0LXQtNC10LvRjycgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldENhbGVuZGFyRGVza0JveHMoZWxlbSkubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoX2pzeChDYWxlbmRhclBhZ2VEZXNrSXRlbSwgeyB0aW1lOiAoZWwgPT09IG51bGwgfHwgZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsLnRpbWUpIHx8ICcnLCBkYXRlOiAoZWwgPT09IG51bGwgfHwgZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsLmRhdGUpIHx8IDAsIHR5cGU6IChlbCA9PT0gbnVsbCB8fCBlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWwudHlwZSkgfHwgJycsIG1lc3NhZ2U6IChlbCA9PT0gbnVsbCB8fCBlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWwubWVzc2FnZSkgfHwgJycgfSwgTWF0aC5yYW5kb20oKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIGNhbGVuZGFyTW9kZSA9PT0gJ9Cc0LXRgdGP0YYnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0Lm1hcChmdW5jdGlvbiAoZWwsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaG92ZXJJbmRleCwgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsLm1vbnRoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPT09IG1vbnRocy5pbmRleE9mKGVsLm1vbnRoKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aHMuaW5kZXhPZihlbC5tb250aCkgPiBtb250aENvdW50WzBdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRocy5pbmRleE9mKGVsLm1vbnRoKSA8IG1vbnRoQ291bnRbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGluZGV4ID49IDEgJiYgJy1tdC0yMCcsIGhvdmVySW5kZXggPj0gMCAmJiBpbmRleCA+IGhvdmVySW5kZXggJiYgaW5kZXggLSBob3ZlckluZGV4ID09PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnIGR1cmF0aW9uLTMwMCAtbXQtMSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnKSwgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRob3ZlckluZGV4KGluZGV4KTsgfSwgb25Nb3VzZUxlYXZlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRob3ZlckluZGV4KC0xKTsgfSwgY2hpbGRyZW46IF9qc3goQ2FsZW5kYXJQYWdlRGVza0l0ZW0sIHsgdGltZTogKGVsID09PSBudWxsIHx8IGVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbC50aW1lKSB8fCAnJywgZGF0ZTogKGVsID09PSBudWxsIHx8IGVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbC5kYXRlKSB8fCAwLCB0eXBlOiAoZWwgPT09IG51bGwgfHwgZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsLnR5cGUpIHx8ICcnLCBtZXNzYWdlOiAoZWwgPT09IG51bGwgfHwgZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsLm1lc3NhZ2UpIHx8ICcnLCBkZWZhdWx0U2l6ZTogdHJ1ZSB9LCBNYXRoLnJhbmRvbSgpKSB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgX2pzeChDYWxlbmRhclBhZ2VEZXNrSXRlbSwgeyB0aW1lOiAnJywgZGF0ZTogMCwgdHlwZTogJycsIG1lc3NhZ2U6ICcnIH0sIE1hdGgucmFuZG9tKCkpXSB9LCBlbGVtKSk7XG4gICAgICAgIH0pIH0pKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBDYWxlbmRhclBhZ2VEZXNrO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJDYWxlbmRhclBhZ2VEZXNrXCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yKENhbGVuZGFyUGFnZURlc2ssIFwiZ2JGY2NPekppZi9YT1VRQ3dnc0doWUxxSWJjPVwiKTtcbmV4cG9ydCBkZWZhdWx0IENhbGVuZGFyUGFnZURlc2s7XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xudmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMjtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMiA9ICRSZWZyZXNoU2lnJCgpO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpUGx1cyB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcbmV4cG9ydCB2YXIgZXZlbnRUeXBlcyA9IHtcbiAgICBNRUVUSU5HOiAnTUVFVElORycsXG4gICAgVEFTSzogJ1RBU0snLFxuICAgIE5PVElPTjogJ05PVElPTicsXG4gICAgQU5ZOiAnQU5ZJyxcbn07XG52YXIgQ2FsZW5kYXJQYWdlRGVza0l0ZW0gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgbWVzc2FnZSA9IF9hLm1lc3NhZ2UsIHR5cGUgPSBfYS50eXBlLCB0aW1lID0gX2EudGltZSwgZGF0ZSA9IF9hLmRhdGUsIHByZXZJdGVtVGltZSA9IF9hLnByZXZJdGVtVGltZSwgZGVmYXVsdFNpemUgPSBfYS5kZWZhdWx0U2l6ZTtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzIoKTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShmYWxzZSksIGlzU2hvd1BsdXMgPSBfYlswXSwgc2V0SXNTaG93UGx1cyA9IF9iWzFdO1xuICAgIHZhciBnZXRTaXplID0gZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgICAgdmFyIGJhc2VTaXplID0gMTEyO1xuICAgICAgICB2YXIgc3BsaXRlZFRpbWUgPSB0aW1lID09PSBudWxsIHx8IHRpbWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRpbWUuc3BsaXQoJy0nKS5tYXAoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC50cmltKCk7IH0pO1xuICAgICAgICB2YXIgaG91cnMgPSBbXTtcbiAgICAgICAgdmFyIG1pbnV0ZXMgPSBbXTtcbiAgICAgICAgc3BsaXRlZFRpbWUgPT09IG51bGwgfHwgc3BsaXRlZFRpbWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNwbGl0ZWRUaW1lLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBob3Vycy5wdXNoKGVsLnNwbGl0KCc6JylbMF0pO1xuICAgICAgICAgICAgbWludXRlcy5wdXNoKGVsLnNwbGl0KCc6JylbMV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICgraG91cnNbMV0gJSAraG91cnNbMF0pICogYmFzZVNpemUgKyArbWludXRlc1sxXSAqIDEuOTtcbiAgICB9O1xuICAgIHZhciBnZXRDdXJyZW50U2l6ZSA9IGZ1bmN0aW9uICh0aW1lKSB7XG4gICAgICAgIGlmIChwcmV2SXRlbVRpbWUgJiYgZ2V0U2l6ZShwcmV2SXRlbVRpbWUpID4gMTEyKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0U2l6ZShwcmV2SXRlbVRpbWUpIC0gZ2V0U2l6ZSh0aW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZ2V0U2l6ZSh0aW1lKSB8fCAxMTI7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgaGVpZ2h0OiBkZWZhdWx0U2l6ZSA/IDExMiA6IGdldEN1cnJlbnRTaXplKHRpbWUpLFxuICAgICAgICB9LCBvbk1vdXNlRW50ZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldElzU2hvd1BsdXModHJ1ZSk7IH0sIG9uTW91c2VMZWF2ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0SXNTaG93UGx1cyhmYWxzZSk7IH0sIGNsYXNzTmFtZTogY2xhc3NOYW1lcygnIHctMjggcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciBwbC0yIHB0LTMgcGItMSBwci0yIHRleHQteHMgdGV4dC1kYXJrIHJlbGF0aXZlIHotMTAgJywgIXR5cGUgJiYgJ2hvdmVyOmJvcmRlciBib3JkZXItZGFzaGVkIGJvcmRlci1wdXJwbGUyJywgdHlwZSA9PT0gZXZlbnRUeXBlcy5NRUVUSU5HICYmICcgYmctYmx1ZXMnLCB0eXBlID09PSBldmVudFR5cGVzLlRBU0sgJiYgJyAgYmctcmVkcycsIHR5cGUgPT09IGV2ZW50VHlwZXMuTk9USU9OICYmICcgYmctcmVkLTQwMCcsIHR5cGUgPT09IGV2ZW50VHlwZXMuQU5ZICYmICcgYmctcHVycGxlLTQwMCcpLCBjaGlsZHJlbjogdHlwZSAmJiBtZXNzYWdlID8gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goXCJwXCIsIHsgY2xhc3NOYW1lOiBcIlwiLCBjaGlsZHJlbjogdGltZSB9KSwgX2pzeChcInBcIiwgeyBjbGFzc05hbWU6IFwibXQtMlwiLCBjaGlsZHJlbjogbWVzc2FnZSB9KV0gfSkpIDogKF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiIHctZnVsbCBoLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiwgY2hpbGRyZW46IGlzU2hvd1BsdXMgJiYgX2pzeChGaVBsdXMsIHsgY2xhc3NOYW1lOiBcIiB0ZXh0LTN4bCB0ZXh0LXB1cnBsZS00MDBcIiB9KSB9KSkgfSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IENhbGVuZGFyUGFnZURlc2tJdGVtO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJDYWxlbmRhclBhZ2VEZXNrSXRlbVwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMihDYWxlbmRhclBhZ2VEZXNrSXRlbSwgXCJ2NER5d1gzbTZKUmJ3Wm1yYnhucWJlNVMvMVk9XCIpO1xuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXJQYWdlRGVza0l0ZW07XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBDYWxlbmRhclBhZ2VOYXZNb2RlIGZyb20gJy4vQ2FsZW5kYXJQYWdlTmF2TW9kZSc7XG5pbXBvcnQgQ2FsZW5kYXJQYWdlTmF2SGFuZGxlciBmcm9tICcuL2NhbGVuZGFyLXBhZ2UtbmF2LWhhbmRsZXIvQ2FsZW5kYXJQYWdlTmF2SGFuZGxlcic7XG5pbXBvcnQgeyBnZXRNb250aE5hbWUsIG1vbnRoLCB5ZWFyIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVycy9nZXREYXRlJztcbmltcG9ydCBDYWxlbmRhclBhZ2VOYXZGaWVsZCBmcm9tICcuL0NhbGVuZGFyUGFnZU5hdkZpZWxkJztcbnZhciBDYWxlbmRhclBhZ2VOYXYgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCIgcC01XCIsIGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiIGZsZXggaXRlbXMtZW5kIGp1c3RpZnktYmV0d2VlblwiLCBjaGlsZHJlbjogW19qc3goXCJwXCIsIHsgY2xhc3NOYW1lOiBcIiB0ZXh0LTN4bFwiLCBjaGlsZHJlbjogXCJcIi5jb25jYXQoZ2V0TW9udGhOYW1lKG1vbnRoKSwgXCIsIFwiKS5jb25jYXQoeWVhcikgfSksIF9qc3goQ2FsZW5kYXJQYWdlTmF2TW9kZSwge30pLCBfanN4KENhbGVuZGFyUGFnZU5hdkZpZWxkLCB7fSldIH0pLCBfanN4KENhbGVuZGFyUGFnZU5hdkhhbmRsZXIsIHt9KV0gfSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IENhbGVuZGFyUGFnZU5hdjtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiQ2FsZW5kYXJQYWdlTmF2XCIpO1xuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXJQYWdlTmF2O1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBUaVdlYXRoZXJDbG91ZHkgfSBmcm9tICdyZWFjdC1pY29ucy90aSc7XG5pbXBvcnQgeyBJb0lvc01vcmUgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XG52YXIgQ2FsZW5kYXJQYWdlTmF2RmllbGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgdGV4dC13aGl0ZSBiZy16aW5jLTgwMCByb3VuZGVkLWxnIHAtMlwiLCBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiLCBjaGlsZHJlbjogW19qc3goVGlXZWF0aGVyQ2xvdWR5LCB7IGNsYXNzTmFtZTogXCJcIiwgc2l6ZTogMjUgfSksIF9qc3goXCJwXCIsIHsgY2hpbGRyZW46IFwiKzI1XFx1MDBCMENcIiB9KV0gfSksIF9qc3goXCJidXR0b25cIiwgeyBjbGFzc05hbWU6IFwiIGhvdmVyOmJnLXppbmMtNzAwIGFjdGl2ZTpiZy16aW5jLTkwMCByb3VuZGVkLWxnIGR1cmF0aW9uLTMwMFwiLCBjaGlsZHJlbjogX2pzeChJb0lvc01vcmUsIHsgc2l6ZTogMjUgfSkgfSldIH0pKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBDYWxlbmRhclBhZ2VOYXZGaWVsZDtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiQ2FsZW5kYXJQYWdlTmF2RmllbGRcIik7XG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhclBhZ2VOYXZGaWVsZDtcbiIsInZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzE7XG52YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8yO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yID0gJFJlZnJlc2hTaWckKCk7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FsZW5kYXJDb250ZXh0IH0gZnJvbSAnLi4vQ2FsZW5kYXJQYWdlJztcbnZhciBDYWxlbmRhclBhZ2VOYXZNb2RlID0gZnVuY3Rpb24gKCkge1xuICAgIF9yZWFjdF9yZWZyZXNoX3RlbXBfMigpO1xuICAgIHZhciBfYSA9IHVzZUNvbnRleHQoQ2FsZW5kYXJDb250ZXh0KSwgY2FsZW5kYXJNb2RlID0gX2EuY2FsZW5kYXJNb2RlLCBzZXRDYWxlbmRhck1vZGUgPSBfYS5zZXRDYWxlbmRhck1vZGU7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCIgZmxleCBnYXAtNSBiZy16aW5jLTgwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgcC0xXCIsIGNoaWxkcmVuOiBbX2pzeChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldENhbGVuZGFyTW9kZSgn0JzQtdGB0Y/RhicpOyB9LCBjbGFzc05hbWU6IGNsYXNzTmFtZXMoJyAgdy0yNCByb3VuZGVkLWxnIHRleHQtY2VudGVyIHB5LTIgZHVyYXRpb24tMzAwIGhvdmVyOmJnLXppbmMtNzAwIGFjdGl2ZTpiZy16aW5jLTk1MCcsIGNhbGVuZGFyTW9kZSA9PT0gJ9Cc0LXRgdGP0YYnICYmICcgIGJnLXppbmMtOTAwICBob3ZlcjpiZy16aW5jLTkwMCAnKSwgY2hpbGRyZW46IF9qc3goXCJwXCIsIHsgY2xhc3NOYW1lOiBcIiB0ZXh0LXNtXCIsIGNoaWxkcmVuOiBcIlxcdTA0MUNcXHUwNDM1XFx1MDQ0MVxcdTA0NEZcXHUwNDQ2XCIgfSkgfSksIF9qc3goXCJidXR0b25cIiwgeyBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRDYWxlbmRhck1vZGUoJ9Cd0LXQtNC10LvRjycpOyB9LCBjbGFzc05hbWU6IGNsYXNzTmFtZXMoJyAgdy0yNCByb3VuZGVkLWxnIHRleHQtY2VudGVyIHB5LTIgZHVyYXRpb24tMzAwIGhvdmVyOmJnLXppbmMtNzAwIGFjdGl2ZTpiZy16aW5jLTk1MCcsIGNhbGVuZGFyTW9kZSA9PT0gJ9Cd0LXQtNC10LvRjycgJiYgJyBiZy16aW5jLTkwMCAgaG92ZXI6YmctemluYy05MDAgJyksIGNoaWxkcmVuOiBfanN4KFwicFwiLCB7IGNsYXNzTmFtZTogXCIgdGV4dC1zbVwiLCBjaGlsZHJlbjogXCJcXHUwNDFEXFx1MDQzNVxcdTA0MzRcXHUwNDM1XFx1MDQzQlxcdTA0NEZcIiB9KSB9KSwgX2pzeChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldENhbGVuZGFyTW9kZSgn0JTQtdC90YwnKTsgfSwgY2xhc3NOYW1lOiBjbGFzc05hbWVzKCcgdy0yNCByb3VuZGVkLWxnIHRleHQtY2VudGVyIHB5LTIgZHVyYXRpb24tMzAwIGhvdmVyOmJnLXppbmMtNzAwIGFjdGl2ZTpiZy16aW5jLTk1MCcsIGNhbGVuZGFyTW9kZSA9PT0gJ9CU0LXQvdGMJyAmJiAnIGJnLXppbmMtOTAwICBob3ZlcjpiZy16aW5jLTkwMCcpLCBjaGlsZHJlbjogX2pzeChcInBcIiwgeyBjbGFzc05hbWU6IFwiIHRleHQtc21cIiwgY2hpbGRyZW46IFwiXFx1MDQxNFxcdTA0MzVcXHUwNDNEXFx1MDQ0Q1wiIH0pIH0pXSB9KSk7XG59O1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8xID0gQ2FsZW5kYXJQYWdlTmF2TW9kZTtcbiRSZWZyZXNoUmVnJChfcmVhY3RfcmVmcmVzaF90ZW1wXzEsIFwiQ2FsZW5kYXJQYWdlTmF2TW9kZVwiKTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMihDYWxlbmRhclBhZ2VOYXZNb2RlLCBcIitzZXEvdDl4amZhNkk0NVplcGlJbDlhc21wND1cIik7XG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhclBhZ2VOYXZNb2RlO1xuIiwidmFyIF9yZWFjdF9yZWZyZXNoX3RlbXBfMTtcbnZhciBfcmVhY3RfcmVmcmVzaF90ZW1wXzI7XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzIgPSAkUmVmcmVzaFNpZyQoKTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYWxlbmRhclBhZ2VOYXZoYW5kbGVySXRlbSBmcm9tICcuL0NhbGVuZGFyUGFnZU5hdmhhbmRsZXJJdGVtJztcbmltcG9ydCB7IElvSW9zQXJyb3dCYWNrLCBJb0lvc0Fycm93Rm9yd2FyZCB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcbmltcG9ydCB7IG1vbnRocywgdG9kYXksIHdlZWtEYXlzIH0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9nZXREYXRlJztcbmltcG9ydCB7IENhbGVuZGFyQ29udGV4dCB9IGZyb20gJy4uLy4uL0NhbGVuZGFyUGFnZSc7XG5pbXBvcnQgeyBsaXN0RGF5c0NhbGVuZGFyUm93IH0gZnJvbSAnLi4vLi4vLi4vLi4vaGVscGVycy9nZXRDYWxlbmRhcic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbnZhciBDYWxlbmRhclBhZ2VOYXZIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYTtcbiAgICBfcmVhY3RfcmVmcmVzaF90ZW1wXzIoKTtcbiAgICB2YXIgX2IgPSB1c2VDb250ZXh0KENhbGVuZGFyQ29udGV4dCksIGNhbGVuZGFyTW9kZSA9IF9iLmNhbGVuZGFyTW9kZSwgbnVtYmVyTW9udGggPSBfYi5udW1iZXJNb250aCwgbW9udGhDb3VudCA9IF9iLm1vbnRoQ291bnQsIHNldE1vbnRoQ291bnQgPSBfYi5zZXRNb250aENvdW50O1xuICAgIHZhciBjdXJyZW50UG9zaXRpb25EYXkgPSBsaXN0RGF5c0NhbGVuZGFyUm93KG51bWJlck1vbnRoKS5mbGF0KCkuaW5kZXhPZih0b2RheSk7XG4gICAgdmFyIF9jID0gdXNlU3RhdGUoK051bWJlcigoY3VycmVudFBvc2l0aW9uRGF5ICsgNikgLyA3KS50b0ZpeGVkKCkgLSAxKSwgZGF5Q291bnQgPSBfY1swXSwgc2V0RGF5Q291bnQgPSBfY1sxXTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKCcgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG10LTUnKSwgY2hpbGRyZW46IFtfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIiB3LTggbXItMiBkdXJhdGlvbi0zMDAgaG92ZXI6c2NhbGUtMTI1XCIsIGNoaWxkcmVuOiBfanN4KElvSW9zQXJyb3dCYWNrLCB7IHNpemU6IDMwLCBjbGFzc05hbWU6IFwiIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtZnVsbCBweC0xXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGVuZGFyTW9kZSA9PT0gJ9Cc0LXRgdGP0YYnICYmIHNldE1vbnRoQ291bnQoWzAsIDddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGVuZGFyTW9kZSA9PT0gJ9Cd0LXQtNC10LvRjycgJiYgZGF5Q291bnQgPj0gMSAmJiBzZXREYXlDb3VudChmdW5jdGlvbiAocHJldikgeyByZXR1cm4gcHJldiAtIDE7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9IH0pIH0pLCBfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcygnZmxleCB3LWZ1bGwgJywgZGF5Q291bnQgPj0gNCA/ICcganVzdGlmeS1zdGFydCBnYXAtMycgOiAnanVzdGlmeS1iZXR3ZWVuJyksIGNoaWxkcmVuOiBbY2FsZW5kYXJNb2RlID09PSAn0J3QtdC00LXQu9GPJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdERheXNDYWxlbmRhclJvdyhudW1iZXJNb250aClbZGF5Q291bnRdLm1hcChmdW5jdGlvbiAoZWwsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2pzeChDYWxlbmRhclBhZ2VOYXZoYW5kbGVySXRlbSwgeyB0aXRsZTogd2Vla0RheXNbaV0sIG51bTogZWwgfSwgZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIGNhbGVuZGFyTW9kZSA9PT0gJ9Cc0LXRgdGP0YYnICYmIChfYSA9IG1vbnRoc1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfanN4KENhbGVuZGFyUGFnZU5hdmhhbmRsZXJJdGVtLCB7IHRpdGxlOiBlbCB9LCBlbCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlLmFwcGx5KF9hLCBtb250aENvdW50KV0gfSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiIHctOCBtbC0yXCIsIGNoaWxkcmVuOiBfanN4KElvSW9zQXJyb3dGb3J3YXJkLCB7IHNpemU6IDMwLCBjbGFzc05hbWU6IFwiY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIHB4LTEgZHVyYXRpb24tMzAwIGhvdmVyOnNjYWxlLTEyNVwiLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxlbmRhck1vZGUgPT09ICfQnNC10YHRj9GGJyAmJiBzZXRNb250aENvdW50KFs1LCAxMl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsZW5kYXJNb2RlID09PSAn0J3QtdC00LXQu9GPJyAmJiBkYXlDb3VudCA8PSAzICYmIHNldERheUNvdW50KGZ1bmN0aW9uIChwcmV2KSB7IHJldHVybiBwcmV2ICsgMTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSkgfSldIH0pKTtcbn07XG5fcmVhY3RfcmVmcmVzaF90ZW1wXzEgPSBDYWxlbmRhclBhZ2VOYXZIYW5kbGVyO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJDYWxlbmRhclBhZ2VOYXZIYW5kbGVyXCIpO1xuX3JlYWN0X3JlZnJlc2hfdGVtcF8yKENhbGVuZGFyUGFnZU5hdkhhbmRsZXIsIFwiU1IwZm90eU10Q25XVlV5dWsxeWpjTmpNUEJFPVwiKTtcbmV4cG9ydCBkZWZhdWx0IENhbGVuZGFyUGFnZU5hdkhhbmRsZXI7XG4iLCJ2YXIgX3JlYWN0X3JlZnJlc2hfdGVtcF8xO1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgbW9udGgsIG1vbnRocywgdG9kYXkgfSBmcm9tICcuLi8uLi8uLi8uLi9oZWxwZXJzL2dldERhdGUnO1xudmFyIENhbGVuZGFyUGFnZU5hdmhhbmRsZXJJdGVtID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHRpdGxlID0gX2EudGl0bGUsIG51bSA9IF9hLm51bTtcbiAgICByZXR1cm4gKF9qc3hzKFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKCcgdy0yOCBweS0yIGgtWzcwcHhdIHJvdW5kZWQtbGcgIHRleHQtY2VudGVyJywgdG9kYXkgPT09IG51bSB8fCBtb250aHMuaW5kZXhPZih0aXRsZSkgPT09ICttb250aFxuICAgICAgICAgICAgPyAnYmctcmVkcyB0ZXh0LWRhcmsnXG4gICAgICAgICAgICA6ICdiZy16aW5jLTgwMCB0ZXh0LXdoaXRlJyksIGNoaWxkcmVuOiBbX2pzeChcInBcIiwgeyBjaGlsZHJlbjogdGl0bGUgfSksIF9qc3goXCJwXCIsIHsgY2xhc3NOYW1lOiBcIiBmb250LWJvbGQgdGV4dC0yeGxcIiwgY2hpbGRyZW46IG51bSB9KV0gfSkpO1xufTtcbl9yZWFjdF9yZWZyZXNoX3RlbXBfMSA9IENhbGVuZGFyUGFnZU5hdmhhbmRsZXJJdGVtO1xuJFJlZnJlc2hSZWckKF9yZWFjdF9yZWZyZXNoX3RlbXBfMSwgXCJDYWxlbmRhclBhZ2VOYXZoYW5kbGVySXRlbVwiKTtcbmV4cG9ydCBkZWZhdWx0IENhbGVuZGFyUGFnZU5hdmhhbmRsZXJJdGVtO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9