"use strict";
// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/repository
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const testlab_1 = require("@loopback/testlab");
const __1 = require("../../../");
describe('model decorator', () => {
    let Address = class Address extends __1.ValueObject {
    };
    Address = (0, tslib_1.__decorate)([
        (0, __1.model)()
    ], Address);
    let Phone = class Phone extends __1.ValueObject {
    };
    Phone = (0, tslib_1.__decorate)([
        (0, __1.model)()
    ], Phone);
    let Receipt = class Receipt extends __1.Entity {
    };
    Receipt = (0, tslib_1.__decorate)([
        (0, __1.model)({
            properties: {
                id: {
                    type: 'number',
                    required: true,
                },
            },
        })
    ], Receipt);
    let Account = class Account extends __1.Entity {
    };
    Account = (0, tslib_1.__decorate)([
        (0, __1.model)()
    ], Account);
    let Profile = class Profile extends __1.Entity {
    };
    Profile = (0, tslib_1.__decorate)([
        (0, __1.model)()
    ], Profile);
    let Product = class Product extends __1.Entity {
    };
    (0, tslib_1.__decorate)([
        (0, __1.property)(),
        (0, tslib_1.__metadata)("design:type", String)
    ], Product.prototype, "id", void 0);
    (0, tslib_1.__decorate)([
        (0, __1.property)(),
        (0, tslib_1.__metadata)("design:type", String)
    ], Product.prototype, "name", void 0);
    (0, tslib_1.__decorate)([
        (0, __1.property)(),
        (0, tslib_1.__metadata)("design:type", Number)
    ], Product.prototype, "price", void 0);
    Product = (0, tslib_1.__decorate)([
        (0, __1.model)()
    ], Product);
    let Order = class Order extends __1.Entity {
    };
    (0, tslib_1.__decorate)([
        (0, __1.property)({
            mysql: {
                column: 'QTY',
            },
        }),
        (0, tslib_1.__metadata)("design:type", Number)
    ], Order.prototype, "quantity", void 0);
    (0, tslib_1.__decorate)([
        (0, __1.property)({ type: 'string', id: true, generated: true }),
        (0, tslib_1.__metadata)("design:type", String)
    ], Order.prototype, "id", void 0);
    (0, tslib_1.__decorate)([
        (0, __1.belongsTo)(() => Customer),
        (0, tslib_1.__metadata)("design:type", String)
    ], Order.prototype, "customerId", void 0);
    (0, tslib_1.__decorate)([
        (0, __1.property)(),
        (0, tslib_1.__metadata)("design:type", Boolean)
    ], Order.prototype, "isShipped", void 0);
    Order = (0, tslib_1.__decorate)([
        (0, __1.model)({ name: 'order' })
    ], Order);
    let Customer = class Customer extends __1.Entity {
    };
    (0, tslib_1.__decorate)([
        (0, __1.property)({ type: 'string', id: true, generated: true }),
        (0, tslib_1.__metadata)("design:type", String)
    ], Customer.prototype, "id", void 0);
    (0, tslib_1.__decorate)([
        (0, __1.embedsOne)(),
        (0, tslib_1.__metadata)("design:type", Address)
    ], Customer.prototype, "address", void 0);
    (0, tslib_1.__decorate)([
        (0, __1.embedsMany)(),
        (0, tslib_1.__metadata)("design:type", Array)
    ], Customer.prototype, "phones", void 0);
    (0, tslib_1.__decorate)([
        (0, __1.referencesMany)(),
        (0, tslib_1.__metadata)("design:type", Array)
    ], Customer.prototype, "accounts", void 0);
    (0, tslib_1.__decorate)([
        (0, __1.referencesOne)(),
        (0, tslib_1.__metadata)("design:type", Profile)
    ], Customer.prototype, "profile", void 0);
    (0, tslib_1.__decorate)([
        (0, __1.hasMany)(() => Order),
        (0, tslib_1.__metadata)("design:type", Array)
    ], Customer.prototype, "orders", void 0);
    (0, tslib_1.__decorate)([
        (0, __1.hasOne)(() => Order),
        (0, tslib_1.__metadata)("design:type", Order)
    ], Customer.prototype, "lastOrder", void 0);
    (0, tslib_1.__decorate)([
        (0, __1.relation)({ type: __1.RelationType.hasMany }),
        (0, tslib_1.__metadata)("design:type", Array)
    ], Customer.prototype, "recentOrders", void 0);
    Customer = (0, tslib_1.__decorate)([
        (0, __1.model)()
    ], Customer);
    it('hides a property defined as hidden', () => {
        let Client = class Client extends __1.Entity {
            constructor(data) {
                super(data);
            }
        };
        (0, tslib_1.__decorate)([
            (0, __1.property)(),
            (0, tslib_1.__metadata)("design:type", String)
        ], Client.prototype, "name", void 0);
        (0, tslib_1.__decorate)([
            (0, __1.property)({ hidden: true }),
            (0, tslib_1.__metadata)("design:type", String)
        ], Client.prototype, "password", void 0);
        Client = (0, tslib_1.__decorate)([
            (0, __1.model)(),
            (0, tslib_1.__metadata)("design:paramtypes", [Object])
        ], Client);
        const client = new Client({
            name: 'name',
            password: 'password',
        });
        (0, testlab_1.expect)(Client.definition.settings.hiddenProperties).to.containEql('password');
        (0, testlab_1.expect)(client.toJSON()).to.eql({
            name: 'name',
        });
    });
    it('throws error if design type is not provided', () => {
        const createModel = () => {
            let Client = 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            class Client extends __1.Entity {
            };
            (0, tslib_1.__decorate)([
                (0, __1.property)(),
                (0, tslib_1.__metadata)("design:type", void 0)
            ], Client.prototype, "id", void 0);
            Client = (0, tslib_1.__decorate)([
                (0, __1.model)()
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            ], Client);
        };
        (0, testlab_1.expect)(createModel).to.throw(Error, { code: 'CANNOT_INFER_PROPERTY_TYPE' });
    });
    // Skip the tests before we resolve the issue around global `Reflector`
    // The tests are passing it run alone but fails with `npm test`
    it('adds model metadata', () => {
        const meta = core_1.MetadataInspector.getClassMetadata(__1.MODEL_KEY, Order);
        (0, testlab_1.expect)(meta).to.eql({ name: 'order' });
    });
    it('adds model metadata without name', () => {
        const meta = core_1.MetadataInspector.getClassMetadata(__1.MODEL_KEY, Receipt);
        (0, testlab_1.expect)(meta).to.eql({
            name: 'Receipt',
            properties: {
                id: {
                    type: 'number',
                    required: true,
                },
            },
        });
    });
    it('adds model metadata with custom name', () => {
        let Doohickey = class Doohickey {
        };
        Doohickey = (0, tslib_1.__decorate)([
            (0, __1.model)({ name: 'foo' })
        ], Doohickey);
        const meta = core_1.MetadataInspector.getClassMetadata(__1.MODEL_KEY, Doohickey);
        (0, testlab_1.expect)(meta).to.eql({ name: 'foo' });
    });
    it('updates static property "modelName"', () => {
        let Category = class Category extends __1.Entity {
        };
        Category = (0, tslib_1.__decorate)([
            (0, __1.model)()
        ], Category);
        (0, testlab_1.expect)(Category.modelName).to.equal('Category');
    });
    it('adds model metadata with arbitrary properties', () => {
        var _a;
        let Arbitrary = class Arbitrary {
        };
        Arbitrary = (0, tslib_1.__decorate)([
            (0, __1.model)({ arbitrary: 'property' })
        ], Arbitrary);
        const meta = (_a = core_1.MetadataInspector.getClassMetadata(__1.MODEL_KEY, Arbitrary)) !== null && _a !== void 0 ? _a : 
        /* istanbul ignore next */ {};
        (0, testlab_1.expect)(meta.arbitrary).to.eql('property');
    });
    it('adds property metadata', () => {
        var _a;
        const meta = (_a = core_1.MetadataInspector.getAllPropertyMetadata(__1.MODEL_PROPERTIES_KEY, Order.prototype)) !== null && _a !== void 0 ? _a : {};
        (0, testlab_1.expect)(meta.quantity).to.eql({
            type: Number,
            mysql: {
                column: 'QTY',
            },
        });
        (0, testlab_1.expect)(meta.id).to.eql({
            type: 'string',
            id: true,
            generated: true,
            useDefaultIdType: false,
        });
        (0, testlab_1.expect)(meta.isShipped).to.eql({ type: Boolean });
    });
    it('adds explicitly declared array property metadata', () => {
        var _a;
        let ArrayModel = class ArrayModel {
        };
        (0, tslib_1.__decorate)([
            (0, __1.property)({ type: Array }),
            (0, tslib_1.__metadata)("design:type", Array)
        ], ArrayModel.prototype, "strArr", void 0);
        ArrayModel = (0, tslib_1.__decorate)([
            (0, __1.model)()
        ], ArrayModel);
        const meta = (_a = core_1.MetadataInspector.getAllPropertyMetadata(__1.MODEL_PROPERTIES_KEY, ArrayModel.prototype)) !== null && _a !== void 0 ? _a : {};
        (0, testlab_1.expect)(meta.strArr).to.eql({ type: Array });
    });
    it('adds embedsOne metadata', () => {
        var _a;
        const meta = (_a = core_1.MetadataInspector.getAllPropertyMetadata(__1.RELATIONS_KEY, Customer.prototype)) !== null && _a !== void 0 ? _a : {};
        (0, testlab_1.expect)(meta.address).to.eql({
            type: __1.RelationType.embedsOne,
        });
    });
    it('adds embedsMany metadata', () => {
        var _a;
        const meta = (_a = core_1.MetadataInspector.getAllPropertyMetadata(__1.RELATIONS_KEY, Customer.prototype)) !== null && _a !== void 0 ? _a : {};
        (0, testlab_1.expect)(meta.phones).to.eql({
            type: __1.RelationType.embedsMany,
        });
    });
    it('adds referencesMany metadata', () => {
        var _a;
        const meta = (_a = core_1.MetadataInspector.getAllPropertyMetadata(__1.RELATIONS_KEY, Customer.prototype)) !== null && _a !== void 0 ? _a : {};
        (0, testlab_1.expect)(meta.accounts).to.eql({
            type: __1.RelationType.referencesMany,
        });
    });
    it('adds referencesOne metadata', () => {
        var _a;
        const meta = (_a = core_1.MetadataInspector.getAllPropertyMetadata(__1.RELATIONS_KEY, Customer.prototype)) !== null && _a !== void 0 ? _a : {};
        (0, testlab_1.expect)(meta.profile).to.eql({
            type: __1.RelationType.referencesOne,
        });
    });
    it('adds hasMany metadata', () => {
        var _a;
        const meta = (_a = core_1.MetadataInspector.getAllPropertyMetadata(__1.RELATIONS_KEY, Customer.prototype)) !== null && _a !== void 0 ? _a : {};
        (0, testlab_1.expect)(meta.orders).to.containEql({
            type: __1.RelationType.hasMany,
            name: 'orders',
        });
        (0, testlab_1.expect)(meta.orders.source).to.be.exactly(Customer);
        (0, testlab_1.expect)(meta.orders.target()).to.be.exactly(Order);
    });
    it('adds belongsTo metadata', () => {
        var _a;
        const meta = (_a = core_1.MetadataInspector.getAllPropertyMetadata(__1.RELATIONS_KEY, Order.prototype)) !== null && _a !== void 0 ? _a : {};
        const relationDef = meta.customerId;
        (0, testlab_1.expect)(relationDef).to.containEql({
            type: __1.RelationType.belongsTo,
            name: 'customer',
            target: () => Customer,
            keyFrom: 'customerId',
        });
        (0, testlab_1.expect)(relationDef.source).to.be.exactly(Order);
        (0, testlab_1.expect)(relationDef.target()).to.be.exactly(Customer);
    });
    it('adds hasOne metadata', () => {
        var _a;
        const meta = (_a = core_1.MetadataInspector.getAllPropertyMetadata(__1.RELATIONS_KEY, Customer.prototype)) !== null && _a !== void 0 ? _a : {};
        (0, testlab_1.expect)(meta.lastOrder).to.containEql({
            type: __1.RelationType.hasOne,
            name: 'lastOrder',
            target: () => Order,
            source: Customer,
        });
    });
    it('adds relation metadata', () => {
        var _a;
        const meta = (_a = core_1.MetadataInspector.getAllPropertyMetadata(__1.RELATIONS_KEY, Customer.prototype)) !== null && _a !== void 0 ? _a : {};
        (0, testlab_1.expect)(meta.recentOrders).to.eql({
            type: __1.RelationType.hasMany,
        });
    });
    it('adds hasMany metadata to the constructor', () => {
        class Person extends __1.Entity {
        }
        let House = class House extends __1.Entity {
        };
        (0, tslib_1.__decorate)([
            (0, __1.property)(),
            (0, tslib_1.__metadata)("design:type", String)
        ], House.prototype, "name", void 0);
        (0, tslib_1.__decorate)([
            (0, __1.hasMany)(() => Person, { keyTo: 'fk' }),
            (0, tslib_1.__metadata)("design:type", Array)
        ], House.prototype, "person", void 0);
        House = (0, tslib_1.__decorate)([
            (0, __1.model)()
        ], House);
        const relationMeta = core_1.MetadataInspector.getPropertyMetadata(__1.RELATIONS_KEY, House.prototype, 'person');
        (0, testlab_1.expect)(House.definition).to.have.property('relations');
        (0, testlab_1.expect)(House.definition.relations).to.containEql({ person: relationMeta });
    });
    describe('property namespace', () => {
        describe('array', () => {
            it('"@property.array" adds array metadata', () => {
                var _a;
                let TestModel = class TestModel {
                };
                (0, tslib_1.__decorate)([
                    __1.property.array(Product),
                    (0, tslib_1.__metadata)("design:type", Array)
                ], TestModel.prototype, "items", void 0);
                TestModel = (0, tslib_1.__decorate)([
                    (0, __1.model)()
                ], TestModel);
                const meta = (_a = core_1.MetadataInspector.getAllPropertyMetadata(__1.MODEL_PROPERTIES_KEY, TestModel.prototype)) !== null && _a !== void 0 ? _a : {};
                (0, testlab_1.expect)(meta.items).to.eql({ type: Array, itemType: Product });
            });
            it('throws when @property.array is used on a non-array property', () => {
                testlab_1.expect.throws(() => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    class Oops {
                    }
                    (0, tslib_1.__decorate)([
                        __1.property.array(Product),
                        (0, tslib_1.__metadata)("design:type", Product)
                    ], Oops.prototype, "product", void 0);
                }, Error, __1.property.ERR_PROP_NOT_ARRAY);
            });
        });
    });
});
//# sourceMappingURL=model-and-relation.decorator.unit.js.map