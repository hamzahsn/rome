/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Generator from '../../Generator';
import {Tokens, operator} from '../../tokens';
import {MetaProperty, metaProperty, AnyNode} from '@romejs/js-ast';

export default function MetaProperty(
  generator: Generator,
  node: AnyNode,
): Tokens {
  node = metaProperty.assert(node);

  return [
    ...generator.print(node.meta, node),
    operator('.'),
    ...generator.print(node.property, node),
  ];
}
