/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

type JobStatus = 'ErrorDuringRun'|'Submitted'|'Running'|'CompletedEmptyRecords'|'Completed'|'Failed'|'RunningToBeDeleted'|'DeletedByUserRequest';

/**
 * Initialize the JobList
 *
 * @param version - Version of the resource
 */
declare function JobList(version: V1): JobListInstance;

interface JobListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): JobContext;
  /**
   * Constructs a job
   *
   * @param jobSid - The unique string that that we created to identify the Bulk Export job
   */
  get(jobSid: string): JobContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface JobPayload extends JobResource, Page.TwilioResponsePayload {
}

interface JobResource {
  details: object;
  email: string;
  end_day: string;
  estimated_completion_time: string;
  friendly_name: string;
  job_queue_position: string;
  job_sid: string;
  resource_type: string;
  start_day: string;
  url: string;
  webhook_method: string;
  webhook_url: string;
}

interface JobSolution {
}


declare class JobContext {
  /**
   * Initialize the JobContext
   *
   * @param version - Version of the resource
   * @param jobSid - The unique string that that we created to identify the Bulk Export job
   */
  constructor(version: V1, jobSid: string);

  /**
   * fetch a JobInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: JobInstance) => any): Promise<JobInstance>;
  /**
   * remove a JobInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: JobInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class JobInstance extends SerializableClass {
  /**
   * Initialize the JobContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param jobSid - The unique string that that we created to identify the Bulk Export job
   */
  constructor(version: V1, payload: JobPayload, jobSid: string);

  private _proxy: JobContext;
  details: any;
  email: string;
  endDay: string;
  estimatedCompletionTime: string;
  /**
   * fetch a JobInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: JobInstance) => any): Promise<JobInstance>;
  friendlyName: string;
  jobQueuePosition: string;
  jobSid: string;
  /**
   * remove a JobInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: JobInstance) => any): Promise<boolean>;
  resourceType: string;
  startDay: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
  webhookMethod: string;
  webhookUrl: string;
}


declare class JobPage extends Page<V1, JobPayload, JobResource, JobInstance> {
  /**
   * Initialize the JobPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: JobSolution);

  /**
   * Build an instance of JobInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: JobPayload): JobInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { JobContext, JobInstance, JobList, JobListInstance, JobPage, JobPayload, JobResource, JobSolution, JobStatus }
