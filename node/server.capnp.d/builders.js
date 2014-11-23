var Allocator = require('capnp-js/builder/Allocator');
var builder = require('capnp-js/builder/index');
var reader = require('capnp-js/reader/index');
var scope = require('./bScope');
var readers = require('./readers');
var file0 = require('../user.capnp.d/builders');
var file1 = require('../peer.capnp.d/builders');
    var builders = {};
    var allocator = new Allocator();
    builders.EMPTY_HOSTS_UPDATE = readers.EMPTY_HOSTS_UPDATE;
    builders.Server = (function() {
        var Structure = scope["0x898617f522cfa2ab"];
        Structure.prototype.which = function() {
            return reader.primitives.uint16(this._segment, this._dataSection + 0);
        };
        Structure.prototype._setWhich = function(discriminant) {
            builder.zero.pointer(this._arena, {
                segment: this._segment,
                position: this._pointersSection + 0
            });
            var position = this._dataSection + 0;
            builder.primitives.uint16(discriminant, this._segment, position);
        };
        Structure.prototype.isSession = function() {
            return this.which() === 0;
        };
        Structure.SESSION = Structure.prototype.SESSION = 0;
        Structure.Group_session = (function(Parent) {
            var Structure = builder.group(Parent._READER.Group_session);
            var Builder_user = scope["0x95570979dae93deb"];
            Structure.prototype.initUser = function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 0
                };
                return Builder_user._init(this._arena, pointer, this._depth + 1);
            };
            Structure.prototype.getUser = function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 0
                };
                if (reader.isNull(pointer)) {
                    builder.copy.pointer.setStructPointer(this._defaults.user._arena, this._defaults.user._layout(), this._arena, pointer);
                }
                return Builder_user._deref(this._arena, pointer);
            };
            Structure.prototype.setUser = function(value) {
                if (Builder_user._TYPE !== value._TYPE) throw new TypeError();
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 0
                };
                Builder_user._set(this._arena, pointer, value);
            };
            Structure.prototype.adoptUser = function(value) {
                if (Builder_user._TYPE !== value._TYPE) throw new TypeError();
                if (!value._isOrphan) throw new ValueError('Cannot adopt non-orphans');
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 0
                };
                Builder_user._adopt(this._arena, pointer, value);
            };
            Structure.prototype.disownUser = function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 0
                };
                if (reader.isNull(pointer)) {
                    return Builder_user._initOrphan(this._arena);
                } else {
                    var instance = Builder_user._deref(this._arena, pointer);
                    this._arena._zero(pointer, 8);
                    instance._isOrphan = true;
                    return instance;
                }
            };
            Structure.prototype.disownAsReaderUser = function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 0
                };
                var instance = Builder_user._READER._deref(this._arena, pointer);
                this._arena._zero(pointer, 8);
                instance._isOrphan = true;
                return instance;
            };
            Structure.prototype.hasUser = function() {
                var pointer = {
                    segment: this._segment,
                    position: this._pointersSection + 0
                };
                return (!reader.isNull(pointer));
            };
            Structure.prototype._defaults = Structure._READER.prototype._defaults;
            return Structure;
        })(Structure);
        Structure.prototype.getSession = function() {
            if (!this.isSession()) {
                throw new Error("Attempted to access an inactive union member");
            }
            return new Structure.Group_session(this);
        };
        Structure.prototype.initSession = function() {
            this._setWhich(0);
            return new Structure.Group_session(this);
        };
        Structure.prototype.isHostsUpdate = function() {
            return this.which() === 1;
        };
        Structure.HOSTS_UPDATE = Structure.prototype.HOSTS_UPDATE = 1;
        var Builder_hostsUpdate = builder.lists.structure(scope["0x95570979dae93deb"]);
        Structure.prototype.initHostsUpdate = function(n) {
            this._setWhich(1);
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            return Builder_hostsUpdate._init(this._arena, pointer, n);
        };
        Structure.prototype.getHostsUpdate = function() {
            if (!this.isHostsUpdate()) {
                throw new Error("Attempted to access an inactive union member");
            }
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.setListPointer(this._defaults.hostsUpdate._arena, this._defaults.hostsUpdate._layout(), this._arena, pointer);
            }
            return Builder_hostsUpdate._deref(this._arena, pointer);
        };
        Structure.prototype.setHostsUpdate = function(value) {
            if (Builder_hostsUpdate._TYPE !== value._TYPE) throw new TypeError();
            this._setWhich(1);
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            Builder_hostsUpdate._set(this._arena, pointer, value);
        };
        Structure.prototype.adoptHostsUpdate = function(value) {
            if (Builder_hostsUpdate._TYPE !== value._TYPE) throw new TypeError();
            if (!value._isOrphan) throw new ValueError('Cannot adopt non-orphans');
            this._setWhich(1);
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            Builder_hostsUpdate._adopt(this._arena, pointer, value);
        };
        Structure.prototype.disownHostsUpdate = function() {
            if (!this.isHostsUpdate()) {
                throw new Error("Attempted to access an inactive union member");
            }
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            if (reader.isNull(pointer)) {
                return Builder_hostsUpdate._initOrphan(this._arena);
            } else {
                var instance = Builder_hostsUpdate._deref(this._arena, pointer);
                this._arena._zero(pointer, 8);
                instance._isOrphan = true;
                return instance;
            }
        };
        Structure.prototype.disownAsReaderHostsUpdate = function() {
            if (!this.isHostsUpdate()) {
                throw new Error("Attempted to access an inactive union member");
            }
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            var instance = Builder_hostsUpdate._READER._deref(this._arena, pointer);
            this._arena._zero(pointer, 8);
            instance._isOrphan = true;
            return instance;
        };
        Structure.prototype.hasHostsUpdate = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            return (this.isHostsUpdate() && !reader.isNull(pointer));
        };
        Structure.prototype.isPeer = function() {
            return this.which() === 2;
        };
        Structure.PEER = Structure.prototype.PEER = 2;
        var Builder_peer = scope["0xe5e90b52fd6c402e"];
        Structure.prototype.initPeer = function() {
            this._setWhich(2);
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            return Builder_peer._init(this._arena, pointer, this._depth + 1);
        };
        Structure.prototype.getPeer = function() {
            if (!this.isPeer()) {
                throw new Error("Attempted to access an inactive union member");
            }
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.setStructPointer(this._defaults.peer._arena, this._defaults.peer._layout(), this._arena, pointer);
            }
            return Builder_peer._deref(this._arena, pointer);
        };
        Structure.prototype.setPeer = function(value) {
            if (Builder_peer._TYPE !== value._TYPE) throw new TypeError();
            this._setWhich(2);
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            Builder_peer._set(this._arena, pointer, value);
        };
        Structure.prototype.adoptPeer = function(value) {
            if (Builder_peer._TYPE !== value._TYPE) throw new TypeError();
            if (!value._isOrphan) throw new ValueError('Cannot adopt non-orphans');
            this._setWhich(2);
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            Builder_peer._adopt(this._arena, pointer, value);
        };
        Structure.prototype.disownPeer = function() {
            if (!this.isPeer()) {
                throw new Error("Attempted to access an inactive union member");
            }
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            if (reader.isNull(pointer)) {
                return Builder_peer._initOrphan(this._arena);
            } else {
                var instance = Builder_peer._deref(this._arena, pointer);
                this._arena._zero(pointer, 8);
                instance._isOrphan = true;
                return instance;
            }
        };
        Structure.prototype.disownAsReaderPeer = function() {
            if (!this.isPeer()) {
                throw new Error("Attempted to access an inactive union member");
            }
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            var instance = Builder_peer._READER._deref(this._arena, pointer);
            this._arena._zero(pointer, 8);
            instance._isOrphan = true;
            return instance;
        };
        Structure.prototype.hasPeer = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            return (this.isPeer() && !reader.isNull(pointer));
        };
        Structure.prototype._defaults = Structure._READER.prototype._defaults;
        return Structure;
    })();
    module.exports = builders;
