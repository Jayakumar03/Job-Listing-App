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

exports.editJobPost = async (req, res, next) => {
  try {
    const jobId = req.params.id;

    console.log(jobId);

    const update = req.body;

    const options = { new: true };

    const job = await Job.findByIdAndUpdate(jobId, update, options);

    console.log(job);

    if (!job) {
      next(new Error("There is no job with specified id"));
    }
    res.status(200).json({
      success: true,
      message: "Successfully updated job post",
      job,
    });
  } catch (error) {
    console.log(error);
  }
};
