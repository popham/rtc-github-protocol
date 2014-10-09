var types = require('./rTypes');
var file0 = require('../user.capnp.d/rTypes');
    var scope = {};
    var id;
    for (id in file0) {
        scope[id] = file0[id];
    }
    for (id in types) {
        scope[id] = types[id];
    }
    module.exports = scope;
