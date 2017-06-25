"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
// Importamos el componente inicial 
const autos_component_1 = require("./components/autos.component");
// Importamos el componente para visualizar un registro
const autos_ver_component_1 = require("./components/autos-ver.component");
const appRoutes = [
    { path: '', component: autos_component_1.AutosComponent },
    { path: 'auto/:id', component: autos_ver_component_1.AutosVerComponent },
    { path: '**', component: autos_component_1.AutosComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map