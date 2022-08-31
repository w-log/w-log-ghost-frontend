import React, { useEffect } from 'react';

import useResize from '@/hooks/useResize';

import ShootingStar from '@/lib/background/ShootingStar';
import Star from '@/lib/background/Star';
import { IAnimate } from '@/lib/background/type';

export const HomeBackground = () => {
    const bgCavans = React.useRef<HTMLCanvasElement>(null);
    const [viewportWidth, setViewportWidth] = React.useState(0);
    const [viewportHeight, setViewportHeight] = React.useState(0);
    const [entities, setEntities] = React.useState<IAnimate[]>([]);

    const handleResize = React.useCallback(() => {
        setViewportWidth(window.innerWidth ?? 0);
        setViewportHeight(document?.body?.offsetHeight ?? 0);
    }, []);

    const initialze = React.useCallback(() => {
        if (!bgCavans.current) return;

        const width = window.innerWidth ?? 0;
        const height = document?.body?.offsetHeight ?? 0;
        const ctx = bgCavans.current.getContext('2d');

        const _entities = [];

        // for (var i = 0; i < height * 0.4; i++) {
        //     _entities.push(
        //         new Star(
        //             {
        //                 x: Math.random() * width,
        //                 y: Math.random() * height,
        //             },
        //             ctx
        //         )
        //     );
        // }

        _entities.push(new ShootingStar(ctx));
        _entities.push(new ShootingStar(ctx));
        _entities.push(new ShootingStar(ctx));

        setViewportWidth(width);
        setViewportHeight(height);
        setEntities(_entities);
    }, []);

    useResize(handleResize, 250);

    React.useEffect(() => {
        initialze();
    }, []);

    useEffect(() => {
        if (entities.length === 0 || !bgCavans.current) return;
        const ctx = bgCavans.current?.getContext('2d');

        let id = 0;
        /**
            'primary-1': '#0F1521',
            'primary-2': '#022650',
            secondary: '#E5E9F2',
            'typo-1': '#8D6A4C',
            'typo-2': '#5E341B',
            white: '#fff',
         */

        const animate = () => {
            if (ctx) {
                ctx.fillStyle = '#0F1521';
                ctx.fillRect(0, 0, viewportWidth, viewportHeight);
                ctx.fillStyle = '#E5E9F2';
                ctx.strokeStyle = '#E5E9F2';
            }

            entities.forEach((entity) => entity.update());

            id = requestAnimationFrame(animate);
        };

        id = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(id);
        };
    }, [entities, viewportWidth, viewportHeight]);

    return (
        <canvas
            className="fixed left-0 top-0 z-0"
            width={viewportWidth}
            height={viewportHeight}
            ref={bgCavans}
        />
    );
};
