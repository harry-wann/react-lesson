export type Gift = {
  id: number;
  name: string;
  addr: string;
  tel: string;
};

export type Gifts = {
  data: Gift[];
  total: number;
  totalPage: number;
  page: number;
  isLast: boolean;
};
