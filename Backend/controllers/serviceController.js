const serviceSchema = require("../models/serviceSchema");

const addService = async (req, res) => {
  const { serviceName, description, price, contactPersonName, contactNo } = req.body;
  if (serviceName || price || contactPersonName || contactNo == null) {
    res.status(401).json({ msg: "Please fill all fields" });
  } else {
    try {
      await serviceSchema
        .create({
          serviceName: serviceName,
          description: description,
          price: price,
          contactPersonName: contactPersonName,
          contactNo: contactNo,
        })
        .then(() => {
          res.status(200).json({ msg: "service added successfully" });
        });
    } catch (error) {
      res.status(401).json({ err: error });
    }
  }
};

const deleteService = async (req, res) => {
  const id = req.params;
  try {
    await serviceSchema.findByIdAndDelete({ _id: id }).then(() => {
      res.status(200).json({ msg: "Service deleted successfully" });
    });
  } catch (error) {
    res.stauts(401).json({ err: error });
  }
};

const services = async (req, res) => {
  try {
    await serviceSchema
      .find()
      .then((services) => res.status(200).json({ services: services }));
  } catch (error) {
    res.status(401).json({ err: error });
  }
};

module.exports = {addService,deleteService,services}
