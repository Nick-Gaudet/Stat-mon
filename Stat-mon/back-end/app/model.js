module.exports = mongoose => {
    const Account = mongoose.model(
        "accounts",
        mongoose.Schema(
            {
                email: String,
                name: String,
                password: String,
            
            }
        )
    );
    return Account;
};