export declare class AudioMediaRecorder {
    private static instance;
    static getInstance(): AudioMediaRecorder;
    private md?;
    private recordChunks;
    constructor();
    initialize(): Promise<AudioMediaRecorder>;
    startRecord(): Promise<void>;
    stopRecord(): Promise<Blob>;
}
