import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import GoogleStrategy from "passport-google-oauth20";
import KakaoStrategy from "passport-kakao";
import User from "./models/User";
import {
  githubLoginCallback,
  facebookLoginCallback,
  googleLoginCallback,
  kakaoLoginCallback
} from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`
    },
    githubLoginCallback
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      // callbackURL: `https://wonderful-warthog-64.localtunnel.me${routes.facebookCallback}`,
      callbackURL: `http://localhost:4000${routes.facebookCallback}`,
      profileFields: ["id", "displayName", "photos", "email"],
      scope: ["public_profile", "email"]
    },
    facebookLoginCallback
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `http://localhost:4000${routes.googleCallback}`,
      profileFields: ["id", "displayName", "photos", "email"],
      scope: ["profile", "email"]
    },
    googleLoginCallback
  )
);

passport.use(
  new KakaoStrategy(
    {
      clientID: "6b2c832c60392e1b2f7e1317feb54050",
      clientSecret: " ",
      callbackURL: `http://localhost:4000${routes.kakaoCallback}`,
      // profileFields: ["id", "displayName", "photos", "email"],
      scope: ["profile", "account_email "]
    },
    kakaoLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
