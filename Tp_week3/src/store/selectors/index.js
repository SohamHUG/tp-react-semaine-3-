//utilisateur
export const selectUser = (state) => state.user;
export const selectUserFirstName = (state) => state.user.firstname;
export const selectUserLastName = (state) => state.user.lastname;

//panier
export const selectCartItems = (state) => state.cart.items;
export const selectCartItemCount = (state) => state.cart.items.length;

//produits
export const selectProducts = (state) => state.products.items;
export const selectProductsStatus = (state) => state.products.status;
export const selectProductsError = (state) => state.products.error;

//sombre
export const selectDarkMode = (state) => state.theme.darkMode;