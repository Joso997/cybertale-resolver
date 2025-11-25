
import type { ObjectTemplate, StatTypeEnum } from '@cybertale/interface'
import { parseJSON } from './json'

// Safe stat accessors for ObjectTemplate. These centralize the common
// patterns used across UI and resolver code.

export function hasStat(object: ObjectTemplate, stat: StatTypeEnum): boolean {
  return !!object.Stats && object.Stats[stat] !== undefined
}

export function getRawStat(object: ObjectTemplate, stat: StatTypeEnum): unknown {
  return object.Stats?.[stat]?.Data
}

export function getStringStat(object: ObjectTemplate, stat: StatTypeEnum): string {
  const raw = getRawStat(object, stat)
  if (raw == null) return ''
  return String(raw)
}

export function getBooleanStat(object: ObjectTemplate, stat: StatTypeEnum): boolean {
  const raw = getRawStat(object, stat)
  // Treat empty string / null / undefined as false, anything else as true.
  return !!raw
}

export function getJSONStat<T = unknown>(object: ObjectTemplate, stat: StatTypeEnum): T | null {
  const raw = getRawStat(object, stat)
  if (typeof raw !== 'string') return null
  return parseJSON<T>(raw)
}
