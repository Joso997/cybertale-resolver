import type { ObjectTemplate } from '@cybertale/interface'
import { StatTypeEnum, GetValue } from '@cybertale/interface'

/**
 * Generic value resolution from ObjectTemplate stats.
 *
 * This encapsulates the common pattern you used in multiple components:
 * - Stat.Value stores an array (JSON string)
 * - Stat.Option (or other index stat) selects one element from that array
 * - OptionIndices may itself be a JSON array of indices
 */
export function getValueFromTemplate(
    object: ObjectTemplate,
    valueStat: StatTypeEnum,
    indexStat: StatTypeEnum = (StatTypeEnum as any).Option,
): unknown {
  return GetValue(object, valueStat, indexStat)
}
