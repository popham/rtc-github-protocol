define(['capnp-js/builder/index', 'capnp-js/reader/index', './bScope', './readers'], function(builder, reader, scope, readers) {
    var builders = {
        _READER: readers
    };
    (function(types, parentScope) {
        var Structure = types["0x95570979dae93deb"];
        Structure._PARENT = parentScope;
        Structure.prototype._pointerDefaults = Structure._READER.prototype._pointerDefaults;
        (function(types, parentScope) {
            parentScope.prototype._pointerDefaults = parentScope._READER.prototype._pointerDefaults;
            parentScope.prototype._floatDefaults = parentScope._READER.prototype._floatDefaults;
            parentScope.prototype.getId = function() {
                var position = this._dataSection + 0;
                return reader.fields.int32(0, this._segment, position);
            };
            parentScope.prototype.setId = function(value) {
                builder.fields.int32(value, 0, this._segment, this._dataSection + 0);
            };
            var f1 = builder.Text._FIELD;
            parentScope.prototype.adoptName = f1.adopt(0);
            parentScope.prototype.getName = f1.get(0, 0);
            parentScope.prototype.hasName = f1.has(0);
            parentScope.prototype.initName = f1.init(0);
            parentScope.prototype.disownName = f1.disown(0);
            parentScope.prototype.disownReadOnlyName = f1.disownReader(0);
            parentScope.prototype.setName = f1.set(0);
        })(types, Structure);
        parentScope.User = Structure;
    })(scope, builders);
    return builders;
});