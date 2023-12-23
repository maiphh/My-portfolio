import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
            handleHttpError: (error) => {
                // Handle 404 errors during prerendering
                console.error('Prerendering error:', error);
        	 },
		},
	}
};

export default config;
