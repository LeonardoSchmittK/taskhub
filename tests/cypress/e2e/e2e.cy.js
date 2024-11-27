describe("Testes end2end TASKHUB", () => {
  it("Testar endpoint principal", () => {
    cy.request("http://localhost:5173/").then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Teste end to end de fluxo para criar projeto e em seguida removê-lo", () => {
    cy.visit("http://localhost:5173/");

    cy.get('[data-cy="botaoSignIn"]').should("be.visible").click();

    cy.get('[data-cy="escreverEmail"]')
      .should("be.visible")
      .type("test@gmail.com");

    cy.get('[data-cy="passwordInput"]').should("be.visible").type("test");

    cy.get('[data-cy="signInDivButton"] button').should("be.visible").click();

    cy.get('[data-cy="projectsAnchor"]').should("be.visible").click();

    cy.get("#createProject button").should("be.visible").click();

    cy.get("[data-cy='inputNameProject']")
      .should("be.visible")
      .click()
      .type("novoProjeto");

    cy.get("[data-cy='inputDescriptionProject']")
      .should("be.visible")
      .click()
      .type("novoProjeto descricao");

    cy.get("[data-cy='ownerProject']").should("be.visible").select("test");

    cy.get("[data-cy='managersProject'] input").type(
      "test {downarrow}{downarrow}{downarrow}{enter}"
    );
    cy.get("[data-cy='managersProject'] input").type("sda{downarrow}{enter}");

    cy.get("[data-cy='membersProject'] input").type("test {enter}");

    cy.get("[data-cy='createProject'] button").click();

    cy.get("[data-cy='projectTitle']").contains("novoProjeto").should("exist");
    cy.contains("div", "novoProjeto")
      .find("[data-cy='removeProjectButton'] button")
      .click({ multiple: true });
    cy.get("[data-cy='projectTitle']").should("not.exist");
  });
});
