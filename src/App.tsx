import { Route, Routes } from "react-router";
import MainLayout from "./routes/layout";
import ProtectedRoutes from "./routes/protectedRoutes";
import PublicRoutes from "./routes/publicRoutes";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element={<ProtectedRoutes />} />
      </Route>
      <Route path="/public" element={<PublicRoutes />} />
      <Route path="*" element={<MainLayout />} />
    </Routes>
  )
}
