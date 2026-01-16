import type { EventHandlerType, ObjectTemplate } from '@cybertale/interface'
import { WrapperAbstract } from './wrapperAbstract'

export class RowWrapper extends WrapperAbstract {
  public Button (
    eventHandler: EventHandlerType,
    objectTemplates: ObjectTemplate[],
    refreshPage: () => void,
    id: string,
    version: string,
  ): RowWrapper {
    this.eventHandler = eventHandler
    this.objectTemplates = objectTemplates
    this.refreshPage = refreshPage
    this.id = id
    this.version = version
    return this
  }
}
