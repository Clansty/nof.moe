import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Home" {...a11yProps(0)} />
                    <Tab label="About" {...a11yProps(1)} />
                    <Tab label="Blog" href="https://blog.nofated.win" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Box sx={{ my: 1 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Yoo!
                    </Typography>
                    I'm Nofated. I am a newbie in the coding world.<br />
                    Find me on <GitHubIcon>GitHub</GitHubIcon>;GitHub, Twitter and Telegram.
                </Box>
                <Box sx={{ my: 1 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Misc
                    </Typography>
                    🏫 I am a student who lives in Beijing, China.<br />
                    📒️ I have a blog based on the Hexo.<br />
                    ⌨️ Coding and open-source are great! Though I haven't learnt any languages...<br />
                    🏢 I am a member of LittleSkin Community Support . I help maintain the bot and manual.<br />
                    🚔 I am a fan of Minecraft, Grand Theft Auto, and anime.<br />
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box sx={{ my: 1 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        About
                    </Typography>
                    I am in senior high and I'm preparing for the Chinese College Entrance Examination, aka GaoKao.<br />

                    I do open-source works, you can check them on GitHub. But I didn't have a completely independent open-source project.😢<br />

                    I am happy to chat. Chinese is OK but I am very poor at English listening and speaking.😰<br />
                </Box>
            </TabPanel>
        </Box>
    );
}