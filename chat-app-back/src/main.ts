import { NestFactory } from "@nestjs/core";
import * as cors from "cors";
import { AppModule } from "./modules/app/app.module";
import { ValidationPipe } from "@nestjs/common";
import { SocketIoAdapter } from "./adapters/socketio.adapter";

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.useWebSocketAdapter(new SocketIoAdapter(app, true));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(PORT);
}
bootstrap();
