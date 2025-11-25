import {Manager} from './statTypes/types'

export enum StatTypeEnum {
  Label,
  Value,
  Design,
  Tag,
  Id,
  ElementType,
  Placeholder,
  ItemList,
  Tooltip,
  Required,
  Disabled,
  AutoComplete,
  BelongsTo,
  ErrorMessage,
  IsValid,
  Order,
  DependsOn,
  Name,
  Inherit,
  BreakLine,
  ValueIndices,
  OptionIndices,
  Option
}

export class StatType {
 public static StatTypes: { [index: number]: Manager.Events.Type.CreateStatDel } =
 {
   [StatTypeEnum.Tag]: new Manager.Events.Type.Tag().CreateStat,
   [StatTypeEnum.Value]: new Manager.Events.Type.Value().CreateStat,
   [StatTypeEnum.Design]: new Manager.Events.Type.Design().CreateStat,
   [StatTypeEnum.Label]: new Manager.Events.Type.Label().CreateStat,
   [StatTypeEnum.Id]: new Manager.Events.Type.Id().CreateStat,
   [StatTypeEnum.ElementType]: new Manager.Events.Type.ElementType().CreateStat,
   [StatTypeEnum.Placeholder]: new Manager.Events.Type.Placeholder().CreateStat,
   [StatTypeEnum.ItemList]: new Manager.Events.Type.ItemList().CreateStat,
   [StatTypeEnum.Tooltip]: new Manager.Events.Type.Tooltip().CreateStat,
   [StatTypeEnum.Required]: new Manager.Events.Type.Required().CreateStat,
   [StatTypeEnum.Disabled]: new Manager.Events.Type.Disabled().CreateStat,
   [StatTypeEnum.AutoComplete]: new Manager.Events.Type.AutoComplete().CreateStat,
   [StatTypeEnum.BelongsTo]: new Manager.Events.Type.BelongsTo().CreateStat,
   [StatTypeEnum.ErrorMessage]: new Manager.Events.Type.ErrorMessage().CreateStat,
   [StatTypeEnum.IsValid]: new Manager.Events.Type.IsValid().CreateStat,
   [StatTypeEnum.Order]: new Manager.Events.Type.Order().CreateStat,
   [StatTypeEnum.DependsOn]: new Manager.Events.Type.DependsOn().CreateStat,
   [StatTypeEnum.Name]: new Manager.Events.Type.Name().CreateStat,
   [StatTypeEnum.Inherit]: new Manager.Events.Type.Inherit().CreateStat,
   [StatTypeEnum.BreakLine]: new Manager.Events.Type.BreakLine().CreateStat,
   [StatTypeEnum.ValueIndices]: new Manager.Events.Type.ValueIndices().CreateStat,
   [StatTypeEnum.OptionIndices]: new Manager.Events.Type.OptionIndices().CreateStat,
   [StatTypeEnum.Option]: new Manager.Events.Type.Option().CreateStat
 }
}
