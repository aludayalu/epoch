import Head from 'next/head'
import { Container, Avatar, Card, Navbar, Text, Spacer, Divider, Button, Link} from '@nextui-org/react'

export default function Profile() {
    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <Navbar isBordered isCompact variant="sticky">
                <Navbar.Brand>
                    <Text h3 css={{ textGradient: "45deg, $purple600 -20%, $red600 100%"}}>SocialHub</Text>
                </Navbar.Brand>
            </Navbar>
            <Spacer y={3}/>
            <Container>
                <Avatar size='' bordered color='gradient' src='https://avatars.githubusercontent.com/u/112749353?v=4' css={{size: "300px", "margin-left": "auto", "margin-right": "auto"}}/>
                <Spacer y={2}/>
                <Card isHoverable isPressable css={{"maxWidth":"650px", bgBlur: "#0f111466", "margin-left": "auto", "margin-right": "auto" }}>
                    <Card.Header>
                        <Text h2 color='secondary' css={{ textGradient: "45deg, $purple600 -20%, $red600 100%"}}>{Name}</Text>
                    </Card.Header>
                    <Divider/>
                    <Card.Body>
                        <Text h4 color='secondary' >My favorite color is {colorName}, I play {sportsName}, Listen to {musicGenre} and I drink {drinkName}. Come find me!</Text>
                    </Card.Body>
                </Card>
                <Spacer y={2}/>
                <Button bordered color="gradient" size='md' css={{"margin-left": "auto", "margin-right": "auto"}}>
                    <Link href='{API}'>Next</Link>
                </Button>
            </Container>
        </>
    )
}