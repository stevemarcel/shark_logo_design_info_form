import mongoose from 'mongoose';
import mongooseTypePhone from 'mongoose-type-phone';

const formSchema = mongoose.Schema(
  {
    enterpriseName: {
      type: string,
      required: true,
    },
    logoSlogan: {
      type: string,
      required: true,
    },
    services: {
      type: string,
      required: true,
    },
    address: {
      type: string,
      required: true,
    },
    email: {
      type: string,
      required: true,
    },
    tel: {
      type: mongoose.SchemaTypes.Phone,
      required: true,
    },
    whatsapp: {
      type: mongoose.SchemaTypes.Phone,
      required: true,
    },
    instagram: {
      type: string,
      required: true,
    },
    facebook: {
      type: string,
      required: true,
    },
    twitter: {
      type: string,
      required: true,
    },
    otherSocialMedia: {
      type: string,
      required: true,
    },
    colour: {
      type: string,
      required: true,
    },
    logoType: {
      type: string,
      required: true,
    },
    ownerName: {
      type: string,
      required: true,
    },
    ownerWhatsappTel: {
      type: mongoose.SchemaTypes.Phone,
      required: true,
    },
    ownerFbk: {
      type: string,
      required: true,
    },
    ownerIg: {
      type: string,
      required: true,
    },
    ownerTwitter: {
      type: string,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const form = mongoose.model('form', formSchema);

export default form;
