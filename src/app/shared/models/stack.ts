export interface IChip {
  color: string;
  label: string;
}

export interface IStack extends IChip {
  color: string;
  label: string;
  value: number;
  percentage: number;
  active?: boolean;
}
