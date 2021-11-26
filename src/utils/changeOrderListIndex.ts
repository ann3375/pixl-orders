export const changeOrderListItemIndex = (currentPage: number, index: number): number | string => {
  if (index === 9 && currentPage > 1) return currentPage * 10;
  if (currentPage === 1) {
    return index + 1;
  }
  return `${currentPage - 1}${index + 1}`;
};
