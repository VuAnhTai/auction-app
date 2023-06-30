export enum TypeEnum {
  PUBLISHED = 'published',
  DRAFT = 'draft',
  COMPLETED = 'completed',
}

export enum TypeFilter {
  ONGOING = 'ongoing',
  COMPLETED = 'completed',
}

export type Item = {
  id: number;
  name: string;
  duration: number;
  currentPrice: number;
  type: TypeEnum;
  owner: {
    id: number;
    email: string;
  };
  createdBy: number;
};
