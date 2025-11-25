import { Manager } from './subObjectTypes/types'

export enum SubObjectTypeEnum {ParentObject, Middle, Left, Right, Up, Down}

export class SubObjectType {
 public static SubObjectTypes: { [index: number]: Manager.Events.Type.SubObjectTypeAbstract } = {
   [SubObjectTypeEnum.ParentObject]: new Manager.Events.Type.ParentObject(),
   [SubObjectTypeEnum.Middle]: new Manager.Events.Type.Middle(),
   [SubObjectTypeEnum.Left]: new Manager.Events.Type.Left(),
   [SubObjectTypeEnum.Right]: new Manager.Events.Type.Right(),
   [SubObjectTypeEnum.Up]: new Manager.Events.Type.Up(),
   [SubObjectTypeEnum.Down]: new Manager.Events.Type.Down()
 };
}
