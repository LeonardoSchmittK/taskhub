describe("Server API Tests", () => {
  it("should return a 200 status for the health endpoint", () => {
    cy.request("http://localhost:5173/").then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("should click on the 'criarTarefa' div", () => {
    cy.visit("http://localhost:5173/");

    // clicar no botao de entrar
    cy.get('[data-cy="botaoSignIn"]').should("be.visible").click();

    cy.get('[data-cy="escreverEmail"]')
      .should("be.visible")
      .type("ola@gmail.com");

    cy.get("#password").should("be.visible").type("123");

    cy.get("#increverse").should("be.visible").click();

    cy.visit("http://localhost:5173/projects");

    cy.get("#createProject").should("be.visible").click();

    cy.get('[data-cy="inputNameProject"]')
      .should("be.visible")
      .type("Isso é um teste");
  });
});
