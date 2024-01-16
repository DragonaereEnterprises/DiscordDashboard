/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type BotStats = {
  __typename?: 'BotStats';
  channelCount?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  serverCount?: Maybe<Scalars['String']['output']>;
  userCount?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  botstats?: Maybe<Array<Maybe<BotStats>>>;
};

export type GetBotStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBotStatsQuery = { __typename?: 'Query', botstats?: Array<{ __typename?: 'BotStats', id?: string | null, serverCount?: string | null, channelCount?: string | null, userCount?: string | null } | null> | null };


export const GetBotStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBotStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"botstats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"serverCount"}},{"kind":"Field","name":{"kind":"Name","value":"channelCount"}},{"kind":"Field","name":{"kind":"Name","value":"userCount"}}]}}]}}]} as unknown as DocumentNode<GetBotStatsQuery, GetBotStatsQueryVariables>;