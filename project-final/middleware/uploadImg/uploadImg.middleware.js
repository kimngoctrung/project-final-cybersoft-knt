const multer = require("multer");
const uploadImageSignle = () => {
  const storage = multer.diskStorage({
    /// Lưu đường dẫn thư mục
    destination: (req, file, cb) => {
      cb(null, "./public/images/movie");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  });
  const upload = multer({ storage });
  return upload.single("hinhAnh");
};
module.exports = {
  uploadImageSignle,
};
