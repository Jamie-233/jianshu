import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from './store';

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style';

const Header = (props) => {

  return (
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
            in={props.focused}
            timeout={300}
            classNames="slide"
          >
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onClick={() => props.hanleInputFocus()}
              onBlur={() => props.hanleInputBlur()}
            ></NavSearch>
          </CSSTransition>
          <i className={props.focused ? 'iconfont focused' : 'iconfont'}>&#xe662;</i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writting"><i className="iconfont">&#xe6e5;</i> 写文章</Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  );
};

const mapStateToProps = state => {
  return {
    focused: state.header.focused
  }
};

const mapDispatchToProps = dispatch => {
  return {
    hanleInputFocus: (state) => dispatch(actionCreators.serachFocus()),
    hanleInputBlur: (state) => dispatch(actionCreators.searchBlur()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
