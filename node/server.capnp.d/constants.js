var Allocator = require('capnp-js/builder/Allocator');
var reader = require('capnp-js/reader/index');
var scope = require('./rScope');
    var constants = {};
    var allocator = new Allocator();
    constants["0xfb7024301714f2d2"] = (function() {
        var arena = allocator._fromBase64("AQAAAAcAAAAAAAAAAQABAA==").asReader();
        return reader.lists.structure(scope['0x95570979dae93deb'])._deref(arena, {
            segment: arena.getSegment(0),
            position: 0
        }, 0);
    })();
    module.exports = constants;
