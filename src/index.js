
import {app, navigationBar, statusBar, devTools } from "tabris";
import backButtonNavigation from "./services/back-button-navigation.js";
import setThemeTabris from "./helpers-views/set-theme-tabris.js";
import screenOrientationLock from "./services/screen-orientation-lock.js";
import modeStatusBarNavigationBar from "./helpers-views/mode-statusBar-navigationBar.js";
import logIn from "./views/log-in.js";
import checkAuthentification from "./views/check-authentification.js";

function appInitialization(){ 

    global.store = {};

    const user = localStorage.getItem("user"); 

    app.idleTimeoutEnabled = false;

    modeStatusBarNavigationBar("all", "float");

    // Default Setting
    window.SoftInputMode.set('adjustPan');

    // Register font
    app.registerFont("manrope", "resources/font/regular.otf");

    // We manage the Android back button
    backButtonNavigation();

    // Lock the screen Orientation
    screenOrientationLock();

    setThemeTabris("all", "light");

    user === null ? logIn() : checkAuthentification();

}

appInitialization();

// Need to be removed on production mode

devTools.hideUi();
