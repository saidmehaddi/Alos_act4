import {
    validationResult
} from 'express-validator'

import {
    get_memes,
    get_meme,
    add_meme,
    update_meme,
    delete_meme
} from '../../../utils/database'

export default {
    get_all: (req, res) => {
        res.status(200).json(get_memes())
    },
    get: (req, res) => {
        const meme = get_meme(req.params.id)
        if (meme)
            res.status(200).json(meme)
        else res.status(404).json({
            error: 'meme Not Found'
        })
    },

    create: (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const new_memes = add_meme(req.body)

        res.status(201).json(new_memes)
    },

    update: (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const id = req.params.id

        const new_memes = update_meme(id, req.body)

        res.status(200).json(new_memes)
    },

    delete: (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const id = req.params.id

        const new_memes = delete_meme(id)

        res.status(200).json(new_memes)
    }
}