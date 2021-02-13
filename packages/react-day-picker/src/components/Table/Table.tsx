import * as React from 'react';

import { TableProps } from '../../types/TableProps';
import { Head } from '../Head';
import { Row } from '../Row';
import { getWeeks } from './utils/getWeeks';

export function Table(props: TableProps): JSX.Element {
  const { month, dayPickerProps } = props;
  const {
    classNames,
    styles,
    showCaption,
    showHead,
    components
  } = dayPickerProps;
  const { Caption } = components;
  const weeks = getWeeks(month, dayPickerProps);

  return (
    <table className={classNames?.table} style={styles?.table}>
      {showCaption && <Caption month={month} dayPickerProps={dayPickerProps} />}
      {showHead && <Head dayPickerProps={dayPickerProps} />}
      <tbody className={classNames?.tbody} style={styles?.tbody}>
        {Object.keys(weeks).map((weekNumber) => (
          <Row
            currentMonth={month}
            key={weekNumber}
            week={weeks[weekNumber]}
            weekNumber={Number(weekNumber)}
            dayPickerProps={dayPickerProps}
          />
        ))}
      </tbody>
    </table>
  );
}