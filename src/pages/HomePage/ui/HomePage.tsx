import { memo } from "react"
import { Title } from "shared/ui/Typography/Title"
import FragmentsBlock from "widgets/FragmentsBlock/FragmentsBlock"
export interface Fragment {
    id: number
    status: string
    rarity: number | null
    static_rarity: string
    kind: string
}

export interface Wrap {
    project_id: string
    id: number
    status: string
    league: number
    rarity: number
    fragments: Fragment[]
}

const emptyWrap: Wrap = {
    project_id: "dogs",
    id: 1,
    status: "analyzed",
    league: 3,
    rarity: 98,
    fragments: [
        {
            id: 14805,
            status: "locked",
            rarity: null,
            static_rarity: "legendary",
            kind: "dogs_has_boost"
        },
        {
            id: 14802,
            status: "locked",
            rarity: null,
            static_rarity: "uncommon",
            kind: "dogs_korean_community"
        },
        {
            id: 14809,
            status: "locked",
            rarity: null,
            static_rarity: "mythic",
            kind: "dogs_league"
        },
        {
            id: 14804,
            status: "locked",
            rarity: null,
            static_rarity: "mainstream",
            kind: "dogs_official_community"
        },
        {
            id: 14803,
            status: "locked",
            rarity: null,
            static_rarity: "rare",
            kind: "dogs_treasure_hunt"
        },
        {
            id: 14801,
            status: "locked",
            rarity: null,
            static_rarity: "uncommon",
            kind: "dogs_turkish_community"
        }
    ]
}

const halfCompletedWrap: Wrap = {
    project_id: "dogs",
    id: 1,
    status: "analyzed",
    league: 3,
    rarity: 98,
    fragments: [
        {
            id: 14805,
            status: "locked",
            rarity: null,
            static_rarity: "legendary",
            kind: "dogs_has_boost"
        },
        {
            id: 14802,
            status: "locked",
            rarity: null,
            static_rarity: "uncommon",
            kind: "dogs_korean_community"
        },
        {
            id: 14809,
            status: "seen",
            rarity: null,
            static_rarity: "mythic",
            kind: "dogs_league"
        },
        {
            id: 14804,
            status: "seen",
            rarity: 84,
            static_rarity: "mainstream",
            kind: "dogs_official_community"
        },
        {
            id: 14803,
            status: "locked",
            rarity: null,
            static_rarity: "rare",
            kind: "dogs_treasure_hunt"
        },
        {
            id: 14801,
            status: "seen",
            rarity: 46,
            static_rarity: "uncommon",
            kind: "dogs_turkish_community"
        }
    ]
}
const completedWrap: Wrap = {
    project_id: "dogs",
    id: 1,
    status: "analyzed",
    league: 3,
    rarity: 98,
    fragments: [
        {
            id: 14805,
            status: "seen",
            rarity: 98,
            static_rarity: "legendary",
            kind: "dogs_has_boost"
        },
        {
            id: 14802,
            status: "seen",
            rarity: 84,
            static_rarity: "uncommon",
            kind: "dogs_korean_community"
        },
        {
            id: 14809,
            status: "seen",
            rarity: null,
            static_rarity: "mythic",
            kind: "dogs_league"
        },
        {
            id: 14804,
            status: "seen",
            rarity: 84,
            static_rarity: "mainstream",
            kind: "dogs_official_community"
        },
        {
            id: 14803,
            status: "seen",
            rarity: null,
            static_rarity: "rare",
            kind: "dogs_treasure_hunt"
        },
        {
            id: 14801,
            status: "seen",
            rarity: 46,
            static_rarity: "uncommon",
            kind: "dogs_turkish_community"
        }
    ]
}
interface HomeProps {
    className?: string
}

const HomePage = memo(({ className }: HomeProps) => {
    return (
        <section>
            <Title>Hi, hello</Title>
            <FragmentsBlock wrap={emptyWrap} />
        </section>
    )
})

export default HomePage
