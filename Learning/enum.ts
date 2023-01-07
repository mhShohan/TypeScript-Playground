//Enum types

enum ResType {
    SUCCESS,
    FAILURE,
    UNAUTHENTICATE,
    FORBIDDEN,
}

interface ApiResponse<T> {
    status: number;
    type: ResType;
    data: T;
}

const response1: ApiResponse<string> = {
    status: 200,
    type: ResType.UNAUTHENTICATE,
    data: 'Test case',
};

console.log(response1);
