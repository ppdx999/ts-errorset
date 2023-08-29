// This code is highly inspired by
// https://github.com/necojackarc/extensible-custom-error/tree/master
// The MIT License (MIT)
// Thank you to necojackarc

export class ExtensibleError extends Error {
  constructor(message?: string, err?: Error) {
    super(message);

    // Align with Object.getOwnPropertyDescriptor(Error.prototype, 'name')
    Object.defineProperty(this, "name", {
      configurable: true,
      enumerable: false,
      value: this.constructor.name,
      writable: true,
    });

    // Helper function to merge stack traces
    const mergeStackTrace = (
      stackTraceToMerge: string,
      baseStackTrace: string | undefined,
    ) => {
      if (!baseStackTrace) {
        return stackTraceToMerge;
      }

      const entriesToMerge = stackTraceToMerge.split("\n");
      const baseEntries = baseStackTrace.split("\n");

      const newEntries: string[] = [];

      entriesToMerge.forEach((entry) => {
        if (baseEntries.includes(entry)) {
          return;
        }

        newEntries.push(entry);
      });

      return [...newEntries, ...baseEntries].join("\n");
    };

    const stackTraceSoFar = err?.stack;

    if (Object.prototype.hasOwnProperty.call(Error, "captureStackTrace")) {
      Error.captureStackTrace(this, this.constructor);
      if (this.stack) {
        this.stack = mergeStackTrace(this.stack, stackTraceSoFar);
      }

      return;
    }

    // This class is supposed to be extended, so the first two lines from
    // the second line are about error object constructors.
    const stackTraceEntries = new Error(message).stack?.split("\n");
    if (!stackTraceEntries) {
      return;
    }

    const stackTraceWithoutConstructors = [
      stackTraceEntries[0],
      ...stackTraceEntries.slice(3),
    ].join("\n");

    this.stack = mergeStackTrace(
      stackTraceWithoutConstructors,
      stackTraceSoFar,
    );
  }
}
