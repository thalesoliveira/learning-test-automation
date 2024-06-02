*** Settings ***
Resource    ../main.robot


*** Variables ***
${URL}      http://localhost:3000/


*** Keywords ***
Dado que eu acesse o Organo
    Open Browser    ${URL}

Fechando navegador
    Close Browser
