import { Card, CardContent, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const Error = ({
    message,
    icon,
}: {
    message: string;
    icon?: React.ReactNode;
}) => {
    return (
        <Card
            sx={{
                width: 200,
                textAlign: "center",
                padding: 2,
                margin: "auto",
                mt: 5,
            }}
        >
            <CardContent>
                {icon ? icon : <ErrorOutlineIcon fontSize="large" />}

                <Typography variant="h6">{message}</Typography>
            </CardContent>
        </Card>
    );
};

export default Error;