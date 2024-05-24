*** Settings ***
Library          SeleniumLibrary
Resource         setup.robot
Test Setup       Dado que eu acesse o Organo  
Test TearDown    Fechando navegador


*** Variables ***
${CAMPO_CARD}      id:form-botao 


*** Test Cases ***
Verificar obrigatoriedade de campo
    Dado que submeta formulario sem preencher campo 
    Entao sistema apresenta mensagem de obrigatoriedade

*** keywords ***

Dado que submeta formulario sem preencher campo    
    Click Element    ${CAMPO_CARD}

Entao sistema apresenta mensagem de obrigatoriedade
    Element Should Be Visible    id:form-nome-erro
    Element Should Be Visible    id:form-cargo-erro
    Element Should Be Visible    id:form-times-erro
    
