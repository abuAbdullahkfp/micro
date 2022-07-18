import {prop, getModelForClass, modelOptions} from '@typegoose/typegoose'


@modelOptions({
  schemaOptions: {
    timestamps: true,
    toJSON: {
      transform(doc: DocumentType, ret) {
        ret.id = ret._id
        delete ret._id
      }
    }
  }
})
class TicketModel {

  @prop({required: true, type: () => String})
  title: string;

  @prop({required: true, type: () => Number})
  price: number;

  @prop({required: true, type: () => String})
  userId: string

}

export const Ticket = getModelForClass(TicketModel)