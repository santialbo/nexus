/**
 * This file is automatically generated by GraphQLNexus
 * Do not make changes to this file directly
 * 
 * For better typings, you should provide configuration for how to lookup 
 * the types. See the documentation for "typegenAutoConfig"
 */


declare global {
  interface GraphQLNexusGen extends GraphQLNexusGenTypes {}
}

// Maybe Promise
type MaybePromise<T> = T | PromiseLike<T>;

// Maybe Promise List
type MaybePromiseList<T> = Array<MaybePromise<T>>;

// Maybe Thunk
type MaybeThunk<T> = T | (() => T);

// Maybe Thunk, with args
type MaybeThunkArgs<T, A> = T | ((args?: A) => T);

export type QueryOkReturnType = boolean;

export interface QueryRootType {
  ok: boolean;
}

export type QueryReturnType = {
  ok: MaybeThunk<MaybePromise<boolean>>;
}

export type BarOkReturnType = boolean;

export type BazOkReturnType = boolean;

export type FooOkReturnType = boolean;

export interface FooRootType {
  ok: boolean;
}

export type FooReturnType = {
  ok: MaybeThunk<MaybePromise<boolean>>;
}

interface InputType {
  answer?: number;
  key: string;
}

export type BarRootType = FooRootType;

export type BarReturnType = FooReturnType;

export type BazRootType = FooRootType;

export type BazReturnType = FooReturnType;

export interface GraphQLNexusGenArgTypes {
}

export interface GraphQLNexusGenRootTypes {
  Bar: BarRootType;
  Baz: BazRootType;
  Query: QueryRootType;
  Foo: FooRootType;
}

export interface GraphQLNexusGenReturnTypes {
  Query: {
    ok: QueryOkReturnType;
  };
  Bar: {
    ok: BarOkReturnType;
  };
  Baz: {
    ok: BazOkReturnType;
  };
  Foo: {
    ok: FooOkReturnType;
  };
}

export interface GraphQLNexusGenTypes {
  argTypes: GraphQLNexusGenArgTypes;
  backingTypes: GraphQLNexusGenRootTypes;
  returnTypes: GraphQLNexusGenReturnTypes;
  context: unknown;
  enums: {};
  objects: {
    Query: QueryRootType;
    Foo: FooRootType;
  };
  interfaces: {
    Bar: "Foo";
    Baz: "Foo";
  };
  unions: {};
  scalars: {
    Boolean: any;
    String: any;
    Int: any;
  };
  inputObjects: {
    InputType: any;
  };
  allInputTypes: 
    | Extract<keyof GraphQLNexusGenTypes['inputObjects'], string>
    | Extract<keyof GraphQLNexusGenTypes['enums'], string>
    | Extract<keyof GraphQLNexusGenTypes['scalars'], string>;
  allOutputTypes: 
    | Extract<keyof GraphQLNexusGenTypes['objects'], string>
    | Extract<keyof GraphQLNexusGenTypes['enums'], string>
    | Extract<keyof GraphQLNexusGenTypes['unions'], string>
    | Extract<keyof GraphQLNexusGenTypes['interfaces'], string>
    | Extract<keyof GraphQLNexusGenTypes['scalars'], string>;
}

export type Gen = GraphQLNexusGenTypes;
