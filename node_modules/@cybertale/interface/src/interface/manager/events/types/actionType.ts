import { Manager } from './actionTypes/types'

export enum ActionTypeEnum {
  None,
  Click,
  Insert,
  InsertUrl,
  InsertClick,
  InsertNumber,
  Check,
  SelectIdFromName,
  AClick
}

export class ActionType {
 public static ActionTypes: { [index: number]: Manager.Events.Type.MethodTypeAbstract } = {
   [ActionTypeEnum.None]: new Manager.Events.Type.None(),
   [ActionTypeEnum.Click]: new Manager.Events.Type.Click(),
   [ActionTypeEnum.Insert]: new Manager.Events.Type.Insert(),
   [ActionTypeEnum.InsertUrl]: new Manager.Events.Type.InsertUrl(),
   [ActionTypeEnum.InsertClick]: new Manager.Events.Type.InsertClick(),
   [ActionTypeEnum.InsertNumber]: new Manager.Events.Type.InsertNumber(),
   [ActionTypeEnum.Check]: new Manager.Events.Type.Check(),
   [ActionTypeEnum.SelectIdFromName]: new Manager.Events.Type.SelectIdFromName(),
   [ActionTypeEnum.AClick]: new Manager.Events.Type.AClick()
 }
}
