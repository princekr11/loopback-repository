"use strict";
// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/repository
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const tslib_1 = require("tslib");
const __1 = require("../../../");
const base_entity_1 = require("../mixins/base-entity");
const category_property_mixin_1 = require("../mixins/category-property-mixin");
let Note = class Note extends (0, category_property_mixin_1.AddCategoryPropertyMixin)(base_entity_1.BaseEntity) {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, __1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Note.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, __1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Note.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, __1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Note.prototype, "content", void 0);
Note = (0, tslib_1.__decorate)([
    (0, __1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Note);
exports.Note = Note;
//# sourceMappingURL=note.model.js.map