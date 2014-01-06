(function (window, undefined) {
    'use strict';

    /**
     * Creates a new object with the specified prototype object and properties.
     * Only the first param is usable, as there is no way to polfill the properties
     * object.
     */

    if (!Object.create) {
        Object.create = function (o) {
            if (arguments.length > 1) {
                throw new Error('Object.create implementation only accepts the first parameter.');
            }
            function F() {}
            F.prototype = o;
            return new F();
        };
    }

})(window);
