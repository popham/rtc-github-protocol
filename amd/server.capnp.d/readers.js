define(['capnp-js/builder/Allocator', 'capnp-js/reader/index', './rScope', '../user.capnp.d/readers', '../peer.capnp.d/readers'], function(Allocator, reader, scope) {
    var readers = {};
    var allocator = new Allocator();
    (function(types, parentScope, allocator) {
        var arena = allocator._fromBase64("AQAAAAcAAAAAAAAAAQABAA==").asReader();
        parentScope.EMPTY_HOSTS_UPDATE = parentScope.prototype.EMPTY_HOSTS_UPDATE = reader.lists.struct(["0x95570979dae93deb"])._deref(arena, arena._root(), 0);
    })(scope, readers, allocator);
    (function(types, parentScope, allocator) {
        var Structure = types["0x898617f522cfa2ab"];
        Structure._PARENT = parentScope;
        Structure.prototype._pointerDefaults = [];
        (function(types, parentScope, allocator) {
            parentScope.prototype.which = function() {
                var position = this._dataSection + 0;
                if (position < this._pointersSection) {
                    return reader.primitives.uint16(this._segment, position);
                } else {
                    return 0;
                }
            };
            var defaults = parentScope.prototype._pointerDefaults; /* session */
            parentScope.prototype.isSession = function() {
                return this.which() === 0;
            };
            parentScope.SESSION = parentScope.prototype.SESSION = 0;
            var G0 = reader.group(parentScope);
            parentScope._G0 = G0;
            G0.prototype._pointerDefaults = defaults;
            (function(types, parentScope, allocator) {
                var defaults = parentScope.prototype._pointerDefaults; /* user */
                var f0 = types["0x95570979dae93deb"]._FIELD;
                parentScope.prototype.getUser = f0.get(0, 0);
                parentScope.prototype.hasUser = f0.has(0);
                defaults[0] = (function() {
                    var Reader = types["0x95570979dae93deb"];
                    var arena = allocator._fromBase64("AAAAAAAAAAA=").asReader();
                    return Reader._deref(arena, arena._root(), 0);
                })();
                parentScope.prototype._floatDefaults = {};
            })(types, G0, allocator);
            parentScope.prototype.getSession = function() {
                if (!this.isSession()) {
                    throw new Error("Attempted to access an inactive union member");
                }
                return new G0(this);
            }; /* hostsUpdate */
            parentScope.prototype.isHostsUpdate = function() {
                return this.which() === 1;
            };
            parentScope.HOSTS_UPDATE = parentScope.prototype.HOSTS_UPDATE = 1;
            var f1 = reader.lists.struct(types["0x95570979dae93deb"])._FIELD;
            parentScope.prototype.getHostsUpdate = f1.unionGet(1, 0, 0);
            parentScope.prototype.hasHostsUpdate = f1.unionHas(1, 0); /* peer */
            parentScope.prototype.isPeer = function() {
                return this.which() === 2;
            };
            parentScope.PEER = parentScope.prototype.PEER = 2;
            var f2 = types["0xe5e90b52fd6c402e"]._FIELD;
            parentScope.prototype.getPeer = f2.unionGet(2, 0, 0);
            parentScope.prototype.hasPeer = f2.unionHas(2, 0);
            defaults[0] = (function() {
                var Reader = reader.lists.struct(types["0x95570979dae93deb"]);
                var arena = allocator._fromBase64("AQAAAAAAAAA=").asReader();
                return Reader._deref(arena, arena._root(), 0);
            })();
            defaults[0] = (function() {
                var Reader = types["0xe5e90b52fd6c402e"];
                var arena = allocator._fromBase64("AAAAAAAAAAA=").asReader();
                return Reader._deref(arena, arena._root(), 0);
            })();
            parentScope.prototype._floatDefaults = {};
        })(types, Structure, allocator);
        parentScope.Server = Structure;
    })(scope, readers, allocator);
    return readers;
});