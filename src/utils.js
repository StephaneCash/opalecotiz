export const dateParserFunction = (date) => {
    let options = {
        hour: "2-digit", minute: "2-digit", second: "2-digit",
        weekday: "long", year: "numeric", month: "short", day: "numeric"
    };

    let timestamp = Date.parse(date);
    let dateParse = new Date(timestamp).toLocaleDateString('fr-FR', options);

    return dateParse.toString();
}

export const publishableKey = "pk_live_51MAGguJ2JAuxnWO5WCQ4eBsbyHiLejMAnj8TGHAQNkAlNWJqhqjpz9fNf5SmORylRWYDArJQGlZiRuJfxD79xcEA00YNLyC1Wd"
export const clientSecret = "sk_test_51MAGguJ2JAuxnWO5kx1cTp0UxqSudEYhMN9ILrIwrVUgdeR8j1OtCztr5T3xDwGpASUdLzhRVeODJKZILbWHtE6W005nHdB4yd"