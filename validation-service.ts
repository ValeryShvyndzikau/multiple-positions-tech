
//============ VALIDATE & SAVE ===================================/
class ValidationService {
  validate(data, config) {
    return new Promise((resolve, reject) => {
      if (this.isValid()) {
        resolve('OK')
      } else {
        reject('ERROR')
      }
    })
  }

  // isValid() {
  //   return true;
  // }
}

// class notation flow
class PositionForm {
  constructor(private validationService, private positionService) {}

  onSubmit(position) {
    this.validatePosition(position)
  }

  validatePosition(position) {
    try {
      await this.validationService.validate(position);
      this.savePosition(position)
    } catch (error) {
      this.redux(dispatch(validationError()))
    }
  }

  savePosition() {
    try {
      this.redux(dispatch(requestStart())
      await this.positionService.save(position);
      this.redux(dispatch(requestSucces())
    } catch (error) {
      this.redux(dispatch(requestError()))
    }
  }
}


// withExtraArgument in the TOP, it does't work for us !!!
function validatePosition(position) {
  return (state, dispatch, validationService) => {
    try {
      await this.validationService.validate(position);
      this.savePosition(position)
    } catch (error) {
      this.redux(dispatch(validationError()))
    }
  }
}


// duck notation
function mapDispatchCreator(validationService, positionService, /* positionService */) {
  return async (state, dispatch) => {

    try {
      await validationService.validate(position);

      try {
        dispatch(requestStart());
        positionService.save(position);
        dispatch(requestSuccess());
        dispatch(closeModal('position'));
      } catch(error) {
        dispatch(requestError(error));
      }
      
    } catch (error) {
      dispatch(validationError(error));
    }    
  }
}

// thunk notatation
function validateAndSave(position, ) {
  return async (state, dispatch) => {

    try {
      await validationService.validate(position);

      try {
        dispatch(requestStart());
        positionService.save(position);
        dispatch(requestSuccess());
        dispatch(closeModal('position'));
      } catch (error) {
        dispatch(requestError(error));
      }
      
    } catch (error) {
      dispatch(validationError(error));
    }    
  }
}


// mixed notatation
// duck: dispatch(validateAndSave(position, services))
function validateAndSave(position, services) {
  return async (state, dispatch) => {

    try {
      await validationService.validate(position);

      try {
        dispatch(requestStart());
        positionService.save(position);
        dispatch(requestSuccess());
        dispatch(closeModal('position'));
      } catch(error) {
        dispatch(requestError(error));
      }
      
    } catch (error) {
      dispatch(validationError(error));
    }    
  }
}


// PositionService (VALIDATE/SAVE responsibilities)

class PositionService {
  constructor(private validationHelper, private socket) {}

  save(position) {

    this.validatePosition();


    try { // dispatch(close)???
      await this.validationHelper.validate(position);
      this.savePosition(position)
    } catch (error) {
      this.redux(dispatch(validationError()))
    }
  }

  save2() {
    if(validation.helper.)
  }
}

//============ REARRANGE ===================================/

function mapDispatchCreator(positions) {

  onRearrange() {
    try {
      dispatch(requestStart())
      const reordered = await positionsService.reorder(positions)
      dispatch(requestSuccess(reordered))
    } catch(error) {
      dispatch(requestError(error))
    }
  }
 
  }
}


try {
  await validationService.validate(position);

  try {
    dispatch(requestStart());
    const position = await positionService.save(position);
    dispatch(requestSuccess(position));
    dispatch(closeModal(id));
  } catch (error) {
    dispatch(requestError(error));
  }
} catch (error) {
  dispatch(validationError(error));
} 