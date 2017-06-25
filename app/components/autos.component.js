"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const auto_service_1 = require("../services/auto.service");
let AutosComponent = 
/*export class AutosComponent {
    public marca: string;
    public modelo: string;
    public anio: number;

    public marcas: Array<string>;
    public esVisible: boolean;

    constructor(){
        this.marca = "Nissan"
        this.modelo = "Skyline"
        this.anio = 2012
        this.marcas = ['Honda', 'Toyota', 'Mazda', 'Nissan']
        this.esVisible = false;
    }

    public muestraMarcas(){
        this.esVisible = true;
    }

    public escondeMarcas(){
        this.esVisible = false;

   
}
*/
class AutosComponent {
    constructor(_autoService) {
        this._autoService = _autoService;
        this.titulo = "Autos Maravilla";
    }
    ngOnInit() {
        this._autoService.getAutos().subscribe(result => {
            this.autos = result.autos;
            if (!this.autos) {
                alert("Error en el servidor");
            }
        }, error => {
            this.errorMessage = error;
            if (this.errorMessage != null) {
                alert("Error en la peticion");
            }
        });
    }
};
AutosComponent = __decorate([
    core_1.Component({
        selector: 'autos',
        templateUrl: 'app/views/autos.html',
        providers: [auto_service_1.AutoService]
    })
    /*export class AutosComponent {
        public marca: string;
        public modelo: string;
        public anio: number;
    
        public marcas: Array<string>;
        public esVisible: boolean;
    
        constructor(){
            this.marca = "Nissan"
            this.modelo = "Skyline"
            this.anio = 2012
            this.marcas = ['Honda', 'Toyota', 'Mazda', 'Nissan']
            this.esVisible = false;
        }
    
        public muestraMarcas(){
            this.esVisible = true;
        }
    
        public escondeMarcas(){
            this.esVisible = false;
    
       
    }
    */
    ,
    __metadata("design:paramtypes", [auto_service_1.AutoService])
], AutosComponent);
exports.AutosComponent = AutosComponent;
//# sourceMappingURL=autos.component.js.map