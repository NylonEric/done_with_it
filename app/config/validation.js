import * as Yup from 'yup';

export const validationSchemaRegister = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

export const validationSchemaListing = Yup.object().shape({
  title: Yup.string().required(). min(1).label("Title"),
  price: Yup.number().required().min(0.01).max(1000000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});
