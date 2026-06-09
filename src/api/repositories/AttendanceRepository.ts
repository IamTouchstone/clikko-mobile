import { AttendanceApiContract } from '@/api/contracts/AttendanceApiContract';
import { AttendanceDTO } from '@/api/contracts/dtos';

export class AttendanceRepository implements AttendanceApiContract {
  constructor(private readonly api: AttendanceApiContract) {}

  list(): Promise<AttendanceDTO[]> {
    return this.api.list();
  }

  findById(id: string): Promise<AttendanceDTO | undefined> {
    return this.api.findById(id);
  }

  clockIn(staffId: string): Promise<AttendanceDTO> {
    return this.api.clockIn(staffId);
  }

  clockOut(attendanceId: string): Promise<AttendanceDTO> {
    return this.api.clockOut(attendanceId);
  }
}
