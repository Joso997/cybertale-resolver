
import type { ObjectTemplate, StatTypeEnum } from '@cybertale/interface'
import { getStringStat } from '../transform/stat'
import { isJSONObject, parseJSON } from '../transform/json'

export interface LabelData {
  iconClass?: string
  title?: string
  styleData?: string
  contentValue?: string
  contentClass?: string
  translate?: string
}

/**
 * Attempts to parse Stat.Label as a LabelData object; if it is a plain string,
 * it is returned as `title` for convenience.
 */
export function getLabelData(
  object: ObjectTemplate,
  labelStat: StatTypeEnum,
): LabelData {
  const raw = getStringStat(object, labelStat)
  if (!raw) return { title: '' }

  if (isJSONObject(raw)) {
    const parsed = parseJSON<LabelData>(raw)
    if (parsed) return parsed
  }

  return { title: raw }
}

/**
 * Returns the plain label text (usually LabelData.title or raw string).
 */
export function getLabelText(
  object: ObjectTemplate,
  labelStat: StatTypeEnum,
): string {
  return getLabelData(object, labelStat).title ?? ''
}
