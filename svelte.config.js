// svelte.config.js
import adapter from '@sveltejs/adapter-vercel';

export default {
    kit: {
        // other configurations
        adapter: adapter(),
        prerender: {
            onError: 'continue', // or 'ignore'
        },
    },
};
