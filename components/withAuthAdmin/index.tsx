import ApiData from "dtos/ApiData";
import User from "dtos/User";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Cookie from "js-cookie";
import AuthState from "dtos/AuthState";


const withAuthAdmin = (Component) => {
  const Auth = (pageProps) => {
    const router = useRouter();
    const loggedUser: User = useSelector(
      (state: AuthState) => state.auth.loggedUser
    );
    const apiDataCookie = Cookie.get('@api-data');
    const apiData: ApiData = apiDataCookie ? JSON.parse(apiDataCookie) : null;

    if (
      !loggedUser ||
      loggedUser.profile !== "Admin" ||
      !apiData ||
      !apiData["access-token"] ||
      apiData["access-token"] === ""
    ) {
      router.push({
        pathname: '/',
        query: {
          callback: router.pathname
        }
      })
    }
    return <Component {...pageProps} />;
  };

  if(Component.getServerSideProps) {
    Auth.getServerSideProps = Component.getServerSideProps;
  }

  return Auth;
};


  

export default withAuthAdmin;