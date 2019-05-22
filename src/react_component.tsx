import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

interface IProps {
  name: string; // 动画标识名
  time?: number; // 动画时长
  enterTime?: number; // 进入动画时长
  leaveTime?: number; // 离开动画时长
  [key: string]: any;
}

/**
 * 组件进出动画
 */
const Transition: React.SFC<IProps> = ({ name, time = 400, enterTime, leaveTime, ...props }) => (
  <ReactCSSTransitionGroup
    transitionName={name}
    transitionEnterTimeout={enterTime || time}
    transitionLeaveTimeout={leaveTime || time}
    {...props}
  />
);

export default Transition;
