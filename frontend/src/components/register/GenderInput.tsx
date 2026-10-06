import type { Gender } from "../types/RegisterForm";

interface Props {
  value: string;
  onChange: (value: Gender) => void;
}

export default function GenderInput({ value, onChange }: Props) {
  return (
    <div>
      <span>性別</span>
      <input
        type="radio"
        name="gender"
        value="MALE"
        checked={value === "MALE"}
        onChange={() => onChange("MALE")}
      />
      男
      <input
        type="radio"
        name="gender"
        value="FEMALE"
        checked={value === "FEMALE"}
        onChange={() => onChange("FEMALE")}
      />
      女
    </div>
  );
}
