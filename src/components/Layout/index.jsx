import { Footer } from "components/UI/Footer/Footer";
import { Header } from "components/UI/Header/Header";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      {
        router.route === "/registration" ||
        router.route === "/registerCode" ||
        router.route === "/forgotPasswordCode" ||
        router.route === "/forgot-password" ||
        router.route === "/login"
          ? ""
          : ""
        // <Header />
      }
      {children}
      {router.route === "/registration" ||
      router.route === "/registerCode" ||
      router.route === "/" ||
      router.route === "/forgot-password-code" ||
      router.route === "/forgot-password-phone" ||
      router.route === "/forgot-password" ||
      router.route === "/login" ? (
        ""
      ) : (
        <Footer />
      )}
    </>
  );
}
