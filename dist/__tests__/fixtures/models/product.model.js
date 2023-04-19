"use strict";
// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: @loopback/repository
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const tslib_1 = require("tslib");
const __1 = require("../../..");
let Product = class Product extends __1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, __1.property)({
        type: 'number',
        id: true,
        description: 'The unique identifier for a product',
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Product.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, __1.property)({ type: 'string' }),
    (0, tslib_1.__metadata)("design:type", String)
], Product.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, __1.property)({ type: 'string' }),
    (0, tslib_1.__metadata)("design:type", String)
], Product.prototype, "slug", void 0);
(0, tslib_1.__decorate)([
    (0, __1.property)({
        type: 'date',
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Product.prototype, "createdAt", void 0);
Product = (0, tslib_1.__decorate)([
    (0, __1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Product);
exports.Product = Product;
//# sourceMappingURL=product.model.js.map