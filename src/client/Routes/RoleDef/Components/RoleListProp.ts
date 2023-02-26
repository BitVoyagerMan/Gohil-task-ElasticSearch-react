import { IRoleDef } from '../../../Types/Domain/Role';

export interface RoleListProp {
  roleDefs: IRoleDef[];
  theme?: any;
  getDeleted: any;
  getPublished: any;
  getMatched: any;
  getMyFunc: any;
}
