import React, { useEffect, useReducer } from 'react';
import useFetch from '../../components/FetchData';
import LightBox from './LightBox';
import Pagination from './Pagination';
import './index.css';
import { ActionTypes } from './action-types';

const initialState = {
  currentPage: 1,
  photoList: [],
  isLightBoxOpen: false,
  displayPhotoData: {},
};

function reducer(state, action) {
  switch (action.type) {
    case ActionTypes.SetCurrentPage:
      return { ...state, currentPage: action.page };
    case ActionTypes.SetPhotoList:
      return { ...state, photoList: action.payload };
    case ActionTypes.SetIsLightBoxOpen:
      return { ...state, isLightBoxOpen: action.payload };
    case ActionTypes.SetDisplayPhotoData:
      return {
        ...state,
        displayPhotoData: state.photoList
          ? state.photoList[action.payload]
          : {},
      };
    default:
      break;
  }
}

function UnsplashLightBox() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clientId =
    'e3e04f2611922e398c2d502a066278f6916f0b6c519bc7173fee959919a7b739';
  const apiUrl = `https://api.unsplash.com/photos?client_id=${clientId}&page=${state.currentPage}&per_page=9`;
  const apiResponse = useFetch({ apiUrl });

  useEffect(() => {
    dispatch({ type: ActionTypes.SetPhotoList, payload: apiResponse });
  }, [apiResponse]);

  const onPhotoClick = (index) => {
    dispatch({ type: ActionTypes.SetDisplayPhotoData, payload: index });
    dispatch({
      type: ActionTypes.SetIsLightBoxOpen,
      payload: true,
    });
  };

  const pagecChange = (page) => {
    dispatch({ type: ActionTypes.SetCurrentPage, page });
  };

  const nextPhoto = () => {
    if (!state.displayPhotoData || !state.photoList) {
      return;
    }
    const current = state.photoList.indexOf(state.displayPhotoData);
    if (current === state.photoList.length - 1) {
      dispatch({ type: ActionTypes.SetDisplayPhotoData, payload: 0 });
      return;
    }
    dispatch({ type: ActionTypes.SetDisplayPhotoData, payload: current + 1 });
  };

  const prevPhoto = () => {
    if (!state.displayPhotoData || !state.photoList) {
      return;
    }
    const current = state.photoList.indexOf(state.displayPhotoData);
    if (current === 0) {
      dispatch({
        type: ActionTypes.SetDisplayPhotoData,
        payload: state.photoList.length - 1,
      });
      return;
    }
    dispatch({
      type: ActionTypes.SetDisplayPhotoData,
      payload: current - 1,
    });
  };

  return (
    <>
      <div className="container">
        <div className="title">
          Unsplash
          <br /> latest photos
        </div>
        <div>
          <div className="pictures-container">
            {state.photoList &&
              state.photoList.map((data, index) => (
                <div className="picture-box" key={data.id} onClick={() => onPhotoClick(index)}>
                  <img src={data?.urls?.thumb} alt={data.alt_description} />
                </div>
              ))}
          </div>
          <Pagination
            currentPage={state.currentPage}
            pagecChange={pagecChange}
          ></Pagination>
        </div>
      </div>
      {state.isLightBoxOpen && (
        <LightBox
          isLightBoxOpen={state.isLightBoxOpen}
          setIsLightBoxOpen={() =>
            dispatch({
              type: ActionTypes.SetIsLightBoxOpen,
              payload: !state.isLightBoxOpen,
            })
          }
          photoList={state.photoList || []}
          displayPhotoData={state.displayPhotoData || {}}
          nextPhoto={nextPhoto}
          prevPhoto={prevPhoto}
        />
      )}
    </>
  );
}

export default UnsplashLightBox;
