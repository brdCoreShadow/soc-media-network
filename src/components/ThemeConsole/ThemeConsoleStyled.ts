import { ThemeMode } from "@/utils/types";
import styled from "@emotion/styled";

export const ThemeConsoleCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 16px;

  & > h3{
    font-size: 14px;

    color: ${({theme}) => theme.colors.content};
  }
`;

export const ThemeBtn = styled.button<{ $mode: ThemeMode }>`
  width: 48px;
  height: 24px;

  padding-top: 3px;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;

  background: ${({ theme }) => theme.colors.themeBtn};

  border-radius: 12px;

  & > div {
    width: 18px;
    height: 18px;

    background-color: ${({ theme }) => theme.colors.bgItem};

    border-radius: 50%;

    transform: ${({$mode}) => $mode==="light" && "translate(115%, 0)"}
  }
`;
