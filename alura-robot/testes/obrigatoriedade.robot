*** Settings ***
Resource            ../resources/main.robot

Test Setup          Dado que eu acesse o Organo
Test Teardown       Fechando navegador


*** Test Cases ***
Verificar obrigatoriedade de campo
    Dado que submeta formulario sem preencher campo
    Entao sistema apresenta mensagem de obrigatoriedade
