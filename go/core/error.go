package core

type ApiErrorHandlerError struct {
	IsApiErrorHandlerError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewApiErrorHandlerError(code string, msg string, ctx *Context) *ApiErrorHandlerError {
	return &ApiErrorHandlerError{
		IsApiErrorHandlerError: true,
		Sdk:              "ApiErrorHandler",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ApiErrorHandlerError) Error() string {
	return e.Msg
}
