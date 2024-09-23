<script>
    import Card from "$lib/components/Card.svelte";
    import { Container, Row, Col } from '@sveltestrap/sveltestrap';
    export let projects;
</script>

<section id="projects">
    <Container>
        <h2 class="mb-3">Projects</h2>
        <p class="mb-4">Here are a few projects I have worked on recently.</p>
        <Row class="g-4">
            {#each projects as project}
            <Col lg="6" md="6" sm="12" xs="12">
                <Card {project} />
            </Col>
            {/each}
        </Row>
    </Container>
</section>

<style>
    h2 {
        font-weight: 600;
    }
</style>