/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Generator from '../../Generator';
import {Tokens} from '../../tokens';
import {
  FlowTypeParameterDeclaration,
  flowTypeParameterDeclaration,
  AnyNode,
} from '@romejs/js-ast';
import FlowTypeParameterInstantiation from './FlowTypeParameterInstantiation';

export default function FlowTypeParameterDeclaration(
  generator: Generator,
  node: AnyNode,
): Tokens {
  node = flowTypeParameterDeclaration.assert(node);
  return FlowTypeParameterInstantiation(generator, node);
}
