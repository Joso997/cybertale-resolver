
import type { ObjectTemplate } from '@cybertale/interface'
import { StatTypeEnum } from '@cybertale/interface'
import { findTemplateIndexByStat } from './remove'
import { isJSONArray, parseJSON } from '../transform/json'
import { getStringStat } from '../transform/stat'

/**
 * Updates a value-like stat on the template that matches the payload by some key stat.
 * This mirrors your updateValueData logic, including JSON-array handling.
 */
export function updateValueForTemplate(
  templates: ObjectTemplate[],
  payload: ObjectTemplate,
  options?: {
    valueStat?: StatTypeEnum
    searchByStat?: StatTypeEnum
    valueIndicesStat?: StatTypeEnum
  },
): ObjectTemplate[] {
  const valueStat = options?.valueStat ?? (StatTypeEnum as any).Value
  const searchByStat = options?.searchByStat ?? (StatTypeEnum as any).Tag
  const valueIndicesStat = options?.valueIndicesStat ?? (StatTypeEnum as any).ValueIndices

  const index = findTemplateIndexByStat(templates, getStringStat(payload, searchByStat), searchByStat)
  if (index === -1) return templates

  const target = templates[index]
  const currentRaw = getStringStat(target, valueStat)
  const payloadValue = getStringStat(payload, options?.valueStat ?? valueStat)

  // If current value is a JSON array, update at ValueIndices
  if (isJSONArray(currentRaw)) {
    const arr = parseJSON<unknown[]>(currentRaw) ?? []
    const indicesRaw = getStringStat(payload, valueIndicesStat)
    const idx = Number(indicesRaw)
    if (!Number.isNaN(idx)) {
      arr[idx] = payloadValue
    }
    // Write back as JSON string
    if (target.Stats) {
      target.Stats[valueStat].Data = JSON.stringify(arr)
    }
  } else {
    // Simple scalar assignment
    if (target.Stats) {
      target.Stats[valueStat].Data = payloadValue
    }
  }

  // Return a new array instance to preserve immutability semantics
  const clone = [...templates]
  clone[index] = target
  return clone
}
