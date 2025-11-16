
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  const pageNumbers = [];
  const maxPagesToShow = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-end mt-10">
      <nav aria-label="Pagination">
        <ul className="inline-flex items-center -space-x-px rounded-md shadow-sm">
          <li>
            <Link
              href={`${basePath}&page=${currentPage - 1}`}
              className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 ${
                currentPage === 1 ? 'pointer-events-none text-gray-300' : ''
              }`}
            >
              <span className="sr-only">Previous</span>
              &laquo;
            </Link>
          </li>
          {startPage > 1 && (
            <>
              <li>
                <Link
                  href={`${basePath}&page=1`}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
                >
                  1
                </Link>
              </li>
              {startPage > 2 && (
                <li>
                  <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300">
                    ...
                  </span>
                </li>
              )}
            </>
          )}
          {pageNumbers.map((number) => (
            <li key={number}>
              <Link
                href={`${basePath}&page=${number}`}
                className={`inline-flex items-center px-4 py-2 text-sm font-medium ${
                  currentPage === number
                    ? 'text-white bg-primary border border-primary'
                    : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {number}
              </Link>
            </li>
          ))}
          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && (
                <li>
                  <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300">
                    ...
                  </span>
                </li>
              )}
              <li>
                <Link
                  href={`${basePath}&page=${totalPages}`}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
                >
                  {totalPages}
                </Link>
              </li>
            </>
          )}
          <li>
            <Link
              href={`${basePath}&page=${currentPage + 1}`}
              className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 ${
                currentPage === totalPages ? 'pointer-events-none text-gray-300' : ''
              }`}
            >
              <span className="sr-only">Next</span>
              &raquo;
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
