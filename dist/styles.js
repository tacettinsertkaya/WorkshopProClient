(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/**\r\n * Main scss file written or workshop pro application\r\n */\n* {\n  color: #6B6760; }\n@media screen and (max-width: 1400px) {\n    * {\n      font-size: 100%; } }\n@media screen and (max-width: 1200px) {\n    * {\n      font-size: 99%; } }\n@media screen and (max-width: 1024px) {\n    * {\n      font-size: 98%; } }\nbody {\n  font-family: 'Poppins', sans-serif;\n  font-weight: 400;\n  font-size: 100%;\n  color: #6B6760;\n  line-height: 150%; }\n.pill-title {\n  background-color: #fff;\n  padding: .5rem 1rem;\n  border-radius: 2rem;\n  font-size: 1.2rem;\n  color: #E55820;\n  white-space: nowrap; }\n@media screen and (max-width: 1400px) {\n    .pill-title {\n      font-size: 1.15rem; } }\n@media screen and (max-width: 1024px) {\n    .pill-title {\n      font-size: 1.1rem; } }\n@media screen and (max-width: 767px) {\n    .pill-title {\n      font-size: 1rem; } }\n.text-bold {\n  font-weight: 500; }\n.section-title {\n  font-size: 24px;\n  color: #212121;\n  font-weight: 500; }\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\nbody {\n  background-color: #F4F4F4; }\n.page-wrapper {\n  display: flex;\n  background-color: #F4F4F4; }\n@media screen and (max-width: 1024px) {\n    .page-wrapper {\n      display: block;\n      position: relative;\n      width: 100vw;\n      height: 100%;\n      min-height: 100vh; } }\n.sidebar {\n  flex: 0 0 250px;\n  min-width: 250px;\n  height: 100%;\n  min-height: 100vh;\n  transition: transform .3s ease;\n  transform: translateX(0); }\n@media screen and (max-width: 1024px) {\n    .sidebar {\n      width: 250px;\n      flex: unset;\n      position: absolute;\n      top: 0;\n      left: 0;\n      transform: translateX(-250px);\n      z-index: 999; } }\n.content-main {\n  flex: 1;\n  padding: 1rem 2rem;\n  min-height: 100vh;\n  background-color: #F4F4F4; }\n@media screen and (max-width: 1024px) {\n    .content-main {\n      flex: unset;\n      width: 100%; } }\n@media screen and (max-width: 767px) {\n    .content-main {\n      padding: 0.5rem 1rem; } }\n@media screen and (max-width: 576px) {\n    .content-main {\n      padding: 0.25rem 0.5rem; } }\n.btn-vertical-padding {\n  padding-top: .75rem !important;\n  padding-bottom: .75rem !important; }\n.btn-horizontal-padding {\n  padding-left: 3.5rem !important;\n  padding-right: 3.5rem !important; }\n.btn-horizontal-padding-md {\n  padding-left: 2.5rem !important;\n  padding-right: 2.5rem !important; }\n.btn-horizontal-padding-sm {\n  padding-left: 2rem !important;\n  padding-right: 2rem !important; }\n.btn-horizontal-padding-xs {\n  padding-left: 1rem !important;\n  padding-right: 1rem !important; }\n.box-shadow {\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; }\n.box-shadow-md {\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; }\n.box-shadow-sm {\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; }\n.box-shadow-xs {\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px; }\n.border-radius-xs {\n  border-radius: 1px !important; }\n.border-radius-sm {\n  border-radius: 3px !important; }\n.border-radius-md {\n  border-radius: 5px !important; }\n.border-radius-lg {\n  border-radius: 10px !important; }\n.border-radius-xl {\n  border-radius: 15px !important; }\n.font-size-xs {\n  font-size: 0.8rem !important; }\n.font-size-sm {\n  font-size: 0.9rem !important; }\n.font-size-md {\n  font-size: 1rem !important; }\n.font-size-lg {\n  font-size: 1.25rem !important; }\n.font-size-xl {\n  font-size: 1.5rem !important; }\n.font-size-xxl {\n  font-size: 2rem !important; }\n.force-text-center {\n  text-align: center !important; }\n.form-control {\n  height: 3rem !important; }\n.form-control:focus {\n    border-color: #E55820 !important;\n    box-shadow: 0 0 0 0.2rem rgba(229, 88, 32, 0.25) !important; }\n.card-title {\n  color: #424242;\n  font-weight: 500;\n  font-size: 1.25rem; }\n.card-description {\n  color: #616161;\n  margin-bottom: 0; }\n.table-theme thead th {\n  border-top: transparent; }\n.card-theme {\n  border: transparent;\n  border-radius: .75rem;\n  padding: 1rem !important; }\n.card-theme--green {\n    background-color: #77D28F; }\n.card-theme--cyan {\n    background-color: #D2EFEE; }\n.card-theme--warning {\n    background-color: #FFFDE7; }\n.card-theme--blue {\n    background-color: #D7F3FF; }\n.btn-theme {\n  font-weight: 500;\n  padding: .5rem 1.5rem;\n  color: #f5f5f5;\n  background-color: #E55820;\n  font-size: .9rem;\n  display: flex;\n  align-items: center;\n  text-align: center; }\n.btn-theme > * {\n    color: #f5f5f5; }\n.btn-theme:focus {\n    box-shadow: 0 0 0 0.2rem rgba(229, 88, 32, 0.25); }\n.btn-theme span.count {\n    border: 1px solid #f5f5f5;\n    padding: .1rem .2rem;\n    font-size: .9rem;\n    margin-left: .5rem; }\n.btn-icon-theme {\n  background-color: transparent;\n  color: #E55820; }\n.btn-icon-theme > * {\n    color: inherit; }\n.btn-icon-theme:focus {\n    background-color: #E55820;\n    color: #f5f5f5;\n    box-shadow: none !important; }\n.btn-outline-theme {\n  color: #E55820;\n  background-color: transparent;\n  border: 1px solid #E55820; }\n.btn-outline-theme > * {\n    color: #E55820; }\n.btn-outline-theme:focus {\n    box-shadow: 0 0 0 0.2rem rgba(229, 88, 32, 0.25); }\n.group-card__title {\n  font-weight: 500;\n  color: #E55820;\n  font-size: 1.25rem;\n  margin-bottom: 1rem; }\n.group-card__description {\n  color: #616161;\n  font-size: .9rem;\n  margin-bottom: 1rem; }\n.group-card__status {\n  font-weight: 500; }\n.group-card__actions {\n  white-space: nowrap; }\n.checkbox-theme {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  margin-bottom: 0;\n  position: relative; }\n.checkbox-theme__pseudo-control {\n    display: inline-block;\n    width: 1.75rem;\n    height: 1.75rem;\n    border: 1px solid rgba(97, 97, 97, 0.5);\n    margin-right: 1rem; }\n.checkbox-theme span i {\n    color: #E55820;\n    font-size: 1.25rem;\n    position: absolute;\n    left: 3px;\n    top: 3px; }\n.checkbox-theme__control {\n    display: none; }\n.checkbox-theme__control:not(:checked) ~ span i {\n      display: none; }\n.checkbox-theme__control:checked ~ span span {\n      font-weight: 500; }\n.template-card__content {\n  min-height: 5rem; }\n.template-card__title {\n  display: block;\n  font-weight: 500;\n  font-size: 1rem;\n  color: #616161; }\n.btn-dark-blue {\n  font-weight: 500;\n  padding: .5rem 1.5rem;\n  color: #f5f5f5;\n  background-color: #2E3448;\n  font-size: .9rem;\n  display: flex;\n  align-items: center;\n  text-align: center; }\n.btn-dark-blue > * {\n    color: #f5f5f5; }\n.btn-dark-blue:focus {\n    box-shadow: 0 0 0 0.2rem rgba(46, 52, 72, 0.25); }\n.btn-dark-blue span.count {\n    border: 1px solid #f5f5f5;\n    padding: .1rem .2rem;\n    font-size: .9rem;\n    margin-left: .5rem; }\n.header__retro-mobile {\n  display: none; }\n@media screen and (max-width: 1024px) {\n    .header__retro-mobile {\n      display: block; } }\n.header__retro-navigation {\n  display: flex;\n  list-style: none;\n  padding-left: 0;\n  margin-bottom: 0;\n  max-width: 100%;\n  overflow: auto; }\n.header__retro-navigation::-webkit-scrollbar {\n    height: 2px; }\n.header__retro-navigation .navigation-item {\n    min-width: 9rem;\n    background-color: rgba(158, 158, 158, 0.25);\n    height: 3rem;\n    display: flex;\n    position: relative;\n    align-items: center;\n    justify-content: center;\n    -webkit-clip-path: polygon(90% 0, 100% 50%, 90% 100%, 0% 100%, 10% 51%, 0% 0%);\n            clip-path: polygon(90% 0, 100% 50%, 90% 100%, 0% 100%, 10% 51%, 0% 0%); }\n.header__retro-navigation .navigation-item::after {\n      display: block;\n      content: \"\";\n      -webkit-clip-path: polygon(90% 0, 100% 50%, 90% 100%, 0% 100%, 10% 51%, 0% 0%);\n              clip-path: polygon(90% 0, 100% 50%, 90% 100%, 0% 100%, 10% 51%, 0% 0%);\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      height: calc(3rem - 4px);\n      width: calc(100% - 4px);\n      background-color: #F4F4F4;\n      z-index: -1;\n      transform: translate(-50%, -50%); }\n.header__retro-navigation .navigation-item.navigator {\n      display: none; }\n.header__retro-navigation .navigation-link {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #424242;\n    font-weight: 500;\n    text-decoration: none;\n    font-size: 1em; }\n.header__retro-navigation .navigation-link.active {\n      background-color: #E55820;\n      color: #fff; }\n.header__retro-navigation .navigation-link:not(.active):hover {\n      color: #E55820; }\n@media screen and (max-width: 1919px) {\n    .header__retro-navigation .navigation-item.active,\n    .header__retro-navigation .navigation-item.navigator {\n      display: block; } }\n.categories .category + .category {\n  margin-top: 3rem; }\n.category__title {\n  color: #212121;\n  font-size: 1.25rem;\n  font-weight: 500;\n  margin-bottom: 1.5rem; }\n.category__comments {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap; }\n.report-header {\n  margin: 2rem auto; }\n.report-header__title, .report-header__description {\n    display: block;\n    text-align: center; }\n.report-header__title {\n    margin-bottom: 1rem;\n    font-weight: 500;\n    text-transform: uppercase;\n    font-size: 2rem;\n    color: #E55820; }\n.report-header__title--xs {\n      font-size: 1rem; }\n.report-header__title--sm {\n      font-size: 1.25rem; }\n.report-header__title--md {\n      font-size: 1.5rem; }\n.report-header__title--lg {\n      font-size: 1.75rem; }\n.report-header__title--xl {\n      font-size: 2rem; }\n.report-header__description {\n    color: #424242; }\n.report-section__title {\n  font-size: 1.75rem;\n  font-weight: 500;\n  margin-bottom: 1rem; }\n.report-section__subtitle {\n  margin-left: 1rem; }\n.report-section__content {\n  margin-left: 1rem; }\n.template-title-group {\n  display: flex;\n  width: 100%; }\n.template-title-group > .form-group {\n    flex: 1;\n    padding-right: 1.5rem; }\n.template-title-group__utils {\n    width: 150px;\n    display: flex; }\n.template-title-group__utils .form-group {\n      width: 100px;\n      padding-right: 1rem; }\n.template-title-group__utils .form-cancel {\n      flex: 1; }\n.template-title-group__utils .form-cancel button {\n        height: 50px;\n        padding: 0 !important;\n        width: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center; }\n.template-title-group__utils .form-cancel button i {\n          font-size: 1.25rem; }\n.users-header .add-user {\n  display: flex; }\n.users-header .add-user > .form-group {\n    padding-bottom: 0;\n    margin-bottom: 0;\n    margin-right: 1rem; }\n.users-header .add-user > .form-group .form-control {\n    cursor: pointer;\n    border-radius: calc(1.5rem);\n    padding: .5rem 1rem;\n    background-color: transparent;\n    min-width: 200px; }\n.create-retro {\n  height: 100vh;\n  background-repeat: no-repeat;\n  background-size: auto;\n  display: flex;\n  align-items: center; }\n@media screen and (max-width: 767px) {\n    .create-retro {\n      justify-content: center !important; } }\n.create-retro__form {\n    background: #fff;\n    padding: 2.5rem;\n    border-radius: .5rem;\n    width: 50%;\n    max-width: 750px; }\n@media screen and (max-width: 767px) {\n      .create-retro__form {\n        width: 75%; } }\n@media screen and (max-width: 576px) {\n      .create-retro__form {\n        width: 100%; } }\n.header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding-bottom: .5rem;\n  margin-bottom: .5rem; }\n.header__user .btn-default {\n    border-radius: 2rem;\n    border: 1px solid rgba(158, 158, 158, 0.5); }\n.header__user .btn-default i {\n      margin-right: .5rem; }\n.header__toggle-sidebar {\n    display: none; }\n@media screen and (max-width: 1024px) {\n      .header__toggle-sidebar {\n        display: block; } }\n.header__navigation {\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n.header__navigate-back {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 3rem;\n    height: 3rem;\n    border: 1px solid rgba(158, 158, 158, 0.5);\n    border-radius: 50%; }\n.header__navigate-back i {\n      margin-left: -.3rem;\n      font-size: 1.2rem; }\n.sidebar {\n  background-color: #2E3448; }\n@media screen and (max-width: 1024px) {\n    .sidebar.active {\n      transform: translateX(0);\n      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px; } }\n.sidebar__header {\n    overflow: hidden;\n    padding: 0.5rem 2rem; }\n.sidebar__header-content #hideSidebar {\n      display: none; }\n@media screen and (max-width: 1024px) {\n      .sidebar__header-content {\n        display: flex;\n        margin-top: 1.25rem; }\n        .sidebar__header-content .sidebar__logo {\n          width: 85%;\n          max-width: 200px;\n          -o-object-fit: contain;\n             object-fit: contain; }\n        .sidebar__header-content #hideSidebar {\n          display: block;\n          color: #f5f5f5; }\n          .sidebar__header-content #hideSidebar:focus {\n            background: transparent;\n            color: #E55820; } }\n.sidebar__logo {\n    width: 100%;\n    height: auto;\n    margin-bottom: calc(1rem + .25rem);\n    margin-top: 31px; }\n.sidebar__content {\n    color: #f5f5f5; }\n.sidebar__menu {\n    color: inherit;\n    padding-left: 0; }\n.sidebar__menu-item {\n      color: inherit;\n      background-color: #F4F4F4;\n      overflow: hidden; }\n.sidebar__menu-item.active .sidebar__menu-link {\n        background-color: #E55820;\n        border: transparent; }\n.sidebar__menu-item.active i {\n        color: #f5f5f5; }\n.sidebar__menu-item-content {\n        color: inherit;\n        background-color: #2E3448;\n        padding: 0 2rem; }\n.sidebar__menu-item + .sidebar__menu-item {\n      margin-top: .75rem; }\n.sidebar__menu-link {\n      color: inherit;\n      display: flex;\n      align-items: center;\n      width: 100%;\n      padding: .5rem 1rem;\n      border: 1px solid rgba(149, 165, 220, 0.2);\n      border-radius: .3rem;\n      text-decoration: none; }\n.sidebar__menu-link:hover {\n        color: inherit;\n        text-decoration: none; }\n.sidebar__menu-link i {\n        color: #95A5DC;\n        flex: 0 0 2.25rem;\n        display: inline-block;\n        font-size: 1.2rem; }\n.sidebar__menu-link span {\n        color: inherit;\n        font-size: .9rem; }\n.sidebar__participants {\n    margin-top: 2.5rem;\n    padding: 0 2rem; }\n.sidebar__section-title {\n    color: #95A5DC;\n    font-size: 1.1rem; }\n.sidebar__section-title::after {\n      width: 100%;\n      display: block;\n      content: '';\n      margin: 1rem auto;\n      height: 1px;\n      background-color: rgba(149, 165, 220, 0.8); }\n.sidebar__participant-list {\n    list-style: none; }\n.sidebar__participant-list-item img.avatar {\n    width: 30px;\n    height: 30px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: center;\n       object-position: center;\n    border-radius: 50%;\n    margin-right: 1rem; }\n.sidebar__participant-list-item .name {\n    color: #BDBDBD;\n    display: flex;\n    align-items: center; }\n.sidebar__participant-list-item .name-short {\n      width: 30px;\n      height: 30px;\n      margin-right: 10px;\n      background-color: #E55820;\n      font-size: 13px;\n      line-height: 13px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: 50%;\n      font-weight: 600;\n      color: #fff; }\n.report-header__title {\n  text-transform: capitalize; }\n.full-username {\n  max-width: 200px;\n  display: -webkit-box;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: white  !important;\n  overflow-x: hidden; }\n[data-notify=\"progressbar\"] {\n  margin-bottom: 0px;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 5px; }\n.mt-50 {\n  margin-top: 50px !important; }\n.mini-btn {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap; }\n.mini-btn span {\n    font-size: 14px;\n    font-weight: 500;\n    background-color: #2E3448;\n    color: white;\n    padding: 4px 7px;\n    text-align: center;\n    border-radius: 4px;\n    margin-right: 5px;\n    cursor: pointer; }\n::-webkit-scrollbar {\n  width: 8px; }\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5); }\n.card-custom-borderless .form-control:focus {\n  outline: none !important;\n  box-shadow: none !important;\n  border-color: transparent !important; }\n.login {\n  background-image: url('login-bg-2.jpg'); }\n.side-bar-mini {\n  color: #95A5DC;\n  font-size: 1.1rem; }\n.corner-button {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  display: none; }\n.card-theme:hover .corner-button {\n  display: block; }\n.corner-button-template {\n  position: absolute;\n  top: -10px;\n  right: 0px;\n  display: none;\n  z-index: 9999; }\n.corner-item:hover .corner-button-template {\n  display: block; }\n.dropdown-width {\n  width: 200px;\n  left: 10%;\n  top: 10%; }\n.dropdown-width .dropdown-item {\n  white-space: normal; }\n.card-description {\n  padding-right: 7px; }\n.custom-slider-main {\n  scroll-behavior: smooth; }\na.disabled {\n  pointer-events: none;\n  cursor: default; }\na {\n  cursor: pointer; }\n.checkbox-theme__pseudo-control {\n  flex-shrink: 0; }\n.checkbox-theme__control + span span {\n  word-break: break-all; }\n.btn-icon-text {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n.btn-icon-text i {\n  font-size: 15px; }\n@media (min-width: 577px) {\n  .btn-responsive {\n    justify-content: flex-end; }\n  .btn-icon-text i {\n    display: none; }\n  .login {\n    background-image: url('login-bg-2.jpg'); }\n  .btn-list-comment {\n    display: flex; } }\n@media (max-width: 576px) {\n  login-cmp h1 {\n    font-size: 32px; }\n  .btn-responsive {\n    justify-content: center; }\n  .btn-icon-text span {\n    display: none; }\n  body .mobile-brainstorm {\n    width: 100%;\n    max-width: 100%;\n    flex: 0 0 100%;\n    margin-top: 15px; }\n  body .mobile-brainstorm textarea {\n    height: 65px !important; }\n  .login {\n    background-image: url('mobil-login-bg.jpeg'); }\n  .btn-list-comment {\n    display: none; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9EOlxccHJvamVjdHNcXFdvcmtzaG9wUHJvQ2xpZW50L3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiLCJzcmMvRDpcXHByb2plY3RzXFxXb3Jrc2hvcFByb0NsaWVudC9zcmNcXGFzc2V0c1xcc2Nzc1xcYmFzZVxcX3R5cGhvZ3JhcHkuc2NzcyIsInNyYy9EOlxccHJvamVjdHNcXFdvcmtzaG9wUHJvQ2xpZW50L3NyY1xcYXNzZXRzXFxzY3NzXFxhYnN0cmFjdHNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9EOlxccHJvamVjdHNcXFdvcmtzaG9wUHJvQ2xpZW50L3NyY1xcYXNzZXRzXFxzY3NzXFxhYnN0cmFjdHNcXF9taXhpbnMuc2NzcyIsInNyYy9EOlxccHJvamVjdHNcXFdvcmtzaG9wUHJvQ2xpZW50L3NyY1xcYXNzZXRzXFxzY3NzXFxiYXNlXFxfYmFzZS5zY3NzIiwic3JjL0Q6XFxwcm9qZWN0c1xcV29ya3Nob3BQcm9DbGllbnQvc3JjXFxhc3NldHNcXHNjc3NcXGJhc2VcXF91dGlscy5zY3NzIiwic3JjL0Q6XFxwcm9qZWN0c1xcV29ya3Nob3BQcm9DbGllbnQvc3JjXFxhc3NldHNcXHNjc3NcXGJhc2VcXF9vdmVycmlkZS5zY3NzIiwic3JjL0Q6XFxwcm9qZWN0c1xcV29ya3Nob3BQcm9DbGllbnQvc3JjXFxhc3NldHNcXHNjc3NcXGNvbXBvbmVudHNcXF90YWJsZS10aGVtZS5zY3NzIiwic3JjL0Q6XFxwcm9qZWN0c1xcV29ya3Nob3BQcm9DbGllbnQvc3JjXFxhc3NldHNcXHNjc3NcXGNvbXBvbmVudHNcXF9jYXJkLXRoZW1lLnNjc3MiLCJzcmMvRDpcXHByb2plY3RzXFxXb3Jrc2hvcFByb0NsaWVudC9zcmNcXGFzc2V0c1xcc2Nzc1xcY29tcG9uZW50c1xcX2J0bi10aGVtZS5zY3NzIiwic3JjL0Q6XFxwcm9qZWN0c1xcV29ya3Nob3BQcm9DbGllbnQvc3JjXFxhc3NldHNcXHNjc3NcXGNvbXBvbmVudHNcXF9idG4taWNvbi10aGVtZS5zY3NzIiwic3JjL0Q6XFxwcm9qZWN0c1xcV29ya3Nob3BQcm9DbGllbnQvc3JjXFxhc3NldHNcXHNjc3NcXGNvbXBvbmVudHNcXF9idG4tb3V0bGluZS10aGVtZS5zY3NzIiwic3JjL0Q6XFxwcm9qZWN0c1xcV29ya3Nob3BQcm9DbGllbnQvc3JjXFxhc3NldHNcXHNjc3NcXGNvbXBvbmVudHNcXF9ncm91cC1jYXJkLnNjc3MiLCJzcmMvRDpcXHByb2plY3RzXFxXb3Jrc2hvcFByb0NsaWVudC9zcmNcXGFzc2V0c1xcc2Nzc1xcY29tcG9uZW50c1xcX2Zvcm1zLnNjc3MiLCJzcmMvRDpcXHByb2plY3RzXFxXb3Jrc2hvcFByb0NsaWVudC9zcmNcXGFzc2V0c1xcc2Nzc1xcY29tcG9uZW50c1xcX2NhcmQtdGVtcGxhdGUuc2NzcyIsInNyYy9EOlxccHJvamVjdHNcXFdvcmtzaG9wUHJvQ2xpZW50L3NyY1xcYXNzZXRzXFxzY3NzXFxjb21wb25lbnRzXFxfYnRuLWRhcmstYmx1ZS5zY3NzIiwic3JjL0Q6XFxwcm9qZWN0c1xcV29ya3Nob3BQcm9DbGllbnQvc3JjXFxhc3NldHNcXHNjc3NcXGNvbXBvbmVudHNcXF9yZXRyby1uYXZpZ2F0aW9uLnNjc3MiLCJzcmMvRDpcXHByb2plY3RzXFxXb3Jrc2hvcFByb0NsaWVudC9zcmNcXGFzc2V0c1xcc2Nzc1xccGFnZXNcXF9jYXRlZ29yeS5zY3NzIiwic3JjL0Q6XFxwcm9qZWN0c1xcV29ya3Nob3BQcm9DbGllbnQvc3JjXFxhc3NldHNcXHNjc3NcXHBhZ2VzXFxfY29tbWVudHMuc2NzcyIsInNyYy9EOlxccHJvamVjdHNcXFdvcmtzaG9wUHJvQ2xpZW50L3NyY1xcYXNzZXRzXFxzY3NzXFxwYWdlc1xcX3JlcG9ydC5zY3NzIiwic3JjL0Q6XFxwcm9qZWN0c1xcV29ya3Nob3BQcm9DbGllbnQvc3JjXFxhc3NldHNcXHNjc3NcXHBhZ2VzXFxfdGVtcGxhdGUuc2NzcyIsInNyYy9EOlxccHJvamVjdHNcXFdvcmtzaG9wUHJvQ2xpZW50L3NyY1xcYXNzZXRzXFxzY3NzXFxwYWdlc1xcX3VzZXJzLnNjc3MiLCJzcmMvRDpcXHByb2plY3RzXFxXb3Jrc2hvcFByb0NsaWVudC9zcmNcXGFzc2V0c1xcc2Nzc1xccGFnZXNcXF9jcmVhdGUtcmV0cm8uc2NzcyIsInNyYy9EOlxccHJvamVjdHNcXFdvcmtzaG9wUHJvQ2xpZW50L3NyY1xcYXNzZXRzXFxzY3NzXFxsYXlvdXRzXFxfaGVhZGVyLnNjc3MiLCJzcmMvRDpcXHByb2plY3RzXFxXb3Jrc2hvcFByb0NsaWVudC9zcmNcXGFzc2V0c1xcc2Nzc1xcbGF5b3V0c1xcX2FzaWRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFDQTs7RUNFRTtBQ0FGO0VBQ0UsY0NHdUIsRUFBQTtBQ052QjtJRkVGO01BSUksZUFBZSxFQUFBLEVBUWxCO0FFZEM7SUZFRjtNQU9JLGNBQWMsRUFBQSxFQUtqQjtBRWRDO0lGRUY7TUFVSSxjQUFjLEVBQUEsRUFFakI7QUFFRDtFQUNFLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNDZHVCO0VEZXZCLGlCQUFpQixFQUFBO0FBR25CO0VBQ0Usc0JDWGdCO0VEWWhCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGNDNUJtQjtFRDZCbkIsbUJBQW1CLEVBQUE7QUU5Qm5CO0lGd0JGO01BU0ksa0JBQWtCLEVBQUEsRUFRckI7QUV6Q0M7SUZ3QkY7TUFZSSxpQkFBaUIsRUFBQSxFQUtwQjtBRXpDQztJRndCRjtNQWVJLGVBQWUsRUFBQSxFQUVsQjtBQUVEO0VBQ0UsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQixFQUFBO0FHaERsQjs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0IsRUFBQTtBQUd4QjtFQUNFLHlCRlJnQixFQUFBO0FFV2xCO0VBQ0UsYUFBYTtFQUNiLHlCRmJnQixFQUFBO0FDSGhCO0lDY0Y7TUFLSSxjQUFjO01BQ2Qsa0JBQWtC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LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbi8qKlxyXG4gKiBNYWluIHNjc3MgZmlsZSB3cml0dGVuIG9yIHdvcmtzaG9wIHBybyBhcHBsaWNhdGlvblxyXG4gKi9cclxuIEBpbXBvcnQgXCJhc3NldHMvc2Nzcy9tYWluLnNjc3NcIjtcclxuLnJlcG9ydC1oZWFkZXJfX3RpdGxle1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbiBcclxuIC5mdWxsLXVzZXJuYW1le1xyXG4gIG1heC13aWR0aDoyMDBweDtkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgY29sb3I6d2hpdGUgICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gfVxyXG5cclxuICBbZGF0YS1ub3RpZnk9XCJwcm9ncmVzc2JhclwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgfVxyXG5cclxuICAubXQtNTB7XHJcbiAgICBtYXJnaW4tdG9wOjUwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLm1pbmktYnRuIHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjtmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBzcGFuIHtmb250LXNpemU6IDE0cHg7Zm9udC13ZWlnaHQ6IDUwMDtiYWNrZ3JvdW5kLWNvbG9yOiAjMkUzNDQ4O2NvbG9yOiB3aGl0ZTtwYWRkaW5nOiA0cHggN3B4O3RleHQtYWxpZ246IGNlbnRlcjtib3JkZXItcmFkaXVzOiA0cHg7bWFyZ2luLXJpZ2h0OiA1cHg7Y3Vyc29yOiBwb2ludGVyO31cclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTsgXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjUpOyBcclxufVxyXG5cclxuLmNhcmQtY3VzdG9tLWJvcmRlcmxlc3MgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2dpbntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9pbWcvbG9naW4tYmctMi5qcGcnKTtcclxufVxyXG5cclxuLnNpZGUtYmFyLW1pbml7XHJcbiAgY29sb3I6ICM5NUE1REM7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLmNvcm5lci1idXR0b257XHJcbiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiB0b3A6IC0xMHB4O1xyXG4gcmlnaHQ6IC0xMHB4O1xyXG4gZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNhcmQtdGhlbWU6aG92ZXIgLmNvcm5lci1idXR0b257XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uY29ybmVyLWJ1dHRvbi10ZW1wbGF0ZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTBweDtcclxuICByaWdodDogMHB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuLmNvcm5lci1pdGVtOmhvdmVyIC5jb3JuZXItYnV0dG9uLXRlbXBsYXRle1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcbi5kcm9wZG93bi13aWR0aCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGxlZnQ6IDEwJTtcclxuICB0b3A6MTAlO1xyXG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsNTAlKSAhaW1wb3J0YW50O1xyXG59XHJcbi5kcm9wZG93bi13aWR0aCAuZHJvcGRvd24taXRlbSB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxufVxyXG4uY2FyZC1kZXNjcmlwdGlvbntcclxuICAvLyB3b3JkLWJyZWFrOiBicmVhay1hbGwgO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcclxufVxyXG5cclxuLmN1c3RvbS1zbGlkZXItbWFpbntcclxuICAgICBcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG5cclxuYS5kaXNhYmxlZCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG5hIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jaGVja2JveC10aGVtZV9fcHNldWRvLWNvbnRyb2wge2ZsZXgtc2hyaW5rOiAwO31cclxuLmNoZWNrYm94LXRoZW1lX19jb250cm9sICsgc3BhbiBzcGFuIHt3b3JkLWJyZWFrOiBicmVhay1hbGw7fVxyXG4uYnRuLWljb24tdGV4dCB7ZGlzcGxheTogZmxleDthbGlnbi1pdGVtczogY2VudGVyO2p1c3RpZnktY29udGVudDogY2VudGVyO31cclxuLmJ0bi1pY29uLXRleHQgaSB7Zm9udC1zaXplOiAxNXB4O31cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3N3B4KSB7XHJcbiAgLmJ0bi1yZXNwb25zaXZlIHtqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO31cclxuICAuYnRuLWljb24tdGV4dCBpe2Rpc3BsYXk6IG5vbmU7fVxyXG4gIC5sb2dpbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYXNzZXRzL2ltZy9sb2dpbi1iZy0yLmpwZycpO1xyXG4gIH1cclxuICAuYnRuLWxpc3QtY29tbWVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgbG9naW4tY21wIGgxIHtmb250LXNpemU6IDMycHg7fVxyXG4gIC5idG4tcmVzcG9uc2l2ZSB7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7fVxyXG4gIC5idG4taWNvbi10ZXh0IHNwYW4ge2Rpc3BsYXk6IG5vbmU7fVxyXG4gIGJvZHkgLm1vYmlsZS1icmFpbnN0b3JtIHt3aWR0aDogMTAwJTttYXgtd2lkdGg6IDEwMCU7ZmxleDogMCAwIDEwMCU7bWFyZ2luLXRvcDogMTVweDt9XHJcbiAgYm9keSAubW9iaWxlLWJyYWluc3Rvcm0gdGV4dGFyZWEge2hlaWdodDogNjVweCAhaW1wb3J0YW50O31cclxuICAubG9naW57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9pbWcvbW9iaWwtbG9naW4tYmcuanBlZycpO1xyXG4gIH1cclxuICAuYnRuLWxpc3QtY29tbWVudHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi8qKlxyXG4gKiBNYWluIHNjc3MgZmlsZSB3cml0dGVuIG9yIHdvcmtzaG9wIHBybyBhcHBsaWNhdGlvblxyXG4gKi9cbioge1xuICBjb2xvcjogIzZCNjc2MDsgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAgICAqIHtcbiAgICAgIGZvbnQtc2l6ZTogMTAwJTsgfSB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgICoge1xuICAgICAgZm9udC1zaXplOiA5OSU7IH0gfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAqIHtcbiAgICAgIGZvbnQtc2l6ZTogOTglOyB9IH1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgY29sb3I6ICM2QjY3NjA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlOyB9XG5cbi5waWxsLXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjRTU1ODIwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xuICAgIC5waWxsLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbTsgfSB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5waWxsLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtOyB9IH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAucGlsbC10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDFyZW07IH0gfVxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMyMTIxMjE7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0OyB9XG5cbi5wYWdlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0OyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5wYWdlLXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogMTAwdnc7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBtaW4taGVpZ2h0OiAxMDB2aDsgfSB9XG5cbi5zaWRlYmFyIHtcbiAgZmxleDogMCAwIDI1MHB4O1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2U7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuc2lkZWJhciB7XG4gICAgICB3aWR0aDogMjUwcHg7XG4gICAgICBmbGV4OiB1bnNldDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1MHB4KTtcbiAgICAgIHotaW5kZXg6IDk5OTsgfSB9XG5cbi5jb250ZW50LW1haW4ge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0OyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5jb250ZW50LW1haW4ge1xuICAgICAgZmxleDogdW5zZXQ7XG4gICAgICB3aWR0aDogMTAwJTsgfSB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmNvbnRlbnQtbWFpbiB7XG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTsgfSB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgLmNvbnRlbnQtbWFpbiB7XG4gICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTsgfSB9XG5cbi5idG4tdmVydGljYWwtcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiAuNzVyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IC43NXJlbSAhaW1wb3J0YW50OyB9XG5cbi5idG4taG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAzLjVyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMy41cmVtICFpbXBvcnRhbnQ7IH1cblxuLmJ0bi1ob3Jpem9udGFsLXBhZGRpbmctbWQge1xuICBwYWRkaW5nLWxlZnQ6IDIuNXJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW0gIWltcG9ydGFudDsgfVxuXG4uYnRuLWhvcml6b250YWwtcGFkZGluZy1zbSB7XG4gIHBhZGRpbmctbGVmdDogMnJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtICFpbXBvcnRhbnQ7IH1cblxuLmJ0bi1ob3Jpem9udGFsLXBhZGRpbmcteHMge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50OyB9XG5cbi5ib3gtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggMTJweDsgfVxuXG4uYm94LXNoYWRvdy1tZCB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDEycHg7IH1cblxuLmJveC1zaGFkb3ctc20ge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4OyB9XG5cbi5ib3gtc2hhZG93LXhzIHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAxcHggM3B4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMXB4IDJweCAwcHg7IH1cblxuLmJvcmRlci1yYWRpdXMteHMge1xuICBib3JkZXItcmFkaXVzOiAxcHggIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLXJhZGl1cy1zbSB7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItcmFkaXVzLW1kIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1yYWRpdXMtbGcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1yYWRpdXMteGwge1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7IH1cblxuLmZvbnQtc2l6ZS14cyB7XG4gIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7IH1cblxuLmZvbnQtc2l6ZS1zbSB7XG4gIGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7IH1cblxuLmZvbnQtc2l6ZS1tZCB7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50OyB9XG5cbi5mb250LXNpemUtbGcge1xuICBmb250LXNpemU6IDEuMjVyZW0gIWltcG9ydGFudDsgfVxuXG4uZm9udC1zaXplLXhsIHtcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDsgfVxuXG4uZm9udC1zaXplLXh4bCB7XG4gIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50OyB9XG5cbi5mb3JjZS10ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50OyB9XG5cbi5mb3JtLWNvbnRyb2wge1xuICBoZWlnaHQ6IDNyZW0gIWltcG9ydGFudDsgfVxuICAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICNFNTU4MjAgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyMjksIDg4LCAzMiwgMC4yNSkgIWltcG9ydGFudDsgfVxuXG4uY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjNDI0MjQyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEuMjVyZW07IH1cblxuLmNhcmQtZGVzY3JpcHRpb24ge1xuICBjb2xvcjogIzYxNjE2MTtcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG4udGFibGUtdGhlbWUgdGhlYWQgdGgge1xuICBib3JkZXItdG9wOiB0cmFuc3BhcmVudDsgfVxuXG4uY2FyZC10aGVtZSB7XG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IC43NXJlbTtcbiAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50OyB9XG4gIC5jYXJkLXRoZW1lLS1ncmVlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3RDI4RjsgfVxuICAuY2FyZC10aGVtZS0tY3lhbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QyRUZFRTsgfVxuICAuY2FyZC10aGVtZS0td2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkRFNzsgfVxuICAuY2FyZC10aGVtZS0tYmx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q3RjNGRjsgfVxuXG4uYnRuLXRoZW1lIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogLjVyZW0gMS41cmVtO1xuICBjb2xvcjogI2Y1ZjVmNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U1NTgyMDtcbiAgZm9udC1zaXplOiAuOXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5idG4tdGhlbWUgPiAqIHtcbiAgICBjb2xvcjogI2Y1ZjVmNTsgfVxuICAuYnRuLXRoZW1lOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyMjksIDg4LCAzMiwgMC4yNSk7IH1cbiAgLmJ0bi10aGVtZSBzcGFuLmNvdW50IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjVmNWY1O1xuICAgIHBhZGRpbmc6IC4xcmVtIC4ycmVtO1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtOyB9XG5cbi5idG4taWNvbi10aGVtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI0U1NTgyMDsgfVxuICAuYnRuLWljb24tdGhlbWUgPiAqIHtcbiAgICBjb2xvcjogaW5oZXJpdDsgfVxuICAuYnRuLWljb24tdGhlbWU6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNTU4MjA7XG4gICAgY29sb3I6ICNmNWY1ZjU7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5idG4tb3V0bGluZS10aGVtZSB7XG4gIGNvbG9yOiAjRTU1ODIwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U1NTgyMDsgfVxuICAuYnRuLW91dGxpbmUtdGhlbWUgPiAqIHtcbiAgICBjb2xvcjogI0U1NTgyMDsgfVxuICAuYnRuLW91dGxpbmUtdGhlbWU6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIyOSwgODgsIDMyLCAwLjI1KTsgfVxuXG4uZ3JvdXAtY2FyZF9fdGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI0U1NTgyMDtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XG5cbi5ncm91cC1jYXJkX19kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiAjNjE2MTYxO1xuICBmb250LXNpemU6IC45cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XG5cbi5ncm91cC1jYXJkX19zdGF0dXMge1xuICBmb250LXdlaWdodDogNTAwOyB9XG5cbi5ncm91cC1jYXJkX19hY3Rpb25zIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuXG4uY2hlY2tib3gtdGhlbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAuY2hlY2tib3gtdGhlbWVfX3BzZXVkby1jb250cm9sIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEuNzVyZW07XG4gICAgaGVpZ2h0OiAxLjc1cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTcsIDk3LCA5NywgMC41KTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07IH1cbiAgLmNoZWNrYm94LXRoZW1lIHNwYW4gaSB7XG4gICAgY29sb3I6ICNFNTU4MjA7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzcHg7XG4gICAgdG9wOiAzcHg7IH1cbiAgLmNoZWNrYm94LXRoZW1lX19jb250cm9sIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgLmNoZWNrYm94LXRoZW1lX19jb250cm9sOm5vdCg6Y2hlY2tlZCkgfiBzcGFuIGkge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAgIC5jaGVja2JveC10aGVtZV9fY29udHJvbDpjaGVja2VkIH4gc3BhbiBzcGFuIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLnRlbXBsYXRlLWNhcmRfX2NvbnRlbnQge1xuICBtaW4taGVpZ2h0OiA1cmVtOyB9XG5cbi50ZW1wbGF0ZS1jYXJkX190aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjNjE2MTYxOyB9XG5cbi5idG4tZGFyay1ibHVlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogLjVyZW0gMS41cmVtO1xuICBjb2xvcjogI2Y1ZjVmNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJFMzQ0ODtcbiAgZm9udC1zaXplOiAuOXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5idG4tZGFyay1ibHVlID4gKiB7XG4gICAgY29sb3I6ICNmNWY1ZjU7IH1cbiAgLmJ0bi1kYXJrLWJsdWU6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDQ2LCA1MiwgNzIsIDAuMjUpOyB9XG4gIC5idG4tZGFyay1ibHVlIHNwYW4uY291bnQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjU7XG4gICAgcGFkZGluZzogLjFyZW0gLjJyZW07XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07IH1cblxuLmhlYWRlcl9fcmV0cm8tbW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuaGVhZGVyX19yZXRyby1tb2JpbGUge1xuICAgICAgZGlzcGxheTogYmxvY2s7IH0gfVxuXG4uaGVhZGVyX19yZXRyby1uYXZpZ2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG4gIC5oZWFkZXJfX3JldHJvLW5hdmlnYXRpb246Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6IDJweDsgfVxuICAuaGVhZGVyX19yZXRyby1uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uLWl0ZW0ge1xuICAgIG1pbi13aWR0aDogOXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1OCwgMTU4LCAxNTgsIDAuMjUpO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNsaXAtcGF0aDogcG9seWdvbig5MCUgMCwgMTAwJSA1MCUsIDkwJSAxMDAlLCAwJSAxMDAlLCAxMCUgNTElLCAwJSAwJSk7IH1cbiAgICAuaGVhZGVyX19yZXRyby1uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uLWl0ZW06OmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGNsaXAtcGF0aDogcG9seWdvbig5MCUgMCwgMTAwJSA1MCUsIDkwJSAxMDAlLCAwJSAxMDAlLCAxMCUgNTElLCAwJSAwJSk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIGhlaWdodDogY2FsYygzcmVtIC0gNHB4KTtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0cHgpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cbiAgICAuaGVhZGVyX19yZXRyby1uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uLWl0ZW0ubmF2aWdhdG9yIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLmhlYWRlcl9fcmV0cm8tbmF2aWdhdGlvbiAubmF2aWdhdGlvbi1saW5rIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjNDI0MjQyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMWVtOyB9XG4gICAgLmhlYWRlcl9fcmV0cm8tbmF2aWdhdGlvbiAubmF2aWdhdGlvbi1saW5rLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTU1ODIwO1xuICAgICAgY29sb3I6ICNmZmY7IH1cbiAgICAuaGVhZGVyX19yZXRyby1uYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uLWxpbms6bm90KC5hY3RpdmUpOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjRTU1ODIwOyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAgIC5oZWFkZXJfX3JldHJvLW5hdmlnYXRpb24gLm5hdmlnYXRpb24taXRlbS5hY3RpdmUsXG4gICAgLmhlYWRlcl9fcmV0cm8tbmF2aWdhdGlvbiAubmF2aWdhdGlvbi1pdGVtLm5hdmlnYXRvciB7XG4gICAgICBkaXNwbGF5OiBibG9jazsgfSB9XG5cbi5jYXRlZ29yaWVzIC5jYXRlZ29yeSArIC5jYXRlZ29yeSB7XG4gIG1hcmdpbi10b3A6IDNyZW07IH1cblxuLmNhdGVnb3J5X190aXRsZSB7XG4gIGNvbG9yOiAjMjEyMTIxO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTsgfVxuXG4uY2F0ZWdvcnlfX2NvbW1lbnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZmxleC13cmFwOiB3cmFwOyB9XG5cbi5yZXBvcnQtaGVhZGVyIHtcbiAgbWFyZ2luOiAycmVtIGF1dG87IH1cbiAgLnJlcG9ydC1oZWFkZXJfX3RpdGxlLCAucmVwb3J0LWhlYWRlcl9fZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAucmVwb3J0LWhlYWRlcl9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogI0U1NTgyMDsgfVxuICAgIC5yZXBvcnQtaGVhZGVyX190aXRsZS0teHMge1xuICAgICAgZm9udC1zaXplOiAxcmVtOyB9XG4gICAgLnJlcG9ydC1oZWFkZXJfX3RpdGxlLS1zbSB7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07IH1cbiAgICAucmVwb3J0LWhlYWRlcl9fdGl0bGUtLW1kIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtOyB9XG4gICAgLnJlcG9ydC1oZWFkZXJfX3RpdGxlLS1sZyB7XG4gICAgICBmb250LXNpemU6IDEuNzVyZW07IH1cbiAgICAucmVwb3J0LWhlYWRlcl9fdGl0bGUtLXhsIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTsgfVxuICAucmVwb3J0LWhlYWRlcl9fZGVzY3JpcHRpb24ge1xuICAgIGNvbG9yOiAjNDI0MjQyOyB9XG5cbi5yZXBvcnQtc2VjdGlvbl9fdGl0bGUge1xuICBmb250LXNpemU6IDEuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cblxuLnJlcG9ydC1zZWN0aW9uX19zdWJ0aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtOyB9XG5cbi5yZXBvcnQtc2VjdGlvbl9fY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtOyB9XG5cbi50ZW1wbGF0ZS10aXRsZS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlOyB9XG4gIC50ZW1wbGF0ZS10aXRsZS1ncm91cCA+IC5mb3JtLWdyb3VwIHtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTsgfVxuICAudGVtcGxhdGUtdGl0bGUtZ3JvdXBfX3V0aWxzIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgZGlzcGxheTogZmxleDsgfVxuICAgIC50ZW1wbGF0ZS10aXRsZS1ncm91cF9fdXRpbHMgLmZvcm0tZ3JvdXAge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMXJlbTsgfVxuICAgIC50ZW1wbGF0ZS10aXRsZS1ncm91cF9fdXRpbHMgLmZvcm0tY2FuY2VsIHtcbiAgICAgIGZsZXg6IDE7IH1cbiAgICAgIC50ZW1wbGF0ZS10aXRsZS1ncm91cF9fdXRpbHMgLmZvcm0tY2FuY2VsIGJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgICAgICAgLnRlbXBsYXRlLXRpdGxlLWdyb3VwX191dGlscyAuZm9ybS1jYW5jZWwgYnV0dG9uIGkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTsgfVxuXG4udXNlcnMtaGVhZGVyIC5hZGQtdXNlciB7XG4gIGRpc3BsYXk6IGZsZXg7IH1cbiAgLnVzZXJzLWhlYWRlciAuYWRkLXVzZXIgPiAuZm9ybS1ncm91cCB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07IH1cbiAgLnVzZXJzLWhlYWRlciAuYWRkLXVzZXIgPiAuZm9ybS1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogY2FsYygxLjVyZW0pO1xuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbWluLXdpZHRoOiAyMDBweDsgfVxuXG4uY3JlYXRlLXJldHJvIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmNyZWF0ZS1yZXRybyB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50OyB9IH1cbiAgLmNyZWF0ZS1yZXRyb19fZm9ybSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAyLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXgtd2lkdGg6IDc1MHB4OyB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgIC5jcmVhdGUtcmV0cm9fX2Zvcm0ge1xuICAgICAgICB3aWR0aDogNzUlOyB9IH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgLmNyZWF0ZS1yZXRyb19fZm9ybSB7XG4gICAgICAgIHdpZHRoOiAxMDAlOyB9IH1cblxuLmhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07IH1cbiAgLmhlYWRlcl9fdXNlciAuYnRuLWRlZmF1bHQge1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjUpOyB9XG4gICAgLmhlYWRlcl9fdXNlciAuYnRuLWRlZmF1bHQgaSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtOyB9XG4gIC5oZWFkZXJfX3RvZ2dsZS1zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAuaGVhZGVyX190b2dnbGUtc2lkZWJhciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9IH1cbiAgLmhlYWRlcl9fbmF2aWdhdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIC5oZWFkZXJfX25hdmlnYXRlLWJhY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxuICAgIC5oZWFkZXJfX25hdmlnYXRlLWJhY2sgaSB7XG4gICAgICBtYXJnaW4tbGVmdDogLS4zcmVtO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07IH1cblxuLnNpZGViYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUzNDQ4OyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5zaWRlYmFyLmFjdGl2ZSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDE5cHggMzhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTVweCAxMnB4OyB9IH1cbiAgLnNpZGViYXJfX2hlYWRlciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTsgfVxuICAgIC5zaWRlYmFyX19oZWFkZXItY29udGVudCAjaGlkZVNpZGViYXIge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgLnNpZGViYXJfX2hlYWRlci1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLXRvcDogMS4yNXJlbTsgfVxuICAgICAgICAuc2lkZWJhcl9faGVhZGVyLWNvbnRlbnQgLnNpZGViYXJfX2xvZ28ge1xuICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluOyB9XG4gICAgICAgIC5zaWRlYmFyX19oZWFkZXItY29udGVudCAjaGlkZVNpZGViYXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGNvbG9yOiAjZjVmNWY1OyB9XG4gICAgICAgICAgLnNpZGViYXJfX2hlYWRlci1jb250ZW50ICNoaWRlU2lkZWJhcjpmb2N1cyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGNvbG9yOiAjRTU1ODIwOyB9IH1cbiAgLnNpZGViYXJfX2xvZ28ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDFyZW0gKyAuMjVyZW0pO1xuICAgIG1hcmdpbi10b3A6IDMxcHg7IH1cbiAgLnNpZGViYXJfX2NvbnRlbnQge1xuICAgIGNvbG9yOiAjZjVmNWY1OyB9XG4gIC5zaWRlYmFyX19tZW51IHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7IH1cbiAgICAuc2lkZWJhcl9fbWVudS1pdGVtIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICAgIC5zaWRlYmFyX19tZW51LWl0ZW0uYWN0aXZlIC5zaWRlYmFyX19tZW51LWxpbmsge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTU1ODIwO1xuICAgICAgICBib3JkZXI6IHRyYW5zcGFyZW50OyB9XG4gICAgICAuc2lkZWJhcl9fbWVudS1pdGVtLmFjdGl2ZSBpIHtcbiAgICAgICAgY29sb3I6ICNmNWY1ZjU7IH1cbiAgICAgIC5zaWRlYmFyX19tZW51LWl0ZW0tY29udGVudCB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUzNDQ4O1xuICAgICAgICBwYWRkaW5nOiAwIDJyZW07IH1cbiAgICAuc2lkZWJhcl9fbWVudS1pdGVtICsgLnNpZGViYXJfX21lbnUtaXRlbSB7XG4gICAgICBtYXJnaW4tdG9wOiAuNzVyZW07IH1cbiAgICAuc2lkZWJhcl9fbWVudS1saW5rIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE0OSwgMTY1LCAyMjAsIDAuMik7XG4gICAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgICAgLnNpZGViYXJfX21lbnUtbGluazpob3ZlciB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgICAgIC5zaWRlYmFyX19tZW51LWxpbmsgaSB7XG4gICAgICAgIGNvbG9yOiAjOTVBNURDO1xuICAgICAgICBmbGV4OiAwIDAgMi4yNXJlbTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTsgfVxuICAgICAgLnNpZGViYXJfX21lbnUtbGluayBzcGFuIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07IH1cbiAgLnNpZGViYXJfX3BhcnRpY2lwYW50cyB7XG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xuICAgIHBhZGRpbmc6IDAgMnJlbTsgfVxuICAuc2lkZWJhcl9fc2VjdGlvbi10aXRsZSB7XG4gICAgY29sb3I6ICM5NUE1REM7XG4gICAgZm9udC1zaXplOiAxLjFyZW07IH1cbiAgICAuc2lkZWJhcl9fc2VjdGlvbi10aXRsZTo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ5LCAxNjUsIDIyMCwgMC44KTsgfVxuICAuc2lkZWJhcl9fcGFydGljaXBhbnQtbGlzdCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTsgfVxuICAuc2lkZWJhcl9fcGFydGljaXBhbnQtbGlzdC1pdGVtIGltZy5hdmF0YXIge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtOyB9XG4gIC5zaWRlYmFyX19wYXJ0aWNpcGFudC1saXN0LWl0ZW0gLm5hbWUge1xuICAgIGNvbG9yOiAjQkRCREJEO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgIC5zaWRlYmFyX19wYXJ0aWNpcGFudC1saXN0LWl0ZW0gLm5hbWUtc2hvcnQge1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTU1ODIwO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjZmZmOyB9XG5cbi5yZXBvcnQtaGVhZGVyX190aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyB9XG5cbi5mdWxsLXVzZXJuYW1lIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBjb2xvcjogd2hpdGUgICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxuXG5bZGF0YS1ub3RpZnk9XCJwcm9ncmVzc2JhclwiXSB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1cHg7IH1cblxuLm10LTUwIHtcbiAgbWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50OyB9XG5cbi5taW5pLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDsgfVxuICAubWluaS1idG4gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJFMzQ0ODtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNHB4IDdweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDsgfVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgfVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxuXG4uY2FyZC1jdXN0b20tYm9yZGVybGVzcyAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxuXG4ubG9naW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1nL2xvZ2luLWJnLTIuanBnXCIpOyB9XG5cbi5zaWRlLWJhci1taW5pIHtcbiAgY29sb3I6ICM5NUE1REM7XG4gIGZvbnQtc2l6ZTogMS4xcmVtOyB9XG5cbi5jb3JuZXItYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICByaWdodDogLTEwcHg7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLmNhcmQtdGhlbWU6aG92ZXIgLmNvcm5lci1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4uY29ybmVyLWJ1dHRvbi10ZW1wbGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgcmlnaHQ6IDBweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgei1pbmRleDogOTk5OTsgfVxuXG4uY29ybmVyLWl0ZW06aG92ZXIgLmNvcm5lci1idXR0b24tdGVtcGxhdGUge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4uZHJvcGRvd24td2lkdGgge1xuICB3aWR0aDogMjAwcHg7XG4gIGxlZnQ6IDEwJTtcbiAgdG9wOiAxMCU7IH1cblxuLmRyb3Bkb3duLXdpZHRoIC5kcm9wZG93bi1pdGVtIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgfVxuXG4uY2FyZC1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDdweDsgfVxuXG4uY3VzdG9tLXNsaWRlci1tYWluIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7IH1cblxuYS5kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IGRlZmF1bHQ7IH1cblxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uY2hlY2tib3gtdGhlbWVfX3BzZXVkby1jb250cm9sIHtcbiAgZmxleC1zaHJpbms6IDA7IH1cblxuLmNoZWNrYm94LXRoZW1lX19jb250cm9sICsgc3BhbiBzcGFuIHtcbiAgd29yZC1icmVhazogYnJlYWstYWxsOyB9XG5cbi5idG4taWNvbi10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cblxuLmJ0bi1pY29uLXRleHQgaSB7XG4gIGZvbnQtc2l6ZTogMTVweDsgfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc3cHgpIHtcbiAgLmJ0bi1yZXNwb25zaXZlIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XG4gIC5idG4taWNvbi10ZXh0IGkge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLmxvZ2luIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1nL2xvZ2luLWJnLTIuanBnXCIpOyB9XG4gIC5idG4tbGlzdC1jb21tZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4OyB9IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIGxvZ2luLWNtcCBoMSB7XG4gICAgZm9udC1zaXplOiAzMnB4OyB9XG4gIC5idG4tcmVzcG9uc2l2ZSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgLmJ0bi1pY29uLXRleHQgc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICBib2R5IC5tb2JpbGUtYnJhaW5zdG9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7IH1cbiAgYm9keSAubW9iaWxlLWJyYWluc3Rvcm0gdGV4dGFyZWEge1xuICAgIGhlaWdodDogNjVweCAhaW1wb3J0YW50OyB9XG4gIC5sb2dpbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltZy9tb2JpbC1sb2dpbi1iZy5qcGVnXCIpOyB9XG4gIC5idG4tbGlzdC1jb21tZW50IHtcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cbiIsIkBpbXBvcnQgXCIuLi9hYnN0cmFjdHMvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vYWJzdHJhY3RzL21peGluc1wiO1xuXG4qIHtcbiAgY29sb3I6ICRjb2xvci10ZXh0LW1haW47XG5cbiAgQGluY2x1ZGUgcmVzcG9uZCgkdG8tc2NyZWVuLWxhcmdlKSB7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICB9XG4gIEBpbmNsdWRlIHJlc3BvbmQoJHRvLXNjcmVlbikge1xuICAgIGZvbnQtc2l6ZTogOTklO1xuICB9XG4gIEBpbmNsdWRlIHJlc3BvbmQoJHRvLXRhYmxldC1sYW5kc2NhcGUpIHtcbiAgICBmb250LXNpemU6IDk4JTtcbiAgfVxufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBjb2xvcjogJGNvbG9yLXRleHQtbWFpbjtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG59XG5cbi5waWxsLXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6ICRjb2xvci10aGVtZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICBAaW5jbHVkZSByZXNwb25kKCR0by1zY3JlZW4tbGFyZ2UpIHtcbiAgICBmb250LXNpemU6IDEuMTVyZW07XG4gIH1cbiAgQGluY2x1ZGUgcmVzcG9uZCgkdG8tdGFibGV0LWxhbmRzY2FwZSkge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB9XG4gIEBpbmNsdWRlIHJlc3BvbmQoJHRvLXRhYmxldC1wb3J0cmFpdCkge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMjEyMTIxO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuIiwiLy8gQ09MT1IgVkFSSUFCTEVTXG5cbiRjb2xvci10aGVtZTogI0U1NTgyMDtcblxuJGNvbG9yLWJnOiAjRjRGNEY0O1xuJGNvbG9yLXNpZGViYXItYmc6ICMyRTM0NDg7XG5cbiRjb2xvci10ZXh0LW1haW46ICM2QjY3NjA7XG4kY29sb3ItdGV4dC1zZWNvbmRhcnk6ICM2QTY2NjA7XG5cbiRjb2xvci1ncmVlbjogIzc3RDI4RjtcbiRjb2xvci1jeWFuOiAjRDJFRkVFO1xuJGNvbG9yLWJsdWU6ICNEN0YzRkY7XG4kY29sb3IteWVsbG93OiAjRkZGREU3O1xuXG4kY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3ItZGFyazogIzIxMjEyMTtcbiRjb2xvci1ncmF5LWxpZ2h0ZXI6ICNGQUZBRkE7XG4kY29sb3ItZ3JheS1saWdodDogI2Y1ZjVmNTtcbiRjb2xvci1ncmF5LWxlc3MtbGlnaHQ6ICNCREJEQkQ7XG4kY29sb3ItZ3JheTogIzlFOUU5RTtcbiRjb2xvci1ncmF5LWRhcms6ICM2MTYxNjE7XG4kY29sb3ItZ3JheS1kYXJrZXI6ICM0MjQyNDI7XG4kY29sb3ItYmx1ZS1kYXJrOiAjMkUzNDQ4O1xuJGNvbG9yLXNpZGViYXItdGV4dC1zZWNvbmRlcjogIzk1QTVEQztcblxuJGNvbG9yLXRoZW1lLWxpc3Q6IChcImdyZWVuXCI6ICRjb2xvci1ncmVlbiwgXCJjeWFuXCI6ICRjb2xvci1jeWFuLCBcIndhcm5pbmdcIjogJGNvbG9yLXllbGxvdywgXCJibHVlXCI6ICRjb2xvci1ibHVlKTtcblxuLy8gTEFZT1VUIFZBUklBQkxFU1xuXG4kbGF5b3V0LWhvcml6b250YWwtcGFkZGluZzogMnJlbTtcbiRsYXlvdXQtaG9yaXpvbnRhbC1wYWRkaW5nLW1kOiAxcmVtO1xuJGxheW91dC1ob3Jpem9udGFsLXBhZGRpbmctc206IC41cmVtO1xuJGxheW91dC12ZXJ0aWNhbC1wYWRkaW5nOiAxcmVtO1xuJGxheW91dC12ZXJ0aWNhbC1wYWRkaW5nLW1kOiAuNXJlbTtcbiRsYXlvdXQtdmVydGljYWwtcGFkZGluZy1zbTogLjI1cmVtO1xuJGxheW91dC1taW4tZm9ybS1jb250cm9sLWhlaWdodDogM3JlbTtcblxuJGZvbnQtc2l6ZS1saXN0OiAoXCJ4c1wiOiAuOHJlbSwgXCJzbVwiOiAuOXJlbSwgXCJtZFwiOiAxcmVtLCBcImxnXCI6IDEuMjVyZW0sIFwieGxcIjogMS41cmVtLCBcInh4bFwiOiAycmVtKTtcbiRib3JkZXItcmFkaXVzLWxpc3Q6IChcInhzXCI6IDFweCwgXCJzbVwiOiAzcHgsIFwibWRcIjogNXB4LCBcImxnXCI6IDEwcHgsIFwieGxcIjogMTVweCk7XG4vLyBCUkVBS1BPSU5UIFZBUklBQkxFU1xuXG4kdG8tbW9iaWxlLW1pbmk6IDQwMDtcbiR0by1tb2JpbGU6IDU3NjtcbiR0by10YWJsZXQtcG9ydHJhaXQ6IDc2NztcbiR0by10YWJsZXQtbGFuZHNjYXBlOiAxMDI0O1xuJHRvLXNjcmVlbjogMTIwMDtcbiR0by1zY3JlZW4tbGFyZ2U6IDE0MDA7XG5cbiIsIkBtaXhpbiByZXNwb25kKCR3aWR0aCkge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAjeyR3aWR0aCArICdweCd9KSB7XG4gICAgQGNvbnRlbnRcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uL2Fic3RyYWN0cy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIuLi9hYnN0cmFjdHMvbWl4aW5zXCI7XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1iZztcbn1cblxuLnBhZ2Utd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1iZztcblxuICBAaW5jbHVkZSByZXNwb25kKCR0by10YWJsZXQtbGFuZHNjYXBlKSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cbn1cblxuLnNpZGViYXIge1xuICBmbGV4OiAwIDAgMjUwcHg7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuXG4gIEBpbmNsdWRlIHJlc3BvbmQoJHRvLXRhYmxldC1sYW5kc2NhcGUpIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgZmxleDogdW5zZXQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUwcHgpO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgfVxufVxuXG4uY29udGVudC1tYWluIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogJGxheW91dC12ZXJ0aWNhbC1wYWRkaW5nICRsYXlvdXQtaG9yaXpvbnRhbC1wYWRkaW5nO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJnO1xuXG4gIEBpbmNsdWRlIHJlc3BvbmQoJHRvLXRhYmxldC1sYW5kc2NhcGUpIHtcbiAgICBmbGV4OiB1bnNldDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIEBpbmNsdWRlIHJlc3BvbmQoJHRvLXRhYmxldC1wb3J0cmFpdCkge1xuICAgIHBhZGRpbmc6ICRsYXlvdXQtdmVydGljYWwtcGFkZGluZy1tZCAkbGF5b3V0LWhvcml6b250YWwtcGFkZGluZy1tZDtcbiAgfVxuXG4gIEBpbmNsdWRlIHJlc3BvbmQoJHRvLW1vYmlsZSkge1xuICAgIHBhZGRpbmc6ICRsYXlvdXQtdmVydGljYWwtcGFkZGluZy1zbSAkbGF5b3V0LWhvcml6b250YWwtcGFkZGluZy1zbTtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uL2Fic3RyYWN0cy92YXJpYWJsZXNcIjtcblxuLmJ0bi12ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZy10b3A6IC43NXJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5idG4taG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAzLjVyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMy41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5idG4taG9yaXpvbnRhbC1wYWRkaW5nLW1kIHtcbiAgcGFkZGluZy1sZWZ0OiAyLjVyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMi41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5idG4taG9yaXpvbnRhbC1wYWRkaW5nLXNtIHtcbiAgcGFkZGluZy1sZWZ0OiAycmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDJyZW0gIWltcG9ydGFudDtcbn1cblxuLmJ0bi1ob3Jpem9udGFsLXBhZGRpbmcteHMge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4uYm94LXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDEycHg7XG59XG5cbi5ib3gtc2hhZG93LW1kIHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggMTJweDtcbn1cblxuLmJveC1zaGFkb3ctc20ge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xufVxuXG4uYm94LXNoYWRvdy14cyB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMXB4IDNweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDFweCAycHggMHB4Oztcbn1cblxuXG5AZWFjaCAkbmFtZSwgJHNpemUgaW4gJGJvcmRlci1yYWRpdXMtbGlzdCB7XG4gIC5ib3JkZXItcmFkaXVzLSN7JG5hbWV9IHtcbiAgICBib3JkZXItcmFkaXVzOiAkc2l6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBlYWNoICRuYW1lLCAkc2l6ZSBpbiAkZm9udC1zaXplLWxpc3Qge1xuICAuZm9udC1zaXplLSN7JG5hbWV9IHtcbiAgICBmb250LXNpemU6ICRzaXplICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmZvcmNlLXRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4iLCJAaW1wb3J0IFwiLi4vYWJzdHJhY3RzL3ZhcmlhYmxlc1wiO1xuXG4uZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiAkbGF5b3V0LW1pbi1mb3JtLWNvbnRyb2wtaGVpZ2h0ICFpbXBvcnRhbnQ7XG5cbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAkY29sb3ItdGhlbWUgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgkY29sb3ItdGhlbWUsIC4yNSkgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uY2FyZCB7XG5cbiAgJi10aXRsZSB7XG4gICAgY29sb3I6ICRjb2xvci1ncmF5LWRhcmtlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxuXG4gICYtZGVzY3JpcHRpb24ge1xuICAgIGNvbG9yOiAkY29sb3ItZ3JheS1kYXJrO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cbiIsIi50YWJsZS10aGVtZSB7XG4gIHRoZWFkIHRoIHtcbiAgICBib3JkZXItdG9wOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uL2Fic3RyYWN0cy92YXJpYWJsZXNcIjtcblxuLmNhcmQtdGhlbWUge1xuICBib3JkZXI6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAuNzVyZW07XG4gIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcblxuICBAZWFjaCAkbmFtZSwgJHZhbHVlIGluICRjb2xvci10aGVtZS1saXN0IHtcbiAgICAmLS0jeyRuYW1lfSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vYWJzdHJhY3RzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmJ0bi10aGVtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiAuNXJlbSAxLjVyZW07XHJcbiAgY29sb3I6ICRjb2xvci1ncmF5LWxpZ2h0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci10aGVtZTtcclxuICBmb250LXNpemU6IC45cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICYgPiAqIHtcclxuICAgIGNvbG9yOiAkY29sb3ItZ3JheS1saWdodDtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoJGNvbG9yLXRoZW1lLCAuMjUpO1xyXG4gIH1cclxuXHJcbiAgc3Bhbi5jb3VudCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItZ3JheS1saWdodDtcclxuICAgIHBhZGRpbmc6IC4xcmVtIC4ycmVtO1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vYWJzdHJhY3RzL3ZhcmlhYmxlc1wiO1xuXG4uYnRuLWljb24tdGhlbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICRjb2xvci10aGVtZTtcblxuICAmID4gKiB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdGhlbWU7XG4gICAgY29sb3I6ICRjb2xvci1ncmF5LWxpZ2h0O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uL2Fic3RyYWN0cy92YXJpYWJsZXNcIjtcblxuLmJ0bi1vdXRsaW5lLXRoZW1lIHtcbiAgY29sb3I6ICRjb2xvci10aGVtZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci10aGVtZTtcblxuICAmID4gKiB7XG4gICAgY29sb3I6ICRjb2xvci10aGVtZTtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKCRjb2xvci10aGVtZSwgLjI1KTtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uL2Fic3RyYWN0cy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIuLi9hYnN0cmFjdHMvbWl4aW5zXCI7XG5cbi5ncm91cC1jYXJkIHtcbiAgJl9fdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICRjb2xvci10aGVtZTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gICZfX2Rlc2NyaXB0aW9uIHtcbiAgICBjb2xvcjogJGNvbG9yLWdyYXktZGFyaztcbiAgICBmb250LXNpemU6IC45cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cblxuICAmX19zdGF0dXMge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAmX19hY3Rpb25zIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vYWJzdHJhY3RzL3ZhcmlhYmxlc1wiO1xuXG4uY2hlY2tib3gtdGhlbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmX19wc2V1ZG8tY29udHJvbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxLjc1cmVtO1xuICAgIGhlaWdodDogMS43NXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1ncmF5LWRhcmssIC41KTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIH1cblxuICBzcGFuIGkge1xuICAgIGNvbG9yOiAkY29sb3ItdGhlbWU7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzcHg7XG4gICAgdG9wOiAzcHg7XG4gIH1cblxuICAmX19jb250cm9sIHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgJjpub3QoOmNoZWNrZWQpIH4gc3BhbiB7XG4gICAgICBpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmNoZWNrZWQgfiBzcGFuIHNwYW4ge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi9hYnN0cmFjdHMvdmFyaWFibGVzXCI7XG5cbi50ZW1wbGF0ZS1jYXJkIHtcblxuICAmX19jb250ZW50IHtcbiAgICBtaW4taGVpZ2h0OiA1cmVtO1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAkY29sb3ItZ3JheS1kYXJrO1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vYWJzdHJhY3RzL3ZhcmlhYmxlc1wiO1xuXG4uYnRuLWRhcmstYmx1ZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IC41cmVtIDEuNXJlbTtcbiAgY29sb3I6ICRjb2xvci1ncmF5LWxpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2lkZWJhci1iZztcbiAgZm9udC1zaXplOiAuOXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICYgPiAqIHtcbiAgICBjb2xvcjogJGNvbG9yLWdyYXktbGlnaHQ7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgkY29sb3Itc2lkZWJhci1iZywgLjI1KTtcbiAgfVxuXG4gIHNwYW4uY291bnQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ncmF5LWxpZ2h0O1xuICAgIHBhZGRpbmc6IC4xcmVtIC4ycmVtO1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vYWJzdHJhY3RzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uL2Fic3RyYWN0cy9taXhpbnNcIjtcblxuLmhlYWRlcl9fcmV0cm8tbW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcblxuICBAaW5jbHVkZSByZXNwb25kKCR0by10YWJsZXQtbGFuZHNjYXBlKSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLmhlYWRlcl9fcmV0cm8tbmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogMnB4O1xuICB9XG5cbiAgLm5hdmlnYXRpb24taXRlbSB7XG4gICAgbWluLXdpZHRoOiA5cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLWdyYXksIC4yNSk7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDkwJSAwLCAxMDAlIDUwJSwgOTAlIDEwMCUsIDAlIDEwMCUsIDEwJSA1MSUsIDAlIDAlKTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGNsaXAtcGF0aDogcG9seWdvbig5MCUgMCwgMTAwJSA1MCUsIDkwJSAxMDAlLCAwJSAxMDAlLCAxMCUgNTElLCAwJSAwJSk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIGhlaWdodDogY2FsYygzcmVtIC0gNHB4KTtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0cHgpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJnO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG5cblxuICAgICYubmF2aWdhdG9yIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm5hdmlnYXRpb24tbGluayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogJGNvbG9yLWdyYXktZGFya2VyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuXG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRoZW1lO1xuICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICB9XG5cbiAgICAmOm5vdCguYWN0aXZlKTpob3ZlciB7XG4gICAgICBjb2xvcjogJGNvbG9yLXRoZW1lO1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIHJlc3BvbmQoMTkxOSkge1xuICAgIC5uYXZpZ2F0aW9uLWl0ZW0ge1xuICAgICAgLy8gZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLm5hdmlnYXRpb24taXRlbS5hY3RpdmUsXG4gICAgLm5hdmlnYXRpb24taXRlbS5uYXZpZ2F0b3Ige1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG4gIEBpbmNsdWRlIHJlc3BvbmQoJHRvLXRhYmxldC1sYW5kc2NhcGUpIHtcbiAgICAvLyBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vYWJzdHJhY3RzL3ZhcmlhYmxlc1wiO1xuXG4uY2F0ZWdvcmllcyB7XG4gIC5jYXRlZ29yeSArIC5jYXRlZ29yeSB7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgfVxufVxuXG4uY2F0ZWdvcnkge1xuXG4gICZfX3RpdGxlIHtcbiAgICBjb2xvcjogIzIxMjEyMTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIH1cbn1cbiIsIi5jYXRlZ29yeSB7XG5cbiAgJl9fY29tbWVudHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi9hYnN0cmFjdHMvdmFyaWFibGVzXCI7XG5cbiRyZXBvcnQtdGl0bGUtZm9udHNpemUtbGlzdDogKFwieHNcIjogMXJlbSwgXCJzbVwiOiAxLjI1cmVtLCBcIm1kXCI6IDEuNXJlbSwgXCJsZ1wiOiAxLjc1cmVtLCBcInhsXCI6IDJyZW0pO1xuXG4ucmVwb3J0LWhlYWRlciB7XG4gIG1hcmdpbjogMnJlbSBhdXRvO1xuXG4gICZfX3RpdGxlLFxuICAmX19kZXNjcmlwdGlvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogJGNvbG9yLXRoZW1lO1xuXG4gICAgQGVhY2ggJG5hbWUsICR2YWx1ZSBpbiAkcmVwb3J0LXRpdGxlLWZvbnRzaXplLWxpc3Qge1xuICAgICAgJi0tI3skbmFtZX0ge1xuICAgICAgICBmb250LXNpemU6ICR2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19kZXNjcmlwdGlvbiB7XG4gICAgY29sb3I6ICRjb2xvci1ncmF5LWRhcmtlcjtcbiAgfVxufVxuXG5cbi5yZXBvcnQtc2VjdGlvbiB7XG5cbiAgJl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cblxuICAmX19zdWJ0aXRsZSB7XG4gICAgLy8gZm9udC1zaXplOiAxLjVyZW07XG4gICAgLy8gZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAvLyBjb2xvcjogJGNvbG9yLWdyYXktZGFya2VyO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICB9XG5cbiAgJl9fY29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIH1cbn1cbiIsIi50ZW1wbGF0ZS10aXRsZS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICYgPiAuZm9ybS1ncm91cCB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG4gIH1cblxuICAmX191dGlscyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgIH1cblxuICAgIC5mb3JtLWNhbmNlbCB7XG4gICAgICBmbGV4OiAxO1xuXG4gICAgICBidXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIGkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uL2Fic3RyYWN0cy92YXJpYWJsZXNcIjtcblxuLnVzZXJzLWhlYWRlciB7XG4gIC5hZGQtdXNlciB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgICYgPiAuZm9ybS1ncm91cCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgfVxuXG4gICAgJiA+IC5mb3JtLWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogY2FsYygjeyRsYXlvdXQtbWluLWZvcm0tY29udHJvbC1oZWlnaHQgLyAyfSk7XG4gICAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uL2Fic3RyYWN0cy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIuLi9hYnN0cmFjdHMvbWl4aW5zXCI7XG5cbi5jcmVhdGUtcmV0cm8ge1xuICBoZWlnaHQ6MTAwdmg7XG5cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIEBpbmNsdWRlIHJlc3BvbmQoJHRvLXRhYmxldC1wb3J0cmFpdCkge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmX19mb3JtIHtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XG4gICAgcGFkZGluZzogMi41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWF4LXdpZHRoOiA3NTBweDtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQoJHRvLXRhYmxldC1wb3J0cmFpdCkge1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSByZXNwb25kKCR0by1tb2JpbGUpIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uL2Fic3RyYWN0cy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIuLi9hYnN0cmFjdHMvbWl4aW5zXCI7XG5cbi5oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMik7XG4gIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG5cbiAgJl9fdXNlciAuYnRuLWRlZmF1bHQge1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkY29sb3ItZ3JheSwgLjUpO1xuXG4gICAgaSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICAgIH1cbiAgfVxuXG4gICZfX3RvZ2dsZS1zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZCgkdG8tdGFibGV0LWxhbmRzY2FwZSkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgJl9fbmF2aWdhdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgJl9fbmF2aWdhdGUtYmFjayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1ncmF5LCAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgaSB7XG4gICAgICBtYXJnaW4tbGVmdDogLS4zcmVtO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuICB9XG5cbn1cbiIsIkBpbXBvcnQgXCIuLi9hYnN0cmFjdHMvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vYWJzdHJhY3RzL21peGluc1wiO1xuXG4uc2lkZWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zaWRlYmFyLWJnO1xuXG4gICYuYWN0aXZlIHtcbiAgICBAaW5jbHVkZSByZXNwb25kKCR0by10YWJsZXQtbGFuZHNjYXBlKSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDE5cHggMzhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTVweCAxMnB4O1xuICAgIH1cbiAgfVxuXG4gICZfX2hlYWRlciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAuNXJlbSAkbGF5b3V0LWhvcml6b250YWwtcGFkZGluZztcblxuICAgICYtY29udGVudCB7XG4gICAgICAjaGlkZVNpZGViYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSByZXNwb25kKCR0by10YWJsZXQtbGFuZHNjYXBlKSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XG5cbiAgICAgICAgLnNpZGViYXJfX2xvZ28ge1xuICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB9XG5cbiAgICAgICAgI2hpZGVTaWRlYmFyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBjb2xvcjogJGNvbG9yLWdyYXktbGlnaHQ7XG5cbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci10aGVtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiBcbiAgfVxuXG5cbiAgJl9fbG9nbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGNhbGMoI3skbGF5b3V0LXZlcnRpY2FsLXBhZGRpbmd9ICsgLjI1cmVtKTtcbiAgICBtYXJnaW4tdG9wOiAzMXB4O1xuICB9XG5cbiAgJl9fY29udGVudCB7XG4gICAgY29sb3I6ICRjb2xvci1ncmF5LWxpZ2h0O1xuICB9XG5cbiAgJl9fbWVudSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuXG4gICAgJi1pdGVtIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJnO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIC5zaWRlYmFyX19tZW51LWl0ZW0tY29udGVudCB7XG4gICAgICAgICAgLy9jbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAwLCA5NSUgNTElLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAwKTtcbiAgICAgICAgICAvL3RyYW5zZm9ybTogdHJhbnNsYXRlWigwKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgLnNpZGViYXJfX21lbnUtaXRlbS1jb250ZW50IHtcbiAgICAgICAgICAvL2NsaXAtcGF0aDogcG9seWdvbigxMDAlIDAsIDk1JSA1MSUsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDApO1xuICAgICAgICAgIC8vdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApXG4gICAgICAgIH1cblxuICAgICAgICAuc2lkZWJhcl9fbWVudS1saW5rIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdGhlbWU7XG4gICAgICAgICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGkge1xuICAgICAgICAgIGNvbG9yOiAkY29sb3ItZ3JheS1saWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLWNvbnRlbnQge1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNpZGViYXItYmc7XG4gICAgICAgIHBhZGRpbmc6IDAgJGxheW91dC1ob3Jpem9udGFsLXBhZGRpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1pdGVtICsgJi1pdGVtIHtcbiAgICAgIG1hcmdpbi10b3A6IC43NXJlbTtcbiAgICB9XG5cbiAgICAmLWxpbmsge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGNvbG9yLXNpZGViYXItdGV4dC1zZWNvbmRlciwgLjIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogLjNyZW07XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICBpIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1zaWRlYmFyLXRleHQtc2Vjb25kZXI7XG4gICAgICAgIGZsZXg6IDAgMCAyLjI1cmVtO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgfVxuXG4gICAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9fcGFydGljaXBhbnRzIHtcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gICAgcGFkZGluZzogMCAkbGF5b3V0LWhvcml6b250YWwtcGFkZGluZztcbiAgfVxuXG4gICZfX3NlY3Rpb24tdGl0bGUge1xuICAgIGNvbG9yOiAkY29sb3Itc2lkZWJhci10ZXh0LXNlY29uZGVyO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXNpZGViYXItdGV4dC1zZWNvbmRlciwgLjgpO1xuICAgIH1cbiAgfVxuXG4gICZfX3BhcnRpY2lwYW50LWxpc3Qge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cblxuICAmX19wYXJ0aWNpcGFudC1saXN0LWl0ZW0ge1xuICAgIGltZy5hdmF0YXIge1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cblxuICAgIC5uYW1lIHtcbiAgICAgIGNvbG9yOiAkY29sb3ItZ3JheS1sZXNzLWxpZ2h0O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAmLXNob3J0IHtcblxuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNTU4MjA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/vendor/bootstrap/css/bootstrap.min.css":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/assets/vendor/bootstrap/css/bootstrap.min.css ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/assets/vendor/bootstrap/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./src/assets/vendor/bootstrap/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../../../node_modules/postcss-loader/src??embedded!./bootstrap.min.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/vendor/bootstrap/css/bootstrap.min.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!***********************************************************************************!*\
  !*** multi ./src/assets/vendor/bootstrap/css/bootstrap.min.css ./src/styles.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\projects\WorkshopProClient\src\assets\vendor\bootstrap\css\bootstrap.min.css */"./src/assets/vendor/bootstrap/css/bootstrap.min.css");
module.exports = __webpack_require__(/*! D:\projects\WorkshopProClient\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map