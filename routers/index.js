const router = require('express').Router();
const PhotoController = require('../controllers/photoController');
const UserController = require('../controllers/userController');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

router.post('/users/register', UserController.register);
router.post('/users/login', UserController.login);

router.get('/photos', PhotoController.getAllPhotos);
router.get('/photos/:id', PhotoController.getOnePhotoByID);
router.post('/photos', authentication, PhotoController.createPhoto);
router.put('/photos/:id', authentication, authorization, PhotoController.updatePhoto);
router.delete('/photos/:id', PhotoController.deletePhoto);
module.exports = router;
