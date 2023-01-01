import Head from 'next/head'
import { Container, Avatar, Card, Navbar, Text, Spacer, Divider, Button, Link,Loading} from '@nextui-org/react'
import { useSession,signIn,signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

var request = require('sync-request');
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Profile(context) {
    const router = useRouter()
    var { id } = router.query
    var id = (id)
    let {data: session}=useSession()
    if (session) {}else{return(
    <>
    <Head>
                <title>Profile</title>
            </Head>
            <Navbar isBordered isCompact variant="sticky">
                <Navbar.Brand>
                    <Text h3 css={{ textGradient: "45deg, $purple600 -20%, $red600 100%"}}>SocialHub</Text>
                </Navbar.Brand>
                <Navbar.Content activeColor="secondary">
                    <Navbar.Item><Button auto bordered color="gradient" onClick={signIn}><Link color="text" onClick={signIn}>Sign In</Link></Button></Navbar.Item>
                </Navbar.Content>
            </Navbar>
            <Spacer y={3}/>
        <Text h1 css={{"text-align":"center"}}>Please sign in to slack before continuing</Text>
        <Spacer y={3}></Spacer>
        <Button onClick={signIn} css={{"margin":"auto"}} size="xl">Sign In</Button>
    </>
    )}
    let data=request("GET","http://127.0.0.1:5000/data?name="+session.user.name).body
    var all=JSON.parse(data)
    if (id){}else{var id=0}
    if (typeof id === typeof "") {var id = parseInt(id)}
    var id = id%(all['all'].length)
    if (all['status']==='error') {return(<><Text>Please fill up the survey form</Text></>)}
    var resp=all['all'][id]
    const Name=resp['name']
    const colorName=resp['color']
    const sportsName=resp['sport']
    const musicGenre=resp['music']
    const drinkName=resp['drink']
    const match=resp['match']
    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <Navbar isBordered isCompact variant="sticky">
                <Navbar.Brand>
                <Text h3 css={{ textGradient: "45deg, $purple600 -20%, $red600 100%"}}>SocialHub</Text>
                </Navbar.Brand>
                <Navbar.Content activeColor="secondary">
                    <Navbar.Item><Button auto bordered color="gradient" onClick={signOut}><Link color="text" onClick={signOut}>Logout</Link></Button></Navbar.Item>
                </Navbar.Content>
            </Navbar>
            <Spacer y={3}/>
            <Container>
                <Avatar size='' id="photo" bordered color='gradient' src={resp['image']} css={{size: "300px", "margin-left": "auto", "margin-right": "auto"}}/>
                <Spacer y={2}/>
                <Card isHoverable isPressable css={{"maxWidth":"650px", bgBlur: "#0f111466", "margin-left": "auto", "margin-right": "auto" }}>
                    <Card.Header>
                        <Text h2 color='secondary' id="match" css={{ textGradient: "45deg, $purple600 -20%, $red600 100%"}}>{Name} : {match}% Match</Text>
                    </Card.Header>
                    <Divider/>
                    <Card.Body>
                        <Text h4 color='secondary' id="favs">My favorite color is {colorName}, I play {sportsName}, Listen to {musicGenre} and I drink {drinkName}. Come find me!</Text>
                    </Card.Body>
                </Card>
                <Spacer y={2}/>
                <Button bordered color="gradient" size='md' css={{"margin-left": "auto", "margin-right": "auto"}}>
                    <Link id="slack" href={resp['slack']}>Contact Me!</Link>
                </Button>
                <Spacer y={1}></Spacer>
                <Button id="next" bordered color="gradient" size='md' css={{"margin-left": "auto", "margin-right": "auto"}} onClick={() => {
                    if (router.query['id']){var id=parseInt(router.query['id'])}else{var id=0}
                    router.push({
                        pathname: '/',
                        query: { id: id+1 }
                    }, 
                    undefined, { shallow: true }
                    )
                }}>
                    Next
                </Button>
                <footer></footer>
            </Container>
        </>
    )
}