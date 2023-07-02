//! from this
// if (isDriveTest) {
//   formatData = (data) =>
//     data.map((option) => ({
//       label: option.drive_title ?? option.drive_id,
//       value: option.drive_id,
//     }));
// } else {
//   formatData = (data) =>
//     data.map((option) => ({
//       label: option.name ?? option.id,
//       value: option.id,
//       latitude: option.latitude,
//       longitude: option.longitude,
//     }));
// }

//!   to this
const formatData = useCallback(
  (data) =>
    data.map((option) => ({
      label: option[labelValueKeys.label] ?? option[labelValueKeys.value],
      value: option[labelValueKeys.value],
      latitude: option?.latitude,
      longitude: option?.longitude,
    })),
  [labelValueKeys]
);
