const users = () => {
  return [
    {
      id: '1',
      userName: 'Fábio Costa',
    },
    {
      id: '2',
      userName: 'Isabel Maia',
    },
    {
      id: '3',
      userName: 'Luisa Sousa',
    },
  ];
};

//-----------------------
const user = () => {
  return {
    id: '1',
    userName: 'Fábio Costa',
  };
};

//-------------------------
export const userResolvers = {
  Query: {
    user,
    users,
  },
};
