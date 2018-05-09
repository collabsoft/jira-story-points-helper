import React from 'react';
import styled from 'styled-components';

import {
  STATUS_NEW,
  STATUS_INDETERMINATE,
  STATUS_DONE,
  STATUS_BG_COLOR,
  STATUS_BORDER_RADIUS,
  STATUS_FONT_COLOR,
} from './constants';
import i18n from './utils/i18n';
import formatNumber from './utils/formatNumber';

const STATUS_TEXT = {
  [STATUS_NEW]: i18n('txtNew'),
  [STATUS_INDETERMINATE]: i18n('txtIndeterminate'),
  [STATUS_DONE]: i18n('txtDone'),
};

const PointsBarCell = ({
  className,
  points = 0,
  percentage = 0,
  status = STATUS_NEW,
}) => {
  const pntStr = formatNumber(points);

  return (
    <div
      className={className}
      title={`${STATUS_TEXT[status]}: ${pntStr} (${percentage}%)`}
    >
      {pntStr}
    </div>
  );
};

export default styled(PointsBarCell)`
  align-items: center;
  background-color: ${({ status }) => STATUS_BG_COLOR[status]};
  border-radius: ${({ status }) => STATUS_BORDER_RADIUS[status]};
  box-sizing: border-box;
  color: ${({ status }) => STATUS_FONT_COLOR[status]};
  display: flex;
  flex: ${({ percentage }) => percentage};
  justify-content: center;
  line-height: 0.8125rem;
  padding: 4px 6px;
  transition: all 0.3s ease-in-out;
`;
