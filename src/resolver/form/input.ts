
import type { ObjectTemplate, StatTypeEnum } from '@cybertale/interface'
import { getStringStat } from '../transform/stat'

/**
 * Returns the input type for a given template.
 * In your current code this is usually driven by StatTypeEnum.ElementType.
 */
export function getInputTypeFromTemplate(
  object: ObjectTemplate,
  elementTypeStat: StatTypeEnum,
): string {
  return getStringStat(object, elementTypeStat)
}
