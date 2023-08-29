import { ExtensibleError } from "./extensible-error.ts";

export class BadRequestHttpError extends ExtensibleError {} // RFC 9110, 15.5.1
export class UnauthorizedHttpError extends ExtensibleError {} // RFC 9110, 15.5.2
export class PaymentRequiredHttpError extends ExtensibleError {} // RFC 9110, 15.5.3
export class ForbiddenHttpError extends ExtensibleError {} // RFC 9110, 15.5.4
export class NotFoundHttpError extends ExtensibleError {} // RFC 9110, 15.5.5
export class MethodNotAllowedHttpError extends ExtensibleError {} // RFC 9110, 15.5.6
export class NotAcceptableHttpError extends ExtensibleError {} // RFC 9110, 15.5.7
export class ProxyAuthRequiredHttpError extends ExtensibleError {} // RFC 9110, 15.5.8
export class RequestTimeoutHttpError extends ExtensibleError {} // RFC 9110, 15.5.9
export class ConflictHttpError extends ExtensibleError {} // RFC 9110, 15.5.10
export class GoneHttpError extends ExtensibleError {} // RFC 9110, 15.5.11
export class LengthRequiredHttpError extends ExtensibleError {} // RFC 9110, 15.5.12
export class PreconditionFailedHttpError extends ExtensibleError {} // RFC 9110, 15.5.13
export class RequestEntityTooLargeHttpError extends ExtensibleError {} // RFC 9110, 15.5.14
export class RequestURITooLongHttpError extends ExtensibleError {} // RFC 9110, 15.5.15
export class UnsupportedMediaTypeHttpError extends ExtensibleError {} // RFC 9110, 15.5.16
export class RequestedRangeNotSatisfiableHttpError extends ExtensibleError {} // RFC 9110, 15.5.17
export class ExpectationFailedHttpError extends ExtensibleError {} // RFC 9110, 15.5.18
export class TeapotHttpError extends ExtensibleError {} // RFC 9110, 15.5.19 (Unused)
export class MisdirectedRequestHttpError extends ExtensibleError {} // RFC 9110, 15.5.20
export class UnprocessableEntityHttpError extends ExtensibleError {} // RFC 9110, 15.5.21
export class LockedHttpError extends ExtensibleError {} // RFC 4918, 11.3
export class FailedDependencyHttpError extends ExtensibleError {} // RFC 4918, 11.4
export class TooEarlyHttpError extends ExtensibleError {} // RFC 8470, 5.2.
export class UpgradeRequiredHttpError extends ExtensibleError {} // RFC 9110, 15.5.22
export class PreconditionRequiredHttpError extends ExtensibleError {} // RFC 6585, 3
export class TooManyRequestsHttpError extends ExtensibleError {} // RFC 6585, 4
export class RequestHeaderFieldsTooLargeHttpError extends ExtensibleError {} // RFC 6585, 5
export class UnavailableForLegalReasonsHttpError extends ExtensibleError {} // RFC 7725, 3

export class InternalServerHttpError extends ExtensibleError {} // RFC 9110, 15.6.1
export class NotImplementedHttpError extends ExtensibleError {} // RFC 9110, 15.6.2
export class BadGatewayHttpError extends ExtensibleError {} // RFC 9110, 15.6.3
export class ServiceUnavailableHttpError extends ExtensibleError {} // RFC 9110, 15.6.4
export class GatewayTimeoutHttpError extends ExtensibleError {} // RFC 9110, 15.6.5
export class HTTPVersionNotSupportedHttpError extends ExtensibleError {} // RFC 9110, 15.6.6
export class VariantAlsoNegotiatesHttpError extends ExtensibleError {} // RFC 2295, 8.1
export class InsufficientStorageHttpError extends ExtensibleError {} // RFC 4918, 11.5
export class LoopDetectedHttpError extends ExtensibleError {} // RFC 5842, 7.2
export class NotExtendedHttpError extends ExtensibleError {} // RFC 2774, 7
export class NetworkAuthenticationRequiredHttpError extends ExtensibleError {} // RFC 6585, 6

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
  | InternalServerHttpError
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

export const statusCodes = (error: Error): number => {
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
    case InternalServerHttpError:
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
