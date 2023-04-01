import { useEffect } from "react";
import { useRouter } from "next/router";

const WithPrivateRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    //validamos si el usuario esta validado
    const isLogin = false;

    if (!isLogin) {
      router.push("/admin/login");
    }
  }, [children]);

  return <>{children}</>;
};

export default WithPrivateRoute;
