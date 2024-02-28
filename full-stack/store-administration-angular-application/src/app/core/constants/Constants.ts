export const Constants = {
  
  API_END_POINT : {
    USERS : 'users',
    USER_LOGIN : 'users/login',
    UPDATE_USER_SECTION: (userId : String, sectionId : String) => `users/${userId}/updateSection/${sectionId}` 
  }
}