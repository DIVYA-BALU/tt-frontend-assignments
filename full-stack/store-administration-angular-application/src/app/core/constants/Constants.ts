export const Constants = {

  API_END_POINT: {
    USERS: 'users',
    USER_LOGIN: 'users/login',
    ADD_BRANCH_SECTION: (branchId: String) => `branches/${branchId}/addSection`,
    UPDATE_USER_SECTION: (userId: String, sectionId: String) => `users/${userId}/updateSection/${sectionId}`,
    BRANCHES: 'branches',
    SECTIONS: 'sections',
    PRODUCTS: 'products'
  }
}