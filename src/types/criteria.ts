export interface Criteria {
    id: string;
    name: string;
}

export interface CriteriaByInspection {
    criteriaId: string;
    inspectionId: string;
    score: number;
    notes: string;
  }