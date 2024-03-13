'use client';

import { useEffect, useMemo } from 'react';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { pathAddQuery } from '@/helpers/query';
import type { Pagination } from '@/models/pagination';

type Props = {
  pagination: Pagination;
};

const PaginationComponent = ({ pagination }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = Object.fromEntries(searchParams.entries());

  const { count, limit, last, page } = pagination;
  const prevPage = page > 1 ? page - 1 : 1;
  const nextPage = page < last ? page + 1 : last;
  const startIndex = count > 1 ? limit * (page - 1) + 1 : 0;
  const endIndex = page === last ? count : page * limit;

  const middenLinks = useMemo(() => {
    let links;

    if (last <= 8) {
      links = Array(last)
        .fill('')
        .map((element, index) => index + 1);
    } else if (page <= 5) {
      links = Array(8)
        .fill('')
        .map((element, index) => index + 1);
      links = [...links, '...', last];
    } else if (page >= last - 5) {
      const startNumber = last - 8;
      links = Array(8)
        .fill('')
        .map(() => startNumber + 1);
      links = [1, '...', ...links];
    } else {
      const startNumber = page - 4;
      links = Array(7)
        .fill('')
        .map(() => startNumber + 1);
      links = [1, '...', ...links, '...', last];
    }

    return links;
  }, [last, page]);

  useEffect(() => {
    if (Number(searchParams.get('page') ?? last) > last) {
      const routerLink = pathAddQuery(pathname, {
        ...query,
        page: last,
      });
      router.push(routerLink);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get('page'), last]);

  const selectPageLimit = (limitNumber: string) => {
    if (!limitNumber) return;
    const routerLink = pathAddQuery(pathname, {
      ...query,
      limit: limitNumber,
    });
    router.push(routerLink);
  };

  const linkString = (pageNumber: number): string => {
    return pathAddQuery(pathname, { ...query, page: pageNumber });
  };

  const relString = (pageNumber: number): string | undefined => {
    switch (pageNumber) {
      case prevPage:
        return 'prev';
      case nextPage:
        return 'next';
      default:
        return undefined;
    }
  };

  return (
    <footer className='pagination'>
      <section className='pagination__info'>
        <p>
          Item: {startIndex} - {endIndex} of {count}, Page: {page} of {last}
        </p>
        {last > 1 && (
          <ul className='pagination__items'>
            <li>
              <Link href={linkString(prevPage)} rel={relString(prevPage)}>
                &lt;
                <b>Previous Page</b>
              </Link>
            </li>
            {middenLinks.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>
                {typeof item === 'number' ? (
                  <Link
                    className={`${item === page ? 'active' : ''}`}
                    href={linkString(item)}
                    rel={relString(item)}
                  >
                    {item}
                  </Link>
                ) : (
                  item
                )}
              </li>
            ))}
            <li>
              <Link href={linkString(nextPage)} rel={relString(nextPage)}>
                &gt;
                <b>Next Page</b>
              </Link>
            </li>
          </ul>
        )}
      </section>
      <section className='pagination__control'>
        <p>Items per page:</p>
        <form>
          <label htmlFor='pagination-show-number'>
            <select
              id='pagination-show-number'
              defaultValue={limit}
              onChange={(event) => selectPageLimit(event.target.value)}
            >
              <option value='10'>10</option>
              <option value='25'>25</option>
              <option value='50'>50</option>
            </select>
          </label>
        </form>
      </section>
    </footer>
  );
};

export default PaginationComponent;
