var types = require('./bTypes');
var file0 = require('../user.capnp.d/bTypes');
    var scope = {};
    var id;
    for (id in file0) {
        scope[id] = file0[id];
    }
    for (id in types) {
        scope[id] = types[id];
    }
    module.exports = scope;
