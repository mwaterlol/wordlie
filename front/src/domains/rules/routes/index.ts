import { Route } from "@/types";
import {
    RulesStep1Page,
    RulesStep2Page,
    RulesStep3Page,
    RulesStep4Page,
} from "../pages";

export const rulesRoutes: Route[] = [
    { path: "/rules-1", Component: RulesStep1Page },
    { path: "/rules-2", Component: RulesStep2Page },
    { path: "/rules-3", Component: RulesStep3Page },
    { path: "/rules-4", Component: RulesStep4Page },
];
