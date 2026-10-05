import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import NameInput from "../components/NameInput";
import type { Gender, RegisterForm } from "../types/RegisterForm";
import { useState } from "react";
import GenderInput from "../components/GenderInput";
import AreaSelect from "../components/AreaSelect";

export default function RegisterPage() {
  const [form, setForm] = useState<RegisterForm>({
    email: "",
    password: "",
    name: "",
    gender: "MALE",
    area: "",
    habits: [],
    icon: null,
  });

  return (
    <main>
      <h1>會員註冊</h1>
      <form>
        <EmailInput
          value={form.email}
          onChange={(email) => setForm({ ...form, email })}
        />
        <PasswordInput
          value={form.password}
          onChange={(password) => setForm({ ...form, password })}
        />
        <NameInput
          value={form.name}
          onChange={(name) => setForm({ ...form, name })}
        />
        <GenderInput
          value={form.gender}
          onChange={(gender) => setForm({ ...form, gender })}
        />
        <AreaSelect
          value={form.area}
          onChange={(area) => setForm({ ...form, area })}
        />
        <input style={{ marginTop: "1rem" }} type="submit" value="註冊" />
      </form>
    </main>
  );
}
