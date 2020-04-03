const { SwedenService, DenmarkService } = require("./src/Services");

const services = [
  SwedenService,
  DenmarkService
];

// This test is good but slightly too clever
describe("Services", () => {
  it("should return the correct value for each service", () => {
    const results = services.map(Service => {
      const service = new Service();
      return service.takeAction();
    });

    const [sweden, denmark] = results;
    expect(sweden).toEqual("Sweden");
    expect(denmark).toEqual("Denmark");
  });
});