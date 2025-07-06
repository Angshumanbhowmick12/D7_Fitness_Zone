
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model Membership
 * 
 */
export type Membership = $Result.DefaultSelection<Prisma.$MembershipPayload>
/**
 * Model WorkoutPlan
 * 
 */
export type WorkoutPlan = $Result.DefaultSelection<Prisma.$WorkoutPlanPayload>
/**
 * Model MemberWorkout
 * 
 */
export type MemberWorkout = $Result.DefaultSelection<Prisma.$MemberWorkoutPayload>
/**
 * Model WorkoutChart
 * 
 */
export type WorkoutChart = $Result.DefaultSelection<Prisma.$WorkoutChartPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model BodyMetric
 * 
 */
export type BodyMetric = $Result.DefaultSelection<Prisma.$BodyMetricPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  MEMBER: 'MEMBER',
  TRAINER: 'TRAINER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const MembershipType: {
  BASIC: 'BASIC',
  PREMIUM: 'PREMIUM',
  VIP: 'VIP'
};

export type MembershipType = (typeof MembershipType)[keyof typeof MembershipType]


export const MembershipStatus: {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED'
};

export type MembershipStatus = (typeof MembershipStatus)[keyof typeof MembershipStatus]


export const PaymentMethod: {
  CARD: 'CARD',
  UPI: 'UPI',
  CASH: 'CASH'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymentStatus: {
  PAID: 'PAID',
  PENDING: 'PENDING',
  FAILED: 'FAILED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const AuthProvider: {
  GOOGLE: 'GOOGLE',
  FACEBOOK: 'FACEBOOK'
};

export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type MembershipType = $Enums.MembershipType

export const MembershipType: typeof $Enums.MembershipType

export type MembershipStatus = $Enums.MembershipStatus

export const MembershipStatus: typeof $Enums.MembershipStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type AuthProvider = $Enums.AuthProvider

export const AuthProvider: typeof $Enums.AuthProvider

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membership`: Exposes CRUD operations for the **Membership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memberships
    * const memberships = await prisma.membership.findMany()
    * ```
    */
  get membership(): Prisma.MembershipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutPlan`: Exposes CRUD operations for the **WorkoutPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutPlans
    * const workoutPlans = await prisma.workoutPlan.findMany()
    * ```
    */
  get workoutPlan(): Prisma.WorkoutPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memberWorkout`: Exposes CRUD operations for the **MemberWorkout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemberWorkouts
    * const memberWorkouts = await prisma.memberWorkout.findMany()
    * ```
    */
  get memberWorkout(): Prisma.MemberWorkoutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutChart`: Exposes CRUD operations for the **WorkoutChart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutCharts
    * const workoutCharts = await prisma.workoutChart.findMany()
    * ```
    */
  get workoutChart(): Prisma.WorkoutChartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bodyMetric`: Exposes CRUD operations for the **BodyMetric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BodyMetrics
    * const bodyMetrics = await prisma.bodyMetric.findMany()
    * ```
    */
  get bodyMetric(): Prisma.BodyMetricDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserProfile: 'UserProfile',
    Membership: 'Membership',
    WorkoutPlan: 'WorkoutPlan',
    MemberWorkout: 'MemberWorkout',
    WorkoutChart: 'WorkoutChart',
    Payment: 'Payment',
    Account: 'Account',
    BodyMetric: 'BodyMetric'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userProfile" | "membership" | "workoutPlan" | "memberWorkout" | "workoutChart" | "payment" | "account" | "bodyMetric"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      Membership: {
        payload: Prisma.$MembershipPayload<ExtArgs>
        fields: Prisma.MembershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembershipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembershipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          findFirst: {
            args: Prisma.MembershipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembershipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          findMany: {
            args: Prisma.MembershipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
          }
          create: {
            args: Prisma.MembershipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          createMany: {
            args: Prisma.MembershipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembershipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
          }
          delete: {
            args: Prisma.MembershipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          update: {
            args: Prisma.MembershipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          deleteMany: {
            args: Prisma.MembershipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembershipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MembershipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
          }
          upsert: {
            args: Prisma.MembershipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          aggregate: {
            args: Prisma.MembershipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembership>
          }
          groupBy: {
            args: Prisma.MembershipGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembershipCountArgs<ExtArgs>
            result: $Utils.Optional<MembershipCountAggregateOutputType> | number
          }
        }
      }
      WorkoutPlan: {
        payload: Prisma.$WorkoutPlanPayload<ExtArgs>
        fields: Prisma.WorkoutPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          findFirst: {
            args: Prisma.WorkoutPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          findMany: {
            args: Prisma.WorkoutPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>[]
          }
          create: {
            args: Prisma.WorkoutPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          createMany: {
            args: Prisma.WorkoutPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>[]
          }
          delete: {
            args: Prisma.WorkoutPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          update: {
            args: Prisma.WorkoutPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPlanPayload>
          }
          aggregate: {
            args: Prisma.WorkoutPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutPlan>
          }
          groupBy: {
            args: Prisma.WorkoutPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutPlanCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutPlanCountAggregateOutputType> | number
          }
        }
      }
      MemberWorkout: {
        payload: Prisma.$MemberWorkoutPayload<ExtArgs>
        fields: Prisma.MemberWorkoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberWorkoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberWorkoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberWorkoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberWorkoutPayload>
          }
          findFirst: {
            args: Prisma.MemberWorkoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberWorkoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberWorkoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberWorkoutPayload>
          }
          findMany: {
            args: Prisma.MemberWorkoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberWorkoutPayload>[]
          }
          create: {
            args: Prisma.MemberWorkoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberWorkoutPayload>
          }
          createMany: {
            args: Prisma.MemberWorkoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberWorkoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberWorkoutPayload>[]
          }
          delete: {
            args: Prisma.MemberWorkoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberWorkoutPayload>
          }
          update: {
            args: Prisma.MemberWorkoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberWorkoutPayload>
          }
          deleteMany: {
            args: Prisma.MemberWorkoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberWorkoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberWorkoutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberWorkoutPayload>[]
          }
          upsert: {
            args: Prisma.MemberWorkoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberWorkoutPayload>
          }
          aggregate: {
            args: Prisma.MemberWorkoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemberWorkout>
          }
          groupBy: {
            args: Prisma.MemberWorkoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberWorkoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberWorkoutCountArgs<ExtArgs>
            result: $Utils.Optional<MemberWorkoutCountAggregateOutputType> | number
          }
        }
      }
      WorkoutChart: {
        payload: Prisma.$WorkoutChartPayload<ExtArgs>
        fields: Prisma.WorkoutChartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutChartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutChartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutChartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutChartPayload>
          }
          findFirst: {
            args: Prisma.WorkoutChartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutChartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutChartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutChartPayload>
          }
          findMany: {
            args: Prisma.WorkoutChartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutChartPayload>[]
          }
          create: {
            args: Prisma.WorkoutChartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutChartPayload>
          }
          createMany: {
            args: Prisma.WorkoutChartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutChartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutChartPayload>[]
          }
          delete: {
            args: Prisma.WorkoutChartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutChartPayload>
          }
          update: {
            args: Prisma.WorkoutChartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutChartPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutChartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutChartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutChartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutChartPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutChartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutChartPayload>
          }
          aggregate: {
            args: Prisma.WorkoutChartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutChart>
          }
          groupBy: {
            args: Prisma.WorkoutChartGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutChartGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutChartCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutChartCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      BodyMetric: {
        payload: Prisma.$BodyMetricPayload<ExtArgs>
        fields: Prisma.BodyMetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BodyMetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BodyMetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMetricPayload>
          }
          findFirst: {
            args: Prisma.BodyMetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BodyMetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMetricPayload>
          }
          findMany: {
            args: Prisma.BodyMetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMetricPayload>[]
          }
          create: {
            args: Prisma.BodyMetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMetricPayload>
          }
          createMany: {
            args: Prisma.BodyMetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BodyMetricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMetricPayload>[]
          }
          delete: {
            args: Prisma.BodyMetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMetricPayload>
          }
          update: {
            args: Prisma.BodyMetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMetricPayload>
          }
          deleteMany: {
            args: Prisma.BodyMetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BodyMetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BodyMetricUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMetricPayload>[]
          }
          upsert: {
            args: Prisma.BodyMetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMetricPayload>
          }
          aggregate: {
            args: Prisma.BodyMetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBodyMetric>
          }
          groupBy: {
            args: Prisma.BodyMetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<BodyMetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.BodyMetricCountArgs<ExtArgs>
            result: $Utils.Optional<BodyMetricCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userProfile?: UserProfileOmit
    membership?: MembershipOmit
    workoutPlan?: WorkoutPlanOmit
    memberWorkout?: MemberWorkoutOmit
    workoutChart?: WorkoutChartOmit
    payment?: PaymentOmit
    account?: AccountOmit
    bodyMetric?: BodyMetricOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    memberships: number
    workoutPlans: number
    memberWorkouts: number
    payments: number
    accounts: number
    workoutCharts: number
    bodyMetrics: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    workoutPlans?: boolean | UserCountOutputTypeCountWorkoutPlansArgs
    memberWorkouts?: boolean | UserCountOutputTypeCountMemberWorkoutsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    workoutCharts?: boolean | UserCountOutputTypeCountWorkoutChartsArgs
    bodyMetrics?: boolean | UserCountOutputTypeCountBodyMetricsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkoutPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutPlanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMemberWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWorkoutWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkoutChartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutChartWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBodyMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BodyMetricWhereInput
  }


  /**
   * Count Type WorkoutPlanCountOutputType
   */

  export type WorkoutPlanCountOutputType = {
    memberWorkouts: number
  }

  export type WorkoutPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberWorkouts?: boolean | WorkoutPlanCountOutputTypeCountMemberWorkoutsArgs
  }

  // Custom InputTypes
  /**
   * WorkoutPlanCountOutputType without action
   */
  export type WorkoutPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlanCountOutputType
     */
    select?: WorkoutPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutPlanCountOutputType without action
   */
  export type WorkoutPlanCountOutputTypeCountMemberWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWorkoutWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    phone: string | null
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    workoutPlans?: boolean | User$workoutPlansArgs<ExtArgs>
    memberWorkouts?: boolean | User$memberWorkoutsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    workoutCharts?: boolean | User$workoutChartsArgs<ExtArgs>
    bodyMetrics?: boolean | User$bodyMetricsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phone" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    workoutPlans?: boolean | User$workoutPlansArgs<ExtArgs>
    memberWorkouts?: boolean | User$memberWorkoutsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    workoutCharts?: boolean | User$workoutChartsArgs<ExtArgs>
    bodyMetrics?: boolean | User$bodyMetricsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
      memberships: Prisma.$MembershipPayload<ExtArgs>[]
      workoutPlans: Prisma.$WorkoutPlanPayload<ExtArgs>[]
      memberWorkouts: Prisma.$MemberWorkoutPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      workoutCharts: Prisma.$WorkoutChartPayload<ExtArgs>[]
      bodyMetrics: Prisma.$BodyMetricPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      phone: string | null
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workoutPlans<T extends User$workoutPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$workoutPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberWorkouts<T extends User$memberWorkoutsArgs<ExtArgs> = {}>(args?: Subset<T, User$memberWorkoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberWorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workoutCharts<T extends User$workoutChartsArgs<ExtArgs> = {}>(args?: Subset<T, User$workoutChartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutChartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bodyMetrics<T extends User$bodyMetricsArgs<ExtArgs> = {}>(args?: Subset<T, User$bodyMetricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    cursor?: MembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * User.workoutPlans
   */
  export type User$workoutPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    where?: WorkoutPlanWhereInput
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    cursor?: WorkoutPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutPlanScalarFieldEnum | WorkoutPlanScalarFieldEnum[]
  }

  /**
   * User.memberWorkouts
   */
  export type User$memberWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberWorkout
     */
    select?: MemberWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberWorkout
     */
    omit?: MemberWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberWorkoutInclude<ExtArgs> | null
    where?: MemberWorkoutWhereInput
    orderBy?: MemberWorkoutOrderByWithRelationInput | MemberWorkoutOrderByWithRelationInput[]
    cursor?: MemberWorkoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberWorkoutScalarFieldEnum | MemberWorkoutScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.workoutCharts
   */
  export type User$workoutChartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutChart
     */
    select?: WorkoutChartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutChart
     */
    omit?: WorkoutChartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutChartInclude<ExtArgs> | null
    where?: WorkoutChartWhereInput
    orderBy?: WorkoutChartOrderByWithRelationInput | WorkoutChartOrderByWithRelationInput[]
    cursor?: WorkoutChartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutChartScalarFieldEnum | WorkoutChartScalarFieldEnum[]
  }

  /**
   * User.bodyMetrics
   */
  export type User$bodyMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetric
     */
    select?: BodyMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMetric
     */
    omit?: BodyMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMetricInclude<ExtArgs> | null
    where?: BodyMetricWhereInput
    orderBy?: BodyMetricOrderByWithRelationInput | BodyMetricOrderByWithRelationInput[]
    cursor?: BodyMetricWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BodyMetricScalarFieldEnum | BodyMetricScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    height: number | null
    weight: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    height: number | null
    weight: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    height: number | null
    weight: number | null
    joinedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    height: number | null
    weight: number | null
    joinedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    userId: number
    height: number
    weight: number
    joinedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    height?: true
    weight?: true
  }

  export type UserProfileSumAggregateInputType = {
    height?: true
    weight?: true
  }

  export type UserProfileMinAggregateInputType = {
    id?: true
    userId?: true
    height?: true
    weight?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    height?: true
    weight?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    userId?: true
    height?: true
    weight?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    userId: string
    height: number | null
    weight: number | null
    joinedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    height?: boolean
    weight?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    height?: boolean
    weight?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    height?: boolean
    weight?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    height?: boolean
    weight?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "height" | "weight" | "joinedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      height: number | null
      weight: number | null
      joinedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly height: FieldRef<"UserProfile", 'Float'>
    readonly weight: FieldRef<"UserProfile", 'Float'>
    readonly joinedAt: FieldRef<"UserProfile", 'DateTime'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model Membership
   */

  export type AggregateMembership = {
    _count: MembershipCountAggregateOutputType | null
    _min: MembershipMinAggregateOutputType | null
    _max: MembershipMaxAggregateOutputType | null
  }

  export type MembershipMinAggregateOutputType = {
    id: string | null
    userId: string | null
    membershipType: $Enums.MembershipType | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.MembershipStatus | null
    createdAt: Date | null
  }

  export type MembershipMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    membershipType: $Enums.MembershipType | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.MembershipStatus | null
    createdAt: Date | null
  }

  export type MembershipCountAggregateOutputType = {
    id: number
    userId: number
    membershipType: number
    startDate: number
    endDate: number
    status: number
    createdAt: number
    _all: number
  }


  export type MembershipMinAggregateInputType = {
    id?: true
    userId?: true
    membershipType?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
  }

  export type MembershipMaxAggregateInputType = {
    id?: true
    userId?: true
    membershipType?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
  }

  export type MembershipCountAggregateInputType = {
    id?: true
    userId?: true
    membershipType?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type MembershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Membership to aggregate.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Memberships
    **/
    _count?: true | MembershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembershipMaxAggregateInputType
  }

  export type GetMembershipAggregateType<T extends MembershipAggregateArgs> = {
        [P in keyof T & keyof AggregateMembership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembership[P]>
      : GetScalarType<T[P], AggregateMembership[P]>
  }




  export type MembershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithAggregationInput | MembershipOrderByWithAggregationInput[]
    by: MembershipScalarFieldEnum[] | MembershipScalarFieldEnum
    having?: MembershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembershipCountAggregateInputType | true
    _min?: MembershipMinAggregateInputType
    _max?: MembershipMaxAggregateInputType
  }

  export type MembershipGroupByOutputType = {
    id: string
    userId: string
    membershipType: $Enums.MembershipType
    startDate: Date
    endDate: Date
    status: $Enums.MembershipStatus
    createdAt: Date
    _count: MembershipCountAggregateOutputType | null
    _min: MembershipMinAggregateOutputType | null
    _max: MembershipMaxAggregateOutputType | null
  }

  type GetMembershipGroupByPayload<T extends MembershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembershipGroupByOutputType[P]>
            : GetScalarType<T[P], MembershipGroupByOutputType[P]>
        }
      >
    >


  export type MembershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    membershipType?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    membershipType?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    membershipType?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectScalar = {
    id?: boolean
    userId?: boolean
    membershipType?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type MembershipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "membershipType" | "startDate" | "endDate" | "status" | "createdAt", ExtArgs["result"]["membership"]>
  export type MembershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MembershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MembershipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MembershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Membership"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      membershipType: $Enums.MembershipType
      startDate: Date
      endDate: Date
      status: $Enums.MembershipStatus
      createdAt: Date
    }, ExtArgs["result"]["membership"]>
    composites: {}
  }

  type MembershipGetPayload<S extends boolean | null | undefined | MembershipDefaultArgs> = $Result.GetResult<Prisma.$MembershipPayload, S>

  type MembershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembershipCountAggregateInputType | true
    }

  export interface MembershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Membership'], meta: { name: 'Membership' } }
    /**
     * Find zero or one Membership that matches the filter.
     * @param {MembershipFindUniqueArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembershipFindUniqueArgs>(args: SelectSubset<T, MembershipFindUniqueArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Membership that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembershipFindUniqueOrThrowArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembershipFindUniqueOrThrowArgs>(args: SelectSubset<T, MembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Membership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindFirstArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembershipFindFirstArgs>(args?: SelectSubset<T, MembershipFindFirstArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Membership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindFirstOrThrowArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembershipFindFirstOrThrowArgs>(args?: SelectSubset<T, MembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Memberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memberships
     * const memberships = await prisma.membership.findMany()
     * 
     * // Get first 10 Memberships
     * const memberships = await prisma.membership.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membershipWithIdOnly = await prisma.membership.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembershipFindManyArgs>(args?: SelectSubset<T, MembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Membership.
     * @param {MembershipCreateArgs} args - Arguments to create a Membership.
     * @example
     * // Create one Membership
     * const Membership = await prisma.membership.create({
     *   data: {
     *     // ... data to create a Membership
     *   }
     * })
     * 
     */
    create<T extends MembershipCreateArgs>(args: SelectSubset<T, MembershipCreateArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Memberships.
     * @param {MembershipCreateManyArgs} args - Arguments to create many Memberships.
     * @example
     * // Create many Memberships
     * const membership = await prisma.membership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembershipCreateManyArgs>(args?: SelectSubset<T, MembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Memberships and returns the data saved in the database.
     * @param {MembershipCreateManyAndReturnArgs} args - Arguments to create many Memberships.
     * @example
     * // Create many Memberships
     * const membership = await prisma.membership.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Memberships and only return the `id`
     * const membershipWithIdOnly = await prisma.membership.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembershipCreateManyAndReturnArgs>(args?: SelectSubset<T, MembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Membership.
     * @param {MembershipDeleteArgs} args - Arguments to delete one Membership.
     * @example
     * // Delete one Membership
     * const Membership = await prisma.membership.delete({
     *   where: {
     *     // ... filter to delete one Membership
     *   }
     * })
     * 
     */
    delete<T extends MembershipDeleteArgs>(args: SelectSubset<T, MembershipDeleteArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Membership.
     * @param {MembershipUpdateArgs} args - Arguments to update one Membership.
     * @example
     * // Update one Membership
     * const membership = await prisma.membership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembershipUpdateArgs>(args: SelectSubset<T, MembershipUpdateArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Memberships.
     * @param {MembershipDeleteManyArgs} args - Arguments to filter Memberships to delete.
     * @example
     * // Delete a few Memberships
     * const { count } = await prisma.membership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembershipDeleteManyArgs>(args?: SelectSubset<T, MembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memberships
     * const membership = await prisma.membership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembershipUpdateManyArgs>(args: SelectSubset<T, MembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memberships and returns the data updated in the database.
     * @param {MembershipUpdateManyAndReturnArgs} args - Arguments to update many Memberships.
     * @example
     * // Update many Memberships
     * const membership = await prisma.membership.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Memberships and only return the `id`
     * const membershipWithIdOnly = await prisma.membership.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MembershipUpdateManyAndReturnArgs>(args: SelectSubset<T, MembershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Membership.
     * @param {MembershipUpsertArgs} args - Arguments to update or create a Membership.
     * @example
     * // Update or create a Membership
     * const membership = await prisma.membership.upsert({
     *   create: {
     *     // ... data to create a Membership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Membership we want to update
     *   }
     * })
     */
    upsert<T extends MembershipUpsertArgs>(args: SelectSubset<T, MembershipUpsertArgs<ExtArgs>>): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipCountArgs} args - Arguments to filter Memberships to count.
     * @example
     * // Count the number of Memberships
     * const count = await prisma.membership.count({
     *   where: {
     *     // ... the filter for the Memberships we want to count
     *   }
     * })
    **/
    count<T extends MembershipCountArgs>(
      args?: Subset<T, MembershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Membership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MembershipAggregateArgs>(args: Subset<T, MembershipAggregateArgs>): Prisma.PrismaPromise<GetMembershipAggregateType<T>>

    /**
     * Group by Membership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MembershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembershipGroupByArgs['orderBy'] }
        : { orderBy?: MembershipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Membership model
   */
  readonly fields: MembershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Membership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Membership model
   */
  interface MembershipFieldRefs {
    readonly id: FieldRef<"Membership", 'String'>
    readonly userId: FieldRef<"Membership", 'String'>
    readonly membershipType: FieldRef<"Membership", 'MembershipType'>
    readonly startDate: FieldRef<"Membership", 'DateTime'>
    readonly endDate: FieldRef<"Membership", 'DateTime'>
    readonly status: FieldRef<"Membership", 'MembershipStatus'>
    readonly createdAt: FieldRef<"Membership", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Membership findUnique
   */
  export type MembershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership findUniqueOrThrow
   */
  export type MembershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership findFirst
   */
  export type MembershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memberships.
     */
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership findFirstOrThrow
   */
  export type MembershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memberships.
     */
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership findMany
   */
  export type MembershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Memberships to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }

  /**
   * Membership create
   */
  export type MembershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The data needed to create a Membership.
     */
    data: XOR<MembershipCreateInput, MembershipUncheckedCreateInput>
  }

  /**
   * Membership createMany
   */
  export type MembershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Memberships.
     */
    data: MembershipCreateManyInput | MembershipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Membership createManyAndReturn
   */
  export type MembershipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * The data used to create many Memberships.
     */
    data: MembershipCreateManyInput | MembershipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Membership update
   */
  export type MembershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The data needed to update a Membership.
     */
    data: XOR<MembershipUpdateInput, MembershipUncheckedUpdateInput>
    /**
     * Choose, which Membership to update.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership updateMany
   */
  export type MembershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Memberships.
     */
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyInput>
    /**
     * Filter which Memberships to update
     */
    where?: MembershipWhereInput
    /**
     * Limit how many Memberships to update.
     */
    limit?: number
  }

  /**
   * Membership updateManyAndReturn
   */
  export type MembershipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * The data used to update Memberships.
     */
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyInput>
    /**
     * Filter which Memberships to update
     */
    where?: MembershipWhereInput
    /**
     * Limit how many Memberships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Membership upsert
   */
  export type MembershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The filter to search for the Membership to update in case it exists.
     */
    where: MembershipWhereUniqueInput
    /**
     * In case the Membership found by the `where` argument doesn't exist, create a new Membership with this data.
     */
    create: XOR<MembershipCreateInput, MembershipUncheckedCreateInput>
    /**
     * In case the Membership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembershipUpdateInput, MembershipUncheckedUpdateInput>
  }

  /**
   * Membership delete
   */
  export type MembershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter which Membership to delete.
     */
    where: MembershipWhereUniqueInput
  }

  /**
   * Membership deleteMany
   */
  export type MembershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Memberships to delete
     */
    where?: MembershipWhereInput
    /**
     * Limit how many Memberships to delete.
     */
    limit?: number
  }

  /**
   * Membership without action
   */
  export type MembershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membership
     */
    omit?: MembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutPlan
   */

  export type AggregateWorkoutPlan = {
    _count: WorkoutPlanCountAggregateOutputType | null
    _min: WorkoutPlanMinAggregateOutputType | null
    _max: WorkoutPlanMaxAggregateOutputType | null
  }

  export type WorkoutPlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    trainerId: string | null
    createdAt: Date | null
  }

  export type WorkoutPlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    trainerId: string | null
    createdAt: Date | null
  }

  export type WorkoutPlanCountAggregateOutputType = {
    id: number
    name: number
    description: number
    trainerId: number
    createdAt: number
    _all: number
  }


  export type WorkoutPlanMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    trainerId?: true
    createdAt?: true
  }

  export type WorkoutPlanMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    trainerId?: true
    createdAt?: true
  }

  export type WorkoutPlanCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    trainerId?: true
    createdAt?: true
    _all?: true
  }

  export type WorkoutPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutPlan to aggregate.
     */
    where?: WorkoutPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutPlans to fetch.
     */
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutPlans
    **/
    _count?: true | WorkoutPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutPlanMaxAggregateInputType
  }

  export type GetWorkoutPlanAggregateType<T extends WorkoutPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutPlan[P]>
      : GetScalarType<T[P], AggregateWorkoutPlan[P]>
  }




  export type WorkoutPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutPlanWhereInput
    orderBy?: WorkoutPlanOrderByWithAggregationInput | WorkoutPlanOrderByWithAggregationInput[]
    by: WorkoutPlanScalarFieldEnum[] | WorkoutPlanScalarFieldEnum
    having?: WorkoutPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutPlanCountAggregateInputType | true
    _min?: WorkoutPlanMinAggregateInputType
    _max?: WorkoutPlanMaxAggregateInputType
  }

  export type WorkoutPlanGroupByOutputType = {
    id: string
    name: string
    description: string | null
    trainerId: string | null
    createdAt: Date
    _count: WorkoutPlanCountAggregateOutputType | null
    _min: WorkoutPlanMinAggregateOutputType | null
    _max: WorkoutPlanMaxAggregateOutputType | null
  }

  type GetWorkoutPlanGroupByPayload<T extends WorkoutPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutPlanGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutPlanGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    trainerId?: boolean
    createdAt?: boolean
    trainer?: boolean | WorkoutPlan$trainerArgs<ExtArgs>
    memberWorkouts?: boolean | WorkoutPlan$memberWorkoutsArgs<ExtArgs>
    _count?: boolean | WorkoutPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutPlan"]>

  export type WorkoutPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    trainerId?: boolean
    createdAt?: boolean
    trainer?: boolean | WorkoutPlan$trainerArgs<ExtArgs>
  }, ExtArgs["result"]["workoutPlan"]>

  export type WorkoutPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    trainerId?: boolean
    createdAt?: boolean
    trainer?: boolean | WorkoutPlan$trainerArgs<ExtArgs>
  }, ExtArgs["result"]["workoutPlan"]>

  export type WorkoutPlanSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    trainerId?: boolean
    createdAt?: boolean
  }

  export type WorkoutPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "trainerId" | "createdAt", ExtArgs["result"]["workoutPlan"]>
  export type WorkoutPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainer?: boolean | WorkoutPlan$trainerArgs<ExtArgs>
    memberWorkouts?: boolean | WorkoutPlan$memberWorkoutsArgs<ExtArgs>
    _count?: boolean | WorkoutPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainer?: boolean | WorkoutPlan$trainerArgs<ExtArgs>
  }
  export type WorkoutPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainer?: boolean | WorkoutPlan$trainerArgs<ExtArgs>
  }

  export type $WorkoutPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutPlan"
    objects: {
      trainer: Prisma.$UserPayload<ExtArgs> | null
      memberWorkouts: Prisma.$MemberWorkoutPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      trainerId: string | null
      createdAt: Date
    }, ExtArgs["result"]["workoutPlan"]>
    composites: {}
  }

  type WorkoutPlanGetPayload<S extends boolean | null | undefined | WorkoutPlanDefaultArgs> = $Result.GetResult<Prisma.$WorkoutPlanPayload, S>

  type WorkoutPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutPlanCountAggregateInputType | true
    }

  export interface WorkoutPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutPlan'], meta: { name: 'WorkoutPlan' } }
    /**
     * Find zero or one WorkoutPlan that matches the filter.
     * @param {WorkoutPlanFindUniqueArgs} args - Arguments to find a WorkoutPlan
     * @example
     * // Get one WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutPlanFindUniqueArgs>(args: SelectSubset<T, WorkoutPlanFindUniqueArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutPlanFindUniqueOrThrowArgs} args - Arguments to find a WorkoutPlan
     * @example
     * // Get one WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanFindFirstArgs} args - Arguments to find a WorkoutPlan
     * @example
     * // Get one WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutPlanFindFirstArgs>(args?: SelectSubset<T, WorkoutPlanFindFirstArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanFindFirstOrThrowArgs} args - Arguments to find a WorkoutPlan
     * @example
     * // Get one WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutPlans
     * const workoutPlans = await prisma.workoutPlan.findMany()
     * 
     * // Get first 10 WorkoutPlans
     * const workoutPlans = await prisma.workoutPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutPlanWithIdOnly = await prisma.workoutPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutPlanFindManyArgs>(args?: SelectSubset<T, WorkoutPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutPlan.
     * @param {WorkoutPlanCreateArgs} args - Arguments to create a WorkoutPlan.
     * @example
     * // Create one WorkoutPlan
     * const WorkoutPlan = await prisma.workoutPlan.create({
     *   data: {
     *     // ... data to create a WorkoutPlan
     *   }
     * })
     * 
     */
    create<T extends WorkoutPlanCreateArgs>(args: SelectSubset<T, WorkoutPlanCreateArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutPlans.
     * @param {WorkoutPlanCreateManyArgs} args - Arguments to create many WorkoutPlans.
     * @example
     * // Create many WorkoutPlans
     * const workoutPlan = await prisma.workoutPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutPlanCreateManyArgs>(args?: SelectSubset<T, WorkoutPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutPlans and returns the data saved in the database.
     * @param {WorkoutPlanCreateManyAndReturnArgs} args - Arguments to create many WorkoutPlans.
     * @example
     * // Create many WorkoutPlans
     * const workoutPlan = await prisma.workoutPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutPlans and only return the `id`
     * const workoutPlanWithIdOnly = await prisma.workoutPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutPlan.
     * @param {WorkoutPlanDeleteArgs} args - Arguments to delete one WorkoutPlan.
     * @example
     * // Delete one WorkoutPlan
     * const WorkoutPlan = await prisma.workoutPlan.delete({
     *   where: {
     *     // ... filter to delete one WorkoutPlan
     *   }
     * })
     * 
     */
    delete<T extends WorkoutPlanDeleteArgs>(args: SelectSubset<T, WorkoutPlanDeleteArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutPlan.
     * @param {WorkoutPlanUpdateArgs} args - Arguments to update one WorkoutPlan.
     * @example
     * // Update one WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutPlanUpdateArgs>(args: SelectSubset<T, WorkoutPlanUpdateArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutPlans.
     * @param {WorkoutPlanDeleteManyArgs} args - Arguments to filter WorkoutPlans to delete.
     * @example
     * // Delete a few WorkoutPlans
     * const { count } = await prisma.workoutPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutPlanDeleteManyArgs>(args?: SelectSubset<T, WorkoutPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutPlans
     * const workoutPlan = await prisma.workoutPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutPlanUpdateManyArgs>(args: SelectSubset<T, WorkoutPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutPlans and returns the data updated in the database.
     * @param {WorkoutPlanUpdateManyAndReturnArgs} args - Arguments to update many WorkoutPlans.
     * @example
     * // Update many WorkoutPlans
     * const workoutPlan = await prisma.workoutPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutPlans and only return the `id`
     * const workoutPlanWithIdOnly = await prisma.workoutPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkoutPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutPlan.
     * @param {WorkoutPlanUpsertArgs} args - Arguments to update or create a WorkoutPlan.
     * @example
     * // Update or create a WorkoutPlan
     * const workoutPlan = await prisma.workoutPlan.upsert({
     *   create: {
     *     // ... data to create a WorkoutPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutPlan we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutPlanUpsertArgs>(args: SelectSubset<T, WorkoutPlanUpsertArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanCountArgs} args - Arguments to filter WorkoutPlans to count.
     * @example
     * // Count the number of WorkoutPlans
     * const count = await prisma.workoutPlan.count({
     *   where: {
     *     // ... the filter for the WorkoutPlans we want to count
     *   }
     * })
    **/
    count<T extends WorkoutPlanCountArgs>(
      args?: Subset<T, WorkoutPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkoutPlanAggregateArgs>(args: Subset<T, WorkoutPlanAggregateArgs>): Prisma.PrismaPromise<GetWorkoutPlanAggregateType<T>>

    /**
     * Group by WorkoutPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkoutPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutPlanGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkoutPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutPlan model
   */
  readonly fields: WorkoutPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trainer<T extends WorkoutPlan$trainerArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutPlan$trainerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    memberWorkouts<T extends WorkoutPlan$memberWorkoutsArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutPlan$memberWorkoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberWorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkoutPlan model
   */
  interface WorkoutPlanFieldRefs {
    readonly id: FieldRef<"WorkoutPlan", 'String'>
    readonly name: FieldRef<"WorkoutPlan", 'String'>
    readonly description: FieldRef<"WorkoutPlan", 'String'>
    readonly trainerId: FieldRef<"WorkoutPlan", 'String'>
    readonly createdAt: FieldRef<"WorkoutPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutPlan findUnique
   */
  export type WorkoutPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutPlan to fetch.
     */
    where: WorkoutPlanWhereUniqueInput
  }

  /**
   * WorkoutPlan findUniqueOrThrow
   */
  export type WorkoutPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutPlan to fetch.
     */
    where: WorkoutPlanWhereUniqueInput
  }

  /**
   * WorkoutPlan findFirst
   */
  export type WorkoutPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutPlan to fetch.
     */
    where?: WorkoutPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutPlans to fetch.
     */
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutPlans.
     */
    cursor?: WorkoutPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutPlans.
     */
    distinct?: WorkoutPlanScalarFieldEnum | WorkoutPlanScalarFieldEnum[]
  }

  /**
   * WorkoutPlan findFirstOrThrow
   */
  export type WorkoutPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutPlan to fetch.
     */
    where?: WorkoutPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutPlans to fetch.
     */
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutPlans.
     */
    cursor?: WorkoutPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutPlans.
     */
    distinct?: WorkoutPlanScalarFieldEnum | WorkoutPlanScalarFieldEnum[]
  }

  /**
   * WorkoutPlan findMany
   */
  export type WorkoutPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutPlans to fetch.
     */
    where?: WorkoutPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutPlans to fetch.
     */
    orderBy?: WorkoutPlanOrderByWithRelationInput | WorkoutPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutPlans.
     */
    cursor?: WorkoutPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutPlans.
     */
    skip?: number
    distinct?: WorkoutPlanScalarFieldEnum | WorkoutPlanScalarFieldEnum[]
  }

  /**
   * WorkoutPlan create
   */
  export type WorkoutPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutPlan.
     */
    data: XOR<WorkoutPlanCreateInput, WorkoutPlanUncheckedCreateInput>
  }

  /**
   * WorkoutPlan createMany
   */
  export type WorkoutPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutPlans.
     */
    data: WorkoutPlanCreateManyInput | WorkoutPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutPlan createManyAndReturn
   */
  export type WorkoutPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutPlans.
     */
    data: WorkoutPlanCreateManyInput | WorkoutPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutPlan update
   */
  export type WorkoutPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutPlan.
     */
    data: XOR<WorkoutPlanUpdateInput, WorkoutPlanUncheckedUpdateInput>
    /**
     * Choose, which WorkoutPlan to update.
     */
    where: WorkoutPlanWhereUniqueInput
  }

  /**
   * WorkoutPlan updateMany
   */
  export type WorkoutPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutPlans.
     */
    data: XOR<WorkoutPlanUpdateManyMutationInput, WorkoutPlanUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutPlans to update
     */
    where?: WorkoutPlanWhereInput
    /**
     * Limit how many WorkoutPlans to update.
     */
    limit?: number
  }

  /**
   * WorkoutPlan updateManyAndReturn
   */
  export type WorkoutPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutPlans.
     */
    data: XOR<WorkoutPlanUpdateManyMutationInput, WorkoutPlanUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutPlans to update
     */
    where?: WorkoutPlanWhereInput
    /**
     * Limit how many WorkoutPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutPlan upsert
   */
  export type WorkoutPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutPlan to update in case it exists.
     */
    where: WorkoutPlanWhereUniqueInput
    /**
     * In case the WorkoutPlan found by the `where` argument doesn't exist, create a new WorkoutPlan with this data.
     */
    create: XOR<WorkoutPlanCreateInput, WorkoutPlanUncheckedCreateInput>
    /**
     * In case the WorkoutPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutPlanUpdateInput, WorkoutPlanUncheckedUpdateInput>
  }

  /**
   * WorkoutPlan delete
   */
  export type WorkoutPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
    /**
     * Filter which WorkoutPlan to delete.
     */
    where: WorkoutPlanWhereUniqueInput
  }

  /**
   * WorkoutPlan deleteMany
   */
  export type WorkoutPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutPlans to delete
     */
    where?: WorkoutPlanWhereInput
    /**
     * Limit how many WorkoutPlans to delete.
     */
    limit?: number
  }

  /**
   * WorkoutPlan.trainer
   */
  export type WorkoutPlan$trainerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * WorkoutPlan.memberWorkouts
   */
  export type WorkoutPlan$memberWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberWorkout
     */
    select?: MemberWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberWorkout
     */
    omit?: MemberWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberWorkoutInclude<ExtArgs> | null
    where?: MemberWorkoutWhereInput
    orderBy?: MemberWorkoutOrderByWithRelationInput | MemberWorkoutOrderByWithRelationInput[]
    cursor?: MemberWorkoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberWorkoutScalarFieldEnum | MemberWorkoutScalarFieldEnum[]
  }

  /**
   * WorkoutPlan without action
   */
  export type WorkoutPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutPlan
     */
    select?: WorkoutPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutPlan
     */
    omit?: WorkoutPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutPlanInclude<ExtArgs> | null
  }


  /**
   * Model MemberWorkout
   */

  export type AggregateMemberWorkout = {
    _count: MemberWorkoutCountAggregateOutputType | null
    _avg: MemberWorkoutAvgAggregateOutputType | null
    _sum: MemberWorkoutSumAggregateOutputType | null
    _min: MemberWorkoutMinAggregateOutputType | null
    _max: MemberWorkoutMaxAggregateOutputType | null
  }

  export type MemberWorkoutAvgAggregateOutputType = {
    duration: number | null
    caloriesBurned: number | null
  }

  export type MemberWorkoutSumAggregateOutputType = {
    duration: number | null
    caloriesBurned: number | null
  }

  export type MemberWorkoutMinAggregateOutputType = {
    id: string | null
    userId: string | null
    workoutPlanId: string | null
    date: Date | null
    duration: number | null
    caloriesBurned: number | null
    createdAt: Date | null
  }

  export type MemberWorkoutMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    workoutPlanId: string | null
    date: Date | null
    duration: number | null
    caloriesBurned: number | null
    createdAt: Date | null
  }

  export type MemberWorkoutCountAggregateOutputType = {
    id: number
    userId: number
    workoutPlanId: number
    date: number
    duration: number
    caloriesBurned: number
    createdAt: number
    _all: number
  }


  export type MemberWorkoutAvgAggregateInputType = {
    duration?: true
    caloriesBurned?: true
  }

  export type MemberWorkoutSumAggregateInputType = {
    duration?: true
    caloriesBurned?: true
  }

  export type MemberWorkoutMinAggregateInputType = {
    id?: true
    userId?: true
    workoutPlanId?: true
    date?: true
    duration?: true
    caloriesBurned?: true
    createdAt?: true
  }

  export type MemberWorkoutMaxAggregateInputType = {
    id?: true
    userId?: true
    workoutPlanId?: true
    date?: true
    duration?: true
    caloriesBurned?: true
    createdAt?: true
  }

  export type MemberWorkoutCountAggregateInputType = {
    id?: true
    userId?: true
    workoutPlanId?: true
    date?: true
    duration?: true
    caloriesBurned?: true
    createdAt?: true
    _all?: true
  }

  export type MemberWorkoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberWorkout to aggregate.
     */
    where?: MemberWorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberWorkouts to fetch.
     */
    orderBy?: MemberWorkoutOrderByWithRelationInput | MemberWorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberWorkouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberWorkouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemberWorkouts
    **/
    _count?: true | MemberWorkoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberWorkoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberWorkoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberWorkoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberWorkoutMaxAggregateInputType
  }

  export type GetMemberWorkoutAggregateType<T extends MemberWorkoutAggregateArgs> = {
        [P in keyof T & keyof AggregateMemberWorkout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemberWorkout[P]>
      : GetScalarType<T[P], AggregateMemberWorkout[P]>
  }




  export type MemberWorkoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWorkoutWhereInput
    orderBy?: MemberWorkoutOrderByWithAggregationInput | MemberWorkoutOrderByWithAggregationInput[]
    by: MemberWorkoutScalarFieldEnum[] | MemberWorkoutScalarFieldEnum
    having?: MemberWorkoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberWorkoutCountAggregateInputType | true
    _avg?: MemberWorkoutAvgAggregateInputType
    _sum?: MemberWorkoutSumAggregateInputType
    _min?: MemberWorkoutMinAggregateInputType
    _max?: MemberWorkoutMaxAggregateInputType
  }

  export type MemberWorkoutGroupByOutputType = {
    id: string
    userId: string
    workoutPlanId: string
    date: Date
    duration: number | null
    caloriesBurned: number | null
    createdAt: Date
    _count: MemberWorkoutCountAggregateOutputType | null
    _avg: MemberWorkoutAvgAggregateOutputType | null
    _sum: MemberWorkoutSumAggregateOutputType | null
    _min: MemberWorkoutMinAggregateOutputType | null
    _max: MemberWorkoutMaxAggregateOutputType | null
  }

  type GetMemberWorkoutGroupByPayload<T extends MemberWorkoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberWorkoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberWorkoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberWorkoutGroupByOutputType[P]>
            : GetScalarType<T[P], MemberWorkoutGroupByOutputType[P]>
        }
      >
    >


  export type MemberWorkoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workoutPlanId?: boolean
    date?: boolean
    duration?: boolean
    caloriesBurned?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workoutPlan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberWorkout"]>

  export type MemberWorkoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workoutPlanId?: boolean
    date?: boolean
    duration?: boolean
    caloriesBurned?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workoutPlan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberWorkout"]>

  export type MemberWorkoutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workoutPlanId?: boolean
    date?: boolean
    duration?: boolean
    caloriesBurned?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workoutPlan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberWorkout"]>

  export type MemberWorkoutSelectScalar = {
    id?: boolean
    userId?: boolean
    workoutPlanId?: boolean
    date?: boolean
    duration?: boolean
    caloriesBurned?: boolean
    createdAt?: boolean
  }

  export type MemberWorkoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "workoutPlanId" | "date" | "duration" | "caloriesBurned" | "createdAt", ExtArgs["result"]["memberWorkout"]>
  export type MemberWorkoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workoutPlan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
  }
  export type MemberWorkoutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workoutPlan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
  }
  export type MemberWorkoutIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workoutPlan?: boolean | WorkoutPlanDefaultArgs<ExtArgs>
  }

  export type $MemberWorkoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemberWorkout"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      workoutPlan: Prisma.$WorkoutPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      workoutPlanId: string
      date: Date
      duration: number | null
      caloriesBurned: number | null
      createdAt: Date
    }, ExtArgs["result"]["memberWorkout"]>
    composites: {}
  }

  type MemberWorkoutGetPayload<S extends boolean | null | undefined | MemberWorkoutDefaultArgs> = $Result.GetResult<Prisma.$MemberWorkoutPayload, S>

  type MemberWorkoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberWorkoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberWorkoutCountAggregateInputType | true
    }

  export interface MemberWorkoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemberWorkout'], meta: { name: 'MemberWorkout' } }
    /**
     * Find zero or one MemberWorkout that matches the filter.
     * @param {MemberWorkoutFindUniqueArgs} args - Arguments to find a MemberWorkout
     * @example
     * // Get one MemberWorkout
     * const memberWorkout = await prisma.memberWorkout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberWorkoutFindUniqueArgs>(args: SelectSubset<T, MemberWorkoutFindUniqueArgs<ExtArgs>>): Prisma__MemberWorkoutClient<$Result.GetResult<Prisma.$MemberWorkoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MemberWorkout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberWorkoutFindUniqueOrThrowArgs} args - Arguments to find a MemberWorkout
     * @example
     * // Get one MemberWorkout
     * const memberWorkout = await prisma.memberWorkout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberWorkoutFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberWorkoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberWorkoutClient<$Result.GetResult<Prisma.$MemberWorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberWorkout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberWorkoutFindFirstArgs} args - Arguments to find a MemberWorkout
     * @example
     * // Get one MemberWorkout
     * const memberWorkout = await prisma.memberWorkout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberWorkoutFindFirstArgs>(args?: SelectSubset<T, MemberWorkoutFindFirstArgs<ExtArgs>>): Prisma__MemberWorkoutClient<$Result.GetResult<Prisma.$MemberWorkoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberWorkout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberWorkoutFindFirstOrThrowArgs} args - Arguments to find a MemberWorkout
     * @example
     * // Get one MemberWorkout
     * const memberWorkout = await prisma.memberWorkout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberWorkoutFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberWorkoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberWorkoutClient<$Result.GetResult<Prisma.$MemberWorkoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MemberWorkouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberWorkoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemberWorkouts
     * const memberWorkouts = await prisma.memberWorkout.findMany()
     * 
     * // Get first 10 MemberWorkouts
     * const memberWorkouts = await prisma.memberWorkout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWorkoutWithIdOnly = await prisma.memberWorkout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberWorkoutFindManyArgs>(args?: SelectSubset<T, MemberWorkoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberWorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MemberWorkout.
     * @param {MemberWorkoutCreateArgs} args - Arguments to create a MemberWorkout.
     * @example
     * // Create one MemberWorkout
     * const MemberWorkout = await prisma.memberWorkout.create({
     *   data: {
     *     // ... data to create a MemberWorkout
     *   }
     * })
     * 
     */
    create<T extends MemberWorkoutCreateArgs>(args: SelectSubset<T, MemberWorkoutCreateArgs<ExtArgs>>): Prisma__MemberWorkoutClient<$Result.GetResult<Prisma.$MemberWorkoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MemberWorkouts.
     * @param {MemberWorkoutCreateManyArgs} args - Arguments to create many MemberWorkouts.
     * @example
     * // Create many MemberWorkouts
     * const memberWorkout = await prisma.memberWorkout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberWorkoutCreateManyArgs>(args?: SelectSubset<T, MemberWorkoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemberWorkouts and returns the data saved in the database.
     * @param {MemberWorkoutCreateManyAndReturnArgs} args - Arguments to create many MemberWorkouts.
     * @example
     * // Create many MemberWorkouts
     * const memberWorkout = await prisma.memberWorkout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemberWorkouts and only return the `id`
     * const memberWorkoutWithIdOnly = await prisma.memberWorkout.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberWorkoutCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberWorkoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberWorkoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MemberWorkout.
     * @param {MemberWorkoutDeleteArgs} args - Arguments to delete one MemberWorkout.
     * @example
     * // Delete one MemberWorkout
     * const MemberWorkout = await prisma.memberWorkout.delete({
     *   where: {
     *     // ... filter to delete one MemberWorkout
     *   }
     * })
     * 
     */
    delete<T extends MemberWorkoutDeleteArgs>(args: SelectSubset<T, MemberWorkoutDeleteArgs<ExtArgs>>): Prisma__MemberWorkoutClient<$Result.GetResult<Prisma.$MemberWorkoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MemberWorkout.
     * @param {MemberWorkoutUpdateArgs} args - Arguments to update one MemberWorkout.
     * @example
     * // Update one MemberWorkout
     * const memberWorkout = await prisma.memberWorkout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberWorkoutUpdateArgs>(args: SelectSubset<T, MemberWorkoutUpdateArgs<ExtArgs>>): Prisma__MemberWorkoutClient<$Result.GetResult<Prisma.$MemberWorkoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MemberWorkouts.
     * @param {MemberWorkoutDeleteManyArgs} args - Arguments to filter MemberWorkouts to delete.
     * @example
     * // Delete a few MemberWorkouts
     * const { count } = await prisma.memberWorkout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberWorkoutDeleteManyArgs>(args?: SelectSubset<T, MemberWorkoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberWorkouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberWorkoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemberWorkouts
     * const memberWorkout = await prisma.memberWorkout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberWorkoutUpdateManyArgs>(args: SelectSubset<T, MemberWorkoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberWorkouts and returns the data updated in the database.
     * @param {MemberWorkoutUpdateManyAndReturnArgs} args - Arguments to update many MemberWorkouts.
     * @example
     * // Update many MemberWorkouts
     * const memberWorkout = await prisma.memberWorkout.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MemberWorkouts and only return the `id`
     * const memberWorkoutWithIdOnly = await prisma.memberWorkout.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MemberWorkoutUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberWorkoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberWorkoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MemberWorkout.
     * @param {MemberWorkoutUpsertArgs} args - Arguments to update or create a MemberWorkout.
     * @example
     * // Update or create a MemberWorkout
     * const memberWorkout = await prisma.memberWorkout.upsert({
     *   create: {
     *     // ... data to create a MemberWorkout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemberWorkout we want to update
     *   }
     * })
     */
    upsert<T extends MemberWorkoutUpsertArgs>(args: SelectSubset<T, MemberWorkoutUpsertArgs<ExtArgs>>): Prisma__MemberWorkoutClient<$Result.GetResult<Prisma.$MemberWorkoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MemberWorkouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberWorkoutCountArgs} args - Arguments to filter MemberWorkouts to count.
     * @example
     * // Count the number of MemberWorkouts
     * const count = await prisma.memberWorkout.count({
     *   where: {
     *     // ... the filter for the MemberWorkouts we want to count
     *   }
     * })
    **/
    count<T extends MemberWorkoutCountArgs>(
      args?: Subset<T, MemberWorkoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberWorkoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemberWorkout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberWorkoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberWorkoutAggregateArgs>(args: Subset<T, MemberWorkoutAggregateArgs>): Prisma.PrismaPromise<GetMemberWorkoutAggregateType<T>>

    /**
     * Group by MemberWorkout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberWorkoutGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberWorkoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberWorkoutGroupByArgs['orderBy'] }
        : { orderBy?: MemberWorkoutGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberWorkoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberWorkoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemberWorkout model
   */
  readonly fields: MemberWorkoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemberWorkout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberWorkoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workoutPlan<T extends WorkoutPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutPlanDefaultArgs<ExtArgs>>): Prisma__WorkoutPlanClient<$Result.GetResult<Prisma.$WorkoutPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MemberWorkout model
   */
  interface MemberWorkoutFieldRefs {
    readonly id: FieldRef<"MemberWorkout", 'String'>
    readonly userId: FieldRef<"MemberWorkout", 'String'>
    readonly workoutPlanId: FieldRef<"MemberWorkout", 'String'>
    readonly date: FieldRef<"MemberWorkout", 'DateTime'>
    readonly duration: FieldRef<"MemberWorkout", 'Int'>
    readonly caloriesBurned: FieldRef<"MemberWorkout", 'Int'>
    readonly createdAt: FieldRef<"MemberWorkout", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MemberWorkout findUnique
   */
  export type MemberWorkoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberWorkout
     */
    select?: MemberWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberWorkout
     */
    omit?: MemberWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberWorkoutInclude<ExtArgs> | null
    /**
     * Filter, which MemberWorkout to fetch.
     */
    where: MemberWorkoutWhereUniqueInput
  }

  /**
   * MemberWorkout findUniqueOrThrow
   */
  export type MemberWorkoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberWorkout
     */
    select?: MemberWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberWorkout
     */
    omit?: MemberWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberWorkoutInclude<ExtArgs> | null
    /**
     * Filter, which MemberWorkout to fetch.
     */
    where: MemberWorkoutWhereUniqueInput
  }

  /**
   * MemberWorkout findFirst
   */
  export type MemberWorkoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberWorkout
     */
    select?: MemberWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberWorkout
     */
    omit?: MemberWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberWorkoutInclude<ExtArgs> | null
    /**
     * Filter, which MemberWorkout to fetch.
     */
    where?: MemberWorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberWorkouts to fetch.
     */
    orderBy?: MemberWorkoutOrderByWithRelationInput | MemberWorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberWorkouts.
     */
    cursor?: MemberWorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberWorkouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberWorkouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberWorkouts.
     */
    distinct?: MemberWorkoutScalarFieldEnum | MemberWorkoutScalarFieldEnum[]
  }

  /**
   * MemberWorkout findFirstOrThrow
   */
  export type MemberWorkoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberWorkout
     */
    select?: MemberWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberWorkout
     */
    omit?: MemberWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberWorkoutInclude<ExtArgs> | null
    /**
     * Filter, which MemberWorkout to fetch.
     */
    where?: MemberWorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberWorkouts to fetch.
     */
    orderBy?: MemberWorkoutOrderByWithRelationInput | MemberWorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberWorkouts.
     */
    cursor?: MemberWorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberWorkouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberWorkouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberWorkouts.
     */
    distinct?: MemberWorkoutScalarFieldEnum | MemberWorkoutScalarFieldEnum[]
  }

  /**
   * MemberWorkout findMany
   */
  export type MemberWorkoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberWorkout
     */
    select?: MemberWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberWorkout
     */
    omit?: MemberWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberWorkoutInclude<ExtArgs> | null
    /**
     * Filter, which MemberWorkouts to fetch.
     */
    where?: MemberWorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberWorkouts to fetch.
     */
    orderBy?: MemberWorkoutOrderByWithRelationInput | MemberWorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemberWorkouts.
     */
    cursor?: MemberWorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberWorkouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberWorkouts.
     */
    skip?: number
    distinct?: MemberWorkoutScalarFieldEnum | MemberWorkoutScalarFieldEnum[]
  }

  /**
   * MemberWorkout create
   */
  export type MemberWorkoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberWorkout
     */
    select?: MemberWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberWorkout
     */
    omit?: MemberWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberWorkoutInclude<ExtArgs> | null
    /**
     * The data needed to create a MemberWorkout.
     */
    data: XOR<MemberWorkoutCreateInput, MemberWorkoutUncheckedCreateInput>
  }

  /**
   * MemberWorkout createMany
   */
  export type MemberWorkoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemberWorkouts.
     */
    data: MemberWorkoutCreateManyInput | MemberWorkoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemberWorkout createManyAndReturn
   */
  export type MemberWorkoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberWorkout
     */
    select?: MemberWorkoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberWorkout
     */
    omit?: MemberWorkoutOmit<ExtArgs> | null
    /**
     * The data used to create many MemberWorkouts.
     */
    data: MemberWorkoutCreateManyInput | MemberWorkoutCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberWorkoutIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemberWorkout update
   */
  export type MemberWorkoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberWorkout
     */
    select?: MemberWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberWorkout
     */
    omit?: MemberWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberWorkoutInclude<ExtArgs> | null
    /**
     * The data needed to update a MemberWorkout.
     */
    data: XOR<MemberWorkoutUpdateInput, MemberWorkoutUncheckedUpdateInput>
    /**
     * Choose, which MemberWorkout to update.
     */
    where: MemberWorkoutWhereUniqueInput
  }

  /**
   * MemberWorkout updateMany
   */
  export type MemberWorkoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemberWorkouts.
     */
    data: XOR<MemberWorkoutUpdateManyMutationInput, MemberWorkoutUncheckedUpdateManyInput>
    /**
     * Filter which MemberWorkouts to update
     */
    where?: MemberWorkoutWhereInput
    /**
     * Limit how many MemberWorkouts to update.
     */
    limit?: number
  }

  /**
   * MemberWorkout updateManyAndReturn
   */
  export type MemberWorkoutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberWorkout
     */
    select?: MemberWorkoutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberWorkout
     */
    omit?: MemberWorkoutOmit<ExtArgs> | null
    /**
     * The data used to update MemberWorkouts.
     */
    data: XOR<MemberWorkoutUpdateManyMutationInput, MemberWorkoutUncheckedUpdateManyInput>
    /**
     * Filter which MemberWorkouts to update
     */
    where?: MemberWorkoutWhereInput
    /**
     * Limit how many MemberWorkouts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberWorkoutIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemberWorkout upsert
   */
  export type MemberWorkoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberWorkout
     */
    select?: MemberWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberWorkout
     */
    omit?: MemberWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberWorkoutInclude<ExtArgs> | null
    /**
     * The filter to search for the MemberWorkout to update in case it exists.
     */
    where: MemberWorkoutWhereUniqueInput
    /**
     * In case the MemberWorkout found by the `where` argument doesn't exist, create a new MemberWorkout with this data.
     */
    create: XOR<MemberWorkoutCreateInput, MemberWorkoutUncheckedCreateInput>
    /**
     * In case the MemberWorkout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberWorkoutUpdateInput, MemberWorkoutUncheckedUpdateInput>
  }

  /**
   * MemberWorkout delete
   */
  export type MemberWorkoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberWorkout
     */
    select?: MemberWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberWorkout
     */
    omit?: MemberWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberWorkoutInclude<ExtArgs> | null
    /**
     * Filter which MemberWorkout to delete.
     */
    where: MemberWorkoutWhereUniqueInput
  }

  /**
   * MemberWorkout deleteMany
   */
  export type MemberWorkoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberWorkouts to delete
     */
    where?: MemberWorkoutWhereInput
    /**
     * Limit how many MemberWorkouts to delete.
     */
    limit?: number
  }

  /**
   * MemberWorkout without action
   */
  export type MemberWorkoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberWorkout
     */
    select?: MemberWorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberWorkout
     */
    omit?: MemberWorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberWorkoutInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutChart
   */

  export type AggregateWorkoutChart = {
    _count: WorkoutChartCountAggregateOutputType | null
    _avg: WorkoutChartAvgAggregateOutputType | null
    _sum: WorkoutChartSumAggregateOutputType | null
    _min: WorkoutChartMinAggregateOutputType | null
    _max: WorkoutChartMaxAggregateOutputType | null
  }

  export type WorkoutChartAvgAggregateOutputType = {
    duration: number | null
    sets: number | null
    reps: number | null
    weight: number | null
  }

  export type WorkoutChartSumAggregateOutputType = {
    duration: number | null
    sets: number | null
    reps: number | null
    weight: number | null
  }

  export type WorkoutChartMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    exercise: string | null
    duration: number | null
    sets: number | null
    reps: number | null
    weight: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type WorkoutChartMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    exercise: string | null
    duration: number | null
    sets: number | null
    reps: number | null
    weight: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type WorkoutChartCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    exercise: number
    duration: number
    sets: number
    reps: number
    weight: number
    notes: number
    createdAt: number
    _all: number
  }


  export type WorkoutChartAvgAggregateInputType = {
    duration?: true
    sets?: true
    reps?: true
    weight?: true
  }

  export type WorkoutChartSumAggregateInputType = {
    duration?: true
    sets?: true
    reps?: true
    weight?: true
  }

  export type WorkoutChartMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    exercise?: true
    duration?: true
    sets?: true
    reps?: true
    weight?: true
    notes?: true
    createdAt?: true
  }

  export type WorkoutChartMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    exercise?: true
    duration?: true
    sets?: true
    reps?: true
    weight?: true
    notes?: true
    createdAt?: true
  }

  export type WorkoutChartCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    exercise?: true
    duration?: true
    sets?: true
    reps?: true
    weight?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type WorkoutChartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutChart to aggregate.
     */
    where?: WorkoutChartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutCharts to fetch.
     */
    orderBy?: WorkoutChartOrderByWithRelationInput | WorkoutChartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutChartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutCharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutCharts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutCharts
    **/
    _count?: true | WorkoutChartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutChartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutChartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutChartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutChartMaxAggregateInputType
  }

  export type GetWorkoutChartAggregateType<T extends WorkoutChartAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutChart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutChart[P]>
      : GetScalarType<T[P], AggregateWorkoutChart[P]>
  }




  export type WorkoutChartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutChartWhereInput
    orderBy?: WorkoutChartOrderByWithAggregationInput | WorkoutChartOrderByWithAggregationInput[]
    by: WorkoutChartScalarFieldEnum[] | WorkoutChartScalarFieldEnum
    having?: WorkoutChartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutChartCountAggregateInputType | true
    _avg?: WorkoutChartAvgAggregateInputType
    _sum?: WorkoutChartSumAggregateInputType
    _min?: WorkoutChartMinAggregateInputType
    _max?: WorkoutChartMaxAggregateInputType
  }

  export type WorkoutChartGroupByOutputType = {
    id: string
    userId: string
    date: Date
    exercise: string
    duration: number | null
    sets: number | null
    reps: number | null
    weight: number | null
    notes: string | null
    createdAt: Date
    _count: WorkoutChartCountAggregateOutputType | null
    _avg: WorkoutChartAvgAggregateOutputType | null
    _sum: WorkoutChartSumAggregateOutputType | null
    _min: WorkoutChartMinAggregateOutputType | null
    _max: WorkoutChartMaxAggregateOutputType | null
  }

  type GetWorkoutChartGroupByPayload<T extends WorkoutChartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutChartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutChartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutChartGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutChartGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutChartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    exercise?: boolean
    duration?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    notes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutChart"]>

  export type WorkoutChartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    exercise?: boolean
    duration?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    notes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutChart"]>

  export type WorkoutChartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    exercise?: boolean
    duration?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    notes?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutChart"]>

  export type WorkoutChartSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    exercise?: boolean
    duration?: boolean
    sets?: boolean
    reps?: boolean
    weight?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type WorkoutChartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "exercise" | "duration" | "sets" | "reps" | "weight" | "notes" | "createdAt", ExtArgs["result"]["workoutChart"]>
  export type WorkoutChartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkoutChartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkoutChartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkoutChartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutChart"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      exercise: string
      duration: number | null
      sets: number | null
      reps: number | null
      weight: number | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["workoutChart"]>
    composites: {}
  }

  type WorkoutChartGetPayload<S extends boolean | null | undefined | WorkoutChartDefaultArgs> = $Result.GetResult<Prisma.$WorkoutChartPayload, S>

  type WorkoutChartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutChartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutChartCountAggregateInputType | true
    }

  export interface WorkoutChartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutChart'], meta: { name: 'WorkoutChart' } }
    /**
     * Find zero or one WorkoutChart that matches the filter.
     * @param {WorkoutChartFindUniqueArgs} args - Arguments to find a WorkoutChart
     * @example
     * // Get one WorkoutChart
     * const workoutChart = await prisma.workoutChart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutChartFindUniqueArgs>(args: SelectSubset<T, WorkoutChartFindUniqueArgs<ExtArgs>>): Prisma__WorkoutChartClient<$Result.GetResult<Prisma.$WorkoutChartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutChart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutChartFindUniqueOrThrowArgs} args - Arguments to find a WorkoutChart
     * @example
     * // Get one WorkoutChart
     * const workoutChart = await prisma.workoutChart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutChartFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutChartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutChartClient<$Result.GetResult<Prisma.$WorkoutChartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutChart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutChartFindFirstArgs} args - Arguments to find a WorkoutChart
     * @example
     * // Get one WorkoutChart
     * const workoutChart = await prisma.workoutChart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutChartFindFirstArgs>(args?: SelectSubset<T, WorkoutChartFindFirstArgs<ExtArgs>>): Prisma__WorkoutChartClient<$Result.GetResult<Prisma.$WorkoutChartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutChart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutChartFindFirstOrThrowArgs} args - Arguments to find a WorkoutChart
     * @example
     * // Get one WorkoutChart
     * const workoutChart = await prisma.workoutChart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutChartFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutChartFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutChartClient<$Result.GetResult<Prisma.$WorkoutChartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutCharts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutChartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutCharts
     * const workoutCharts = await prisma.workoutChart.findMany()
     * 
     * // Get first 10 WorkoutCharts
     * const workoutCharts = await prisma.workoutChart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutChartWithIdOnly = await prisma.workoutChart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutChartFindManyArgs>(args?: SelectSubset<T, WorkoutChartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutChartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutChart.
     * @param {WorkoutChartCreateArgs} args - Arguments to create a WorkoutChart.
     * @example
     * // Create one WorkoutChart
     * const WorkoutChart = await prisma.workoutChart.create({
     *   data: {
     *     // ... data to create a WorkoutChart
     *   }
     * })
     * 
     */
    create<T extends WorkoutChartCreateArgs>(args: SelectSubset<T, WorkoutChartCreateArgs<ExtArgs>>): Prisma__WorkoutChartClient<$Result.GetResult<Prisma.$WorkoutChartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutCharts.
     * @param {WorkoutChartCreateManyArgs} args - Arguments to create many WorkoutCharts.
     * @example
     * // Create many WorkoutCharts
     * const workoutChart = await prisma.workoutChart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutChartCreateManyArgs>(args?: SelectSubset<T, WorkoutChartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutCharts and returns the data saved in the database.
     * @param {WorkoutChartCreateManyAndReturnArgs} args - Arguments to create many WorkoutCharts.
     * @example
     * // Create many WorkoutCharts
     * const workoutChart = await prisma.workoutChart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutCharts and only return the `id`
     * const workoutChartWithIdOnly = await prisma.workoutChart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutChartCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutChartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutChartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutChart.
     * @param {WorkoutChartDeleteArgs} args - Arguments to delete one WorkoutChart.
     * @example
     * // Delete one WorkoutChart
     * const WorkoutChart = await prisma.workoutChart.delete({
     *   where: {
     *     // ... filter to delete one WorkoutChart
     *   }
     * })
     * 
     */
    delete<T extends WorkoutChartDeleteArgs>(args: SelectSubset<T, WorkoutChartDeleteArgs<ExtArgs>>): Prisma__WorkoutChartClient<$Result.GetResult<Prisma.$WorkoutChartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutChart.
     * @param {WorkoutChartUpdateArgs} args - Arguments to update one WorkoutChart.
     * @example
     * // Update one WorkoutChart
     * const workoutChart = await prisma.workoutChart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutChartUpdateArgs>(args: SelectSubset<T, WorkoutChartUpdateArgs<ExtArgs>>): Prisma__WorkoutChartClient<$Result.GetResult<Prisma.$WorkoutChartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutCharts.
     * @param {WorkoutChartDeleteManyArgs} args - Arguments to filter WorkoutCharts to delete.
     * @example
     * // Delete a few WorkoutCharts
     * const { count } = await prisma.workoutChart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutChartDeleteManyArgs>(args?: SelectSubset<T, WorkoutChartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutCharts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutChartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutCharts
     * const workoutChart = await prisma.workoutChart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutChartUpdateManyArgs>(args: SelectSubset<T, WorkoutChartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutCharts and returns the data updated in the database.
     * @param {WorkoutChartUpdateManyAndReturnArgs} args - Arguments to update many WorkoutCharts.
     * @example
     * // Update many WorkoutCharts
     * const workoutChart = await prisma.workoutChart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutCharts and only return the `id`
     * const workoutChartWithIdOnly = await prisma.workoutChart.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkoutChartUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutChartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutChartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutChart.
     * @param {WorkoutChartUpsertArgs} args - Arguments to update or create a WorkoutChart.
     * @example
     * // Update or create a WorkoutChart
     * const workoutChart = await prisma.workoutChart.upsert({
     *   create: {
     *     // ... data to create a WorkoutChart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutChart we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutChartUpsertArgs>(args: SelectSubset<T, WorkoutChartUpsertArgs<ExtArgs>>): Prisma__WorkoutChartClient<$Result.GetResult<Prisma.$WorkoutChartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutCharts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutChartCountArgs} args - Arguments to filter WorkoutCharts to count.
     * @example
     * // Count the number of WorkoutCharts
     * const count = await prisma.workoutChart.count({
     *   where: {
     *     // ... the filter for the WorkoutCharts we want to count
     *   }
     * })
    **/
    count<T extends WorkoutChartCountArgs>(
      args?: Subset<T, WorkoutChartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutChartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutChart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutChartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkoutChartAggregateArgs>(args: Subset<T, WorkoutChartAggregateArgs>): Prisma.PrismaPromise<GetWorkoutChartAggregateType<T>>

    /**
     * Group by WorkoutChart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutChartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkoutChartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutChartGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutChartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkoutChartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutChartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutChart model
   */
  readonly fields: WorkoutChartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutChart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutChartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkoutChart model
   */
  interface WorkoutChartFieldRefs {
    readonly id: FieldRef<"WorkoutChart", 'String'>
    readonly userId: FieldRef<"WorkoutChart", 'String'>
    readonly date: FieldRef<"WorkoutChart", 'DateTime'>
    readonly exercise: FieldRef<"WorkoutChart", 'String'>
    readonly duration: FieldRef<"WorkoutChart", 'Int'>
    readonly sets: FieldRef<"WorkoutChart", 'Int'>
    readonly reps: FieldRef<"WorkoutChart", 'Int'>
    readonly weight: FieldRef<"WorkoutChart", 'Float'>
    readonly notes: FieldRef<"WorkoutChart", 'String'>
    readonly createdAt: FieldRef<"WorkoutChart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutChart findUnique
   */
  export type WorkoutChartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutChart
     */
    select?: WorkoutChartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutChart
     */
    omit?: WorkoutChartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutChartInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutChart to fetch.
     */
    where: WorkoutChartWhereUniqueInput
  }

  /**
   * WorkoutChart findUniqueOrThrow
   */
  export type WorkoutChartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutChart
     */
    select?: WorkoutChartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutChart
     */
    omit?: WorkoutChartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutChartInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutChart to fetch.
     */
    where: WorkoutChartWhereUniqueInput
  }

  /**
   * WorkoutChart findFirst
   */
  export type WorkoutChartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutChart
     */
    select?: WorkoutChartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutChart
     */
    omit?: WorkoutChartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutChartInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutChart to fetch.
     */
    where?: WorkoutChartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutCharts to fetch.
     */
    orderBy?: WorkoutChartOrderByWithRelationInput | WorkoutChartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutCharts.
     */
    cursor?: WorkoutChartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutCharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutCharts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutCharts.
     */
    distinct?: WorkoutChartScalarFieldEnum | WorkoutChartScalarFieldEnum[]
  }

  /**
   * WorkoutChart findFirstOrThrow
   */
  export type WorkoutChartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutChart
     */
    select?: WorkoutChartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutChart
     */
    omit?: WorkoutChartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutChartInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutChart to fetch.
     */
    where?: WorkoutChartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutCharts to fetch.
     */
    orderBy?: WorkoutChartOrderByWithRelationInput | WorkoutChartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutCharts.
     */
    cursor?: WorkoutChartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutCharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutCharts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutCharts.
     */
    distinct?: WorkoutChartScalarFieldEnum | WorkoutChartScalarFieldEnum[]
  }

  /**
   * WorkoutChart findMany
   */
  export type WorkoutChartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutChart
     */
    select?: WorkoutChartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutChart
     */
    omit?: WorkoutChartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutChartInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutCharts to fetch.
     */
    where?: WorkoutChartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutCharts to fetch.
     */
    orderBy?: WorkoutChartOrderByWithRelationInput | WorkoutChartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutCharts.
     */
    cursor?: WorkoutChartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutCharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutCharts.
     */
    skip?: number
    distinct?: WorkoutChartScalarFieldEnum | WorkoutChartScalarFieldEnum[]
  }

  /**
   * WorkoutChart create
   */
  export type WorkoutChartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutChart
     */
    select?: WorkoutChartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutChart
     */
    omit?: WorkoutChartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutChartInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutChart.
     */
    data: XOR<WorkoutChartCreateInput, WorkoutChartUncheckedCreateInput>
  }

  /**
   * WorkoutChart createMany
   */
  export type WorkoutChartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutCharts.
     */
    data: WorkoutChartCreateManyInput | WorkoutChartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutChart createManyAndReturn
   */
  export type WorkoutChartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutChart
     */
    select?: WorkoutChartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutChart
     */
    omit?: WorkoutChartOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutCharts.
     */
    data: WorkoutChartCreateManyInput | WorkoutChartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutChartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutChart update
   */
  export type WorkoutChartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutChart
     */
    select?: WorkoutChartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutChart
     */
    omit?: WorkoutChartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutChartInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutChart.
     */
    data: XOR<WorkoutChartUpdateInput, WorkoutChartUncheckedUpdateInput>
    /**
     * Choose, which WorkoutChart to update.
     */
    where: WorkoutChartWhereUniqueInput
  }

  /**
   * WorkoutChart updateMany
   */
  export type WorkoutChartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutCharts.
     */
    data: XOR<WorkoutChartUpdateManyMutationInput, WorkoutChartUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutCharts to update
     */
    where?: WorkoutChartWhereInput
    /**
     * Limit how many WorkoutCharts to update.
     */
    limit?: number
  }

  /**
   * WorkoutChart updateManyAndReturn
   */
  export type WorkoutChartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutChart
     */
    select?: WorkoutChartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutChart
     */
    omit?: WorkoutChartOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutCharts.
     */
    data: XOR<WorkoutChartUpdateManyMutationInput, WorkoutChartUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutCharts to update
     */
    where?: WorkoutChartWhereInput
    /**
     * Limit how many WorkoutCharts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutChartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutChart upsert
   */
  export type WorkoutChartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutChart
     */
    select?: WorkoutChartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutChart
     */
    omit?: WorkoutChartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutChartInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutChart to update in case it exists.
     */
    where: WorkoutChartWhereUniqueInput
    /**
     * In case the WorkoutChart found by the `where` argument doesn't exist, create a new WorkoutChart with this data.
     */
    create: XOR<WorkoutChartCreateInput, WorkoutChartUncheckedCreateInput>
    /**
     * In case the WorkoutChart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutChartUpdateInput, WorkoutChartUncheckedUpdateInput>
  }

  /**
   * WorkoutChart delete
   */
  export type WorkoutChartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutChart
     */
    select?: WorkoutChartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutChart
     */
    omit?: WorkoutChartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutChartInclude<ExtArgs> | null
    /**
     * Filter which WorkoutChart to delete.
     */
    where: WorkoutChartWhereUniqueInput
  }

  /**
   * WorkoutChart deleteMany
   */
  export type WorkoutChartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutCharts to delete
     */
    where?: WorkoutChartWhereInput
    /**
     * Limit how many WorkoutCharts to delete.
     */
    limit?: number
  }

  /**
   * WorkoutChart without action
   */
  export type WorkoutChartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutChart
     */
    select?: WorkoutChartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutChart
     */
    omit?: WorkoutChartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutChartInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: Decimal | null
    paymentDate: Date | null
    paymentMethod: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: Decimal | null
    paymentDate: Date | null
    paymentMethod: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    paymentDate: number
    paymentMethod: number
    status: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    paymentDate?: true
    paymentMethod?: true
    status?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    paymentDate?: true
    paymentMethod?: true
    status?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    paymentDate?: true
    paymentMethod?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    userId: string
    amount: Decimal
    paymentDate: Date
    paymentMethod: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    paymentDate?: boolean
    paymentMethod?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    paymentDate?: boolean
    paymentMethod?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    paymentDate?: boolean
    paymentMethod?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    paymentDate?: boolean
    paymentMethod?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "paymentDate" | "paymentMethod" | "status" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: Prisma.Decimal
      paymentDate: Date
      paymentMethod: $Enums.PaymentMethod
      status: $Enums.PaymentStatus
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly paymentDate: FieldRef<"Payment", 'DateTime'>
    readonly paymentMethod: FieldRef<"Payment", 'PaymentMethod'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expiresAt: number | null
  }

  export type AccountSumAggregateOutputType = {
    expiresAt: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: $Enums.AuthProvider | null
    providerAccountId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: $Enums.AuthProvider | null
    providerAccountId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    providerAccountId: number
    accessToken: number
    refreshToken: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expiresAt?: true
  }

  export type AccountSumAggregateInputType = {
    expiresAt?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    provider: $Enums.AuthProvider
    providerAccountId: string
    accessToken: string | null
    refreshToken: string | null
    expiresAt: number | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "provider" | "providerAccountId" | "accessToken" | "refreshToken" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      provider: $Enums.AuthProvider
      providerAccountId: string
      accessToken: string | null
      refreshToken: string | null
      expiresAt: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'AuthProvider'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly expiresAt: FieldRef<"Account", 'Int'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model BodyMetric
   */

  export type AggregateBodyMetric = {
    _count: BodyMetricCountAggregateOutputType | null
    _avg: BodyMetricAvgAggregateOutputType | null
    _sum: BodyMetricSumAggregateOutputType | null
    _min: BodyMetricMinAggregateOutputType | null
    _max: BodyMetricMaxAggregateOutputType | null
  }

  export type BodyMetricAvgAggregateOutputType = {
    weight: number | null
    height: number | null
    bmi: number | null
  }

  export type BodyMetricSumAggregateOutputType = {
    weight: number | null
    height: number | null
    bmi: number | null
  }

  export type BodyMetricMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    weight: number | null
    height: number | null
    bmi: number | null
    createdAt: Date | null
  }

  export type BodyMetricMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    weight: number | null
    height: number | null
    bmi: number | null
    createdAt: Date | null
  }

  export type BodyMetricCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    weight: number
    height: number
    bmi: number
    createdAt: number
    _all: number
  }


  export type BodyMetricAvgAggregateInputType = {
    weight?: true
    height?: true
    bmi?: true
  }

  export type BodyMetricSumAggregateInputType = {
    weight?: true
    height?: true
    bmi?: true
  }

  export type BodyMetricMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    weight?: true
    height?: true
    bmi?: true
    createdAt?: true
  }

  export type BodyMetricMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    weight?: true
    height?: true
    bmi?: true
    createdAt?: true
  }

  export type BodyMetricCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    weight?: true
    height?: true
    bmi?: true
    createdAt?: true
    _all?: true
  }

  export type BodyMetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BodyMetric to aggregate.
     */
    where?: BodyMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMetrics to fetch.
     */
    orderBy?: BodyMetricOrderByWithRelationInput | BodyMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BodyMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BodyMetrics
    **/
    _count?: true | BodyMetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BodyMetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BodyMetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BodyMetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BodyMetricMaxAggregateInputType
  }

  export type GetBodyMetricAggregateType<T extends BodyMetricAggregateArgs> = {
        [P in keyof T & keyof AggregateBodyMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBodyMetric[P]>
      : GetScalarType<T[P], AggregateBodyMetric[P]>
  }




  export type BodyMetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BodyMetricWhereInput
    orderBy?: BodyMetricOrderByWithAggregationInput | BodyMetricOrderByWithAggregationInput[]
    by: BodyMetricScalarFieldEnum[] | BodyMetricScalarFieldEnum
    having?: BodyMetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BodyMetricCountAggregateInputType | true
    _avg?: BodyMetricAvgAggregateInputType
    _sum?: BodyMetricSumAggregateInputType
    _min?: BodyMetricMinAggregateInputType
    _max?: BodyMetricMaxAggregateInputType
  }

  export type BodyMetricGroupByOutputType = {
    id: string
    userId: string
    date: Date
    weight: number | null
    height: number | null
    bmi: number | null
    createdAt: Date
    _count: BodyMetricCountAggregateOutputType | null
    _avg: BodyMetricAvgAggregateOutputType | null
    _sum: BodyMetricSumAggregateOutputType | null
    _min: BodyMetricMinAggregateOutputType | null
    _max: BodyMetricMaxAggregateOutputType | null
  }

  type GetBodyMetricGroupByPayload<T extends BodyMetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BodyMetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BodyMetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BodyMetricGroupByOutputType[P]>
            : GetScalarType<T[P], BodyMetricGroupByOutputType[P]>
        }
      >
    >


  export type BodyMetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    weight?: boolean
    height?: boolean
    bmi?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bodyMetric"]>

  export type BodyMetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    weight?: boolean
    height?: boolean
    bmi?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bodyMetric"]>

  export type BodyMetricSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    weight?: boolean
    height?: boolean
    bmi?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bodyMetric"]>

  export type BodyMetricSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    weight?: boolean
    height?: boolean
    bmi?: boolean
    createdAt?: boolean
  }

  export type BodyMetricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "weight" | "height" | "bmi" | "createdAt", ExtArgs["result"]["bodyMetric"]>
  export type BodyMetricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BodyMetricIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BodyMetricIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BodyMetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BodyMetric"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      weight: number | null
      height: number | null
      bmi: number | null
      createdAt: Date
    }, ExtArgs["result"]["bodyMetric"]>
    composites: {}
  }

  type BodyMetricGetPayload<S extends boolean | null | undefined | BodyMetricDefaultArgs> = $Result.GetResult<Prisma.$BodyMetricPayload, S>

  type BodyMetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BodyMetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BodyMetricCountAggregateInputType | true
    }

  export interface BodyMetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BodyMetric'], meta: { name: 'BodyMetric' } }
    /**
     * Find zero or one BodyMetric that matches the filter.
     * @param {BodyMetricFindUniqueArgs} args - Arguments to find a BodyMetric
     * @example
     * // Get one BodyMetric
     * const bodyMetric = await prisma.bodyMetric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BodyMetricFindUniqueArgs>(args: SelectSubset<T, BodyMetricFindUniqueArgs<ExtArgs>>): Prisma__BodyMetricClient<$Result.GetResult<Prisma.$BodyMetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BodyMetric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BodyMetricFindUniqueOrThrowArgs} args - Arguments to find a BodyMetric
     * @example
     * // Get one BodyMetric
     * const bodyMetric = await prisma.bodyMetric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BodyMetricFindUniqueOrThrowArgs>(args: SelectSubset<T, BodyMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BodyMetricClient<$Result.GetResult<Prisma.$BodyMetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BodyMetric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMetricFindFirstArgs} args - Arguments to find a BodyMetric
     * @example
     * // Get one BodyMetric
     * const bodyMetric = await prisma.bodyMetric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BodyMetricFindFirstArgs>(args?: SelectSubset<T, BodyMetricFindFirstArgs<ExtArgs>>): Prisma__BodyMetricClient<$Result.GetResult<Prisma.$BodyMetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BodyMetric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMetricFindFirstOrThrowArgs} args - Arguments to find a BodyMetric
     * @example
     * // Get one BodyMetric
     * const bodyMetric = await prisma.bodyMetric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BodyMetricFindFirstOrThrowArgs>(args?: SelectSubset<T, BodyMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__BodyMetricClient<$Result.GetResult<Prisma.$BodyMetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BodyMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BodyMetrics
     * const bodyMetrics = await prisma.bodyMetric.findMany()
     * 
     * // Get first 10 BodyMetrics
     * const bodyMetrics = await prisma.bodyMetric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bodyMetricWithIdOnly = await prisma.bodyMetric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BodyMetricFindManyArgs>(args?: SelectSubset<T, BodyMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BodyMetric.
     * @param {BodyMetricCreateArgs} args - Arguments to create a BodyMetric.
     * @example
     * // Create one BodyMetric
     * const BodyMetric = await prisma.bodyMetric.create({
     *   data: {
     *     // ... data to create a BodyMetric
     *   }
     * })
     * 
     */
    create<T extends BodyMetricCreateArgs>(args: SelectSubset<T, BodyMetricCreateArgs<ExtArgs>>): Prisma__BodyMetricClient<$Result.GetResult<Prisma.$BodyMetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BodyMetrics.
     * @param {BodyMetricCreateManyArgs} args - Arguments to create many BodyMetrics.
     * @example
     * // Create many BodyMetrics
     * const bodyMetric = await prisma.bodyMetric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BodyMetricCreateManyArgs>(args?: SelectSubset<T, BodyMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BodyMetrics and returns the data saved in the database.
     * @param {BodyMetricCreateManyAndReturnArgs} args - Arguments to create many BodyMetrics.
     * @example
     * // Create many BodyMetrics
     * const bodyMetric = await prisma.bodyMetric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BodyMetrics and only return the `id`
     * const bodyMetricWithIdOnly = await prisma.bodyMetric.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BodyMetricCreateManyAndReturnArgs>(args?: SelectSubset<T, BodyMetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyMetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BodyMetric.
     * @param {BodyMetricDeleteArgs} args - Arguments to delete one BodyMetric.
     * @example
     * // Delete one BodyMetric
     * const BodyMetric = await prisma.bodyMetric.delete({
     *   where: {
     *     // ... filter to delete one BodyMetric
     *   }
     * })
     * 
     */
    delete<T extends BodyMetricDeleteArgs>(args: SelectSubset<T, BodyMetricDeleteArgs<ExtArgs>>): Prisma__BodyMetricClient<$Result.GetResult<Prisma.$BodyMetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BodyMetric.
     * @param {BodyMetricUpdateArgs} args - Arguments to update one BodyMetric.
     * @example
     * // Update one BodyMetric
     * const bodyMetric = await prisma.bodyMetric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BodyMetricUpdateArgs>(args: SelectSubset<T, BodyMetricUpdateArgs<ExtArgs>>): Prisma__BodyMetricClient<$Result.GetResult<Prisma.$BodyMetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BodyMetrics.
     * @param {BodyMetricDeleteManyArgs} args - Arguments to filter BodyMetrics to delete.
     * @example
     * // Delete a few BodyMetrics
     * const { count } = await prisma.bodyMetric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BodyMetricDeleteManyArgs>(args?: SelectSubset<T, BodyMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BodyMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BodyMetrics
     * const bodyMetric = await prisma.bodyMetric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BodyMetricUpdateManyArgs>(args: SelectSubset<T, BodyMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BodyMetrics and returns the data updated in the database.
     * @param {BodyMetricUpdateManyAndReturnArgs} args - Arguments to update many BodyMetrics.
     * @example
     * // Update many BodyMetrics
     * const bodyMetric = await prisma.bodyMetric.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BodyMetrics and only return the `id`
     * const bodyMetricWithIdOnly = await prisma.bodyMetric.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BodyMetricUpdateManyAndReturnArgs>(args: SelectSubset<T, BodyMetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyMetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BodyMetric.
     * @param {BodyMetricUpsertArgs} args - Arguments to update or create a BodyMetric.
     * @example
     * // Update or create a BodyMetric
     * const bodyMetric = await prisma.bodyMetric.upsert({
     *   create: {
     *     // ... data to create a BodyMetric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BodyMetric we want to update
     *   }
     * })
     */
    upsert<T extends BodyMetricUpsertArgs>(args: SelectSubset<T, BodyMetricUpsertArgs<ExtArgs>>): Prisma__BodyMetricClient<$Result.GetResult<Prisma.$BodyMetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BodyMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMetricCountArgs} args - Arguments to filter BodyMetrics to count.
     * @example
     * // Count the number of BodyMetrics
     * const count = await prisma.bodyMetric.count({
     *   where: {
     *     // ... the filter for the BodyMetrics we want to count
     *   }
     * })
    **/
    count<T extends BodyMetricCountArgs>(
      args?: Subset<T, BodyMetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BodyMetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BodyMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BodyMetricAggregateArgs>(args: Subset<T, BodyMetricAggregateArgs>): Prisma.PrismaPromise<GetBodyMetricAggregateType<T>>

    /**
     * Group by BodyMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMetricGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BodyMetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BodyMetricGroupByArgs['orderBy'] }
        : { orderBy?: BodyMetricGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BodyMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBodyMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BodyMetric model
   */
  readonly fields: BodyMetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BodyMetric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BodyMetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BodyMetric model
   */
  interface BodyMetricFieldRefs {
    readonly id: FieldRef<"BodyMetric", 'String'>
    readonly userId: FieldRef<"BodyMetric", 'String'>
    readonly date: FieldRef<"BodyMetric", 'DateTime'>
    readonly weight: FieldRef<"BodyMetric", 'Float'>
    readonly height: FieldRef<"BodyMetric", 'Float'>
    readonly bmi: FieldRef<"BodyMetric", 'Float'>
    readonly createdAt: FieldRef<"BodyMetric", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BodyMetric findUnique
   */
  export type BodyMetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetric
     */
    select?: BodyMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMetric
     */
    omit?: BodyMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMetricInclude<ExtArgs> | null
    /**
     * Filter, which BodyMetric to fetch.
     */
    where: BodyMetricWhereUniqueInput
  }

  /**
   * BodyMetric findUniqueOrThrow
   */
  export type BodyMetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetric
     */
    select?: BodyMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMetric
     */
    omit?: BodyMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMetricInclude<ExtArgs> | null
    /**
     * Filter, which BodyMetric to fetch.
     */
    where: BodyMetricWhereUniqueInput
  }

  /**
   * BodyMetric findFirst
   */
  export type BodyMetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetric
     */
    select?: BodyMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMetric
     */
    omit?: BodyMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMetricInclude<ExtArgs> | null
    /**
     * Filter, which BodyMetric to fetch.
     */
    where?: BodyMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMetrics to fetch.
     */
    orderBy?: BodyMetricOrderByWithRelationInput | BodyMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BodyMetrics.
     */
    cursor?: BodyMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BodyMetrics.
     */
    distinct?: BodyMetricScalarFieldEnum | BodyMetricScalarFieldEnum[]
  }

  /**
   * BodyMetric findFirstOrThrow
   */
  export type BodyMetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetric
     */
    select?: BodyMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMetric
     */
    omit?: BodyMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMetricInclude<ExtArgs> | null
    /**
     * Filter, which BodyMetric to fetch.
     */
    where?: BodyMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMetrics to fetch.
     */
    orderBy?: BodyMetricOrderByWithRelationInput | BodyMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BodyMetrics.
     */
    cursor?: BodyMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BodyMetrics.
     */
    distinct?: BodyMetricScalarFieldEnum | BodyMetricScalarFieldEnum[]
  }

  /**
   * BodyMetric findMany
   */
  export type BodyMetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetric
     */
    select?: BodyMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMetric
     */
    omit?: BodyMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMetricInclude<ExtArgs> | null
    /**
     * Filter, which BodyMetrics to fetch.
     */
    where?: BodyMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMetrics to fetch.
     */
    orderBy?: BodyMetricOrderByWithRelationInput | BodyMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BodyMetrics.
     */
    cursor?: BodyMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMetrics.
     */
    skip?: number
    distinct?: BodyMetricScalarFieldEnum | BodyMetricScalarFieldEnum[]
  }

  /**
   * BodyMetric create
   */
  export type BodyMetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetric
     */
    select?: BodyMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMetric
     */
    omit?: BodyMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMetricInclude<ExtArgs> | null
    /**
     * The data needed to create a BodyMetric.
     */
    data: XOR<BodyMetricCreateInput, BodyMetricUncheckedCreateInput>
  }

  /**
   * BodyMetric createMany
   */
  export type BodyMetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BodyMetrics.
     */
    data: BodyMetricCreateManyInput | BodyMetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BodyMetric createManyAndReturn
   */
  export type BodyMetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetric
     */
    select?: BodyMetricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMetric
     */
    omit?: BodyMetricOmit<ExtArgs> | null
    /**
     * The data used to create many BodyMetrics.
     */
    data: BodyMetricCreateManyInput | BodyMetricCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMetricIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BodyMetric update
   */
  export type BodyMetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetric
     */
    select?: BodyMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMetric
     */
    omit?: BodyMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMetricInclude<ExtArgs> | null
    /**
     * The data needed to update a BodyMetric.
     */
    data: XOR<BodyMetricUpdateInput, BodyMetricUncheckedUpdateInput>
    /**
     * Choose, which BodyMetric to update.
     */
    where: BodyMetricWhereUniqueInput
  }

  /**
   * BodyMetric updateMany
   */
  export type BodyMetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BodyMetrics.
     */
    data: XOR<BodyMetricUpdateManyMutationInput, BodyMetricUncheckedUpdateManyInput>
    /**
     * Filter which BodyMetrics to update
     */
    where?: BodyMetricWhereInput
    /**
     * Limit how many BodyMetrics to update.
     */
    limit?: number
  }

  /**
   * BodyMetric updateManyAndReturn
   */
  export type BodyMetricUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetric
     */
    select?: BodyMetricSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMetric
     */
    omit?: BodyMetricOmit<ExtArgs> | null
    /**
     * The data used to update BodyMetrics.
     */
    data: XOR<BodyMetricUpdateManyMutationInput, BodyMetricUncheckedUpdateManyInput>
    /**
     * Filter which BodyMetrics to update
     */
    where?: BodyMetricWhereInput
    /**
     * Limit how many BodyMetrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMetricIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BodyMetric upsert
   */
  export type BodyMetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetric
     */
    select?: BodyMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMetric
     */
    omit?: BodyMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMetricInclude<ExtArgs> | null
    /**
     * The filter to search for the BodyMetric to update in case it exists.
     */
    where: BodyMetricWhereUniqueInput
    /**
     * In case the BodyMetric found by the `where` argument doesn't exist, create a new BodyMetric with this data.
     */
    create: XOR<BodyMetricCreateInput, BodyMetricUncheckedCreateInput>
    /**
     * In case the BodyMetric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BodyMetricUpdateInput, BodyMetricUncheckedUpdateInput>
  }

  /**
   * BodyMetric delete
   */
  export type BodyMetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetric
     */
    select?: BodyMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMetric
     */
    omit?: BodyMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMetricInclude<ExtArgs> | null
    /**
     * Filter which BodyMetric to delete.
     */
    where: BodyMetricWhereUniqueInput
  }

  /**
   * BodyMetric deleteMany
   */
  export type BodyMetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BodyMetrics to delete
     */
    where?: BodyMetricWhereInput
    /**
     * Limit how many BodyMetrics to delete.
     */
    limit?: number
  }

  /**
   * BodyMetric without action
   */
  export type BodyMetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetric
     */
    select?: BodyMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMetric
     */
    omit?: BodyMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMetricInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    height: 'height',
    weight: 'weight',
    joinedAt: 'joinedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const MembershipScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    membershipType: 'membershipType',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type MembershipScalarFieldEnum = (typeof MembershipScalarFieldEnum)[keyof typeof MembershipScalarFieldEnum]


  export const WorkoutPlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    trainerId: 'trainerId',
    createdAt: 'createdAt'
  };

  export type WorkoutPlanScalarFieldEnum = (typeof WorkoutPlanScalarFieldEnum)[keyof typeof WorkoutPlanScalarFieldEnum]


  export const MemberWorkoutScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    workoutPlanId: 'workoutPlanId',
    date: 'date',
    duration: 'duration',
    caloriesBurned: 'caloriesBurned',
    createdAt: 'createdAt'
  };

  export type MemberWorkoutScalarFieldEnum = (typeof MemberWorkoutScalarFieldEnum)[keyof typeof MemberWorkoutScalarFieldEnum]


  export const WorkoutChartScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    exercise: 'exercise',
    duration: 'duration',
    sets: 'sets',
    reps: 'reps',
    weight: 'weight',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type WorkoutChartScalarFieldEnum = (typeof WorkoutChartScalarFieldEnum)[keyof typeof WorkoutChartScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    paymentDate: 'paymentDate',
    paymentMethod: 'paymentMethod',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const BodyMetricScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    weight: 'weight',
    height: 'height',
    bmi: 'bmi',
    createdAt: 'createdAt'
  };

  export type BodyMetricScalarFieldEnum = (typeof BodyMetricScalarFieldEnum)[keyof typeof BodyMetricScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'MembershipType'
   */
  export type EnumMembershipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MembershipType'>
    


  /**
   * Reference to a field of type 'MembershipType[]'
   */
  export type ListEnumMembershipTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MembershipType[]'>
    


  /**
   * Reference to a field of type 'MembershipStatus'
   */
  export type EnumMembershipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MembershipStatus'>
    


  /**
   * Reference to a field of type 'MembershipStatus[]'
   */
  export type ListEnumMembershipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MembershipStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'AuthProvider'
   */
  export type EnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider'>
    


  /**
   * Reference to a field of type 'AuthProvider[]'
   */
  export type ListEnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    memberships?: MembershipListRelationFilter
    workoutPlans?: WorkoutPlanListRelationFilter
    memberWorkouts?: MemberWorkoutListRelationFilter
    payments?: PaymentListRelationFilter
    accounts?: AccountListRelationFilter
    workoutCharts?: WorkoutChartListRelationFilter
    bodyMetrics?: BodyMetricListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    profile?: UserProfileOrderByWithRelationInput
    memberships?: MembershipOrderByRelationAggregateInput
    workoutPlans?: WorkoutPlanOrderByRelationAggregateInput
    memberWorkouts?: MemberWorkoutOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    workoutCharts?: WorkoutChartOrderByRelationAggregateInput
    bodyMetrics?: BodyMetricOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    memberships?: MembershipListRelationFilter
    workoutPlans?: WorkoutPlanListRelationFilter
    memberWorkouts?: MemberWorkoutListRelationFilter
    payments?: PaymentListRelationFilter
    accounts?: AccountListRelationFilter
    workoutCharts?: WorkoutChartListRelationFilter
    bodyMetrics?: BodyMetricListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    height?: FloatNullableFilter<"UserProfile"> | number | null
    weight?: FloatNullableFilter<"UserProfile"> | number | null
    joinedAt?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    joinedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    height?: FloatNullableFilter<"UserProfile"> | number | null
    weight?: FloatNullableFilter<"UserProfile"> | number | null
    joinedAt?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    joinedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    height?: FloatNullableWithAggregatesFilter<"UserProfile"> | number | null
    weight?: FloatNullableWithAggregatesFilter<"UserProfile"> | number | null
    joinedAt?: DateTimeNullableWithAggregatesFilter<"UserProfile"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type MembershipWhereInput = {
    AND?: MembershipWhereInput | MembershipWhereInput[]
    OR?: MembershipWhereInput[]
    NOT?: MembershipWhereInput | MembershipWhereInput[]
    id?: StringFilter<"Membership"> | string
    userId?: StringFilter<"Membership"> | string
    membershipType?: EnumMembershipTypeFilter<"Membership"> | $Enums.MembershipType
    startDate?: DateTimeFilter<"Membership"> | Date | string
    endDate?: DateTimeFilter<"Membership"> | Date | string
    status?: EnumMembershipStatusFilter<"Membership"> | $Enums.MembershipStatus
    createdAt?: DateTimeFilter<"Membership"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MembershipOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    membershipType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MembershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MembershipWhereInput | MembershipWhereInput[]
    OR?: MembershipWhereInput[]
    NOT?: MembershipWhereInput | MembershipWhereInput[]
    userId?: StringFilter<"Membership"> | string
    membershipType?: EnumMembershipTypeFilter<"Membership"> | $Enums.MembershipType
    startDate?: DateTimeFilter<"Membership"> | Date | string
    endDate?: DateTimeFilter<"Membership"> | Date | string
    status?: EnumMembershipStatusFilter<"Membership"> | $Enums.MembershipStatus
    createdAt?: DateTimeFilter<"Membership"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MembershipOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    membershipType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: MembershipCountOrderByAggregateInput
    _max?: MembershipMaxOrderByAggregateInput
    _min?: MembershipMinOrderByAggregateInput
  }

  export type MembershipScalarWhereWithAggregatesInput = {
    AND?: MembershipScalarWhereWithAggregatesInput | MembershipScalarWhereWithAggregatesInput[]
    OR?: MembershipScalarWhereWithAggregatesInput[]
    NOT?: MembershipScalarWhereWithAggregatesInput | MembershipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Membership"> | string
    userId?: StringWithAggregatesFilter<"Membership"> | string
    membershipType?: EnumMembershipTypeWithAggregatesFilter<"Membership"> | $Enums.MembershipType
    startDate?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
    status?: EnumMembershipStatusWithAggregatesFilter<"Membership"> | $Enums.MembershipStatus
    createdAt?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
  }

  export type WorkoutPlanWhereInput = {
    AND?: WorkoutPlanWhereInput | WorkoutPlanWhereInput[]
    OR?: WorkoutPlanWhereInput[]
    NOT?: WorkoutPlanWhereInput | WorkoutPlanWhereInput[]
    id?: StringFilter<"WorkoutPlan"> | string
    name?: StringFilter<"WorkoutPlan"> | string
    description?: StringNullableFilter<"WorkoutPlan"> | string | null
    trainerId?: StringNullableFilter<"WorkoutPlan"> | string | null
    createdAt?: DateTimeFilter<"WorkoutPlan"> | Date | string
    trainer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    memberWorkouts?: MemberWorkoutListRelationFilter
  }

  export type WorkoutPlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    trainerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    trainer?: UserOrderByWithRelationInput
    memberWorkouts?: MemberWorkoutOrderByRelationAggregateInput
  }

  export type WorkoutPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutPlanWhereInput | WorkoutPlanWhereInput[]
    OR?: WorkoutPlanWhereInput[]
    NOT?: WorkoutPlanWhereInput | WorkoutPlanWhereInput[]
    name?: StringFilter<"WorkoutPlan"> | string
    description?: StringNullableFilter<"WorkoutPlan"> | string | null
    trainerId?: StringNullableFilter<"WorkoutPlan"> | string | null
    createdAt?: DateTimeFilter<"WorkoutPlan"> | Date | string
    trainer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    memberWorkouts?: MemberWorkoutListRelationFilter
  }, "id">

  export type WorkoutPlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    trainerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WorkoutPlanCountOrderByAggregateInput
    _max?: WorkoutPlanMaxOrderByAggregateInput
    _min?: WorkoutPlanMinOrderByAggregateInput
  }

  export type WorkoutPlanScalarWhereWithAggregatesInput = {
    AND?: WorkoutPlanScalarWhereWithAggregatesInput | WorkoutPlanScalarWhereWithAggregatesInput[]
    OR?: WorkoutPlanScalarWhereWithAggregatesInput[]
    NOT?: WorkoutPlanScalarWhereWithAggregatesInput | WorkoutPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkoutPlan"> | string
    name?: StringWithAggregatesFilter<"WorkoutPlan"> | string
    description?: StringNullableWithAggregatesFilter<"WorkoutPlan"> | string | null
    trainerId?: StringNullableWithAggregatesFilter<"WorkoutPlan"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkoutPlan"> | Date | string
  }

  export type MemberWorkoutWhereInput = {
    AND?: MemberWorkoutWhereInput | MemberWorkoutWhereInput[]
    OR?: MemberWorkoutWhereInput[]
    NOT?: MemberWorkoutWhereInput | MemberWorkoutWhereInput[]
    id?: StringFilter<"MemberWorkout"> | string
    userId?: StringFilter<"MemberWorkout"> | string
    workoutPlanId?: StringFilter<"MemberWorkout"> | string
    date?: DateTimeFilter<"MemberWorkout"> | Date | string
    duration?: IntNullableFilter<"MemberWorkout"> | number | null
    caloriesBurned?: IntNullableFilter<"MemberWorkout"> | number | null
    createdAt?: DateTimeFilter<"MemberWorkout"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workoutPlan?: XOR<WorkoutPlanScalarRelationFilter, WorkoutPlanWhereInput>
  }

  export type MemberWorkoutOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    workoutPlanId?: SortOrder
    date?: SortOrder
    duration?: SortOrderInput | SortOrder
    caloriesBurned?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    workoutPlan?: WorkoutPlanOrderByWithRelationInput
  }

  export type MemberWorkoutWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemberWorkoutWhereInput | MemberWorkoutWhereInput[]
    OR?: MemberWorkoutWhereInput[]
    NOT?: MemberWorkoutWhereInput | MemberWorkoutWhereInput[]
    userId?: StringFilter<"MemberWorkout"> | string
    workoutPlanId?: StringFilter<"MemberWorkout"> | string
    date?: DateTimeFilter<"MemberWorkout"> | Date | string
    duration?: IntNullableFilter<"MemberWorkout"> | number | null
    caloriesBurned?: IntNullableFilter<"MemberWorkout"> | number | null
    createdAt?: DateTimeFilter<"MemberWorkout"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workoutPlan?: XOR<WorkoutPlanScalarRelationFilter, WorkoutPlanWhereInput>
  }, "id">

  export type MemberWorkoutOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    workoutPlanId?: SortOrder
    date?: SortOrder
    duration?: SortOrderInput | SortOrder
    caloriesBurned?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MemberWorkoutCountOrderByAggregateInput
    _avg?: MemberWorkoutAvgOrderByAggregateInput
    _max?: MemberWorkoutMaxOrderByAggregateInput
    _min?: MemberWorkoutMinOrderByAggregateInput
    _sum?: MemberWorkoutSumOrderByAggregateInput
  }

  export type MemberWorkoutScalarWhereWithAggregatesInput = {
    AND?: MemberWorkoutScalarWhereWithAggregatesInput | MemberWorkoutScalarWhereWithAggregatesInput[]
    OR?: MemberWorkoutScalarWhereWithAggregatesInput[]
    NOT?: MemberWorkoutScalarWhereWithAggregatesInput | MemberWorkoutScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MemberWorkout"> | string
    userId?: StringWithAggregatesFilter<"MemberWorkout"> | string
    workoutPlanId?: StringWithAggregatesFilter<"MemberWorkout"> | string
    date?: DateTimeWithAggregatesFilter<"MemberWorkout"> | Date | string
    duration?: IntNullableWithAggregatesFilter<"MemberWorkout"> | number | null
    caloriesBurned?: IntNullableWithAggregatesFilter<"MemberWorkout"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"MemberWorkout"> | Date | string
  }

  export type WorkoutChartWhereInput = {
    AND?: WorkoutChartWhereInput | WorkoutChartWhereInput[]
    OR?: WorkoutChartWhereInput[]
    NOT?: WorkoutChartWhereInput | WorkoutChartWhereInput[]
    id?: StringFilter<"WorkoutChart"> | string
    userId?: StringFilter<"WorkoutChart"> | string
    date?: DateTimeFilter<"WorkoutChart"> | Date | string
    exercise?: StringFilter<"WorkoutChart"> | string
    duration?: IntNullableFilter<"WorkoutChart"> | number | null
    sets?: IntNullableFilter<"WorkoutChart"> | number | null
    reps?: IntNullableFilter<"WorkoutChart"> | number | null
    weight?: FloatNullableFilter<"WorkoutChart"> | number | null
    notes?: StringNullableFilter<"WorkoutChart"> | string | null
    createdAt?: DateTimeFilter<"WorkoutChart"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WorkoutChartOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    exercise?: SortOrder
    duration?: SortOrderInput | SortOrder
    sets?: SortOrderInput | SortOrder
    reps?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WorkoutChartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutChartWhereInput | WorkoutChartWhereInput[]
    OR?: WorkoutChartWhereInput[]
    NOT?: WorkoutChartWhereInput | WorkoutChartWhereInput[]
    userId?: StringFilter<"WorkoutChart"> | string
    date?: DateTimeFilter<"WorkoutChart"> | Date | string
    exercise?: StringFilter<"WorkoutChart"> | string
    duration?: IntNullableFilter<"WorkoutChart"> | number | null
    sets?: IntNullableFilter<"WorkoutChart"> | number | null
    reps?: IntNullableFilter<"WorkoutChart"> | number | null
    weight?: FloatNullableFilter<"WorkoutChart"> | number | null
    notes?: StringNullableFilter<"WorkoutChart"> | string | null
    createdAt?: DateTimeFilter<"WorkoutChart"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WorkoutChartOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    exercise?: SortOrder
    duration?: SortOrderInput | SortOrder
    sets?: SortOrderInput | SortOrder
    reps?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WorkoutChartCountOrderByAggregateInput
    _avg?: WorkoutChartAvgOrderByAggregateInput
    _max?: WorkoutChartMaxOrderByAggregateInput
    _min?: WorkoutChartMinOrderByAggregateInput
    _sum?: WorkoutChartSumOrderByAggregateInput
  }

  export type WorkoutChartScalarWhereWithAggregatesInput = {
    AND?: WorkoutChartScalarWhereWithAggregatesInput | WorkoutChartScalarWhereWithAggregatesInput[]
    OR?: WorkoutChartScalarWhereWithAggregatesInput[]
    NOT?: WorkoutChartScalarWhereWithAggregatesInput | WorkoutChartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkoutChart"> | string
    userId?: StringWithAggregatesFilter<"WorkoutChart"> | string
    date?: DateTimeWithAggregatesFilter<"WorkoutChart"> | Date | string
    exercise?: StringWithAggregatesFilter<"WorkoutChart"> | string
    duration?: IntNullableWithAggregatesFilter<"WorkoutChart"> | number | null
    sets?: IntNullableWithAggregatesFilter<"WorkoutChart"> | number | null
    reps?: IntNullableWithAggregatesFilter<"WorkoutChart"> | number | null
    weight?: FloatNullableWithAggregatesFilter<"WorkoutChart"> | number | null
    notes?: StringNullableWithAggregatesFilter<"WorkoutChart"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkoutChart"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    provider?: EnumAuthProviderFilter<"Account"> | $Enums.AuthProvider
    providerAccountId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: IntNullableFilter<"Account"> | number | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    provider?: EnumAuthProviderFilter<"Account"> | $Enums.AuthProvider
    providerAccountId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: IntNullableFilter<"Account"> | number | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    provider?: EnumAuthProviderWithAggregatesFilter<"Account"> | $Enums.AuthProvider
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expiresAt?: IntNullableWithAggregatesFilter<"Account"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type BodyMetricWhereInput = {
    AND?: BodyMetricWhereInput | BodyMetricWhereInput[]
    OR?: BodyMetricWhereInput[]
    NOT?: BodyMetricWhereInput | BodyMetricWhereInput[]
    id?: StringFilter<"BodyMetric"> | string
    userId?: StringFilter<"BodyMetric"> | string
    date?: DateTimeFilter<"BodyMetric"> | Date | string
    weight?: FloatNullableFilter<"BodyMetric"> | number | null
    height?: FloatNullableFilter<"BodyMetric"> | number | null
    bmi?: FloatNullableFilter<"BodyMetric"> | number | null
    createdAt?: DateTimeFilter<"BodyMetric"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BodyMetricOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    bmi?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BodyMetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BodyMetricWhereInput | BodyMetricWhereInput[]
    OR?: BodyMetricWhereInput[]
    NOT?: BodyMetricWhereInput | BodyMetricWhereInput[]
    userId?: StringFilter<"BodyMetric"> | string
    date?: DateTimeFilter<"BodyMetric"> | Date | string
    weight?: FloatNullableFilter<"BodyMetric"> | number | null
    height?: FloatNullableFilter<"BodyMetric"> | number | null
    bmi?: FloatNullableFilter<"BodyMetric"> | number | null
    createdAt?: DateTimeFilter<"BodyMetric"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BodyMetricOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    bmi?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BodyMetricCountOrderByAggregateInput
    _avg?: BodyMetricAvgOrderByAggregateInput
    _max?: BodyMetricMaxOrderByAggregateInput
    _min?: BodyMetricMinOrderByAggregateInput
    _sum?: BodyMetricSumOrderByAggregateInput
  }

  export type BodyMetricScalarWhereWithAggregatesInput = {
    AND?: BodyMetricScalarWhereWithAggregatesInput | BodyMetricScalarWhereWithAggregatesInput[]
    OR?: BodyMetricScalarWhereWithAggregatesInput[]
    NOT?: BodyMetricScalarWhereWithAggregatesInput | BodyMetricScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BodyMetric"> | string
    userId?: StringWithAggregatesFilter<"BodyMetric"> | string
    date?: DateTimeWithAggregatesFilter<"BodyMetric"> | Date | string
    weight?: FloatNullableWithAggregatesFilter<"BodyMetric"> | number | null
    height?: FloatNullableWithAggregatesFilter<"BodyMetric"> | number | null
    bmi?: FloatNullableWithAggregatesFilter<"BodyMetric"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"BodyMetric"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    memberships?: MembershipCreateNestedManyWithoutUserInput
    workoutPlans?: WorkoutPlanCreateNestedManyWithoutTrainerInput
    memberWorkouts?: MemberWorkoutCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    workoutCharts?: WorkoutChartCreateNestedManyWithoutUserInput
    bodyMetrics?: BodyMetricCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    workoutPlans?: WorkoutPlanUncheckedCreateNestedManyWithoutTrainerInput
    memberWorkouts?: MemberWorkoutUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    workoutCharts?: WorkoutChartUncheckedCreateNestedManyWithoutUserInput
    bodyMetrics?: BodyMetricUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    workoutPlans?: WorkoutPlanUpdateManyWithoutTrainerNestedInput
    memberWorkouts?: MemberWorkoutUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    workoutCharts?: WorkoutChartUpdateManyWithoutUserNestedInput
    bodyMetrics?: BodyMetricUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    workoutPlans?: WorkoutPlanUncheckedUpdateManyWithoutTrainerNestedInput
    memberWorkouts?: MemberWorkoutUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    workoutCharts?: WorkoutChartUncheckedUpdateManyWithoutUserNestedInput
    bodyMetrics?: BodyMetricUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateInput = {
    id?: string
    height?: number | null
    weight?: number | null
    joinedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    userId: string
    height?: number | null
    weight?: number | null
    joinedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateManyInput = {
    id?: string
    userId: string
    height?: number | null
    weight?: number | null
    joinedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipCreateInput = {
    id?: string
    membershipType: $Enums.MembershipType
    startDate: Date | string
    endDate: Date | string
    status: $Enums.MembershipStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipUncheckedCreateInput = {
    id?: string
    userId: string
    membershipType: $Enums.MembershipType
    startDate: Date | string
    endDate: Date | string
    status: $Enums.MembershipStatus
    createdAt?: Date | string
  }

  export type MembershipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipType?: EnumMembershipTypeFieldUpdateOperationsInput | $Enums.MembershipType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    membershipType?: EnumMembershipTypeFieldUpdateOperationsInput | $Enums.MembershipType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipCreateManyInput = {
    id?: string
    userId: string
    membershipType: $Enums.MembershipType
    startDate: Date | string
    endDate: Date | string
    status: $Enums.MembershipStatus
    createdAt?: Date | string
  }

  export type MembershipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipType?: EnumMembershipTypeFieldUpdateOperationsInput | $Enums.MembershipType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    membershipType?: EnumMembershipTypeFieldUpdateOperationsInput | $Enums.MembershipType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutPlanCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    trainer?: UserCreateNestedOneWithoutWorkoutPlansInput
    memberWorkouts?: MemberWorkoutCreateNestedManyWithoutWorkoutPlanInput
  }

  export type WorkoutPlanUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    trainerId?: string | null
    createdAt?: Date | string
    memberWorkouts?: MemberWorkoutUncheckedCreateNestedManyWithoutWorkoutPlanInput
  }

  export type WorkoutPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainer?: UserUpdateOneWithoutWorkoutPlansNestedInput
    memberWorkouts?: MemberWorkoutUpdateManyWithoutWorkoutPlanNestedInput
  }

  export type WorkoutPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trainerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberWorkouts?: MemberWorkoutUncheckedUpdateManyWithoutWorkoutPlanNestedInput
  }

  export type WorkoutPlanCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    trainerId?: string | null
    createdAt?: Date | string
  }

  export type WorkoutPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trainerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberWorkoutCreateInput = {
    id?: string
    date: Date | string
    duration?: number | null
    caloriesBurned?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMemberWorkoutsInput
    workoutPlan: WorkoutPlanCreateNestedOneWithoutMemberWorkoutsInput
  }

  export type MemberWorkoutUncheckedCreateInput = {
    id?: string
    userId: string
    workoutPlanId: string
    date: Date | string
    duration?: number | null
    caloriesBurned?: number | null
    createdAt?: Date | string
  }

  export type MemberWorkoutUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    caloriesBurned?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMemberWorkoutsNestedInput
    workoutPlan?: WorkoutPlanUpdateOneRequiredWithoutMemberWorkoutsNestedInput
  }

  export type MemberWorkoutUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workoutPlanId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    caloriesBurned?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberWorkoutCreateManyInput = {
    id?: string
    userId: string
    workoutPlanId: string
    date: Date | string
    duration?: number | null
    caloriesBurned?: number | null
    createdAt?: Date | string
  }

  export type MemberWorkoutUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    caloriesBurned?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberWorkoutUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workoutPlanId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    caloriesBurned?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutChartCreateInput = {
    id?: string
    date: Date | string
    exercise: string
    duration?: number | null
    sets?: number | null
    reps?: number | null
    weight?: number | null
    notes?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWorkoutChartsInput
  }

  export type WorkoutChartUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    exercise: string
    duration?: number | null
    sets?: number | null
    reps?: number | null
    weight?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type WorkoutChartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    exercise?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkoutChartsNestedInput
  }

  export type WorkoutChartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    exercise?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutChartCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    exercise: string
    duration?: number | null
    sets?: number | null
    reps?: number | null
    weight?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type WorkoutChartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    exercise?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutChartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    exercise?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paymentDate: Date | string
    paymentMethod: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    paymentDate: Date | string
    paymentMethod: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    paymentDate: Date | string
    paymentMethod: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    provider: $Enums.AuthProvider
    providerAccountId: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    provider: $Enums.AuthProvider
    providerAccountId: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    provider: $Enums.AuthProvider
    providerAccountId: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyMetricCreateInput = {
    id?: string
    date: Date | string
    weight?: number | null
    height?: number | null
    bmi?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBodyMetricsInput
  }

  export type BodyMetricUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    weight?: number | null
    height?: number | null
    bmi?: number | null
    createdAt?: Date | string
  }

  export type BodyMetricUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBodyMetricsNestedInput
  }

  export type BodyMetricUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyMetricCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    weight?: number | null
    height?: number | null
    bmi?: number | null
    createdAt?: Date | string
  }

  export type BodyMetricUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyMetricUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type MembershipListRelationFilter = {
    every?: MembershipWhereInput
    some?: MembershipWhereInput
    none?: MembershipWhereInput
  }

  export type WorkoutPlanListRelationFilter = {
    every?: WorkoutPlanWhereInput
    some?: WorkoutPlanWhereInput
    none?: WorkoutPlanWhereInput
  }

  export type MemberWorkoutListRelationFilter = {
    every?: MemberWorkoutWhereInput
    some?: MemberWorkoutWhereInput
    none?: MemberWorkoutWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type WorkoutChartListRelationFilter = {
    every?: WorkoutChartWhereInput
    some?: WorkoutChartWhereInput
    none?: WorkoutChartWhereInput
  }

  export type BodyMetricListRelationFilter = {
    every?: BodyMetricWhereInput
    some?: BodyMetricWhereInput
    none?: BodyMetricWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MembershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberWorkoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutChartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BodyMetricOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    height?: SortOrder
    weight?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    height?: SortOrder
    weight?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumMembershipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipType | EnumMembershipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipType[] | ListEnumMembershipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MembershipType[] | ListEnumMembershipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMembershipTypeFilter<$PrismaModel> | $Enums.MembershipType
  }

  export type EnumMembershipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipStatus | EnumMembershipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMembershipStatusFilter<$PrismaModel> | $Enums.MembershipStatus
  }

  export type MembershipCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    membershipType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MembershipMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    membershipType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MembershipMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    membershipType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMembershipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipType | EnumMembershipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipType[] | ListEnumMembershipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MembershipType[] | ListEnumMembershipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMembershipTypeWithAggregatesFilter<$PrismaModel> | $Enums.MembershipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMembershipTypeFilter<$PrismaModel>
    _max?: NestedEnumMembershipTypeFilter<$PrismaModel>
  }

  export type EnumMembershipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipStatus | EnumMembershipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMembershipStatusWithAggregatesFilter<$PrismaModel> | $Enums.MembershipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMembershipStatusFilter<$PrismaModel>
    _max?: NestedEnumMembershipStatusFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type WorkoutPlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    trainerId?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    trainerId?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutPlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    trainerId?: SortOrder
    createdAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type WorkoutPlanScalarRelationFilter = {
    is?: WorkoutPlanWhereInput
    isNot?: WorkoutPlanWhereInput
  }

  export type MemberWorkoutCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workoutPlanId?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    caloriesBurned?: SortOrder
    createdAt?: SortOrder
  }

  export type MemberWorkoutAvgOrderByAggregateInput = {
    duration?: SortOrder
    caloriesBurned?: SortOrder
  }

  export type MemberWorkoutMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workoutPlanId?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    caloriesBurned?: SortOrder
    createdAt?: SortOrder
  }

  export type MemberWorkoutMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workoutPlanId?: SortOrder
    date?: SortOrder
    duration?: SortOrder
    caloriesBurned?: SortOrder
    createdAt?: SortOrder
  }

  export type MemberWorkoutSumOrderByAggregateInput = {
    duration?: SortOrder
    caloriesBurned?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type WorkoutChartCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    exercise?: SortOrder
    duration?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutChartAvgOrderByAggregateInput = {
    duration?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
  }

  export type WorkoutChartMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    exercise?: SortOrder
    duration?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutChartMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    exercise?: SortOrder
    duration?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutChartSumOrderByAggregateInput = {
    duration?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weight?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentDate?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: $Enums.AuthProvider
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expiresAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expiresAt?: SortOrder
  }

  export type EnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type BodyMetricCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    bmi?: SortOrder
    createdAt?: SortOrder
  }

  export type BodyMetricAvgOrderByAggregateInput = {
    weight?: SortOrder
    height?: SortOrder
    bmi?: SortOrder
  }

  export type BodyMetricMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    bmi?: SortOrder
    createdAt?: SortOrder
  }

  export type BodyMetricMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    bmi?: SortOrder
    createdAt?: SortOrder
  }

  export type BodyMetricSumOrderByAggregateInput = {
    weight?: SortOrder
    height?: SortOrder
    bmi?: SortOrder
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type MembershipCreateNestedManyWithoutUserInput = {
    create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
    createMany?: MembershipCreateManyUserInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type WorkoutPlanCreateNestedManyWithoutTrainerInput = {
    create?: XOR<WorkoutPlanCreateWithoutTrainerInput, WorkoutPlanUncheckedCreateWithoutTrainerInput> | WorkoutPlanCreateWithoutTrainerInput[] | WorkoutPlanUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutTrainerInput | WorkoutPlanCreateOrConnectWithoutTrainerInput[]
    createMany?: WorkoutPlanCreateManyTrainerInputEnvelope
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
  }

  export type MemberWorkoutCreateNestedManyWithoutUserInput = {
    create?: XOR<MemberWorkoutCreateWithoutUserInput, MemberWorkoutUncheckedCreateWithoutUserInput> | MemberWorkoutCreateWithoutUserInput[] | MemberWorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemberWorkoutCreateOrConnectWithoutUserInput | MemberWorkoutCreateOrConnectWithoutUserInput[]
    createMany?: MemberWorkoutCreateManyUserInputEnvelope
    connect?: MemberWorkoutWhereUniqueInput | MemberWorkoutWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type WorkoutChartCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutChartCreateWithoutUserInput, WorkoutChartUncheckedCreateWithoutUserInput> | WorkoutChartCreateWithoutUserInput[] | WorkoutChartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutChartCreateOrConnectWithoutUserInput | WorkoutChartCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutChartCreateManyUserInputEnvelope
    connect?: WorkoutChartWhereUniqueInput | WorkoutChartWhereUniqueInput[]
  }

  export type BodyMetricCreateNestedManyWithoutUserInput = {
    create?: XOR<BodyMetricCreateWithoutUserInput, BodyMetricUncheckedCreateWithoutUserInput> | BodyMetricCreateWithoutUserInput[] | BodyMetricUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BodyMetricCreateOrConnectWithoutUserInput | BodyMetricCreateOrConnectWithoutUserInput[]
    createMany?: BodyMetricCreateManyUserInputEnvelope
    connect?: BodyMetricWhereUniqueInput | BodyMetricWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type MembershipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
    createMany?: MembershipCreateManyUserInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type WorkoutPlanUncheckedCreateNestedManyWithoutTrainerInput = {
    create?: XOR<WorkoutPlanCreateWithoutTrainerInput, WorkoutPlanUncheckedCreateWithoutTrainerInput> | WorkoutPlanCreateWithoutTrainerInput[] | WorkoutPlanUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutTrainerInput | WorkoutPlanCreateOrConnectWithoutTrainerInput[]
    createMany?: WorkoutPlanCreateManyTrainerInputEnvelope
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
  }

  export type MemberWorkoutUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MemberWorkoutCreateWithoutUserInput, MemberWorkoutUncheckedCreateWithoutUserInput> | MemberWorkoutCreateWithoutUserInput[] | MemberWorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemberWorkoutCreateOrConnectWithoutUserInput | MemberWorkoutCreateOrConnectWithoutUserInput[]
    createMany?: MemberWorkoutCreateManyUserInputEnvelope
    connect?: MemberWorkoutWhereUniqueInput | MemberWorkoutWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type WorkoutChartUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutChartCreateWithoutUserInput, WorkoutChartUncheckedCreateWithoutUserInput> | WorkoutChartCreateWithoutUserInput[] | WorkoutChartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutChartCreateOrConnectWithoutUserInput | WorkoutChartCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutChartCreateManyUserInputEnvelope
    connect?: WorkoutChartWhereUniqueInput | WorkoutChartWhereUniqueInput[]
  }

  export type BodyMetricUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BodyMetricCreateWithoutUserInput, BodyMetricUncheckedCreateWithoutUserInput> | BodyMetricCreateWithoutUserInput[] | BodyMetricUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BodyMetricCreateOrConnectWithoutUserInput | BodyMetricCreateOrConnectWithoutUserInput[]
    createMany?: BodyMetricCreateManyUserInputEnvelope
    connect?: BodyMetricWhereUniqueInput | BodyMetricWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type MembershipUpdateManyWithoutUserNestedInput = {
    create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutUserInput | MembershipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MembershipCreateManyUserInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutUserInput | MembershipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutUserInput | MembershipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type WorkoutPlanUpdateManyWithoutTrainerNestedInput = {
    create?: XOR<WorkoutPlanCreateWithoutTrainerInput, WorkoutPlanUncheckedCreateWithoutTrainerInput> | WorkoutPlanCreateWithoutTrainerInput[] | WorkoutPlanUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutTrainerInput | WorkoutPlanCreateOrConnectWithoutTrainerInput[]
    upsert?: WorkoutPlanUpsertWithWhereUniqueWithoutTrainerInput | WorkoutPlanUpsertWithWhereUniqueWithoutTrainerInput[]
    createMany?: WorkoutPlanCreateManyTrainerInputEnvelope
    set?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    disconnect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    delete?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    update?: WorkoutPlanUpdateWithWhereUniqueWithoutTrainerInput | WorkoutPlanUpdateWithWhereUniqueWithoutTrainerInput[]
    updateMany?: WorkoutPlanUpdateManyWithWhereWithoutTrainerInput | WorkoutPlanUpdateManyWithWhereWithoutTrainerInput[]
    deleteMany?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
  }

  export type MemberWorkoutUpdateManyWithoutUserNestedInput = {
    create?: XOR<MemberWorkoutCreateWithoutUserInput, MemberWorkoutUncheckedCreateWithoutUserInput> | MemberWorkoutCreateWithoutUserInput[] | MemberWorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemberWorkoutCreateOrConnectWithoutUserInput | MemberWorkoutCreateOrConnectWithoutUserInput[]
    upsert?: MemberWorkoutUpsertWithWhereUniqueWithoutUserInput | MemberWorkoutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MemberWorkoutCreateManyUserInputEnvelope
    set?: MemberWorkoutWhereUniqueInput | MemberWorkoutWhereUniqueInput[]
    disconnect?: MemberWorkoutWhereUniqueInput | MemberWorkoutWhereUniqueInput[]
    delete?: MemberWorkoutWhereUniqueInput | MemberWorkoutWhereUniqueInput[]
    connect?: MemberWorkoutWhereUniqueInput | MemberWorkoutWhereUniqueInput[]
    update?: MemberWorkoutUpdateWithWhereUniqueWithoutUserInput | MemberWorkoutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MemberWorkoutUpdateManyWithWhereWithoutUserInput | MemberWorkoutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MemberWorkoutScalarWhereInput | MemberWorkoutScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type WorkoutChartUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutChartCreateWithoutUserInput, WorkoutChartUncheckedCreateWithoutUserInput> | WorkoutChartCreateWithoutUserInput[] | WorkoutChartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutChartCreateOrConnectWithoutUserInput | WorkoutChartCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutChartUpsertWithWhereUniqueWithoutUserInput | WorkoutChartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutChartCreateManyUserInputEnvelope
    set?: WorkoutChartWhereUniqueInput | WorkoutChartWhereUniqueInput[]
    disconnect?: WorkoutChartWhereUniqueInput | WorkoutChartWhereUniqueInput[]
    delete?: WorkoutChartWhereUniqueInput | WorkoutChartWhereUniqueInput[]
    connect?: WorkoutChartWhereUniqueInput | WorkoutChartWhereUniqueInput[]
    update?: WorkoutChartUpdateWithWhereUniqueWithoutUserInput | WorkoutChartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutChartUpdateManyWithWhereWithoutUserInput | WorkoutChartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutChartScalarWhereInput | WorkoutChartScalarWhereInput[]
  }

  export type BodyMetricUpdateManyWithoutUserNestedInput = {
    create?: XOR<BodyMetricCreateWithoutUserInput, BodyMetricUncheckedCreateWithoutUserInput> | BodyMetricCreateWithoutUserInput[] | BodyMetricUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BodyMetricCreateOrConnectWithoutUserInput | BodyMetricCreateOrConnectWithoutUserInput[]
    upsert?: BodyMetricUpsertWithWhereUniqueWithoutUserInput | BodyMetricUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BodyMetricCreateManyUserInputEnvelope
    set?: BodyMetricWhereUniqueInput | BodyMetricWhereUniqueInput[]
    disconnect?: BodyMetricWhereUniqueInput | BodyMetricWhereUniqueInput[]
    delete?: BodyMetricWhereUniqueInput | BodyMetricWhereUniqueInput[]
    connect?: BodyMetricWhereUniqueInput | BodyMetricWhereUniqueInput[]
    update?: BodyMetricUpdateWithWhereUniqueWithoutUserInput | BodyMetricUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BodyMetricUpdateManyWithWhereWithoutUserInput | BodyMetricUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BodyMetricScalarWhereInput | BodyMetricScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type MembershipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutUserInput | MembershipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MembershipCreateManyUserInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutUserInput | MembershipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutUserInput | MembershipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type WorkoutPlanUncheckedUpdateManyWithoutTrainerNestedInput = {
    create?: XOR<WorkoutPlanCreateWithoutTrainerInput, WorkoutPlanUncheckedCreateWithoutTrainerInput> | WorkoutPlanCreateWithoutTrainerInput[] | WorkoutPlanUncheckedCreateWithoutTrainerInput[]
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutTrainerInput | WorkoutPlanCreateOrConnectWithoutTrainerInput[]
    upsert?: WorkoutPlanUpsertWithWhereUniqueWithoutTrainerInput | WorkoutPlanUpsertWithWhereUniqueWithoutTrainerInput[]
    createMany?: WorkoutPlanCreateManyTrainerInputEnvelope
    set?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    disconnect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    delete?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    connect?: WorkoutPlanWhereUniqueInput | WorkoutPlanWhereUniqueInput[]
    update?: WorkoutPlanUpdateWithWhereUniqueWithoutTrainerInput | WorkoutPlanUpdateWithWhereUniqueWithoutTrainerInput[]
    updateMany?: WorkoutPlanUpdateManyWithWhereWithoutTrainerInput | WorkoutPlanUpdateManyWithWhereWithoutTrainerInput[]
    deleteMany?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
  }

  export type MemberWorkoutUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MemberWorkoutCreateWithoutUserInput, MemberWorkoutUncheckedCreateWithoutUserInput> | MemberWorkoutCreateWithoutUserInput[] | MemberWorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MemberWorkoutCreateOrConnectWithoutUserInput | MemberWorkoutCreateOrConnectWithoutUserInput[]
    upsert?: MemberWorkoutUpsertWithWhereUniqueWithoutUserInput | MemberWorkoutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MemberWorkoutCreateManyUserInputEnvelope
    set?: MemberWorkoutWhereUniqueInput | MemberWorkoutWhereUniqueInput[]
    disconnect?: MemberWorkoutWhereUniqueInput | MemberWorkoutWhereUniqueInput[]
    delete?: MemberWorkoutWhereUniqueInput | MemberWorkoutWhereUniqueInput[]
    connect?: MemberWorkoutWhereUniqueInput | MemberWorkoutWhereUniqueInput[]
    update?: MemberWorkoutUpdateWithWhereUniqueWithoutUserInput | MemberWorkoutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MemberWorkoutUpdateManyWithWhereWithoutUserInput | MemberWorkoutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MemberWorkoutScalarWhereInput | MemberWorkoutScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type WorkoutChartUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutChartCreateWithoutUserInput, WorkoutChartUncheckedCreateWithoutUserInput> | WorkoutChartCreateWithoutUserInput[] | WorkoutChartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutChartCreateOrConnectWithoutUserInput | WorkoutChartCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutChartUpsertWithWhereUniqueWithoutUserInput | WorkoutChartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutChartCreateManyUserInputEnvelope
    set?: WorkoutChartWhereUniqueInput | WorkoutChartWhereUniqueInput[]
    disconnect?: WorkoutChartWhereUniqueInput | WorkoutChartWhereUniqueInput[]
    delete?: WorkoutChartWhereUniqueInput | WorkoutChartWhereUniqueInput[]
    connect?: WorkoutChartWhereUniqueInput | WorkoutChartWhereUniqueInput[]
    update?: WorkoutChartUpdateWithWhereUniqueWithoutUserInput | WorkoutChartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutChartUpdateManyWithWhereWithoutUserInput | WorkoutChartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutChartScalarWhereInput | WorkoutChartScalarWhereInput[]
  }

  export type BodyMetricUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BodyMetricCreateWithoutUserInput, BodyMetricUncheckedCreateWithoutUserInput> | BodyMetricCreateWithoutUserInput[] | BodyMetricUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BodyMetricCreateOrConnectWithoutUserInput | BodyMetricCreateOrConnectWithoutUserInput[]
    upsert?: BodyMetricUpsertWithWhereUniqueWithoutUserInput | BodyMetricUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BodyMetricCreateManyUserInputEnvelope
    set?: BodyMetricWhereUniqueInput | BodyMetricWhereUniqueInput[]
    disconnect?: BodyMetricWhereUniqueInput | BodyMetricWhereUniqueInput[]
    delete?: BodyMetricWhereUniqueInput | BodyMetricWhereUniqueInput[]
    connect?: BodyMetricWhereUniqueInput | BodyMetricWhereUniqueInput[]
    update?: BodyMetricUpdateWithWhereUniqueWithoutUserInput | BodyMetricUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BodyMetricUpdateManyWithWhereWithoutUserInput | BodyMetricUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BodyMetricScalarWhereInput | BodyMetricScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMembershipTypeFieldUpdateOperationsInput = {
    set?: $Enums.MembershipType
  }

  export type EnumMembershipStatusFieldUpdateOperationsInput = {
    set?: $Enums.MembershipStatus
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserCreateNestedOneWithoutWorkoutPlansInput = {
    create?: XOR<UserCreateWithoutWorkoutPlansInput, UserUncheckedCreateWithoutWorkoutPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutPlansInput
    connect?: UserWhereUniqueInput
  }

  export type MemberWorkoutCreateNestedManyWithoutWorkoutPlanInput = {
    create?: XOR<MemberWorkoutCreateWithoutWorkoutPlanInput, MemberWorkoutUncheckedCreateWithoutWorkoutPlanInput> | MemberWorkoutCreateWithoutWorkoutPlanInput[] | MemberWorkoutUncheckedCreateWithoutWorkoutPlanInput[]
    connectOrCreate?: MemberWorkoutCreateOrConnectWithoutWorkoutPlanInput | MemberWorkoutCreateOrConnectWithoutWorkoutPlanInput[]
    createMany?: MemberWorkoutCreateManyWorkoutPlanInputEnvelope
    connect?: MemberWorkoutWhereUniqueInput | MemberWorkoutWhereUniqueInput[]
  }

  export type MemberWorkoutUncheckedCreateNestedManyWithoutWorkoutPlanInput = {
    create?: XOR<MemberWorkoutCreateWithoutWorkoutPlanInput, MemberWorkoutUncheckedCreateWithoutWorkoutPlanInput> | MemberWorkoutCreateWithoutWorkoutPlanInput[] | MemberWorkoutUncheckedCreateWithoutWorkoutPlanInput[]
    connectOrCreate?: MemberWorkoutCreateOrConnectWithoutWorkoutPlanInput | MemberWorkoutCreateOrConnectWithoutWorkoutPlanInput[]
    createMany?: MemberWorkoutCreateManyWorkoutPlanInputEnvelope
    connect?: MemberWorkoutWhereUniqueInput | MemberWorkoutWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutWorkoutPlansNestedInput = {
    create?: XOR<UserCreateWithoutWorkoutPlansInput, UserUncheckedCreateWithoutWorkoutPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutPlansInput
    upsert?: UserUpsertWithoutWorkoutPlansInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkoutPlansInput, UserUpdateWithoutWorkoutPlansInput>, UserUncheckedUpdateWithoutWorkoutPlansInput>
  }

  export type MemberWorkoutUpdateManyWithoutWorkoutPlanNestedInput = {
    create?: XOR<MemberWorkoutCreateWithoutWorkoutPlanInput, MemberWorkoutUncheckedCreateWithoutWorkoutPlanInput> | MemberWorkoutCreateWithoutWorkoutPlanInput[] | MemberWorkoutUncheckedCreateWithoutWorkoutPlanInput[]
    connectOrCreate?: MemberWorkoutCreateOrConnectWithoutWorkoutPlanInput | MemberWorkoutCreateOrConnectWithoutWorkoutPlanInput[]
    upsert?: MemberWorkoutUpsertWithWhereUniqueWithoutWorkoutPlanInput | MemberWorkoutUpsertWithWhereUniqueWithoutWorkoutPlanInput[]
    createMany?: MemberWorkoutCreateManyWorkoutPlanInputEnvelope
    set?: MemberWorkoutWhereUniqueInput | MemberWorkoutWhereUniqueInput[]
    disconnect?: MemberWorkoutWhereUniqueInput | MemberWorkoutWhereUniqueInput[]
    delete?: MemberWorkoutWhereUniqueInput | MemberWorkoutWhereUniqueInput[]
    connect?: MemberWorkoutWhereUniqueInput | MemberWorkoutWhereUniqueInput[]
    update?: MemberWorkoutUpdateWithWhereUniqueWithoutWorkoutPlanInput | MemberWorkoutUpdateWithWhereUniqueWithoutWorkoutPlanInput[]
    updateMany?: MemberWorkoutUpdateManyWithWhereWithoutWorkoutPlanInput | MemberWorkoutUpdateManyWithWhereWithoutWorkoutPlanInput[]
    deleteMany?: MemberWorkoutScalarWhereInput | MemberWorkoutScalarWhereInput[]
  }

  export type MemberWorkoutUncheckedUpdateManyWithoutWorkoutPlanNestedInput = {
    create?: XOR<MemberWorkoutCreateWithoutWorkoutPlanInput, MemberWorkoutUncheckedCreateWithoutWorkoutPlanInput> | MemberWorkoutCreateWithoutWorkoutPlanInput[] | MemberWorkoutUncheckedCreateWithoutWorkoutPlanInput[]
    connectOrCreate?: MemberWorkoutCreateOrConnectWithoutWorkoutPlanInput | MemberWorkoutCreateOrConnectWithoutWorkoutPlanInput[]
    upsert?: MemberWorkoutUpsertWithWhereUniqueWithoutWorkoutPlanInput | MemberWorkoutUpsertWithWhereUniqueWithoutWorkoutPlanInput[]
    createMany?: MemberWorkoutCreateManyWorkoutPlanInputEnvelope
    set?: MemberWorkoutWhereUniqueInput | MemberWorkoutWhereUniqueInput[]
    disconnect?: MemberWorkoutWhereUniqueInput | MemberWorkoutWhereUniqueInput[]
    delete?: MemberWorkoutWhereUniqueInput | MemberWorkoutWhereUniqueInput[]
    connect?: MemberWorkoutWhereUniqueInput | MemberWorkoutWhereUniqueInput[]
    update?: MemberWorkoutUpdateWithWhereUniqueWithoutWorkoutPlanInput | MemberWorkoutUpdateWithWhereUniqueWithoutWorkoutPlanInput[]
    updateMany?: MemberWorkoutUpdateManyWithWhereWithoutWorkoutPlanInput | MemberWorkoutUpdateManyWithWhereWithoutWorkoutPlanInput[]
    deleteMany?: MemberWorkoutScalarWhereInput | MemberWorkoutScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMemberWorkoutsInput = {
    create?: XOR<UserCreateWithoutMemberWorkoutsInput, UserUncheckedCreateWithoutMemberWorkoutsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemberWorkoutsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkoutPlanCreateNestedOneWithoutMemberWorkoutsInput = {
    create?: XOR<WorkoutPlanCreateWithoutMemberWorkoutsInput, WorkoutPlanUncheckedCreateWithoutMemberWorkoutsInput>
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutMemberWorkoutsInput
    connect?: WorkoutPlanWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutMemberWorkoutsNestedInput = {
    create?: XOR<UserCreateWithoutMemberWorkoutsInput, UserUncheckedCreateWithoutMemberWorkoutsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemberWorkoutsInput
    upsert?: UserUpsertWithoutMemberWorkoutsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMemberWorkoutsInput, UserUpdateWithoutMemberWorkoutsInput>, UserUncheckedUpdateWithoutMemberWorkoutsInput>
  }

  export type WorkoutPlanUpdateOneRequiredWithoutMemberWorkoutsNestedInput = {
    create?: XOR<WorkoutPlanCreateWithoutMemberWorkoutsInput, WorkoutPlanUncheckedCreateWithoutMemberWorkoutsInput>
    connectOrCreate?: WorkoutPlanCreateOrConnectWithoutMemberWorkoutsInput
    upsert?: WorkoutPlanUpsertWithoutMemberWorkoutsInput
    connect?: WorkoutPlanWhereUniqueInput
    update?: XOR<XOR<WorkoutPlanUpdateToOneWithWhereWithoutMemberWorkoutsInput, WorkoutPlanUpdateWithoutMemberWorkoutsInput>, WorkoutPlanUncheckedUpdateWithoutMemberWorkoutsInput>
  }

  export type UserCreateNestedOneWithoutWorkoutChartsInput = {
    create?: XOR<UserCreateWithoutWorkoutChartsInput, UserUncheckedCreateWithoutWorkoutChartsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutChartsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWorkoutChartsNestedInput = {
    create?: XOR<UserCreateWithoutWorkoutChartsInput, UserUncheckedCreateWithoutWorkoutChartsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutChartsInput
    upsert?: UserUpsertWithoutWorkoutChartsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkoutChartsInput, UserUpdateWithoutWorkoutChartsInput>, UserUncheckedUpdateWithoutWorkoutChartsInput>
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAuthProviderFieldUpdateOperationsInput = {
    set?: $Enums.AuthProvider
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutBodyMetricsInput = {
    create?: XOR<UserCreateWithoutBodyMetricsInput, UserUncheckedCreateWithoutBodyMetricsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBodyMetricsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBodyMetricsNestedInput = {
    create?: XOR<UserCreateWithoutBodyMetricsInput, UserUncheckedCreateWithoutBodyMetricsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBodyMetricsInput
    upsert?: UserUpsertWithoutBodyMetricsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBodyMetricsInput, UserUpdateWithoutBodyMetricsInput>, UserUncheckedUpdateWithoutBodyMetricsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumMembershipTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipType | EnumMembershipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipType[] | ListEnumMembershipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MembershipType[] | ListEnumMembershipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMembershipTypeFilter<$PrismaModel> | $Enums.MembershipType
  }

  export type NestedEnumMembershipStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipStatus | EnumMembershipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMembershipStatusFilter<$PrismaModel> | $Enums.MembershipStatus
  }

  export type NestedEnumMembershipTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipType | EnumMembershipTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipType[] | ListEnumMembershipTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MembershipType[] | ListEnumMembershipTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMembershipTypeWithAggregatesFilter<$PrismaModel> | $Enums.MembershipType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMembershipTypeFilter<$PrismaModel>
    _max?: NestedEnumMembershipTypeFilter<$PrismaModel>
  }

  export type NestedEnumMembershipStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MembershipStatus | EnumMembershipStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MembershipStatus[] | ListEnumMembershipStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMembershipStatusWithAggregatesFilter<$PrismaModel> | $Enums.MembershipStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMembershipStatusFilter<$PrismaModel>
    _max?: NestedEnumMembershipStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthProvider[] | ListEnumAuthProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type UserProfileCreateWithoutUserInput = {
    id?: string
    height?: number | null
    weight?: number | null
    joinedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: string
    height?: number | null
    weight?: number | null
    joinedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type MembershipCreateWithoutUserInput = {
    id?: string
    membershipType: $Enums.MembershipType
    startDate: Date | string
    endDate: Date | string
    status: $Enums.MembershipStatus
    createdAt?: Date | string
  }

  export type MembershipUncheckedCreateWithoutUserInput = {
    id?: string
    membershipType: $Enums.MembershipType
    startDate: Date | string
    endDate: Date | string
    status: $Enums.MembershipStatus
    createdAt?: Date | string
  }

  export type MembershipCreateOrConnectWithoutUserInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput>
  }

  export type MembershipCreateManyUserInputEnvelope = {
    data: MembershipCreateManyUserInput | MembershipCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutPlanCreateWithoutTrainerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    memberWorkouts?: MemberWorkoutCreateNestedManyWithoutWorkoutPlanInput
  }

  export type WorkoutPlanUncheckedCreateWithoutTrainerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    memberWorkouts?: MemberWorkoutUncheckedCreateNestedManyWithoutWorkoutPlanInput
  }

  export type WorkoutPlanCreateOrConnectWithoutTrainerInput = {
    where: WorkoutPlanWhereUniqueInput
    create: XOR<WorkoutPlanCreateWithoutTrainerInput, WorkoutPlanUncheckedCreateWithoutTrainerInput>
  }

  export type WorkoutPlanCreateManyTrainerInputEnvelope = {
    data: WorkoutPlanCreateManyTrainerInput | WorkoutPlanCreateManyTrainerInput[]
    skipDuplicates?: boolean
  }

  export type MemberWorkoutCreateWithoutUserInput = {
    id?: string
    date: Date | string
    duration?: number | null
    caloriesBurned?: number | null
    createdAt?: Date | string
    workoutPlan: WorkoutPlanCreateNestedOneWithoutMemberWorkoutsInput
  }

  export type MemberWorkoutUncheckedCreateWithoutUserInput = {
    id?: string
    workoutPlanId: string
    date: Date | string
    duration?: number | null
    caloriesBurned?: number | null
    createdAt?: Date | string
  }

  export type MemberWorkoutCreateOrConnectWithoutUserInput = {
    where: MemberWorkoutWhereUniqueInput
    create: XOR<MemberWorkoutCreateWithoutUserInput, MemberWorkoutUncheckedCreateWithoutUserInput>
  }

  export type MemberWorkoutCreateManyUserInputEnvelope = {
    data: MemberWorkoutCreateManyUserInput | MemberWorkoutCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paymentDate: Date | string
    paymentMethod: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paymentDate: Date | string
    paymentMethod: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    provider: $Enums.AuthProvider
    providerAccountId: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    provider: $Enums.AuthProvider
    providerAccountId: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutChartCreateWithoutUserInput = {
    id?: string
    date: Date | string
    exercise: string
    duration?: number | null
    sets?: number | null
    reps?: number | null
    weight?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type WorkoutChartUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    exercise: string
    duration?: number | null
    sets?: number | null
    reps?: number | null
    weight?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type WorkoutChartCreateOrConnectWithoutUserInput = {
    where: WorkoutChartWhereUniqueInput
    create: XOR<WorkoutChartCreateWithoutUserInput, WorkoutChartUncheckedCreateWithoutUserInput>
  }

  export type WorkoutChartCreateManyUserInputEnvelope = {
    data: WorkoutChartCreateManyUserInput | WorkoutChartCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BodyMetricCreateWithoutUserInput = {
    id?: string
    date: Date | string
    weight?: number | null
    height?: number | null
    bmi?: number | null
    createdAt?: Date | string
  }

  export type BodyMetricUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    weight?: number | null
    height?: number | null
    bmi?: number | null
    createdAt?: Date | string
  }

  export type BodyMetricCreateOrConnectWithoutUserInput = {
    where: BodyMetricWhereUniqueInput
    create: XOR<BodyMetricCreateWithoutUserInput, BodyMetricUncheckedCreateWithoutUserInput>
  }

  export type BodyMetricCreateManyUserInputEnvelope = {
    data: BodyMetricCreateManyUserInput | BodyMetricCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUpsertWithWhereUniqueWithoutUserInput = {
    where: MembershipWhereUniqueInput
    update: XOR<MembershipUpdateWithoutUserInput, MembershipUncheckedUpdateWithoutUserInput>
    create: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput>
  }

  export type MembershipUpdateWithWhereUniqueWithoutUserInput = {
    where: MembershipWhereUniqueInput
    data: XOR<MembershipUpdateWithoutUserInput, MembershipUncheckedUpdateWithoutUserInput>
  }

  export type MembershipUpdateManyWithWhereWithoutUserInput = {
    where: MembershipScalarWhereInput
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyWithoutUserInput>
  }

  export type MembershipScalarWhereInput = {
    AND?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
    OR?: MembershipScalarWhereInput[]
    NOT?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
    id?: StringFilter<"Membership"> | string
    userId?: StringFilter<"Membership"> | string
    membershipType?: EnumMembershipTypeFilter<"Membership"> | $Enums.MembershipType
    startDate?: DateTimeFilter<"Membership"> | Date | string
    endDate?: DateTimeFilter<"Membership"> | Date | string
    status?: EnumMembershipStatusFilter<"Membership"> | $Enums.MembershipStatus
    createdAt?: DateTimeFilter<"Membership"> | Date | string
  }

  export type WorkoutPlanUpsertWithWhereUniqueWithoutTrainerInput = {
    where: WorkoutPlanWhereUniqueInput
    update: XOR<WorkoutPlanUpdateWithoutTrainerInput, WorkoutPlanUncheckedUpdateWithoutTrainerInput>
    create: XOR<WorkoutPlanCreateWithoutTrainerInput, WorkoutPlanUncheckedCreateWithoutTrainerInput>
  }

  export type WorkoutPlanUpdateWithWhereUniqueWithoutTrainerInput = {
    where: WorkoutPlanWhereUniqueInput
    data: XOR<WorkoutPlanUpdateWithoutTrainerInput, WorkoutPlanUncheckedUpdateWithoutTrainerInput>
  }

  export type WorkoutPlanUpdateManyWithWhereWithoutTrainerInput = {
    where: WorkoutPlanScalarWhereInput
    data: XOR<WorkoutPlanUpdateManyMutationInput, WorkoutPlanUncheckedUpdateManyWithoutTrainerInput>
  }

  export type WorkoutPlanScalarWhereInput = {
    AND?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
    OR?: WorkoutPlanScalarWhereInput[]
    NOT?: WorkoutPlanScalarWhereInput | WorkoutPlanScalarWhereInput[]
    id?: StringFilter<"WorkoutPlan"> | string
    name?: StringFilter<"WorkoutPlan"> | string
    description?: StringNullableFilter<"WorkoutPlan"> | string | null
    trainerId?: StringNullableFilter<"WorkoutPlan"> | string | null
    createdAt?: DateTimeFilter<"WorkoutPlan"> | Date | string
  }

  export type MemberWorkoutUpsertWithWhereUniqueWithoutUserInput = {
    where: MemberWorkoutWhereUniqueInput
    update: XOR<MemberWorkoutUpdateWithoutUserInput, MemberWorkoutUncheckedUpdateWithoutUserInput>
    create: XOR<MemberWorkoutCreateWithoutUserInput, MemberWorkoutUncheckedCreateWithoutUserInput>
  }

  export type MemberWorkoutUpdateWithWhereUniqueWithoutUserInput = {
    where: MemberWorkoutWhereUniqueInput
    data: XOR<MemberWorkoutUpdateWithoutUserInput, MemberWorkoutUncheckedUpdateWithoutUserInput>
  }

  export type MemberWorkoutUpdateManyWithWhereWithoutUserInput = {
    where: MemberWorkoutScalarWhereInput
    data: XOR<MemberWorkoutUpdateManyMutationInput, MemberWorkoutUncheckedUpdateManyWithoutUserInput>
  }

  export type MemberWorkoutScalarWhereInput = {
    AND?: MemberWorkoutScalarWhereInput | MemberWorkoutScalarWhereInput[]
    OR?: MemberWorkoutScalarWhereInput[]
    NOT?: MemberWorkoutScalarWhereInput | MemberWorkoutScalarWhereInput[]
    id?: StringFilter<"MemberWorkout"> | string
    userId?: StringFilter<"MemberWorkout"> | string
    workoutPlanId?: StringFilter<"MemberWorkout"> | string
    date?: DateTimeFilter<"MemberWorkout"> | Date | string
    duration?: IntNullableFilter<"MemberWorkout"> | number | null
    caloriesBurned?: IntNullableFilter<"MemberWorkout"> | number | null
    createdAt?: DateTimeFilter<"MemberWorkout"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    provider?: EnumAuthProviderFilter<"Account"> | $Enums.AuthProvider
    providerAccountId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: IntNullableFilter<"Account"> | number | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type WorkoutChartUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkoutChartWhereUniqueInput
    update: XOR<WorkoutChartUpdateWithoutUserInput, WorkoutChartUncheckedUpdateWithoutUserInput>
    create: XOR<WorkoutChartCreateWithoutUserInput, WorkoutChartUncheckedCreateWithoutUserInput>
  }

  export type WorkoutChartUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkoutChartWhereUniqueInput
    data: XOR<WorkoutChartUpdateWithoutUserInput, WorkoutChartUncheckedUpdateWithoutUserInput>
  }

  export type WorkoutChartUpdateManyWithWhereWithoutUserInput = {
    where: WorkoutChartScalarWhereInput
    data: XOR<WorkoutChartUpdateManyMutationInput, WorkoutChartUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkoutChartScalarWhereInput = {
    AND?: WorkoutChartScalarWhereInput | WorkoutChartScalarWhereInput[]
    OR?: WorkoutChartScalarWhereInput[]
    NOT?: WorkoutChartScalarWhereInput | WorkoutChartScalarWhereInput[]
    id?: StringFilter<"WorkoutChart"> | string
    userId?: StringFilter<"WorkoutChart"> | string
    date?: DateTimeFilter<"WorkoutChart"> | Date | string
    exercise?: StringFilter<"WorkoutChart"> | string
    duration?: IntNullableFilter<"WorkoutChart"> | number | null
    sets?: IntNullableFilter<"WorkoutChart"> | number | null
    reps?: IntNullableFilter<"WorkoutChart"> | number | null
    weight?: FloatNullableFilter<"WorkoutChart"> | number | null
    notes?: StringNullableFilter<"WorkoutChart"> | string | null
    createdAt?: DateTimeFilter<"WorkoutChart"> | Date | string
  }

  export type BodyMetricUpsertWithWhereUniqueWithoutUserInput = {
    where: BodyMetricWhereUniqueInput
    update: XOR<BodyMetricUpdateWithoutUserInput, BodyMetricUncheckedUpdateWithoutUserInput>
    create: XOR<BodyMetricCreateWithoutUserInput, BodyMetricUncheckedCreateWithoutUserInput>
  }

  export type BodyMetricUpdateWithWhereUniqueWithoutUserInput = {
    where: BodyMetricWhereUniqueInput
    data: XOR<BodyMetricUpdateWithoutUserInput, BodyMetricUncheckedUpdateWithoutUserInput>
  }

  export type BodyMetricUpdateManyWithWhereWithoutUserInput = {
    where: BodyMetricScalarWhereInput
    data: XOR<BodyMetricUpdateManyMutationInput, BodyMetricUncheckedUpdateManyWithoutUserInput>
  }

  export type BodyMetricScalarWhereInput = {
    AND?: BodyMetricScalarWhereInput | BodyMetricScalarWhereInput[]
    OR?: BodyMetricScalarWhereInput[]
    NOT?: BodyMetricScalarWhereInput | BodyMetricScalarWhereInput[]
    id?: StringFilter<"BodyMetric"> | string
    userId?: StringFilter<"BodyMetric"> | string
    date?: DateTimeFilter<"BodyMetric"> | Date | string
    weight?: FloatNullableFilter<"BodyMetric"> | number | null
    height?: FloatNullableFilter<"BodyMetric"> | number | null
    bmi?: FloatNullableFilter<"BodyMetric"> | number | null
    createdAt?: DateTimeFilter<"BodyMetric"> | Date | string
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    memberships?: MembershipCreateNestedManyWithoutUserInput
    workoutPlans?: WorkoutPlanCreateNestedManyWithoutTrainerInput
    memberWorkouts?: MemberWorkoutCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    workoutCharts?: WorkoutChartCreateNestedManyWithoutUserInput
    bodyMetrics?: BodyMetricCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    workoutPlans?: WorkoutPlanUncheckedCreateNestedManyWithoutTrainerInput
    memberWorkouts?: MemberWorkoutUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    workoutCharts?: WorkoutChartUncheckedCreateNestedManyWithoutUserInput
    bodyMetrics?: BodyMetricUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    workoutPlans?: WorkoutPlanUpdateManyWithoutTrainerNestedInput
    memberWorkouts?: MemberWorkoutUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    workoutCharts?: WorkoutChartUpdateManyWithoutUserNestedInput
    bodyMetrics?: BodyMetricUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    workoutPlans?: WorkoutPlanUncheckedUpdateManyWithoutTrainerNestedInput
    memberWorkouts?: MemberWorkoutUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    workoutCharts?: WorkoutChartUncheckedUpdateManyWithoutUserNestedInput
    bodyMetrics?: BodyMetricUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMembershipsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    workoutPlans?: WorkoutPlanCreateNestedManyWithoutTrainerInput
    memberWorkouts?: MemberWorkoutCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    workoutCharts?: WorkoutChartCreateNestedManyWithoutUserInput
    bodyMetrics?: BodyMetricCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    workoutPlans?: WorkoutPlanUncheckedCreateNestedManyWithoutTrainerInput
    memberWorkouts?: MemberWorkoutUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    workoutCharts?: WorkoutChartUncheckedCreateNestedManyWithoutUserInput
    bodyMetrics?: BodyMetricUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    workoutPlans?: WorkoutPlanUpdateManyWithoutTrainerNestedInput
    memberWorkouts?: MemberWorkoutUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    workoutCharts?: WorkoutChartUpdateManyWithoutUserNestedInput
    bodyMetrics?: BodyMetricUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    workoutPlans?: WorkoutPlanUncheckedUpdateManyWithoutTrainerNestedInput
    memberWorkouts?: MemberWorkoutUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    workoutCharts?: WorkoutChartUncheckedUpdateManyWithoutUserNestedInput
    bodyMetrics?: BodyMetricUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWorkoutPlansInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    memberships?: MembershipCreateNestedManyWithoutUserInput
    memberWorkouts?: MemberWorkoutCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    workoutCharts?: WorkoutChartCreateNestedManyWithoutUserInput
    bodyMetrics?: BodyMetricCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkoutPlansInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    memberWorkouts?: MemberWorkoutUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    workoutCharts?: WorkoutChartUncheckedCreateNestedManyWithoutUserInput
    bodyMetrics?: BodyMetricUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkoutPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkoutPlansInput, UserUncheckedCreateWithoutWorkoutPlansInput>
  }

  export type MemberWorkoutCreateWithoutWorkoutPlanInput = {
    id?: string
    date: Date | string
    duration?: number | null
    caloriesBurned?: number | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMemberWorkoutsInput
  }

  export type MemberWorkoutUncheckedCreateWithoutWorkoutPlanInput = {
    id?: string
    userId: string
    date: Date | string
    duration?: number | null
    caloriesBurned?: number | null
    createdAt?: Date | string
  }

  export type MemberWorkoutCreateOrConnectWithoutWorkoutPlanInput = {
    where: MemberWorkoutWhereUniqueInput
    create: XOR<MemberWorkoutCreateWithoutWorkoutPlanInput, MemberWorkoutUncheckedCreateWithoutWorkoutPlanInput>
  }

  export type MemberWorkoutCreateManyWorkoutPlanInputEnvelope = {
    data: MemberWorkoutCreateManyWorkoutPlanInput | MemberWorkoutCreateManyWorkoutPlanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkoutPlansInput = {
    update: XOR<UserUpdateWithoutWorkoutPlansInput, UserUncheckedUpdateWithoutWorkoutPlansInput>
    create: XOR<UserCreateWithoutWorkoutPlansInput, UserUncheckedCreateWithoutWorkoutPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkoutPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkoutPlansInput, UserUncheckedUpdateWithoutWorkoutPlansInput>
  }

  export type UserUpdateWithoutWorkoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    memberWorkouts?: MemberWorkoutUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    workoutCharts?: WorkoutChartUpdateManyWithoutUserNestedInput
    bodyMetrics?: BodyMetricUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    memberWorkouts?: MemberWorkoutUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    workoutCharts?: WorkoutChartUncheckedUpdateManyWithoutUserNestedInput
    bodyMetrics?: BodyMetricUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MemberWorkoutUpsertWithWhereUniqueWithoutWorkoutPlanInput = {
    where: MemberWorkoutWhereUniqueInput
    update: XOR<MemberWorkoutUpdateWithoutWorkoutPlanInput, MemberWorkoutUncheckedUpdateWithoutWorkoutPlanInput>
    create: XOR<MemberWorkoutCreateWithoutWorkoutPlanInput, MemberWorkoutUncheckedCreateWithoutWorkoutPlanInput>
  }

  export type MemberWorkoutUpdateWithWhereUniqueWithoutWorkoutPlanInput = {
    where: MemberWorkoutWhereUniqueInput
    data: XOR<MemberWorkoutUpdateWithoutWorkoutPlanInput, MemberWorkoutUncheckedUpdateWithoutWorkoutPlanInput>
  }

  export type MemberWorkoutUpdateManyWithWhereWithoutWorkoutPlanInput = {
    where: MemberWorkoutScalarWhereInput
    data: XOR<MemberWorkoutUpdateManyMutationInput, MemberWorkoutUncheckedUpdateManyWithoutWorkoutPlanInput>
  }

  export type UserCreateWithoutMemberWorkoutsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    memberships?: MembershipCreateNestedManyWithoutUserInput
    workoutPlans?: WorkoutPlanCreateNestedManyWithoutTrainerInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    workoutCharts?: WorkoutChartCreateNestedManyWithoutUserInput
    bodyMetrics?: BodyMetricCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMemberWorkoutsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    workoutPlans?: WorkoutPlanUncheckedCreateNestedManyWithoutTrainerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    workoutCharts?: WorkoutChartUncheckedCreateNestedManyWithoutUserInput
    bodyMetrics?: BodyMetricUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMemberWorkoutsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMemberWorkoutsInput, UserUncheckedCreateWithoutMemberWorkoutsInput>
  }

  export type WorkoutPlanCreateWithoutMemberWorkoutsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    trainer?: UserCreateNestedOneWithoutWorkoutPlansInput
  }

  export type WorkoutPlanUncheckedCreateWithoutMemberWorkoutsInput = {
    id?: string
    name: string
    description?: string | null
    trainerId?: string | null
    createdAt?: Date | string
  }

  export type WorkoutPlanCreateOrConnectWithoutMemberWorkoutsInput = {
    where: WorkoutPlanWhereUniqueInput
    create: XOR<WorkoutPlanCreateWithoutMemberWorkoutsInput, WorkoutPlanUncheckedCreateWithoutMemberWorkoutsInput>
  }

  export type UserUpsertWithoutMemberWorkoutsInput = {
    update: XOR<UserUpdateWithoutMemberWorkoutsInput, UserUncheckedUpdateWithoutMemberWorkoutsInput>
    create: XOR<UserCreateWithoutMemberWorkoutsInput, UserUncheckedCreateWithoutMemberWorkoutsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMemberWorkoutsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMemberWorkoutsInput, UserUncheckedUpdateWithoutMemberWorkoutsInput>
  }

  export type UserUpdateWithoutMemberWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    workoutPlans?: WorkoutPlanUpdateManyWithoutTrainerNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    workoutCharts?: WorkoutChartUpdateManyWithoutUserNestedInput
    bodyMetrics?: BodyMetricUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMemberWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    workoutPlans?: WorkoutPlanUncheckedUpdateManyWithoutTrainerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    workoutCharts?: WorkoutChartUncheckedUpdateManyWithoutUserNestedInput
    bodyMetrics?: BodyMetricUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkoutPlanUpsertWithoutMemberWorkoutsInput = {
    update: XOR<WorkoutPlanUpdateWithoutMemberWorkoutsInput, WorkoutPlanUncheckedUpdateWithoutMemberWorkoutsInput>
    create: XOR<WorkoutPlanCreateWithoutMemberWorkoutsInput, WorkoutPlanUncheckedCreateWithoutMemberWorkoutsInput>
    where?: WorkoutPlanWhereInput
  }

  export type WorkoutPlanUpdateToOneWithWhereWithoutMemberWorkoutsInput = {
    where?: WorkoutPlanWhereInput
    data: XOR<WorkoutPlanUpdateWithoutMemberWorkoutsInput, WorkoutPlanUncheckedUpdateWithoutMemberWorkoutsInput>
  }

  export type WorkoutPlanUpdateWithoutMemberWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainer?: UserUpdateOneWithoutWorkoutPlansNestedInput
  }

  export type WorkoutPlanUncheckedUpdateWithoutMemberWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trainerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutWorkoutChartsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    memberships?: MembershipCreateNestedManyWithoutUserInput
    workoutPlans?: WorkoutPlanCreateNestedManyWithoutTrainerInput
    memberWorkouts?: MemberWorkoutCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    bodyMetrics?: BodyMetricCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkoutChartsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    workoutPlans?: WorkoutPlanUncheckedCreateNestedManyWithoutTrainerInput
    memberWorkouts?: MemberWorkoutUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    bodyMetrics?: BodyMetricUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkoutChartsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkoutChartsInput, UserUncheckedCreateWithoutWorkoutChartsInput>
  }

  export type UserUpsertWithoutWorkoutChartsInput = {
    update: XOR<UserUpdateWithoutWorkoutChartsInput, UserUncheckedUpdateWithoutWorkoutChartsInput>
    create: XOR<UserCreateWithoutWorkoutChartsInput, UserUncheckedCreateWithoutWorkoutChartsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkoutChartsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkoutChartsInput, UserUncheckedUpdateWithoutWorkoutChartsInput>
  }

  export type UserUpdateWithoutWorkoutChartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    workoutPlans?: WorkoutPlanUpdateManyWithoutTrainerNestedInput
    memberWorkouts?: MemberWorkoutUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    bodyMetrics?: BodyMetricUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkoutChartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    workoutPlans?: WorkoutPlanUncheckedUpdateManyWithoutTrainerNestedInput
    memberWorkouts?: MemberWorkoutUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    bodyMetrics?: BodyMetricUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    memberships?: MembershipCreateNestedManyWithoutUserInput
    workoutPlans?: WorkoutPlanCreateNestedManyWithoutTrainerInput
    memberWorkouts?: MemberWorkoutCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    workoutCharts?: WorkoutChartCreateNestedManyWithoutUserInput
    bodyMetrics?: BodyMetricCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    workoutPlans?: WorkoutPlanUncheckedCreateNestedManyWithoutTrainerInput
    memberWorkouts?: MemberWorkoutUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    workoutCharts?: WorkoutChartUncheckedCreateNestedManyWithoutUserInput
    bodyMetrics?: BodyMetricUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    workoutPlans?: WorkoutPlanUpdateManyWithoutTrainerNestedInput
    memberWorkouts?: MemberWorkoutUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    workoutCharts?: WorkoutChartUpdateManyWithoutUserNestedInput
    bodyMetrics?: BodyMetricUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    workoutPlans?: WorkoutPlanUncheckedUpdateManyWithoutTrainerNestedInput
    memberWorkouts?: MemberWorkoutUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    workoutCharts?: WorkoutChartUncheckedUpdateManyWithoutUserNestedInput
    bodyMetrics?: BodyMetricUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    memberships?: MembershipCreateNestedManyWithoutUserInput
    workoutPlans?: WorkoutPlanCreateNestedManyWithoutTrainerInput
    memberWorkouts?: MemberWorkoutCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    workoutCharts?: WorkoutChartCreateNestedManyWithoutUserInput
    bodyMetrics?: BodyMetricCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    workoutPlans?: WorkoutPlanUncheckedCreateNestedManyWithoutTrainerInput
    memberWorkouts?: MemberWorkoutUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    workoutCharts?: WorkoutChartUncheckedCreateNestedManyWithoutUserInput
    bodyMetrics?: BodyMetricUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    workoutPlans?: WorkoutPlanUpdateManyWithoutTrainerNestedInput
    memberWorkouts?: MemberWorkoutUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    workoutCharts?: WorkoutChartUpdateManyWithoutUserNestedInput
    bodyMetrics?: BodyMetricUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    workoutPlans?: WorkoutPlanUncheckedUpdateManyWithoutTrainerNestedInput
    memberWorkouts?: MemberWorkoutUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    workoutCharts?: WorkoutChartUncheckedUpdateManyWithoutUserNestedInput
    bodyMetrics?: BodyMetricUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBodyMetricsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    memberships?: MembershipCreateNestedManyWithoutUserInput
    workoutPlans?: WorkoutPlanCreateNestedManyWithoutTrainerInput
    memberWorkouts?: MemberWorkoutCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    workoutCharts?: WorkoutChartCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBodyMetricsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    workoutPlans?: WorkoutPlanUncheckedCreateNestedManyWithoutTrainerInput
    memberWorkouts?: MemberWorkoutUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    workoutCharts?: WorkoutChartUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBodyMetricsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBodyMetricsInput, UserUncheckedCreateWithoutBodyMetricsInput>
  }

  export type UserUpsertWithoutBodyMetricsInput = {
    update: XOR<UserUpdateWithoutBodyMetricsInput, UserUncheckedUpdateWithoutBodyMetricsInput>
    create: XOR<UserCreateWithoutBodyMetricsInput, UserUncheckedCreateWithoutBodyMetricsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBodyMetricsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBodyMetricsInput, UserUncheckedUpdateWithoutBodyMetricsInput>
  }

  export type UserUpdateWithoutBodyMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    workoutPlans?: WorkoutPlanUpdateManyWithoutTrainerNestedInput
    memberWorkouts?: MemberWorkoutUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    workoutCharts?: WorkoutChartUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBodyMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    workoutPlans?: WorkoutPlanUncheckedUpdateManyWithoutTrainerNestedInput
    memberWorkouts?: MemberWorkoutUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    workoutCharts?: WorkoutChartUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MembershipCreateManyUserInput = {
    id?: string
    membershipType: $Enums.MembershipType
    startDate: Date | string
    endDate: Date | string
    status: $Enums.MembershipStatus
    createdAt?: Date | string
  }

  export type WorkoutPlanCreateManyTrainerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type MemberWorkoutCreateManyUserInput = {
    id?: string
    workoutPlanId: string
    date: Date | string
    duration?: number | null
    caloriesBurned?: number | null
    createdAt?: Date | string
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paymentDate: Date | string
    paymentMethod: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    createdAt?: Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    provider: $Enums.AuthProvider
    providerAccountId: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutChartCreateManyUserInput = {
    id?: string
    date: Date | string
    exercise: string
    duration?: number | null
    sets?: number | null
    reps?: number | null
    weight?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type BodyMetricCreateManyUserInput = {
    id?: string
    date: Date | string
    weight?: number | null
    height?: number | null
    bmi?: number | null
    createdAt?: Date | string
  }

  export type MembershipUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipType?: EnumMembershipTypeFieldUpdateOperationsInput | $Enums.MembershipType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipType?: EnumMembershipTypeFieldUpdateOperationsInput | $Enums.MembershipType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    membershipType?: EnumMembershipTypeFieldUpdateOperationsInput | $Enums.MembershipType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutPlanUpdateWithoutTrainerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberWorkouts?: MemberWorkoutUpdateManyWithoutWorkoutPlanNestedInput
  }

  export type WorkoutPlanUncheckedUpdateWithoutTrainerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberWorkouts?: MemberWorkoutUncheckedUpdateManyWithoutWorkoutPlanNestedInput
  }

  export type WorkoutPlanUncheckedUpdateManyWithoutTrainerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberWorkoutUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    caloriesBurned?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutPlan?: WorkoutPlanUpdateOneRequiredWithoutMemberWorkoutsNestedInput
  }

  export type MemberWorkoutUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutPlanId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    caloriesBurned?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberWorkoutUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutPlanId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    caloriesBurned?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerAccountId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutChartUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    exercise?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutChartUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    exercise?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutChartUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    exercise?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyMetricUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyMetricUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyMetricUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberWorkoutCreateManyWorkoutPlanInput = {
    id?: string
    userId: string
    date: Date | string
    duration?: number | null
    caloriesBurned?: number | null
    createdAt?: Date | string
  }

  export type MemberWorkoutUpdateWithoutWorkoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    caloriesBurned?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMemberWorkoutsNestedInput
  }

  export type MemberWorkoutUncheckedUpdateWithoutWorkoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    caloriesBurned?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberWorkoutUncheckedUpdateManyWithoutWorkoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    caloriesBurned?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}