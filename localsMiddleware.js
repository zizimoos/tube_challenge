import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Tube Challenge";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: false,
    id: 1
  };
  next();
};
