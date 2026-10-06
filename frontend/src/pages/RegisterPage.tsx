import EmailInput from "../components/register/EmailInput";
import PasswordInput from "../components/register/PasswordInput";
import NameInput from "../components/register/NameInput";
import type { RegisterForm } from "../types/RegisterForm";
import { useState, type SyntheticEvent } from "react";
import GenderInput from "../components/register/GenderInput";
import AreaSelect from "../components/register/AreaSelect";
import HabitCheckBox from "../components/register/HabitCheckBox";
import IconUpload from "../components/IconUpload";
import { registerMember } from "../services/MemberService";

export default function RegisterPage() {
  const [form, setForm] = useState<RegisterForm>({
    email: "aaa@bbb",
    password: "12345678",
    name: "harry",
    gender: "MALE",
    area: "",
    habits: [],
    icon: null,
  });

  const [msg, setMsg] = useState<string>("");

  const doSubmit = async (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();

    try {
      const result = await registerMember(form);
      console.log(result);
      if (result.success) {
        window.location.href = "/login";
      } else {
        setMsg("註冊失敗(1)");
      }
    } catch (e) {
      console.log(e);
      setMsg("註冊失敗(2)");
    }
  };

  return (
    <main>
      <h1>會員註冊</h1>
      <form onSubmit={doSubmit}>
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
        <HabitCheckBox
          values={form.habits}
          onChange={(habits) => setForm({ ...form, habits })}
        />
        <IconUpload
          value={form.icon}
          onChange={(icon) => setForm({ ...form, icon })}
        />
        <input style={{ marginTop: "1rem" }} type="submit" value="註冊" />
      </form>
      {msg && <p style={{ color: "red" }}>{msg}</p>}
    </main>
  );
}
