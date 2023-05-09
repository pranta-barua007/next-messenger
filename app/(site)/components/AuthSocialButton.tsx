import { IconType } from "react-icons";
import { ClipLoader } from "react-spinners";

interface AuthSocialButtonProps {
  icon: IconType
  onClick: () => void;
  isLoading?: boolean;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({ 
  icon: Icon,
  onClick,
  isLoading
}) => {
  return ( 
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex
        w-full 
        justify-center 
        rounded-md 
        bg-white 
        px-4 
        py-2 
        text-gray-500 
        shadow-sm 
        ring-1 
        ring-inset 
        ring-gray-300 
        hover:bg-gray-50 
        focus:outline-offset-0
      "
      disabled={isLoading}
    >
      {isLoading ? <ClipLoader size={20} color="#0284c7" /> : <Icon />}
    </button>
   );
}
 
export default AuthSocialButton;
