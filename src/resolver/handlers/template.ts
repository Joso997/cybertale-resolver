import { ObjectTemplate, StatTypeEnum } from '@cybertale/interface'
import { v4 as uuidv4 } from 'uuid'
import { insertTemplateAt } from './insert'
import { findTemplateIndexByStat } from './remove'
import { getStringStat } from '../transform/stat'

export function cloneObjectTemplate(object: ObjectTemplate): ObjectTemplate {
  return new ObjectTemplate(
    object.Region,
    object.ObjectEnum,
    object.SubObjectEnum,
    object.ActionEnum,
    object.Stats,
  )
}

export function appendTemplates(
  templates: ObjectTemplate[],
  newTemplates: ObjectTemplate[],
): ObjectTemplate[] {
  const appended = newTemplates.map(template => cloneObjectTemplate(template))
  return [...templates, ...appended]
}

export function addInputGroupTemplate(
  templates: ObjectTemplate[],
  payload: ObjectTemplate,
  options?: {
    tagStat?: StatTypeEnum
    elementTypeStat?: StatTypeEnum
    idFactory?: () => string
  },
): ObjectTemplate[] {
  const tagStat = options?.tagStat ?? StatTypeEnum.Tag
  const elementTypeStat = options?.elementTypeStat ?? StatTypeEnum.ElementType
  const idFactory = options?.idFactory ?? uuidv4

  const payloadClone = cloneObjectTemplate(payload)
  if (payloadClone.Stats?.[elementTypeStat]) {
    payloadClone.Stats[elementTypeStat].Data = ''
  }

  const baseTag = getStringStat(payloadClone, tagStat)
  let insertOffset = 0
  for (const template of templates) {
    const tagValue = getStringStat(template, tagStat)
    if (tagValue.includes(baseTag)) {
      insertOffset += 1
    }
  }

  if (payloadClone.Stats?.[tagStat]) {
    payloadClone.Stats[tagStat].Data = baseTag + idFactory()
  }

  const baseIndex = findTemplateIndexByStat(templates, baseTag, tagStat)
  const insertIndex = baseIndex + insertOffset
  return insertTemplateAt(templates, insertIndex, payloadClone)
}
