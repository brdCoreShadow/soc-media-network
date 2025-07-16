import styled from "@emotion/styled";

type TProps = {
  difference: string; // e.g., "up" or "down"
  platform: string;
};

export const FollowersList = styled.ul`
  margin-bottom: 46px;
`;

export const FollowersItem = styled.li`
  padding-top: 32px;
  padding-bottom: 24px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.bgItem};
  border-radius: 6px;

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
  }
`;

export const Login = styled.p<Pick<TProps, "platform">>`
  margin-bottom: 30px;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.content};
`;

export const Difference = styled.p<Pick<TProps, "difference">>`
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

    background-image: ${({ difference }) =>
      difference === "up"
        ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='4'%3E%3Cpath fill='%231EB589' fill-rule='evenodd' d='M0 4l4-4 4 4z'/%3E%3C/svg%3E\")"
        : "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='4'%3E%3Cpath fill='%23DC414C' fill-rule='evenodd' d='M0 0l4 4 4-4z'/%3E%3C/svg%3E\")"};

    background-repeat: no-repeat;
    background-size: contain;
  }
`;
