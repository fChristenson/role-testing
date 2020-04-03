const Order = (name) => {
  return {
    name,
    sendAt: new Date()
  }
}

const orders = [
  Order("foo"),
  Order("bar"),
  Order("baz")
];

class BatchService {
  constructor(db) {
    this.db = db; // pretend this is the database connection
  }

  sendOrders(currentTime) {
    return orders.map(order => order.sendAt < currentTime);
  }
}

module.exports = BatchService;
