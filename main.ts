import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Dynamic Form')
    .setDescription('Dynamic B')
    .setVersion('1.0')
    .addTag('nani')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);

  await app.listen( process.env.PORT || 5555);
}
bootstrap();