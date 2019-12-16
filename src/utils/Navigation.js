import {
  NavigationActions,
  StackActions
} from "react-navigation";

import {
  DrawerActions
} from "react-navigation-drawer";

let _navigator;

const reset = (routeName) => {
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({
        routeName: routeName
      })]
    })
  );
};

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(
  routeName,
  params,
  action,
  key
) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      action,
      key
    })
  );
}

function push(
  routeName,
  params,
  action,
  key
) {
  _navigator.dispatch(
    StackActions.push({
      routeName,
      params,
      action,
      key
    })
  );
}

function openDrawer() {
  _navigator.dispatch(DrawerActions.openDrawer());
}

function goBack(key) {
  _navigator.dispatch(NavigationActions.back({
    key
  }));
}

function pop(n = 1) {
  _navigator.dispatch(StackActions.pop({
    n
  }));
}

// add other navigation functions that you need and export them

export const Navigation = {
  navigate,
  setTopLevelNavigator,
  push,
  openDrawer,
  goBack,
  reset,
  pop
};