import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import Routes from "./client/Routes";
import matchRoutes from "react-router-config/matchRoutes";

const app = express();
app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  console.log(promises);
  Promise.all(promises)
    .then((result) => {
      console.log(result);
      res.send(renderer(req, store));
    })
    .catch((err) => console.log("err", err));
});

app.listen(3000, () => {
  console.log("listen port 3000");
});
