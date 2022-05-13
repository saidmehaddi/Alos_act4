import express from 'express'
import validation from '../../utils/validation'
import memeController from './Controllers/memeController'
import HostController from './Controllers/HostController'

const router = express.Router()

// memes

router.get('/memes', memeController.get_all)

router.get('/memes/:id',
    ...validation.get_meme,
    memeController.get)

router.post('/memes',
    ...validation.create_meme,
    memeController.create)

router.put('/memes/:id',
    ...validation.update_meme,
    memeController.update)
router.delete('/memes/:id',
    ...validation.delete_meme,
    memeController.delete) //deletes hosts too


// hosts

router.get('/memes/:id/hosts',
    HostController.get
)

router.post('/memes/:id/hosts',
    ...validation.create_host,
    HostController.create)


export default router;