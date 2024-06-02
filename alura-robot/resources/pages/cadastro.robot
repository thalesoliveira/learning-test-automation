*** Settings ***
Resource    ../main.robot


*** Variables ***
${CAMPO_NOME}           id:form-nome
${CAMPO_CARGO}          id:form-cargo
${CAMPO_IMAGEM}         id:form-imagem
${CAMPO_TIME}           class:lista-suspensa
${CAMPO_CARD}           id:form-botao
@{selecionar_times}
...                     //option[contains(.,'Programação')]
...                     //option[contains(.,'Front-End')]
...                     //option[contains(.,'Data Science')]
...                     //option[contains(.,'Devops')]
...                     //option[contains(.,'UX e Design')]
...                     //option[contains(.,'Mobile')]
...                     //option[contains(.,'Inovação')]


*** Keywords ***
Dado que eu informe os campos do formulario
    ${Nome}    FakerLibrary.First Name
    ${Cargo}    FakerLibrary.Job
    ${Imagem}    FakerLibrary.Image Url    width=200    height=100
    Input Text    ${CAMPO_NOME}    ${Nome}
    Input Text    ${CAMPO_CARGO}    ${Cargo}
    Input Text    ${CAMPO_IMAGEM}    ${Imagem}
    Click Element    ${CAMPO_TIME}
    Click Element    ${selecionar_times}[0]

E submeter o formulario
    Click Element    ${CAMPO_CARD}

Entao identificar o card esperado
    Element Should Be Visible    class:colaborador

Entao identificar cards no time esperado
    FOR    ${i}    IN RANGE    1    2
        Dado que eu informe os campos do formulario
        E submeter o formulario
    END
    Sleep    10s

Entao criar e identificar card em cada time disponivel
    FOR    ${indice}    ${time}    IN ENUMERATE    @{selecionar_times}
        Dado que eu informe os campos do formulario
        Click Element    ${time}
        E submeter o formulario
    END

Dado que submeta formulario sem preencher campo
    Click Element    ${CAMPO_CARD}

Entao sistema apresenta mensagem de obrigatoriedade
    Element Should Be Visible    id:form-nome-erro
    Element Should Be Visible    id:form-cargo-erro
    Element Should Be Visible    id:form-times-erro
