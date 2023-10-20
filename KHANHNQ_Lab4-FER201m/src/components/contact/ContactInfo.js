import {
    Email,
    FacebookRounded,
    GitHub,
    Instagram,
    LinkedIn,
    Phone,
} from "@mui/icons-material";
import {
    Box,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography,
} from "@mui/material";
import React from "react";

const ContactInfo = (props) => {
    return (
        <Box sx={props.sx}>
            <Typography sx={{ textAlign: "center" }} variant="h4">
                Contact Information
            </Typography>
            <Typography
                sx={{
                    textAlign: "center",
                    my: 3,
                    width: { xs: "80%", sm: "60%" },
                    mx: "auto",
                }}
                variant="h6"
            >
                Let's work together.
            </Typography>
            <Paper elevation={3}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <Email />
                        </ListItemIcon>
                        <Link
                            color="secondary"
                            underline="hover"
                            href="mailto:andyhoaiphong2003@gmail.com"
                        >
                            khanhnqse173088@fpt.edu.vn
                        </Link>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Phone />
                        </ListItemIcon>
                        <ListItemText>
                            <Link
                                color="secondary"
                                underline="hover"
                                href="tel:+84834756222"
                            >
                                (+84) 123456789
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LinkedIn />
                        </ListItemIcon>
                        <ListItemText>
                            <Link
                                color="secondary"
                                underline="hover"
                                href="#"
                                target="_blank"
                            >
                                
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <GitHub />
                        </ListItemIcon>
                        <ListItemText>
                            <Link
                                color="secondary"
                                underline="hover"
                                href="#"
                                target="_blank"
                            >
                                
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FacebookRounded />
                        </ListItemIcon>
                        <ListItemText>
                            <Link
                                color="secondary"
                                underline="hover"
                                href="#"
                                target="_blank"
                            >
                                
                            </Link>
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <Instagram />
                        </ListItemIcon>
                        <ListItemText>
                            <Link
                                color="secondary"
                                underline="hover"
                                href="#"
                                target="_blank"
                            >
                                
                            </Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
};

export default ContactInfo;
