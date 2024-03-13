import { isNullOrEmpty } from '@/helpers/utils';

/**
 * Adds query parameters to a given path.
 * @param path - The original path.
 * @param query - An object containing the query parameters.
 * @returns The updated path with the added query parameters.
 */
export function pathAddQuery(path: string, query: Record<string, any>) {
  const queryString = Object.entries(query)
    .filter(([, value]) => !isNullOrEmpty(value))
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return queryString ? `${path}?${queryString}` : path;
}
