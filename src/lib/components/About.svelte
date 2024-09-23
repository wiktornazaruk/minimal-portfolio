<script>
    import { Container } from '@sveltestrap/sveltestrap';
    export let about;
    export let contact;
</script>

<section id="about">
    <Container md>
        <h1>About Me</h1>
        <div class="divider"></div>
        {#each about.paragraphs.slice(0, -1) as p}
            <p>{p}</p>
        {/each}
        <p style="margin-bottom: 0;">{about.paragraphs[about.paragraphs.length - 1]}</p>

        <a href='mailto:{contact.email}' class="email">{contact.email}</a>
        
        <h2>Experience</h2>
        <div class="item-list">
            {#each about.experience as e}
                <div class="list-item">
                    <img src={e.photo.src} alt={e.photo.alt}>
                    <div class="info">
                        <span class="primary">{e.company}</span>
                        <span class="secondary">{e.jobTitle}</span>
                        <div class="date">
                            <span>{e.startDate} → {e.endDate}</span>
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        <h2>Education</h2>
        <div class="item-list">
            {#each about.education as e, i}
                <div class="list-item" style={i === (about.education.length - 1) ? 'border: none' : ''}>
                    <img src={e.photo.src} alt={e.photo.alt}>
                    <div class="info">
                        <span class="primary">{e.school}</span>
                        <span class="secondary">{e.degree}</span>
                        <div class="date">
                            <span>{e.startDate} → {e.endDate}</span>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </Container>
</section>

<style>
    .divider {
        border-top: 1px solid var(--light-gray);
        margin-top: 36px;
        margin-bottom: 36px;
    }

    .email {
        color: var(--black);
    }

    h2 {
        font-weight: bold;
        margin-top: 40px;
        margin-bottom: 20px;
    }

    p {
        font-size: 18px;
        margin-bottom: 24px;
    }

    .item-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .list-item {
        display: flex;
        align-items: flex-start;
        padding: 16px 0;
        border-bottom: 1px solid var(--light-gray);
    }

    img {
        width: 56px;
        height: 56px;
        border-radius: 12px;
        margin-right: 16px;
    }

    .info {
        flex: 1;
    }

    span {
        display: block;
    }

    .primary {
        color: var(--slate-black);
        font-size: 20px;
        font-weight: 600;
    }

    .secondary {
        color: var(--dark-grayish-blue);
        font-size: 18px;
        margin-top: 4px;
    }

    .date span{
        color: var(--gray);
        font-family: JetBrainsMono-Regular;
        font-size: 14px;
        margin-top: 8px;
    }
</style>