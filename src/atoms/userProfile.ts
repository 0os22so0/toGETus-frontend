import { atom } from 'recoil';
import { v1 } from 'uuid';

export interface IUserProfileAtom {
  name: string;
  image: string;
}

export const userProfileState = atom<IUserProfileAtom>({
  key: `userProfileState/${v1()}`,
  default: {
    name: '관악우파루파',
    image: 'https://picsum.photos/200/200',
  },
});
