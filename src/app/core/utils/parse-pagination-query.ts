export const parsePaginationQuery = (pagination: { page: number; limit: number }) => {
  const params: { limit: number; offset: number } = { limit: 0, offset: 0 };
  params.limit = pagination.limit;
  params.offset = (pagination.page - 1) * pagination.limit;

  return params;
};
