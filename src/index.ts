
// Barrel exports for @cybertale/template

// transform
export * as JsonTransform from './resolver/transform/json'
export * as StatTransform from './resolver/transform/stat'

// form
export * as FormValue from './resolver/form/value'
export * as FormInput from './resolver/form/input'
export * as FormSelect from './resolver/form/select'

// compute
export * as ComputeLabel from './resolver/compute/label'
export * as ComputeTooltip from './resolver/compute/tooltip'
export * as ComputeValidation from './resolver/compute/validation'

// finalize
export * as FinalizeTemplate from './resolver/finalize/template'
export * as FinalizeDefaults from './resolver/finalize/defaults'

// handlers
export * as HandlersRemove from './resolver/handlers/remove'
export * as HandlersInsert from './resolver/handlers/insert'
export * as HandlersUpdate from './resolver/handlers/update'
export * as HandlersTemplate from './resolver/handlers/template'

// assignments
export { WrapperAbstract } from './resolver/assignments/wrapperAbstract'
export { FormWrapper } from './resolver/assignments/formWrapper'
export { RowWrapper } from './resolver/assignments/rowWrapper'
export { TableWrapper } from './resolver/assignments/tableWrapper'
export type { ResolverInterface } from './resolver/assignments/resolverInterface'
