"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Lanza el framework al cargar la pagina
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const app_module_1 = require("./app.module");
const platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map