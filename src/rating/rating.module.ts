import { Module } from '@nestjs/common';
import { RatingService } from './rating.service';
import { RatingController } from './rating.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingEntity } from './entities/rating.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RatingEntity])],
  providers: [RatingService],
  controllers: [RatingController],
})
export class RatingModule {}
