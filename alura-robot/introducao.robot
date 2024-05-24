*** Settings ***
Library          SeleniumLibrary
Resource         setup.robot
Test Setup       Dado que eu acesse o Organo  
Test TearDown    Fechando navegador

*** Variables ***
${CAMPO_NOME}      id:form-nome
${CAMPO_CARGO}     id:form-cargo
${CAMPO_IMAGEM}    id:form-imagem
${CAMPO_TIME}      class:lista-suspensa
${CAMPO_CARD}      id:form-botao 
${PROGRAMACAO}     //option[contains(.,'Programação')]
${FRONT-END}       //option[contains(.,'Front-End')]
${DADOS}           //option[contains(.,'Data Science')]
${DEVOPS}          //option[contains(.,'Devops')]
${UX}              //option[contains(.,'UX e Design')]
${MOBILE}          //option[contains(.,'Mobile')]
${INOVACAO}        //option[contains(.,'Inovação')]


*** Test Cases ***
Verificar cadastro de usuario
    Dado que eu submeta o formulario
    Entao identificar o card esperado

*** keywords ***
Dado que eu submeta o formulario
    Input Text        ${CAMPO_NOME}        UsuarioTeste
    Input Text        ${CAMPO_CARGO}        Programador
    Input Text        ${CAMPO_IMAGEM}        https://picsum.photos/200/300
    Click Element    ${CAMPO_TIME}
    Click Element    ${PROGRAMACAO}    
    Click Element    ${CAMPO_CARD}

Entao identificar o card esperado
    Element Should Be Visible    class:colaborador
    
