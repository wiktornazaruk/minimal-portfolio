<script>
    import { Container } from '@sveltestrap/sveltestrap';
    export let contact;
</script>

<section id="contact">
    <Container md>
        <h1>Contact</h1>
        <div class="divider"></div>
        <p>If you'd like to get in touch, you can reach me using the following methods.</p>
        <div class="contact-method-wrapper">
            <div class="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="56px" height="56px" viewBox="0 0 24 24"><path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/></svg>            
            </div>
            <div class="contact-text-wrapper">
                <h2>Email</h2> 
                <a href="mailto:{contact.email}">{contact.email}</a>
            </div>
        </div>
        <div class="contact-method-wrapper">
            <div class="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="56px" height="56px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
            </div>
            <div class="contact-text-wrapper">
                <h2>Github</h2>
                <a href={contact.github}>{contact.github}</a>
            </div>
        </div>
    </Container>  
</section>

<style>
    h2 {
        display: block;
        font-size: 24px;
    }

    .contact-method-wrapper {
        display: flex;
        align-items: flex-start;
        margin-bottom: 24px;
    }

    p {
        color: var(--black);
    }

    a {
        color: var(--black);
        text-decoration: none;
    }
    .icon-wrapper {
        display: inline-block;
        margin-right: 8px;
    }

    .contact-text-wrapper {
        display: inline-block;
    }

</style>