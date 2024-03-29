export type Project = {
    name: string;
    url: string;
    desc: Array<string>;
    source: string; // although just defined as string, it can only be either company or freelance...
    imgPath: Array<string>; // array of path string
}

export type Experience = {
    company: string;
    jobTitle: string;
    duration: string;
    desc: Array<string>;
}