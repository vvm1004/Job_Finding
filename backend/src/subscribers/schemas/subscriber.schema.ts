import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';


export type SubcriberDocument = HydratedDocument<Subcriber>

@Schema({ timestamps: true })
export class Subcriber {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    skills: string[];

    @Prop({ type: Object })
    updatedBy: {
        _id: mongoose.Schema.Types.ObjectId,
        email: string
    }

    @Prop({ type: Object })
    createdBy: {
        _id: mongoose.Schema.Types.ObjectId,
        email: string
    }

    @Prop({ type: Object })
    deletedBy: {
        _id: mongoose.Schema.Types.ObjectId,
        email: string
    }
    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;
}

export const SubcriberSchema = SchemaFactory.createForClass(Subcriber);