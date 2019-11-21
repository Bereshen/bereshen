import { applyMiddleWare, createStore } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import { createSagaMiddleware } from 'redux-saga';
// import Async 
// import rootReducer
// import rootSaga


/*  -------------- Configurations ----------------*/
const middleware = [];
const enhancers = [];

/*  -------------- Create Saga Middleware ----------------*/
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

/*  -------------- Create Async Middleware ----------------*/
// middleware.push(Async)

/*  --------------- Assemble Middleware ------------------*/
enhancers.push(applyMiddleWare(...middleware));

/*  -------------- Create Store Dev ----------------------*/
const store = createStore('RootReducer', composeWithDevTools(applyMiddleWare(...middleware)));

/*  -------------- Kick Off Root Saga --------------------*/
sagaMiddleware.run('rootsaga');

export default store;
