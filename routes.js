// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// github

const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

// Facebook

const FACEBOOK = "/auth/facebook";
const FACEBOOK_CALLBACK = "/auth/facebook/callback";

// Users

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const ME = "/me";

// Videos

const VIDEO = "/video";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  users: USERS,

  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  facebook: FACEBOOK,
  facebookCallback: FACEBOOK_CALLBACK,
  search: SEARCH,

  userDetail: id => {
    if (id) {
      return `/users/${id}`;
    }
    return USER_DETAIL;
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  video: VIDEO,
  upload: UPLOAD,
  videoDetail: id => {
    if (id) {
      return `/video/${id}`;
    }
    return VIDEO_DETAIL;
  },
  editVideo: id => {
    if (id) {
      return `/video/${id}/edit`;
    }
    return EDIT_VIDEO;
  },
  deleteVideo: id => {
    if (id) {
      return `video/${id}/delete`;
    }
    return DELETE_VIDEO;
  },
  me: ME
};

export default routes;
