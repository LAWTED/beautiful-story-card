export interface Card {
  id: number;
  title: string;
  AsAn: string;
  IWantTo: string;
  SoThat: string;
  AcceptanceCriteria: string;
  State: "Accepted" | "Rejected";
  Reason: string;
}
