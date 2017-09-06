webpackJsonp(["ingredients.module"],{

/***/ "../../../../../src/app/ingredients/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"o-form-wrapper c-list-data__row row row--no-margin\">\n    <div class=\"col-xs-12 col-sm-12\">\n        <form (ngSubmit)=\"onAddItem(form)\" #form=\"ngForm\">\n            <div class=\"row row--no-margin first-xs\">\n                <div class=\"col-xs-5 col-sm-8\">\n                    <label for=\"name\">Name</label>\n                    <input type=\"text\" name=\"name\" ngModel>\n                </div>\n                <div class=\"col-xs-2 col-sm-4\">\n                    <label for=\"amount\">Amount</label>\n                    <input type=\"number\" name=\"amount\" ngModel>\n                </div>\n            </div>\n            <div class=\"row first-xs buttons-container\">\n                <div class=\"col-xs-12\" style=\"margin-left: 2rem;\">\n                    <button class=\"c-button--add\" type=\"submit\">Add</button>\n                    <button class=\"c-button--delete\" type=\"button\">Delete</button>\n                    <button class=\"c-button--clear\" type=\"button\">Clear</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ingredients/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ingredients_service__ = __webpack_require__("../../../../../src/app/ingredients/ingredients.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = (function () {
    function EditComponent(ingrService) {
        this.ingrService = ingrService;
    }
    EditComponent.prototype.ngOnInit = function () { };
    EditComponent.prototype.onAddItem = function (form) {
        var value = form.value;
        var newIngredient = new __WEBPACK_IMPORTED_MODULE_1__shared_models__["a" /* Ingredient */](value.name, value.amount);
        this.ingrService.addIngredient(newIngredient);
    };
    return EditComponent;
}());
EditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__("../../../../../src/app/ingredients/edit/edit.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ingredients_service__["a" /* IngredientsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ingredients_service__["a" /* IngredientsService */]) === "function" && _a || Object])
], EditComponent);

var _a;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/ingredients/ingredients-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngredientsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ingredients_component__ = __webpack_require__("../../../../../src/app/ingredients/ingredients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_edit_component__ = __webpack_require__("../../../../../src/app/ingredients/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__ingredients_component__["a" /* IngredientsComponent */],
        children: [
            { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_1__edit_edit_component__["a" /* EditComponent */] }
        ]
    }
];
var IngredientsRoutingModule = (function () {
    function IngredientsRoutingModule() {
    }
    return IngredientsRoutingModule;
}());
IngredientsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */]]
    })
], IngredientsRoutingModule);

//# sourceMappingURL=ingredients-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/ingredients/ingredients.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"c-list-data__row row row--no-margin center-xs app-r\">\n    <div class=\"col-xs-12\">\n        <app-edit></app-edit>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12\">\n                <ul class=\"list-group\">\n                    <li>\n                        <a class=\"list-group-item\" *ngFor=\"let ingredient of ingredients\">\n                        {{ ingredient.name }} ({{ ingredient.amount }})</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ingredients/ingredients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngredientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ingredients_service__ = __webpack_require__("../../../../../src/app/ingredients/ingredients.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IngredientsComponent = (function () {
    function IngredientsComponent(ingrService) {
        this.ingrService = ingrService;
    }
    IngredientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingredients = this.ingrService.getIngredients();
        this.subscription = this.ingrService.ingredientsChanged
            .subscribe(function (ingredients) {
            _this.ingredients = ingredients;
        });
    };
    IngredientsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return IngredientsComponent;
}());
IngredientsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ingredients',
        template: __webpack_require__("../../../../../src/app/ingredients/ingredients.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ingredients_service__["a" /* IngredientsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ingredients_service__["a" /* IngredientsService */]) === "function" && _a || Object])
], IngredientsComponent);

var _a;
//# sourceMappingURL=ingredients.component.js.map

/***/ }),

/***/ "../../../../../src/app/ingredients/ingredients.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientsModule", function() { return IngredientsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ingredients_routing_module__ = __webpack_require__("../../../../../src/app/ingredients/ingredients-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ingredients_component__ = __webpack_require__("../../../../../src/app/ingredients/ingredients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_edit_component__ = __webpack_require__("../../../../../src/app/ingredients/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var IngredientsModule = (function () {
    function IngredientsModule() {
    }
    return IngredientsModule;
}());
IngredientsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__ingredients_routing_module__["a" /* IngredientsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__ingredients_component__["a" /* IngredientsComponent */],
            __WEBPACK_IMPORTED_MODULE_3__edit_edit_component__["a" /* EditComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__ingredients_component__["a" /* IngredientsComponent */]
        ],
        providers: []
    })
], IngredientsModule);

//# sourceMappingURL=ingredients.module.js.map

/***/ })

});
//# sourceMappingURL=ingredients.module.chunk.js.map