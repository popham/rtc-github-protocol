define(['capnp-js/builder/Allocator', 'capnp-js/reader/index', './rScope'], function(Allocator, reader, scope) {
    var readers = {};
    var allocator = new Allocator();
    (function(types, parentScope, allocator) {
        var Structure = types["0x95570979dae93deb"];
        Structure._PARENT = parentScope;
        Structure.prototype._pointerDefaults = [];
        (function(types, parentScope, allocator) {
            var defaults = parentScope.prototype._pointerDefaults; /* id */
            parentScope.prototype.getId = function() {
                var position = this._dataSection + 0;
                if (position < this._pointersSection) {
                    return reader.fields.int32(0, this._segment, position);
                } else {
                    return 0;
                }
            }; /* name */
            var f1 = reader.Text._FIELD;
            parentScope.prototype.getName = f1.get(0, 0);
            parentScope.prototype.hasName = f1.has(0);
            defaults[0] = (function() {
                var Reader = reader.Text;
                var arena = allocator._fromBase64("AQAAAAoAAAAAAAAAAAAAAA==").asReader();
                return Reader._deref(arena, arena._root(), 0);
            })();
            parentScope.prototype._floatDefaults = {};
        })(types, Structure, allocator);
        parentScope.User = Structure;
    })(scope, readers, allocator);
    return readers;
});