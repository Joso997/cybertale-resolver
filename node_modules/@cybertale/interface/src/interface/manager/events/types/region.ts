import { Manager } from './regionTypes/types'

export enum RegionEnum {
  Form,
  Table,
  TableColumn,
  Footer,
  List,
  ECabinet,
  ECabinetRow,
  ModalForm,
  Placeholder
}

export class RegionType {
    public static RegionTypes: { [index: number]: Manager.Events.Type.RegionAbstract } =
    {
      [RegionEnum.Form]: new Manager.Events.Type.Form(),
      [RegionEnum.Table]: new Manager.Events.Type.Table(),
      [RegionEnum.TableColumn]: new Manager.Events.Type.TableColumn(),
      [RegionEnum.Footer]: new Manager.Events.Type.Footer(),
      [RegionEnum.List]: new Manager.Events.Type.List(),
      [RegionEnum.ECabinet]: new Manager.Events.Type.ECabinet(),
      [RegionEnum.ECabinetRow]: new Manager.Events.Type.ECabinetRow(),
      [RegionEnum.ModalForm]: new Manager.Events.Type.Form(),
      [RegionEnum.Placeholder]: new Manager.Events.Type.Placeholder()
    }
}
