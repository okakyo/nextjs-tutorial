import { gql } from '@apollo/client';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  introduction?: Maybe<Scalars['String']>;
  task: Array<TaskEntity>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};


export type TaskEntity = {
  __typename?: 'TaskEntity';
  id: Scalars['Float'];
  title: Scalars['String'];
  description: Scalars['String'];
  author: UserEntity;
  state: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  users?: Maybe<Array<UserEntity>>;
  user?: Maybe<UserEntity>;
  tasks: Array<TaskEntity>;
  task?: Maybe<TaskEntity>;
};


export type QueryUserArgs = {
  id: Scalars['Float'];
};


export type QueryTasksArgs = {
  userId: Scalars['Float'];
};


export type QueryTaskArgs = {
  taskId: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  saveUser: UserEntity;
  deleteUser?: Maybe<UserEntity>;
  createTask: TaskEntity;
};


export type MutationSaveUserArgs = {
  user: InputUserValue;
};


export type MutationDeleteUserArgs = {
  id: Scalars['Float'];
};


export type MutationCreateTaskArgs = {
  task: InputTask;
  userId: Scalars['Float'];
};

export type InputUserValue = {
  id?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  email: Scalars['String'];
  introduction: Scalars['String'];
};

export type InputTask = {
  id?: Maybe<Scalars['Float']>;
  title: Scalars['String'];
  description: Scalars['String'];
  state: Scalars['Float'];
};


      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    