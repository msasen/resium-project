import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";

import store from "@/store/index";

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

// const counterSelector = (state: RootState) => state.counter.value;

const useDispatch = () => useReduxDispatch<AppDispatch>();

const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export { useDispatch, useSelector };
