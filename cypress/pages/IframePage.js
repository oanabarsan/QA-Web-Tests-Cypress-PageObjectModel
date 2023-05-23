class IframePage{
 getFrameLoaded(){
  return cy.frameLoaded("#iframe-checkboxes");
 }

 getLearnMoreBtn(){
  return cy.iframe().find("#learn-more");
 }
}

export default new IframePage();