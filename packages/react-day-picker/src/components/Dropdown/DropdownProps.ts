import * as React from 'react';

/** The props for the [[Dropdown]] component. */

export interface DropdownProps {
  'aria-label': string;
  caption?: React.ReactNode;
  children?: React.SelectHTMLAttributes<HTMLSelectElement>['children'];
  className?: string;
  style?: React.CSSProperties;
  value?: React.SelectHTMLAttributes<HTMLSelectElement>['value'];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}
