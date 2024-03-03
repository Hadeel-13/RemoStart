import {
    Card,
    CardActionArea,
    // CardActions,
    CardContent,
    CardMedia,
    Stack,
    Typography,
} from "@mui/material";

export default function EmployeeCard({ data }) {
    return (
        <Card
            variant="outlined"
            sx={{
                maxWidth: 321,
                border: "none",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={data.image}
                    alt="green iguana"
                />
            </CardActionArea>
            <CardContent>
                <Typography
                    color={"myBlack.main"}
                    sx={{ fontSize: 18, fontWeight: 600 }}
                >
                    {data.name}
                </Typography>
                <Typography
                    color={"myBlack.main"}
                    sx={{ fontSize: 12, fontWeight: 400 }}
                >
                    {data.subTitle}
                </Typography>
                <Stack
                    sx={{ mt: 2 }}
                    direction={"row"}
                    justifyContent={"start"}
                    alignItems={"center"}
                    gap={0.5}
                >
                    {data.roles.length != 0
                        ? data.roles?.map((role, i) => (
                              <Stack
                                  key={i}
                                  direction={"row"}
                                  justifyContent={"center"}
                                  alignItems={"center"}
                                  sx={{
                                      width: 45,
                                      height: 45,
                                      borderRadius: "50%",
                                      bgcolor: "myBlack.main",
                                  }}
                              >
                                  <Typography
                                      component={"img"}
                                      src={
                                          role === "web"
                                              ? web
                                              : role === "leader"
                                              ? leader
                                              : role === "gaming"
                                              ? gaming
                                              : design
                                      }
                                      width={35}
                                      height={35}
                                      alt="icon"
                                  />
                              </Stack>
                          ))
                        : null}
                </Stack>
            </CardContent>
            {/* <CardActions>
            </CardActions> */}
        </Card>
    );
}
import PropTypes from "prop-types";
EmployeeCard.propTypes = {
    data: PropTypes.object.isRequired,
};
import design from "../../assets/images/icons/Design.svg";
import gaming from "../../assets/images/icons/gaming.svg";
import web from "../../assets/images/icons/Web_Development.svg";
import leader from "../../assets/images/icons/leader.svg";
