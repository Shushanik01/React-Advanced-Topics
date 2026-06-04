import { useEffect, useRef } from "react";

import {
  useInfiniteQuery,
} from "@tanstack/react-query";

import {
  useVirtualizer,
} from "@tanstack/react-virtual";

export default function UsersList() {
  const parentRef = useRef(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["users"],

    queryFn: async ({ pageParam = 0 }) => {
      const response = await fetch(
        `https://dummyjson.com/users?limit=20&skip=${pageParam}`
      );

      return response.json();
    },

    initialPageParam: 0,

    getNextPageParam: (
      lastPage,
      allPages
    ) => {
      const loadedUsers =
        allPages.flatMap(
          page => page.users
        ).length;

      return loadedUsers >= lastPage.total
        ? undefined
        : loadedUsers;
    },
  });

  const users =
    data?.pages.flatMap(
      page => page.users
    ) ?? [];

  const rowVirtualizer = useVirtualizer({
    count: users.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 60,
    overscan: 5,
  });

  useEffect(() => {
    const virtualItems =
      rowVirtualizer.getVirtualItems();

    const lastItem =
      virtualItems[
        virtualItems.length - 1
      ];

    if (!lastItem) return;

    if (
      lastItem.index >= users.length - 5 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    users.length,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    rowVirtualizer.getVirtualItems(),
  ]);

  return (
    <div
      ref={parentRef}
      style={{
        height: "500px",
        overflow: "auto",
        border: "1px solid gray",
      }}
    >
      <div
        style={{
          height:
            rowVirtualizer.getTotalSize(),
          position: "relative",
        }}
      >
        {rowVirtualizer
          .getVirtualItems()
          .map((virtualRow) => {
            const user =
              users[virtualRow.index];

            return (
              <div
                key={user.id}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height:
                    virtualRow.size,
                  transform: `translateY(${virtualRow.start}px)`,
                  borderBottom:
                    "1px solid #ddd",
                  padding: "10px",
                  boxSizing:
                    "border-box",
                }}
              >
                {user.firstName}
                {" "}
                {user.lastName}
              </div>
            );
          })}
      </div>

      {isFetchingNextPage && (
        <p>Loading...</p>
      )}
    </div>
  );
}