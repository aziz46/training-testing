const { User, Photo } = require('../models')

const authorization = async (req, res, next) => {
  try {
    const photoId = req.params.id;
    const authenticatedUser = res.locals.user
    const photo = await Photo.findOne({
      where: {
        id: photoId
      }
    })
    if (!photo) {
      return res.status(404).json({
        name: "Data Not found",
        message: `Photo with id ${photoId} not found`
      })
    }
    if (photo.UserId === authenticatedUser.id) {
      return next()
    } else {
      return res.status(403).json({
        name: "Authorization error",
        message: `User with id ${authenticatedUser.id} doesnt have permission to access photo with id ${photoId}`
      })
    }
  } catch (err) {
    return res.status(500).json(err)
  }
}

module.exports = authorization