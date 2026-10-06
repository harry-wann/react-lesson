import type { Member } from "./Member";

export interface LoginRequest {
  account: string;
  passwd: string;
}

export interface LoginResonse {
  success: boolean;
  member?: Member;
  token?: string;
}
