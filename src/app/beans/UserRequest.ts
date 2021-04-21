interface UserRequest {
    username: String;
    password: String;
}

export interface UserSignInRequest extends UserRequest {
    
}

export interface UserSignUpRequest extends UserRequest {
    email: String;
}

export interface UserResetPasswordRequest extends UserRequest {
    email: String;
    code: String ;
}

export interface UserGetVerficationRequest {
    email: string;
}