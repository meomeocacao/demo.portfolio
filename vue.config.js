module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/port.meme/" // Thay tên repository của các bạn vào đây nhé
      : "/",
};
