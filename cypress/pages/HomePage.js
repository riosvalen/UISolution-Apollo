class HomePage {
    elements = {
        menuBtn: () => cy.get('[data-testid="MenuIcon"]'),
        searchInput: () => cy.get('input[type="text"]'),
        searchBtn: () => cy.get('button.css-ingbjc'),
        searchBtn2: () => cy.get("div.MuiBackdrop-root"),
};

sendDestination(destino) {
    this.elements.searchInput().click().type(destino)
    cy.wait(500)
};

clickSearch() {
    this.elements.searchBtn().click();
    this.elements.searchBtn2().click();
    this.elements.searchBtn().click();
}

};



export default HomePage;