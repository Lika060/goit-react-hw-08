export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectFilteredContacts = (state) => {
  const filter = state.filters;
  return state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
