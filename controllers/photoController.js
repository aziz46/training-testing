const { Photo, User } = require('../models');

class PhotoController {
  static async getAllPhotos(req, res) {
    try {
      const query = await Photo.findAll({
        include: User,
      });
      res.status(200).json(query);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getOnePhotoByID(req, res) {
    try {
      const { id } = req.params;
      const query = await Photo.findByPk(id);
      res.status(200).json(query);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async createPhoto(req, res) {
    try {
      const payload = req.body;
      const authenticatedUser = res.locals.user;
      const query = await Photo.create({
        ...payload,
        UserId: authenticatedUser.id,
      });
      res.status(200).json(query);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async updatePhoto(req, res) {
    try {
      const { id } = req.params;
      const { title, caption, image_url } = req.body;
      const data = {
        title,
        caption,
        image_url,
      };
      const query = Photo.update(data, {
        where: {
          id,
        },
        returning: true,
      });
      res.status(200).json(query);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deletePhoto(req, res) {
    try {
      const { id } = req.params;
      const query = Photo.destroy({
        where: {
          id,
        },
      });
      res.status(200).json(query);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = PhotoController;
