//it will keep aal theh helper and reuseable functions

export function filterData(searchText,restaurants)
{
  const filterData= restaurants.filter((restaurant)=> restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
  return filterData;
}