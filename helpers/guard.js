function Guard() {
};

Guard.prototype.argumentIsNotNull = function (argument, name) {
    if (typeof argument === 'undefined') {
        throw new Error('value cannot be null. parameter name: "' + name + '"');
    }
};

module.exports = new Guard();