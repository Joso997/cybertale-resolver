
import type { ObjectTemplate, StatTypeEnum } from '@cybertale/interface'
import { getStringStat } from '../transform/stat'
import { parseJSON, isJSONArray } from '../transform/json'

export interface SelectItem {
  id: string | number
  name?: string
  [key: string]: unknown
}

/**
 * Parses the ItemList stat (usually JSON) into a typed array.
 */
export function getSelectItems(
  object: ObjectTemplate,
  itemListStat: StatTypeEnum,
): SelectItem[] {
  const raw = getStringStat(object, itemListStat)
  if (!raw || !isJSONArray(raw)) return []
  const parsed = parseJSON<unknown[]>(raw) ?? []
  return parsed.filter((item): item is SelectItem => {
    return !!item && typeof (item as any).id !== 'undefined'
  })
}

/**
 * Gets the currently selected item id from the template.
 * This simply returns Stat.Value (or similar), but extracted in one place.
 */
export function getSelectedId(
  object: ObjectTemplate,
  valueStat: StatTypeEnum,
): string {
  return getStringStat(object, valueStat)
}

/**
 * Returns the selected SelectItem, if found.
 */
export function getSelectedItem(
  object: ObjectTemplate,
  itemListStat: StatTypeEnum,
  valueStat: StatTypeEnum,
): SelectItem | null {
  const items = getSelectItems(object, itemListStat)
  const selectedId = getSelectedId(object, valueStat)
  return items.find(item => String(item.id) === selectedId) ?? null
}
