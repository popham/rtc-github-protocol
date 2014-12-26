define(['capnp-js/builder/index', 'capnp-js/reader/index', './bScope', './readers', '../peer.capnp.d/builders'], function(builder, reader, scope, readers, file0) {
    var builders = {
        _READER: readers
    };
    (function(types, parentScope) {
        var Structure = types["0xcd62d4318b3bd10c"];
        Structure._PARENT = parentScope;
        Structure.prototype._pointerDefaults = Structure._READER.prototype._pointerDefaults;
        (function(types, parentScope) {
            parentScope.prototype._pointerDefaults = parentScope._READER.prototype._pointerDefaults;
            parentScope.prototype._floatDefaults = parentScope._READER.prototype._floatDefaults;
            parentScope.prototype.which = function() {
                return reader.primitives.uint16(this._segment, this._dataSection + 2);
            };
            parentScope.prototype._setWhich = function(discr) {
                this._maskData(0, 254);
                builder.zero.pointer(this._arena, {
                    segment: this._segment,
                    position: this._pointersSection + 0
                });
                var position = this._dataSection + 2;
                builder.primitives.uint16(discr, this._segment, position);
            };
            parentScope.prototype.isService = function() {
                return this.which() === 0;
            };
            parentScope.SERVICE = parentScope.prototype.SERVICE = 0;
            var G0 = builder.group(parentScope._READER._G0);
            G0.prototype._pointerDefaults = parentScope.prototype._pointerDefaults;
            (function(types, parentScope) {
                parentScope.prototype._pointerDefaults = parentScope._READER.prototype._pointerDefaults;
                parentScope.prototype._floatDefaults = parentScope._READER.prototype._floatDefaults;
                parentScope.prototype.getIsOffering = function() {
                    return reader.fields.bool(0, this._segment, this._dataSection + 0, 0);
                };
                parentScope.prototype.setIsOffering = function(value) {
                    builder.fields.bool(value, 0, this._segment, this._dataSection + 0, 0);
                };
            })(types, G0);
            parentScope.prototype.getService = function() {
                if (!this.isService()) {
                    throw new Error("Attempted to access an inactive union member");
                }
                return new G0(this);
            };
            parentScope.prototype.initService = function() {
                this._setWhich(0);
                return new G0(this);
            };
            parentScope.prototype.isPeer = function() {
                return this.which() === 1;
            };
            parentScope.PEER = parentScope.prototype.PEER = 1;
            var f1 = types["0xe5e90b52fd6c402e"]._FIELD;
            parentScope.prototype.adoptPeer = f1.unionAdopt(1, 0);
            parentScope.prototype.getPeer = f1.unionGet(1, 0, 0);
            parentScope.prototype.hasPeer = f1.unionHas(1, 0);
            parentScope.prototype.initPeer = f1.unionInit(1, 0);
            parentScope.prototype.disownPeer = f1.unionDisown(1, 0);
            parentScope.prototype.disownReadOnlyPeer = f1.unionDisownReader(1, 0);
            parentScope.prototype.setPeer = f1.unionSet(1, 0);
        })(types, Structure);
        parentScope.Client = Structure;
    })(scope, builders);
    return builders;
});