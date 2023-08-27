import { CategoriesType } from '@/core/models/types/categories.type';
import { FlagsType } from '@/core/models/types/flags.type';
import { LangCodeEnum } from '@/core/models/enums/langCode.enum';
import { PartsType } from '@/core/models/types/parts.type';

export interface JokeInterface {
	category: CategoriesType;
	error: boolean;
	flags: Record<FlagsType, boolean>;
	id: string;
	lang: LangCodeEnum;
	safe: boolean;
	part: PartsType;
	delivery?: string;
	setup?: string;
	joke?: string;
}
