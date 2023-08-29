import { ExtensibleError } from "./extensible-error.ts";

export class InvalidAuthorizationHeaderError extends ExtensibleError {}

export class InvalidContentTypeHeaderError extends ExtensibleError {}
export class InvalidContentLengthHeaderError extends ExtensibleError {}
export class InvalidContentEncodingHeaderError extends ExtensibleError {}
export class InvalidContentLanguageHeaderError extends ExtensibleError {}
export class InvalidContentLocationHeaderError extends ExtensibleError {}

export class InavlidAcceptHeaderError extends ExtensibleError {}
export class InvalidAcceptEncodingHeaderError extends ExtensibleError {}
export class InvalidAcceptLanguageHeaderError extends ExtensibleError {}

export class InvalidCookieHeaderError extends ExtensibleError {}
export class InvalidSetCookieHeaderError extends ExtensibleError {}

export class InvalidAccessControlAllowOriginHeaderError
  extends ExtensibleError {}
export class InvalidAccessControlAllowHeadersHeaderError
  extends ExtensibleError {}
export class InvalidAccessControlAllowMethodsHeaderError
  extends ExtensibleError {}
export class InvalidAccessControlAllowCredentialsHeaderError
  extends ExtensibleError {}
export class InvalidAccessControlExposeHeadersHeaderError
  extends ExtensibleError {}
export class InvalidAccessControlMaxAgeHeaderError extends ExtensibleError {}

export class InvalidOriginHeaderError extends ExtensibleError {}
