import Head from 'next/head'
import { Container, Avatar, Card, Navbar, Text, Spacer, Divider, Button, Link,Loading} from '@nextui-org/react'
import { useSession,signIn,signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

var request = require('sync-request');
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Profile(context) {
    const router = useRouter()
    var { id } = router.query
    var id = parseInt(id)
    var {data: session}=useSession()
    if (session) {}else{return(<><Button onClick={signIn}>Sign In</Button></>)}
    var all=JSON.parse(request("GET","http://127.0.0.1:5000/data?name="+session.user.name).body)
    if (id===undefined) {id=0}
    var id = id%(all['all'].length)
    if (all['status']==='error') {return(<><Text>Please fill up the survey form</Text></>)}
    var resp=all['all'][id]
    const Name=resp['name']
    const colorName=resp['color']
    const sportsName=resp['sport']
    const musicGenre=resp['music']
    const drinkName=resp['drink']
    const match=resp['match']
    console.log(typeof id)
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
                <Avatar size='' bordered color='gradient' src={resp['image']} css={{size: "300px", "margin-left": "auto", "margin-right": "auto"}}/>
                <Spacer y={2}/>
                <Card isHoverable isPressable css={{"maxWidth":"650px", bgBlur: "#0f111466", "margin-left": "auto", "margin-right": "auto" }}>
                    <Card.Header>
                        <Text h2 color='secondary' css={{ textGradient: "45deg, $purple600 -20%, $red600 100%"}}>{Name} : {match}% Match</Text>
                    </Card.Header>
                    <Divider/>
                    <Card.Body>
                        <Text h4 color='secondary' >My favorite color is {colorName}, I play {sportsName}, Listen to {musicGenre} and I drink {drinkName}. Come find me!</Text>
                    </Card.Body>
                </Card>
                <Spacer y={2}/>
                <Button bordered color="gradient" size='md' css={{"margin-left": "auto", "margin-right": "auto"}}>
                    <Link href={resp['slack']}>Contact Me!</Link>
                </Button>
                <Spacer y={1}></Spacer>
                <Button bordered color="gradient" size='md' css={{"margin-left": "auto", "margin-right": "auto"}}>
                    <Link href={'/?id='+(id+1).toString()}>Next :( ?</Link>
                </Button>
                <footer></footer>
            </Container>
        </>
    )
}