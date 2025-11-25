
import type { ObjectTemplate, StatTypeEnum } from '@cybertale/interface'
import { getStringStat, hasStat } from '../transform/stat'

/**
 * Finds the index of an ObjectTemplate by a tag-like stat. Supports the
 * 'tag|something' pattern you use for button payloads.
 */
export function findTemplateIndexByStat(
  templates: ObjectTemplate[],
  value: string,
  searchByStat: StatTypeEnum,
): number {
  return templates.findIndex(t => {
    const statValue = getStringStat(t, searchByStat)
    return statValue === value || statValue === value.split('|')[1]
  })
}

/**
 * Removes the first template whose `searchByStat` matches `value`.
 * Returns a new array (non-mutating).
 */
export function removeByStatValue(
  templates: ObjectTemplate[],
  value: string,
  searchByStat: StatTypeEnum,
): ObjectTemplate[] {
  const index = findTemplateIndexByStat(templates, value, searchByStat)
  if (index === -1) return templates
  return [
    ...templates.slice(0, index),
    ...templates.slice(index + 1),
  ]
}

/**
 * Removes all templates where Stat.DependsOn.Data includes the provided key.
 * This mirrors your old removeElementFromArray implementation, but returns
 * a new array instead of mutating in-place.
 */
export function removeByDependsOn(
  templates: ObjectTemplate[],
  dependsOn: string,
  dependsOnStat: StatTypeEnum,
): ObjectTemplate[] {
  return templates.filter(t => {
    if (!hasStat(t, dependsOnStat)) return true
    const dep = getStringStat(t, dependsOnStat)
    return !dep.includes(dependsOn)
  })
}
