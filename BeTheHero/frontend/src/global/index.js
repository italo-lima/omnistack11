import {createGlobalStyle} from "styled-components"
import {darken} from "polished"

export const LayoutGlobal = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,700i&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font: 700 14px Roboto san-serif;
        background: #f0f0f5;
        --webkit-font-smoothing: antialiased;
    }

    input, button,textarea {
        font: 700 18px Roboto san-serif;
    }

    button {
        cursor: pointer;
    }

    form textarea {
        width: 100%;
        min-height: 140px;
        color: #333;
        resize: vertical;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 16px 24px;
        line-height: 24px
    }

    form input{
        width: 100%;
        height: 60px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 0 24px;
    }

    .button-default{
        width: 100%;
        height: 60px;
        background: #e02041;
        border: 0;
        border-radius: 8px;
        color: #fff;
        font-weight: 700;
        margin-top: 15px;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        line-height: 60px;
        transition: background 0.2s;
    }

    .button-default:hover{
        background: ${darken(0.1, '#e02041')};
    }

    .back-link {
        display: flex;
        align-items: center;
        margin-top: 40px;
        color: #41414d;
        font-size: 17px;
        text-decoration: none;
        font-weight: 500;
        transition: opacity 0.2s;

        svg {
            margin-right: 8px;
        }
    }

    .back-link:hover{
        opacity: 0.8;
    }
`;