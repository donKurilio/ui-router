webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"panel panel-default\">\n    <todo-header\n      (onAdd)=\"addTodo($event)\"\n    ></todo-header>\n    <todo-list\n      [todos]=\"todosService.todos | todoListFilter: filter\"\n      (onDelete)=\"deleteTodo($event)\"\n      (onEdit)=\"updateTodo($event)\"\n    ></todo-list>\n    <todo-footer\n      *ngIf=\"todosService.todos.length\"\n      [uncompleted]=\"getUncompletedTodosAmount()\"\n      [completed]=\"getCompletedTodosAmount()\"\n      [currentFilter]=\"filter\"\n      (onFilter)=\"applyFilter($event)\"\n      (onToggleAll)=\"toggleAllTodo($event)\"\n      (onRemoveCompleted)=\"removeCompleted()\"\n    ></todo-footer>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100%;\n  width: 100%;\n  max-width: 768px;\n  padding: 15px;\n}\n.panel {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin: 0;\n  height: 100%;\n  max-height: 800px;\n  overflow: hidden;\n}\n.list-group {\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n  min-height: 42px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_todos_service__ = __webpack_require__("../../../../../src/app/services/todos.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(todosService) {
        this.todosService = todosService;
        this.filter = 'all';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.applyFilter = function (filter) {
        if (this.filter !== filter) {
            this.filter = filter;
        }
    };
    AppComponent.prototype.addTodo = function (todoText) {
        this.todosService.addTodo(todoText);
    };
    AppComponent.prototype.deleteTodo = function (todo) {
        this.todosService.deleteTodo(todo);
    };
    AppComponent.prototype.updateTodo = function (todo) {
        this.todosService.updateTodo(todo);
    };
    AppComponent.prototype.toggleAllTodo = function (complete) {
        this.todosService.toggleAll(complete);
    };
    AppComponent.prototype.removeCompleted = function () {
        this.todosService.removeCompleted();
    };
    AppComponent.prototype.getUncompletedTodosAmount = function () {
        return this.todosService.todos.filter(function (item) { return !item.completed; }).length;
    };
    AppComponent.prototype.getCompletedTodosAmount = function () {
        return this.todosService.todos.filter(function (item) { return item.completed; }).length;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_todos_service__["a" /* TodosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_todos_service__["a" /* TodosService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_todo_component__ = __webpack_require__("../../../../../src/app/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todo_list_todo_list_component__ = __webpack_require__("../../../../../src/app/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo_header_todo_header_component__ = __webpack_require__("../../../../../src/app/todo-header/todo-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todo_footer_todo_footer_component__ = __webpack_require__("../../../../../src/app/todo-footer/todo-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_todos_service__ = __webpack_require__("../../../../../src/app/services/todos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_todo_list_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/todo-list-filter.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__todo_todo_component__["a" /* TodoComponent */],
            __WEBPACK_IMPORTED_MODULE_4__todo_list_todo_list_component__["a" /* TodoListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__todo_header_todo_header_component__["a" /* TodoHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__todo_footer_todo_footer_component__["a" /* TodoFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pipes_todo_list_filter_pipe__["a" /* TodoListFilterPipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_todos_service__["a" /* TodosService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/model/todo.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid_v4__ = __webpack_require__("../../../../uuid/v4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uuid_v4__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });

var Todo = (function () {
    function Todo(text, completed) {
        if (completed === void 0) { completed = false; }
        this.text = text;
        this.completed = completed;
        this.id = __WEBPACK_IMPORTED_MODULE_0_uuid_v4___default()();
    }
    return Todo;
}());

//# sourceMappingURL=todo.model.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/todo-list-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TodoListFilterPipe = (function () {
    function TodoListFilterPipe() {
    }
    TodoListFilterPipe.prototype.transform = function (value, filter) {
        if (filter === void 0) { filter = 'all'; }
        console.log('pipe');
        if (filter === 'completed') {
            return value.filter(function (val) { return val.completed; });
        }
        else if (filter === 'active') {
            return value.filter(function (val) { return !val.completed; });
        }
        return value;
    };
    return TodoListFilterPipe;
}());
TodoListFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Pipe */])({
        name: 'todoListFilter'
    })
], TodoListFilterPipe);

//# sourceMappingURL=todo-list-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/todos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_todo_model__ = __webpack_require__("../../../../../src/app/model/todo.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosService; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TODO_LIST = [
    new __WEBPACK_IMPORTED_MODULE_1__model_todo_model__["a" /* Todo */]('tratata 1', false),
    new __WEBPACK_IMPORTED_MODULE_1__model_todo_model__["a" /* Todo */]('tratata 2', true),
    new __WEBPACK_IMPORTED_MODULE_1__model_todo_model__["a" /* Todo */]('tratata 3', false),
    new __WEBPACK_IMPORTED_MODULE_1__model_todo_model__["a" /* Todo */]('tratata 4', false),
    new __WEBPACK_IMPORTED_MODULE_1__model_todo_model__["a" /* Todo */]('tratata 5', false),
    new __WEBPACK_IMPORTED_MODULE_1__model_todo_model__["a" /* Todo */]('tratata 6', false),
    new __WEBPACK_IMPORTED_MODULE_1__model_todo_model__["a" /* Todo */]('tratata 7', false),
    new __WEBPACK_IMPORTED_MODULE_1__model_todo_model__["a" /* Todo */]('tratata 8', false),
];
var TodosService = (function () {
    function TodosService() {
        this.todos = TODO_LIST;
    }
    TodosService.prototype.addTodo = function (todoText) {
        this.todos = this.todos.concat(new __WEBPACK_IMPORTED_MODULE_1__model_todo_model__["a" /* Todo */](todoText));
    };
    TodosService.prototype.updateTodo = function (todo) {
        this.todos = this.todos.map(function (item) {
            return item.id === todo.id ? todo : item;
        });
    };
    TodosService.prototype.deleteTodo = function (todo) {
        this.todos = this.todos.filter(function (val) { return val.id !== todo.id; });
    };
    TodosService.prototype.toggleAll = function (complete) {
        this.todos = this.todos.map(function (val) {
            if (complete && !val.completed) {
                return __assign({}, val, { completed: true });
            }
            else if (!complete && val.completed) {
                return __assign({}, val, { completed: false });
            }
            return val;
        });
    };
    TodosService.prototype.removeCompleted = function () {
        this.todos = this.todos.filter(function (item) { return !item.completed; });
    };
    return TodosService;
}());
TodosService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TodosService);

//# sourceMappingURL=todos.service.js.map

/***/ }),

/***/ "../../../../../src/app/todo-footer/todo-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pull-left\">\n  <button class=\"btn btn-default btn-sm\" (click)=\"toggleAll()\" title=\"Toggle all\">\n    <i *ngIf=\"uncompleted > 0\" class=\"glyphicon glyphicon-ok\"></i>\n    <i *ngIf=\"uncompleted === 0\" class=\"glyphicon glyphicon-ban-circle\"></i>\n  </button>\n  Uncompleted: {{uncompleted}}\n</div>\n<div class=\"btn-group\">\n  <button class=\"btn btn-default btn-sm\" [ngClass]=\"{'active': currentFilter === filter.value}\" (click)=\"apply(filter.value)\" *ngFor=\"let filter of filters\">{{filter.title}}</button>\n</div>\n<button [disabled]=\"completed === 0\" class=\"btn btn-default btn-sm pull-right\" title=\"Remove completed\" (click)=\"removeCompleted()\"><i class=\"glyphicon glyphicon-trash\"></i></button>\n"

/***/ }),

/***/ "../../../../../src/app/todo-footer/todo-footer.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  text-align: center;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-footer/todo-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoFooterComponent = (function () {
    function TodoFooterComponent() {
        this.onFilter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onRemoveCompleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onToggleAll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.filters = [
            {
                title: 'All',
                value: 'all'
            },
            {
                title: 'Active',
                value: 'active'
            },
            {
                title: 'Completed',
                value: 'completed'
            }
        ];
    }
    TodoFooterComponent.prototype.ngOnInit = function () {
    };
    TodoFooterComponent.prototype.apply = function (filter) {
        this.onFilter.emit(filter);
    };
    TodoFooterComponent.prototype.removeCompleted = function () {
        this.onRemoveCompleted.emit();
    };
    TodoFooterComponent.prototype.toggleAll = function () {
        this.onToggleAll.emit(this.uncompleted > 0);
    };
    return TodoFooterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Output */])(),
    __metadata("design:type", Object)
], TodoFooterComponent.prototype, "onFilter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Output */])(),
    __metadata("design:type", Object)
], TodoFooterComponent.prototype, "onRemoveCompleted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Output */])(),
    __metadata("design:type", Object)
], TodoFooterComponent.prototype, "onToggleAll", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], TodoFooterComponent.prototype, "currentFilter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], TodoFooterComponent.prototype, "uncompleted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], TodoFooterComponent.prototype, "completed", void 0);
TodoFooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'todo-footer',
        template: __webpack_require__("../../../../../src/app/todo-footer/todo-footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-footer/todo-footer.component.less")],
        host: { 'class': 'panel-footer' },
    }),
    __metadata("design:paramtypes", [])
], TodoFooterComponent);

//# sourceMappingURL=todo-footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-header/todo-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\">\n  <input type=\"text\" class=\"form-control\" placeholder=\"I want to do...\" (keypress)=\"onKeyPress($event)\" [(ngModel)]=\"todoText\">\n  <span class=\"input-group-btn\">\n    <button class=\"btn btn-primary\" type=\"button\" (click)=\"addTodo()\">Add Todo</button>\n  </span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/todo-header/todo-header.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);\n  z-index: 3;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-header/todo-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoHeaderComponent = (function () {
    function TodoHeaderComponent() {
        this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.todoText = '';
    }
    TodoHeaderComponent.prototype.ngOnInit = function () {
    };
    TodoHeaderComponent.prototype.addTodo = function () {
        this.todoText = this.todoText.trim();
        if (this.todoText.length) {
            this.onAdd.emit(this.todoText);
            this.todoText = '';
        }
    };
    TodoHeaderComponent.prototype.onKeyPress = function (event) {
        if (event.keyCode === 13) {
            this.addTodo();
        }
    };
    return TodoHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Output */])(),
    __metadata("design:type", Object)
], TodoHeaderComponent.prototype, "onAdd", void 0);
TodoHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'todo-header',
        template: __webpack_require__("../../../../../src/app/todo-header/todo-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-header/todo-header.component.less")],
        host: { 'class': 'panel-heading' }
    }),
    __metadata("design:paramtypes", [])
], TodoHeaderComponent);

//# sourceMappingURL=todo-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<todo\n  *ngFor=\"let todo of todos\"\n  [todo]=\"todo\"\n  [disabledEditing]=\"currentEditingTodo ? todo.id !== currentEditingTodo.id : false\"\n  (onDelete)=\"onDeleteTodo($event)\"\n  (onEdit)=\"onEditTodo($event)\"\n  (onToggleEditing)=\"toggleEditingTodo($event)\"\n></todo>\n<div class=\"list-group-item\" *ngIf=\"!todos.length\">There is no todos</div>\n"

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_todo_component__ = __webpack_require__("../../../../../src/app/todo/todo.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoListComponent = (function () {
    function TodoListComponent(el) {
        this.el = el;
        this.onDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    TodoListComponent.prototype.onResize = function (event) {
        var _this = this;
        if (this.currentEditingTodo) {
            var todoElement = this.todoComponents.find(function (comp) { return comp.todo.id === _this.currentEditingTodo.id; }).el.nativeElement, todoListElement = this.el.nativeElement, todoOffsetTop = todoElement.offsetTop, todoOffsetHeight = todoElement.offsetHeight, todoListScrollTop = todoListElement.scrollTop, todoListHeight = todoListElement.offsetHeight, newScrollTop = todoOffsetTop - (todoListHeight / 2) + (todoOffsetHeight / 2);
            if (todoListScrollTop > todoOffsetTop) {
                todoListElement.scrollTop = newScrollTop;
            }
            else if (todoListScrollTop + todoListHeight < todoOffsetTop + todoOffsetHeight) {
                todoListElement.scrollTop = newScrollTop;
            }
        }
    };
    TodoListComponent.prototype.onDeleteTodo = function (todo) {
        this.onDelete.emit(todo);
    };
    TodoListComponent.prototype.onEditTodo = function (todo) {
        this.onEdit.emit(todo);
    };
    TodoListComponent.prototype.toggleEditingTodo = function (todo) {
        this.currentEditingTodo = todo ? todo : null;
    };
    return TodoListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Array)
], TodoListComponent.prototype, "todos", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Output */])(),
    __metadata("design:type", Object)
], TodoListComponent.prototype, "onDelete", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Output */])(),
    __metadata("design:type", Object)
], TodoListComponent.prototype, "onEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1__todo_todo_component__["a" /* TodoComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* QueryList */]) === "function" && _a || Object)
], TodoListComponent.prototype, "todoComponents", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TodoListComponent.prototype, "onResize", null);
TodoListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'todo-list',
        template: __webpack_require__("../../../../../src/app/todo-list/todo-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo-list/todo-list.component.less")],
        host: { 'class': 'list-group' },
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */]) === "function" && _b || Object])
], TodoListComponent);

var _a, _b;
//# sourceMappingURL=todo-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"todo-toggle\">\n  <input type=\"checkbox\" [checked]=\"todo.completed\" (click)=\"toggleTodo()\">\n</div>\n<div class=\"todo-title\" [ngClass]=\"{'completed': todo.completed, 'editing': isEditing}\" (dblclick)=\"startEditingTodo()\">\n  <span *ngIf=\"!isEditing\">{{todo.text}}</span>\n  <input type=\"text\" class=\"form-control input-sm\" *ngIf=\"isEditing\" #todoitem (keypress)=\"onKeypress($event)\" (keyup.escape)=\"cancelEditingTodo()\" [value]=\"todo.text\"\n  >\n</div>\n<div class=\"todo-buttons\">\n  <div class=\"btn-group\">\n    <button *ngIf=\"isEditing\" (click)=\"updateTodo()\" class=\"btn btn-success btn-sm\"><i class=\"glyphicon glyphicon-ok\"></i></button>\n    <button *ngIf=\"!isEditing\" class=\"btn btn-default btn-sm\" [disabled]=\"this.disabledEditing\" (click)=\"startEditingTodo()\">\n      <i class=\"glyphicon glyphicon-cog\"></i>\n    </button>\n    <button *ngIf=\"isEditing\" class=\"btn btn-default btn-sm\" (click)=\"cancelEditingTodo()\">\n      <i class=\"glyphicon glyphicon-ban-circle\"></i>\n    </button>\n  </div>\n  <button class=\"btn btn-danger btn-sm\" (click)=\"deleteTodo()\"><i class=\"glyphicon glyphicon-trash\"></i></button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 6px 12px;\n  width: 100%;\n}\n.todo-toggle {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 40px;\n  text-align: center;\n}\n.todo-toggle input {\n  cursor: pointer;\n  /*width: 20px;\n    height: 20px;*/\n  margin: 0;\n}\n.todo-buttons {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.todo-title {\n  padding: 5px 12px;\n  width: 100%;\n}\n.todo-title.completed {\n  text-decoration: line-through;\n  color: #c9c9c9;\n}\n.todo-title.editing {\n  padding-top: 0;\n  padding-bottom: 0;\n  text-decoration: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_todo_model__ = __webpack_require__("../../../../../src/app/model/todo.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoComponent = (function () {
    function TodoComponent(el) {
        this.el = el;
        this.onEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
        this.onToggleEditing = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    TodoComponent.prototype.startEditingTodo = function () {
        var _this = this;
        if (!this.disabledEditing) {
            this.isEditing = true;
            this.onToggleEditing.emit(this.todo);
            // sorry for this hack :(
            setTimeout(function () { return _this.todoItem.nativeElement.focus(); });
        }
    };
    TodoComponent.prototype.cancelEditingTodo = function () {
        this.isEditing = false;
        this.onToggleEditing.emit();
        this.todoItem.nativeElement.value = this.todo.text;
    };
    TodoComponent.prototype.updateTodo = function () {
        this.isEditing = false;
        this.onToggleEditing.emit();
        var newTodo = __assign({}, this.todo);
        newTodo.text = this.todoItem.nativeElement.value;
        this.onEdit.emit(newTodo);
    };
    TodoComponent.prototype.toggleTodo = function () {
        var updated = __assign({}, this.todo);
        updated.completed = !updated.completed;
        this.onEdit.emit(updated);
    };
    TodoComponent.prototype.deleteTodo = function () {
        this.onDelete.emit(this.todo);
    };
    TodoComponent.prototype.onKeypress = function (event) {
        if (event.keyCode === 13) {
            this.updateTodo();
        }
    };
    return TodoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('todoitem'),
    __metadata("design:type", Object)
], TodoComponent.prototype, "todoItem", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_todo_model__["a" /* Todo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_todo_model__["a" /* Todo */]) === "function" && _a || Object)
], TodoComponent.prototype, "todo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], TodoComponent.prototype, "disabledEditing", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Output */])(),
    __metadata("design:type", Object)
], TodoComponent.prototype, "onEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Output */])(),
    __metadata("design:type", Object)
], TodoComponent.prototype, "onDelete", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Output */])(),
    __metadata("design:type", Object)
], TodoComponent.prototype, "onToggleEditing", void 0);
TodoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'todo',
        template: __webpack_require__("../../../../../src/app/todo/todo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/todo/todo.component.less")],
        host: { 'class': 'list-group-item' },
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */]) === "function" && _b || Object])
], TodoComponent);

var _a, _b;
//# sourceMappingURL=todo.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map