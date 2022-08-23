export const selectFilters = state => state.filters;

export const selectAppliedFilter = state => selectFilters(state).appliedFilter;