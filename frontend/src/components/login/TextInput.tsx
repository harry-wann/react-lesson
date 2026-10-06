interface TextInputProps {
  label: string;
  type: "text" | "password" | "email" | "number";
  value: string;
  onChange: (value: string) => void;

  // optional
  placeholder?: string;
  required?: boolean;
}

export default function TextInput({
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
}: TextInputProps) {
  return (
    <div className="gap-1 p-2 border rounded-2xl border-b-cyan-900">
      <label>{label} : </label>
      <input
        className="outline-none focus:outline-none"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
}
