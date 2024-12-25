import { mainPageRoutes } from "@/domains/mainPage";
import { statisticRoute } from "@/domains/statistic/routes";
import { Route } from "@/types";

export const mainRoutes: Route[] = [mainPageRoutes, statisticRoute];
