class CheckboxBtnPage{
  getCheckBox1(){
    return cy.get("#checkbox1");
  }

  getCheckBox2(){
    return cy.get("#checkbox2");
  }

  getCheckBox3(){
    return cy.get("#checkbox3");
  }

  getResetBtn(){
    return cy.get('button[type="reset"');
  }
}

export default new CheckboxBtnPage();