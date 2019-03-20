const loginMode = (state = 'splash', action) => {
  
    switch (action.type) {
      case 'SET_TO_LOGIN_MODE': return 'login';

      case 'SET_TO_REGISTER_MODE':return 'register';

      case 'SET_TO_SPLASH_MODE':return 'splash';

      default:return state;
    }
  };

// loginMode will be on the redux state at:
// state.loginMode
  export default loginMode;
  