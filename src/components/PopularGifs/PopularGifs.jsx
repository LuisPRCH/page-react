import React from 'react'
import './PopularGifs.css'
import useNearScreen from '../../hooks/UseNearScreen/UseNearScreen'
import { Suspense } from 'react'
// import PopularGifs from "./PopularSearches";

const PopularGifs = React.lazy(() => import('./PopularSearches'))

export default function LazyPopular() {
	const { isNearScreen, fromRef } = useNearScreen()

	return (
		<div ref={fromRef}>
			<Suspense fallback={null}>
				{isNearScreen ? <PopularGifs /> : null}
			</Suspense>
		</div>
	)
}
