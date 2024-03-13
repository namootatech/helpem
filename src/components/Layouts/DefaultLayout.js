import React, { useState, useEffect } from "react";
import Sidebar from "@/components/SideBar";
import Header from "@/components/Header/dashboard";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { connect } from "react-redux";

function DefaultLayout({
  children,
  login,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();


  useEffect(()=> {
    if (typeof window !== "undefined") {
      const user = Cookies.get("user");
      if (!user) {
        router.push("/login");
      }
      else if (user){
        const userObj = JSON.parse(user);
        login(userObj);
      }
    }
  }, [])

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch({ type: "LOGIN", payload: user }),
  };
};

export default connect(null, mapDispatchToProps)(DefaultLayout);

