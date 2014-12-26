define(['capnp-js/builder/Allocator', 'capnp-js/reader/index', './rScope', '../user.capnp.d/readers'], function(Allocator, reader, scope) {
    var readers = {};
    var allocator = new Allocator();
    (function(types, parentScope, allocator) {
        parentScope.MediaIdentifier = types["0xac8a22741af618bd"];
    })(scope, readers, allocator);
    (function(types, parentScope, allocator) {
        var Structure = types["0xe5e90b52fd6c402e"];
        Structure._PARENT = parentScope;
        (function(types, parentScope, allocator) {
            var Structure = types["0xf2ae185395b2f8ef"];
            Structure._PARENT = parentScope;
            Structure.prototype._pointerDefaults = [];
            (function(types, parentScope, allocator) {
                var defaults = parentScope.prototype._pointerDefaults; /* candidate */
                var f0 = reader.Text._FIELD;
                parentScope.prototype.getCandidate = f0.get(0, 0);
                parentScope.prototype.hasCandidate = f0.has(0); /* sdpMLineIndex */
                parentScope.prototype.getSdpMLineIndex = function() {
                    var position = this._dataSection + 0;
                    if (position < this._pointersSection) {
                        return reader.fields.uint16(0, this._segment, position);
                    } else {
                        return 0;
                    }
                }; /* sdpMId */
                parentScope.prototype.getSdpMId = function() {
                    var position = this._dataSection + 2;
                    if (position < this._pointersSection) {
                        return reader.fields.uint16(0, this._segment, position);
                    } else {
                        return 0;
                    }
                };
                defaults[0] = (function() {
                    var Reader = reader.Text;
                    var arena = allocator._fromBase64("AQAAAAoAAAAAAAAAAAAAAA==").asReader();
                    return Reader._deref(arena, arena._root(), 0);
                })();
                parentScope.prototype._floatDefaults = {};
            })(types, Structure, allocator);
            parentScope.Ice = Structure;
        })(types, Structure, allocator);
        Structure.prototype._pointerDefaults = [];
        (function(types, parentScope, allocator) {
            parentScope.prototype.which = function() {
                var position = this._dataSection + 8;
                if (position < this._pointersSection) {
                    return reader.primitives.uint16(this._segment, position);
                } else {
                    return 0;
                }
            };
            var defaults = parentScope.prototype._pointerDefaults; /* source */
            var G0 = reader.group(parentScope);
            parentScope._G0 = G0;
            G0.prototype._pointerDefaults = defaults;
            (function(types, parentScope, allocator) {
                parentScope.prototype.which = function() {
                    var position = this._dataSection + 0;
                    if (position < this._pointersSection) {
                        return reader.primitives.uint16(this._segment, position);
                    } else {
                        return 0;
                    }
                };
                var defaults = parentScope.prototype._pointerDefaults; /* unset */
                parentScope.prototype.isUnset = function() {
                    return this.which() === 0;
                };
                parentScope.UNSET = parentScope.prototype.UNSET = 0;
                parentScope.prototype.getUnset = function() {
                    if (!this.isUnset()) {
                        throw new Error("Attempted to access an inactive union member");
                    }
                    return null;
                }; /* user */
                parentScope.prototype.isUser = function() {
                    return this.which() === 1;
                };
                parentScope.USER = parentScope.prototype.USER = 1;
                var f1 = types["0x95570979dae93deb"]._FIELD;
                parentScope.prototype.getUser = f1.unionGet(1, 0, 0);
                parentScope.prototype.hasUser = f1.unionHas(1, 0);
                defaults[0] = (function() {
                    var Reader = types["0x95570979dae93deb"];
                    var arena = allocator._fromBase64("AAAAAAAAAAA=").asReader();
                    return Reader._deref(arena, arena._root(), 0);
                })();
                parentScope.prototype._floatDefaults = {};
            })(types, G0, allocator);
            parentScope.prototype.getSource = function() {
                return new G0(this);
            }; /* target */
            var G1 = reader.group(parentScope);
            parentScope._G1 = G1;
            G1.prototype._pointerDefaults = defaults;
            (function(types, parentScope, allocator) {
                parentScope.prototype.which = function() {
                    var position = this._dataSection + 2;
                    if (position < this._pointersSection) {
                        return reader.primitives.uint16(this._segment, position);
                    } else {
                        return 0;
                    }
                };
                var defaults = parentScope.prototype._pointerDefaults; /* unset */
                parentScope.prototype.isUnset = function() {
                    return this.which() === 0;
                };
                parentScope.UNSET = parentScope.prototype.UNSET = 0;
                parentScope.prototype.getUnset = function() {
                    if (!this.isUnset()) {
                        throw new Error("Attempted to access an inactive union member");
                    }
                    return null;
                }; /* userId */
                parentScope.prototype.isUserId = function() {
                    return this.which() === 1;
                };
                parentScope.USER_ID = parentScope.prototype.USER_ID = 1;
                parentScope.prototype.getUserId = function() {
                    if (!this.isUserId()) {
                        throw new Error("Attempted to access an inactive union member");
                    }
                    var position = this._dataSection + 4;
                    if (position < this._pointersSection) {
                        return reader.fields.int32(0, this._segment, position);
                    } else {
                        return 0;
                    }
                };
                parentScope.prototype._floatDefaults = {};
            })(types, G1, allocator);
            parentScope.prototype.getTarget = function() {
                return new G1(this);
            }; /* offer */
            parentScope.prototype.isOffer = function() {
                return this.which() === 0;
            };
            parentScope.OFFER = parentScope.prototype.OFFER = 0;
            var G2 = reader.group(parentScope);
            parentScope._G2 = G2;
            G2.prototype._pointerDefaults = defaults;
            (function(types, parentScope, allocator) {
                var defaults = parentScope.prototype._pointerDefaults; /* sdp */
                var f0 = reader.Text._FIELD;
                parentScope.prototype.getSdp = f0.get(8, 1);
                parentScope.prototype.hasSdp = f0.has(8);
                defaults[1] = (function() {
                    var Reader = reader.Text;
                    var arena = allocator._fromBase64("AQAAAAoAAAAAAAAAAAAAAA==").asReader();
                    return Reader._deref(arena, arena._root(), 0);
                })();
                parentScope.prototype._floatDefaults = {};
            })(types, G2, allocator);
            parentScope.prototype.getOffer = function() {
                if (!this.isOffer()) {
                    throw new Error("Attempted to access an inactive union member");
                }
                return new G2(this);
            }; /* answer */
            parentScope.prototype.isAnswer = function() {
                return this.which() === 1;
            };
            parentScope.ANSWER = parentScope.prototype.ANSWER = 1;
            var G3 = reader.group(parentScope);
            parentScope._G3 = G3;
            G3.prototype._pointerDefaults = defaults;
            (function(types, parentScope, allocator) {
                var defaults = parentScope.prototype._pointerDefaults; /* sdp */
                var f0 = reader.Text._FIELD;
                parentScope.prototype.getSdp = f0.get(8, 1);
                parentScope.prototype.hasSdp = f0.has(8);
                defaults[1] = (function() {
                    var Reader = reader.Text;
                    var arena = allocator._fromBase64("AQAAAAoAAAAAAAAAAAAAAA==").asReader();
                    return Reader._deref(arena, arena._root(), 0);
                })();
                parentScope.prototype._floatDefaults = {};
            })(types, G3, allocator);
            parentScope.prototype.getAnswer = function() {
                if (!this.isAnswer()) {
                    throw new Error("Attempted to access an inactive union member");
                }
                return new G3(this);
            }; /* ice */
            parentScope.prototype.isIce = function() {
                return this.which() === 2;
            };
            parentScope.ICE = parentScope.prototype.ICE = 2;
            var f4 = types["0xf2ae185395b2f8ef"]._FIELD;
            parentScope.prototype.getIce = f4.unionGet(2, 8, 1);
            parentScope.prototype.hasIce = f4.unionHas(2, 8);
            defaults[1] = (function() {
                var Reader = types["0xf2ae185395b2f8ef"];
                var arena = allocator._fromBase64("AAAAAAAAAAA=").asReader();
                return Reader._deref(arena, arena._root(), 0);
            })();
            parentScope.prototype._floatDefaults = {};
        })(types, Structure, allocator);
        parentScope.Peer = Structure;
    })(scope, readers, allocator);
    return readers;
});