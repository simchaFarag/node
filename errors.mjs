class AppError extends Error {
    constructor(status, msg) {
        super(msg);
        this.status = status;
    }
}
export const errorHandler = (handlerFunc) => async (req, res) => {
    try {
     await handlerFunc(req, res)
    } catch (err) {
        console.error(err)
        if (err instanceof AppError) {
            res.status(err.status).send({message: err.message})
            return
        }
        res.status(500).send({message: "Unexpected behavior!"})
    }
}
