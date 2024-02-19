export type IconLink = {
    url: string;
    icon: SocialKeys;
};

type SocialKeys = "facebook" | "twitter" | "linkedin" | "instagram" | "github";

export type AchievementCount = {
    icon: IconKeys;
    count: number | string;
    label: string;
};

type IconKeys = "emoji-smile" | "journal-richtext" | "headset" | "award";
