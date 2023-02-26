import { IRoleDef } from '../../../Types/Domain/Role';

export interface RoleDefProp {
  roleDefs: IRoleDef[];
  theme?: any;
  getDeleted: any;
  getPublished: any;
  getMatched: any;
  getMyFunc: any;
}
