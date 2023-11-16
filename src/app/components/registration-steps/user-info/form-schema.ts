import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import isEmailValidator from 'validator/lib/isEmail';
import isMobilePhoneValidator from 'validator/lib/isMobilePhone';
import isStrongPasswordValidator from 'validator/lib/isStrongPassword';

const schema = yup
  .object()
  .shape({
    firstName: yup.string().required('First Name is Required'),
    lastName: yup.string().required('Last Name is Required'),
    creatorName: yup.string().required('Creator Name is Required'),
    email: yup.string().required('Email is Required').test("is-valid", (message) => `${message.path} is invalid`, (value) => value ? isEmailValidator(value) : new yup.ValidationError("Invalid value")),
    phone: yup.string().required('Phone is Required').test("is-valid", (message) => `${message.path} is invalid. Please enter valid US number.`, (value) => value ? isMobilePhoneValidator(value, ['en-US']) : new yup.ValidationError("Invalid value")),
    password: yup.string().required('Password is Required').test("is-strong", (message) => `${message.path} is not strong enough. Please have at least 1 uppercase, 1 lowercase, 1 number, 1 symbol and minimum 8 characters.`, (value) => value ? isStrongPasswordValidator(value) : new yup.ValidationError("Invalid value")),
    confirmPassword: yup.string()
    .oneOf([yup.ref('password'), ''], 'Passwords must match'),
    terms: yup.bool().oneOf([true], 'Terms must be checked'),
  })
  .required()

export const resolver = yupResolver(schema);