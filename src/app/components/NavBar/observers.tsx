export const intersectionObserver = {
    initObserver: ({ rootMargin, threshold }: IntersectionObserverInit, intersectionCallback: (entry: IntersectionObserverEntry[]) => void) => {
        return new IntersectionObserver((entries) => {
            intersectionCallback(entries);
        }, { rootMargin, threshold })
    },
    startObserving: (observer: IntersectionObserver, observable: Element) => {
        observer.observe(observable);
    },
    stopObserving: (observer: IntersectionObserver, observable: Element) => {
        observer.unobserve(observable);
    },
};

export const setActiveLinkWhenScroll = {
    // initObserver: (targetElement: Element, { rootMargin, threshold }: observerParamsType) => {
    //     return new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 console.log(entry.target.id);
    //                 setCurrentRoute(entry.target.id);
    //             }
    //         });
        
    //     }, {
    //         rootMargin,
    //         threshold: threshold?
    //     });
    // }
}