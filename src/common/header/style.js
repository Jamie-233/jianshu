import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({href: '/'})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  padding-right: 70px;
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  cursor: pointer;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    font-size: 17px;
    color: #ea6f5a;
    margin-right: 10px;
  }
  &.dl:hover {
    background: #e7e7e7;
  }
  .iconfont {
    font-size: 20px;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .slide-enter { /* 第一个时刻挂载 */
    transition: all .3s ease-out;
  }
  .slide-enter-active { /* 第一个时刻过去后挂载 */
    width: 240px;
  }
  .slide-exit {
    transition: all .3s ease-out;
  }
  .slide-exit-active {
    width: 160px;
  }
  .iconfont {
    position: absolute;
    color: #BABABA;
    cursor: pointer;
    right: 5px;
    bottom: 4px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focused {
      color: #fff;
      background: #969696;
    }
  }

`;

export const NavSearch = styled.input.attrs({placeholder: '搜索'})`
  width: 160px;
  height: 38px;
  margin-top: 9px; /* 整体height 56px; input框 减去38 还剩18px; 18/2=9; */
  margin-left: 20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box; /* 有了padding 160+20+20 width:200px */
  border: none;
  outline: none;
  border-radius: 19px; /* radius 值高度的一半 */
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  /* 如果上面带有 focused 属性 */
  &.focused {
    width: 240px;
    transition: .5s all easa-in;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid rgba(236,97,73,.7);
  &.reg {
    color: #ea6f5a;
  }
  &.writting {
    color: #fff;
    background: #ea6f5a;
  }
`;
