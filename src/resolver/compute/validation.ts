
import type { ObjectTemplate, StatTypeEnum } from '@cybertale/interface'
import { getRawStat, getStringStat } from '../transform/stat'

/**
 * Computes a Bootstrap-esque validation class ('is-valid' | 'is-invalid' | '').
 * This mirrors the repeated logic you had in several components.
 */
export function computeValidationClass(
  object: ObjectTemplate,
  isValidStat: StatTypeEnum,
  errorMessageStat: StatTypeEnum,
): string {
  const isValidRaw = getRawStat(object, isValidStat)
  const errorMessage = getStringStat(object, errorMessageStat)

  if (isValidRaw === undefined || isValidRaw === '') return ''
  if (isValidRaw) return 'is-valid'
  if (errorMessage) return 'is-invalid'
  return ''
}
