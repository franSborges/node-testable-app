export interface AppointmentProps {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

export class Appointment {
  private props: AppointmentProps;

  get customer() {
    return this.props.customer;
  }

  get startsAt() {
    return new Date(this.props.startsAt);
  }

  get endsAt() {
    return  new Date(this.props.endsAt) ;
  }

  constructor (props: AppointmentProps) {
    this.props = props;
  }
}