import { PartialType } from '@nestjs/mapped-types';
import { CreateCategorysDto } from './create-categorys.dto';

export class UpdateCategorysDto extends PartialType(CreateCategorysDto) {}
