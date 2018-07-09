import User from "./../models/user";
import ApiService from "./api_service";

enum SignInOptions {
  Email = "password"
}

class AuthService {
  static auth : CloudAuth = ApiService.auth;

  static onUserSignedIn(callback: (user: User) => void) : AuthUnsubscribe {
    const unregisterObserver : AuthUnsubscribe = ApiService.auth.onAuthStateChanged(
      (user : firebase.User ) => {
        const userModel : User = new User(
          user.uid,
          user.displayName,
          user.email
        );

        callback(userModel);
      }
    );

    return unregisterObserver;
  }

  static currentUser() : User {
    return ApiService.currentUser;
  }
}

export default AuthService;

export {
  SignInOptions
}