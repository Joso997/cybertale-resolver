import {Manager} from './objectTypes/types'

export enum ObjectTypeEnum {
  Row,
  Field,
  Button,
  Text,
  OutputGroup,
  Alert,
  CheckBox,
  DataList,
  SelectList,
  Radio,
  Column,
  ColumnGroup,
  InputGroup,
  ECabinetRow,
  ECabinetColumn,
  ModalForm,
  MapPicker,
  MultiMedia,
  UploadFile,
  Label,
  ListItem,
}

export class ObjectType {
  public static ObjectTypes: { [index: number]: (getVueComponent: () => any) => void} =
    {
      [ObjectTypeEnum.Field]: Manager.Events.Type.Field.SetComponent,
      [ObjectTypeEnum.Row]: Manager.Events.Type.Row.SetComponent,
      [ObjectTypeEnum.Button]: Manager.Events.Type.Button.SetComponent,
      [ObjectTypeEnum.Text]: Manager.Events.Type.Text.SetComponent,
      [ObjectTypeEnum.OutputGroup]: Manager.Events.Type.OutputGroup.SetComponent, // Free to use.
      [ObjectTypeEnum.Alert]: Manager.Events.Type.Alert.SetComponent,
      [ObjectTypeEnum.CheckBox]: Manager.Events.Type.CheckBox.SetComponent,
      [ObjectTypeEnum.DataList]: Manager.Events.Type.DataList.SetComponent,
      [ObjectTypeEnum.SelectList]: Manager.Events.Type.SelectList.SetComponent,
      [ObjectTypeEnum.Radio]: Manager.Events.Type.Radio.SetComponent,
      [ObjectTypeEnum.Column]: Manager.Events.Type.Column.SetComponent,
      [ObjectTypeEnum.ColumnGroup]: Manager.Events.Type.ColumnGroup.SetComponent,
      [ObjectTypeEnum.InputGroup]: Manager.Events.Type.InputGroup.SetComponent,
      [ObjectTypeEnum.ECabinetRow]: Manager.Events.Type.ECabinetRow.SetComponent,
      [ObjectTypeEnum.ECabinetColumn]: Manager.Events.Type.ECabinetColumn.SetComponent,
      [ObjectTypeEnum.ModalForm]: Manager.Events.Type.ModalForm.SetComponent,
      [ObjectTypeEnum.MapPicker]: Manager.Events.Type.MapPicker.SetComponent,
      [ObjectTypeEnum.MultiMedia]: Manager.Events.Type.MultiMedia.SetComponent,
      [ObjectTypeEnum.UploadFile]: Manager.Events.Type.UploadFile.SetComponent,
      [ObjectTypeEnum.Label]: Manager.Events.Type.Label.SetComponent,
      [ObjectTypeEnum.ListItem]: Manager.Events.Type.ListItem.SetComponent,
    }
}
