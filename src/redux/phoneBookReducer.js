const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  contacts: [],
  filter: '',
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deletePost: (state, action) => {
      state.contacts = state.contacts.filter(contact => {
        return contact.id !== action.payload;
      });
    },
  },
});

export const { setFilter, addContact, deletePost } = phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;

// export const phoneBookReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'phoneBook/setFilter':
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     case 'phoneBook/addContact':
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     case 'phoneBook/deletePost':
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     default:
//       return state;
//   }
// };

// export const setFilter = payload => {
//   return {
//     type: 'phoneBook/setFilter',
//     payload,
//   };
// };

// export const addContact = payload => {
//   return {
//     type: 'phoneBook/addContact',
//     payload,
//   };
// };

// export const deletePost = payload => {
//   return {
//     type: 'phoneBook/deletePost',
//     payload,
//   };
// };
