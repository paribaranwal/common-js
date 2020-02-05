const UtilMethods = require('../utility-methods');
class FormValidator {
    constructor() {
    }
    validateField(fieldConfig, newValue, autoValidation) {
        var isValid = true;
        fieldConfig.invalid = [];
        if (fieldConfig.visible != false && fieldConfig.validators) {
            fieldConfig.validators.forEach((validator) => {
                if (validator && typeof UtilMethods[validator] === 'function') {
                    isValid = UtilMethods[validator](newValue, fieldConfig);
                    if (!isValid) {
                        fieldConfig.invalid.push(validator);
                    }
                }
            });
        }
        fieldConfig.valid = fieldConfig.invalid.length === 0;
        fieldConfig.touched = fieldConfig.visible != false && !autoValidation;
        this.touched = this.touched || fieldConfig.touched;
        this.fieldsValidity = this.fieldsValidity || {};
        this.fieldsValidity[fieldConfig.name] = fieldConfig.valid;
    }
    validateFormFields(formFields, autoValidating) {
        if (formFields && formFields.length > 0) {
            formFields.forEach((rowField) => {
                if (rowField.rowFields) {
                    this.validateFormFields(rowField.rowFields);
                    return;
                }
                else {
                    this.validateField(rowField, rowField.value, autoValidating);
                }
            });
            this.valid = Object.keys(this.fieldsValidity)
                .every((field) => {
                    return this.fieldsValidity[field];
                });
        }
    }
}

module.exports = FormValidator;