exports.id = 331;
exports.ids = [331];
exports.modules = {

/***/ 417:
/***/ ((module) => {

// Exports
module.exports = {
	"MENUcontainer": "Admin_MENUcontainer__t0EwL",
	"buttonBorder": "Admin_buttonBorder__LRXLb",
	"MainButtonIntro": "Admin_MainButtonIntro__ukaE4",
	"UPLOAD": "Admin_UPLOAD__zJgUu",
	"UPDATE": "Admin_UPDATE__qGseC",
	"DELETE": "Admin_DELETE__7ZN_a",
	"NAVcontainer": "Admin_NAVcontainer__eMsqX",
	"NAV_BAR": "Admin_NAV_BAR__EAGKv",
	"NavButtonIntro": "Admin_NavButtonIntro__9UqmC",
	"LogoutIcon": "Admin_LogoutIcon__aLU_c",
	"Wave_outset": "Admin_Wave_outset__N_uJ7",
	"Wave_inset": "Admin_Wave_inset__n0eBq",
	"UPLOADcontainer": "Admin_UPLOADcontainer__k5Q98",
	"INTRO-FADEIN": "Admin_INTRO-FADEIN__Vdf6B",
	"FormArea": "Admin_FormArea__f5KbC",
	"UPDATEcontainer": "Admin_UPDATEcontainer__hn7eI",
	"UpdateImage": "Admin_UpdateImage__Ahme_",
	"UpdateInfo": "Admin_UpdateInfo__8mGic",
	"UpdateInputs": "Admin_UpdateInputs__f2Bf7",
	"DELETEgrid": "Admin_DELETEgrid__I2Z0D",
	"IMGwrap": "Admin_IMGwrap__wL7sC",
	"ABOUTcontainer": "Admin_ABOUTcontainer___0y3k",
	"ABOUT": "Admin_ABOUT__R5nmw",
	"aboutUPDATE": "Admin_aboutUPDATE__c0CFv",
	"LOGINcontainer": "Admin_LOGINcontainer__YmUaz",
	"loginTitle": "Admin_loginTitle__xAArH",
	"EMAILinput": "Admin_EMAILinput__mse0p",
	"PASSWORDtitle": "Admin_PASSWORDtitle__FHVeK",
	"PASSWORDinput": "Admin_PASSWORDinput__XTZez",
	"SUBMITbutton": "Admin_SUBMITbutton__SQyR_",
	"SPINNERbox": "Admin_SPINNERbox__LfPET"
};


/***/ }),

/***/ 175:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthContextProvider),
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9147);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
const AuthContextProvider = ({ children  })=>{
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        email: null,
        uid: null
    });
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I, (user)=>{
            if (user) {
                setUser({
                    email: user.email,
                    uid: user.uid
                });
            } else {
                setUser({
                    email: null,
                    uid: null
                });
            }
        });
        setLoading(false);
        return ()=>unsubscribe();
    }, []);
    const signUp = (email, password)=>{
        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I, email, password);
    };
    const logIn = (email, password)=>{
        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I, email, password);
    };
    const logOut = async ()=>{
        setUser({
            email: null,
            uid: null
        });
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            user,
            signUp,
            logIn,
            logOut
        },
        children: loading ? null : children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9147:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ auth),
/* harmony export */   "R": () => (/* binding */ firestore)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)({
    apiKey: "AIzaSyBOO-qQfXV13ckcNz6R98LQHaQ_0kcuBUc",
    authDomain: "\"nextjs-admin-image-gallery.firebaseapp.com\",",
    projectId: "nextjs-image-gallery",
    storageBucket: "nextjs-image-gallery.appspot.com",
    messagingSenderId: "787178428176",
    appId: "1:787178428176:web:240172275ad9aefb2db795",
    measurementId: "G-ZG3SL1E80S"
});
const firestore = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;