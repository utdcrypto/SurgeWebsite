import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Container, Menu } from "semantic-ui-react";
import { toggleSidebar } from "../../store";
import { MenuProps } from "../Menu";

interface HeaderMenuProps extends MenuProps {
  dispatch?: Dispatch<any>;
  inverted?: boolean;
}

export const HeaderMenu = ({ items, pathname, Link, inverted, dispatch }: HeaderMenuProps) =>
  <Container>
    <Menu size="large" pointing secondary inverted={inverted}>
      <Menu.Item as="a" className="mobile only" icon="sidebar" onClick={() => dispatch && dispatch(toggleSidebar())} />
      {items.map((item) => {
        const active = (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
        return <Menu.Item
          as={Link}
          className="mobile hidden"
          name={item.name}
          to={item.path}
          key={item.path}
          active={active}
        />;
      })}
    </Menu>
  </Container>;

export default connect()(HeaderMenu);
