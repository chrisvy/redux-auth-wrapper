import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'

export const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user,//相当于mapToStateProps,该参数传递给组件
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'

})

export const UserIsAdmin = UserAuthWrapper({
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
  failureRedirectPath: '/',//跳转
  wrapperDisplayName: 'UserIsAdmin',
  predicate: user => user.isAdmin,
  allowRedirectBack: false
})

export const VisibleOnlyAdmin = UserAuthWrapper({
  authSelector: state => state.user,
  wrapperDisplayName: 'VisibleOnlyAdmin',
  predicate: user => user.isAdmin,//false跳转(应该是渲染吧)到FailureComponent,true跳转到DecoratedComponent
  FailureComponent: null//不跳转
})
