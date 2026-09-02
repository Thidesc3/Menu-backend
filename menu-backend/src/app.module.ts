import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigureModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
