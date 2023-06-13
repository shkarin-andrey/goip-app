import { GateList } from '../../types/gate.interface';
import { api } from './api';

const gateApi = api.injectEndpoints({
  endpoints: (build) => ({
    getGate: build.query<GateList[], void>({
      query: () => 'gate/list',
    }),
  }),
});

export const { useGetGateQuery } = gateApi;
