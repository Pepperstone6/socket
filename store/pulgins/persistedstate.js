export const presistedConfig = {
  storage: window.localStorage,
  reducer: (state) => ({
    userInfo: state.userInfo
  })
}