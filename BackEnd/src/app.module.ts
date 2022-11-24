/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SharedModule } from './api/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { GLOBAL } from './utils';

@Module({
    imports: [
        SharedModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: GLOBAL.G_DB_HOST,
            port: GLOBAL.G_DB_PORT,
            username: GLOBAL.G_DB_USERNAME,
            password: GLOBAL.G_DB_PASSWORD,
            database: GLOBAL.G_DB_NAME,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
            autoLoadEntities: true,
            // ssl: {
            //   rejectUnauthorized: false,
            // },
        }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'uploads'),
        }),
    ],

    controllers: [],
    providers: [],
})
export class AppModule {}
