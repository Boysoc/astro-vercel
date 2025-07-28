export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  prevUrl?: string;
  nextUrl?: string;
  firstUrl?: string;
  lastUrl?: string;
}

interface GetPaginationProps {
  posts: any[];
  page: number | string;
  isIndex?: boolean;
  postsPerPage?: number;
}

const getPagination = ({
  posts,
  page,
  isIndex = false,
  postsPerPage = 5,
}: GetPaginationProps): PaginationProps => {
  const totalPagesFloat = posts.length / postsPerPage;
  const totalPages = Math.ceil(totalPagesFloat);

  const currentPage = page ? (typeof page === "string" ? parseInt(page) : page) : 1;

  const prevUrl = currentPage > 1 ? (currentPage - 1 === 1 && isIndex ? "/" : `/page/${currentPage - 1}`) : undefined;
  const nextUrl = currentPage < totalPages ? `/page/${currentPage + 1}` : undefined;

  return {
    currentPage,
    totalPages,
    prevUrl,
    nextUrl,
    firstUrl: "/",
    lastUrl: `/page/${totalPages}`,
  };
};

export default getPagination;