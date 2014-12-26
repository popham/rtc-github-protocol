define(['capnp-js/builder/index', 'capnp-js/reader/index', './bScope', './readers', '../user.capnp.d/builders', '../peer.capnp.d/builders'], function(builder, reader, scope, readers, file0, file1) {
    var builders = {
        _READER: readers
    };
    (function(types, parentScope) {
        parentScope.EMPTY_HOSTS_UPDATE = parentScope.prototype.EMPTY_HOSTS_UPDATE = parentScope._READER.EMPTY_HOSTS_UPDATE;
    })(scope, builders);
    (function(types, parentScope) {
        var Structure = types["0x898617f522cfa2ab"];
        Structure._PARENT = parentScope;
        Structure.prototype._pointerDefaults = Structure._READER.prototype._pointerDefaults;
        (function(types, parentScope) {
            parentScope.prototype._pointerDefaults = parentScope._READER.prototype._pointerDefaults;
            parentScope.prototype._floatDefaults = parentScope._READER.prototype._floatDefaults;
            parentScope.prototype.which = function() {
                return reader.primitives.uint16(this._segment, this._dataSection + 0);
            };
            parentScope.prototype._setWhich = function(discr) {
                builder.zero.pointer(this._arena, {
                    segment: this._segment,
                    position: this._pointersSection + 0
                });
                var position = this._dataSection + 0;
                builder.primitives.uint16(discr, this._segment, position);
            };
            parentScope.prototype.isSession = function() {
                return this.which() === 0;
            };
            parentScope.SESSION = parentScope.prototype.SESSION = 0;
            var G0 = builder.group(parentScope._READER._G0);
            G0.prototype._pointerDefaults = parentScope.prototype._pointerDefaults;
            (function(types, parentScope) {
                parentScope.prototype._pointerDefaults = parentScope._READER.prototype._pointerDefaults;
                parentScope.prototype._floatDefaults = parentScope._READER.prototype._floatDefaults;
                var f0 = types["0x95570979dae93deb"]._FIELD;
                parentScope.prototype.adoptUser = f0.adopt(0);
                parentScope.prototype.getUser = f0.get(0, 0);
                parentScope.prototype.hasUser = f0.has(0);
                parentScope.prototype.initUser = f0.init(0);
                parentScope.prototype.disownUser = f0.disown(0);
                parentScope.prototype.disownReadOnlyUser = f0.disownReader(0);
                parentScope.prototype.setUser = f0.set(0);
            })(types, G0);
            parentScope.prototype.getSession = function() {
                if (!this.isSession()) {
                    throw new Error("Attempted to access an inactive union member");
                }
                return new G0(this);
            };
            parentScope.prototype.initSession = function() {
                this._setWhich(0);
                return new G0(this);
            };
            parentScope.prototype.isHostsUpdate = function() {
                return this.which() === 1;
            };
            parentScope.HOSTS_UPDATE = parentScope.prototype.HOSTS_UPDATE = 1;
            var f1 = builder.lists.struct(types["0x95570979dae93deb"])._FIELD;
            parentScope.prototype.adoptHostsUpdate = f1.unionAdopt(1, 0);
            parentScope.prototype.getHostsUpdate = f1.unionGet(1, 0, 0);
            parentScope.prototype.hasHostsUpdate = f1.unionHas(1, 0);
            parentScope.prototype.initHostsUpdate = f1.unionInit(1, 0);
            parentScope.prototype.disownHostsUpdate = f1.unionDisown(1, 0);
            parentScope.prototype.disownReadOnlyHostsUpdate = f1.unionDisownReader(1, 0);
            parentScope.prototype.setHostsUpdate = f1.unionSet(1, 0);
            parentScope.prototype.isPeer = function() {
                return this.which() === 2;
            };
            parentScope.PEER = parentScope.prototype.PEER = 2;
            var f2 = types["0xe5e90b52fd6c402e"]._FIELD;
            parentScope.prototype.adoptPeer = f2.unionAdopt(2, 0);
            parentScope.prototype.getPeer = f2.unionGet(2, 0, 0);
            parentScope.prototype.hasPeer = f2.unionHas(2, 0);
            parentScope.prototype.initPeer = f2.unionInit(2, 0);
            parentScope.prototype.disownPeer = f2.unionDisown(2, 0);
            parentScope.prototype.disownReadOnlyPeer = f2.unionDisownReader(2, 0);
            parentScope.prototype.setPeer = f2.unionSet(2, 0);
        })(types, Structure);
        parentScope.Server = Structure;
    })(scope, builders);
    return builders;
});