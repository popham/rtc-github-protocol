var types = require('./rTypes');
var file0 = require('../peer.capnp.d/rTypes');
    var scope = {};
    for (var id in types) {
        scope[id] = types[id];
    }
    scope["0xe5e90b52fd6c402e"] = file0["0xe5e90b52fd6c402e"];
    module.exports = scope;
