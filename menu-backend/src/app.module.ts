import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigureModule.forRoot({ isGlobal: true }),
    typeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
