import React from 'react';

const TableLoadingSkeleton = () => (
  <>
    {
      [...Array(3)].map((_, idx) => (
        <tr key={`${idx + 1}`} className="animate-pulse">
          <td>
            <div className="bg-neutral-30 h-4 mx-4 my-1 rounded" />
          </td>
          <td>
            <div className="bg-neutral-30 h-4 mx-4 my-1 rounded" />
          </td>
          <td>
            <div className="bg-neutral-30 h-4 mx-4 my-1 rounded" />
          </td>
          <td>
            <div className="bg-neutral-30 h-4 mx-4 my-1 rounded" />
          </td>
          <td>
            <div className="bg-neutral-30 h-4 mx-4 my-1 rounded" />
          </td>
        </tr>
      ))
    }
  </>
);

export default TableLoadingSkeleton;
