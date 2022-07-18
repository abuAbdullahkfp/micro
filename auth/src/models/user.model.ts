import { prop, modelOptions, getModelForClass, pre } from "@typegoose/typegoose";
import argon2 from 'argon2'


@modelOptions({
  schemaOptions: {
    timestamps: true,
    toJSON: {
      transform: (doc: DocumentType, ret) => {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        delete ret.password
      },
    },
  },
})
@pre<UserModel>("save", async function() {
  if (this.isModified('password')) {
    this.password = await argon2.hash(this.password)
    return 
  }
  return 
})
class UserModel {
  @prop({ required: true, lowercase: true, unique: true })
  email: string;
 
  @prop({ required: true, minlength: 6, maxlength: 20 })
  password: string;

  async findByCredentials(givenPassword: string) {
      return await argon2.verify(this.password, givenPassword)
  }
}


const User = getModelForClass(UserModel)

export default User
