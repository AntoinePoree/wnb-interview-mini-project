import { Status } from './status';

interface ICoordinatorProfile {
  firstname: string;
  lastname: string;
}

interface IInitiative {
  city: string;
  country: string;
  postalCode: string;
  streetName: string;
  title: string;
}

export interface ICandidate {
  coordinatorProfile: ICoordinatorProfile;
  createdDate: string;
  id: string;
  initiative: IInitiative;
  status: Status;
  volunteerProfile: Pick<ICoordinatorProfile, 'firstname' | 'lastname'> & { company: { name: string } };
}
