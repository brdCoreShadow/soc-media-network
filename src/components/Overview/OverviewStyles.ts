import { getColorByDifference, getIconByPlatform } from "@/utils/services";
import { IStyleProps } from "@/utils/types";
import styled from "@emotion/styled";


export const OverviewTitle = styled.h2`
margin-bottom: 28px;

font-size:24px;
color: ${({theme}) => theme.colors.content};
`

export const OverviewList = styled.ul`
  @media (min-width: 1280px) {

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
`;

export const OverviewItem = styled.li<Pick<IStyleProps, "platform">>`
  padding-top: 28px;
  padding-bottom: 18px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: ${({ theme }) => theme.colors.bgItem};

  border-radius: 6px;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  & > p {
    position: relative;

    margin-bottom: 24px;

    font-size: 14px;
    font-weight: ${({ theme }) => theme.weight.bold};

    color: ${({ theme }) => theme.colors.content};

    &::after {
      position: absolute;

      top: 0;
      right: 0;

      transform: translate(0, 10%);

      display: inline-block;
      content: "";
      width: 20px;
      height: 20px;

      background-image: ${({ platform }) => getIconByPlatform(platform)};
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`;

export const OverviewItemFlexCon = styled.div<Pick<IStyleProps, "difference">>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & > h3 {
    font-size: 32px;

    color: ${({ theme }) => theme.colors.title};
  }

  & > p {
    font-size: 12px;

    font-weight: ${({ theme }) => theme.weight.bold};
    color: ${({ difference }) => (difference === "up" ? "#1EB589" : "#DC414C")};

    &::before {
      display: inline-block;
      content: "";
      width: 8px;
      height: 4px;

      margin-bottom: 2px;
      margin-right: 4px;

      background-image: ${({ difference }) => getColorByDifference(difference)};
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`;
