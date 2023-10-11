"use strict";
// 맴버 접근성(타입 스크립트)
// public(기본값): 모든 곳에서 사용 가능
// protected: 클래스 내부또는 하위 클래스에서만 사용 가능
// private: 클래스 내부만 사용 가능(자바스크립트에서는 #)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _Base_truePrivate;
Object.defineProperty(exports, "__esModule", { value: true });
var Base = /** @class */ (function () {
    function Base() {
        this.isPublicImplicit = 0;
        this.isPublicExlicit = 1;
        this.isProected = 2;
        this.isPrivate = 3;
        _Base_truePrivate.set(this, 4);
    }
    return Base;
}());
_Base_truePrivate = new WeakMap();
var Subclass = /** @class */ (function (_super) {
    __extends(Subclass, _super);
    function Subclass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Subclass.prototype.example = function () {
        this.isProected;
        this.isPublicExlicit;
        this.isPublicImplicit;
    };
    return Subclass;
}(Base));
var sub = new Subclass();
sub.example();
sub.isPublicExlicit;
sub.isPublicImplicit;
