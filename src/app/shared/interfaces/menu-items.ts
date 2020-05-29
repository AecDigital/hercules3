export interface MenuItem {
    id: string;
    label: string;
    rol?: number;
    children?: MenuItem[];
    linkTo?: string;
  }