import { atom } from 'recoil';

export interface IUserProfileAtom {
  name: string;
  image: string;
}

export const userProfileState = atom<IUserProfileAtom>({
  key: 'profile',
  default: {
    name: '관악우파루파',
    image:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.co.kr%2Fiamblackrose%2F%25EC%25A7%25B1%25EA%25B5%25AC%25EC%25A7%25A4%2F&psig=AOvVaw1YKxfAUTCT3ECzqbvrtBhD&ust=1682351047446000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKDZuZaswP4CFQAAAAAdAAAAABAE',
  },
});
