import { AttendanceDTO } from './dtos';

export interface AttendanceApiContract {
  list(): Promise<AttendanceDTO[]>;
  findById(id: string): Promise<AttendanceDTO | undefined>;
  clockIn(staffId: string): Promise<AttendanceDTO>;
  clockOut(attendanceId: string): Promise<AttendanceDTO>;
}
