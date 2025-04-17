import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./home";
import { Main } from "./main";
import { NotFound } from "./not-found";

const routes = [
  { path: '/', Page: Home },
  { path: '/main', Page: Main },
  { path: '/*', Page: NotFound }
];

function Routing() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {routes.map(({ path, Page }) => (
        <Route key={path} path={path} element={<Page />} />
      ))}
    </Routes>
  );
}

export { Routing };
