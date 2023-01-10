const request = require('supertest');
const app = require('../app');
const { hashPassword, comparePassword } = require('../helpers/bcrypt');
const { generateToken, verifyToken } = require('../helpers/jwt');
const UserController = require('../controllers/userController');
const PhotoController = require('../controllers/photoController');

const mockRequest = (sessionData, body, params, query) => ({
  body,
  params,
  query,
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('User Test', () => {
  const password = 'admin'; // datainput
  const hashing = hashPassword(password);
  const compare = comparePassword(password, hashing);
  it('Password compare to be return boolean', () => { // unit testing
    expect(typeof compare).toBe('boolean');
  });
  it('Should return true when compile password', () => {
    expect(compare).toEqual(true);
  });

  const payloadLogin = {
    userId: 1,
    userName: "Aziz",
    password: "1234567890"
  };
  const token = generateToken(payloadLogin);
  const decoded = verifyToken(token);
  it('Test JWT', () => {
    expect(decoded.userId).toEqual(10);
  });

  it('should fetch all albums', async () => { // integration testing
    const res = await request(app).get('/photos');
    expect(res.statusCode).toEqual(200);
    // expect(res.body).toHaveProperty('post');
  });

  it('Test get Photos', async () => {
    const req = mockRequest();
    const res = mockResponse();
    await PhotoController.getAllPhotos(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
  it('Test get Photos getAllPhotos', async () => {
    const req = mockRequest();
    const res = mockResponse();
    await PhotoController.getAllPhotos(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it('Test get Photos getOnePhotoByID', async () => {
    const req = mockRequest({}, {}, {
      id: 9
    });
    const res = mockResponse();
    await PhotoController.getOnePhotoByID(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it('Test get Photos createPhoto', async () => {
    const req = mockRequest({}, {
      title: "Test Rian",
      caption: "Test rian caption",
      image_url: "https://photoliburan.com",
      UserId: 1
    });
    const res = mockResponse();
    await PhotoController.createPhoto(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it('Test user Login', async () => {
    const req = mockRequest({}, {
      email: 'andrey@mail.com',
      password: 'admin',
    });
    const res = mockResponse();
    await UserController.login(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
