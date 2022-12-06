import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';

const MONGO_MODELS = MongooseModule.forFeature([
  {
    name: "USER_MODEL",
    schema: UserSchema,
    collection: "user"
  }
])

@Global()
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost:27017/my-shop',
      // {
      //   useNewUrlParser: true,
      //   useUnifiedTopogy: true,
      //   useCreateIndex: true,
      //   useFindAndModifty: false
      // }
    ),
    MONGO_MODELS
  ],
  exports: [MONGO_MODELS]
})
export class DbModule {
}
