const Job = require("../model/job");

exports.createJobPost = async (req, res, next) => {
    try {
      var cookie = req.headers.cookie;
      console.log(cookie);
      const {
        companyName,
        companyLogoURL,
        position,
        salary,
        jobtype,
        workplace,
        location,
        jobDescription,
        aboutCompany,
        skillsRequired,
        information,
      } = req.body;
  
      if (
        !companyName ||
        !companyLogoURL ||
        !position ||
        !salary ||
        !jobtype ||
        !workplace ||
        !location ||
        !jobDescription ||
        !aboutCompany ||
        !skillsRequired ||
        !information
      ) {
        res.status(400).json({
          success: false,
          message: "Need all the details about job",
        });
      }
  
      const job = await Job.create({
        companyName,
        companyLogoURL,
        position,
        salary,
        jobtype,
        workplace,
        location,
        jobDescription,
        aboutCompany,
        skillsRequired,
        information,
      });
  
      res.status(200).json({
        success: true,
        message: "Successfully created job post",
      });
    } catch (error) {
      console.log(error);
    }
  };
