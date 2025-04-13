"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { usePathname } from "next/navigation";
import { createStore } from "../../store/store";
import NavBar from "../../components/common/NavBar";
import Footer from "../../components/common/Footer";

interface ClientProviderProps {
  children: ReactNode;
}

export default function ClientProvider({ children }: ClientProviderProps) {
  const initialPreloadedState = {};
  const pathname = usePathname();

  const isShowNavBarAndFooter =
    pathname !== "/login" && pathname !== "/register";
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
