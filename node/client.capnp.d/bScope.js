var types = require('./bTypes');
var file0 = require('../peer.capnp.d/bTypes');
    var scope = {};
    for (var id in types) {
        scope[id] = types[id];
    }
    scope["0xe5e90b52fd6c402e"] = file0["0xe5e90b52fd6c402e"];
    module.exports = scope;
