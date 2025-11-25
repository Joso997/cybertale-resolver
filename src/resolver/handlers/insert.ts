
import type { ObjectTemplate } from '@cybertale/interface'

/**
 * Inserts a single ObjectTemplate at the given index and returns a new array.
 */
export function insertTemplateAt(
  templates: ObjectTemplate[],
  index: number,
  template: ObjectTemplate,
): ObjectTemplate[] {
  return [
    ...templates.slice(0, index),
    template,
    ...templates.slice(index),
  ]
}

/**
 * Inserts multiple ObjectTemplates starting at the given index and returns
 * a new array.
 */
export function insertTemplatesAt(
  templates: ObjectTemplate[],
  index: number,
  newTemplates: ObjectTemplate[],
): ObjectTemplate[] {
  return [
    ...templates.slice(0, index),
    ...newTemplates,
    ...templates.slice(index),
  ]
}
