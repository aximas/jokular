import {LangCodeEnum} from '@/core/models/enums/langCode.enum'
import {FlagsType} from '@/core/models/types/flags.type'

export interface IParams {
    flags: FlagsType[];
    lang: LangCodeEnum
}