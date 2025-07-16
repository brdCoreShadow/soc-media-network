import * as SC from "./HeaderStyled"

import { IChildProps } from "@/utils/types";

const Header:React.FC<IChildProps> = ({children}) => {
    return ( 
        <SC.HeaderCon>
            {children}
        </SC.HeaderCon>
     );
}
 
export default Header;