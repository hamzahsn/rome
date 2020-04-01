/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Generator from '../../Generator';
import {Tokens} from '../../tokens';
import {MemberExpression, memberExpression, AnyNode} from '@romejs/js-ast';

export default function MemberExpression(
  generator: Generator,
  node: AnyNode,
): Tokens {
  node = memberExpression.assert(node);

  return [
    ...generator.print(node.object, node),
    ...generator.print(node.property, node),
  ];
}
