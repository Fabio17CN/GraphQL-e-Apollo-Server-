const posts = () => {
  return [
    {
      id: '1',
      title: 'Fábio e Isabel',
    },
    {
      id: '2',
      title: 'Maria Sousa',
    },
    {
      id: '3',
      title: 'Maria oliveira',
    },
  ];
};

const post = () => {
  return {
    id: '1',
    title: 'Post title 1',
  };
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
