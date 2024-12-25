export const getActiveStepIndex = (pathname: string): number => {
    switch (pathname) {
        case "/rules-1":
            return 1;
        case "/rules-2":
            return 2;
        case "/rules-3":
            return 3;
        case "/rules-4":
            return 4;
        default:
            return 1;
    }
};

export const getRotateDeg = (pathname: string): number => {
    switch (pathname) {
        case "/onboarding-introduction":
            return 0;
        case "/onboarding-description":
            return 90;
        case "/onboarding-date-of-birth":
            return 180;
        case "/onboarding-time-of-birth":
            return 270;
        case "/onboarding-place-of-birth":
            return 360;
        default:
            return 0;
    }
};
