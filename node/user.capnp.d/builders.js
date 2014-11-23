var Allocator = require('capnp-js/builder/Allocator');
var builder = require('capnp-js/builder/index');
var reader = require('capnp-js/reader/index');
var scope = require('./bScope');
var readers = require('./readers');
    var builders = {};
    var allocator = new Allocator();
    builders.User = (function() {
        var Structure = scope["0x95570979dae93deb"];
        Structure.prototype.getId = function() {
            var position = this._dataSection + 0;
            return reader.fields.int32(0, this._segment, position);
        };
        Structure.prototype.setId = function(value) {
            builder.fields.int32(value, 0, this._segment, this._dataSection + 0);
        };
        Structure.prototype.getName = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            if (reader.isNull(pointer)) {
                builder.copy.pointer.setListPointer(this._defaults.name._arena, this._defaults.name._layout(), this._arena, pointer);
            }
            return builder.Text._deref(this._arena, pointer);
        };
        Structure.prototype.setName = function(value) {
            var params = builder.Text._setParams(value);
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            builder.Text._set(this._arena, pointer, params);
        };
        Structure.prototype.initName = function(n) {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            return builder.Text._init(this._arena, pointer, n + 1);
        };
        Structure.prototype.hasName = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            return (!reader.isNull(pointer));
        };
        Structure.prototype.adoptName = function(value) {
            if (builder.Text._TYPE !== value._TYPE) {
                throw new TypeError();
            }
            builder.Text._adopt(this._arena, {
                segment: this._segment,
                position: this._pointersSection + 0
            }, value);
        };
        Structure.prototype.disownName = function() {
            var pointer = {
                segment: this._segment,
                position: this._pointersSection + 0
            };
            if (reader.isNull(pointer)) {
                return builder.Text._initOrphan(this._arena);
            } else {
                var instance = builder.Text._deref(this._arena, pointer);
                this._arena._zero(pointer, 8);
                instance._isDisowned = true;
                return instance;
            }
        };
        Structure.prototype._defaults = Structure._READER.prototype._defaults;
        return Structure;
    })();
    module.exports = builders;
