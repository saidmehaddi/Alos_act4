import {
    body,
    param,
    check
} from 'express-validator'

function check_if_date(string) {
    return !isNaN(new Date(string).getDate())
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export default {
    get_meme: [
        param('id').isString().trim()
    ],
    create_meme: [
        body('name').isString().trim().customSanitizer(value => capitalize(value)),
        body('topText').isString().trim().customSanitizer(value => capitalize(value)),
        body('bottomText').isString().trim().customSanitizer(value => capitalize(value)),
        body('picture').isURL(),
        body('width').isString().trim(),
        body('height').isString().trim(),
        body('releaseDate').custom(value => check_if_date(value)),
        body('category').isString().trim().toLowerCase().isIn(['anime', 'animaux', 'célébrités','comedian']),
        body('hosts').isArray(),
        check('hosts.*.id').isInt(),
        check('hosts.*.name').isString().trim().customSanitizer(value => capitalize(value)).isAlpha("en-US", {
            "ignore": [" ", "-", "'"]
        }).trim()

    ],
    update_meme: [
    body('name').isString().trim().customSanitizer(value => capitalize(value)),
        body('topText').isString().trim().customSanitizer(value => capitalize(value)),
        body('bottomText').isString().trim().customSanitizer(value => capitalize(value)),
        body('picture').isURL(),
        body('width').isString().trim(),
        body('height').isString().trim(),
        body('releaseDate').custom(value => check_if_date(value)),
        body('category').isString().trim().toLowerCase().isIn(['anime', 'animaux', 'célébrités','comedian']),
        body('hosts').isArray(),
        check('hosts.*.id').isInt(),
        check('hosts.*.name').isString().trim().customSanitizer(value => capitalize(value)).isAlpha("en-US", {
            "ignore": [" ", "-", "'"]
        }).trim(),
        param('id').isString().trim()
    ],
    delete_meme: [
        param('id').isString().trim()
    ],
    // hosts
    create_host: [
        body('name').isString().trim().customSanitizer(value => capitalize(value)),
        body('email').trim().isEmail()
    ]
}