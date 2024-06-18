const router = require('express').Router()

const {
    CreateUser, GetUsers, GetUserById, DeleteUser, DeleteUsers,
    UpdateUser
} = require('../controller/UserController')

router.get('/', GetUsers)
router.post('/create-user', CreateUser)
router.put('/update-user/:id', UpdateUser)
router.get('/get-user-by-id/:id', GetUserById)
router.delete('/delete-user/:id', DeleteUser)
router.delete('/', DeleteUsers)


module.exports = router;