// Copyright IBM Corp. 2018,2020. All Rights Reserved.
// Node module: @loopback/repository
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Entity, EntityResolver} from '../../model';
import {relation} from '../relation.decorator';
import {HasOneDefinition, RelationType} from '../relation.types';

/*
 * Decorator for hasOne
 * infers foreign key name from target model name unless explicitly specified
 * @param targetResolver - Target model for hasOne relation
 * @param definition - Optional metadata for setting up hasOne relation
 * @returns A property decorator
 */
export function hasOne<T extends Entity>(
  targetResolver: EntityResolver<T>,
  definition?: Partial<HasOneDefinition>,
) {
  let targetModelName: undefined | string = undefined;
  if(targetResolver && typeof targetResolver == 'function'){
      targetModelName = targetResolver()?.definition?.name;
  }
  return function (decoratedTarget: object, key: string) {
    // property.array(targetResolver)(decoratedTarget, key);

    const meta: HasOneDefinition = Object.assign(
      // default values, can be customized by the caller
      {},
      // properties provided by the caller
      definition,
      // properties enforced by the decorator
      {
        type: RelationType.hasOne,
        targetsMany: false,
        name: key,
        source: decoratedTarget.constructor,
        target: targetResolver,
        targetModelName: targetModelName
      },
    );
    relation(meta)(decoratedTarget, key);
  };
}
