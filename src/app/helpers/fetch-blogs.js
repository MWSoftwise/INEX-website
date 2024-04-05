const url = 'https://graphql.contentful.com/content/v1/spaces/462g3ualxm53'

const TOKEN = 'cQwSYnVSVgPNjSSl1MwCkbDdIzNaSnAzsKD6c81A1Eo'

const fetchBlogs = async (params) => {
    const reqOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
            query: params,
        }),
    }

    const request = await fetch(url,reqOptions);
    const response = await request.json()

    return response;
}

export default fetchBlogs