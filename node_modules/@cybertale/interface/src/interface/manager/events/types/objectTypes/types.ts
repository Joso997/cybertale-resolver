import { SubObjectTypeEnum, SubObjectType } from '../subObjectType'
import { StatChangeDel, StatChangeEventArgs } from '../../../containerClasses/statChangeEventArgs'
import { SimpleEventDispatcher } from 'ste-simple-events'
import { StatTypeEnum } from '../statType'
import { ObjectTemplate } from '../../../containerClasses/objectTemplate'

export type EventHandlerType = {subObjectType: SubObjectTypeEnum, payload: any}
export type LogicDelegate = (eventHandler: EventHandlerType) => void
// export type ComponentDelegate = (getComponent: () => any) => void

export namespace Manager.Events.Type{

    export abstract class ObjectTypeAbstract {
       private LogicInvoked: SimpleEventDispatcher<EventHandlerType> = new SimpleEventDispatcher<EventHandlerType>()
       public static getComponent: () => any
       public static SetComponent (getComponent: () => any): void {
         throw new Error('Function not implemented')
       }

       public abstract GetComponent (): any

      // protected abstract SubscribeCondition(sender: () => void) : void;
      public abstract Subscribe(subObjectType:SubObjectTypeEnum, statChangeDel:StatChangeDel) : void

      public InvokeStatChange (_statType: StatTypeEnum, _amount: any): void {
        throw new Error('Method not implemented.')
      }

      public ChooseSubType (_object : ObjectTemplate, _data : any = null) : boolean {
        return SubObjectType.SubObjectTypes[_object.SubObjectEnum].ChooseAction(_object, _data, this.InvokeLogic.bind(this))
      }

      protected InvokeLogic (eventHandler: EventHandlerType) : void {
        this.LogicInvoked.dispatch({ subObjectType: eventHandler.subObjectType, payload: eventHandler.payload })
      }

      public SubscribeLogic (logicDel: LogicDelegate) : void {
        this.LogicInvoked.subscribe(logicDel)
      }

      public UnSubscribeLogic (logicDel : LogicDelegate) : void {
        this.LogicInvoked.unsubscribe(logicDel)
      }

      public NullifyLogic () : void {
        this.LogicInvoked.clear()
      }
    }

   abstract class Default extends ObjectTypeAbstract {
     public InvokeStatChange (_statType: StatTypeEnum, _amount: any) : void{
       throw new Error('Method not implemented.')
     }

     public Subscribe (_subObjectType:SubObjectTypeEnum, _statChangeDel:StatChangeDel) :void{
       throw new Error('Method not implemented.')
     }
   }

   abstract class IChangeStat extends ObjectTypeAbstract {
    private StatChangeEvent:SimpleEventDispatcher<StatChangeEventArgs> = new SimpleEventDispatcher<StatChangeEventArgs>()

    public InvokeStatChange (_statType: StatTypeEnum, _amount: any) : void{
      this.StatChangeEvent.dispatch(new StatChangeEventArgs(_statType, _amount))
    }

    public Subscribe (_subObjectType:SubObjectTypeEnum, _statChangeDel:StatChangeDel) :void{
      this.StatChangeEvent.subscribe(SubObjectType.SubObjectTypes[_subObjectType].Subscribe(_statChangeDel))
    }
   }

   export class Field extends IChangeStat {
     public static SetComponent (getComponent: () => any): void {
       Field.getComponent = getComponent
     }

     public GetComponent (): any {
       return Field.getComponent()
     }
   }

   export class Button extends Default {
     public static SetComponent (getComponent: () => any): void {
       Button.getComponent = getComponent
     }

     public GetComponent (): any {
       return Button.getComponent()
     }
   }

   export class Row extends IChangeStat {
     public static SetComponent (getComponent: () => any): void {
       Row.getComponent = getComponent
     }

     public GetComponent (): any {
       return Row.getComponent()
     }
   }

   export class Text extends IChangeStat {
     public static SetComponent (getComponent: () => any): void {
       Text.getComponent = getComponent
     }

     public GetComponent (): any {
       return Text.getComponent()
     }
   }

   export class OutputGroup extends IChangeStat {
     public static SetComponent (getComponent: () => any): void {
       OutputGroup.getComponent = getComponent
     }

     public GetComponent (): any {
       return OutputGroup.getComponent()
     }
   }

   export class Alert extends IChangeStat {
     public static SetComponent (getComponent: () => any): void {
       Alert.getComponent = getComponent
     }

     public GetComponent (): any {
       return Alert.getComponent()
     }
   }

   export class CheckBox extends IChangeStat {
     public static SetComponent (getComponent: () => any): void {
       CheckBox.getComponent = getComponent
     }

     public GetComponent (): any {
       return CheckBox.getComponent()
     }
   }

   export class DataList extends IChangeStat {
     public static SetComponent (getComponent: () => any): void {
       DataList.getComponent = getComponent
     }

     public GetComponent (): any {
       return DataList.getComponent()
     }
   }

   export class SelectList extends IChangeStat {
     public static SetComponent (getComponent: () => any): void {
       SelectList.getComponent = getComponent
     }

     public GetComponent (): any {
       return SelectList.getComponent()
     }
   }

   export class Radio extends IChangeStat {
     public static SetComponent (getComponent: () => any): void {
       Radio.getComponent = getComponent
     }

     public GetComponent (): any {
       return Radio.getComponent()
     }
   }

  export class Column extends IChangeStat {
    public static SetComponent (getComponent: () => any): void {
      Column.getComponent = getComponent
    }

    public GetComponent (): any {
      return Column.getComponent()
    }
  }

  export class ColumnGroup extends IChangeStat {
    public static SetComponent (getComponent: () => any): void {
      ColumnGroup.getComponent = getComponent
    }

    public GetComponent (): any {
      return ColumnGroup.getComponent()
    }
  }

  export class ECabinetRow extends IChangeStat {
    public static SetComponent (getComponent: () => any): void {
      ECabinetRow.getComponent = getComponent
    }

    public GetComponent (): any {
      return ECabinetRow.getComponent()
    }
  }

  export class ECabinetColumn extends IChangeStat {
    public static SetComponent (getComponent: () => any): void {
      ECabinetColumn.getComponent = getComponent
    }

    public GetComponent (): any {
      return ECabinetColumn.getComponent()
    }
  }

  export class ModalForm extends IChangeStat {
    public static SetComponent (getComponent: () => any): void {
      ModalForm.getComponent = getComponent
    }

    public GetComponent (): any {
      return ModalForm.getComponent()
    }
  }

  export class MapPicker extends IChangeStat {
    public static SetComponent (getComponent: () => any): void {
      MapPicker.getComponent = getComponent
    }

    public GetComponent (): any {
      return MapPicker.getComponent()
    }
  }

  export class MultiMedia extends IChangeStat {
    public static SetComponent (getComponent: () => any): void {
      MultiMedia.getComponent = getComponent
    }

    public GetComponent (): any {
      return MultiMedia.getComponent()
    }
  }

  export class InputGroup extends IChangeStat {
    public static SetComponent (getComponent: () => any): void {
      InputGroup.getComponent = getComponent
    }

    public GetComponent (): any {
      return InputGroup.getComponent()
    }
  }

  export class UploadFile extends IChangeStat {
    public static SetComponent (getComponent: () => any): void {
      UploadFile.getComponent = getComponent
    }

    public GetComponent (): any {
      return UploadFile.getComponent()
    }
  }

  export class Label extends IChangeStat {
    public static SetComponent (getComponent: () => any): void {
      Label.getComponent = getComponent
    }

    public GetComponent (): any {
      return Label.getComponent()
    }
  }
  export class ListItem extends IChangeStat {
    public static SetComponent (getComponent: () => any): void {
      ListItem.getComponent = getComponent
    }

    public GetComponent (): any {
      return ListItem.getComponent()
    }
  }
}
