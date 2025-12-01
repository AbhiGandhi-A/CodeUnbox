export const TIER_LIMITS = {
  anonymous: {
    maxFilesPerZip: 100,
    canDownloadIndividual: false,
    canDownloadZip: false,
    canSave: false,
    maxSavedZips: 0,
    maxDownloadsPerSession: 0,
  },
  free: {
    maxFilesPerZip: 200,
    canDownloadIndividual: true,
    canDownloadZip: true,
    canSave: false,
    maxSavedZips: 0,
    maxDownloadsPerSession: 10,
  },
  monthly: {
    maxFilesPerZip: Number.POSITIVE_INFINITY,
    canDownloadIndividual: true,
    canDownloadZip: true,
    canSave: true,
    maxSavedZips: 5,
    maxDownloadsPerSession: Number.POSITIVE_INFINITY,
  },
  yearly: {
    maxFilesPerZip: Number.POSITIVE_INFINITY,
    canDownloadIndividual: true,
    canDownloadZip: true,
    canSave: true,
    maxSavedZips: 15,
    maxDownloadsPerSession: Number.POSITIVE_INFINITY,
  },
} as const
