import styled from "styled-components"

export const LogonContainer = styled.div`
    width: 100%;
    max-width: 1220px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    section {
        width: 100%;
        max-width: 350px;
        margin-right: 30px;

        form {
            display: flex;
            flex-direction: column;
            margin-top: 110px;

            h1{
                font-size: 32px;
                margin-bottom: 32px;
            }
        }
    }
    
`;