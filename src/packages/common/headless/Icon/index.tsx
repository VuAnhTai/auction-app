import { type Dict } from '@/common/types';
import React from 'react';
import ThumbUp from './icons/thumb-up.svg';
import ThumbDown from './icons/thumb-down.svg';
import Signout from './icons/signout.svg';

const ICONS = {
  'thumbs-up': ThumbUp,
  'thumbs-down': ThumbDown,
  'sign-out': Signout,
};

export type IconName = keyof typeof ICONS;

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  name: IconName;
  style?: Dict;
};

export const Icon = ({ name, size = 10, className, style, ...restProps }: IconProps) => {
  const Component = ICONS[name];

  return (
    <Component className={className} width={size} height={size} {...restProps} style={style} />
  );
};
