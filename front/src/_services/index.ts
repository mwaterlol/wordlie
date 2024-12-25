import { mergeQueryKeys } from "@lukemorales/query-key-factory";
import { platformQueryKeys } from "@/_core/api";
export const queries = mergeQueryKeys(platformQueryKeys);
