export type Role = 'ADMIN' | 'OFFICER' | 'VIEWER';

export interface User {
  id: string;
  username: string;
  displayName: string;
  role: Role;
}
