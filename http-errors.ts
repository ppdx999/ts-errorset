export class BadRequestError extends Error {} // RFC 9110, 15.5.1
export class UnauthorizedError extends Error {} // RFC 9110, 15.5.2
export class PaymentRequiredError extends Error {} // RFC 9110, 15.5.3
export class ForbiddenError extends Error {} // RFC 9110, 15.5.4
export class NotFoundError extends Error {} // RFC 9110, 15.5.5
export class MethodNotAllowedError extends Error {} // RFC 9110, 15.5.6
export class NotAcceptableError extends Error {} // RFC 9110, 15.5.7
export class ProxyAuthRequiredError extends Error {} // RFC 9110, 15.5.8
export class RequestTimeoutError extends Error {} // RFC 9110, 15.5.9
export class ConflictError extends Error {} // RFC 9110, 15.5.10
export class GoneError extends Error {} // RFC 9110, 15.5.11
export class LengthRequiredError extends Error {} // RFC 9110, 15.5.12
export class PreconditionFailedError extends Error {} // RFC 9110, 15.5.13
export class RequestEntityTooLargeError extends Error {} // RFC 9110, 15.5.14
export class RequestURITooLongError extends Error {} // RFC 9110, 15.5.15
export class UnsupportedMediaTypeError extends Error {} // RFC 9110, 15.5.16
export class RequestedRangeNotSatisfiableError extends Error {} // RFC 9110, 15.5.17
export class ExpectationFailedError extends Error {} // RFC 9110, 15.5.18
export class TeapotError extends Error {} // RFC 9110, 15.5.19 (Unused)
export class MisdirectedRequestError extends Error {} // RFC 9110, 15.5.20
export class UnprocessableEntityError extends Error {} // RFC 9110, 15.5.21
export class LockedError extends Error {} // RFC 4918, 11.3
export class FailedDependencyError extends Error {} // RFC 4918, 11.4
export class TooEarlyError extends Error {} // RFC 8470, 5.2.
export class UpgradeRequiredError extends Error {} // RFC 9110, 15.5.22
export class PreconditionRequiredError extends Error {} // RFC 6585, 3
export class TooManyRequestsError extends Error {} // RFC 6585, 4
export class RequestHeaderFieldsTooLargeError extends Error {} // RFC 6585, 5
export class UnavailableForLegalReasonsError extends Error {} // RFC 7725, 3

export class InternalServerErrorError extends Error {} // RFC 9110, 15.6.1
export class NotImplementedError extends Error {} // RFC 9110, 15.6.2
export class BadGatewayError extends Error {} // RFC 9110, 15.6.3
export class ServiceUnavailableError extends Error {} // RFC 9110, 15.6.4
export class GatewayTimeoutError extends Error {} // RFC 9110, 15.6.5
export class HTTPVersionNotSupportedError extends Error {} // RFC 9110, 15.6.6
export class VariantAlsoNegotiatesError extends Error {} // RFC 2295, 8.1
export class InsufficientStorageError extends Error {} // RFC 4918, 11.5
export class LoopDetectedError extends Error {} // RFC 5842, 7.2
export class NotExtendedError extends Error {} // RFC 2774, 7
export class NetworkAuthenticationRequiredError extends Error {} // RFC 6585, 6
