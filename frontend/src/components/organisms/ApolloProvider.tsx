"use client";

import { ApolloProvider as ApolloProviderComponent } from "@apollo/client";
import { client } from "../../services/apolloClientService";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

export const ApolloProvider: React.FC<Props> = ({ children }) => {
  return (
    <ApolloProviderComponent client={client}>
      {children}
    </ApolloProviderComponent>
  );
};
