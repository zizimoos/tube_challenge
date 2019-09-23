export const home = (req, res) => res.render("home", { pageTitle: "Home", videos });

export const search = (req, res) => {
  const {
    query: { term }
  } = req;
  res.render("search", { pageTitle: "Search", term, videos });
};

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};
export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  // todo : upload and save video
  res.redirect(routes.videoDetail(1212121));
};

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "VideoDetail" });

export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "EditVideo" });

export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "DeleteVideo" });

export const video = (req, res) => res.redirect(route.home);
