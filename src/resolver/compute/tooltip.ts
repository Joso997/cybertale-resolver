
import type { ObjectTemplate, StatTypeEnum } from '@cybertale/interface'
import { getStringStat } from '../transform/stat'
import { isJSONObject, parseJSON } from '../transform/json'

export interface TooltipData {
  toggleBy: string
  value: string
  translate?: string
}

/**
 * Tooltip is stored either as a simple string or as a JSON-encoded TooltipData.
 */
export function getTooltip(
  object: ObjectTemplate,
  tooltipStat: StatTypeEnum,
): TooltipData | string | null {
  const raw = getStringStat(object, tooltipStat)
  if (!raw) return null

  if (isJSONObject(raw)) {
    return parseJSON<TooltipData>(raw)
  }

  return raw
}

export function getTooltipToggleBy(
  object: ObjectTemplate,
  tooltipStat: StatTypeEnum,
): string {
  const tooltip = getTooltip(object, tooltipStat)
  if (!tooltip) return 'tooltip'
  if (typeof tooltip === 'string') return 'tooltip'
  return tooltip.toggleBy || 'tooltip'
}

export function getTooltipText(
  object: ObjectTemplate,
  tooltipStat: StatTypeEnum,
): string {
  const tooltip = getTooltip(object, tooltipStat)
  if (!tooltip) return ''
  if (typeof tooltip === 'string') return tooltip
  return tooltip.value
}
