const serviceSchema = require("../models/serviceSchema");

const addService = async (req, res) => {
  const { serviceName, description, price, contactPersonName, contactNo } = req.body;
  // console.log(serviceName,description,price,contactPersonName,contactNo)
  if (!serviceName || !price || !contactPersonName || !contactNo || !req.file) {
    res.status(400).json({ msg: "Please fill all fields" });
  } else {
    try {
      await serviceSchema
        .create({
          serviceName: serviceName,
          description: description,
          price: price,
          contactPersonName: contactPersonName,
          contactNo: contactNo,
          filename: req.file.filename,
          filepath: 'uploads/' + req.file.filename
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
  const id = req.params.id;
  try {
    await serviceSchema.findByIdAndDelete({ _id: id }).then(() => {
      res.status(200).json({ msg: "Service deleted successfully" });
    });
  } catch (error) {
    res.status(400).json({ err: error });
  }
};

const services = async (req, res) => {
  
    await serviceSchema.find().then((services) => res.status(200).json({ services: services }));
  
};

module.exports = {addService,deleteService,services}
