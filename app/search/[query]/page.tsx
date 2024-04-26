import SearchMovies from '@/app/components/SearchMovies'
import SearchResults from '@/app/components/SearchResults'
import React from 'react'

function SearchPage({ params }: { params: { query: string } }) {
    const query = params.query

    return (
        <>
            <SearchMovies />
            <SearchResults query={query} />
        </>
    )
}

export default SearchPage