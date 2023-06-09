import React, { useState } from "react";
import Nav from "../Nav/Nav";
import "./Layout.css";
import Logo from "../Logo/Logo";
import CategoryList from "../CategoryList/CategoryList";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import { Slider } from "../Slide/Slide";
import Footer from "../Footer/Footer";
import NavToggle from "../NavToggle/NavToggle";
import Drawer from "../Drawer/Drawer";
import Search from "../Search/Search";

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav />
        <NavToggle callback={toggleDrawer} />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />

        <CartLink />
        <Search />
        <Auth />
      </header>

      <aside>
        <CategoryList />
      </aside>
      <div className="main-top">
        <Slider />
      </div>

      <main>{props.children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
