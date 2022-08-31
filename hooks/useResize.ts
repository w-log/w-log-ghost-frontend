import { useEffect } from 'react';
import { debounceEvent } from '@/lib/event';

export default function useResize(
    handlerFn: (...args: any[]) => void,
    debounceDelay?: number
) {
    useEffect(() => {
        const debounceFn = debounceEvent(handlerFn, debounceDelay ?? 250);
        window.addEventListener('resize', debounceFn);
        handlerFn();
        return () => window.removeEventListener('resize', debounceFn);
    }, [handlerFn, debounceDelay]);
}
