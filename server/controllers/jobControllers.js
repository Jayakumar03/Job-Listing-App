const Job = require("../model/job");

exports.createJobPost = async (req, res, next) => {
  try {
    var cookie = req.headers.cookie;

    if (!cookie) {
      return res.status(400).json({
        success: false,
        message: "PLease login to access this page",
      });
    }

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
      return res.status(400).json({
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
    res.status(500).json({ error: "An error occurred" });
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
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.filteredJobs = async (req, res, next) => {
  try {
    const filters = req.body;

    const allTheJobs = await Job.find({
      position: filters.position,
    });

    const filteredjobs = allTheJobs.filter((obj, index) => {
      let skillArrayFormObj = obj.skillsRequired;
      let skillArrayFormreq = filters.skills;

      for (const skills of skillArrayFormObj) {
        if (skillArrayFormreq.includes(skills)) return obj;
      }
    });

    if (!filteredjobs) {
      return res.status(409).json({
        success: false,
        message:
          "COuld not find any job post for specified position and skill set",
      });
    }

    res.status(200).json({
      success: true,
      filteredjobs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.jobInformation = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);

    res.status(200).json({
      success: true,
      JobDetails: job,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

exports.allTheJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find();

    console.log(jobs);

    res.status(200).json({
      success: true,
      jobs: jobs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
};
