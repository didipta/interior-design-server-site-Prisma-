export type Iservicefilter = {
  searchTerm?: string | undefined;
  name?: string | undefined;
  price?: number | undefined;
  Available?: number | undefined;
  status?: number | undefined;
  slug?: string | undefined;
  servicecategoryId?: string | undefined;
  minPrice?: number | undefined;
  maxPrice?: number | undefined;
};

export const serviceSearchableFields: string[] = [
  'name',
  'slug',
  'servicecategoryId',
  'description',
  'shortdescription',
  'price',
  'Available',
];
export const serviceSearch: string[] = [
  'name',
  'price',
  'Available',
  'status',
  'slug',
  'servicecategoryId',
  'minPrice',
  'maxPrice',
  'searchTerm',
];
