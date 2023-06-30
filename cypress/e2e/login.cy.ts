describe('Login Page', () => {
  it('At first load, page should has all field enabled', () => {
    cy.visit(`${Cypress.env('host_url')}/${Cypress.env('login_url')}`);
    cy.fixture('login-page.json').then(login => {
      cy.dataCy(login.locator.title).should('be.visible');
      cy.dataCy(login.locator.email).should('be.visible');
      cy.dataCy(login.locator.password).should('be.visible');
      cy.dataCy(login.locator.signin).should('be.visible').should('be.enabled');
      cy.dataCy(login.locator.signup).should('be.visible');
    });
  });

  it('After input correct credential, should go to home page', () => {
    cy.intercept(
      {
        method: 'POST',
        url: '**/auth/login',
      },
      {
        fixture: 'api/post_auth_login_success.json',
      }
    ).as('doLogin');
    cy.intercept(
      {
        method: 'GET',
        url: '**/items',
      },
      {
        fixture: 'api/get_items_success.json',
      }
    ).as('getItems');
    cy.intercept(
      {
        method: 'GET',
        url: '**/profile',
      },
      {
        fixture: 'api/get_profile_success.json',
      }
    ).as('getProfile');
    cy.visit(`${Cypress.env('host_url')}/${Cypress.env('login_url')}`);
    cy.fixture('login-page.json').then(login => {
      cy.dataCy(login.locator.email).type(login.data_input.email);
      cy.dataCy(login.locator.password).type(login.data_input.password);
      cy.dataCy(login.locator.signin).click();
      cy.wait(['@doLogin', '@getItems', '@getProfile']).then(interceptions => {
        const getProfile = interceptions[2];
        const profile = getProfile?.response?.body;
        cy.fixture('home-page.json').then(home => {
          cy.dataCy(home.locator.logo).should('have.text', home.labels.logo);
          cy.dataCy(home.locator.item).should('have.length', 9);
          cy.dataCy(home.locator.toggle_menu)
            .should('be.visible')
            .then(togger => {
              if (togger) {
                cy.dataCy(home.locator.toggle_menu).click();
                cy.dataCy(home.locator.signout_mb).should('be.visible');
                cy.dataCy(home.locator.create_item_mb).should('be.visible');
                cy.dataCy(home.locator.deposit_mb).should('be.visible');
                cy.dataCy(home.locator.email_mb).should('have.text', `Welcome ${profile.email}`);
                cy.dataCy(home.locator.amount_mb).should('have.text', `Balance: ${profile.amount}`);
              } else {
                cy.dataCy(home.locator.email).should('have.text', `Welcome ${profile.email}`);
                cy.dataCy(home.locator.amount).should('have.text', `Balance: ${profile.amount}`);
                cy.dataCy(home.locator.signout).should('be.visible');
                cy.dataCy(home.locator.create_item).should('be.visible');
                cy.dataCy(home.locator.deposit).should('be.visible');
              }
            });
        });
      });
    });
  });
});
