import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { authorizationToLoginPayload } from 'src/utils/base64converter';

export const UserId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const { authorization } = ctx.switchToHttp().getRequest().headers;
    // GqlExecutionContext.create(ctx).getContext().headers,
    // console.log(authorization);
    const loginPayload = authorizationToLoginPayload(authorization);
    // GqlExecutionContext.create(ctx).getContext().user,
    // console.log(loginPayload);
    return loginPayload.id;
  },
);

export const JWT = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const { authorization } = ctx.switchToHttp().getRequest().headers;
    // GqlExecutionContext.create(ctx).getContext().headers,
    // console.log(authorization);
    const loginPayload = authorizationToLoginPayload(authorization);
    // GqlExecutionContext.create(ctx).getContext().user,
    // console.log(loginPayload);
    return loginPayload;
  },
);
