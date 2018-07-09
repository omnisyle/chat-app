import User from "./../models/user";
import ApiService from "./api_service";

enum SignInOptions {
  Email = "password"
}

class AuthService {
  static auth : CloudAuth = ApiService.auth;
  static currentUser : User = ApiService.currentUser;

  static onUserSignedIn(callback: (user: User) => void) : AuthUnsubscribe {
    const unregisterObserver : AuthUnsubscribe = ApiService.auth.onAuthStateChanged(
      (user : firebase.User ) => {
        const userModel : User = new User({
          id: user.uid,
          displayName: user.displayName,
          email: user.email
        });
        this.currentUser = userModel;
        callback(userModel);
      }
    );

    return unregisterObserver;
  }
}

export default AuthService;

export {
  SignInOptions
}