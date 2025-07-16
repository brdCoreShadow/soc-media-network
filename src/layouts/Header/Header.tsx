import * as SC from "./HeaderStyled"

import { TChildProps } from "@/utils/types";

const Header:React.FC<TChildProps> = ({children}) => {
    return ( 
        <SC.HeaderCon>
            {children}
        </SC.HeaderCon>
     );
}
 
export default Header;