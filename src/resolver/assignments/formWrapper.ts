import type { EventHandlerType, ObjectTemplate } from '@cybertale/interface'
import { WrapperAbstract } from './wrapperAbstract'

export class FormWrapper extends WrapperAbstract {
  Button (
    eventHandler: EventHandlerType,
    objectTemplates: ObjectTemplate[],
    refreshPage: () => void,
    append: (_objectTemplates: ObjectTemplate[]) => ObjectTemplate[],
    id: string,
    inEdit: boolean,
    version: string,
  ): FormWrapper {
    this.eventHandler = eventHandler
    this.objectTemplates = objectTemplates
    this.refreshPage = refreshPage
    this.append = append
    this.id = id
    this.inEdit = inEdit
    this.version = version
    return this
  }

  DataList (
    eventHandler: EventHandlerType,
    objectTemplates: ObjectTemplate[],
    refreshPage: () => void,
  ): FormWrapper {
    this.eventHandler = eventHandler
    this.objectTemplates = objectTemplates
    this.refreshPage = refreshPage
    return this
  }

  ModalList (
    eventHandler: EventHandlerType,
    objectTemplates: ObjectTemplate[],
    refreshPage: () => void,
  ): FormWrapper {
    this.eventHandler = eventHandler
    this.objectTemplates = objectTemplates
    this.refreshPage = refreshPage
    return this
  }

  SelectList (
    eventHandler: EventHandlerType,
    objectTemplates: ObjectTemplate[],
    refreshPage: () => void,
    append: (_objectTemplates: ObjectTemplate[]) => ObjectTemplate[],
  ): FormWrapper {
    this.eventHandler = eventHandler
    this.objectTemplates = objectTemplates
    this.refreshPage = refreshPage
    this.append = append
    return this
  }

  Field (
    eventHandler: EventHandlerType,
    objectTemplates: ObjectTemplate[],
    refreshPage: () => void,
    append: (_objectTemplates: ObjectTemplate[]) => ObjectTemplate[],
  ): FormWrapper {
    this.eventHandler = eventHandler
    this.objectTemplates = objectTemplates
    this.refreshPage = refreshPage
    this.append = append
    return this
  }

  Radio (
    eventHandler: EventHandlerType,
    objectTemplates: ObjectTemplate[],
    refreshPage: () => void,
    append: (_objectTemplates: ObjectTemplate[]) => ObjectTemplate[],
  ): FormWrapper {
    this.eventHandler = eventHandler
    this.objectTemplates = objectTemplates
    this.refreshPage = refreshPage
    this.append = append
    return this
  }
}
