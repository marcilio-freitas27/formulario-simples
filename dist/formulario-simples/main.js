"use strict";
(self["webpackChunkformulario_simples"] = self["webpackChunkformulario_simples"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _cadastra_usuario_cadastra_usuario_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastra-usuario/cadastra-usuario.component */ 7840);
/* harmony import */ var _exibe_usuario_exibe_usuario_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exibe-usuario/exibe-usuario.component */ 9923);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);





const routes = [
    { path: "", component: _cadastra_usuario_cadastra_usuario_component__WEBPACK_IMPORTED_MODULE_0__.CadastraUsuarioComponent },
    { path: "listar", component: _exibe_usuario_exibe_usuario_component__WEBPACK_IMPORTED_MODULE_1__.ExibeUsuarioComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


class AppComponent {
    constructor() {
        this.title = 'formulario-simples';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3", "crossorigin", "anonymous"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _cadastra_usuario_cadastra_usuario_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastra-usuario/cadastra-usuario.component */ 7840);
/* harmony import */ var _exibe_usuario_exibe_usuario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exibe-usuario/exibe-usuario.component */ 9923);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _cadastra_usuario_cadastra_usuario_component__WEBPACK_IMPORTED_MODULE_2__.CadastraUsuarioComponent,
        _exibe_usuario_exibe_usuario_component__WEBPACK_IMPORTED_MODULE_3__.ExibeUsuarioComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 7840:
/*!****************************************************************!*\
  !*** ./src/app/cadastra-usuario/cadastra-usuario.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastraUsuarioComponent": () => (/* binding */ CadastraUsuarioComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _models_usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/usuario */ 530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _models_cadastro_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/cadastro.service */ 7014);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);






class CadastraUsuarioComponent {
    // nome: FormControl;
    // fone: FormControl;
    constructor(cadastroService, formBuilder) {
        this.cadastroService = cadastroService;
        this.formBuilder = formBuilder;
        this.usuario = new _models_usuario__WEBPACK_IMPORTED_MODULE_0__.Usuario('', '');
        this.formGroup = this.formBuilder.group({
            nome: [this.usuario.nome, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            fone: [this.usuario.telefone, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        });
    }
    ngOnInit() {
    }
    // onSubmit() {
    // TODO: Use EventEmitter with form value
    //   console.warn(this.formGroup.value);
    //   this.adicionar(this.formGroup.value['nome'],this.formGroup.value['fone']);
    // }
    adicionar(nome, numero) {
        const usuario = new _models_usuario__WEBPACK_IMPORTED_MODULE_0__.Usuario(nome, numero);
        this.cadastroService.adicionarUsuario(usuario);
        this.formGroup.reset();
    }
}
CadastraUsuarioComponent.ɵfac = function CadastraUsuarioComponent_Factory(t) { return new (t || CadastraUsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_models_cadastro_service__WEBPACK_IMPORTED_MODULE_1__.CadastroService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
CadastraUsuarioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CadastraUsuarioComponent, selectors: [["app-cadastra-usuario"]], decls: 19, vars: 2, consts: [[1, "nav", "navbar", "navbar-dark", "bg-dark"], [1, "navbar-brend"], [1, "nav-item"], ["routerLink", "/listar", 1, "nav-link", "active", "text-white"], ["role", "form", 3, "formGroup"], [1, "text-center", "m-3"], [1, "container"], [1, "form-group", "m-3"], ["for", "nome"], ["type", "text", "id", "nome", "name", "nome", "id", "", "formControlName", "nome", "placeholder", "Nome Sobrenome...", 1, "form-control"], ["for", "fone"], ["type", "text", "id", "fone", "name", "fone", "id", "", "formControlName", "fone", "placeholder", "(xx) xxxxx-xxxx", 1, "form-control"], [1, "m-3"], ["type", "submit", "value", "Cadastrar", 1, "btn", "btn-dark", 3, "disabled", "click"]], template: function CadastraUsuarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Lista de usu\u00E1rios");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Cadastro de usu\u00E1rios");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Telefone");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CadastraUsuarioComponent_Template_input_click_18_listener() { return ctx.adicionar(ctx.formGroup.value.nome, ctx.formGroup.value.fone); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.formGroup.valid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWRhc3RyYS11c3VhcmlvLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 9923:
/*!**********************************************************!*\
  !*** ./src/app/exibe-usuario/exibe-usuario.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExibeUsuarioComponent": () => (/* binding */ ExibeUsuarioComponent)
/* harmony export */ });
/* harmony import */ var _models_novousuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/novousuario */ 2319);
/* harmony import */ var _models_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/usuario */ 530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _models_cadastro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/cadastro.service */ 7014);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);







function ExibeUsuarioComponent_tbody_19_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExibeUsuarioComponent_tbody_19_Template_input_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const i_r5 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.excluir(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExibeUsuarioComponent_tbody_19_Template_input_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const usuario_r4 = restoredCtx.$implicit; const i_r5 = restoredCtx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.editar(usuario_r4.nome, usuario_r4.telefone, i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usuario_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](usuario_r4.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](usuario_r4.telefone);
} }
class ExibeUsuarioComponent {
    constructor(cadastroService) {
        this.cadastroService = cadastroService;
        this.lista = [];
        this.novo = [];
        this.count = 0;
    }
    ngOnInit() {
        this.lista = this.cadastroService.listarUsuario();
        this.novo = this.cadastroService.listarNovo();
    }
    excluir(count) {
        this.cadastroService.excluirUsuario(count);
    }
    editar(nome, numero, index) {
        const usuario = new _models_novousuario__WEBPACK_IMPORTED_MODULE_0__.Novousuario(nome, numero);
        this.cadastroService.editarUsuario(usuario, index);
        this.count = index;
    }
    atualizar(nome, numero, id, form) {
        const usuario = new _models_usuario__WEBPACK_IMPORTED_MODULE_1__.Usuario(nome, numero);
        this.cadastroService.atualizarUsuario(usuario, id);
        // for (const nv of this.novo) {
        //   this.count = this.novo.indexOf(nv);
        // }
        console.log(this.count);
        form.reset();
        // console.log(this.cadastroService.atualizarUsuario(usuario,id));
        //console.log("index: ",this.novo.indexOf(usuario));
    }
}
ExibeUsuarioComponent.ɵfac = function ExibeUsuarioComponent_Factory(t) { return new (t || ExibeUsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_models_cadastro_service__WEBPACK_IMPORTED_MODULE_2__.CadastroService)); };
ExibeUsuarioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ExibeUsuarioComponent, selectors: [["app-exibe-usuario"]], decls: 37, vars: 5, consts: [[1, "nav", "navbar", "navbar-dark", "bg-dark"], [1, "navbar-brend"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link", "active", "text-white"], [1, "text-center", "m-3"], [1, "container", "p-3"], [1, "table", "table-bordered", "table-hover", 3, "hidden"], [4, "ngFor", "ngForOf"], ["form", ""], [1, "container"], [1, "form-group", "m-3"], ["for", "nome2"], ["type", "text", "id", "nome2", "name", "nome2", "placeholder", "Nome Sobrenome...", 1, "form-control", 3, "value"], ["nome2", ""], ["for", "fone2"], ["type", "text", "id", "fone2", "name", "fone2", "placeholder", "(xx) xxxxx-xxxx", 1, "form-control", 3, "value"], ["fone2", ""], [1, "m-3"], ["type", "button", "value", "Atualizar", 1, "btn", "btn-success", 3, "disabled", "click"], ["type", "button", "value", "Excluir", 1, "btn", "btn-danger", 3, "click"], ["type", "button", "value", "Editar", 1, "btn", "btn-warning", 3, "click"]], template: function ExibeUsuarioComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Cadastro de usu\u00E1rios");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Lista de usu\u00E1rios");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Telefone");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Exclus\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Edi\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ExibeUsuarioComponent_tbody_19_Template, 10, 2, "tbody", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "form", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Edi\u00E7\u00E3o de usu\u00E1rios");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Telefone");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExibeUsuarioComponent_Template_input_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](29); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](34); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21); return ctx.atualizar(_r2.value, _r3.value, ctx.count, _r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.lista.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.lista);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.novo[ctx.count] == null ? null : ctx.novo[ctx.count].nome);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.novo[ctx.count] == null ? null : ctx.novo[ctx.count].telefone);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.novo.length == 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGliZS11c3VhcmlvLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 7014:
/*!********************************************!*\
  !*** ./src/app/models/cadastro.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroService": () => (/* binding */ CadastroService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class CadastroService {
    constructor() {
        this.user = [];
        this.new = [];
    }
    listarUsuario() {
        return this.user;
    }
    listarNovo() {
        return this.new;
    }
    adicionarUsuario(usuario) {
        this.user.push(usuario);
    }
    excluirUsuario(index) {
        this.user.splice(index, 1);
        this.new.splice(index, 1);
        if (this.user.length == 0) {
            this.new.length == 0;
        }
    }
    editarUsuario(novo, index) {
        //clicando em editar, adiciona os novos dados inseridos em usuario para novousuario
        this.new.push(novo);
        console.log(this.new.indexOf(novo));
    }
    atualizarUsuario(usuario, id) {
        this.user[id].nome = usuario.nome;
        this.user[id].telefone = usuario.telefone;
        console.log("index:", id, "nome:", this.user[id].nome, "fone:", this.user[id].telefone);
        this.new.splice(id, 1);
    }
    getIndex() {
        //
    }
}
CadastroService.ɵfac = function CadastroService_Factory(t) { return new (t || CadastroService)(); };
CadastroService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CadastroService, factory: CadastroService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2319:
/*!***************************************!*\
  !*** ./src/app/models/novousuario.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Novousuario": () => (/* binding */ Novousuario)
/* harmony export */ });
class Novousuario {
    constructor(nome, telefone) {
        this.nome = nome;
        this.telefone = telefone;
    }
}


/***/ }),

/***/ 530:
/*!***********************************!*\
  !*** ./src/app/models/usuario.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Usuario": () => (/* binding */ Usuario)
/* harmony export */ });
class Usuario {
    constructor(nome, telefone) {
        this.nome = nome;
        this.telefone = telefone;
    }
}


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map