*** Settings ***
Library     SeleniumLibrary
Library     FakerLibrary    locale=pt_BR
### Shared ###
Resource    shared/setup.robot
### Pages ###
Resource    pages/cadastro.robot
