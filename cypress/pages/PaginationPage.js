class PaginationPage{
getPage1(){
  return cy.get(".page-link").contains("1");
}

getPage2(){
  return cy.get(".page-link").contains("2");
}

getPage3(){
  return cy.get(".page-link").contains("3");
}

getNextBtn(){
  return cy.get(".page-link").contains("Next");
}
}

export default new PaginationPage();