import { StatChangeDel } from '../../../containerClasses/statChangeEventArgs'
import {ObjectType, ObjectTypeEnum} from '../objectType'
import { SubObjectTypeEnum } from '../subObjectType'
import { Manager as ObjectTypeAbstract } from '../objectTypes/types'

export namespace Manager.Events.Type{

    export abstract class RegionAbstract {
        public ObjectTypes: { [index: number]: ObjectTypeAbstract.Events.Type.ObjectTypeAbstract } = {}
        public Subscribe (_objectType: ObjectTypeEnum, _subObjectType: SubObjectTypeEnum, _statChangeDel:StatChangeDel): void {
            this.ObjectTypes[_objectType].Subscribe(_subObjectType, _statChangeDel)
        }
    }

    export class Form extends RegionAbstract {
        public ObjectTypes: { [index: number]: ObjectTypeAbstract.Events.Type.ObjectTypeAbstract } =
            {
                [ObjectTypeEnum.Field]: new ObjectTypeAbstract.Events.Type.Field(),
                [ObjectTypeEnum.Button]: new ObjectTypeAbstract.Events.Type.Button(),
                [ObjectTypeEnum.Text]: new ObjectTypeAbstract.Events.Type.Text(),
                [ObjectTypeEnum.Alert]: new ObjectTypeAbstract.Events.Type.Alert(),
                [ObjectTypeEnum.CheckBox]: new ObjectTypeAbstract.Events.Type.CheckBox(),
                [ObjectTypeEnum.DataList]: new ObjectTypeAbstract.Events.Type.DataList(),
                [ObjectTypeEnum.SelectList]: new ObjectTypeAbstract.Events.Type.SelectList(),
                [ObjectTypeEnum.Radio]: new ObjectTypeAbstract.Events.Type.Radio(),
                [ObjectTypeEnum.ECabinetRow]: new ObjectTypeAbstract.Events.Type.ECabinetRow(),
                [ObjectTypeEnum.MapPicker]: new ObjectTypeAbstract.Events.Type.MapPicker(),
                [ObjectTypeEnum.MultiMedia]: new ObjectTypeAbstract.Events.Type.MultiMedia(),
                [ObjectTypeEnum.UploadFile]: new ObjectTypeAbstract.Events.Type.UploadFile(),
                [ObjectTypeEnum.InputGroup]: new ObjectTypeAbstract.Events.Type.InputGroup(),
                [ObjectTypeEnum.Label]: new ObjectTypeAbstract.Events.Type.Label(),
                [ObjectTypeEnum.ListItem]: new ObjectTypeAbstract.Events.Type.ListItem(),
            }
    }

    export class Table extends RegionAbstract {
        public ObjectTypes: { [index: number]: ObjectTypeAbstract.Events.Type.ObjectTypeAbstract } =
            {
                [ObjectTypeEnum.Row]: new ObjectTypeAbstract.Events.Type.Row(),
                [ObjectTypeEnum.Button]: new ObjectTypeAbstract.Events.Type.Button()
            }
    }

    export class TableColumn extends RegionAbstract {
        public ObjectTypes: { [index: number]: ObjectTypeAbstract.Events.Type.ObjectTypeAbstract } =
            {
                [ObjectTypeEnum.ECabinetRow]: new ObjectTypeAbstract.Events.Type.ECabinetRow(),
                [ObjectTypeEnum.ECabinetColumn]: new ObjectTypeAbstract.Events.Type.ECabinetColumn(),
                [ObjectTypeEnum.Label]: new ObjectTypeAbstract.Events.Type.Label(),
                [ObjectTypeEnum.ListItem]: new ObjectTypeAbstract.Events.Type.ListItem(),
                [ObjectTypeEnum.OutputGroup]: new ObjectTypeAbstract.Events.Type.OutputGroup(),
                [ObjectTypeEnum.Button]: new ObjectTypeAbstract.Events.Type.Button(),
                [ObjectTypeEnum.Column]: new ObjectTypeAbstract.Events.Type.Column(),
                [ObjectTypeEnum.ColumnGroup]: new ObjectTypeAbstract.Events.Type.ColumnGroup()
            }
    }

    export class Footer extends RegionAbstract {
        public ObjectTypes: { [index: number]: ObjectTypeAbstract.Events.Type.ObjectTypeAbstract } =
            {
                [ObjectTypeEnum.Button]: new ObjectTypeAbstract.Events.Type.Button()
            }
    }

    export class List extends RegionAbstract {
        public ObjectTypes: { [index: number]: ObjectTypeAbstract.Events.Type.ObjectTypeAbstract } =
            {
                [ObjectTypeEnum.Button]: new ObjectTypeAbstract.Events.Type.Button(),
                [ObjectTypeEnum.InputGroup]: new ObjectTypeAbstract.Events.Type.InputGroup()
            }
    }

    export class ECabinet extends RegionAbstract {
        public ObjectTypes: { [index: number]: ObjectTypeAbstract.Events.Type.ObjectTypeAbstract } =
            {
                [ObjectTypeEnum.Button]: new ObjectTypeAbstract.Events.Type.Button(),
                [ObjectTypeEnum.ECabinetRow]: new ObjectTypeAbstract.Events.Type.ECabinetRow()
            }
    }

    export class ECabinetRow extends RegionAbstract {
        public ObjectTypes: { [index: number]: ObjectTypeAbstract.Events.Type.ObjectTypeAbstract } =
            {
                [ObjectTypeEnum.ECabinetColumn]: new ObjectTypeAbstract.Events.Type.ECabinetColumn(),
                [ObjectTypeEnum.Button]: new ObjectTypeAbstract.Events.Type.Button(),
                [ObjectTypeEnum.ModalForm]: new ObjectTypeAbstract.Events.Type.ModalForm()
            }
    }

    export class Placeholder extends RegionAbstract {
        public ObjectTypes: { [index: number]: ObjectTypeAbstract.Events.Type.ObjectTypeAbstract } =
            {
                [ObjectTypeEnum.Field]: new ObjectTypeAbstract.Events.Type.Field(),
                [ObjectTypeEnum.Button]: new ObjectTypeAbstract.Events.Type.Button(),
                [ObjectTypeEnum.Text]: new ObjectTypeAbstract.Events.Type.Text(),
                [ObjectTypeEnum.Alert]: new ObjectTypeAbstract.Events.Type.Alert(),
                [ObjectTypeEnum.OutputGroup]: new ObjectTypeAbstract.Events.Type.OutputGroup(),
                [ObjectTypeEnum.Label]: new ObjectTypeAbstract.Events.Type.Label(),
                [ObjectTypeEnum.MultiMedia]: new ObjectTypeAbstract.Events.Type.MultiMedia(),
                [ObjectTypeEnum.ListItem]: new ObjectTypeAbstract.Events.Type.ListItem(),
            }
    }

}
