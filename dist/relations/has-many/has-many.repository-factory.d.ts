import { Entity } from '../../model';
import { EntityCrudRepository } from '../../repositories';
import { Getter, HasManyDefinition, InclusionResolver } from '../relation.types';
import { HasManyRepository } from './has-many.repository';
export interface HasManyRepositoryFactory<Target extends Entity, ForeignKeyType> {
    /**
     * Invoke the function to obtain HasManyRepository.
     */
    (fkValue: ForeignKeyType): HasManyRepository<Target>;
    /**
     * Use `resolver` property to obtain an InclusionResolver for this relation.
     */
    inclusionResolver: InclusionResolver<Entity, Target>;
}
/**
 * Enforces a constraint on a repository based on a relationship contract
 * between models. For example, if a Customer model is related to an Order model
 * via a HasMany relation, then, the relational repository returned by the
 * factory function would be constrained by a Customer model instance's id(s).
 *
 * @param relationMetadata - The relation metadata used to describe the
 * relationship and determine how to apply the constraint.
 * @param targetRepositoryGetter - The repository which represents the target model of a
 * relation attached to a datasource.
 * @returns The factory function which accepts a foreign key value to constrain
 * the given target repository
 */
export declare function createHasManyRepositoryFactory<Target extends Entity, TargetID, ForeignKeyType>(relationMetadata: HasManyDefinition, targetRepositoryGetter: Getter<EntityCrudRepository<Target, TargetID>>): HasManyRepositoryFactory<Target, ForeignKeyType>;
