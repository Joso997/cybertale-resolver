import { ObjectTemplate } from '../../../containerClasses/objectTemplate'

export namespace Manager.Events.Type{

    export abstract class StatAbstract {
      public Data = '';
      public abstract CheckRequirements(_object:ObjectTemplate):void
      public abstract CreateStat ():StatAbstract;
      public InitData (_data:string):StatAbstract {
        this.Data = _data
        return this
      }
    }
    export type CreateStatDel = () => StatAbstract;

    export class Tag extends StatAbstract {
      public CreateStat (): StatAbstract {
        return new Tag()
      }

      public CheckRequirements (_object: any): void {
        throw new Error('Method not implemented.')
      }
    }

    export class Value extends StatAbstract {
      public CreateStat (): StatAbstract {
        return new Value()
      }

      public CheckRequirements (_object: any): void {
        throw new Error('Method not implemented.')
      }
    }

    export class Design extends StatAbstract {
      public CreateStat (): StatAbstract {
        return new Design()
      }

      public CheckRequirements (_object: any): void {
        throw new Error('Method not implemented.')
      }
    }

    export class Label extends StatAbstract {
      public CreateStat (): StatAbstract {
        return new Label()
      }

      public CheckRequirements (_object: any): void {
        throw new Error('Method not implemented.')
      }
    }

    export class Id extends StatAbstract {
      public CreateStat (): StatAbstract {
        return new Id()
      }

      public CheckRequirements (_object: any): void {
        throw new Error('Method not implemented.')
      }
    }

  export class ElementType extends StatAbstract {
    public CreateStat (): StatAbstract {
      return new ElementType()
    }

    public CheckRequirements (_object: any): void {
      throw new Error('Method not implemented.')
    }
  }

  export class Placeholder extends StatAbstract {
    public CreateStat (): StatAbstract {
      return new Placeholder()
    }

    public CheckRequirements (_object: any): void {
      throw new Error('Method not implemented.')
    }
  }

  export class ItemList extends StatAbstract {
    public CreateStat (): StatAbstract {
      return new ItemList()
    }

    public CheckRequirements (_object: any): void {
      throw new Error('Method not implemented.')
    }
  }

  export class Tooltip extends StatAbstract {
    public CreateStat (): StatAbstract {
      return new Tooltip()
    }

    public CheckRequirements (_object: any): void {
      throw new Error('Method not implemented.')
    }
  }

  export class Required extends StatAbstract {
    public CreateStat (): StatAbstract {
      return new Required()
    }

    public CheckRequirements (_object: any): void {
      throw new Error('Method not implemented.')
    }
  }

  export class Disabled extends StatAbstract {
    public CreateStat (): StatAbstract {
      return new Disabled()
    }

    public CheckRequirements (_object: any): void {
      throw new Error('Method not implemented.')
    }
  }

  export class AutoComplete extends StatAbstract {
    public CreateStat (): StatAbstract {
      return new AutoComplete()
    }

    public CheckRequirements (_object: any): void {
      throw new Error('Method not implemented.')
    }
  }

  export class BelongsTo extends StatAbstract {
    public CreateStat (): StatAbstract {
      return new BelongsTo()
    }

    public CheckRequirements (_object: any): void {
      throw new Error('Method not implemented.')
    }
  }

  export class ErrorMessage extends StatAbstract {
    public CreateStat (): StatAbstract {
      return new ErrorMessage()
    }

    public CheckRequirements (_object: any): void {
      throw new Error('Method not implemented.')
    }
  }

  export class IsValid extends StatAbstract {
    public CreateStat (): StatAbstract {
      return new IsValid()
    }

    public CheckRequirements (_object: any): void {
      throw new Error('Method not implemented.')
    }
  }

  export class Order extends StatAbstract {
    public CreateStat (): StatAbstract {
      return new Order()
    }

    public CheckRequirements (_object: any): void {
      throw new Error('Method not implemented.')
    }
  }
  export class DependsOn extends StatAbstract {
    public CreateStat (): StatAbstract {
      return new DependsOn()
    }

    public CheckRequirements (_object: any): void {
      throw new Error('Method not implemented.')
    }
  }

  export class Name extends StatAbstract {
    public CreateStat (): StatAbstract {
      return new Name()
    }

    public CheckRequirements (_object: any): void {
      throw new Error('Method not implemented.')
    }
  }

  export class Inherit extends StatAbstract {
    public CreateStat (): StatAbstract {
      return new Inherit()
    }

    public CheckRequirements (_object: any): void {
      throw new Error('Method not implemented.')
    }
  }

  export class BreakLine extends StatAbstract {
    public CreateStat (): StatAbstract {
      return new BreakLine()
    }

    public CheckRequirements (_object: any): void {
      throw new Error('Method not implemented.')
    }
  }

  export class ValueIndices extends StatAbstract {
    public CreateStat (): StatAbstract {
      return new ValueIndices()
    }

    public CheckRequirements (_object: any): void {
      throw new Error('Method not implemented.')
    }
  }

  export class OptionIndices extends StatAbstract {
    public CreateStat (): StatAbstract {
      return new OptionIndices()
    }

    public CheckRequirements (_object: any): void {
      throw new Error('Method not implemented.')
    }
  }

  export class Option extends StatAbstract {
    public CreateStat (): StatAbstract {
      return new Option()
    }

    public CheckRequirements (_object: any): void {
      throw new Error('Method not implemented.')
    }
  }

}
