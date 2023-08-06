import {LangCodeEnum} from '@/core/models/enums/langCode.enum'
import {FlagsType} from '@/core/models/types/flags.type'
import {PartsType} from '@/core/models/types/parts.type'
import {CategoriesType} from '@/core/models/types/categories.type'

export interface IParams {
    flags: FlagsType[];
    lang: LangCodeEnum;
    type: PartsType;
    category: CategoriesType;
    idRange: `${number}-${number}` | null
    amount: number
}