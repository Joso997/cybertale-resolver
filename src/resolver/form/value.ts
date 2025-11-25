import type { ObjectTemplate } from '@cybertale/interface'
import { StatTypeEnum } from '@cybertale/interface'
import { getStringStat, hasStat } from '../transform/stat'
import { isJSONArray, parseJSON } from '../transform/json'

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
  const raw = getStringStat(object, valueStat)
  if (!raw) return ''

  if (!hasStat(object, indexStat) || !isJSONArray(raw)) {
    return raw
  }

  const data = parseJSON<unknown[]>(raw)
  if (!data) return ''

  const indexRaw = getStringStat(object, indexStat)

  // JSON-array index case
  if (isJSONArray(indexRaw)) {
    const optionIndicesStat = (StatTypeEnum as any).OptionIndices as StatTypeEnum
    const indices = parseJSON<number[]>(indexRaw) ?? []

    const optionIndex = Number(getStringStat(object, optionIndicesStat))
    const mappedIndex = indices[optionIndex]

    // FIXED: redundant typeof removed, replaced with correct bounds + null check
    if (mappedIndex != null && mappedIndex in data) {
      return data[mappedIndex]
    }

    return ''
  }

  // Simple numeric index
  const index = Number(indexRaw)
  if (Number.isNaN(index) || !(index in data)) {
    return ''
  }

  return data[index]
}
