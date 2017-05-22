module.exports = mongoose => {
    const MemberSchema = new mongoose.Schema({
        mobile: { type: String },
        pwd: { type: String },
        status: { type: Number, default: 1 },
        lastAt: { type: Date, default: Date.now() }
    });
    return mongoose.model('Member', MemberSchema, 'member');
}