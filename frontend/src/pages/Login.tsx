import { useState, type SyntheticEvent } from "react";
import TextInput from "../components/login/TextInput";
import type { LoginRequest } from "../types/Login";
import { login } from "../services/AuthService";

export default function LoginPage() {
  const [form, setForm] = useState<LoginRequest>({
    account: "",
    passwd: "",
  });

  const [msg, setMsg] = useState<string | null>(null);

  const doLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await login(form);
      console.log(result);
      if (result.member && result.token) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("member", JSON.stringify(result.member));
        console.log("OK");
        setMsg(null);
      } else {
        setMsg("Login Failure");
      }
    } catch (e) {
      console.log(e);
      setMsg("System busy");
    }
  };

  return (
    <main className="w-[50%] items-center flex flex-col gap-2">
      <h1 className="title">Login Page</h1>
      <form onSubmit={doLogin}>
        <div className="flex flex-col gap-1 items-center">
          <TextInput
            label="Account"
            type="text"
            value={form.account}
            onChange={(account) => setForm({ ...form, account })}
          />

          <TextInput
            label="Password"
            type="password"
            value={form.passwd}
            onChange={(passwd) => setForm({ ...form, passwd })}
          />

          <button type="submit">Login</button>
        </div>
      </form>

      {msg && <div className="text-red-600">{msg}</div>}
    </main>
  );
}
