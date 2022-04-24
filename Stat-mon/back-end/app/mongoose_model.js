module.exports = mongoose => {
    const Standings = mongoose.model(
        "standings",
        mongoose.Schema(
            {
                title: String,
                description: String,
                published: Boolean
            }
        )
    );
    return Standings;
};