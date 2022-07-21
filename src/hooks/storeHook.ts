import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import store from "../store/index";

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

// const counterSelector = (state: RootState) => state.counter.value;

const useCounterDispatch = () => useDispatch<AppDispatch>();

const useCounterSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useCounterDispatch, useCounterSelector };
