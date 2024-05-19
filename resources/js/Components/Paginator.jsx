import React from 'react';
import { Link } from '@inertiajs/react';
import { Pagination, Stack } from '@mui/material';
import { ArrowBigLeft, ArrowBigRight, PanelRightClose } from 'lucide-react';

function Paginations({ pager, setCurrentPage }) {
  const prev = pager.links[0].url;
  const next = pager.links[pager.links.length - 1].url;
  const currentPage = pager.current_page;
  const totalPage = pager.last_page;

  const handlePageChange = (e, pageNumber) => {
    e.preventDefault();

    const pageUrl = pager.path + '?page=' + pageNumber;
    Inertia.get(pageUrl);

    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Stack spacing={2} direction={'row'} alignItems={'center'}>
        <Link as="button" href={prev} disabled={currentPage === 1}>
          {<ArrowBigLeft />}
        </Link>
        <Pagination
          count={totalPage}
          page={currentPage}
          onChange={handlePageChange}
          color="secondary"
          boundaryCount={1}
          siblingCount={1}
        />
        <Link as="button" href={next} disabled={currentPage === totalPage}>
          {<ArrowBigRight />}
        </Link>
      </Stack>
    </div>
  );
}

export default Paginations;
