import type { ObjectTemplate, StatTypeEnum } from '@cybertale/interface'
import { getRawStat } from '../transform/stat'

/**
 * Applies default values to stats that are currently empty / undefined.
 * `defaults` is a map of StatTypeEnum -> default Data value.
 */
export function applyDefaults(
    template: ObjectTemplate,
    defaults: Partial<Record<StatTypeEnum, unknown>>,
): ObjectTemplate {
  for (const [key, value] of Object.entries(defaults)) {
    const statKey = Number(key) as StatTypeEnum

    // Only apply if undefined or empty
    if (getRawStat(template, statKey) == null && template.Stats) {
      const stringValue = value !== undefined && value !== null
          ? String(value)            // <—— FIX HERE
          : ''

      if (!template.Stats[statKey]) {
        // Create new stat entry
        template.Stats[statKey] = { Data: stringValue } as any
      } else {
        template.Stats[statKey].Data = stringValue
      }
    }
  }
  return template
}
