
// https://habr.com/ru/post/190342/
// Import stylesheets
import './style.css';

import {createActions, handleActions, combineActions} from 'redux-actions';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;


// Client-server flow


class ActionsBarCtrl {
  disconnect: () => void;
  loadTimeframes: () => void;

  constructor(private $ngRedux, private $http) {
    //this.disconnect = this.$ngRedux.connect(mapStateCreator(), mapDispatchCreator())
  }

  $onInit() {
    this.loadTimeframes()
  }

}




function loadTimeframes() {
  return () => {

  }
}


function messagesReducer(state = [], action) {

   if (action.type === 'REQUEST_FAILURE') {

   }

}

/*
requests: {
  [requestId]: {
    inProgress: Boolean,
    error: Error | null
  }
  status: 'LOADING' | 'SUCCESS' | 'FAILURE'
}

createActions({
  requestStart: ()
})



===========================================================================
type Status = 'LOADING' | 'SUCCESS' | 'FAILURE'

requestStatuses: {
  [requestId: string]: 'LOADING' | 'SUCCESS' | 'FAILURE';
}

const {requestStart, requestSuccess, requestError} = createActions(
  {
    REQUEST_START: (requestId) => ({id: requestId, status: "LOADING"}),
    REQUEST_SUCCESS: (requestId) => ({id: requestId, status: "SUCCESS"}),
    REQUEST_ERROR: (requestId) => ({id: requestId, status: "FAILURE"}),
  }
)

// e.g. PositionsListReducer
const handleActions({
  REQUEST_SUCCESS: (payload) => {
    if (payload.requestId === 'positions_list') {
      return {
        positions: payload.response.positions
      }
    }
    return state;
  }
})
===========================================================================
*/




// const {requestSuccess, requestError} = createActions(
//   {
//     REQUEST_START: (requestId) => ({id: requestId, status: "LOADING"}),
//     REQUEST_SUCCESS: (requestId) => ({id: requestId, status: "SUCCESS"}),
//     REQUEST_ERROR: (requestId) => ({id: requestId, status: "FAILURE"}),
//   }
// )


type RequestStatus = 'LOADING' | 'SUCCESS' | 'FAILURE';

enum RequestId {
    GetPositions = "GET_POSITIONS",
    UpdatePosition = "UPDATE_POSITION",
}

interface State {
  requestStatuses: {
    [requestId: string]: RequestStatus;
  }
}

const {requestStart, requestSuccess, requestError} = createActions({
  REQUEST_START: [
    () => ({ status: "LOADING" }),
    (requestId) => ({ requestId })
  ],
  REQUEST_SUCCESS: [
    (response) => ({ status: "SUCCESS", response }),
    (_, requestId) => ({ requestId })
  ],
  REQUEST_ERROR: [
    () => ({ status: "FAILURE" }),
    (_, requestId) => ({ requestId })
  ]
})

// example: requestStatusesReducer
const requestStatusesReducer = handleActions({
  [combineActions(requestStart, requestSuccess, requestError,)]: (state, action) => {
    return {
      ...state,
      [action.meta.requestId]: action.payload.status
    }`/1`28wq                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  }
}, {})

// handling data specific successes: PositionsListReducer
const positionsListReducer = handleActions({
  REQUEST_SUCCESS: (state, action) => {
    if (action.meta.requestId === RequestId.GetPositions) {
      return { positions: action.payload.response }
    }
    return state;
  }
}, {})



function getData() {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('OK')
  //   }, 5000)
  // })

  return Promise.resolve('OK').then((res) => res + 'boom')
}


async function runFlow() {
  const result = await getData();
  console.log(result, 'result')
}


runFlow()

