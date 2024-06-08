const feedbackSchema = require("../models/feedbackSchema");
const Feedback = require("../models/feedbackSchema");

const feedback = async (req, res) => {
  const { email, feedback } = req.body;
  if (!email) {
    res.status(404).json({ msg: "Please enter the email" });
  } else {
    try {
      await feedbackSchema
        .create({ email: email, feedback: feedback })
        .then(() => {
          res.status(200).json({ msg: "Feedback submitted successfully" });
        });
    } catch (error) {
      res.status(401).json({ err: error });
    }
  }
};

module.exports = Feedback