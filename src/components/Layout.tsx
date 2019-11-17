import { Link } from "gatsby";
import * as React from "react";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import { Segment, Icon, Container, Sidebar } from "semantic-ui-react";
import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";
import { Provider } from "react-redux";
import { store } from "../store";

export const menuItems: any[] = [
  //  { name: "Home", path: "/", exact: true, icon: "home", inverted: true }
  // {  name: "About", path: "/about/", exact: true, icon: "info circle" },
  //{ name: "Blog", path: "/blog/", exact: false, icon: "newspaper" }
];

export interface LayoutProps {
  location: {
    pathname: string;
  };
  children: any;
}

const Layout = (props: LayoutProps) => {
  const { pathname } = props.location;
  const isHome = pathname === "/";

  return (
    <Provider store={store}>
      <Sidebar.Pushable as={Segment} style={{ backgroundColor: "#1B1C1D" }}>
        <SidebarMenu
          Link={Link}
          pathname={pathname}
          items={menuItems}
          visible={false}
        />

        <Sidebar.Pusher style={{ minHeight: "100vh" }}>
          {/* Header */}
          {isHome ? null : (
            <HeaderMenu Link={Link} pathname={pathname} items={menuItems} />
          )}

          {/* Render children pages */}
          <div style={{ paddingBottom: 30 }}>{props.children}</div>

          {/* Footer */}
          <Segment
            inverted
            vertical
            style={{ position: "absolute", bottom: 0, width: "100%" }}
          >
            <Container textAlign="center">
              <p>
                <span style={{ color: "#4ca1af" }}>
                  Surge ⚡ by UTD Blockchain{" "}
                </span>{" "}
                •{" "}
                <span style={{ color: "#dd5e89" }}>
                  Contact us
                  <b>
                    {" "}
                    <a
                      style={{ color: "rgba(205, 94, 137, .7)" }}
                      href="mailto:utd.bcso@gmail.com"
                    >
                      {" "}
                      here
                    </a>
                  </b>
                </span>
              </p>
            </Container>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Provider>
  );
};

export default Layout;

export const withLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) =>
  class WithLayout extends React.Component<P & LayoutProps> {
    render() {
      return (
        <Layout location={this.props.location}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  };
