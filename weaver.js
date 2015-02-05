/**
 * Create a new instance of weaver.
 *
 * @constructor
 * @this {Weaver}
 */
exports.Weaver = function () {

    /**
     * Find a function in an object by name
     * @param {object} : Object contains the function
     * @param {string} : function name
     */
    var find = function (object, functionName) {
        var objectFunction = null;
        for (var prop in object) {
            if (prop == functionName && typeof object[prop] == 'function') {
                objectFunction = object[prop];
                break;
            }
        }
        return objectFunction;
    };

    /**
     * Weave an aspect function after a list of joint points in the object
     * @param {object} : Object in which weave
     * @param {Array} : Array of jointPoints string (function names)
     * @param {function} : Aspect function to weave after joint point functions
     */
    this.after = function(object, jointPoints, aspect) {
        if (jointPoints instanceof Array && typeof aspect == 'function') {
            for (var i = 0; i < jointPoints.length; i++) {
                var jointPoint = jointPoints[i];
                
                if (typeof jointPoint == 'string') {
                    var oldFunction = find(object, jointPoint);
                    if (oldFunction != null) {
                        var replaceFunc = function () {
                            oldFunction.apply(this, arguments);
                            aspect.apply(this, arguments);
                        };

                        object[jointPoint] = replaceFunc;

                    } else {
                        throw new Error('Unknow function : ' + jointPoint);
                    }
                } else {
                    throw new Error('jointPoint at index ' + i + ' is not a String => typeof=' + typeof jointPoint);
                }
            }
        } else {
            var errorMsg =
                (jointPoints instanceof Array)
                ? 'JointPoints must be an array of string'
                : 'Aspect must be a function';
            throw new Error(errorMsg);
        }
    };

    /**
     * Weave an aspect function before a list of joint points in the object
     * @param {object} : Object in which weave
     * @param {Array} : Array of jointPoints string (function names)
     * @param {function} : Aspect function to weave before joint point functions
     */
    this.before = function(object, jointPoints, aspect) {
        if (jointPoints instanceof Array && typeof aspect == 'function') {
            for (var i = 0; i < jointPoints.length; i++) {
                var jointPoint = jointPoints[i];

                if (typeof jointPoint == 'string') {
                    var oldFunction = find(object, jointPoint);
                    if (oldFunction != null) {
                        var replaceFunc = function () {
                            aspect.apply(this, arguments);
                            oldFunction.apply(this, arguments);
                        };

                        object[jointPoint] = replaceFunc;

                    } else {
                        throw new Error('Unknow function : ' + jointPoint);
                    }
                } else {
                    throw new Error('jointPoint at index ' + i + ' is not a String => typeof=' + typeof jointPoint);
                }
            }
        } else {
            var errorMsg =
                (jointPoints instanceof Array)
                ? 'JointPoints must be an array of string'
                : 'Aspect must be a function';
            throw new Error(errorMsg);
        }
    };
};
