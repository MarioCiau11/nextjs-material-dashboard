import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const WithPublicRoute = ({ children }) => {
  const router = useRouter();
  const { isLogginIn } = useSelector((state) => state.login.userInformacion);

  useEffect(() => {
    //validamos si el usuario esta loggueado
    if (isLogginIn) {
      router.push("/admin/dashboard");
    }
  }, [children]);

  return <>{children}</>;
};

export default WithPublicRoute;
