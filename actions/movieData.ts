import { getApiResponse } from "@/lib/requests"

export const fetchTrendig= async () => {
    const data = await getApiResponse("/trending/movie/week")
    const trending = data.results
    return trending
}