const BatchService = require("./src/BatchService");
const { SwedenService, DenmarkService } = require("./src/Services");

// These tests are "dumb" and duplicated but they are simple and will stay simple.
describe("Services", () => {
  it("should return the correct value for SwedenService", () => {
    const service = new SwedenService();
    expect(service.takeAction()).toEqual("Sweden");
  });

  it("should return the correct value for Denmarkservice", () => {
    const service = new DenmarkService();
    expect(service.takeAction()).toEqual("Denmark");
  });
});

describe("BatchService", () => {
  // The junior may write this test. It tests nothing important or something that is likely to cause a regression.
  it("should have the db", () => {
    const db = {};
    const service = new BatchService(db);
    expect(service.db).toBeDefined();
  });

  // The senior will be often be lazy and only test what will likely break
  it("should run the job if the current time is passed the scheduled execution time", () => {
    const db = {};
    const service = new BatchService(db);
    const ordersSent = service.sendOrders(new Date());
    expect(ordersSent).toEqual([true, true, true])
  });

  it("should not run if the time is not passed the scheduled execution time", () => {
    const db = {};
    const service = new BatchService(db);
    const ordersSent = service.sendOrders(new Date(0));
    expect(ordersSent).toEqual([false, false, false])
  });
});
