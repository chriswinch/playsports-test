import React, { useRef, useEffect } from 'react';

type ResizeFunc = () => void;

const useWindowResize = (onResize: ResizeFunc, onResizeEnd: ResizeFunc) => {
    const resizeTimerRef: { current: NodeJS.Timeout | null } = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            onResize();
            clearTimeout(resizeTimerRef.current as NodeJS.Timeout);
            resizeTimerRef.current = setTimeout(onResizeEnd, 100);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
}

export default useWindowResize;
