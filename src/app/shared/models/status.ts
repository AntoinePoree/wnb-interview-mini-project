export enum Status {
  Application = 'APPLICATION',
  Discuss = 'DISCUSSION',
  WaitingAssociation = 'WAITING_ASSOCIATION_VALIDATION',
  WaitingManager = 'WAITING_MANAGER_VALIDATION',
  InProgress = 'IN_PROGRESS',
  Completed = 'USER_HAS_PARTICIPATED',
  Cancelled = 'CANCELLED',
}

export const colorByStatus: Record<Status, string> = {
  [Status.Application]: '#FF000080',
  [Status.Discuss]: '#FF0000',
  [Status.WaitingAssociation]: '#FFC000',
  [Status.WaitingManager]: '#FFC00080',
  [Status.InProgress]: '#92D050',
  [Status.Completed]: '#00B050',
  [Status.Cancelled]: '#D8D8D8',
};

export const labelByStatus: Record<Status, string> = {
  [Status.Application]: 'Candidature',
  [Status.Discuss]: 'Echange',
  [Status.WaitingAssociation]: 'Date à valider',
  [Status.WaitingManager]: 'En attente du manager',
  [Status.InProgress]: 'En cours',
  [Status.Completed]: 'A participé',
  [Status.Cancelled]: 'Annulé / refusé / non finalisé',
};

export const orderByStatus: Record<Status, number> = {
  [Status.Application]: 0,
  [Status.Discuss]: 1,
  [Status.WaitingAssociation]: 2,
  [Status.WaitingManager]: 3,
  [Status.InProgress]: 4,
  [Status.Completed]: 5,
  [Status.Cancelled]: 6,
};
