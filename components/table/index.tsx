import React from 'react';
import cn from 'classnames';
import { useTable, Column } from 'react-table';

import { User } from '../../types/user';

import TableLoadingSkeleton from './loadingSkeleton';

interface PaginationProps {
  page: number,
  onChangePage: (newPage: number) => void,
}

const Pagination = ({
  page,
  onChangePage,
}: PaginationProps) => {
  const paginationItem = [
    {
      text: 'First',
      onClick: () => onChangePage(1),
      isDisable: page === 1,
    },
    {
      text: 'Prev',
      onClick: () => onChangePage(page - 1),
      isDisable: page === 1,
    },
    {
      text: 'Next',
      onClick: () => onChangePage(page + 1),
      isDisable: false,
    },
  ];

  return (
    <div className="flex items-center mb-4">
      {
        paginationItem.map((item, idx) => {
          const key = item.text;

          return (
            <div
              key={key}
              className={cn(
                'hover:bg-neutral-20 border border-neutral-80 rounded px-2 cursor-pointer select-none',
                idx !== 0 && 'ml-1',
                item.isDisable && 'cursor-not-allowed opacity-50',
              )}
              onClick={item.onClick}
            >
              {item.text}
            </div>
          );
        })
      }
      <div className="ml-8 self-baseline">
        {`Current page: ${page}`}
      </div>
    </div>
  );
};

interface TableProps {
  columns: Column<User>[],
  data: User[],
  loading: boolean,
  page: number,
  onChangePage: (newPage: number) => void,
}

const Table = ({
  columns,
  data,
  loading,
  page,
  onChangePage,
}: TableProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  const renderRows = () => {
    if (loading) {
      return (
        <TableLoadingSkeleton />
      );
    }

    return rows.map((row) => {
      prepareRow(row);
      const { key, ...restRowProps } = row.getRowProps();

      return (
        <tr key={key} {...restRowProps} className="border-b border-b-neutral-30 hover:bg-neutral-20">
          {row.cells.map((cell) => {
            const { key, ...restCellProps } = cell.getCellProps();

            return <td key={key} {...restCellProps} className="px-4 py-1">{cell.render('Cell')}</td>;
          })}
        </tr>
      );
    });
  };

  return (
    <div className="overflow-auto">
      <Pagination page={page} onChangePage={onChangePage} />
      <table
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => {
            const { key, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();
            return (
              <tr key={key} {...restHeaderGroupProps} className="bg-neutral-30">
                {headerGroup.headers.map((column) => {
                  const { key, ...restColumn } = column.getHeaderProps();

                  return (
                    <th key={key} {...restColumn} className="p-4">{column.render('Header')}</th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {renderRows()}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
