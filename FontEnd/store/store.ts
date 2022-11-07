import { configureStore } from '@reduxjs/toolkit';
import projectReducers from './project/project-slice';

const rootReducer = {
    projects: projectReducers,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
