// getPersonData +savePostData is OK

// 1. "reportsToManager" why collection? in main MLD 6.1.8.4 defined that only one manager is possible,
// do we need effectiveDate, if yes in current implemetation hardcoded date is used?
// 2. exempt true/false -> see cacoo example
// 3. restructuredClassic va classicData

interface Position {
  id: string;
  name: string;
  order: number;
  exempt: boolean; // assumption that false will be set by default
  locations: Location[];
  statuses: PositionStatus[];
  seniorityDate: string;
  reportsTo: { 
    name: string;
    personNumber: number;
  };
  transferSets: TransferSet[]; // it's not implemented on BE yet (out of scope)
}

interface Location {
  id: string;
  name: string;
  effectiveDate: string;
  laborCategory: string; // external slider component will provide the data for this field
}

interface TransferSet {
  id: string;
  name: string;
  effectiveDate: string;
}

interface PositionStatus {
  id: string;
  name: 'Active' | 'Inactive' | 'Terminated';
  effectiveDate: string;
}



// -> [{start, exp}, {start}] -> BE -> []

type Timeframe =  string;
interface Message {};
interface Requests {
  [requestId: string]: any;
};

export type LocalizationKey = string;

// Single store approach, assumption for now, that is based completelly on redux
interface SingleState { // maybe not so fat state for redux?
  ui: {
    sliders: {
      rearrange: boolean; // -> {visible: true; positions: Position[]} no DATA in UI is BAD!!!
      locations: boolean;
      laborCategory: boolean;
    };
    modals: {
      positions: boolean;
      transfers: boolean;
      confirmation: boolean; // {body: any}
    };
    form: { // try to keep in redux -> pass date to slider problem
      //isVisible: boolean;
      //position: {};
      context: 'EDIT' | 'ADD';
      errors: {
        [fielId: string]: LocalizationKey; // combine with messsages flow!!!
      };
    };
    filter: 'ACTIVE' | 'INACTIVE' | 'TERMINATED';
    //isSliderVisible: boolean;
    messages: Message[]; // -> rendered messages
    requests: Requests; // how to deal with global "getPersonData"
  };
  data: {
    positions: Position[];
    activePosition: Position; // deep copy for form, maybe not necessary
    activePositions: Position[];  // deep copy for slider, maybe not necessary
  };
}

interface MPState {
  ui: {
    sliders: {
      rearrange: boolean;
      locations: boolean;
      laborCategory: boolean;
    };
    modals: {
      positions: boolean;
      transfers: boolean;
      confirmation: boolean; // {body: any}
    };
    form: {
      context: 'EDIT' | 'ADD';
      errors: {
        [fielId: string]: LocalizationKey;
      };
    };
    statusfilter: 'ACTIVE' | 'INACTIVE' | 'TERMINATED';
    timeframeFilter: 'Timeframe1' | 'Timeframe2';
    messages: Message[]; // -> rendered messages
    requests: {
      [requestId: string]: 'LOADING' | 'SUCCESS' | 'FAILURE'
    }
  };
  data: {
    timeframes: Timeframe[];
    positions: Position[];
    activePosition: Position; // deep copy for form, maybe not necessary
    activePositions: Position[];  // deep copy for slider, maybe not necessary
  };
  properties: any;
  authentication: any;
}


/**
 * WHY REDUX:
 *  - single source of truth in one
 *  - performance perspective, no props drilling
 *  - immutability, pure functions
 *  - clear, 1 way data flow
 *  - predictable state updates
 *  - stable, robust architecture
 *  - side effects are managed by middleware concept
 *  - strict separation of conserns
 *  - avoiding cascading model updates
 *  - avoid fat interfaces, renundant watchers, broke interface segregation pronciple
 * 
 * WHY NOT REDUX:
 *   - extra boilerplate code, FIXED BY "Redux Actions" library
 */








/**
 * 
 * Action types: (+someNamespacePrefix)
 * form:
 *   - SET_FORM_VALUE
 *   - FORM_VALIDATION_FAIL -> push message to the state.messages[]
 *   - FORM_VALIDATION_SUCCESS
 * 
 * sliders:
 *   - OPEN_SLIDER -> {sliderId}
 *   - CLOSE_SLIDER -> {sliderId}
 * 
 * 
 * 
 * 
 * 
 * 
 * 
1. where side effects?
2. how combine getPerson data calls? how retrieve fails, successes if it's go through the global People Editor flow 
3. Messages flow???
4. Fetches flow???
 
 */