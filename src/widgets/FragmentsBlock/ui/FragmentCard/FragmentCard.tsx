import { Fragment } from "pages/HomePage/ui/HomePage"
import { memo } from "react"

const texts: Record<string, { locked: string; seen: string }> = {
    dogs_has_boost: {
        locked: "This fragment is locked. Earn it by boosting your project.",
        seen: "You have unlocked the boost fragment!"
    },
    dogs_korean_community: {
        locked: "Locked. Join the Korean community to unlock.",
        seen: "Korean community fragment unlocked!"
    },
    dogs_league: {
        locked: "Locked. Participate in the league to unlock.",
        seen: "League fragment unlocked!"
    },
    dogs_official_community: {
        locked: "Locked. Join the official community to unlock.",
        seen: "Official community fragment unlocked!"
    },
    dogs_treasure_hunt: {
        locked: "Locked. Complete the treasure hunt to unlock.",
        seen: "Treasure hunt fragment unlocked!"
    },
    dogs_turkish_community: {
        locked: "Locked. Join the Turkish community to unlock.",
        seen: "Turkish community fragment unlocked!"
    }
}

interface FragmentCardProps {
    className?: string
    fragment: Fragment
}

const FragmentCard = memo(({ className }: FragmentCardProps) => {
    return <div></div>
})

export default FragmentCard
