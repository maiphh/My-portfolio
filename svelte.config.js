import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
            onError: 'ignore', // or 'ignore'
        },
	}
};

export default config;
