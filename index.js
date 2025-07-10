exports.handler = async (event) => {
    let name = "Guest";

    if (event.queryStringParameters && event.queryStringParameters.name) {
        name = event.queryStringParameters.name;
    }

    if (event.body) {
        try {
            const body = JSON.parse(event.body);
            if (body.name) {
                name = body.name;
            }
        } catch (e) {
            console.log("Invalid body:", e);
        }
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify(`Hello, ${name}!`)
    };

    return response;
};
