interface InputFileProps {
  name: string;
  label: string;
  type: string;
  value: string ;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function InputFile({ name, 
    label,
    type,
    value,
   onChange,}:InputFileProps)
{
  return(
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-semibold text-gray-700 mr-3 italic">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="border p-2 rounded-md mb-4"/>
   </div>
  );
}