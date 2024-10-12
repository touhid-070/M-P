import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
} from "@react-email/components";
import Image from "next/image";
import * as React from "react";





export const Email = ({
    userFirstName,
    duration,
    meetingTime,
    date,
    meetingUrl,
    businessName
}) => {


    return (
        <Html>
            <Head />
            <Body style={main}>
                <Container>
                    <Section style={logo}>
                        <div className='flex items-center gap-1 '>
                            <Image src='/logo.svg' width={10} height={10} alt='logo'
                                className='w-[30px] md:w-[30px] '
                            />
                            <span className='text-xl font-black text-[#007DFC]'>MeetPoint</span>
                        </div>
                    </Section>

                    <Section style={content}>

                        <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                            <Column>
                                <Heading
                                    style={{
                                        fontSize: 32,
                                        fontWeight: "bold",
                                        textAlign: "center",
                                    }}
                                >
                                    Hi {userFirstName},
                                </Heading>
                                <Heading
                                    as="h2"
                                    style={{
                                        fontSize: 26,
                                        fontWeight: "bold",
                                        textAlign: "center",
                                    }}
                                >
                                    Thank you for scheduling Meeting with {businessName},
                                </Heading>
                                <Text>Please find the meeting details:</Text>
                                <Text style={paragraph}>
                                    <b>Time: </b>
                                    {meetingTime}
                                </Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    <b>Date: </b>
                                    {date}
                                </Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    <b>Location: </b>
                                    {meetingUrl}
                                </Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    <b>Duration: </b>
                                    {duration}
                                </Text>
                                <Text
                                    style={{
                                        color: "rgb(0,0,0, 0.5)",
                                        fontSize: 14,
                                        marginTop: -5,
                                    }}
                                >
                                </Text>
                            </Column>
                        </Row>
                        <Text
                            style={{
                                color: "rgb(0,0,0, 0.5)",
                                fontSize: 14,
                                marginTop: -5,
                            }}
                        >
                            *Please Join meeting on above details {meetingUrl}
                        </Text>

                        <Row>
                            <Button href={`${meetingUrl}`} style={button}>Join Now</Button>
                        </Row>

                    </Section>

                    <Section style={containerImageFooter}>
                        <div className='flex items-center gap-1 '>
                            <Image src='/logo.svg' width={10} height={10} alt='logo'
                                className='w-[30px] md:w-[30px] '
                            />
                            <span className='text-xl font-black text-[#007DFC]'>MeetPoint</span>
                        </div>
                    </Section>


                </Container>
            </Body>
        </Html>
    );
};

export default Email;

const main = {
    backgroundColor: "#fff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
    fontSize: 16,
};

const logo = {
    padding: "30px 20px",
};


const button = {
    backgroundColor: "#e00707",
    borderRadius: 3,
    color: "#FFF",
    fontWeight: "bold",
    border: "1px solid rgb(0,0,0, 0.1)",
    cursor: "pointer",
    padding: "12px 30px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
};

const content = {
    border: "1px solid rgb(0,0,0, 0.1)",
    borderRadius: "3px",
    overflow: "hidden",
};

const image = {
    maxWidth: "100%",
};

const boxInfos = {
    padding: "20px",
    cursor: "pointer",
};

const containerImageFooter = {
    padding: "45px 0 0 0",
};
