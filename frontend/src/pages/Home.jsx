import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

import SiteDetails from '../components/SiteDetails'

const Home = () => {
    const [sites, setSites] = useState(null)
    const {user} = useAuthContext()

    useEffect(() => {
        const fetchSites = async () => {
            const response = await fetch('/api/sites', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                setSites(json)
            }
        }

        if (user) {
            fetchSites()
        }
    }, [user])

    return (
        <div className="home">
            <div className="sites">
                {sites && sites.map((site) => (
                    <SiteDetails key={site._id} site={site} />
                ))}
            </div>
        </div>
    )
}

export default Home;