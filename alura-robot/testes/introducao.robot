*** Settings ***
Resource            ../resources/main.robot

Test Setup          Dado que eu acesse o Organo
Test Teardown       Fechando navegador


*** Test Cases ***
Verificar cadastro de usuario
    Dado que eu informe os campos do formulario
    E submeter o formulario
    Entao identificar o card esperado

Verificar se possível criar mais de um card se preenchermos os campos corretamente
    Dado que eu informe os campos do formulario
    E submeter o formulario
    Entao identificar cards no time esperado

Verificar se possivel criar card para cada time disponivel se preenchermos os cards
    Dado que eu informe os campos do formulario
    Entao criar e identificar card em cada time disponivel
