let FormValidator = require('./simple-form-fields-validator');
const { FormFieldValidators } = require('../../index');
describe('Simple Form Validator', () => {
    let validator;
    beforeAll(() => {
        validator = new FormValidator();
    });

    afterEach(() => {
        delete validator.touched;
        delete validator.fieldValidity;
    });

    afterAll(() => {
        validator = undefined;
    });

    describe('Validation Single Field', () => {
        describe('Visible Field', () => {
            describe('Field Has Some Invalid Validators', () => {
                it('Should validate valid value since there are no valid validators in field config ', () => {
                    const fieldConfig = {
                        name: 'TestField',
                        validators: [
                            'AnyValidator'
                        ]
                    };
                    validator.validateField(fieldConfig, 23, false);
                    expect(fieldConfig.valid).toBe(true);
                    expect(fieldConfig.touched).toBe(true);
                    expect(validator.touched).toBe(true);
                    expect(validator.fieldsValidity[fieldConfig.name]).toBe(true);
                });
            });

            describe('Field Has Some Valid Validators', () => {
                it('Should validate valid value against all validators in field config ', () => {
                    const fieldConfig = {
                        minValue: 40,
                        validators: [
                            FormFieldValidators.required,
                            FormFieldValidators.minValue
                        ]
                    };
                    validator.validateField(fieldConfig, 43, false);
                    expect(fieldConfig.valid).toBe(true);
                    expect(fieldConfig.touched).toBe(true);
                    expect(validator.touched).toBe(true);
                    expect(validator.fieldsValidity[fieldConfig.name]).toBe(true);
                });

                it('Should invalidate invalid value against all validators in field config ', () => {
                    const fieldConfig = {
                        validators: [
                            FormFieldValidators.required
                        ]
                    };
                    validator.validateField(fieldConfig, undefined, false);
                    expect(fieldConfig.valid).toBe(false);
                    expect(fieldConfig.touched).toBe(true);
                    expect(validator.touched).toBe(true);
                    expect(validator.fieldsValidity[fieldConfig.name]).toBe(false);
                });
            });
        });

        describe('Hidden Field', () => {
            describe('Field Has Some Validators', () => {
                it('Should validate any value to true irrespective of having validators ', () => {
                    const fieldConfig = {
                        visible: false,
                        validators: [
                            FormFieldValidators.required
                        ]
                    };
                    validator.validateField(fieldConfig, undefined, false);
                    expect(fieldConfig.valid).toBe(true);
                    expect(fieldConfig.touched).toBe(false);
                    expect(validator.touched).toBe(false);
                    expect(validator.fieldsValidity[fieldConfig.name]).toBe(true);
                });
            });
        });
    });
});