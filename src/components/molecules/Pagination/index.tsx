import React from 'react';
import classNames from 'classnames';
import { Button } from '../../atoms/Button';

import './pagination.scss';

interface IPagination {
  page: number;
  setPage: (page: number) => void;
  isLoaded: boolean;
  className?: string;
}

export const Pagination: React.FC<IPagination> = ({ setPage, page, className, isLoaded }) => {
  const classProps = classNames('pagination', className);
  return (
    <div className={classProps}>
      {page !== 1 && (
        <Button disabled={!isLoaded} className="pagination__button" onClick={() => setPage(-1)}>
          Back
        </Button>
      )}
      <Button disabled={!isLoaded} className="pagination__button" onClick={() => setPage(1)}>
        Next
      </Button>
    </div>
  );
};
