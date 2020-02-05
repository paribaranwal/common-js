# Common-JS-Utilities

This is a utility to help devlelopers to reduce their effort in rewriting most of common JS functionalities which are often used in projects.

Some of the common useful JS functions are as below which can be used from this utility

isDefined
required
minLength
maxLength
isNumber
minValue
maxValue
pattern

This utility also has some basic functionalities to test some of the common form level validations on form fields in form of Form Validator.

# Usage of Common JS Utilities
  import { UtilMethods } from 'common-js-utilities';
  
  UtilMethods.isDefined('test')

# Usage of Common Form Field Validator
  import { FormValidator } from 'common-js-utilities'
  const validator = new FormValidator();
  const fieldConfig = {
    name: 'TestField',
    validators: [
      'required',
      'isDefined',
      'isNumber'
    ]
  };
  validator.validateField(fieldConfig, 23, false);
