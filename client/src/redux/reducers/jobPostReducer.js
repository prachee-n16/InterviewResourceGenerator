const initialState = {
  url_title: '',
  url_jobField: '',
  url_company: '',
  url_description: '',
};

const jobPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_JOB_POST_DETAILS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default jobPostReducer;
