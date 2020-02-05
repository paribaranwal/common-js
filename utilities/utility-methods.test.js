const { UtilMethods } = require('../index');

describe('Common Utilities Methods', () => {
    describe('check isDefined', () => {
        it('Should return false for \'null\' value', () => {
            expect(UtilMethods.isDefined(null)).toBe(false);
        });

        it('Should return false for \'undefined\' value', () => {
            expect(UtilMethods.isDefined(undefined)).toBe(false);
        });

        it('Should return false for empty string value', () => {
            expect(UtilMethods.isDefined('')).toBe(false);
        });

        it('Should return false for only whitespace string value', () => {
            expect(UtilMethods.isDefined('    ')).toBe(false);
        });

        it('Should return true for any valid string value', () => {
            expect(UtilMethods.isDefined('test')).toBe(true);
        });

        it('Should return true for integer value 0', () => {
            expect(UtilMethods.isDefined(0)).toBe(true);
        });

        it('Should return true for -ve integer value', () => {
            expect(UtilMethods.isDefined(-88)).toBe(true);
        });

        it('Should return true for +ve integer value', () => {
            expect(UtilMethods.isDefined(89)).toBe(true);
        });

        it('Should return true for any object value', () => {
            expect(UtilMethods.isDefined({})).toBe(true);
        });
    });

    describe('check required', () => {
        it('Should return false for \'null\' value', () => {
            expect(UtilMethods.required(null)).toBe(false);
        });

        it('Should return false for \'undefined\' value', () => {
            expect(UtilMethods.required(undefined)).toBe(false);
        });

        it('Should return false for empty string value', () => {
            expect(UtilMethods.required('')).toBe(false);
        });

        it('Should return false for only whitespace string value', () => {
            expect(UtilMethods.required('    ')).toBe(false);
        });

        it('Should return true for any valid string value', () => {
            expect(UtilMethods.required('test')).toBe(true);
        });

        it('Should return true for integer value 0', () => {
            expect(UtilMethods.required(0)).toBe(true);
        });

        it('Should return true for -ve integer value', () => {
            expect(UtilMethods.required(-78)).toBe(true);
        });

        it('Should return true for +ve integer value', () => {
            expect(UtilMethods.required(78)).toBe(true);
        });

        it('Should return true for any object value', () => {
            expect(UtilMethods.required({})).toBe(true);
        });
    });

    describe('Check Length', () => {
        describe('Check Min Length', () => {
            describe('check minLength without any minLength config', () => {
                it('Should return false for \'null\' value', () => {
                    expect(UtilMethods.minLength(null)).toBe(false);
                });
        
                it('Should return false for \'undefined\' value', () => {
                    expect(UtilMethods.minLength(undefined)).toBe(false);
                });
        
                it('Should return false for empty string value', () => {
                    expect(UtilMethods.minLength('')).toBe(false);
                });
        
                it('Should return false for only whitespace string value', () => {
                    expect(UtilMethods.minLength('    ')).toBe(false);
                });
        
                it('Should return true for any valid string value', () => {
                    expect(UtilMethods.minLength('test')).toBe(true);
                });
        
                it('Should return true for integer value 0', () => {
                    expect(UtilMethods.minLength(0)).toBe(true);
                });
        
                it('Should return true for -ve integer value', () => {
                    expect(UtilMethods.minLength(-6)).toBe(true);
                });
        
                it('Should return true for +ve integer value', () => {
                    expect(UtilMethods.minLength(7)).toBe(true);
                });
        
                it('Should return false for any object value', () => {
                    expect(UtilMethods.minLength({})).toBe(false);
                });
            });
        
            describe('check minLength with given minLength config', () => {
                it('Should return false for \'null\' value', () => {
                    expect(UtilMethods.minLength(null, { minLength: 5 })).toBe(false);
                });
        
                it('Should return false for \'undefined\' value', () => {
                    expect(UtilMethods.minLength(undefined, { minLength: 5 })).toBe(false);
                });
        
                it('Should return false for empty string value', () => {
                    expect(UtilMethods.minLength('', { minLength: 5 })).toBe(false);
                });
        
                it('Should return false for only whitespace string value', () => {
                    expect(UtilMethods.minLength('    ', { minLength: 5 })).toBe(false);
                });
        
                it('Should return false for any valid string value having length less than the given', () => {
                    expect(UtilMethods.minLength('test', { minLength: 5 })).toBe(false);
                });

                it('Should return true for any valid string value having length greater than the given', () => {
                    expect(UtilMethods.minLength('test', { minLength: 1 })).toBe(true);
                });
        
                it('Should return true for integer value 0', () => {
                    expect(UtilMethods.minLength(0, { minLength: 5 })).toBe(false);
                });
        
                it('Should return true for -ve integer value', () => {
                    expect(UtilMethods.minLength(-6, { minLength: 5 })).toBe(false);
                });
        
                it('Should return true for +ve integer value', () => {
                    expect(UtilMethods.minLength(7, { minLength: 5 })).toBe(false);
                });
        
                it('Should return false for any object value', () => {
                    expect(UtilMethods.minLength({}, { minLength: 5 })).toBe(false);
                });
            });
        });

        describe('Check Max Length', () => {
            describe('check maxLength without any maxLength config', () => {
                it('Should return false for \'null\' value', () => {
                    expect(UtilMethods.maxLength(null)).toBe(false);
                });
        
                it('Should return false for \'undefined\' value', () => {
                    expect(UtilMethods.maxLength(undefined)).toBe(false);
                });
        
                it('Should return false for empty string value', () => {
                    expect(UtilMethods.maxLength('')).toBe(false);
                });
        
                it('Should return false for only whitespace string value', () => {
                    expect(UtilMethods.maxLength('    ')).toBe(false);
                });
        
                it('Should return true for any valid string value', () => {
                    expect(UtilMethods.maxLength('test')).toBe(true);
                });
        
                it('Should return true for integer value 0', () => {
                    expect(UtilMethods.maxLength(0)).toBe(true);
                });
        
                it('Should return true for -ve integer value', () => {
                    expect(UtilMethods.maxLength(-6)).toBe(true);
                });
        
                it('Should return true for +ve integer value', () => {
                    expect(UtilMethods.maxLength(7)).toBe(true);
                });
        
                it('Should return false for any object value', () => {
                    expect(UtilMethods.maxLength({})).toBe(false);
                });
            });
        
            describe('check maxLength with given maxLength config', () => {
                it('Should return false for \'null\' value', () => {
                    expect(UtilMethods.maxLength(null, { maxLength: 5 })).toBe(false);
                });
        
                it('Should return false for \'undefined\' value', () => {
                    expect(UtilMethods.maxLength(undefined, { maxLength: 5 })).toBe(false);
                });
        
                it('Should return false for empty string value', () => {
                    expect(UtilMethods.maxLength('', { maxLength: 5 })).toBe(false);
                });
        
                it('Should return false for only whitespace string value', () => {
                    expect(UtilMethods.maxLength('    ', { maxLength: 5 })).toBe(false);
                });
        
                it('Should return false for any valid string value having length greater than the given', () => {
                    expect(UtilMethods.maxLength('test and run', { maxLength: 5 })).toBe(false);
                });

                it('Should return true for any valid string value having length less than the given', () => {
                    expect(UtilMethods.maxLength('test and run', { maxLength: 50 })).toBe(true);
                });
        
                it('Should return true for integer value 0', () => {
                    expect(UtilMethods.maxLength(0, { maxLength: 5 })).toBe(true);
                });
        
                it('Should return true for -ve integer value', () => {
                    expect(UtilMethods.maxLength(-6, { maxLength: 5 })).toBe(true);
                });
        
                it('Should return true for +ve integer value', () => {
                    expect(UtilMethods.maxLength(7, { maxLength: 5 })).toBe(true);
                });
        
                it('Should return false for any object value', () => {
                    expect(UtilMethods.maxLength({}, { maxLength: 5 })).toBe(false);
                });
            });
        });
    });
    
    describe('isNumber', () => {
        it('Should return false for \'null\' value', () => {
            expect(UtilMethods.isNumber(null)).toBe(false);
        });

        it('Should return false for \'undefined\' value', () => {
            expect(UtilMethods.isNumber(undefined)).toBe(false);
        });

        it('Should return false for empty string value', () => {
            expect(UtilMethods.isNumber('')).toBe(false);
        });

        it('Should return false for only whitespace string value', () => {
            expect(UtilMethods.isNumber('    ')).toBe(false);
        });

        it('Should return false for any valid string value', () => {
            expect(UtilMethods.isNumber('test and run')).toBe(false);
        });

        it('Should return true for integer value 0', () => {
            expect(UtilMethods.isNumber(0)).toBe(true);
        });

        it('Should return true for -ve integer value', () => {
            expect(UtilMethods.isNumber(-6)).toBe(true);
        });

        it('Should return true for +ve integer value', () => {
            expect(UtilMethods.isNumber(7)).toBe(true);
        });

        it('Should return false for any object value', () => {
            expect(UtilMethods.isNumber({})).toBe(false);
        });

        it('Should return false for alphanumeric value starting from digits', () => {
            expect(UtilMethods.isNumber('9pop')).toBe(false);
        });

        it('Should return false for alphanumeric value starting from alphabats', () => {
            expect(UtilMethods.isNumber('p0')).toBe(false);
        });
    });

    describe('check minValue', () => {
        describe('Without any range', () => {
            it('Should return false for \'null\' value', () => {
                expect(UtilMethods.minValue(null)).toBe(false);
            });
    
            it('Should return false for \'undefined\' value', () => {
                expect(UtilMethods.minValue(undefined)).toBe(false);
            });
    
            it('Should return false for empty string value', () => {
                expect(UtilMethods.minValue('')).toBe(false);
            });
    
            it('Should return false for only whitespace string value', () => {
                expect(UtilMethods.minValue('    ')).toBe(false);
            });
    
            it('Should return false for any valid string value', () => {
                expect(UtilMethods.minValue('test')).toBe(false);
            });
    
            it('Should return true for 0', () => {
                expect(UtilMethods.minValue(0)).toBe(true);
            });
    
            it('Should return true for any -ve integer', () => {
                expect(UtilMethods.minValue(-6)).toBe(true);
            });
    
            it('Should return true for any +ve integer', () => {
                expect(UtilMethods.minValue(6)).toBe(true);
            });
        });

        describe('With any range', () => {
            it('Should return false for \'null\' value', () => {
                expect(UtilMethods.minValue(null, { minValue: 10 })).toBe(false);
            });
    
            it('Should return false for \'undefined\' value', () => {
                expect(UtilMethods.minValue(undefined, { minValue: 10 })).toBe(false);
            });
    
            it('Should return false for empty string value', () => {
                expect(UtilMethods.minValue('', { minValue: 10 })).toBe(false);
            });
    
            it('Should return false for only whitespace string value', () => {
                expect(UtilMethods.minValue('    ', { minValue: 10 })).toBe(false);
            });
    
            it('Should return false for any valid string value', () => {
                expect(UtilMethods.minValue('test', { minValue: 10 })).toBe(false);
            });
    
            it('Should return true for 0 if given min value is less than 0', () => {
                expect(UtilMethods.minValue(0, { minValue: -1 })).toBe(true);
            });

            it('Should return false for 0 if given min value is greater than 0', () => {
                expect(UtilMethods.minValue(0, { minValue: 1 })).toBe(false);
            });
    
            it('Should return false for any -ve integer less than given min value', () => {
                expect(UtilMethods.minValue(-6, { minValue: 10 })).toBe(false);
            });

            it('Should return true for any -ve integer greater than given min value', () => {
                expect(UtilMethods.minValue(-2, { minValue: -3 })).toBe(true);
            });
    
            it('Should return false for any +ve integer less than given min value', () => {
                expect(UtilMethods.minValue(6, { minValue: 10 })).toBe(false);
            });

            it('Should return true for any +ve integer greater than given min value', () => {
                expect(UtilMethods.minValue(12, { minValue: 10 })).toBe(true);
            });

            it('Should return true for any +ve integer equal to given min value', () => {
                expect(UtilMethods.minValue(10, { minValue: 10 })).toBe(true);
            });

            it('Should return true for any -ve integer equal to given min value', () => {
                expect(UtilMethods.minValue(-5, { minValue: -5 })).toBe(true);
            });
        });
    });

    describe('check maxValue', () => {
        describe('Without any range', () => {
            it('Should return false for \'null\' value', () => {
                expect(UtilMethods.maxValue(null)).toBe(false);
            });
    
            it('Should return false for \'undefined\' value', () => {
                expect(UtilMethods.maxValue(undefined)).toBe(false);
            });
    
            it('Should return false for empty string value', () => {
                expect(UtilMethods.maxValue('')).toBe(false);
            });
    
            it('Should return false for only whitespace string value', () => {
                expect(UtilMethods.maxValue('    ')).toBe(false);
            });
    
            it('Should return false for any valid string value', () => {
                expect(UtilMethods.maxValue('test')).toBe(false);
            });
    
            it('Should return true for 0', () => {
                expect(UtilMethods.maxValue(0)).toBe(true);
            });
    
            it('Should return true for any -ve integer', () => {
                expect(UtilMethods.maxValue(-6)).toBe(true);
            });
    
            it('Should return true for any +ve integer', () => {
                expect(UtilMethods.maxValue(6)).toBe(true);
            });
        });

        describe('With any range', () => {
            it('Should return false for \'null\' value', () => {
                expect(UtilMethods.maxValue(null, { maxValue: 10 })).toBe(false);
            });
    
            it('Should return false for \'undefined\' value', () => {
                expect(UtilMethods.maxValue(undefined, { maxValue: 10 })).toBe(false);
            });
    
            it('Should return false for empty string value', () => {
                expect(UtilMethods.maxValue('', { maxValue: 10 })).toBe(false);
            });
    
            it('Should return false for only whitespace string value', () => {
                expect(UtilMethods.maxValue('    ', { maxValue: 10 })).toBe(false);
            });
    
            it('Should return false for any valid string value', () => {
                expect(UtilMethods.maxValue('test', { maxValue: 10 })).toBe(false);
            });
    
            it('Should return true for 0 if given max value is greater than 0', () => {
                expect(UtilMethods.maxValue(0, { maxValue: 1 })).toBe(true);
            });

            it('Should return false for 0 if given max value is less than 0', () => {
                expect(UtilMethods.maxValue(0, { maxValue: -1 })).toBe(false);
            });
    
            it('Should return true for any -ve integer less than given max value', () => {
                expect(UtilMethods.maxValue(-6, { maxValue: 10 })).toBe(true);
            });

            it('Should return false for any -ve integer greater than given max value', () => {
                expect(UtilMethods.maxValue(-2, { maxValue: -3 })).toBe(false);
            });
    
            it('Should return true for any +ve integer less than given max value', () => {
                expect(UtilMethods.maxValue(6, { maxValue: 10 })).toBe(true);
            });

            it('Should return false for any +ve integer greater than given max value', () => {
                expect(UtilMethods.maxValue(12, { maxValue: 10 })).toBe(false);
            });

            it('Should return true for any +ve integer equal to given max value', () => {
                expect(UtilMethods.maxValue(10, { maxValue: 10 })).toBe(true);
            });

            it('Should return true for any -ve integer equal to given max value', () => {
                expect(UtilMethods.maxValue(-5, { maxValue: -5 })).toBe(true);
            });
        });
    });

    describe('check pattern', () => {
        describe('Without any pattern', () => {
            it('Should return true for \'null\' value', () => {
                expect(UtilMethods.pattern(null)).toBe(true);
            });
    
            it('Should return true for \'undefined\' value', () => {
                expect(UtilMethods.pattern(undefined)).toBe(true);
            });
    
            it('Should return true for empty string value', () => {
                expect(UtilMethods.pattern('')).toBe(true);
            });
    
            it('Should return true for only whitespace string value', () => {
                expect(UtilMethods.pattern('    ')).toBe(true);
            });
    
            it('Should return true for any valid string value', () => {
                expect(UtilMethods.pattern('test')).toBe(true);
            });

            it('Should return true for any valid number value', () => {
                expect(UtilMethods.pattern(3456)).toBe(true);
            });
        });

        describe('With any pattern', () => {
            it('Should return true for \'null\' value', () => {
                expect(UtilMethods.pattern(null, { pattern: /^[A-Za-z0-9]*$/ })).toBe(true);
            });
    
            it('Should return true for \'undefined\' value', () => {
                expect(UtilMethods.pattern(undefined, { pattern: /^[A-Za-z0-9]*$/ })).toBe(true);
            });
    
            it('Should return true for empty string value', () => {
                expect(UtilMethods.pattern('', { pattern: /^[A-Za-z0-9]*$/ })).toBe(true);
            });
    
            it('Should return false for only whitespace string value', () => {
                expect(UtilMethods.pattern('    ', { pattern: /^[A-Za-z0-9]*$/ })).toBe(false);
            });
    
            it('Should return true for any valid string value', () => {
                expect(UtilMethods.pattern('test', { pattern: /^[A-Za-z0-9]*$/ })).toBe(true);
            });

            it('Should return false for any invalid pattern value', () => {
                expect(UtilMethods.pattern('3456*&', { pattern: /^[A-Za-z0-9]*$/ })).toBe(false);
            });
        });
    });
});