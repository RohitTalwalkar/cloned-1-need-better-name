"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// TODO: enable in local and staging
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const [client] = React.useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      {children}
      {/* TODO: enable in local and staging
      <ReactQueryDevtools initialIsOpen={false} /> 
      */}
    </QueryClientProvider>
  );
}
