import { FindAllFilteredSMSLogs } from '../../types/smsLog.interface';

export interface IMessagesList {
  data: FindAllFilteredSMSLogs[];
  loading: boolean;
}
