define(['capnp-js/builder/index', 'capnp-js/reader/index', './bScope', './readers', '../user.capnp.d/builders'], function(builder, reader, scope, readers, file0) {
    var builders = {
        _READER: readers
    };
    (function(types, parentScope) {
        parentScope.MediaIdentifier = parentScope._READER.MediaIdentifier;
    })(scope, builders);
    (function(types, parentScope) {
        var Structure = types["0xe5e90b52fd6c402e"];
        Structure._PARENT = parentScope;
        (function(types, parentScope) {
            var Structure = types["0xf2ae185395b2f8ef"];
            Structure._PARENT = parentScope;
            Structure.prototype._pointerDefaults = Structure._READER.prototype._pointerDefaults;
            (function(types, parentScope) {
                parentScope.prototype._pointerDefaults = parentScope._READER.prototype._pointerDefaults;
                parentScope.prototype._floatDefaults = parentScope._READER.prototype._floatDefaults;
                var f0 = builder.Text._FIELD;
                parentScope.prototype.adoptCandidate = f0.adopt(0);
                parentScope.prototype.getCandidate = f0.get(0, 0);
                parentScope.prototype.hasCandidate = f0.has(0);
                parentScope.prototype.initCandidate = f0.init(0);
                parentScope.prototype.disownCandidate = f0.disown(0);
                parentScope.prototype.disownReadOnlyCandidate = f0.disownReader(0);
                parentScope.prototype.setCandidate = f0.set(0);
                parentScope.prototype.getSdpMLineIndex = function() {
                    var position = this._dataSection + 0;
                    return reader.fields.uint16(0, this._segment, position);
                };
                parentScope.prototype.setSdpMLineIndex = function(value) {
                    builder.fields.uint16(value, 0, this._segment, this._dataSection + 0);
                };
                parentScope.prototype.getSdpMId = function() {
                    var position = this._dataSection + 2;
                    return reader.fields.uint16(0, this._segment, position);
                };
                parentScope.prototype.setSdpMId = function(value) {
                    builder.fields.uint16(value, 0, this._segment, this._dataSection + 2);
                };
            })(types, Structure);
            parentScope.Ice = Structure;
        })(types, Structure);
        Structure.prototype._pointerDefaults = Structure._READER.prototype._pointerDefaults;
        (function(types, parentScope) {
            parentScope.prototype._pointerDefaults = parentScope._READER.prototype._pointerDefaults;
            parentScope.prototype._floatDefaults = parentScope._READER.prototype._floatDefaults;
            parentScope.prototype.which = function() {
                return reader.primitives.uint16(this._segment, this._dataSection + 8);
            };
            parentScope.prototype._setWhich = function(discr) {
                builder.zero.pointer(this._arena, {
                    segment: this._segment,
                    position: this._pointersSection + 8
                });
                var position = this._dataSection + 8;
                builder.primitives.uint16(discr, this._segment, position);
            };
            var G0 = builder.group(parentScope._READER.source);
            parentScope.source = G0;
            G0.prototype._pointerDefaults = parentScope.prototype._pointerDefaults;
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
                parentScope.prototype.isUnset = function() {
                    return this.which() === 0;
                };
                parentScope.UNSET = parentScope.prototype.UNSET = 0;
                parentScope.prototype.getUnset = function() {
                    if (!this.isUnset()) {
                        throw new Error("Attempted to access an inactive union member");
                    }
                    return null;
                };
                parentScope.prototype.setUnset = function() {
                    this._setWhich(0);
                };
                parentScope.prototype.isUser = function() {
                    return this.which() === 1;
                };
                parentScope.USER = parentScope.prototype.USER = 1;
                var f1 = types["0x95570979dae93deb"]._FIELD;
                parentScope.prototype.adoptUser = f1.unionAdopt(1, 0);
                parentScope.prototype.getUser = f1.unionGet(1, 0, 0);
                parentScope.prototype.hasUser = f1.unionHas(1, 0);
                parentScope.prototype.initUser = f1.unionInit(1, 0);
                parentScope.prototype.disownUser = f1.unionDisown(1, 0);
                parentScope.prototype.disownReadOnlyUser = f1.unionDisownReader(1, 0);
                parentScope.prototype.setUser = f1.unionSet(1, 0);
            })(types, G0);
            parentScope.prototype.getSource = function() {
                return new G0(this);
            };
            parentScope.prototype.initSource = function() {
                return new G0(this);
            };
            var G1 = builder.group(parentScope._READER.target);
            parentScope.target = G1;
            G1.prototype._pointerDefaults = parentScope.prototype._pointerDefaults;
            (function(types, parentScope) {
                parentScope.prototype._pointerDefaults = parentScope._READER.prototype._pointerDefaults;
                parentScope.prototype._floatDefaults = parentScope._READER.prototype._floatDefaults;
                parentScope.prototype.which = function() {
                    return reader.primitives.uint16(this._segment, this._dataSection + 2);
                };
                parentScope.prototype._setWhich = function(discr) {
                    this._zeroData(4, 4);
                    var position = this._dataSection + 2;
                    builder.primitives.uint16(discr, this._segment, position);
                };
                parentScope.prototype.isUnset = function() {
                    return this.which() === 0;
                };
                parentScope.UNSET = parentScope.prototype.UNSET = 0;
                parentScope.prototype.getUnset = function() {
                    if (!this.isUnset()) {
                        throw new Error("Attempted to access an inactive union member");
                    }
                    return null;
                };
                parentScope.prototype.setUnset = function() {
                    this._setWhich(0);
                };
                parentScope.prototype.isUserId = function() {
                    return this.which() === 1;
                };
                parentScope.USER_ID = parentScope.prototype.USER_ID = 1;
                parentScope.prototype.getUserId = function() {
                    if (!this.isUserId()) {
                        throw new Error("Attempted to access an inactive union member");
                    }
                    var position = this._dataSection + 4;
                    return reader.fields.int32(0, this._segment, position);
                };
                parentScope.prototype.setUserId = function(value) {
                    this._setWhich(1);
                    builder.fields.int32(value, 0, this._segment, this._dataSection + 4);
                };
            })(types, G1);
            parentScope.prototype.getTarget = function() {
                return new G1(this);
            };
            parentScope.prototype.initTarget = function() {
                return new G1(this);
            };
            parentScope.prototype.isOffer = function() {
                return this.which() === 0;
            };
            parentScope.OFFER = parentScope.prototype.OFFER = 0;
            var G2 = builder.group(parentScope._READER.offer);
            parentScope.offer = G2;
            G2.prototype._pointerDefaults = parentScope.prototype._pointerDefaults;
            (function(types, parentScope) {
                parentScope.prototype._pointerDefaults = parentScope._READER.prototype._pointerDefaults;
                parentScope.prototype._floatDefaults = parentScope._READER.prototype._floatDefaults;
                var f0 = builder.Text._FIELD;
                parentScope.prototype.adoptSdp = f0.adopt(8);
                parentScope.prototype.getSdp = f0.get(8, 1);
                parentScope.prototype.hasSdp = f0.has(8);
                parentScope.prototype.initSdp = f0.init(8);
                parentScope.prototype.disownSdp = f0.disown(8);
                parentScope.prototype.disownReadOnlySdp = f0.disownReader(8);
                parentScope.prototype.setSdp = f0.set(8);
            })(types, G2);
            parentScope.prototype.getOffer = function() {
                if (!this.isOffer()) {
                    throw new Error("Attempted to access an inactive union member");
                }
                return new G2(this);
            };
            parentScope.prototype.initOffer = function() {
                this._setWhich(0);
                return new G2(this);
            };
            parentScope.prototype.isAnswer = function() {
                return this.which() === 1;
            };
            parentScope.ANSWER = parentScope.prototype.ANSWER = 1;
            var G3 = builder.group(parentScope._READER.answer);
            parentScope.answer = G3;
            G3.prototype._pointerDefaults = parentScope.prototype._pointerDefaults;
            (function(types, parentScope) {
                parentScope.prototype._pointerDefaults = parentScope._READER.prototype._pointerDefaults;
                parentScope.prototype._floatDefaults = parentScope._READER.prototype._floatDefaults;
                var f0 = builder.Text._FIELD;
                parentScope.prototype.adoptSdp = f0.adopt(8);
                parentScope.prototype.getSdp = f0.get(8, 1);
                parentScope.prototype.hasSdp = f0.has(8);
                parentScope.prototype.initSdp = f0.init(8);
                parentScope.prototype.disownSdp = f0.disown(8);
                parentScope.prototype.disownReadOnlySdp = f0.disownReader(8);
                parentScope.prototype.setSdp = f0.set(8);
            })(types, G3);
            parentScope.prototype.getAnswer = function() {
                if (!this.isAnswer()) {
                    throw new Error("Attempted to access an inactive union member");
                }
                return new G3(this);
            };
            parentScope.prototype.initAnswer = function() {
                this._setWhich(1);
                return new G3(this);
            };
            parentScope.prototype.isIce = function() {
                return this.which() === 2;
            };
            parentScope.ICE = parentScope.prototype.ICE = 2;
            var f4 = types["0xf2ae185395b2f8ef"]._FIELD;
            parentScope.prototype.adoptIce = f4.unionAdopt(2, 8);
            parentScope.prototype.getIce = f4.unionGet(2, 8, 1);
            parentScope.prototype.hasIce = f4.unionHas(2, 8);
            parentScope.prototype.initIce = f4.unionInit(2, 8);
            parentScope.prototype.disownIce = f4.unionDisown(2, 8);
            parentScope.prototype.disownReadOnlyIce = f4.unionDisownReader(2, 8);
            parentScope.prototype.setIce = f4.unionSet(2, 8);
        })(types, Structure);
        parentScope.Peer = Structure;
    })(scope, builders);
    return builders;
});