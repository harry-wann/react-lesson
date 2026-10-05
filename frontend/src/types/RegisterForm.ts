export type Gender = "MALE" | "FEMALE";

export interface RegisterForm {
  email: string;
  password: string;
  name: string;
  gender: Gender;
  area: string;
  habits: string[];
  icon: string | null;
}
