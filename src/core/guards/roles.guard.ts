import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import * as _ from 'lodash';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }

    // to get the current user
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // hard code to see the result
    return this.matchRoles(roles, ['user']);
  }

  /**
   * function that matches the roles
   *
   * @param roles available roles from the handler
   * @param userRoles roles assigned to user
   */
  matchRoles(roles: string[], userRoles: string[]): boolean {
    const foundRole: string = _.find(userRoles, role =>
      _.includes(roles, role),
    );

    console.log('Handler Roles:: ', roles);
    console.log('User Roles:: ', userRoles);
    console.log('Found Roles:: ', foundRole);

    return foundRole ? true : false;
  }
}
