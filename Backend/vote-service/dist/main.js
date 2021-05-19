"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
const microserviceOptions = {
    transport: microservices_1.Transport.REDIS,
    options: {
        url: 'redis://localhost:6379',
    }
};
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, microserviceOptions);
    app.listen(() => console.log('Vote microservice is started..'));
}
bootstrap();
//# sourceMappingURL=main.js.map