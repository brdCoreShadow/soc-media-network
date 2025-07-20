import styled from "@emotion/styled";

export const HeaderCon = styled.div`
  padding-top: 36px;
  padding-bottom: 84px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: ${({ theme }) => theme.colors.headWrapper};

  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 36px;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-bottom: 154px;
    padding-left: 136px;
    padding-right: 165px;
  }
`;
