import { combineReducers, createStore, compose, applyMiddleware} from 'redux'
import { Reducer, State } from './reducer'

export type AppState = {
  state: State
}

const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers<AppState>({
      state: Reducer
    }),
)

export default store