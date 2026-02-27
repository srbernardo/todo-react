export interface TaskProps {
  id: string;
  title: string;
  completed: boolean;
}

export type FilterType = 'all' | 'completed' | 'pending';
