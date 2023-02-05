export interface MemberEntity {
  map(arg0: (member: any) => JSX.Element): import("react").ReactNode;
  id: string;
  login: string;
  avatar_url: string;
}