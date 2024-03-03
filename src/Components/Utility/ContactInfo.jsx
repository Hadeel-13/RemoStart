import { Typography } from "@mui/material";
export default function ContactInfo() {
    return (
        <div>
            {informations?.map((info, i) => (
                <Typography key={i} component={"div"} sx={{ mb: 1.5 }}>
                    {info.icon ? (
                        <span>
                            <img
                                src={info.icon}
                                alt="icon"
                                width={18}
                                height={18}
                            />
                        </span>
                    ) : null}
                    <span> {info.link}</span>
                </Typography>
            ))}
        </div>
    );
}
import phone from "../../assets/images/icons/phone-call.svg";
import mail from "../../assets/images/icons/mail.svg";
import map from "../../assets/images/icons/map-pin.svg";
const informations = [
    {
        link: "+963 998 630 508",
        icon: phone,
    },
    {
        link: "HDHD13ha@gmail.com",
        icon: mail,
    },
    {
        link: "20000, Aleppo, Syria",
        icon: map,
    },
];
