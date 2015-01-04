define(['capnp-js/builder/Allocator', 'capnp-js/reader/index', './rScope', '../peer.capnp.d/readers'], function(Allocator, reader, scope) {
    var readers = {};
    var allocator = new Allocator();
    (function(types, parentScope, allocator) {
        var Structure = types["0xcd62d4318b3bd10c"];
        Structure._PARENT = parentScope;
        Structure.prototype._pointerDefaults = [];
        (function(types, parentScope, allocator) {
            parentScope.prototype.which = function() {
                var position = this._dataSection + 2;
                if (position < this._pointersSection) {
                    return reader.primitives.uint16(this._segment, position);
                } else {
                    return 0;
                }
            };
            var defaults = parentScope.prototype._pointerDefaults; /* service */
            parentScope.prototype.isService = function() {
                return this.which() === 0;
            };
            parentScope.SERVICE = parentScope.prototype.SERVICE = 0;
            var G0 = reader.group(parentScope);
            parentScope.service = G0;
            G0.prototype._pointerDefaults = defaults;
            (function(types, parentScope, allocator) {
                var defaults = parentScope.prototype._pointerDefaults; /* isOffering */
                parentScope.prototype.getIsOffering = function() {
                    var position = this._dataSection + 0;
                    if (position < this._pointersSection) {
                        return reader.fields.bool(0, this._segment, position, 0);
                    } else {
                        return !!0;
                    }
                };
                parentScope.prototype._floatDefaults = {};
            })(types, G0, allocator);
            parentScope.prototype.getService = function() {
                if (!this.isService()) {
                    throw new Error("Attempted to access an inactive union member");
                }
                return new G0(this);
            }; /* peer */
            parentScope.prototype.isPeer = function() {
                return this.which() === 1;
            };
            parentScope.PEER = parentScope.prototype.PEER = 1;
            var f1 = types["0xe5e90b52fd6c402e"]._FIELD;
            parentScope.prototype.getPeer = f1.unionGet(1, 0, 0);
            parentScope.prototype.hasPeer = f1.unionHas(1, 0);
            defaults[0] = (function() {
                var Reader = types["0xe5e90b52fd6c402e"];
                var arena = allocator._fromBase64("AAAAAAAAAAA=").asReader();
                return Reader._deref(arena, arena._root(), 0);
            })();
            parentScope.prototype._floatDefaults = {};
        })(types, Structure, allocator);
        parentScope.Client = Structure;
    })(scope, readers, allocator);
    return readers;
});