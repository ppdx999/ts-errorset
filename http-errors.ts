export class BadRequestHttpError extends Error {} // RFC 9110, 15.5.1
export class UnauthorizedHttpError extends Error {} // RFC 9110, 15.5.2
export class PaymentRequiredHttpError extends Error {} // RFC 9110, 15.5.3
export class ForbiddenHttpError extends Error {} // RFC 9110, 15.5.4
export class NotFoundHttpError extends Error {} // RFC 9110, 15.5.5
export class MethodNotAllowedHttpError extends Error {} // RFC 9110, 15.5.6
export class NotAcceptableHttpError extends Error {} // RFC 9110, 15.5.7
export class ProxyAuthRequiredHttpError extends Error {} // RFC 9110, 15.5.8
export class RequestTimeoutHttpError extends Error {} // RFC 9110, 15.5.9
export class ConflictHttpError extends Error {} // RFC 9110, 15.5.10
export class GoneHttpError extends Error {} // RFC 9110, 15.5.11
export class LengthRequiredHttpError extends Error {} // RFC 9110, 15.5.12
export class PreconditionFailedHttpError extends Error {} // RFC 9110, 15.5.13
export class RequestEntityTooLargeHttpError extends Error {} // RFC 9110, 15.5.14
export class RequestURITooLongHttpError extends Error {} // RFC 9110, 15.5.15
export class UnsupportedMediaTypeHttpError extends Error {} // RFC 9110, 15.5.16
export class RequestedRangeNotSatisfiableHttpError extends Error {} // RFC 9110, 15.5.17
export class ExpectationFailedHttpError extends Error {} // RFC 9110, 15.5.18
export class TeapotHttpError extends Error {} // RFC 9110, 15.5.19 (Unused)
export class MisdirectedRequestHttpError extends Error {} // RFC 9110, 15.5.20
export class UnprocessableEntityHttpError extends Error {} // RFC 9110, 15.5.21
export class LockedHttpError extends Error {} // RFC 4918, 11.3
export class FailedDependencyHttpError extends Error {} // RFC 4918, 11.4
export class TooEarlyHttpError extends Error {} // RFC 8470, 5.2.
export class UpgradeRequiredHttpError extends Error {} // RFC 9110, 15.5.22
export class PreconditionRequiredHttpError extends Error {} // RFC 6585, 3
export class TooManyRequestsHttpError extends Error {} // RFC 6585, 4
export class RequestHeaderFieldsTooLargeHttpError extends Error {} // RFC 6585, 5
export class UnavailableForLegalReasonsHttpError extends Error {} // RFC 7725, 3

export class InternalServerHttpErrorError extends Error {} // RFC 9110, 15.6.1
export class NotImplementedHttpError extends Error {} // RFC 9110, 15.6.2
export class BadGatewayHttpError extends Error {} // RFC 9110, 15.6.3
export class ServiceUnavailableHttpError extends Error {} // RFC 9110, 15.6.4
export class GatewayTimeoutHttpError extends Error {} // RFC 9110, 15.6.5
export class HTTPVersionNotSupportedHttpError extends Error {} // RFC 9110, 15.6.6
export class VariantAlsoNegotiatesHttpError extends Error {} // RFC 2295, 8.1
export class InsufficientStorageHttpError extends Error {} // RFC 4918, 11.5
export class LoopDetectedHttpError extends Error {} // RFC 5842, 7.2
export class NotExtendedHttpError extends Error {} // RFC 2774, 7
export class NetworkAuthenticationRequiredHttpError extends Error {} // RFC 6585, 6

export type HttpError =
  | BadRequestHttpError
  | UnauthorizedHttpError
  | PaymentRequiredHttpError
  | ForbiddenHttpError
  | NotFoundHttpError
  | MethodNotAllowedHttpError
  | NotAcceptableHttpError
  | ProxyAuthRequiredHttpError
  | RequestTimeoutHttpError
  | ConflictHttpError
  | GoneHttpError
  | LengthRequiredHttpError
  | PreconditionFailedHttpError
  | RequestEntityTooLargeHttpError
  | RequestURITooLongHttpError
  | UnsupportedMediaTypeHttpError
  | RequestedRangeNotSatisfiableHttpError
  | ExpectationFailedHttpError
  | TeapotHttpError
  | MisdirectedRequestHttpError
  | UnprocessableEntityHttpError
  | LockedHttpError
  | FailedDependencyHttpError
  | TooEarlyHttpError
  | UpgradeRequiredHttpError
  | PreconditionRequiredHttpError
  | TooManyRequestsHttpError
  | RequestHeaderFieldsTooLargeHttpError
  | UnavailableForLegalReasonsHttpError
  | InternalServerHttpErrorError
  | NotImplementedHttpError
  | BadGatewayHttpError
  | ServiceUnavailableHttpError
  | GatewayTimeoutHttpError
  | HTTPVersionNotSupportedHttpError
  | VariantAlsoNegotiatesHttpError
  | InsufficientStorageHttpError
  | LoopDetectedHttpError
  | NotExtendedHttpError
  | NetworkAuthenticationRequiredHttpError;

// deno-lint-ignore no-explicit-any
export const isHttpHttpError = (error: any): error is HttpError => {
  return (
    error instanceof Error &&
    typeof (error as HttpError).constructor === "function" &&
    (error as HttpError).constructor.name.endsWith("HttpError")
  );
};

export const statusCodes = (error: HttpError): number => {
  switch (error.constructor) {
    case BadRequestHttpError:
      return 400;
    case UnauthorizedHttpError:
      return 401;
    case PaymentRequiredHttpError:
      return 402;
    case ForbiddenHttpError:
      return 403;
    case NotFoundHttpError:
      return 404;
    case MethodNotAllowedHttpError:
      return 405;
    case NotAcceptableHttpError:
      return 406;
    case ProxyAuthRequiredHttpError:
      return 407;
    case RequestTimeoutHttpError:
      return 408;
    case ConflictHttpError:
      return 409;
    case GoneHttpError:
      return 410;
    case LengthRequiredHttpError:
      return 411;
    case PreconditionFailedHttpError:
      return 412;
    case RequestEntityTooLargeHttpError:
      return 413;
    case RequestURITooLongHttpError:
      return 414;
    case UnsupportedMediaTypeHttpError:
      return 415;
    case RequestedRangeNotSatisfiableHttpError:
      return 416;
    case ExpectationFailedHttpError:
      return 417;
    case MisdirectedRequestHttpError:
      return 421;
    case UnprocessableEntityHttpError:
      return 422;
    case LockedHttpError:
      return 423;
    case FailedDependencyHttpError:
      return 424;
    case TooEarlyHttpError:
      return 425;
    case UpgradeRequiredHttpError:
      return 426;
    case PreconditionRequiredHttpError:
      return 428;
    case TooManyRequestsHttpError:
      return 429;
    case RequestHeaderFieldsTooLargeHttpError:
      return 431;
    case UnavailableForLegalReasonsHttpError:
      return 451;
    case InternalServerHttpErrorError:
      return 500;
    case NotImplementedHttpError:
      return 501;
    case BadGatewayHttpError:
      return 502;
    case ServiceUnavailableHttpError:
      return 503;
    case GatewayTimeoutHttpError:
      return 504;
    case HTTPVersionNotSupportedHttpError:
      return 505;
    case VariantAlsoNegotiatesHttpError:
      return 506;
    case InsufficientStorageHttpError:
      return 507;
    case LoopDetectedHttpError:
      return 508;
    case NotExtendedHttpError:
      return 510;
    case NetworkAuthenticationRequiredHttpError:
      return 511;
    default:
      return 500;
  }
};
