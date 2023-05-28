/// <reference types = "cypress" />

import FileUploadPage from "../pages/FileUploadPage";
import LeftSideMenuPage from "../pages/LeftSideMenuPage";

describe("File upload test suites", () => {
  it.only("File upload test", () => {
    const fileName = "dog.jpg";

    LeftSideMenuPage.getFileUpload().click();
    FileUploadPage.getChooseFile().selectFile("cypress/fixtures/" + fileName);
    FileUploadPage.getSubmitBtn().click();
    cy.contains(`You have successfully uploaded "${fileName}"`).should(
      "be.visible"
    );
  });
});
