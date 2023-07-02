//? this function is sending a request to the backend, so the idea is that, we have a conditional expression for the our body request, if we see the traditional way is using promises(resolve, reject) but after refactoring we're using more profisional code to handle the case .
//! From this point on
// const getDriveTestFilters = useCallback(
//   (searchValue) => {
//     driveController.abort();
//     driveController = new AbortController();
//     setFilters((oldState) => ({ ...oldState, isSearch: true }));
//     if (filters.excludeFilters) {
//       return new Promise((resolve, reject) => {
//         driveTestMapApis
//           .getDriveTestFilters(
//             {
//               search: searchValue,
//               isSearch: true,
//             },
//             driveController.signal,
//           )
//           .then((response) => {
//             resolve(response.data);
//           })
//           .catch((error) => {
//             reject(error);
//           });
//       });
//     }
//     return new Promise((resolve, reject) => {
//       driveTestMapApis
//         .getDriveTestFilters(
//           {
//             search: searchValue,
//             isSearch: true,
//             filters: { governorate: filters.governorate },
//             date: {
//               from: formatDate(filters.date[0]),
//               to: formatDate(filters.date[1]),
//             },
//           },
//           driveController.signal,
//         )
//         .then((response) => {
//           resolve(response.data);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   },
//   [filters.governorate, filters.date, filters.excludeFilters],
// );

// TODO: please change the function name
//! to this point when we have a better way to do this
const getDriveTestFilters = useCallback(
  async (searchValue) => {
    const payload = filters.excludeFilters
      ? { search: searchValue, isSearch: true }
      : {
          search: searchValue,
          isSearch: true,
          filters: { governorate: filters.governorate },
          date: {
            from: formatDate(filters.date[0]),
            to: formatDate(filters.date[1]),
          },
        };

    const { data } = await driveTestMapApis.getDriveTestFilters(payload);

    return data;
  },
  [filters.excludeFilters, filters.date, filters.governorate]
);
