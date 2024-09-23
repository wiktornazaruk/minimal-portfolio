<script>
    import { Container, Button } from '@sveltestrap/sveltestrap';
    export let personal;
</script>

<section id="intro">
    <Container md>
        <h1>Hi, I'm {personal.first_name}</h1>
        <span>{personal.role} from {personal.location}</span>
        <p>{personal.introduction}</p>
        <div id="btn-wrapper">
            <Button color="dark" href="/about">More Information →</Button>
        </div>
        <div class="divider"></div>
    </Container>
</section>

<style>
    h1 {
        margin: 0;
    }
    span {
        font-size: 24px;
        /* font-weight: 300; */
    }
    p {
        font-size: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    #btn-wrapper {
        font-family: JetBrainsMono-Bold;
    }

</style>