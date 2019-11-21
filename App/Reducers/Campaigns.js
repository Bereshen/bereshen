import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getCampaignCards: ['data'], // check the response on the console, response will be inside ['data']
  campaignCardsSuccess: ['data'],
  campaignCardsFailure: null,
});

export const campaignCardsTypes = Types; // to be used in rootSaga index file
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  campaignCards: null,
  fetching: null,
  error: null,
});


/* ------------- Reducers ------------- */

const getCampaignCards = state => {
  // console.log('what')
  return {
    ...state,
    info: null,
    fetching: true,
    error: false,
  };
};

const campaignCardsSuccess = (state, action) => {
  return {
    ...state,
    campaignCards: action.data,
    fetching: false,
    error: false,
  };
};

const campaignCardsFailure = state => ({
  ...state,
  fetching: false,
  error: true,
  info: null,
});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_CAMPAIGN_CARDS]: getCampaignCards,
  [Types.CAMPAIGN_CARDS_SUCCESS]: campaignCardsSuccess,
  [Types.CAMPAIGN_CARDS_FAILURE]: campaignCardsFailure,
});
