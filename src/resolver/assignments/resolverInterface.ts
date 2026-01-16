import type { ObjectTemplate } from '@cybertale/interface'

export interface ResolverInterface<T> {
  FormSelectList (wrapper: T): Promise<ObjectTemplate[]>
  FormModalDataList (wrapper: T): Promise<ObjectTemplate[]>
  FormDataList (wrapper: T): Promise<ObjectTemplate[]>
  FormButton (wrapper: T): Promise<ObjectTemplate[]>
  FormRadio (wrapper: T): Promise<ObjectTemplate[]>
  FormField (wrapper: T): Promise<ObjectTemplate[]>
  RowButton (wrapper: T): Promise<ObjectTemplate[]>
  TableButton (wrapper: T): Promise<ObjectTemplate[]>
}
