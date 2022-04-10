import { createSelector } from '@ngrx/store';

import { AppStateInterface } from 'src/app/auth/types/appState.interface';
import { FeedStateInterface } from 'src/app/shared/modules/feed/types/feedState.interface';

export const feedFeatureSelector = (
  state: AppStateInterface
): FeedStateInterface => state.feed;

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.isLoading
);

export const isErrorSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.error
);

export const feedSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.data
);
