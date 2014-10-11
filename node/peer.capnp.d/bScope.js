var types = require('./bTypes');
var file0 = require('../user.capnp.d/bTypes');
    var scope = {};
    for (var id in types) {
        scope[id] = types[id];
    }
    scope["0x95570979dae93deb"] = file0["0x95570979dae93deb"];
    module.exports = scope;
