export default {
    notFound: (req, res, next) => {
        res.status(404).json({
            error: 'Resource Not Found'
        })
    }
}