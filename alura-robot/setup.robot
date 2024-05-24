*** Settings ***
Library     SeleniumLibrary

*** Variables ***
${URL}             http://localhost:3000/

*** keywords ***
Dado que eu acesse o Organo
    Open Browser    ${URL}

Fechando navegador
    Close Browser