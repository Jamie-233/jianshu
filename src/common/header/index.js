import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  
} from './style';

const Header = (props) => {
  const [focused, hanleInputFocus] = useState(false);

  return (
    <>
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left dl">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={300}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onClick={() => hanleInputFocus(!!{focused: true})}
                onBlur={() => hanleInputFocus()}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'iconfont focused' : 'iconfont'}>&#xe662;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe6e5;</i> 写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    </>
  );
};

export default Header;
