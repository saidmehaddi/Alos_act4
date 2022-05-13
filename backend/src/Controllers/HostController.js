import {
    validationResult
} from "express-validator"
import {
    add_host,
    get_meme_hosts
} from "../../../utils/database"

export default {
    get: (req, res) => {
        const hosts = get_meme_hosts(req.params.id)
        if (hosts.length != 0)
            res.status(200).json(hosts)
        else res.status(404).json({
            error: 'meme or Hosts Not Found'
        })
    },
    create: (req, res) => {
        const meme_id = req.params.id

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const new_hosts = add_host({
            meme_id,
            ...req.body
        })

        res.status(200).json(new_hosts)
    }
}