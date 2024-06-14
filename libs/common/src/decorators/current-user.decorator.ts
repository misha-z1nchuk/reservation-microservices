import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { UserDocument } from '../models';

const getCurrentUserByContext = (context): UserDocument => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
