function isDefined(value) {
    return value !== undefined && value !== null && value.toString().trim() !== '';
}
function required(value) {
    return this.isDefined(value);
}
function minLength(value, fieldConfig) {
    const validMinLengthToCheck = fieldConfig ? (fieldConfig.minLength || 0) : 0;
    return this.isDefined(value) && typeof value != 'object' &&
        (value + "").toString().length >= validMinLengthToCheck;
}
function maxLength(value, fieldConfig) {
    const validMaxLengthToCheck = fieldConfig ? (fieldConfig.maxLength || 9999) : 9999;
    return this.isDefined(value) && typeof value != 'object' &&
        (value + "").toString().length <= validMaxLengthToCheck;
}
function isNumber(value) {
    return this.isDefined(value) && (value === 0 || /^-?\d*\.?\d+$/.test(value));
}
function minValue(value, fieldConfig) {
    if (fieldConfig && fieldConfig.minValue) {
        return this.isDefined(value) && this.isNumber(value) && parseInt(value) >= fieldConfig.minValue;
    }
    return this.isDefined(value) && this.isNumber(value);
}
function maxValue(value, fieldConfig) {
    if (fieldConfig && fieldConfig.maxValue) {
        return this.isDefined(value) && this.isNumber(value) && parseInt(value) <= fieldConfig.maxValue;
    }
    return this.isDefined(value) && this.isNumber(value);
}
function pattern(value, fieldConfig) {
    return !fieldConfig || !fieldConfig.pattern || fieldConfig.pattern.test(value);
}

module.exports = {
    isDefined,
    required,
    minLength,
    maxLength,
    isNumber,
    minValue,
    maxValue,
    pattern
};