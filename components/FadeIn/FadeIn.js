import React from "react";

const FadeInSection = ({
                           children,
                       }) => {
    const domRef = React.useRef();

    const [isVisible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            // In your case there's only one element to observe:
            if (entries[0].isIntersecting) {

                // Not possible to set it back to false like this:
                setVisible(true);

                // No need to keep observing:
                observer.unobserve(domRef.current);
            }
        });

        observer.observe(domRef.current);

        //return () => observer.unobserve(domRef.current);
    }, []);

    return (<div ref={domRef} className={`fadein ${isVisible ? 'is-visible' : ''}`}>{children}</div>);
};
export default FadeInSection;