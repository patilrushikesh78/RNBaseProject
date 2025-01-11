import { hideLoader, showLoader } from '../redux/loaderSlice';
import { showToast } from './utils';

export const apiHandler = async (dispatch, apiCall, successMessage = null) => {
    dispatch(showLoader());
    try {
        const response = await apiCall();
        if (successMessage) {
            showToast('success', 'Success', successMessage);
        }
        return { data: response.data, status: response.status, error: null };
    } catch (error) {
        console.error('API Error:', error);
        showToast('error', 'Error', error.response?.data?.message || 'Something went wrong.');
        return { data: null, status: error.response?.status, error: error.response?.data };
    } finally {
        dispatch(hideLoader());
    }
};
