
export enum JobStatus {
    in_progress,
    done,
    error,
    cancelled
}

export class Job {
    JobStatus1: JobStatus;
    JobStatusDescription = {
        0: 'In progress',
        1: 'Done'
    };

    constructor(
        private id: string,
        private title: string,
        private status: JobStatus;
        private api_call: string,
        private params: any) {
    }



    get_id() {
        return this.id;
    }

    get_title() {
        return this.title;
    }

    get_status() {
        return this.JobStatusDescription[this.status];
    }
}

