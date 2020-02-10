import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import Joi = require('@hapi/joi');

@Injectable()
export class JoiValidation implements PipeTransform {
  constructor(private readonly schema: Object) {}

  transform(value: any, metadata: ArgumentMetadata): any {
    const { error } = Joi.valid(value, this.schema);

    if (error) {
      console.log(error);
      throw new BadRequestException('Validation failed');
    }
    return value;
  }
}
