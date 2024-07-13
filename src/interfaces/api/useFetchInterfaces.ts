//Define the interface for fetch options 

export interface UseFetchOptions  extends RequestInit  {
    header?: {
        'Context-Type'? : string;
        Username?: string;
    };
}

//Define the interface for the useFetch hook result 

export interface UseFetchResult {
    data: [] | null;
    loading: boolean;
    error: string | null;
}


