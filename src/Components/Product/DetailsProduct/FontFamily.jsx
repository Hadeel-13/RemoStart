import { Container, Divider, Stack, Typography } from "@mui/material";

export default function FontFamily() {
    return (
        <Container maxWidth="xl">
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"end"}
                flexWrap={"wrap"}
                sx={{ mx: 3 }}
                gap={3}
            >
                <Typography
                    sx={{
                        position: "relative",
                        top: { sm: 25, lg: 50 },
                        display: { xs: "none", md: "block" },
                        fontSize: { xs: 100, lg: 200 },
                        fontWeight: 700,
                    }}
                >
                    Aa
                </Typography>
                <Typography
                    sx={{ fontSize: { xs: 35, lg: 70 }, fontWeight: 600 }}
                >
                    FigTree google
                </Typography>
                <Typography
                    sx={{
                        fontSize: { xs: 25, lg: 50 },
                        fontWeight: 300,
                        // display: { xs: "none", sm: "block" },
                    }}
                >
                    Font
                </Typography>
            </Stack>
            <Divider />
            <Stack alignItems={"start"} sx={{ my: 13, mx: 3 }}>
                <Typography
                    sx={{
                        fontSize: { xs: 25, lg: 50 },
                        fontWeight: 300,
                        letterSpacing: -1.5,
                    }}
                >
                    A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                    <br /> a b c d e f g h i j k l m n o p q r s t u v w x y z
                </Typography>
            </Stack>
        </Container>
    );
}
