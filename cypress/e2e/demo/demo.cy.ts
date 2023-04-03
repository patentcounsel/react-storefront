describe("Search for products", () => {
  beforeEach(() => {});

  it("should search for products SRS_0405", () => {
    cy.addAliasToGraphRequest("ProductCollection");
    cy.visit("https://demo.saleor.io/channel-pln/pl-PL/")
      .wait("@ProductCollection")
      .wait(10000)
      .then(() => {
        cy.percySnapshot("Storefront demo - main page");
      });
  });
});
