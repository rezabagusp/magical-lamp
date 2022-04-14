export type User = {
  gender: 'male' | 'female',
  name: {
    title: string,
    first: string,
    last: string,
  },
  email: string,
  registered: {
    date: string,
  },
  login: {
    username: string,
  },
};

export type UserFeed = {
  results: User[],
  info: {
    seed: string,
    results: number,
    page: number,
  },
};
