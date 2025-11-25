import { ObjectTemplate } from '../../../containerClasses/objectTemplate'
import { StatChangeDel } from '../../../containerClasses/statChangeEventArgs'
import { ActionType } from '../actionType'
import { LogicDelegate } from '../objectTypes/types'

export namespace Manager.Events.Type{

    export abstract class SubObjectTypeAbstract {
      public ChooseAction (_object: ObjectTemplate, _data : any, _invokeLogic: LogicDelegate) : boolean {
        return ActionType.ActionTypes[_object.ActionEnum].Act(_object, _data, _invokeLogic)
      }

      public abstract Subscribe(_statChangeDel:StatChangeDel):StatChangeDel;
    }

    export class ParentObject extends SubObjectTypeAbstract {
      public Subscribe (_statChangeDel: StatChangeDel): StatChangeDel {
        return _statChangeDel
      }
    }

    export class Middle extends SubObjectTypeAbstract {
      public Subscribe (_statChangeDel: StatChangeDel): StatChangeDel {
        throw new Error('Method not implemented.')
      }
    }

    export class Left extends SubObjectTypeAbstract {
      public Subscribe (_statChangeDel: StatChangeDel): StatChangeDel {
        throw new Error('Method not implemented.')
      }
    }

    export class Right extends SubObjectTypeAbstract {
      public Subscribe (_statChangeDel: StatChangeDel): StatChangeDel {
        throw new Error('Method not implemented.')
      }
    }

  export class Up extends SubObjectTypeAbstract {
    public Subscribe (_statChangeDel: StatChangeDel): StatChangeDel {
      throw new Error('Method not implemented.')
    }
  }

  export class Down extends SubObjectTypeAbstract {
    public Subscribe (_statChangeDel: StatChangeDel): StatChangeDel {
      throw new Error('Method not implemented.')
    }
  }
}
