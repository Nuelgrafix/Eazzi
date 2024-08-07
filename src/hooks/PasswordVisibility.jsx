import  {useState} from "react";

const PasswordVisibility = () => {
    const [isShow, setIsShow] = useState(false);
    const [isShowb, setIsShowb] = useState(false);
  
    const togglePasswordVisibility = () => {
      setIsShow(!isShow);
    }
    const togglePasswordVisibilityb = () => {
      setIsShowb(!isShowb);
    }
    
  return {
    isShow,
    isShowb,
    togglePasswordVisibility,
    togglePasswordVisibilityb
  };
}

export default PasswordVisibility