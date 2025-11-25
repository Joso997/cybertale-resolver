import {ObjectTemplate} from "../manager/containerClasses/objectTemplate";
import {StatTypeEnum} from "../manager/events/types";
import {EventHandlerType} from "../manager/events/types/objectTypes/types";

export function GetStatData(object: ObjectTemplate, statType: StatTypeEnum, returnType: 'boolean' | 'string' = 'string'): boolean | string {
    try {
        const data = object.Stats[statType]?.Data ?? ''
        return returnType === 'boolean' ? !!data : data
    } catch (error) {
        return returnType === 'boolean' ? false : ''
    }
}

export function IsJSON(str: string): boolean {
    try {
        return Array.isArray(JSON.parse(str));
    } catch {
        return false;
    }
}

export function StatIsDefined (object: ObjectTemplate, statType: StatTypeEnum):boolean {
    return !!object.Stats[statType]
}

export function GetValue(object: ObjectTemplate, statEnum: StatTypeEnum, indexStatTypeEnum = StatTypeEnum.Option): string {
    const tempData:string = GetStatData(object, statEnum).toString();
    if (!tempData) return '';

    const indexStat = object.Stats[indexStatTypeEnum];
    if (indexStat && IsJSON(tempData)) {
        const data = JSON.parse(tempData);
        return data[Number(indexStat.Data)] || '';
    }

    return tempData;
}

export function GetValidationClass(object: ObjectTemplate): string {
    const isValid = GetStatData(object, StatTypeEnum.IsValid, 'boolean');
    const errorMessage = GetStatData(object, StatTypeEnum.ErrorMessage);

    if (isValid === undefined || isValid === '') return '';
    if (isValid) return 'is-valid';
    if (errorMessage) return 'is-invalid';
    return '';
}