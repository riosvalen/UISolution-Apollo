@focus
Feature: Frontend - Searches

    Background: 
    Given el turista esta logueado

    Scenario Outline: busqueda de destinos con el buscador sin fechas
        When el usuario ingresa el destino "<destino>" en el buscador
        And el usuario hace click en buscar
        Then el sistema muestra resultados de alojamiento en "<destino>"

        Examples:
            |destino                  |
            |Cordoba                  |
            |Mendoza                  |
            |Bariloche                |
            |Mar del plata            |
            |Carlos paz               |
            #|Ciudad de Buenos aires  |
            |Capital Federal          |
            |Monte hermoso            |
            |San martin de los andes  |

   