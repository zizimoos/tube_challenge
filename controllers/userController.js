import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
  const {
    body: { _, __, password1, password2 }
  } = req;
  try {
    if (password1 !== password2) {
      res.status(400);
      res.render("join", { pageTitle: "Join" });
    } else {
      // todo : register User
      // todo : log user in
      res.redirect(routes.home);
    }
  } catch (e) {
    console.log(e);
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};
export const postLogin = (req, res) => {
  const {
    body: { _, __, password1, password2 }
  } = req;
  // todo : register User
  // todo : log user in
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  // todo : process logout
  res.redirect(routes.home);
};

export const users = (req, res) => res.render("users", { pageTitle: "Users" });

export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "UserDetail" });

export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "EditProfile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "ChangePassword" });
