# @cybertale/interface

[![npm version](https://badge.fury.io/js/%40cybertale%2Finterface.svg)](https://badge.fury.io/js/%40cybertale%2Finterface)
[![Build Status](https://travis-ci.com/Joso997/cyber-interface.svg?branch=main)](https://travis-ci.com/Joso997/cyber-interface)
[![Coverage Status](https://coveralls.io/repos/github/Joso997/cyber-interface/badge.svg?branch=main)](https://coveralls.io/github/Joso997/cyber-interface?branch=main)
![License](https://img.shields.io/npm/l/%40cybertale%2Finterface.svg)

## Description

@cybertale/interface is a Web Development library that offers an ECS interface. 
Its purpose is to provide developers with a defined set of architectural guidelines, which, if followed, will turn their application into a data-driven one. Additionally, it can be utilized as an add-on with any JavaScript framework. 
For example, it can be incorporated with Vue.

**Keywords**
- Entity - carries all information to generate your component.
- Region - combined with mechanic it evolves into a powerful container which allows orderly manipulation of entities data.
- Mechanic - like in game development, a self-contained logic blocks for entity manipulation.

**Key Feature:**
- It ensures that each HTML element corresponds to a single code block.
- With SPA frameworks, you can separate your code by routes and make each route a self-contained region.
- For actual logic blocks, you can avoid duplicate code by following this principle consistently.
- One Form view/component to rule them all. (Brought to you by data-driven development)
- The API response will contain all the necessary data while keeping its size to a minimum.

## Installation

You can install @cybertale/interface using npm:
```
npm install @cybertale/interface
```
Alternatively, you can download the package from GitHub and include it in your project manually.

## Usage
It is necessary for you to define and link each component that you intend to utilize. 
The most recommended location for this task would be in your main.ts file.

Here's an example of how to use @cybertale/interface:

```typescript
import { ObjectType, ObjectTypeEnum } from '@cybertale/interface/src';

ObjectType.ObjectTypes[ObjectTypeEnum.Field](() => your_InputComponent)
ObjectType.ObjectTypes[ObjectTypeEnum.Button](() => your_ButtonComponent)
ObjectType.ObjectTypes[ObjectTypeEnum.Row](() => your_RowComponent)
(etc...)
```

After completing the task of defining and linking your components, the next step would be to create a folder named "mechanics". 
Within this folder, you would define your logic classes. 
These mechanic classes should be exclusively utilized for all Resource API requests, among other things.

Example:

```typescript
import { MechanicAbstract, ObjectTemplate, EventHandlerType } from '@cybertale/interface'

export namespace Manager.Mechanic{
    export class ExampleMechanic extends MechanicAbstract {
        public async InitGet (_id: string): Promise<ObjectTemplate[]> {
            // Write your API GET call here.
        }
        
        public InitSet (_objectTemplates: ObjectTemplate[]): ObjectTemplate[] {
          this.ObjectTemplates = _objectTemplates
          return this.ObjectTemplates
        }
        
        protected SubscribeConditions (): void {
          RegionType.RegionTypes[RegionEnum.TableColumn].ObjectTypes[ObjectTypeEnum.Button].SubscribeLogic(this.Button.bind(this))
        }
        
        public UnsubscribeConditions (): void {
          RegionType.RegionTypes[RegionEnum.TableColumn].ObjectTypes[ObjectTypeEnum.Button].NullifyLogic()
        }
        
        protected Button (eventHandler: EventHandlerType): void {
            switch (eventHandler.subObjectType) {
                case SubObjectTypeEnum.Left:
                    ...
                    break
                case SubObjectTypeEnum.Right:
                    ...
                    break
                default:
                    ...
                    break
            }
        }
    }
}
```
By using data-defined code, you can manage with just one file for View usage. However, for the sake of convenience, it is suggested to organize your views into separate files i.e. Form and Show.

Your folder structure could look like:

```
project
└───src
    └───views
    │   │   Form.vue
    │   │   Show.vue
    │   │   ...
    │
    └───mechanics
    │   │   tableMechanic.ts
    │   │   rowMechanic.ts
    │   │   formMechanic.ts
    │   │   ...
    │
    └───components
        └───formComponnets
        │    │  InputComponent.vue
        │    │  ButtonComponent.vue
        │    │  CheckBoxComponent.vue
        │    │  ...
        │             
        └───showComponents
             │  TableComponent.vue
             │  RowComponent.vue
             │  ColumnComponent.vue
             │  ...
```

Next add a component, as an example it is provided a hybrid component that is both an entity and a region (example is given as a Vue component):
```vue
<template>
  <tr v-if="renderComponent">
    <th scope="row"><img alt="arrow" width="27" src="../assets/arrow.png"></th>
    <component v-for="(_objectTemplate, key, index) in objectTemplates" :key="`${ key }-${ index }-${ Math.random().toString(36).slice(2, 7) }`"  :is="getComponent(_objectTemplate.Region, _objectTemplate.ObjectEnum)" :entity='resolveEntities(_objectTemplate)' :object='_objectTemplate'></component>
  </tr>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component'
  import { Manager } from '@/mechanics/rowMechanic'
  import {
    ObjectTemplate,
    MechanicAbstract,
    ObjectType,
    StatTypeEnum,
    ObjectTypeEnum,
    RegionType,
    RegionEnum,
    SubObjectTypeEnum, ActionTypeEnum, StatType
  } from '@cybertale/interface'
  @Options({
    props: {
      entity: Array,
      index: Number,
      rerender: Function
    }
  })
  export default class RowComponent extends Vue {
    rerender!: () => void
    mechanic: MechanicAbstract = Manager.Mechanic.RowMechanic.getInstance(this.rerender.bind(this))
    regionEnum = RegionEnum
    statTypeEnum = StatTypeEnum
    objectTypeEnum = ObjectTypeEnum
    objectType = ObjectType
    renderComponent= false
    entity!: ObjectTemplate[]
    objectTemplates!: ObjectTemplate[]
    index!: number
    belongsTo!: { [key: string]: ObjectTemplate[] }

    mounted () {
      this.belongsTo = {}
      const itemsToDelete = []
      for (const item of this.entity) {
        if (item.Stats[StatTypeEnum.BelongsTo] !== undefined) {
          const data = item.Stats[StatTypeEnum.BelongsTo].Data
          this.belongsTo[data] = this.belongsTo[data] || []
          this.belongsTo[data].push(item)
          itemsToDelete.push(this.entity.indexOf(item))
        }
      }
      const tempEntity = JSON.parse(JSON.stringify(this.entity)) // TODO find a better fix (One way would be to add stats to getComponent and to not show if belongs
      for (let i = itemsToDelete.length - 1; i >= 0; i--) {
        tempEntity.splice(itemsToDelete[i], 1)
      }
      this.objectTemplates = this.mechanic.InitSet(tempEntity)
      this.renderComponent = true
    }

    beforeUnmount () {
      this.mechanic.UnsubscribeConditions()
    }

    resolveEntities (_object: ObjectTemplate) {
      for (const tag of Object.keys(this.belongsTo)) {
        if (_object.Stats[StatTypeEnum.Tag].Data === tag) {
          return this.belongsTo[tag]
        }
      }
    }

    getComponent (_regionEnum : number, _objectEnum: number) {
      return RegionType.RegionTypes[_regionEnum].ObjectTypes[_objectEnum].GetComponent()
    }
  }
</script>
```

NOTE: Currently, only one instance of a region type can be used multiple times per instance, provided that the region has entities subscribed to it.
```ts
mechanic: MechanicAbstract = Manager.Mechanic.RowMechanic.getInstance(this.rerender.bind(this))
```
If you intend to use a region only once per instance or if no entities are subscribed to it, you must use:
```ts
mechanic: MechanicAbstract = new Manager.Mechanic.FormMechanic(this.reRender.bind(this))
```
To illustrate the potential use of stats and how to link html events with entities, here is an example of a pure entity:
```vue
<template>
  <input class="form-control"
         :id="object?.Stats[statTypeEnum.Tag].Data"
         :required="attributeCheck(statTypeEnum.Required)"
         :disabled="attributeCheck(statTypeEnum.Disabled)"
         :autocomplete="returnIfExists(statTypeEnum.AutoComplete)"
         :class="object?.Stats[statTypeEnum.Design].Data+' '+validate()"
         :type="getValue(statTypeEnum.ElementType)"
         :value="labelToValue()"
         :placeholder="returnIfExists(statTypeEnum.Placeholder)"
         @input="regionType.RegionTypes[object?.Region].ObjectTypes[object?.ObjectEnum].ChooseSubType(object as ObjectTemplate, $event.target.value)">
  <div class="invalid-feedback">{{ returnIfExists(statTypeEnum.ErrorMessage) }}</div>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component'
  import { ObjectTemplate, ObjectType, ObjectTypeEnum, RegionEnum, RegionType, StatTypeEnum } from '@cybertale/interface'
  import { TagHelpers } from '@/definitions/tagHelpers'
  import CyberTags = TagHelpers.CyberTags

  @Options({
    computed: {
      ObjectTemplate () {
        return ObjectTemplate
      }
    },
    props: {
      object: ObjectTemplate
    }
  })
  export default class FieldComponent extends Vue {
    statTypeEnum = StatTypeEnum
    objectTypeEnum = ObjectTypeEnum
    objectType = ObjectType
    regionType = RegionType
    regionEnum = RegionEnum
    object!: ObjectTemplate

    labelToValue (): string {
      if (this.returnIfExists(this.statTypeEnum.Tag).includes(CyberTags.label) && this.attributeCheck(this.statTypeEnum.Disabled)) {
        return this.returnIfExists(this.statTypeEnum.Label)
      }
      return this.getValue(StatTypeEnum.Value, StatTypeEnum.ValueIndices)
    }

    getValue (statEnum: number, indexStatTypeEnum = StatTypeEnum.Option) : string {
      if (this.object.Stats[statEnum]) {
        if (this.object.Stats[indexStatTypeEnum] && this.object.Stats[statEnum] && this.isJSON(this.object.Stats[statEnum].Data)) {
          const data = JSON.parse(this.object.Stats[statEnum].Data)
          return data[Number(this.object.Stats[indexStatTypeEnum].Data)]
        } else {
          return this.object.Stats[statEnum].Data
        }
      }
      return ''
    }

    isJSON (str: string): boolean {
      let temp = null
      try {
        temp = JSON.parse(str)
      } catch (e) {
        return false
      }
      return Array.isArray(temp)
    }

    returnIfExists (tag: number): string {
      if (this.object.Stats[tag]) {
        return this.object.Stats[tag].Data
      }
      return ''
    }

    validate () : string {
      if (this.object.Stats[this.statTypeEnum.IsValid] === undefined) { return '' }
      if (this.object.Stats[this.statTypeEnum.IsValid].Data === '') { return '' }
      if (this.object.Stats[this.statTypeEnum.IsValid].Data) { return 'is-valid' }
      if (this.object.Stats[this.statTypeEnum.ErrorMessage].Data === null) { return '' }
      if (this.object.Stats[this.statTypeEnum.ErrorMessage].Data !== '') { return 'is-invalid' }
      return ''
    }

    attributeCheck (statType : number) : boolean | string {
      if (this.object.Stats[statType] === undefined) { return false }
      if (this.object.Stats[statType].Data === '') { return false }
      return this.object.Stats[statType].Data
    }

    tooltipCase () : string | undefined {
      if (this.object !== undefined) {
        if (this.object.Stats[this.statTypeEnum.Tooltip] !== undefined) {
          return this.object.Stats[this.statTypeEnum.Tooltip].Data
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-check .form-check-input{
    float: none;
  }
  .form-check-input{
    margin-right: 1%;
  }
  .form-check-input:checked {
    background-color: #606467;
    border-color: #606467;
  }
</style>
```

## Container Scheme
Similar to HTML fieldset or Bootstrap input-group equivalent there is an ability to define a whole form on a backend but only send the container part as a submit request. It allows for building your own form fields using generic HTML field elements or personal custom elements:
```vue
<template>
  <div v-if="!reRender">
    <div v-if="returnIfExists(statTypeEnum.ElementType) === 'button'" class="mb-3 row justify-content-md-center">
      <button data-bs-toggle="tooltip" data-bs-placement="top"
              :class="object.Stats[statTypeEnum.Design].Data"
              @click.prevent='regionType.RegionTypes[object.Region].ObjectTypes[objectTypeEnum.Button].ChooseSubType(JSON.parse(JSON.stringify(objectCopy(object as ObjectTemplate))) as ObjectTemplate)'>
        {{object.Stats[statTypeEnum.Label].Data}}
      </button>
    </div>
    <div v-else class="mb-3 row justify-content-md-center">
      <div class="col-lg"></div>
      <div class="col">
        <div class="input-group" v-for="(group, index) in groupedObjectTemplates" :key="`${ index }-${ Math.random().toString(36).slice(2, 7) }`">
          <component v-for="(_objectTemplate, key) in group" :is="getComponent(_objectTemplate.Region, _objectTemplate.ObjectEnum)" :object='_objectTemplate' :key="`${ key }-${ Math.random().toString(36).slice(2, 7) }`"></component>
        </div>
      </div>
      <div class="col-lg"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Manager } from '@/mechanics/placeholderMechanic'
import {
  ActionTypeEnum,
  MechanicAbstract,
  ObjectTemplate,
  ObjectType,
  ObjectTypeEnum,
  RegionEnum,
  RegionType,
  StatType,
  StatTypeEnum,
  SubObjectTypeEnum
} from '@cybertale/interface'

@Options({
  computed: {
    ObjectTemplate () {
      return ObjectTemplate
    }
  },
  props: {
    entity: Array,
    object: ObjectTemplate,
    index: Number,
    pageRefresh: {
      type: Boolean,
      default: true
    }
  }
})
export default class InputGroupComponent extends Vue {
  mechanic: MechanicAbstract = new Manager.Mechanic.PlaceholderMechanic()
  objectTemplate = ObjectTemplate
  regionEnum = RegionEnum
  regionType = RegionType
  statTypeEnum = StatTypeEnum
  objectTypeEnum = ObjectTypeEnum
  subObjectTypeEnum = SubObjectTypeEnum
  actionTypeEnum = ActionTypeEnum
  objectType = ObjectType
  object!: ObjectTemplate
  entity!: ObjectTemplate[]
  index!: number
  objectTemplates: ObjectTemplate[] = []
  pageRefresh!: boolean

  get groupedObjectTemplates () : ObjectTemplate[][] {
    const groups = []
    let currentGroup: ObjectTemplate[] = []

    this.objectTemplates.forEach(_objectTemplate => {
      currentGroup.push(_objectTemplate)

      if (_objectTemplate.Stats[StatTypeEnum.BreakLine]) {
        groups.push(currentGroup)
        currentGroup = []
      }
    })

    // Push the last group if it's not empty
    if (currentGroup.length > 0) {
      groups.push(currentGroup)
    }

    return groups
  }

  returnIfExists (tag: number): string {
    if (this.object.Stats[tag]) {
      return this.object.Stats[tag].Data
    }
    return ''
  }

  mounted () : void {
    this.objectTemplates = this.mechanic.InitSet(this.entityCopy(this.entity))
  }

  get reRender () : boolean {
    this.objectTemplates = this.mechanic.InitSet(this.entityCopy(this.entity))
    return this.pageRefresh
  }

  objectCopy (_object : ObjectTemplate) : ObjectTemplate {
    if (_object.Stats[StatTypeEnum.Inherit]) {
      for (const stat of JSON.parse(_object.Stats[StatTypeEnum.Inherit].Data)) {
        if (_object.Stats[stat]) {
          _object.Stats[stat].Data = this.object.Stats[stat].Data
        } else if (this.object.Stats[stat]) {
          _object.Stats[stat] = StatType.StatTypes[stat]()
          _object.Stats[stat].Data = this.object.Stats[stat].Data
        }
      }
    }
    return new ObjectTemplate(_object.Region, _object.ObjectEnum, _object.SubObjectEnum, _object.ActionEnum, _object.Stats)
  }

  entityCopy (entities: ObjectTemplate[]) : ObjectTemplate[] {
    const arr = []
    entities = JSON.parse(JSON.stringify(entities))
    for (const entity of entities) {
      entity.Stats[StatTypeEnum.Tag].Data = entity.Stats[StatTypeEnum.Tag].Data + this.object.Stats[StatTypeEnum.Tag].Data
      if (entity.Stats[StatTypeEnum.Option]) {
        entity.Stats[StatTypeEnum.Option].Data = this.object.Stats[StatTypeEnum.Option].Data
      }
      arr.push(this.objectCopy(entity))
    }
    return arr
  }

  beforeUnmount () : void {
    this.mechanic.UnsubscribeConditions()
  }

  getComponent (_regionEnum : number, _objectEnum: number): StatTypeEnum {
    // _object.Stats[StatTypeEnum.Tag].Data = uuidv4()
    return RegionType.RegionTypes[_regionEnum].ObjectTypes[_objectEnum].GetComponent()
  }
}
</script>
```

## Access
All your Resource API responses will from now on be unified into a single json data block.
```json
[[
  {"Stats":
    [
      {"Data":"default"},
      {"Data":""},
      {"Data":"name"},{
      "Data":"bf0a1192-dad3-4305-aeec-a675d702020c"}
    ],"Region":1,"ObjectEnum":1,"SubObjectEnum":0,"ActionEnum":0}
]]
```
The above is an example of a single entity data. Based on this data program will generate an HTML representation as defined.
To access each individual data use:
```ts
this.object.Stats[statTypeEnum.Value].Data // "default"
this.object.Stats[statTypeEnum.Design].Data // ""
this.object.Stats[statTypeEnum.Tag].Data // "name"
this.object.Stats[statTypeEnum.Id].Data // "bf0a1192-dad3-4305-aeec-a675d702020c"
```
To change visual and logical representation of the above data just change the entity enum types:
```ts
this.object.Region = RegionEnum.Form //Region acts as a container
this.object.ObjectEnum = ObjectTypeEnum.Button //Link to the component
this.object.SubObjectEnum = SubObjectTypeEnum.Middle //To diffirentiate between actions
this.object.ActionEnum = ActionTypeEnum.Click //Called manually or over linked html event
```
NOTE: depending on action type, it may even invoke a mechanic event if subscribed.

Example on how to subscribe to a HTML event (in Vue):
```vue
@input="regionType.RegionTypes[object.Region].ObjectTypes[object.ObjectEnum].ChooseSubType(object, $event.target.value)">
```

**List of all Object types:**
- Row, 
- Field, 
- Button, 
- Text, 
- Output, 
- Alert, 
- CheckBox, 
- DataList, 
- SelectList, 
- Radio, 
- Column, 
- ColumnButton, 
- InputGroup, 
- ECabinetRow, 
- ECabinetColumn, 
- ModalForm, 
- MapPicker, 
- MultiMedia, 
- UploadFile, 
- Label

**List of all Region types:**
- Form, 
- Table, 
- TableColumn, 
- Footer, 
- List, 
- ECabinet, 
- ECabinetRow, 
- ModalForm, 
- Placeholder

**List of all SubObject types:**
- ParentObject
- Middle
- Left
- Right
- Up
- Down

**List of all Stat types:**
- Label, 
- Value, 
- Design, 
- Tag, 
- Id, 
- ElementType, 
- Placeholder, 
- ItemList, 
- Tooltip, 
- Required, 
- Disabled, 
- AutoComplete, 
- BelongsTo, 
- ErrorMessage, 
- IsValid, 
- Order, 
- DependsOn, 
- Name, 
- Inherit, 
- BreakLine, 
- ValueIndices, 
- OptionIndices, 
- Option

**List of all Action types:**
- None
- Click
- Insert
- InsertUrl
- InsertClick
- InsertNumber
- Check
- SelectIdFromName
- AClick

## Explanation
The data-driven nature of ECS calls for a departure from the traditional approach of nesting components. 
Instead, entities are treated as first-party components and organized into regions for logical separation. 
These regions can be associated with specific mechanics through event-based linkage, whereby entities within a region subscribe to a defined mechanic.

Visual Representation:
- Table Region - black
- Footer Region - black
- Row Region - blue
- Column Region - green
- Individual Entities - orange

![Alt text](./Untitled.png?raw=true "Title")

It's worth noting that certain components, similar to rows, can serve as both a region and an entity, making it simpler to nest HTML elements.
[For more information click me (translation TBA).](https://github.com/Joso997/implementacija-arhitektonskog-uzorka-entitetsko-komponentnog-sustava-za-razvoj-igara-i-web-aplikacij/blob/master/Dokumentacija%20Diplomskog%20Rada.pdf)
## Configuration
The @cybertale/interface package does not offer any configuration options.

## Known Issues
Depending on the IDE you use, to activate types you will be required to use @cybertale/interface/src in one of the imports.
You can use @cybertale/interface in all other imports.

Example:
```
import ... from '@cybertale/interface/src'
```
## Contributing
We value and welcome contributions from the community! 
To contribute to @cybertale/interface, please review our contributing guidelines.
TBA.

Current state of README is enough to give the package a try, but to develop a production ready application we advise users to check this [project.](https://github.com/Joso997/cybertale-interface)

## License
The @cybertale/interface package is released under the GPL-3.0-only License.
