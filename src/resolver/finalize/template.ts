
import type { ObjectTemplate } from '@cybertale/interface'

/**
 * Finalization hook for a single ObjectTemplate before it is sent to the backend
 * or stored. For now this is a light pass-through, but centralizing this
 * allows you to add future cleanup in one place (e.g. stripping transient stats).
 */
export function finalizeTemplate(template: ObjectTemplate): ObjectTemplate {
  // Shallow clone to avoid accidental external mutation
  return new (template.constructor as typeof ObjectTemplate)(
    template.Region,
    template.ObjectEnum,
    template.SubObjectEnum,
    template.ActionEnum,
    template.Stats,
  )
}

/**
 * Convenience function for finalizing an array of templates.
 */
export function finalizeTemplates(templates: ObjectTemplate[]): ObjectTemplate[] {
  return templates.map(finalizeTemplate)
}
