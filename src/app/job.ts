
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
    private status_timestamp = Date.now();
    public callback: (job: Job) => void;
    constructor(
        private id: string,
        private title: string,
        private status: JobStatus,
        private api_call: string,
        private params: any) {
    }

    execute_callback() {

        if (this.callback) {
            console.log('job is executing callback');            
            this.callback(this);
        } else {
            console.log(' no callback function');
        }
        
    }

    set_status(status) {
        this.status = status;
        this.status_timestamp = Date.now();
        console.log('set status to ' + this.status + ' at ' + this.status_timestamp);
    }

    get_id() {
        return this.id;
    }

    get_title() {
        return this.title;
    }
    get_status_description() {
        return this.JobStatusDescription[this.status];
    }
    get_status() {
        return this.status;
    }
}

