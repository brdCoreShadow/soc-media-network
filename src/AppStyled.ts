import styled from "@emotion/styled";

export const AppCon = styled.div`
  min-width: 320px;

  background-color: ${({theme}) => theme.colors.bgBody};

  @media screen and (min-width: 1280px) {
    max-width: 1280px;

    margin-left: auto;
    margin-right: auto;
  }
`;
