import { Component,OnInit } from '@angular/core';
import {AutoService} from '../services/auto.service';
import {Auto} from '../models/auto'

@Component({
    selector: 'autos',
    templateUrl:'app/views/autos.html',
    providers:[AutoService]
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
export class AutosComponent implements OnInit{
    public titulo:string;
    public errorMessage;
    public autos: Auto[];
    constructor(
        private _autoService:AutoService
    ){
        this.titulo = "Autos Maravilla"
    }

     ngOnInit(){
    this._autoService.getAutos().subscribe(
        result=>{
            this.autos = result.autos;
            if(!this.autos){
                alert("Error en el servidor")
            }
        },
        error=>{
            this.errorMessage = <any>error;
            if(this.errorMessage!=null){
                alert("Error en la peticion")
            }
        });
    }
}