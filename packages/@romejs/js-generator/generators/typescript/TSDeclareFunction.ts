/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {TSDeclareFunction, tsDeclareFunction, AnyNode} from '@romejs/js-ast';
import {Generator} from '@romejs/js-generator';
import {Tokens, word, operator, space} from '../../tokens';

export default function TSDeclareFunction(
  generator: Generator,
  node: AnyNode,
): Tokens {
  node = tsDeclareFunction.assert(node);

  let tokens: Tokens = [];

  if (node.declare) {
    tokens = [word('declare'), space];
  }

  return [
    ...tokens,
    word('function'),
    ...generator.print(node.id, node),
    ...generator.print(node.head, node),
    operator(';'),
  ];
}
