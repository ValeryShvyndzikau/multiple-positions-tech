
type SocketFactory = any;

class FiltersService {
  constructor(private socket: SocketFactory) {}

  public getStatusesOptions() {
    return this.socket.query('');
  }

  public getTimeSegmentsOptions() {
    return this.socket.query('');
  }
}