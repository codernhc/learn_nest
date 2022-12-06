"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const listenPost = 3000;
const logger = new common_1.Logger('main.ts');
const bootstrap = async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('shop项目管理平台')
        .setDescription('shop平台API Documentation')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(listenPost);
};
bootstrap().then(() => {
    logger.log(`listen in http://localhost:${listenPost}/api`);
});
//# sourceMappingURL=main.js.map