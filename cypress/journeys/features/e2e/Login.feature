@Frontend 
Feature: Frontend - Login
  Background: 
    Given el usuario abre la web de Apollo
    When el usuario hace click en iniciar sesion
    Then el sistema abre el modal de inicio de sesion

  @TC-1 @TOURIST @OK_RUN @LOGIN 
  Scenario: Login usuario turista con credenciales válidas 
    When el usuario ingresa el correo electronico tourist valido
    And el usuario hace click en continuar
    And el usuario ingresa la contraseña turista
    And el usuario hace click en continuar
    Then el sistema muestra el modal de ingreso
    When el usuario hace click en continuar al sitio turista
    Then el sistema muestra la home de apollo

  @TC-2 @TOURIST @OK_RUN @LOGIN  
  Scenario: Login usuario turista con usuario no registrado 
    When el usuario ingresa el correo electronico no valido
    And el usuario hace click en continuar
    Then el sistema muestra el modal de registro

  @TC-3 @TOURIST @OK_RUN @LOGIN 
  Scenario: Login usuario turista con credenciales no válidas
    When el usuario ingresa el correo electronico tourist valido
    And el usuario hace click en continuar
    And el usuario ingresa una contraseña invalida 
    And el usuario hace click en continuar
    Then el sistema muestra error en la contraseña

  @TC-4 @PARTNERSIC @OK_RUN @LOGIN 
Scenario: Login partner SIC con credenciales validas
    When el usuario ingresa el correo electronico partner SIC valido
    And el usuario hace click en continuar
    And el usuario ingresa la contraseña partner SIC
    And el usuario hace click en continuar
    Then el sistema muestra el modal de ingreso
    When el usuario hace click en continuar al sitio partner
    Then el sistema muestra la home de apollo

  @TC-5 @PARTNERSIC @OK_RUN @LOGIN 
Scenario: Login partner SIC con credenciales no validas
    When el usuario ingresa el correo electronico partner SIC valido
    And el usuario hace click en continuar
    And el usuario ingresa una contraseña invalida 
    And el usuario hace click en continuar
    Then el sistema muestra error en la contraseña

  #@TC-6 @PARTNERSIRO @WIP @LOGIN  @focus
#Scenario: Login partner SIC con ingreso a panel
    #When el usuario ingresa el correo electronico partner SIC valido
    #And el usuario hace click en continuar
    #And el usuario ingresa la contraseña partner SIC
    #And el usuario hace click en continuar
    #Then el sistema muestra el modal de ingreso
    #When el usuario hace click en ingresar al panel
    #Then el sistema muestra la home de apollo partner

  @TC-7 @PARTNERSIRO @OK_RUN @LOGIN 
Scenario: Login partner SIRO con credenciales validas
    When el usuario ingresa el correo electronico partner SIRO valido
    And el usuario hace click en continuar
    And el usuario ingresa la contraseña partner SIRO
    And el usuario hace click en continuar
    Then el sistema muestra el modal de ingreso
    When el usuario hace click en continuar al sitio partner
    Then el sistema muestra la home de apollo

  @TC-8 @PARTNERSIRO @OK_RUN @LOGIN 
Scenario: Login partner SIRO con credenciales no validas
    When el usuario ingresa el correo electronico partner SIRO valido
    And el usuario hace click en continuar
    And el usuario ingresa una contraseña invalida 
    And el usuario hace click en continuar
    Then el sistema muestra error en la contraseña

  #@TC-9 @PARTNERSIRO @OK_RUN @LOGIN  
#Scenario: Login partner SIC con ingreso a panel
    #When el usuario ingresa el correo electronico partner SIRO valido
    #And el usuario hace click en continuar
    #And el usuario ingresa la contraseña partner SIRO
    #And el usuario hace click en continuar
    #Then el sistema muestra el modal de ingreso
    #When el usuario hace click en ingresar al panel
    #Then el sistema muestra la home de apollo partner

  @TC-10 @LOGOUT @OK_RUN @LOGIN 
  Scenario: Loguot  
    When el usuario ingresa el correo electronico tourist valido
    And el usuario hace click en continuar
    And el usuario ingresa la contraseña turista
    And el usuario hace click en continuar
    Then el sistema muestra el modal de ingreso
    When el usuario hace click en continuar
    Then el sistema muestra la home de apollo
    When el usuario hace click en el menu
    And el usuario hace click en cerrar sesion
    Then el sistema muestra el menu con el boton de inicio de sesion




    

