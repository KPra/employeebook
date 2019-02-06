import { SIORating } from './siorating';
import { LeaveRating } from './leaverating';
import { EmailRating } from './emailrating';
export class Employee {
  constructor(public name: string,
    public desgn: string,
    public DOJ: string,
    public team: string,
    public image: string,
    public team_email_cumulative: number,
    public team_leave_cumulative: number,
    public team_sio_cumulative: number,
    public team_idle_cumulative: number,
    public team_site_cumulative: number,
    public high_risk: boolean,
    public favorite: boolean,
    public email_cumulative: number,
    public email_detailed: EmailRating[],
    public leave_cumulative: number,
    public leave_detailed: LeaveRating[],
    public sio_cumulative: number,
    public sio_detailed: SIORating[],
    public reports: Employee[]){
  }
}
