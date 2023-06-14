import { FindAllFilteredSMSLogs } from '../../types/smsLog.interface';
import { api } from './api';

const smslogApi = api.injectEndpoints({
  endpoints: (build) => ({
    findAllFilteredSmsLogs: build.query<FindAllFilteredSMSLogs[], any>({
      query: (params) => ({
        url: 'smslog/findAllFilteredSmsLogs',
        method: 'GET',
        params,
      }),
    }),
  }),
});

export const { useFindAllFilteredSmsLogsQuery } = smslogApi;
