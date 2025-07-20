import { getColorByDifference, getColorByPlatform, getIconByPlatform } from "@/utils/services";
import { IStyleProps } from "@/utils/types";
import styled from "@emotion/styled";

export const FollowersList = styled.ul`
  margin-bottom: 46px;

  @media (min-width: 1280px){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    transform: translate(0, -108px);

    margin-bottom: 0;
  }
`;

export const FollowersItem = styled.li<Pick<IStyleProps, "platform">>`
  padding-top: 32px;
  padding-bottom: 24px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.bgItem};

  border-radius: 6px;

  border-top: 2px solid ${({ platform }) => getColorByPlatform(platform)};

  @media (min-width: 1280px){
    padding-left: 64px;
    padding-right: 64px;
  }
  & > h3 {
    margin-bottom: 8px;
    font-size: 56px;
    line-height: 0.9;
    letter-spacing: -2px;
    color: ${({ theme }) => theme.colors.title};
  }

  & > p:nth-of-type(2) {
    margin-bottom: 24px;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 5px;
    color: ${({ theme }) => theme.colors.content};
  }

  &:not(:last-of-type) {
    margin-bottom: 8px;

    @media (min-width: 1280px){
        margin-bottom: 0;
        margin-right: 30px;
    }
  }
`;

export const Login = styled.p<Pick<IStyleProps, "platform">>`
  position: relative;

  display: inline-block;

  margin-bottom: 30px;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.content};

  &::before {
    position: absolute;

    transform: translate(-125%, -10%);

    top: 0;
    left: 0;

    display: inline-block;
    content: "";

    width: 20px;
    height: 20px;

    margin-right: 8px;

    background-image: ${({ platform }) => getIconByPlatform(platform)};
    background-repeat: no-repeat;
  }
`;

export const Difference = styled.p<Pick<IStyleProps, "difference">>`
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
`;
