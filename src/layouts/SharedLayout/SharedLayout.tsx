import * as SC from "./SharedLayoutStyled"

import { IChildProps } from "@/utils/types";

const SharedLayout: React.FC<IChildProps> = ({ children }) => {
  return <SC.SharedLayoutCon>{children}</SC.SharedLayoutCon>;
};

export default SharedLayout;
