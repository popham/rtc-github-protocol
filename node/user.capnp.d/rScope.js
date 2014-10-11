var types = require('./rTypes');
    var scope = {};
    for (var id in types) {
        scope[id] = types[id];
    }
    module.exports = scope;
