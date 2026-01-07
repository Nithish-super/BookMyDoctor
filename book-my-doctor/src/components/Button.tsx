interface buttonProps {
  text: string;
  type?:"button" | "submit" | "reset";
  onClick?: () => void;
  onSubmit?:() => void;
}
export default function Button({text,type,onClick,onSubmit}:buttonProps){
    return(
        <div>
            <button className="w-30 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all
             shadow-md  mx-33 "
             type={type}
             onClick ={onClick}
             onSubmit={onSubmit}
            >{text}</button>
        </div>
    )
}