exports.errorHandler = (req, res, next) => {
    const error = {
        status:404,
        message : "Something went wrong! Please try after some time."
    }

    res.status(error.status).json({
        error
    })

}