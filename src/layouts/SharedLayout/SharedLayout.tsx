import * as SC from "./SharedLayoutStyled"

import { TChildProps } from "@/utils/types";

const SharedLayout: React.FC<TChildProps> = ({ children }) => {
  return <SC.SharedLayoutCon>{children}</SC.SharedLayoutCon>;
};

export default SharedLayout;
