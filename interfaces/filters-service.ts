import {get} from 'lodash';

type SocketFactory = any;
type FiltreProperties = any;
type Status = 'active' | 'inactive' | 'terminated';
type Routes = {statuses: string; timeSegments: string;};

type Response<T> = {};
type StatusOptions = any;
type TimeSegmentsOptions = any;

class FiltersService {
  routes: Routes = {
    statuses: 'pe.multiplePositions.get',
    timeSegments:  'pe.positionTimeSegmentOptions.get'
  };

  constructor(private socket: SocketFactory, private filterProperties: FiltreProperties) {}

  public getStatusesOptions(): Response<Promise<StatusOptions>> {
    //return this.socket.query(this.routes.statuses);
    return this.socket.query(this.routes.statuses).then(this.parseResponse)

  }

  public getTimeSegmentsOptions(status: Status[]): Response<Promise<TimeSegmentsOptions>> {
    return this.socket.query(this.routes.timeSegments, {status});
  }

  private parseResponse<T>(response: Response<T>): StatusOptions | TimeSegmentsOptions {
    return get(response, 'body');
  }
}