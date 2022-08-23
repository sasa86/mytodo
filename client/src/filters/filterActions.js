import { STATUS_FILTER_CHANGE } from '../actions/types';

export function statusChangeAction(filterValue) {
    return {
        type: STATUS_FILTER_CHANGE,
        payload: filterValue
    }
}