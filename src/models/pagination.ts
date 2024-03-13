export type Pagination = {
  /** 總筆數 */
  count: number;
  /** 最末頁數 */
  last: number;
  /** 當前頁數 */
  page: number;
  /** 每頁顯示筆數 */
  limit: number;
  /** 排序 */
  sort?: any;
  /** 連結 */
  links: string;
};
