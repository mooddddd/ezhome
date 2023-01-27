const multer = require("multer");
const path = require("path");

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, done) => {
      done(null, "uploads/"); // 어떤 파일에 저장할 건지! 두번째 인자값에는 업로드 했을 때 파일이 저장 될 디렉터리명 적어주면 됨
    },
    filename: (req, file, done) => {
      const ext = path.extname(file.originalname); // .png
      const basename = path.basename(file.originalname, ext);
      const filename = `${basename}_${Date.now()}${ext}`; // . 없어도 되는지 콘솔로그 찍어보기 -> 점 따로 없어두 댐! ext가 앞에 점까지 붙여줌
      done(null, filename);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

module.exports = upload;
