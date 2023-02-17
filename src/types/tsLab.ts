// * ================TYPESCRIPT EXPERIMENT================================

// * ideal type for user
export type OverloadFunc2 = {
  change: (content: string) => void;
  input: (inputEvent: InputEvent) => void;
};
// *   |
// *   |
// *   V
// TODO: What's the magic should perform here?
// *   |
// *   |
// *   V
// * emit overloaded type or interface for Vue
export interface IEmitsForVue {
  (event: 'change', content: string): void;
  (event: 'input', inputEvent: InputEvent): void;
}

type DefineEmitFuncBase = (event: string, ...args: any[]) => any;
type ExportEmitFuncBase = (...args: any[]) => any;

// TODO: overload function type
type OverloadFunc = {
  change: (event: 'change', content: string) => void;
  input: (event: 'input', inputEvent: InputEvent) => void;
};

declare function overloadEmits(content: string): void;
declare function overloadEmits(inputEvent: InputEvent): void;

type ExportEmits = typeof overloadEmits;

// (event: Key,...payload) => returnType;

interface OriginalIEmits {
  (event: 'change', content: string): void;
  (event: 'input', inputEvent: InputEvent): void;
}

type OriginalIEmits2 = {
  (event: 'change', content: string): void;
  (event: 'input', inputEvent: InputEvent): void;
};

// TODO: interface emits with mapped type
interface TestIEmits {
  // [T in keyof OverloadFunc]: OverloadFunc[T];
  // [key: string]: OriginalIEmits;
}

type TestIEmits2 = {
  [T in keyof OverloadFunc2]: OverloadFunc2[T];
};

type TestIEmits3<T extends keyof OverloadFunc> = {
  [U in T]: U;
};
