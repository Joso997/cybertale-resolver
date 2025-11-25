import { ObjectTemplate } from '../../../containerClasses/objectTemplate'
import { LogicDelegate } from '../objectTypes/types'
import { StatTypeEnum } from '../statType'

export namespace Manager.Events.Type{

    export abstract class MethodTypeAbstract {
      // public abstract Enact():void;
      public abstract Act(_object:ObjectTemplate, _data : any, _invokeLogic: LogicDelegate): boolean;
    }

    export class None extends MethodTypeAbstract {
      public Act (_object: ObjectTemplate, _data : any, _invokeLogic: LogicDelegate): boolean {
        return true
      }

      public Enact (): void {
        throw new Error('Method not implemented.')
      }
    }

    export class Insert extends MethodTypeAbstract {
      public Act (_object: ObjectTemplate, _data : any, _invokeLogic: LogicDelegate): boolean {
        this.Enact(_data).then(response => (_object.Stats[StatTypeEnum.Value].Data = response))
        return true
      }

      public async Enact (_data : any): Promise<any> {
        return await _data// _data.charAt(0).toUpperCase() + _data.slice(1)
      }
    }

    export class InsertUrl extends MethodTypeAbstract {
      public Act (_object: ObjectTemplate, _data : any, _invokeLogic: LogicDelegate): boolean {
        this.Enact(_data).then(response => (_object.Stats[StatTypeEnum.Value].Data = response))
        return true
      }

      public async Enact (_data : any): Promise<any> {
        // URLs starting with http://, https://, or ftp://
        const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
        return await regexp.test(_data) ? _data : 'Invalid Url'
      }
    }

    export class Click extends MethodTypeAbstract {
      public Act (_object: ObjectTemplate, _data : any, _invokeLogic: LogicDelegate): boolean {
        _invokeLogic({ subObjectType: _object.SubObjectEnum, payload: _object })
        return true
      }

      public Enact (): void {
        throw new Error('Method not implemented.')
      }
    }

    export class InsertClick extends MethodTypeAbstract {
      public Act (_object: ObjectTemplate, _data : any, _invokeLogic: LogicDelegate): boolean {
        _object.Stats[StatTypeEnum.Value].Data = _data
        _invokeLogic({ subObjectType: _object.SubObjectEnum, payload: _object })
        return true
      }

      public async Enact (_data : any): Promise<any> {
        throw new Error('Method not implemented.')
      }
    }

  export class InsertNumber extends MethodTypeAbstract {
    public Act (_object: ObjectTemplate, _data : any, _invokeLogic: LogicDelegate): boolean {
      this.Enact(_data).then(response => (_object.Stats[StatTypeEnum.Value].Data = response))
      return true
    }

    public async Enact (_data : any): Promise<any> {
      if (_data < 1 || _data > 100) {
        // alert('Broj uređaja mora biti veći od 1 i manji od 100')
        return ''
      }
      return await _data
    }
  }

  export class Check extends MethodTypeAbstract {
    public Act (_object: ObjectTemplate, _data : any, _invokeLogic: LogicDelegate): boolean {
      this.Enact(_data).then(response => (_object.Stats[StatTypeEnum.Value].Data = response))
      return true
    }

    public async Enact (_data : any): Promise<any> {
      return await _data
    }
  }

  export class SelectIdFromName extends MethodTypeAbstract {
    public Act (_object: ObjectTemplate, _data : any, _invokeLogic: LogicDelegate): boolean {
      const options = JSON.parse(_object.Stats[StatTypeEnum.ItemList].Data)
      const selectedOption = options.find((option: any) => option.name === _data)
      this.Enact([selectedOption, _data]).then((response) => {
        _object.Stats[StatTypeEnum.Value].Data = response
        _invokeLogic({ subObjectType: _object.SubObjectEnum, payload: _object })
      })
      return true
    }

    public async Enact (_data : any): Promise<any> {
      if (_data[0] !== undefined) {
        return await _data[0]
      } else {
        return {
          id: null,
          name: _data[1]
        }
      }
    }
  }

  export class AClick extends MethodTypeAbstract {
    public Act (_object: ObjectTemplate, _data : any, _invokeLogic: LogicDelegate): boolean {
      _invokeLogic({ subObjectType: _object.SubObjectEnum, payload: _data })
      return true
    }

    public Enact (): void {
      throw new Error('Method not implemented.')
    }
  }
}
