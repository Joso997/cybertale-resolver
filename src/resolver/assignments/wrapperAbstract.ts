import type { EventHandlerType, ObjectTemplate } from '@cybertale/interface'

export class WrapperAbstract {
  get inEdit (): boolean {
    return <boolean> this._inEdit
  }

  set inEdit (value: boolean) {
    this._inEdit = value
  }

  get id (): string {
    return <string> this._id
  }

  set id (value: string) {
    this._id = value
  }

  get version (): string {
    return <string> this._version
  }

  set version (value: string) {
    this._version = value
  }

  get append (): (_objectTemplates: ObjectTemplate[]) => ObjectTemplate[] {
    return <(_objectTemplates: ObjectTemplate[]) => ObjectTemplate[]> this._append
  }

  set append (value: (_objectTemplates: ObjectTemplate[]) => ObjectTemplate[]) {
    this._append = value
  }

  get refreshPage (): () => void {
    return <() => void> this._refreshPage
  }

  set refreshPage (value: () => void) {
    this._refreshPage = value
  }

  get objectTemplates (): ObjectTemplate[] {
    return <ObjectTemplate[]> this._objectTemplates
  }

  set objectTemplates (value: ObjectTemplate[]) {
    this._objectTemplates = value
  }

  get eventHandler (): EventHandlerType {
    return <EventHandlerType> this._eventHandler
  }

  set eventHandler (value: EventHandlerType) {
    this._eventHandler = value
  }

  private _eventHandler: EventHandlerType | undefined
  private _objectTemplates: ObjectTemplate[] | undefined
  private _refreshPage: (() => void) | undefined
  private _append: ((_objectTemplates: ObjectTemplate[]) => ObjectTemplate[]) | undefined
  private _id: string | undefined
  private _inEdit: boolean | undefined
  private _version: string | undefined
}
