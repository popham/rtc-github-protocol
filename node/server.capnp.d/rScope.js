var types = require('./rTypes');
var file0 = require('../user.capnp.d/rTypes');
var file1 = require('../peer.capnp.d/rTypes');
    var scope = {};
    for (var id in types) {
        scope[id] = types[id];
    }
    scope["0x95570979dae93deb"] = file0["0x95570979dae93deb"];
    scope["0xe5e90b52fd6c402e"] = file1["0xe5e90b52fd6c402e"];
    module.exports = scope;
