import styled from "@emotion/styled";

export const DashBoardCon = styled.div`
padding-bottom: 24px;

border-bottom: 1px solid #848BAB;

@media (min-width: 120px){
padding-bottom: 0;

    border-bottom: none;
}

& > h3{
    margin-bottom: 4px;

    font-size: 24px;

    color:${({theme})=> theme.colors.title};
}

& > p{
    font-size: 14px;

       color:${({theme})=> theme.colors.content};

}
`