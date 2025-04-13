"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createStore } from "../../store/store";
import NavBar from "../../components/common/NavBar";
import Footer from "../../components/common/Footer";

interface ClientProviderProps {
  children: ReactNode;
}

export default function ClientProvider({ children }: ClientProviderProps) {
  const initialPreloadedState = {};

  let isShowNavBarAndFooter = false;
  if (typeof window !== "undefined") {
    isShowNavBarAndFooter =
      window?.location?.pathname !== "/login" &&
      window?.location?.pathname !== "/register";
  }
  const store = createStore(initialPreloadedState);
  return (
    <Provider store={store}>
      <div>
        {isShowNavBarAndFooter && (
          <>
            <NavBar />
            {children}
            <Footer />
          </>
        )}
        {!isShowNavBarAndFooter && <>{children}</>}
      </div>
    </Provider>
  );
}
