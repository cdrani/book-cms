const initialState = {
  books: {
    1: {
      id: 1,
      title: 'Strides',
      category: 'Novel'
    },

    2: {
      id: 2,
      title: "Losing Joe's Place",
      category: 'Novel'
    }
  }
}

export default (state = initialState, action) => state
